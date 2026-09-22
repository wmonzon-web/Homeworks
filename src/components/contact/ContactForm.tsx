import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/business";
import { FIELD_CLASS, LABEL_CLASS, TEXTAREA_CLASS } from "@/lib/ui";

const field = FIELD_CLASS;

type Values = { name: string; email: string; phone: string; message: string };

export default function ContactForm() {
  const [values, setValues] = useState<Values>({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Partial<Values>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Values, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [renderedAt] = useState(() => Date.now());

  const validate = (v: Values): Partial<Values> => {
    const e: Partial<Values> = {};
    if (v.name.trim().length < 2) e.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Enter a valid email like name@example.com.";
    if (v.phone.replace(/\D/g, "").length < 10) e.phone = "Enter a 10-digit phone number.";
    if (v.message.trim().length < 20) e.message = "Tell us a little more (at least 20 characters).";
    return e;
  };

  const set = (key: keyof Values, value: string) => {
    const next = { ...values, [key]: value };
    setValues(next);
    if (touched[key]) setErrors(validate(next));
  };
  const blur = (key: keyof Values) => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validate(values));
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    const e = validate(values);
    setErrors(e);
    setTouched({ name: true, email: true, phone: true, message: true });
    if (Object.keys(e).length) return;
    setSubmitting(true);
    setFormError(null);
    const form = new FormData();
    Object.entries(values).forEach(([k, v]) => form.set(k, v));
    form.set("website", "");
    form.set("t", String(renderedAt));
    form.set("source", window.location.href);
    try {
      const res = await fetch("/api/contact", { method: "POST", body: form });
      const body = (await res.json().catch(() => ({}))) as { message?: string; fieldErrors?: Partial<Values> };
      if (!res.ok) {
        if (body.fieldErrors) setErrors(body.fieldErrors);
        throw new Error(body.message || "Something went wrong.");
      }
      window.location.assign("/thank-you?type=contact");
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "Something went wrong.");
      setSubmitting(false);
    }
  };

  const input = (key: keyof Values, props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input
      id={`c-${key}`}
      className={field}
      value={values[key]}
      onChange={(e) => set(key, e.target.value)}
      onBlur={() => blur(key)}
      aria-invalid={!!errors[key]}
      aria-describedby={errors[key] ? `c-${key}-error` : undefined}
      {...props}
    />
  );

  return (
    <form onSubmit={submit} noValidate className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="c-name" className={LABEL_CLASS}>Name</label>
          {input("name", { autoComplete: "name" })}
          {errors.name && <p id="c-name-error" className="text-sm text-destructive">{errors.name}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="c-phone" className={LABEL_CLASS}>Phone</label>
          {input("phone", { type: "tel", autoComplete: "tel" })}
          {errors.phone && <p id="c-phone-error" className="text-sm text-destructive">{errors.phone}</p>}
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="c-email" className={LABEL_CLASS}>Email</label>
        {input("email", { type: "email", autoComplete: "email" })}
        {errors.email && <p id="c-email-error" className="text-sm text-destructive">{errors.email}</p>}
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="c-message" className={LABEL_CLASS}>How can we help?</label>
        <textarea
          id="c-message"
          rows={5}
          className={TEXTAREA_CLASS}
          value={values.message}
          onChange={(e) => set("message", e.target.value)}
          onBlur={() => blur("message")}
          onKeyDown={(e) => { if ((e.metaKey || e.ctrlKey) && e.key === "Enter") (e.currentTarget.form as HTMLFormElement).requestSubmit(); }}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "c-message-error" : undefined}
        />
        {errors.message && <p id="c-message-error" className="text-sm text-destructive">{errors.message}</p>}
      </div>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      {formError && <p role="alert" className="rounded-lg border-l-4 border-destructive bg-destructive/5 p-4 text-sm text-ink">{formError}</p>}
      <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" disabled={submitting}>{submitting ? "Sending…" : "Send message"}</Button>
        <p className="text-sm text-body">Or call {BUSINESS.phone.display}.</p>
      </div>
    </form>
  );
}
