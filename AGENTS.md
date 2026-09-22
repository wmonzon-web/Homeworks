# AGENTS.md

This is the canonical project context file for this repo. If architecture, functionality, workflow, or product constraints change, update this file. Do not treat `CLAUDE.md` as the source of truth.

## Project summary

- Project name: `homeworks`
- Production site: `https://homeworksnv.com`
- What it is: static marketing site for Homeworks, a Las Vegas home-services company (repairs, maintenance, and renovations for owner-occupied homes, roughly the $400k–$700k range)
- Relationship: a child company of Xtreme Build Group, which does high-end custom work. **Nothing from xtremebuildgroup.com is reused** except its general color scheme and typographic direction. No copy, photos, or contact details.
- Deployment: Cloudflare static asset hosting (Workers Builds); Astro outputs `dist/` without a server adapter
- Decision log: `docs/decisions/*.md` (start with `hero.md`)

## Current state

Implemented and verified locally:

- Homepage: hero with service/contact links, services grid, how-it-works, why Homeworks, products teaser, FAQ (with FAQPage JSON-LD), CTA band
- Services: 20 detail pages generated from typed data, grouped listing, Service + FAQPage + Breadcrumb JSON-LD
- Products: 8 categories, 32 subcategories, **placeholder** products and images; category, subcategory (filterable), and product detail pages with CollectionPage / Product JSON-LD
- Contact: static `/contact` page with phone, email, areas, and hours
- Forms and their backend have been removed; there are no submissions, uploads, database writes, or automatic emails
- Old `/get-quote` and `/thank-you` links redirect to `/contact` via `public/_redirects`
- `llms.txt`, sitemap, robots, canonical + Open Graph meta, generated OG image

Placeholders that must be replaced before launch:

- `src/lib/business.ts` phone, email, license number, socials (marked `PLACEHOLDER`)
- All product data and images (`src/lib/data/products/*`, `public/images/products/*`)
- Every photo: the hero, service heroes, content sections, and process steps render labeled placeholder frames (`ImageSlot`) until real images are supplied
- The "Licensed & insured" and "Same-week scheduling" claims in the hero and services copy must be confirmed true

Not built: portfolio, pricing/membership pages. Do not add form handling or external services without an explicit request.

## Stack

- Astro 7 (all routes prerendered; no API or server routes)
- React 19 islands only where interaction needs state
- Motion for hero, FAQ, product filtering, and sheet transitions; timing curve in `src/lib/motion.ts`
- Tailwind CSS 4 via `@tailwindcss/vite`, tokens in `src/styles/global.css`
- shadcn/ui (`radix-nova` style) for the React primitives in `src/components/ui`
- `@lucide/astro` in `.astro` files, `lucide-react` in `.tsx`
- Fonts: Saira Condensed 700 (headings, buttons) and Roboto Variable (body) from Fontsource
- Cloudflare hosts static HTML, CSS, JavaScript, fonts, and images only. No environment variables, secrets, service bindings, databases, R2, KV, or email services

## Repo map

- `src/pages/index.astro`: homepage
- `src/pages/services/index.astro`, `[slug].astro`: services listing and detail
- `src/pages/products/index.astro`, `category/[category]/index.astro`, `category/[category]/[subcategory].astro`, `[slug].astro`: product browsing
- `src/pages/contact.astro`, `404.astro`
- `src/pages/llms.txt.ts`: prerendered LLM-facing site summary
- `src/layouts/Base.astro`: document shell, SEO tags, WebSite + LocalBusiness JSON-LD, header, footer
- `src/components/layout/*`: Header (floating pill on desktop), MobileNav island, Footer, Wordmark, Breadcrumbs, `nav.ts`
- `src/components/home/*`: homepage sections; hero actions link to services and contact
- `src/components/services/*`: service page sections
- `src/components/products/*`: cards, `filters.ts`, `ProductListing.tsx` island
- `src/components/{SectionHeading,Faq,Cta,NumberedSteps,ServiceIcon,ImageSlot}.astro`: shared sections. `ImageSlot` renders a photo or, when `image` is absent, a labeled gray frame at the final aspect ratio; the label is the shot list
- `src/components/seo/{SEO,JsonLd}.astro`
- `src/lib/business.ts`: the only place business facts live
- `src/lib/seo.ts`, `image.ts`, `utils.ts`
- `src/lib/data/types.ts`: content model
- `src/lib/data/services/catalog.ts`: the 20-service list (slug, name, category, icon); `services/<slug>.ts`: full page content; `services/index.ts`: glob loader and helpers
- `src/lib/data/categories.ts`, `products/*.ts`, `faqs.ts`
- `scripts/generate-placeholder-products.mjs`, `scripts/generate-og.mjs`
- `wrangler.jsonc`: static asset hosting only; `scripts/clean-deploy-config.mjs` removes the old SSR deployment pointer before each build
- `public/_redirects`: old form routes redirect to contact
- `docs/decisions/`: design decisions and the rejected options

## Functional behavior

### Header and navigation

- Desktop: floating rounded bar with wordmark, Services / Products / Contact, phone (from `lg`), and a "Contact us" button
- Mobile: flat bar; hamburger opens a right-side sheet (`MobileNav.tsx`, hydrated only under 768px) with the nav, contact button, and phone
- Active link shows a red underline; nav items come from `src/components/layout/nav.ts`

### Homepage and hero

- The hero is the "Dark & Direct" direction from the prototype round (`docs/decisions/hero.md`): ink band, uppercase headline, white action card (original quote form removed for static-only hosting)
- Hero card links to `/services` and `/contact`; no form or personal-data collection
- No scroll-triggered animation, count-ups, testimonials, or statistics anywhere: nothing on the site claims a number we can't back

### Services

- `catalog.ts` is the list every menu and service listing reads; `<slug>.ts` files carry the page content and are loaded with `import.meta.glob`
- Detail page order: hero → quick facts → content sections (alternating white/cream, highlights and callouts) → benefits → numbered process → FAQ (native `<details>`) → related services → CTA
- Content voice rules used for the first draft: plain, specific, trade-accurate, Las Vegas-specific `local` callouts, search-phrased FAQs, no invented numbers or awards

### Products

- Category → subcategory → product. Subcategory pages render `ProductListing.tsx` (`client:idle`) with filters derived from product tags and brand; filter state lives in the URL query string
- Product detail links to the installing service and to `/contact`
- Product data is generated placeholder content; re-run `npm run products:placeholders` after editing the generator, or replace the files with the real catalog keeping the `Product` shape

### SEO

- Every page passes `title`, `description`, optional `image` and `noIndex` to `Base.astro`
- JSON-LD: WebSite + HomeAndConstructionBusiness on every page, plus per-page Service, FAQPage, BreadcrumbList, CollectionPage, Product
- `astro.config.mjs` sitemap filter excludes `/proto`; removed form/API routes are not generated
- `public/robots.txt` points to the sitemap

## Conventions

- Business facts only from `src/lib/business.ts`. Never hardcode the name, phone, email, hours, or areas
- `.astro` for anything static; `.tsx` islands only when the UI needs client state (`MobileNav`, `ProductListing`)
- Image `src` values in data stay as `/images/...` and are served directly from `public/`; no CDN environment configuration
- Photos go through `ImageSlot` with a `shot` description. Until real photos exist the placeholder frames stay; when a photo lands, pass `image` and keep the `shot` as its alt fallback. Service data can set `heroShot` and per-section `shot`; otherwise the label derives from the heading
- Every section opens with `SectionHeading` (red eyebrow, condensed heading). Red is reserved for the wordmark mark, eyebrows, step numbers, and one CTA at most
- Buttons: 12px radius, condensed uppercase. Cards: `shadow-raised`, never a solid border for depth. Separation lines: `border-black/10`
- Transitions list properties explicitly (no `transition-all`); press feedback is `active:scale-[0.96]`; hover only changes color, shadow, or transform
- Form edges use the visible `border-input` token; white surfaces inside `.dark` bands use `.light` to restore light tokens. Keep form borders at 1px (2px for option controls), not hairlines.
- Keep Motion restrained and respect reduced motion. Sheets use 240ms in / 180ms out; preserve existing hero, FAQ, and filter feedback.
- Inputs are 16px or larger; every input has a `<label for>`; errors render next to the field with `aria-describedby`
- No fabricated proof: no invented stats, testimonials, logos, or awards. Leave the space empty until real ones exist
- Never add `cloudflare:workers` imports, server routes, or service bindings to this static site
- Dynamic routes use `getStaticPaths()` from the data modules
- Prototype work goes in `src/pages/proto/` + `src/components/proto/` and is deleted after the decision is written to `docs/decisions/`

## Commands

```bash
npm run dev                # Astro local server, no Cloudflare login
npm run build              # clear legacy deployment pointer + static build to dist/
npm run check              # Astro/TypeScript diagnostics
npm run preview            # preview dist/ locally
npm run og                 # regenerate public/og/default.png
npm run products:placeholders
npm run deploy             # optional local static asset deployment; refuses if src/pages/proto exists
```

## Hosting and deployment

No environment files, variables, secrets, or Cloudflare resource provisioning are required. Keep `.env*`, `.dev.vars*`, and `.wrangler/` ignored so old local credentials/data cannot be committed.

The existing GitHub-connected Workers Builds project uses production branch `main`, repository root, build command `npm run build`, and deploy command `npx wrangler deploy --config wrangler.jsonc`. Wrangler is only the publishing tool, not an application runtime dependency. The config contains the site name, compatibility date, and `assets.directory: "./dist"`; there is no Worker entrypoint or backend binding. Do not add account-specific IDs.

A Cloudflare Pages project can alternatively use `npm run build` with output directory `dist` and no deploy command.

`npm run build` deletes only `.wrangler/deploy/config.json`, the obsolete adapter redirect, to prevent cached configuration from publishing the old backend. Do not delete any remote databases, buckets, or KV namespaces while making hosting changes.

Verify after deployment: homepage, contact, one service and product detail page, mobile navigation, product filters, custom 404, sitemap, and redirects from the two removed form routes. No form submission or email check applies.

## Follow-ups

- Replace placeholder phone, email, license, socials, photos, and product catalog before launch
- Confirm licensing and scheduling claims
- Portfolio once there are completed projects to show
- Forms remain removed until the user explicitly chooses a submission mechanism
