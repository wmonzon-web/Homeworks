export const prerender = false;

import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";
import { verifyPhotoKey } from "@/lib/leads/storage";

/** Serves a quote photo from the private bucket when the signed token matches. */
export const GET: APIRoute = async ({ params, url }) => {
  const key = params.key ?? "";
  const token = url.searchParams.get("t") ?? "";
  const secret = (env as unknown as { PHOTO_LINK_SECRET?: string }).PHOTO_LINK_SECRET;
  if (!secret || !key.startsWith("quotes/") || !token) return new Response("Not found", { status: 404 });
  if (!(await verifyPhotoKey(secret, key, token))) return new Response("Not found", { status: 404 });

  const object = await env.UPLOADS.get(key);
  if (!object) return new Response("Not found", { status: 404 });
  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("cache-control", "private, max-age=3600");
  headers.set("x-robots-tag", "noindex");
  return new Response(object.body, { headers });
};
