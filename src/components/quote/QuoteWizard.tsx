import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { MOTION_EASE } from "@/lib/motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OptionCard } from "@/components/quote/OptionCard";
import { BUSINESS } from "@/lib/business";
import { SERVICE_CATALOG, SERVICE_CATEGORY_LABELS, SERVICE_CATEGORY_ORDER } from "@/lib/data/services/catalog";
import { BUDGET_OPTIONS, OWNERSHIP_OPTIONS, PROPERTY_TYPE_OPTIONS, URGENCY_OPTIONS } from "@/lib/leads/types";
import { cn } from "@/lib/utils";

interface Draft {
  services: string[];
  urgency: string;
  propertyType: string;
  ownership: string;
  sqft: string;
  budget: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  notes: string;
  product: string;
}

const EMPTY: Draft = { services: [], urgency: "", propertyType: "", ownership: "", sqft: "", budget: "", name: "", email: "", phone: "", address: "", zip: "", notes: "", product: "" };
const STEPS = ["Service", "Timing", "Your home", "Budget", "Contact"] as const;
const DRAFT_KEY = "hw-quote-draft";

const field =
  "h-12 w-full rounded-lg border border-input bg-white px-3.5 text-base text-ink placeholder:text-body/60 transition-[border-color,box-shadow] duration-150 focus-visible:border-ink focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ink/15 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/15";

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-ink">{label}</label>
      {children}
      {error && <p id={`${id}-error`} className="text-sm text-destructive">{error}</p>}
    </div>
  );
}

export default function QuoteWizard() {
  const reduceMotion = useReducedMotion();
  const pointerInteraction = useRef(false);
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [direction, setDirection] = useState(1);
  const [animateStep, setAnimateStep] = useState(false);
  const [draft, setDraft] = useState<Draft>(EMPTY);
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [renderedAt] = useState(() => Date.now());
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [ready, setReady] = useState(false);

  // Prefill from the hero form's query string, then from a saved draft.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    let next: Draft = { ...EMPTY };
    try {
      const saved = sessionStorage.getItem(DRAFT_KEY);
      if (saved) next = { ...next, ...(JSON.parse(saved) as Partial<Draft>) };
    } catch {}
    try {
      const address = sessionStorage.getItem("hw-quote-address");
      if (address) next.address = address;
      sessionStorage.removeItem("hw-quote-address");
    } catch {}
    const services = params.getAll("service").filter((service) => service === "other" || SERVICE_CATALOG.some((s) => s.slug === service));
    next.services = [...new Set([...next.services, ...services])];
    for (const key of ["address", "zip", "phone", "product"] as const) {
      const v = params.get(key);
      if (v) next[key] = v;
    }
    setDraft(next);
    if (services.length) setStep(1);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try { sessionStorage.setItem(DRAFT_KEY, JSON.stringify(draft)); } catch {}
  }, [draft, ready]);

  useEffect(() => {
    if (ready) headingRef.current?.focus({ preventScroll: false });
  }, [step, ready]);

  const update = <K extends keyof Draft>(key: K, value: Draft[K]) => setDraft((d) => ({ ...d, [key]: value }));
  useEffect(() => () => { if (advanceTimer.current) clearTimeout(advanceTimer.current); }, []);

  const move = (direction: number) => {
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    setDirection(direction);
    setAnimateStep(pointerInteraction.current && !reduceMotion);
    setStep((s) => Math.max(0, Math.min(s + direction, STEPS.length - 1)));
  };
  const next = () => move(1);
  const back = () => move(-1);
  const pick = (key: keyof Draft, value: string) => {
    update(key, value as never);
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    advanceTimer.current = setTimeout(next, reduceMotion || !pointerInteraction.current ? 0 : 150);
  };

  const grouped = useMemo(
    () =>
      SERVICE_CATEGORY_ORDER.map((category) => ({
        label: SERVICE_CATEGORY_LABELS[category],
        services: SERVICE_CATALOG.filter((s) => s.category === category),
      })),
    [],
  );

  const validateContact = () => {
    const e: Record<string, string> = {};
    if (draft.name.trim().length < 2) e.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(draft.email.trim())) e.email = "Enter a valid email like name@example.com.";
    if (draft.phone.replace(/\D/g, "").length < 10) e.phone = "Enter a 10-digit phone number.";
    if (!draft.address.trim()) e.address = "Enter the property address.";
    if (!/^\d{5}$/.test(draft.zip.trim())) e.zip = "Enter the 5-digit ZIP of the home.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateContact()) return;
    setSubmitting(true);
    setFormError(null);
    const form = new FormData();
    draft.services.forEach((s) => form.append("services", s));
    for (const key of ["urgency", "propertyType", "ownership", "sqft", "budget", "name", "email", "phone", "address", "zip", "notes", "product"] as const) {
      form.set(key, draft[key]);
    }
    form.set("website", "");
    form.set("t", String(renderedAt));
    form.set("source", window.location.href);
    try {
      const res = await fetch("/api/quote", { method: "POST", body: form });
      const body = (await res.json().catch(() => ({}))) as { message?: string; fieldErrors?: Record<string, string> };
      if (!res.ok) {
        if (body.fieldErrors) setErrors(body.fieldErrors);
        throw new Error(body.message || "Something went wrong.");
      }
      try { sessionStorage.removeItem(DRAFT_KEY); } catch {}
      window.location.assign("/thank-you?type=quote");
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "Something went wrong.");
      setSubmitting(false);
    }
  };

  const shouldAnimate = animateStep && !reduceMotion;
  const pct = Math.round(((step + 1) / STEPS.length) * 100);

  return (
    <form onPointerDownCapture={() => { pointerInteraction.current = true; }} onKeyDownCapture={() => { pointerInteraction.current = false; }} onSubmit={submit} noValidate className={cn("mx-auto max-w-2xl", !ready && "invisible")} aria-labelledby="wizard-heading">
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-body">
          <span className="tabular-nums">Step {step + 1} of {STEPS.length}</span>
          <span className="font-medium text-ink">{STEPS[step]}</span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-cream" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Progress">
          <motion.div initial={false} animate={{ scaleX: pct / 100 }} transition={{ duration: shouldAnimate ? 0.22 : 0, ease: MOTION_EASE }} className="h-full origin-left rounded-full bg-ink" />
        </div>
      </div>

      {step > 0 && (
        <Button type="button" variant="ghost" size="sm" onClick={back} className="mb-4 -ml-2">
          <ArrowLeft aria-hidden="true" /> Back
        </Button>
      )}

      <motion.div key={step} initial={shouldAnimate ? { opacity: 0, x: direction * 10 } : false} animate={{ opacity: 1, x: 0 }} transition={{ duration: shouldAnimate ? 0.2 : 0, ease: MOTION_EASE }}>
        {step === 0 && (
          <fieldset>
            <legend className="sr-only">Services</legend>
            <h2 id="wizard-heading" ref={headingRef} tabIndex={-1} className="text-3xl leading-[1.02] outline-none md:text-4xl">What needs doing?</h2>
            <p className="mt-2 text-body">Pick everything that applies. One crew, one visit.</p>
            <div className="mt-6 flex flex-col gap-6">
              {grouped.map((g) => (
                <div key={g.label}>
                  <p className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-brand-red">{g.label}</p>
                  <div className="mt-2 grid gap-2 sm:grid-cols-2">
                    {g.services.map((s) => (
                      <OptionCard
                        key={s.slug}
                        multi
                        label={s.shortName}
                        selected={draft.services.includes(s.slug)}
                        onSelect={() =>
                          update("services", draft.services.includes(s.slug) ? draft.services.filter((x) => x !== s.slug) : [...draft.services, s.slug])
                        }
                      />
                    ))}
                  </div>
                </div>
              ))}
              <OptionCard multi label="Something else" detail="Describe it on the last step." selected={draft.services.includes("other")} onSelect={() => update("services", draft.services.includes("other") ? draft.services.filter((x) => x !== "other") : [...draft.services, "other"])} />
            </div>
            <Button type="button" size="lg" className="mt-8" disabled={draft.services.length === 0} onClick={next}>
              Continue
            </Button>
          </fieldset>
        )}

        {step === 1 && (
          <fieldset>
            <legend className="sr-only">Timing</legend>
            <h2 id="wizard-heading" ref={headingRef} tabIndex={-1} className="text-3xl leading-[1.02] outline-none md:text-4xl">How soon?</h2>
            <div className="mt-6 grid gap-2">
              {URGENCY_OPTIONS.map((o) => (
                <OptionCard key={o.value} label={o.label} detail={o.detail} selected={draft.urgency === o.value} onSelect={() => pick("urgency", o.value)} />
              ))}
            </div>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset>
            <legend className="sr-only">Your home</legend>
            <h2 id="wizard-heading" ref={headingRef} tabIndex={-1} className="text-3xl leading-[1.02] outline-none md:text-4xl">Tell us about the home</h2>
            <p className="mt-6 font-heading text-sm font-bold uppercase tracking-[0.18em] text-brand-red">Property</p>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {PROPERTY_TYPE_OPTIONS.map((o) => (
                <OptionCard key={o.value} label={o.label} selected={draft.propertyType === o.value} onSelect={() => update("propertyType", o.value)} />
              ))}
            </div>
            <p className="mt-6 font-heading text-sm font-bold uppercase tracking-[0.18em] text-brand-red">Your relationship to it</p>
            <div className="mt-2 grid gap-2">
              {OWNERSHIP_OPTIONS.map((o) => (
                <OptionCard key={o.value} label={o.label} selected={draft.ownership === o.value} onSelect={() => update("ownership", o.value)} />
              ))}
            </div>
            <Button type="button" size="lg" className="mt-8" disabled={!draft.propertyType} onClick={next}>Continue</Button>
          </fieldset>
        )}

        {step === 3 && (
          <fieldset>
            <legend className="sr-only">Budget</legend>
            <h2 id="wizard-heading" ref={headingRef} tabIndex={-1} className="text-3xl leading-[1.02] outline-none md:text-4xl">Rough budget?</h2>
            <p className="mt-2 text-body">This only helps us scope the quote. It never changes the price.</p>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {BUDGET_OPTIONS.map((o) => (
                <OptionCard key={o.value} label={o.label} detail={o.detail} selected={draft.budget === o.value} onSelect={() => pick("budget", o.value)} />
              ))}
            </div>
          </fieldset>
        )}

        {step === 4 && (
          <fieldset>
            <legend className="sr-only">Contact</legend>
            <h2 id="wizard-heading" ref={headingRef} tabIndex={-1} className="text-3xl leading-[1.02] outline-none md:text-4xl">How can we reach you?</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field id="q-name" label="Name" error={errors.name}>
                <input id="q-name" className={field} autoComplete="name" value={draft.name} onChange={(e) => update("name", e.target.value)} aria-invalid={!!errors.name} aria-describedby={errors.name ? "q-name-error" : undefined} />
              </Field>
              <Field id="q-zip" label="ZIP code" error={errors.zip}>
                <input id="q-zip" className={field} inputMode="numeric" autoComplete="postal-code" maxLength={5} value={draft.zip} onChange={(e) => update("zip", e.target.value)} aria-invalid={!!errors.zip} aria-describedby={errors.zip ? "q-zip-error" : undefined} />
              </Field>
              <Field id="q-address" label="Property address" error={errors.address}>
                <input id="q-address" className={field} autoComplete="street-address" maxLength={200} value={draft.address} onChange={(e) => update("address", e.target.value)} aria-invalid={!!errors.address} aria-describedby={errors.address ? "q-address-error" : undefined} />
              </Field>
              <Field id="q-phone" label="Phone" error={errors.phone}>
                <input id="q-phone" type="tel" className={field} autoComplete="tel" value={draft.phone} onChange={(e) => update("phone", e.target.value)} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "q-phone-error" : undefined} />
              </Field>
              <Field id="q-email" label="Email" error={errors.email}>
                <input id="q-email" type="email" className={field} autoComplete="email" value={draft.email} onChange={(e) => update("email", e.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? "q-email-error" : undefined} />
              </Field>
            </div>
            <div className="mt-4">
              <Field id="q-notes" label="Anything else we should know? (optional)">
                <textarea id="q-notes" rows={4} className={cn(field, "h-auto py-3")} value={draft.notes} onChange={(e) => update("notes", e.target.value)} onKeyDown={(e) => { if ((e.metaKey || e.ctrlKey) && e.key === "Enter") (e.currentTarget.form as HTMLFormElement).requestSubmit(); }} />
              </Field>
            </div>
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            {formError && (
              <p role="alert" className="mt-4 rounded-lg border-l-4 border-destructive bg-destructive/5 p-4 text-sm text-ink">{formError}</p>
            )}
            <Button type="submit" size="lg" className="mt-8 w-full sm:w-auto" disabled={submitting}>
              {submitting ? "Sending…" : "Send my quote request"}
            </Button>
            <p className="mt-3 text-sm text-body">We’ll use these details to follow up about your request. Urgent? Call {BUSINESS.phone.display}.</p>
          </fieldset>
        )}
      </motion.div>
    </form>
  );
}
