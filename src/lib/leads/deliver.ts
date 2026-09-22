import { BUSINESS } from "@/lib/business";
import { leadHtml, leadSubject, leadText } from "@/lib/leads/email";
import { recordEmailStatus } from "@/lib/leads/db";
import { signPhotoKey } from "@/lib/leads/storage";
import type { DeliveryResult, Lead } from "@/lib/leads/types";

/** Cloudflare Email Service's object-form send; typed loosely so older type packages don't block the build. */
type EmailSender = {
  send(message: {
    from: { name?: string; addr: string } | string;
    to: string | string[];
    replyTo?: string;
    subject: string;
    html?: string;
    text?: string;
  }): Promise<unknown>;
};

export interface LeadEnv {
  DB: D1Database;
  EMAIL?: unknown;
  LEAD_FROM?: string;
  LEAD_TO?: string;
  PHOTO_LINK_SECRET?: string;
}

async function photoLinks(env: LeadEnv, lead: Lead): Promise<string[]> {
  if (!env.PHOTO_LINK_SECRET) return lead.photoKeys.map((k) => `(R2) ${k}`);
  return Promise.all(
    lead.photoKeys.map(async (key) => `${BUSINESS.siteUrl}/api/photo/${key}?t=${await signPhotoKey(env.PHOTO_LINK_SECRET!, key)}`),
  );
}

async function emailDeliverer(env: LeadEnv, lead: Lead): Promise<DeliveryResult> {
  const sender = env.EMAIL as EmailSender | undefined;
  if (!sender || typeof sender.send !== "function" || !env.LEAD_TO || !env.LEAD_FROM) {
    console.info("[lead-email] EMAIL binding not configured; lead stored only", lead.id);
    return { channel: "email", ok: false, error: "not-configured" };
  }
  const links = await photoLinks(env, lead);
  await sender.send({
    from: { name: `${BUSINESS.name} website`, addr: env.LEAD_FROM },
    to: env.LEAD_TO,
    replyTo: lead.email,
    subject: leadSubject(lead),
    html: leadHtml(lead, links),
    text: leadText(lead, links),
  });
  return { channel: "email", ok: true };
}

/**
 * Runs every deliverer, never throws, and records the email outcome on the row.
 * Add a webhook deliverer here later without touching the API routes.
 */
export async function deliverLead(env: LeadEnv, lead: Lead): Promise<DeliveryResult[]> {
  const results: DeliveryResult[] = [];
  for (const deliver of [emailDeliverer]) {
    try {
      results.push(await deliver(env, lead));
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.error("[lead-deliver]", message);
      results.push({ channel: deliver.name, ok: false, error: message });
    }
  }
  const email = results.find((r) => r.channel === "email");
  if (email) {
    const status = email.ok ? "sent" : email.error === "not-configured" ? "skipped" : "failed";
    await recordEmailStatus(env.DB, lead.id, status, email.ok ? undefined : email.error).catch((e) =>
      console.error("[lead-status]", e),
    );
  }
  return results;
}
