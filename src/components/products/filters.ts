import type { Product } from "@/lib/data/types";

export interface FilterOption { value: string; label: string; count: number }
export interface FilterGroup { key: string; label: string; options: FilterOption[] }

/** Tag vocabulary grouped for the sidebar. Unknown tags fall into "Features". */
const TAG_GROUPS: Array<{ key: string; label: string; tags: string[] }> = [
  { key: "material", label: "Material", tags: ["porcelain", "ceramic", "quartz", "granite", "mdf", "pine", "fiberglass", "vinyl", "stainless", "real-wood", "wood-look", "gas", "tank", "tankless"] },
  { key: "color", label: "Color", tags: ["white", "light", "medium", "dark", "grey", "black", "navy"] },
  { key: "style", label: "Style", tags: ["shaker", "modern", "colonial", "farmhouse", "frameless", "sliding", "pivot", "large-format", "wide-plank", "textured", "backsplash"] },
];

const pretty = (t: string) => t.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

export function buildFilterGroups(products: Product[]): FilterGroup[] {
  const groups: FilterGroup[] = [];
  const brandCounts = new Map<string, number>();
  const tagCounts = new Map<string, number>();
  for (const p of products) {
    if (p.brand) brandCounts.set(p.brand, (brandCounts.get(p.brand) ?? 0) + 1);
    for (const t of p.tags) tagCounts.set(t, (tagCounts.get(t) ?? 0) + 1);
  }
  if (brandCounts.size > 1) {
    groups.push({
      key: "brand",
      label: "Brand",
      options: [...brandCounts].sort(([a], [b]) => a.localeCompare(b)).map(([value, count]) => ({ value, label: value, count })),
    });
  }
  const used = new Set<string>();
  for (const g of TAG_GROUPS) {
    const options = g.tags.filter((t) => tagCounts.has(t)).map((t) => { used.add(t); return { value: t, label: pretty(t), count: tagCounts.get(t)! }; });
    if (options.length > 0) groups.push({ key: g.key, label: g.label, options });
  }
  const rest = [...tagCounts].filter(([t]) => !used.has(t)).sort(([a], [b]) => a.localeCompare(b));
  if (rest.length > 0) groups.push({ key: "feature", label: "Features", options: rest.map(([t, count]) => ({ value: t, label: pretty(t), count })) });
  return groups;
}

export type ActiveFilters = Record<string, string[]>;

export function parseFilters(search: string, groups: FilterGroup[]): ActiveFilters {
  const params = new URLSearchParams(search);
  const active: ActiveFilters = {};
  for (const g of groups) {
    const values = params.getAll(g.key).flatMap((v) => v.split(",")).filter(Boolean);
    if (values.length) active[g.key] = values;
  }
  return active;
}

export function serializeFilters(active: ActiveFilters): string {
  const params = new URLSearchParams();
  for (const [key, values] of Object.entries(active)) if (values.length) params.set(key, values.join(","));
  const s = params.toString();
  return s ? `?${s}` : "";
}

export function applyFilters(products: Product[], active: ActiveFilters): Product[] {
  const entries = Object.entries(active).filter(([, v]) => v.length);
  if (entries.length === 0) return products;
  return products.filter((p) =>
    entries.every(([key, values]) =>
      key === "brand" ? values.includes(p.brand ?? "") : values.some((v) => p.tags.includes(v)),
    ),
  );
}
