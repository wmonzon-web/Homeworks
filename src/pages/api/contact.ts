export const prerender = false;

import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";
import { insertLead } from "@/lib/leads/db";
import { deliverLead } from "@/lib/leads/deliver";
import { FALLBACK_MESSAGE, clientIp, json, rateLimited } from "@/lib/leads/request";
import type { Lead } from "@/lib/leads/types";
import { looksLikeBot, normalizePhone, readField, validateEmail, validateMessage, validateName, validatePhone } from "@/lib/leads/validate";

export const POST: APIRoute = async ({ request }) => {
  const ip = clientIp(request);
  if (await rateLimited(env as unknown as Record<string, unknown>, ip)) {
    return json({ message: "Too many requests. Try again in a minute." }, 429);
  }

  const form = await request.formData();
  if (looksLikeBot(form)) return json({ ok: true, id: "ignored" });

  const name = readField(form, "name");
  const email = readField(form, "email").toLowerCase();
  const phone = readField(form, "phone");
  const message = readField(form, "message");

  const fieldErrors: Record<string, string> = {};
  const e1 = validateName(name);
  const e2 = validateEmail(email);
  const e3 = validatePhone(phone);
  const e4 = validateMessage(message);
  if (e1) fieldErrors.name = e1;
  if (e2) fieldErrors.email = e2;
  if (e3) fieldErrors.phone = e3;
  if (e4) fieldErrors.message = e4;
  if (Object.keys(fieldErrors).length) return json({ message: "Check the highlighted fields.", fieldErrors }, 400);

  const lead: Lead = {
    id: crypto.randomUUID(),
    type: "contact",
    createdAt: new Date().toISOString(),
    name,
    email,
    phone: normalizePhone(phone),
    services: [],
    message,
    photoKeys: [],
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
  return json({ ok: true, id: lead.id });
};
