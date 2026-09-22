import { BUSINESS } from "@/lib/business";

export function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json; charset=utf-8" } });
}

export function clientIp(request: Request): string {
  return request.headers.get("cf-connecting-ip") ?? request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
}

type RateLimiter = { limit(options: { key: string }): Promise<{ success: boolean }> };

/** Workers Rate Limiting binding; skipped when the binding isn't available (local dev). */
export async function rateLimited(env: Record<string, unknown>, key: string): Promise<boolean> {
  const limiter = env.LEAD_RATE_LIMIT as RateLimiter | undefined;
  if (!limiter || typeof limiter.limit !== "function") return false;
  try {
    const { success } = await limiter.limit({ key });
    return !success;
  } catch {
    return false;
  }
}

export const FALLBACK_MESSAGE = `We couldn't submit that right now. Call us at ${BUSINESS.phone.display} and we'll take it over the phone.`;
export const MAX_BODY_BYTES = 45 * 1024 * 1024;
