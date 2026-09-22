import { BUSINESS } from "@/lib/business";
import type { Lead } from "@/lib/leads/types";

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

function rows(fields: Array<[string, string | undefined]>): string {
  return fields
    .filter(([, v]) => v)
    .map(
      ([k, v]) => `<tr>
        <td style="padding:8px 12px;font-weight:600;color:#494B4F;white-space:nowrap;vertical-align:top">${esc(k)}</td>
        <td style="padding:8px 12px;color:#0C1015">${esc(v!).replace(/\n/g, "<br/>")}</td>
      </tr>`,
    )
    .join("");
}

export function leadSubject(lead: Lead): string {
  const what = lead.type === "quote" ? "Quote request" : "Contact";
  const urgent = lead.urgency === "emergency" ? "URGENT " : "";
  return `${urgent}${what}: ${lead.name}${lead.services[0] ? ` (${lead.services[0]})` : ""}`;
}

export function leadFields(lead: Lead, photoLinks: string[]): Array<[string, string | undefined]> {
  const home = lead.homeDetails ? Object.entries(lead.homeDetails).map(([k, v]) => `${k}: ${v}`).join("\n") : undefined;
  return [
    ["Name", lead.name],
    ["Phone", lead.phone],
    ["Email", lead.email],
    ["ZIP", lead.zip],
    ["Services", lead.services.join(", ") || undefined],
    ["Urgency", lead.urgency],
    ["Property", lead.propertyType],
    ["Home details", home],
    ["Budget", lead.budget],
    ["Message", lead.message],
    ["Photos", photoLinks.length ? photoLinks.join("\n") : undefined],
    ["Submitted from", lead.sourceUrl],
    ["Lead ID", lead.id],
  ];
}

export function leadHtml(lead: Lead, photoLinks: string[]): string {
  return `<div style="font-family:Roboto,Helvetica,Arial,sans-serif;max-width:640px;margin:0 auto;color:#0C1015">
    <div style="background:#0C1015;padding:18px 24px;border-radius:12px 12px 0 0">
      <span style="display:inline-block;width:14px;height:14px;background:#E82820;border-radius:3px;vertical-align:middle;margin-right:10px"></span>
      <span style="color:#fff;font-size:18px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;vertical-align:middle">${esc(BUSINESS.name)}</span>
    </div>
    <div style="border:1px solid #E9E2D8;border-top:none;border-radius:0 0 12px 12px;padding:24px">
      <h1 style="margin:0 0 16px;font-size:20px">${esc(leadSubject(lead))}</h1>
      <table style="width:100%;border-collapse:collapse;font-size:15px">${rows(leadFields(lead, photoLinks))}</table>
      <p style="margin:24px 0 0;font-size:12px;color:#747C89">Reply to this email to answer ${esc(lead.name)} directly.</p>
    </div>
  </div>`;
}

export function leadText(lead: Lead, photoLinks: string[]): string {
  return leadFields(lead, photoLinks)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
}
