import type { Subcategory, TopCategory } from "@/lib/data/types";

export interface CategoryMeta {
  slug: TopCategory;
  label: string;
  description: string;
  /** Optional card image (`/images/categories/<slug>.jpg`). */
  image?: string;
  /** Service that most often installs products in this category. */
  installServiceSlug: string;
  order: number;
}

export interface SubcategoryMeta {
  slug: Subcategory;
  category: TopCategory;
  label: string;
  description: string;
}

export const categories: CategoryMeta[] = [
  {
    slug: "flooring",
    label: "Flooring",
    description: "Luxury vinyl plank, laminate, engineered hardwood, tile, and carpet we install and stand behind.",
    installServiceSlug: "flooring-installation",
    order: 1,
  },
  {
    slug: "paint-finishes",
    label: "Paint & Finishes",
    description: "Interior and exterior paint lines, primers, and stains chosen for Las Vegas sun and dry air.",
    installServiceSlug: "interior-painting",
    order: 2,
  },
  {
    slug: "plumbing-fixtures",
    label: "Plumbing Fixtures",
    description: "Faucets, sinks, toilets, water heaters, and disposals in the brands we install most.",
    installServiceSlug: "plumbing-repairs",
    order: 3,
  },
  {
    slug: "electrical-lighting",
    label: "Electrical & Lighting",
    description: "Ceiling fans, recessed lighting, outlets, switches, and smart-home devices.",
    installServiceSlug: "lighting-ceiling-fan-installation",
    order: 4,
  },
  {
    slug: "doors-windows-trim",
    label: "Doors, Windows & Trim",
    description: "Interior and exterior doors, replacement windows, baseboards, casing, and crown.",
    installServiceSlug: "door-installation-repair",
    order: 5,
  },
  {
    slug: "kitchen-bath",
    label: "Kitchen & Bath",
    description: "Countertops, cabinets, vanities, and shower doors for refreshes and full remodels.",
    installServiceSlug: "bathroom-remodeling",
    order: 6,
  },
  {
    slug: "drywall-materials",
    label: "Drywall & Materials",
    description: "Drywall, joint compound, texture, and insulation, mostly so you know what goes in your walls.",
    installServiceSlug: "drywall-repair-installation",
    order: 7,
  },
  {
    slug: "hvac-water",
    label: "HVAC & Water",
    description: "Thermostats, air filters, water softeners, and reverse-osmosis systems.",
    installServiceSlug: "handyman-small-repairs",
    order: 8,
  },
];

export const subcategories: SubcategoryMeta[] = [
  { slug: "lvp", category: "flooring", label: "Luxury Vinyl Plank", description: "Waterproof, click-lock plank flooring with realistic wood looks." },
  { slug: "laminate", category: "flooring", label: "Laminate", description: "Durable, budget-friendly planks with high-definition wood and stone visuals." },
  { slug: "engineered-hardwood", category: "flooring", label: "Engineered Hardwood", description: "Real wood veneer over a stable core that handles desert humidity swings." },
  { slug: "tile", category: "flooring", label: "Tile", description: "Porcelain and ceramic tile for floors, showers, and backsplashes." },
  { slug: "carpet", category: "flooring", label: "Carpet", description: "Soft, stain-resistant carpet for bedrooms and living areas." },

  { slug: "interior-paint", category: "paint-finishes", label: "Interior Paint", description: "Washable, low-VOC wall and trim paints in the sheens we recommend per room." },
  { slug: "exterior-paint", category: "paint-finishes", label: "Exterior Paint", description: "UV-resistant elastomeric and acrylic coatings for stucco and trim." },
  { slug: "primers-stains", category: "paint-finishes", label: "Primers & Stains", description: "Bonding primers, stain blockers, and wood stains for cabinets and doors." },

  { slug: "faucets", category: "plumbing-fixtures", label: "Faucets", description: "Kitchen and bathroom faucets in the finishes homeowners ask for most." },
  { slug: "sinks", category: "plumbing-fixtures", label: "Sinks", description: "Undermount, drop-in, and farmhouse sinks in stainless and composite." },
  { slug: "toilets", category: "plumbing-fixtures", label: "Toilets", description: "Efficient, comfort-height toilets that actually flush." },
  { slug: "water-heaters", category: "plumbing-fixtures", label: "Water Heaters", description: "Tank and tankless units sized for your household." },
  { slug: "garbage-disposals", category: "plumbing-fixtures", label: "Garbage Disposals", description: "Quiet, reliable disposals in the horsepower ranges that fit most kitchens." },

  { slug: "ceiling-fans", category: "electrical-lighting", label: "Ceiling Fans", description: "Indoor and outdoor-rated fans with lights and remotes." },
  { slug: "recessed-lighting", category: "electrical-lighting", label: "Recessed Lighting", description: "Slim LED can lights with selectable color temperature." },
  { slug: "outlets-switches", category: "electrical-lighting", label: "Outlets & Switches", description: "GFCI, USB, and dimmer upgrades in matching finishes." },
  { slug: "smart-home", category: "electrical-lighting", label: "Smart Home", description: "Smart switches, doorbells, and locks we wire and set up." },

  { slug: "interior-doors", category: "doors-windows-trim", label: "Interior Doors", description: "Prehung and slab doors in shaker, flat, and panel styles." },
  { slug: "exterior-doors", category: "doors-windows-trim", label: "Exterior Doors", description: "Entry and patio doors rated for heat and security." },
  { slug: "baseboards-casing", category: "doors-windows-trim", label: "Baseboards & Casing", description: "MDF and wood profiles from simple modern to traditional." },
  { slug: "crown-moulding", category: "doors-windows-trim", label: "Crown Moulding", description: "Crown profiles that finish a room without overpowering it." },

  { slug: "countertops", category: "kitchen-bath", label: "Countertops", description: "Quartz and granite slabs and prefab tops." },
  { slug: "cabinets", category: "kitchen-bath", label: "Cabinets", description: "Ready-to-assemble and semi-custom cabinetry." },
  { slug: "vanities", category: "kitchen-bath", label: "Vanities", description: "Bathroom vanities with tops, in standard widths." },
  { slug: "shower-doors", category: "kitchen-bath", label: "Shower Doors", description: "Frameless and semi-frameless glass enclosures." },

  { slug: "drywall-sheets", category: "drywall-materials", label: "Drywall Sheets", description: "Standard, moisture-resistant, and fire-rated board." },
  { slug: "joint-compound-texture", category: "drywall-materials", label: "Joint Compound & Texture", description: "Mud, tape, and texture products for matching existing walls." },
  { slug: "insulation", category: "drywall-materials", label: "Insulation", description: "Batt and blown-in insulation for attics and open walls." },

  { slug: "thermostats", category: "hvac-water", label: "Thermostats", description: "Smart thermostats that pay for themselves in a Las Vegas summer." },
  { slug: "air-filters", category: "hvac-water", label: "Air Filters", description: "Filters in the sizes and ratings your system needs." },
  { slug: "water-softeners", category: "hvac-water", label: "Water Softeners", description: "Softeners sized for hard Las Vegas water." },
  { slug: "ro-systems", category: "hvac-water", label: "Reverse-Osmosis Systems", description: "Under-sink drinking-water systems we install and service." },
];

const categoryMap = new Map(categories.map((c) => [c.slug, c]));
const subcategoryMap = new Map(subcategories.map((s) => [s.slug, s]));

export function getCategoryMeta(slug: string): CategoryMeta | undefined {
  return categoryMap.get(slug as TopCategory);
}

export function getSubcategoryMeta(slug: string): SubcategoryMeta | undefined {
  return subcategoryMap.get(slug as Subcategory);
}

export function getSubcategoriesForCategory(category: TopCategory): SubcategoryMeta[] {
  return subcategories.filter((s) => s.category === category);
}

export function getAllCategorySlugs(): TopCategory[] {
  return categories.map((c) => c.slug);
}

export function getAllSubcategorySlugs(): Subcategory[] {
  return subcategories.map((s) => s.slug);
}
