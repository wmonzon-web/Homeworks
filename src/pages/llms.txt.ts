import type { APIRoute } from "astro";
import { BUSINESS } from "@/lib/business";
import { categories, getSubcategoriesForCategory } from "@/lib/data/categories";
import { getServicesGrouped } from "@/lib/data/services";
import { absoluteUrl } from "@/lib/seo";

/** Plain-text site summary for LLM crawlers (llmstxt.org). Prerendered from the data files. */
export const GET: APIRoute = () => {
  const areas = BUSINESS.serviceAreas.map((a) => a.city).join(", ");
  const lines: string[] = [
    `# ${BUSINESS.name}`,
    "",
    `> ${BUSINESS.name} is a licensed home-services contractor in Las Vegas, Nevada, serving ${areas}. We handle repairs, maintenance, and renovations for owner-occupied homes: drywall, painting, flooring, tile, plumbing, electrical, doors and windows, kitchen and bathroom refreshes, and general handyman work. Repairs are quoted as a flat price from photos; renovations get a written scope. ${BUSINESS.name} is a subsidiary of ${BUSINESS.parentCompany.name}, which handles high-end custom projects.`,
    "",
    `- Website: ${BUSINESS.siteUrl}`,
    `- Phone: ${BUSINESS.phone.display}`,
    `- Email: ${BUSINESS.email}`,
    `- Hours: ${BUSINESS.hours.display.join("; ")}`,
    `- Get a quote: ${absoluteUrl("/get-quote")}`,
    "",
    "## Services",
    "",
  ];
  for (const group of getServicesGrouped()) {
    lines.push(`### ${group.label}`, "");
    for (const s of group.services) {
      lines.push(`- [${s.name}](${absoluteUrl(`/services/${s.slug}`)}): ${s.summary}`);
      if (s.quickFacts) lines.push(`  - Typical duration: ${s.quickFacts.typicalDuration}`, `  - Pricing: ${s.quickFacts.priceBand}`);
    }
    lines.push("");
  }
  lines.push("## Products we install", "");
  for (const c of [...categories].sort((a, b) => a.order - b.order)) {
    const subs = getSubcategoriesForCategory(c.slug).map((s) => s.label).join(", ");
    lines.push(`- [${c.label}](${absoluteUrl(`/products/category/${c.slug}`)}): ${c.description} Subcategories: ${subs}.`);
  }
  lines.push("", "## Contact", "", `- [Contact page](${absoluteUrl("/contact")})`, `- [Request a quote](${absoluteUrl("/get-quote")})`, "");
  return new Response(lines.join("\n"), { headers: { "content-type": "text/plain; charset=utf-8" } });
};
