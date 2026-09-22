export interface StaticImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------

export type ServiceCategory =
  | "handyman"
  | "drywall-paint"
  | "flooring-tile"
  | "plumbing"
  | "electrical"
  | "carpentry-doors"
  | "remodeling"
  | "exterior";

/** Lightweight record used by menus, forms, and cards. */
export interface ServiceSummary {
  slug: string;
  name: string;
  /** Short label for tight spaces (tiles, select options). */
  shortName: string;
  /** One sentence, ~90 chars, used on cards and in llms.txt. */
  summary: string;
  category: ServiceCategory;
  /** Key into ServiceIcon.astro's map. */
  icon: string;
  /** Shown in the homepage services grid. */
  featured: boolean;
  order: number;
}

export interface ServiceContentSection {
  heading: string;
  lead: string;
  body: string[];
  image?: StaticImage;
  highlights?: Array<{ icon?: string; label: string; detail: string }>;
  callout?: { type: "tip" | "insight" | "local"; title: string; text: string };
}

export interface ServiceQuickFacts {
  typicalDuration: string;
  priceBand: string;
  whenToCall: string;
}

export interface Service extends ServiceSummary {
  tagline: string;
  contentSections: ServiceContentSection[];
  heroImage?: StaticImage;
  quickFacts?: ServiceQuickFacts;
  benefits: Array<{ icon?: string; title: string; description: string }>;
  process: Array<{ title: string; description: string; image?: StaticImage }>;
  faqs: Array<{ question: string; answer: string }>;
  relatedProductSlugs: string[];
  meta: { title?: string; description?: string; ogImage?: string };
}

// ---------------------------------------------------------------------------
// Products
// ---------------------------------------------------------------------------

export type TopCategory =
  | "flooring"
  | "paint-finishes"
  | "plumbing-fixtures"
  | "electrical-lighting"
  | "doors-windows-trim"
  | "kitchen-bath"
  | "drywall-materials"
  | "hvac-water";

export type Subcategory =
  // flooring
  | "lvp"
  | "laminate"
  | "engineered-hardwood"
  | "tile"
  | "carpet"
  // paint-finishes
  | "interior-paint"
  | "exterior-paint"
  | "primers-stains"
  // plumbing-fixtures
  | "faucets"
  | "sinks"
  | "toilets"
  | "water-heaters"
  | "garbage-disposals"
  // electrical-lighting
  | "ceiling-fans"
  | "recessed-lighting"
  | "outlets-switches"
  | "smart-home"
  // doors-windows-trim
  | "interior-doors"
  | "exterior-doors"
  | "baseboards-casing"
  | "crown-moulding"
  // kitchen-bath
  | "countertops"
  | "cabinets"
  | "vanities"
  | "shower-doors"
  // drywall-materials
  | "drywall-sheets"
  | "joint-compound-texture"
  | "insulation"
  // hvac-water
  | "thermostats"
  | "air-filters"
  | "water-softeners"
  | "ro-systems";

export interface ProductVariant {
  label: string;
  sku?: string;
  image?: StaticImage;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: TopCategory;
  subcategory: Subcategory;
  brand?: string;
  collection?: string;
  supplier?: string;
  specs: Array<{ key: string; value: string }>;
  tags: string[];
  images: StaticImage[];
  featured: boolean;
  variants?: ProductVariant[];
  /** Service that installs this product, for cross-linking. */
  installServiceSlug?: string;
}
