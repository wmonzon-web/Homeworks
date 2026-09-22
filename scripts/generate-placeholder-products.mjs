/**
 * Generates placeholder product data + SVG images so the product routes work
 * before a real catalog exists. Re-run after editing the tables below:
 *   node scripts/generate-placeholder-products.mjs
 * Everything it writes is marked PLACEHOLDER and safe to delete.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const dataDir = join(root, "src/lib/data/products");
const imgDir = join(root, "public/images/products");

// category → subcategory → [name, specs, tags]
const CATALOG = {
  flooring: {
    lvp: [
      ["Desert Oak Luxury Vinyl Plank", { Thickness: "6 mm", "Wear layer": "20 mil", Width: "7 in", Install: "Click-lock" }, ["waterproof", "pet-friendly", "light", "wood-look"]],
      ["Canyon Hickory Rigid Core Plank", { Thickness: "7 mm", "Wear layer": "22 mil", Width: "9 in", Install: "Click-lock" }, ["waterproof", "scratch-resistant", "medium", "wood-look"]],
      ["Slate Grey Glue-Down Vinyl", { Thickness: "2.5 mm", "Wear layer": "20 mil", Width: "6 in", Install: "Glue-down" }, ["waterproof", "commercial-grade", "grey"]],
    ],
    laminate: [
      ["Sierra Maple Laminate", { Thickness: "12 mm", "AC rating": "AC4", Width: "7.5 in", Install: "Click-lock" }, ["scratch-resistant", "light", "wood-look"]],
      ["Smoked Walnut Laminate", { Thickness: "12 mm", "AC rating": "AC4", Width: "7.5 in", Install: "Click-lock" }, ["scratch-resistant", "dark", "wood-look"]],
    ],
    "engineered-hardwood": [
      ["White Oak Engineered Plank", { Thickness: "1/2 in", "Veneer": "3 mm", Width: "7.5 in", Finish: "Matte UV oil" }, ["real-wood", "light", "wide-plank"]],
      ["Hand-Scraped Hickory Engineered", { Thickness: "1/2 in", "Veneer": "2 mm", Width: "6.5 in", Finish: "Satin urethane" }, ["real-wood", "medium", "textured"]],
    ],
    tile: [
      ["Calacatta-Look Porcelain 24x48", { Size: "24 × 48 in", Finish: "Polished", "PEI rating": "4", Use: "Floor and wall" }, ["porcelain", "white", "large-format"]],
      ["Wood-Look Porcelain Plank 8x48", { Size: "8 × 48 in", Finish: "Matte", "PEI rating": "5", Use: "Floor" }, ["porcelain", "wood-look", "medium"]],
      ["Handmade-Look Subway 3x12", { Size: "3 × 12 in", Finish: "Glossy", Use: "Wall and backsplash" }, ["ceramic", "white", "backsplash"]],
    ],
    carpet: [
      ["Plush Solution-Dyed Polyester Carpet", { Pile: "Plush", Fiber: "Solution-dyed polyester", Weight: "45 oz", Pad: "8 lb rebond included" }, ["stain-resistant", "soft", "light"]],
      ["Textured Loop Berber Carpet", { Pile: "Loop", Fiber: "Olefin", Weight: "32 oz", Pad: "6 lb rebond included" }, ["durable", "pet-friendly", "grey"]],
    ],
  },
  "paint-finishes": {
    "interior-paint": [
      ["Interior Washable Matte", { Sheen: "Matte", Coverage: "350–400 sq ft/gal", VOC: "Low", Use: "Walls" }, ["low-voc", "washable"]],
      ["Interior Trim & Door Enamel", { Sheen: "Semi-gloss", Coverage: "350 sq ft/gal", VOC: "Low", Use: "Trim, doors, cabinets" }, ["low-voc", "hard-finish"]],
      ["Kitchen & Bath Satin", { Sheen: "Satin", Coverage: "350–400 sq ft/gal", VOC: "Low", Use: "Wet rooms" }, ["mildew-resistant", "washable"]],
    ],
    "exterior-paint": [
      ["Elastomeric Stucco Coating", { Sheen: "Flat", Coverage: "60–100 sq ft/gal", Use: "Stucco, masonry" }, ["uv-resistant", "crack-bridging"]],
      ["Exterior Acrylic Trim Paint", { Sheen: "Satin", Coverage: "350 sq ft/gal", Use: "Fascia, trim, doors" }, ["uv-resistant", "fade-resistant"]],
    ],
    "primers-stains": [
      ["Bonding Primer for Cabinets", { Base: "Water-borne alkyd", Use: "Glossy and laminate surfaces" }, ["adhesion", "cabinets"]],
      ["Stain-Blocking Primer", { Base: "Shellac", Use: "Water stains, smoke, tannin" }, ["stain-block"]],
    ],
  },
  "plumbing-fixtures": {
    faucets: [
      ["Single-Handle Pull-Down Kitchen Faucet", { Finish: "Spot-resist stainless", Flow: "1.8 gpm", Mount: "1 or 3 hole" }, ["stainless", "pull-down"]],
      ["Widespread Bathroom Faucet", { Finish: "Matte black", Flow: "1.2 gpm", Mount: "8 in widespread" }, ["black", "watersense"]],
    ],
    sinks: [
      ["Undermount Stainless Single Bowl", { Material: "16-gauge stainless", Size: "32 × 19 in", Depth: "10 in" }, ["stainless", "undermount"]],
      ["Farmhouse Fireclay Sink", { Material: "Fireclay", Size: "33 × 20 in", Depth: "10 in" }, ["white", "farmhouse"]],
    ],
    toilets: [
      ["Comfort-Height Elongated Toilet", { Flush: "1.28 gpf", Height: "17 in", Bowl: "Elongated" }, ["watersense", "comfort-height"]],
      ["One-Piece Skirted Toilet", { Flush: "1.28 gpf", Height: "17 in", Bowl: "Elongated" }, ["watersense", "easy-clean"]],
    ],
    "water-heaters": [
      ["50-Gallon Gas Water Heater", { Capacity: "50 gal", Fuel: "Natural gas", "First-hour rating": "80 gal", Warranty: "6 yr" }, ["gas", "tank"]],
      ["Tankless Gas Water Heater", { Flow: "9.5 gpm", Fuel: "Natural gas", Vent: "Direct vent", Warranty: "12 yr heat exchanger" }, ["gas", "tankless"]],
    ],
    "garbage-disposals": [
      ["3/4 HP Continuous-Feed Disposal", { Motor: "3/4 HP", Chamber: "Stainless", Noise: "Quiet series" }, ["quiet", "3/4-hp"]],
      ["1/2 HP Continuous-Feed Disposal", { Motor: "1/2 HP", Chamber: "Galvanized" }, ["1/2-hp", "budget"]],
    ],
  },
  "electrical-lighting": {
    "ceiling-fans": [
      ["52-inch Indoor Ceiling Fan with LED", { Size: "52 in", Motor: "DC", Light: "Integrated LED", Control: "Remote" }, ["indoor", "led", "remote"]],
      ["60-inch Outdoor Damp-Rated Fan", { Size: "60 in", Motor: "DC", Rating: "Damp", Control: "Remote" }, ["outdoor", "damp-rated"]],
    ],
    "recessed-lighting": [
      ["6-inch Slim LED Recessed Light", { Size: "6 in", Output: "1100 lm", CCT: "Selectable 2700–5000K", Dimmable: "Yes" }, ["led", "dimmable", "selectable-cct"]],
      ["4-inch Slim LED Recessed Light", { Size: "4 in", Output: "750 lm", CCT: "Selectable 2700–5000K", Dimmable: "Yes" }, ["led", "dimmable"]],
    ],
    "outlets-switches": [
      ["GFCI Outlet 20A", { Amperage: "20 A", Type: "Self-test GFCI", Finish: "White" }, ["gfci", "white"]],
      ["USB-C Charging Outlet", { Amperage: "15 A", Ports: "USB-A + USB-C 30W", Finish: "White" }, ["usb", "white"]],
      ["LED Dimmer Switch", { Type: "Single-pole/3-way", Load: "150 W LED", Finish: "White" }, ["dimmer", "led-compatible"]],
    ],
    "smart-home": [
      ["Smart Wi-Fi Dimmer", { Protocol: "Wi-Fi", Neutral: "Required", Load: "150 W LED" }, ["smart", "dimmer"]],
      ["Video Doorbell (Wired)", { Power: "Existing doorbell wiring", Resolution: "1080p", Field: "150°" }, ["smart", "security"]],
    ],
  },
  "doors-windows-trim": {
    "interior-doors": [
      ["2-Panel Shaker Prehung Door", { Style: "2-panel shaker", Core: "Solid core", Size: "30 × 80 in", Finish: "Primed" }, ["shaker", "solid-core"]],
      ["Flat-Panel Hollow Core Slab", { Style: "Flush", Core: "Hollow", Size: "32 × 80 in", Finish: "Primed" }, ["modern", "budget"]],
    ],
    "exterior-doors": [
      ["Fiberglass Entry Door, 3/4 Lite", { Material: "Fiberglass", Glass: "3/4 lite, low-E", Size: "36 × 80 in" }, ["fiberglass", "entry"]],
      ["Sliding Patio Door", { Material: "Vinyl", Glass: "Dual-pane low-E", Size: "72 × 80 in" }, ["patio", "low-e"]],
    ],
    "baseboards-casing": [
      ["5-1/4 in Colonial Baseboard (MDF)", { Height: "5.25 in", Material: "Primed MDF", Length: "16 ft" }, ["mdf", "colonial"]],
      ["3-1/2 in Flat Modern Baseboard", { Height: "3.5 in", Material: "Primed MDF", Length: "16 ft" }, ["mdf", "modern"]],
      ["2-1/4 in Colonial Casing", { Width: "2.25 in", Material: "Primed MDF", Length: "7 ft" }, ["mdf", "casing"]],
    ],
    "crown-moulding": [
      ["3-5/8 in Crown (MDF)", { Height: "3.625 in", Material: "Primed MDF", Length: "16 ft" }, ["mdf", "crown"]],
      ["5-1/4 in Crown (Pine)", { Height: "5.25 in", Material: "Finger-joint pine", Length: "16 ft" }, ["pine", "crown"]],
    ],
  },
  "kitchen-bath": {
    countertops: [
      ["Quartz Slab, White with Grey Veining", { Material: "Quartz", Thickness: "3 cm", Slab: "126 × 63 in" }, ["quartz", "white"]],
      ["Granite Slab, Black Pearl", { Material: "Granite", Thickness: "3 cm", Slab: "120 × 70 in" }, ["granite", "dark"]],
    ],
    cabinets: [
      ["White Shaker RTA Base Cabinet 36", { Style: "Shaker", Box: "Plywood", Width: "36 in", Finish: "White" }, ["shaker", "white", "rta"]],
      ["Grey Shaker RTA Wall Cabinet 30x36", { Style: "Shaker", Box: "Plywood", Width: "30 in", Finish: "Grey" }, ["shaker", "grey", "rta"]],
    ],
    vanities: [
      ["36-inch Vanity with Quartz Top", { Width: "36 in", Top: "Quartz, single sink", Finish: "White" }, ["white", "36-in"]],
      ["60-inch Double Vanity", { Width: "60 in", Top: "Quartz, double sink", Finish: "Navy" }, ["double", "60-in"]],
    ],
    "shower-doors": [
      ["Frameless Pivot Shower Door", { Glass: "3/8 in clear tempered", Width: "30–34 in", Hardware: "Brushed nickel" }, ["frameless", "pivot"]],
      ["Semi-Frameless Sliding Tub Door", { Glass: "1/4 in clear tempered", Width: "56–60 in", Hardware: "Chrome" }, ["sliding", "tub"]],
    ],
  },
  "drywall-materials": {
    "drywall-sheets": [
      ["1/2 in Standard Drywall 4x8", { Thickness: "1/2 in", Size: "4 × 8 ft", Use: "Walls" }, ["standard"]],
      ["5/8 in Type X Fire-Rated 4x8", { Thickness: "5/8 in", Size: "4 × 8 ft", Use: "Ceilings, garage walls" }, ["fire-rated"]],
      ["1/2 in Moisture-Resistant 4x8", { Thickness: "1/2 in", Size: "4 × 8 ft", Use: "Bathrooms, laundry" }, ["moisture-resistant"]],
    ],
    "joint-compound-texture": [
      ["All-Purpose Joint Compound", { Size: "4.5 gal", Type: "Pre-mixed", Use: "Tape and finish coats" }, ["pre-mixed"]],
      ["Setting-Type Compound, 45-minute", { Size: "18 lb", Type: "Powder", Use: "First coat, repairs" }, ["setting-type"]],
      ["Orange Peel Spray Texture", { Size: "20 oz aerosol", Pattern: "Orange peel", Use: "Small patches" }, ["texture"]],
    ],
    insulation: [
      ["R-13 Kraft-Faced Batt", { "R-value": "R-13", Width: "15 in", Use: "2×4 walls" }, ["batt"]],
      ["R-38 Blown-In Cellulose", { "R-value": "R-38", Type: "Blown-in", Use: "Attics" }, ["blown-in", "attic"]],
    ],
  },
  "hvac-water": {
    thermostats: [
      ["Smart Learning Thermostat", { Wiring: "C-wire recommended", Compatibility: "Most 24V systems", App: "Yes" }, ["smart", "wifi"]],
      ["Programmable 7-Day Thermostat", { Wiring: "Standard", Compatibility: "Most 24V systems" }, ["programmable"]],
    ],
    "air-filters": [
      ["MERV 11 Pleated Filter 20x25x1", { Size: "20 × 25 × 1 in", Rating: "MERV 11", Pack: "4" }, ["merv-11"]],
      ["MERV 13 Pleated Filter 16x25x4", { Size: "16 × 25 × 4 in", Rating: "MERV 13", Pack: "1" }, ["merv-13", "media"]],
    ],
    "water-softeners": [
      ["48,000-Grain Water Softener", { Capacity: "48,000 grain", Type: "Ion exchange", Household: "Up to 5 people" }, ["softener"]],
      ["Whole-House Sediment Pre-Filter", { Micron: "5", Housing: "Big Blue 20 in", Use: "Before softener" }, ["pre-filter"]],
    ],
    "ro-systems": [
      ["5-Stage Reverse-Osmosis System", { Stages: "5", Output: "75 gpd", Tank: "3.2 gal", Faucet: "Included" }, ["ro", "under-sink"]],
      ["Tankless RO System", { Stages: "3", Output: "600 gpd", Tank: "None", Faucet: "Included" }, ["ro", "tankless"]],
    ],
  },
};

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const esc = (s) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
const svg = (label) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" role="img" aria-label="${esc(label)} placeholder">
  <rect width="800" height="600" fill="#FBF3EA"/>
  <rect x="24" y="24" width="752" height="552" rx="16" fill="none" stroke="#0C1015" stroke-opacity="0.08"/>
  <text x="400" y="300" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="28" font-weight="700" fill="#0C1015" fill-opacity="0.55">${esc(label)}</text>
  <text x="400" y="340" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="18" fill="#0C1015" fill-opacity="0.4">Placeholder image</text>
</svg>
`;

const INSTALL = {
  flooring: "flooring-installation",
  "paint-finishes": "interior-painting",
  "plumbing-fixtures": "garbage-disposal-fixture-installation",
  "electrical-lighting": "lighting-ceiling-fan-installation",
  "doors-windows-trim": "door-installation-repair",
  "kitchen-bath": "kitchen-refresh-remodeling",
  "drywall-materials": "drywall-repair-installation",
  "hvac-water": "handyman-small-repairs",
};
const OVERRIDE = { tile: "tile-installation", "water-heaters": "water-heater-replacement", "baseboards-casing": "baseboards-trim-carpentry", "crown-moulding": "baseboards-trim-carpentry", "exterior-paint": "exterior-painting", "vanities": "bathroom-remodeling", "shower-doors": "bathroom-remodeling", "outlets-switches": "electrical-repairs-outlets-switches", "smart-home": "electrical-repairs-outlets-switches", "insulation": "drywall-repair-installation" };

const exportsList = [];
for (const [category, subs] of Object.entries(CATALOG)) {
  const varName = category.replace(/-([a-z])/g, (_, c) => c.toUpperCase()) + "Products";
  const products = [];
  let n = 0;
  for (const [subcategory, items] of Object.entries(subs)) {
    mkdirSync(join(imgDir, subcategory), { recursive: true });
    items.forEach(([name, specs, tags], i) => {
      n += 1;
      const slug = slugify(name);
      const file = `${slug}.svg`;
      writeFileSync(join(imgDir, subcategory, file), svg(name));
      products.push({
        id: `${category}-${String(n).padStart(3, "0")}`,
        name,
        slug,
        category,
        subcategory,
        brand: "Placeholder Brand",
        specs: Object.entries(specs).map(([key, value]) => ({ key, value })),
        tags,
        images: [{ src: `/images/products/${subcategory}/${file}`, alt: `${name} (placeholder image)`, width: 800, height: 600 }],
        featured: i === 0,
        installServiceSlug: OVERRIDE[subcategory] ?? INSTALL[category],
      });
    });
  }
  const body = `// PLACEHOLDER DATA, generated by scripts/generate-placeholder-products.mjs.\n// Replace with the real catalog; keep the Product shape.\nimport type { Product } from "@/lib/data/types";\n\nexport const ${varName}: Product[] = ${JSON.stringify(products, null, 2)};\n`;
  writeFileSync(join(dataDir, `${category}.ts`), body);
  exportsList.push([category, varName]);
}

const index = `import type { Product, Subcategory, TopCategory } from "@/lib/data/types";\n${exportsList.map(([c, v]) => `import { ${v} } from "@/lib/data/products/${c}";`).join("\n")}\n\nexport const products: Product[] = [\n${exportsList.map(([, v]) => `  ...${v},`).join("\n")}\n];\n\nconst bySlug = new Map(products.map((p) => [p.slug, p]));\n\nexport function getProductBySlug(slug: string): Product | undefined {\n  return bySlug.get(slug);\n}\n\nexport function getProductsByCategory(category: TopCategory): Product[] {\n  return products.filter((p) => p.category === category);\n}\n\nexport function getProductsBySubcategory(subcategory: Subcategory): Product[] {\n  return products.filter((p) => p.subcategory === subcategory);\n}\n\nexport function getFeaturedProducts(limit = 8): Product[] {\n  return products.filter((p) => p.featured).slice(0, limit);\n}\n\nexport function getRelatedProducts(product: Product, limit = 4): Product[] {\n  const same = products.filter((p) => p.subcategory === product.subcategory && p.slug !== product.slug);\n  const cat = products.filter((p) => p.category === product.category && p.subcategory !== product.subcategory);\n  return [...same, ...cat].slice(0, limit);\n}\n\nexport function getAllProductSlugs(): string[] {\n  return products.map((p) => p.slug);\n}\n`;
writeFileSync(join(dataDir, "index.ts"), index);
console.log(`Wrote ${exportsList.length} category files and images.`);
