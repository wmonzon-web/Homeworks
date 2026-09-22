import type { Service, ServiceCategory } from "@/lib/data/types";
import { SERVICE_CATALOG, SERVICE_CATEGORY_LABELS, SERVICE_CATEGORY_ORDER } from "@/lib/data/services/catalog";

/**
 * Every `<slug>.ts` in this folder exports `service`. Loaded eagerly at build
 * time so adding a service is: add a catalog entry, add a file.
 */
const modules = import.meta.glob<{ service: Service }>("./*.ts", { eager: true });

export const SERVICES: Service[] = Object.entries(modules)
  .filter(([path]) => !/\/(index|catalog)\.ts$/.test(path))
  .map(([, mod]) => mod.service)
  .sort((a, b) => a.order - b.order);

const bySlug = new Map(SERVICES.map((s) => [s.slug, s]));

export function getServiceBySlug(slug: string): Service | undefined {
  return bySlug.get(slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}

export function getServicesGrouped(): Array<{
  category: ServiceCategory;
  label: string;
  services: Service[];
}> {
  return SERVICE_CATEGORY_ORDER.map((category) => ({
    category,
    label: SERVICE_CATEGORY_LABELS[category],
    services: SERVICES.filter((s) => s.category === category),
  })).filter((g) => g.services.length > 0);
}

/** Catalog entries that don't have a content file yet (build-time sanity check). */
export function getMissingServiceFiles(): string[] {
  return SERVICE_CATALOG.filter((s) => !bySlug.has(s.slug)).map((s) => s.slug);
}
