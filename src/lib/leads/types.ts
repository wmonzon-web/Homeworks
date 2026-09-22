export type LeadType = "quote" | "contact";

export const URGENCY_OPTIONS = [
  { value: "emergency", label: "It's urgent", detail: "Leaking, sparking, or unsafe. We'll call you back first." },
  { value: "this-week", label: "This week", detail: "Broken or annoying, and I'd like it handled soon." },
  { value: "this-month", label: "This month", detail: "Not urgent, but let's get it on the calendar." },
  { value: "planning", label: "Just planning", detail: "Pricing a project for later this year." },
] as const;

export const PROPERTY_TYPE_OPTIONS = [
  { value: "house", label: "Single-family house" },
  { value: "townhome", label: "Townhome" },
  { value: "condo", label: "Condo or apartment" },
  { value: "other", label: "Something else" },
] as const;

export const OWNERSHIP_OPTIONS = [
  { value: "own", label: "I own it and live here" },
  { value: "rent", label: "I rent it" },
  { value: "manage", label: "I manage it for someone else" },
] as const;

export const BUDGET_OPTIONS = [
  { value: "under-1k", label: "Under $1,000", detail: "A repair or a single small job." },
  { value: "1k-5k", label: "$1,000 – $5,000", detail: "A room painted, a fixture swap, a few repairs." },
  { value: "5k-15k", label: "$5,000 – $15,000", detail: "Flooring in a few rooms, a bath refresh." },
  { value: "15k-40k", label: "$15,000 – $40,000", detail: "A kitchen refresh or whole-house flooring." },
  { value: "40k-plus", label: "$40,000+", detail: "A larger renovation." },
  { value: "not-sure", label: "Not sure yet", detail: "That's what the quote is for." },
] as const;

export interface Lead {
  id: string;
  type: LeadType;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  zip?: string;
  services: string[];
  urgency?: string;
  propertyType?: string;
  homeDetails?: Record<string, string>;
  budget?: string;
  message?: string;
  photoKeys: string[];
  sourceUrl: string;
  userAgent?: string;
  ip?: string;
}

export interface DeliveryResult {
  channel: string;
  ok: boolean;
  error?: string;
}
