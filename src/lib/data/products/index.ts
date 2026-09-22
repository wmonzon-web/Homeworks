import type { Product, Subcategory, TopCategory } from "@/lib/data/types";
import { flooringProducts } from "@/lib/data/products/flooring";
import { paintFinishesProducts } from "@/lib/data/products/paint-finishes";
import { plumbingFixturesProducts } from "@/lib/data/products/plumbing-fixtures";
import { electricalLightingProducts } from "@/lib/data/products/electrical-lighting";
import { doorsWindowsTrimProducts } from "@/lib/data/products/doors-windows-trim";
import { kitchenBathProducts } from "@/lib/data/products/kitchen-bath";
import { drywallMaterialsProducts } from "@/lib/data/products/drywall-materials";
import { hvacWaterProducts } from "@/lib/data/products/hvac-water";

export const products: Product[] = [
  ...flooringProducts,
  ...paintFinishesProducts,
  ...plumbingFixturesProducts,
  ...electricalLightingProducts,
  ...doorsWindowsTrimProducts,
  ...kitchenBathProducts,
  ...drywallMaterialsProducts,
  ...hvacWaterProducts,
];

const bySlug = new Map(products.map((p) => [p.slug, p]));

export function getProductBySlug(slug: string): Product | undefined {
  return bySlug.get(slug);
}

export function getProductsByCategory(category: TopCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductsBySubcategory(subcategory: Subcategory): Product[] {
  return products.filter((p) => p.subcategory === subcategory);
}

export function getFeaturedProducts(limit = 8): Product[] {
  return products.filter((p) => p.featured).slice(0, limit);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  const same = products.filter((p) => p.subcategory === product.subcategory && p.slug !== product.slug);
  const cat = products.filter((p) => p.category === product.category && p.subcategory !== product.subcategory);
  return [...same, ...cat].slice(0, limit);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
