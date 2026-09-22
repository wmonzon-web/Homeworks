export const prerender = false;

import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";
import { insertLead } from "@/lib/leads/db";
import { deliverLead } from "@/lib/leads/deliver";
import { FALLBACK_MESSAGE, MAX_BODY_BYTES, clientIp, json, rateLimited } from "@/lib/leads/request";
import { storePhotos } from "@/lib/leads/storage";
import type { Lead } from "@/lib/leads/types";
import { looksLikeBot, normalizePhone, readField, validateEmail, validateName, validatePhone, validateZip } from "@/lib/leads/validate";
import { SERVICE_CATALOG } from "@/lib/data/services/catalog";

const KNOWN_SERVICES = new Set([...SERVICE_CATALOG.map((s) => s.slug), "other"]);

export const POST: APIRoute = async ({ request }) => {
  const length = Number(request.headers.get("content-length") ?? 0);
  if (length > MAX_BODY_BYTES) return json({ message: "Photos are too large. Keep each under 8 MB." }, 413);

  const ip = clientIp(request);
  if (await rateLimited(env as unknown as Record<string, unknown>, ip)) {
    return json({ message: "Too many requests. Try again in a minute." }, 429);
  }

  const form = await request.formData();
  if (looksLikeBot(form)) return json({ ok: true, id: "ignored" });

  const name = readField(form, "name");
  const email = readField(form, "email").toLowerCase();
  const phone = readField(form, "phone");
  const zip = readField(form, "zip");
  const services = form.getAll("services").map(String).map((s) => s.trim()).filter((s) => KNOWN_SERVICES.has(s));

  const fieldErrors: Record<string, string> = {};
  const nameError = validateName(name);
  const emailError = validateEmail(email);
  const phoneError = validatePhone(phone);
  const zipError = validateZip(zip);
  if (nameError) fieldErrors.name = nameError;
  if (emailError) fieldErrors.email = emailError;
  if (phoneError) fieldErrors.phone = phoneError;
  if (zipError) fieldErrors.zip = zipError;
  if (services.length === 0) fieldErrors.services = "Pick at least one service.";
  if (Object.keys(fieldErrors).length) return json({ message: "Check the highlighted fields.", fieldErrors }, 400);

  const id = crypto.randomUUID();
  const photos = form.getAll("photos").filter((f): f is File => f instanceof File);
  const photoKeys = env.UPLOADS ? await storePhotos(env.UPLOADS, id, photos) : [];

  const homeDetails: Record<string, string> = {};
  for (const key of ["ownership", "sqft", "product"]) {
    const v = readField(form, key);
    if (v) homeDetails[key] = v;
  }

  const lead: Lead = {
    id,
    type: "quote",
    createdAt: new Date().toISOString(),
    name,
    email,
    phone: normalizePhone(phone),
    zip: zip || undefined,
    services,
    urgency: readField(form, "urgency") || undefined,
    propertyType: readField(form, "propertyType") || undefined,
    homeDetails: Object.keys(homeDetails).length ? homeDetails : undefined,
    budget: readField(form, "budget") || undefined,
    message: readField(form, "notes") || undefined,
    photoKeys,
    sourceUrl: readField(form, "source") || request.headers.get("referer") || "",
    userAgent: request.headers.get("user-agent") ?? undefined,
    ip,
  };

  try {
    await insertLead(env.DB, lead);
  } catch (error) {
    console.error("[lead-insert]", error);
    return json({ message: FALLBACK_MESSAGE }, 500);
  }

  await deliverLead(env as unknown as Parameters<typeof deliverLead>[0], lead);
  return json({ ok: true, id });
};
