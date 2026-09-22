const ALLOWED = new Map([
  ["image/jpeg", "jpg"],
  ["image/png", "png"],
  ["image/webp", "webp"],
  ["image/heic", "heic"],
  ["image/heif", "heif"],
]);
export const MAX_PHOTO_BYTES = 8 * 1024 * 1024;
export const MAX_PHOTOS = 5;

/** Stores accepted photos under quotes/<leadId>/; skips anything oversized or not an image. */
export async function storePhotos(bucket: R2Bucket, leadId: string, files: File[]): Promise<string[]> {
  const keys: string[] = [];
  let n = 0;
  for (const file of files.slice(0, MAX_PHOTOS)) {
    const ext = ALLOWED.get(file.type);
    if (!ext || file.size === 0 || file.size > MAX_PHOTO_BYTES) continue;
    n += 1;
    const key = `quotes/${leadId}/${n}.${ext}`;
    try {
      await bucket.put(key, await file.arrayBuffer(), { httpMetadata: { contentType: file.type } });
      keys.push(key);
    } catch (error) {
      console.error("[lead-photo-upload]", key, error);
    }
  }
  return keys;
}

async function hmac(secret: string, value: string): Promise<string> {
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(value));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function signPhotoKey(secret: string, key: string): Promise<string> {
  return hmac(secret, key);
}

export async function verifyPhotoKey(secret: string, key: string, token: string): Promise<boolean> {
  const expected = await hmac(secret, key);
  if (expected.length !== token.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) diff |= expected.charCodeAt(i) ^ token.charCodeAt(i);
  return diff === 0;
}
