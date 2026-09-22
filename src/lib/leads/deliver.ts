import { BUSINESS } from "@/lib/business";
import { leadHtml, leadSubject, leadText } from "@/lib/leads/email";
import { recordEmailStatus } from "@/lib/leads/db";
import { buildMime } from "@/lib/leads/mime";
import { signPhotoKey } from "@/lib/leads/storage";
import type { DeliveryResult, Lead } from "@/lib/leads/types";

/**
 * The send_email binding. Newer runtimes accept a plain message object; the
 * documented API takes an EmailMessage(from, to, rawMime). We try the object
 * form first and fall back to a hand-built MIME message.
 */
type EmailSender = { send(message: unknown): Promise<unknown> };

async function sendWithFallback(sender: EmailSender, msg: { from: string; fromName: string; to: string; replyTo?: string; subject: string; html: string; text: string }) {
  try {
    await sender.send({ from: { name: msg.fromName, addr: msg.from }, to: msg.to, replyTo: msg.replyTo, subject: msg.subject, html: msg.html, text: msg.text });
    return;
  } catch (error) {
    if (!(error instanceof TypeError)) throw error;
  }
  const { EmailMessage } = (await import("cloudflare:email")) as { EmailMessage: new (from: string, to: string, raw: string) => unknown };
  await sender.send(new EmailMessage(msg.from, msg.to, buildMime(msg)));
}

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
  await sendWithFallback(sender, {
    from: env.LEAD_FROM,
    fromName: `${BUSINESS.name} website`,
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
  const deliverers: Array<[string, (env: LeadEnv, lead: Lead) => Promise<DeliveryResult>]> = [["email", emailDeliverer]];
  for (const [channel, deliver] of deliverers) {
    try {
      results.push(await deliver(env, lead));
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.error(`[lead-deliver:${channel}]`, message);
      results.push({ channel, ok: false, error: message });
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
