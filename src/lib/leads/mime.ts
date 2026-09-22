/** Minimal RFC 5322 message builder for the raw EmailMessage path (no mimetext dependency). */
export function buildMime(opts: { from: string; fromName: string; to: string; replyTo?: string; subject: string; text: string; html: string }): string {
  const boundary = `----=_hw_${crypto.randomUUID().replace(/-/g, "")}`;
  const encodeHeader = (s: string) => `=?UTF-8?B?${btoa(unescape(encodeURIComponent(s)))}?=`;
  const b64 = (s: string) => btoa(unescape(encodeURIComponent(s))).replace(/(.{76})/g, "$1\r\n");
  const headers = [
    `From: ${encodeHeader(opts.fromName)} <${opts.from}>`,
    `To: <${opts.to}>`,
    opts.replyTo ? `Reply-To: <${opts.replyTo}>` : "",
    `Subject: ${encodeHeader(opts.subject)}`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: <${crypto.randomUUID()}@${opts.from.split("@")[1]}>`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
  ].filter(Boolean);
  const part = (type: string, body: string) =>
    [`--${boundary}`, `Content-Type: ${type}; charset=UTF-8`, "Content-Transfer-Encoding: base64", "", b64(body), ""].join("\r\n");
  return [headers.join("\r\n"), "", part("text/plain", opts.text), part("text/html", opts.html), `--${boundary}--`, ""].join("\r\n");
}
