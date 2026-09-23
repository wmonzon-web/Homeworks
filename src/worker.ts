import { BUSINESS } from "./lib/business";
import { SERVICE_CATALOG } from "./lib/data/services/catalog";

const MAX_BODY_BYTES = 64 * 1024;
const KNOWN_SERVICES = new Set([...SERVICE_CATALOG.map((service) => service.slug), "other"]);
type WorkerEnv = {
  DB: { prepare(query: string): { bind(...values: (string | null)[]): { run(): Promise<unknown> } } };
  LEAD_RATE_LIMIT: { limit(options: { key: string }): Promise<{ success: boolean }> };
  ASSETS: { fetch(request: Request): Promise<Response> };
  EMAIL?: { send(message: { from: string; to: string; subject: string; text: string }): Promise<void> };
};

type Quote = {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  services: string[];
  urgency: string;
  propertyType: string;
  ownership: string;
  sqft: string;
  budget: string;
  notes: string;
  product: string;
  source: string;
};

function json(body: unknown, status = 200): Response {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

function field(form: FormData, name: string): string {
  const value = form.get(name);
  return typeof value === "string" ? value.trim() : "";
}

async function boundedFormData(request: Request): Promise<FormData | null> {
  if (!request.body) return null;
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BODY_BYTES) {
        await reader.cancel();
        return null;
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }
  const body = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return new Request(request.url, { method: "POST", headers: { "content-type": request.headers.get("content-type") ?? "" }, body }).formData();
}

function validate(form: FormData): { quote: Quote; errors: Record<string, string> } {
  const quote: Quote = {
    name: field(form, "name"),
    email: field(form, "email").toLowerCase(),
    phone: field(form, "phone"),
    address: field(form, "address"),
    zip: field(form, "zip"),
    services: [...new Set(form.getAll("services").filter((value): value is string => typeof value === "string").map((value) => value.trim()).filter((value) => KNOWN_SERVICES.has(value)))],
    urgency: field(form, "urgency"),
    propertyType: field(form, "propertyType"),
    ownership: field(form, "ownership"),
    sqft: field(form, "sqft"),
    budget: field(form, "budget"),
    notes: field(form, "notes"),
    product: field(form, "product"),
    source: field(form, "source"),
  };
  const errors: Record<string, string> = {};
  if (quote.name.length < 2 || quote.name.length > 120) errors.name = "Enter your name (2–120 characters).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(quote.email) || quote.email.length > 254) errors.email = "Enter a valid email address.";
  if (quote.phone.replace(/\D/g, "").length < 10 || quote.phone.length > 40) errors.phone = "Enter a 10-digit phone number.";
  if (!quote.address || quote.address.length > 200) errors.address = "Enter the property address (up to 200 characters).";
  if (!/^\d{5}$/.test(quote.zip)) errors.zip = "Enter the 5-digit ZIP of the home.";
  if (!quote.services.length) errors.services = "Choose at least one service.";
  if (quote.notes.length > 4000) errors.notes = "Keep project notes under 4,000 characters.";
  for (const key of ["urgency", "propertyType", "ownership", "sqft", "budget", "product", "source"] as const) {
    if (quote[key].length > 200) errors[key] = "This answer is too long.";
  }
  return { quote, errors };
}

function notificationText(id: string, quote: Quote): string {
  return [
    `New Homeworks quote request ${id}`,
    `Name: ${quote.name}`,
    `Email: ${quote.email}`,
    `Phone: ${quote.phone}`,
    `Property address: ${quote.address}`,
    `ZIP: ${quote.zip}`,
    `Services: ${quote.services.join(", ")}`,
    `Timing: ${quote.urgency || "Not specified"}`,
    `Property type: ${quote.propertyType || "Not specified"}`,
    `Ownership: ${quote.ownership || "Not specified"}`,
    `Budget: ${quote.budget || "Not specified"}`,
    `Notes: ${quote.notes || "None"}`,
  ].join("\n");
}

async function quoteResponse(request: Request, env: WorkerEnv): Promise<Response> {
  if (request.method !== "POST") return json({ message: "Method not allowed." }, 405);
  const origin = request.headers.get("origin");
  if (origin !== new URL(request.url).origin) return json({ message: "Invalid request origin." }, 403);
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.startsWith("multipart/form-data;")) return json({ message: "Expected form data." }, 415);
  if (Number(request.headers.get("content-length") ?? 0) > MAX_BODY_BYTES) return json({ message: "Request is too large." }, 413);

  const ip = request.headers.get("cf-connecting-ip") ?? "local";
  const rate = await env.LEAD_RATE_LIMIT.limit({ key: ip });
  if (!rate.success) return json({ message: "Too many requests. Try again in a minute." }, 429);

  let form: FormData | null;
  try {
    form = await boundedFormData(request);
  } catch {
    return json({ message: "Invalid form data." }, 400);
  }
  if (!form) return json({ message: "Request is too large." }, 413);
  if (field(form, "website")) return json({ ok: true, id: "ignored" });
  const renderedAt = Number(field(form, "t"));
  if (Number.isFinite(renderedAt) && Date.now() - renderedAt < 3000) return json({ ok: true, id: "ignored" });

  const { quote, errors } = validate(form);
  if (Object.keys(errors).length) return json({ message: "Check the highlighted fields.", fieldErrors: errors }, 400);

  const id = crypto.randomUUID();
  try {
    await env.DB.prepare(`INSERT INTO quote_leads
      (id, created_at, name, email, phone, address, zip, services, urgency, property_type, ownership, sqft, budget, notes, product, source_url, user_agent, ip)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`)
      .bind(id, new Date().toISOString(), quote.name, quote.email, quote.phone, quote.address, quote.zip,
        JSON.stringify(quote.services), quote.urgency, quote.propertyType, quote.ownership, quote.sqft,
        quote.budget, quote.notes, quote.product, quote.source,
        request.headers.get("user-agent"), ip).run();
  } catch (error) {
    console.error("Quote lead insert failed", error);
    return json({ message: "We couldn't save your request. Please call us instead." }, 500);
  }

  let notificationStatus = "pending_setup";
  let notificationError: string | null = null;
  const email = env.EMAIL;
  if (email) {
    try {
      await email.send({
        from: BUSINESS.email,
        to: BUSINESS.email,
        subject: `Homeworks quote request: ${quote.name}`,
        text: notificationText(id, quote),
      });
      notificationStatus = "sent";
    } catch (error) {
      notificationStatus = "failed";
      notificationError = error instanceof Error ? error.message.slice(0, 500) : "Unknown email error";
      console.error("Quote notification failed", error);
    }
  }
  try {
    await env.DB.prepare("UPDATE quote_leads SET notification_status = ?, notification_error = ? WHERE id = ?")
      .bind(notificationStatus, notificationError, id).run();
  } catch (error) {
    console.error("Quote notification status update failed", error);
  }
  return json({ ok: true, id });
}

export default {
  async fetch(request: Request, env: WorkerEnv): Promise<Response> {
    const path = new URL(request.url).pathname;
    if (path === "/api/quote") return quoteResponse(request, env);
    if (path.startsWith("/api/")) return json({ message: "Not found." }, 404);
    return env.ASSETS.fetch(request);
  },
};
