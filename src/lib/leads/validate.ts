const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface FieldErrors { [field: string]: string }

export function readField(form: FormData, key: string): string {
  const v = form.get(key);
  return typeof v === "string" ? v.trim() : "";
}

export function validateName(name: string): string | undefined {
  if (name.length < 2) return "Enter your name.";
  if (name.length > 120) return "That name is too long.";
}

export function validateEmail(email: string): string | undefined {
  if (!EMAIL_REGEX.test(email)) return "Enter a valid email like name@example.com.";
}

export function validatePhone(phone: string): string | undefined {
  if (phone.replace(/\D/g, "").length < 10) return "Enter a 10-digit phone number.";
}

export function validateZip(zip: string): string | undefined {
  if (zip && !/^\d{5}$/.test(zip)) return "Enter the 5-digit ZIP of the home.";
}

export function validateMessage(message: string, min = 20): string | undefined {
  if (message.length < min) return `Tell us a little more (at least ${min} characters).`;
  if (message.length > 4000) return "That's a bit long. Trim it to 4,000 characters.";
}

export function normalizePhone(phone: string): string {
  return phone.replace(/[^\d+]/g, "");
}

/** Bots fill the honeypot, or submit faster than a human could read the form. */
export function looksLikeBot(form: FormData, minMs = 3000): boolean {
  if (readField(form, "website")) return true;
  const t = Number(readField(form, "t"));
  return Number.isFinite(t) && t > 0 && Date.now() - t < minMs;
}
