/**
 * Single source of truth for business facts. Nothing else in the codebase may
 * hardcode the company name, phone, email, address, hours, or service areas.
 *
 * Values marked PLACEHOLDER are stand-ins until the real ones are supplied.
 */
export const BUSINESS = {
  name: "Homeworks",
  legalName: "Homeworks NV", // PLACEHOLDER
  tagline: "Home repairs and renovations, done right.",
  siteUrl: "https://homeworksnv.com",
  phone: {
    display: "(702) 555-0100", // PLACEHOLDER
    e164: "+17025550100", // PLACEHOLDER
  },
  email: "leads@homeworksnv.com",
  /** Service-area business: no public street address. */
  address: {
    street: "",
    city: "Las Vegas",
    region: "NV",
    postalCode: "",
    country: "US",
  },
  hours: {
    display: ["Monday - Saturday: 7:00 AM - 6:00 PM", "Sunday: Closed"],
    structured: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "18:00",
      },
    ],
  },
  socials: {
    facebook: "",
    instagram: "",
    google: "",
  },
  defaultOgImage: "/og/default.png",
  serviceArea: "Las Vegas, NV",
  serviceAreas: [
    { city: "Las Vegas", state: "Nevada" },
    { city: "Henderson", state: "Nevada" },
    { city: "Summerlin", state: "Nevada" },
    { city: "North Las Vegas", state: "Nevada" },
  ],
  /** Nevada State Contractors Board license number. */
  license: "", // PLACEHOLDER
  parentCompany: {
    name: "Xtreme Build Group",
    url: "https://xtremebuildgroup.com",
  },
  /** Homes the company is built to serve; used in copy, never as a gate. */
  targetHomeValue: { min: 400_000, max: 700_000 },
} as const;

export type Business = typeof BUSINESS;
