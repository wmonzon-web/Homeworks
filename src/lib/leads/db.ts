import type { Lead } from "@/lib/leads/types";

export async function insertLead(db: D1Database, lead: Lead): Promise<void> {
  await db
    .prepare(
      `INSERT INTO leads (id, type, created_at, name, email, phone, zip, services, urgency, property_type,
        home_details, budget, message, photo_keys, source_url, user_agent, ip)
       VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12, ?13, ?14, ?15, ?16, ?17)`,
    )
    .bind(
      lead.id,
      lead.type,
      lead.createdAt,
      lead.name,
      lead.email,
      lead.phone,
      lead.zip ?? null,
      JSON.stringify(lead.services),
      lead.urgency ?? null,
      lead.propertyType ?? null,
      lead.homeDetails ? JSON.stringify(lead.homeDetails) : null,
      lead.budget ?? null,
      lead.message ?? null,
      JSON.stringify(lead.photoKeys),
      lead.sourceUrl,
      lead.userAgent ?? null,
      lead.ip ?? null,
    )
    .run();
}

export async function recordEmailStatus(
  db: D1Database,
  id: string,
  status: "sent" | "failed" | "skipped",
  error?: string,
): Promise<void> {
  await db
    .prepare(`UPDATE leads SET email_status = ?1, email_error = ?2 WHERE id = ?3`)
    .bind(status, error ?? null, id)
    .run();
}
