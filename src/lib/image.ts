/**
 * Image paths in data files stay as `/images/...`. At render time the CDN
 * origin is prefixed when PUBLIC_CDN_URL is set; otherwise files are served
 * from `public/`.
 */
const CDN_URL = (import.meta.env.PUBLIC_CDN_URL as string | undefined)?.replace(/\/$/, "");

export function cdnUrl(path: string): string {
  if (!path) return path;
  if (/^https?:\/\//i.test(path) || path.startsWith("data:")) return path;
  if (!CDN_URL) return path;
  return `${CDN_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function absoluteImageUrl(path: string, siteUrl: string): string {
  const resolved = cdnUrl(path);
  if (/^https?:\/\//i.test(resolved)) return resolved;
  return new URL(resolved, siteUrl).toString();
}
