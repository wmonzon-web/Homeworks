import type { ServiceCategory, ServiceSummary } from "@/lib/data/types";

export const SERVICE_CATEGORY_LABELS: Record<ServiceCategory, string> = {
  handyman: "Handyman & repairs",
  "drywall-paint": "Drywall & painting",
  "flooring-tile": "Flooring & tile",
  plumbing: "Plumbing",
  electrical: "Electrical & lighting",
  "carpentry-doors": "Carpentry, doors & windows",
  remodeling: "Kitchen & bath remodeling",
  exterior: "Exterior & weatherproofing",
};

export const SERVICE_CATEGORY_ORDER: ServiceCategory[] = [
  "handyman",
  "drywall-paint",
  "flooring-tile",
  "plumbing",
  "electrical",
  "carpentry-doors",
  "remodeling",
  "exterior",
];

/**
 * The 20 v1 services. Full page content lives in one file per service; this
 * catalog is the lightweight list every menu, form, and card reads from.
 */
export const SERVICE_CATALOG: ServiceSummary[] = [
  {
    slug: "handyman-small-repairs",
    name: "Handyman & Small Repairs",
    shortName: "Handyman & repairs",
    summary: "The to-do list you keep putting off: fixtures, doors, shelving, caulk, and every small job in between.",
    category: "handyman",
    icon: "wrench",
    featured: true,
    order: 1,
  },
  {
    slug: "drywall-repair-installation",
    name: "Drywall Repair & Installation",
    shortName: "Drywall repair",
    summary: "Holes, cracks, water damage, and new walls finished so smooth you can't find the patch.",
    category: "drywall-paint",
    icon: "hammer",
    featured: true,
    order: 2,
  },
  {
    slug: "drywall-texture-popcorn-removal",
    name: "Drywall Texture & Popcorn Ceiling Removal",
    shortName: "Texture & popcorn removal",
    summary: "Matched wall texture and clean, flat ceilings in place of dated popcorn.",
    category: "drywall-paint",
    icon: "spray-can",
    featured: false,
    order: 3,
  },
  {
    slug: "interior-painting",
    name: "Interior Painting",
    shortName: "Interior painting",
    summary: "Walls, ceilings, trim, and doors painted with real prep work and crisp lines.",
    category: "drywall-paint",
    icon: "paintbrush",
    featured: true,
    order: 4,
  },
  {
    slug: "exterior-painting",
    name: "Exterior Painting",
    shortName: "Exterior painting",
    summary: "Stucco, trim, fascia, and garage doors coated to survive the desert sun.",
    category: "drywall-paint",
    icon: "paint-roller",
    featured: false,
    order: 5,
  },
  {
    slug: "cabinet-painting-refinishing",
    name: "Cabinet Painting & Refinishing",
    shortName: "Cabinet refinishing",
    summary: "A factory-smooth finish on your existing cabinets for a fraction of replacement cost.",
    category: "drywall-paint",
    icon: "paint-bucket",
    featured: false,
    order: 6,
  },
  {
    slug: "flooring-installation",
    name: "Flooring Installation",
    shortName: "Flooring",
    summary: "Luxury vinyl plank, laminate, engineered hardwood, and carpet installed on properly prepped subfloors.",
    category: "flooring-tile",
    icon: "layers",
    featured: true,
    order: 7,
  },
  {
    slug: "tile-installation",
    name: "Tile Installation",
    shortName: "Tile",
    summary: "Floors, backsplashes, and showers set level, waterproofed, and grouted to last.",
    category: "flooring-tile",
    icon: "grid-2x2",
    featured: false,
    order: 8,
  },
  {
    slug: "baseboards-trim-carpentry",
    name: "Baseboards, Trim & Carpentry",
    shortName: "Trim & carpentry",
    summary: "Baseboards, casing, crown, shelving, and built-ins cut tight and finished clean.",
    category: "carpentry-doors",
    icon: "ruler",
    featured: false,
    order: 9,
  },
  {
    slug: "door-installation-repair",
    name: "Door Installation & Repair",
    shortName: "Doors",
    summary: "Interior and exterior doors hung, adjusted, and hardware swapped so they close right.",
    category: "carpentry-doors",
    icon: "door-open",
    featured: false,
    order: 10,
  },
  {
    slug: "window-screen-repair",
    name: "Window & Screen Repair",
    shortName: "Windows & screens",
    summary: "Sticking sashes, broken balances, torn screens, and failed seals sorted out.",
    category: "carpentry-doors",
    icon: "blinds",
    featured: false,
    order: 11,
  },
  {
    slug: "plumbing-repairs",
    name: "Plumbing Repairs",
    shortName: "Plumbing repairs",
    summary: "Leaks, drips, running toilets, slow drains, and faucet swaps handled the same week.",
    category: "plumbing",
    icon: "droplets",
    featured: true,
    order: 12,
  },
  {
    slug: "water-heater-replacement",
    name: "Water Heater Replacement",
    shortName: "Water heaters",
    summary: "Tank and tankless replacements sized for your home and brought up to code.",
    category: "plumbing",
    icon: "flame",
    featured: false,
    order: 13,
  },
  {
    slug: "garbage-disposal-fixture-installation",
    name: "Garbage Disposal & Fixture Installation",
    shortName: "Disposals & fixtures",
    summary: "Disposals, faucets, sinks, and toilets installed without the return trip.",
    category: "plumbing",
    icon: "toilet",
    featured: false,
    order: 14,
  },
  {
    slug: "electrical-repairs-outlets-switches",
    name: "Electrical Repairs, Outlets & Switches",
    shortName: "Electrical repairs",
    summary: "Dead outlets, tripping breakers, GFCI upgrades, and dimmers fixed safely.",
    category: "electrical",
    icon: "zap",
    featured: true,
    order: 15,
  },
  {
    slug: "lighting-ceiling-fan-installation",
    name: "Lighting & Ceiling Fan Installation",
    shortName: "Lighting & fans",
    summary: "Recessed lights, pendants, and ceiling fans installed on properly rated boxes.",
    category: "electrical",
    icon: "fan",
    featured: false,
    order: 16,
  },
  {
    slug: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    shortName: "Bathroom remodel",
    summary: "Tile, vanity, fixtures, and lighting refreshed by one crew on one schedule.",
    category: "remodeling",
    icon: "bath",
    featured: true,
    order: 17,
  },
  {
    slug: "kitchen-refresh-remodeling",
    name: "Kitchen Refresh & Remodeling",
    shortName: "Kitchen refresh",
    summary: "Cabinets, counters, backsplash, and lighting updated without a six-month gut job.",
    category: "remodeling",
    icon: "cooking-pot",
    featured: true,
    order: 18,
  },
  {
    slug: "caulking-grout-weatherproofing",
    name: "Caulking, Grout & Weatherproofing",
    shortName: "Caulk & grout",
    summary: "Re-caulked tubs and windows, re-grouted tile, and sealed gaps that leak cool air.",
    category: "exterior",
    icon: "brush",
    featured: false,
    order: 19,
  },
  {
    slug: "stucco-repair-exterior-maintenance",
    name: "Stucco Repair & Exterior Maintenance",
    shortName: "Stucco & exterior",
    summary: "Cracked stucco patched and textured to match, plus the exterior upkeep the sun demands.",
    category: "exterior",
    icon: "sun",
    featured: false,
    order: 20,
  },
];

export function getFeaturedServices(limit = 8): ServiceSummary[] {
  return SERVICE_CATALOG.filter((s) => s.featured)
    .sort((a, b) => a.order - b.order)
    .slice(0, limit);
}

export function getServiceSummary(slug: string): ServiceSummary | undefined {
  return SERVICE_CATALOG.find((s) => s.slug === slug);
}

export function getServicesByCategory(): Array<{
  category: ServiceCategory;
  label: string;
  services: ServiceSummary[];
}> {
  return SERVICE_CATEGORY_ORDER.map((category) => ({
    category,
    label: SERVICE_CATEGORY_LABELS[category],
    services: SERVICE_CATALOG.filter((s) => s.category === category).sort(
      (a, b) => a.order - b.order,
    ),
  })).filter((group) => group.services.length > 0);
}
