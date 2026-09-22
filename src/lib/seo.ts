import { BUSINESS } from "@/lib/business";
import { absoluteImageUrl } from "@/lib/image";

export type PageMeta = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
  type?: "website" | "article";
};

export type BreadcrumbItem = { name: string; path: string };

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, BUSINESS.siteUrl).toString();
}

/** Title as shown in the tab and social cards. */
export function socialTitle(title?: string): string {
  return title ? `${title} | ${BUSINESS.name}` : BUSINESS.name;
}

export function ogImageUrl(image: string = BUSINESS.defaultOgImage): string {
  return absoluteImageUrl(image, BUSINESS.siteUrl);
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function createWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BUSINESS.name,
    url: BUSINESS.siteUrl,
  };
}

export function createLocalBusinessSchema() {
  const sameAs = Object.values(BUSINESS.socials).filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${BUSINESS.siteUrl}/#business`,
    name: BUSINESS.name,
    url: BUSINESS.siteUrl,
    telephone: BUSINESS.phone.e164,
    email: BUSINESS.email,
    image: ogImageUrl(),
    logo: absoluteUrl("/brand/wordmark.svg"),
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.region,
      addressCountry: BUSINESS.address.country,
    },
    areaServed: BUSINESS.serviceAreas.map((area) => ({
      "@type": "City",
      name: `${area.city}, ${area.state}`,
    })),
    openingHoursSpecification: BUSINESS.hours.structured.map((spec) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: spec.days,
      opens: spec.opens,
      closes: spec.closes,
    })),
    ...(BUSINESS.parentCompany.name && {
      parentOrganization: {
        "@type": "Organization",
        name: BUSINESS.parentCompany.name,
        url: BUSINESS.parentCompany.url,
      },
    }),
    ...(sameAs.length > 0 && { sameAs }),
  };
}

export function createFaqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
