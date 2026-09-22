# AGENTS.md

This is the canonical project context file for this repo. If architecture, functionality, workflow, or product constraints change, update this file. Do not treat `CLAUDE.md` as the source of truth.

## Project summary

- Project name: `homeworks`
- Production site: `https://homeworksnv.com`
- What it is: marketing site and lead funnel for Homeworks, a Las Vegas home-services company (repairs, maintenance, and renovations for owner-occupied homes, roughly the $400k–$700k range)
- Relationship: a child company of Xtreme Build Group, which does high-end custom work. **Nothing from xtremebuildgroup.com is reused** except its general color scheme and typographic direction. No copy, photos, or contact details.
- Deployment: Cloudflare Workers via `@astrojs/cloudflare`
- Decision log: `docs/decisions/*.md` (start with `hero.md`)

## Current state

Implemented and verified locally:

- Homepage: hero with the short quote form, services grid, how-it-works, why Homeworks, products teaser, FAQ (with FAQPage JSON-LD), CTA band
- Services: 20 detail pages generated from typed data, grouped listing, Service + FAQPage + Breadcrumb JSON-LD
- Products: 8 categories, 32 subcategories, **placeholder** products and images; category, subcategory (filterable), and product detail pages with CollectionPage / Product JSON-LD
- Quote funnel: hero short form → `/get-quote` six-step wizard → `POST /api/quote` → `/thank-you`
- Contact: `/contact` form → `POST /api/contact` → `/thank-you`
- Leads stored in D1, photos in R2, notification email via the `send_email` binding
- `llms.txt`, sitemap, robots, canonical + Open Graph meta, generated OG image

Placeholders that must be replaced before launch:

- `src/lib/business.ts` phone, email, license number, socials (marked `PLACEHOLDER`)
- All product data and images (`src/lib/data/products/*`, `public/images/products/*`)
- Every photo: the hero, service heroes, content sections, and process steps render labeled placeholder frames (`ImageSlot`) until real images are supplied
- The "Licensed & insured" and "Same-week scheduling" claims in the hero and services copy must be confirmed true
- `wrangler.jsonc` `database_id`, `LEAD_TO`, and `allowed_destination_addresses`

Not built: portfolio, pricing/membership pages, Turnstile, webhook delivery to a CRM.

## Stack

- Astro 7 (static output; only `src/pages/api/*` are server routes)
- React 19 islands only where interaction needs state
- Motion (`motion/react`) for user-triggered wizard and sheet transitions; timing curve in `src/lib/motion.ts`
- Tailwind CSS 4 via `@tailwindcss/vite`, tokens in `src/styles/global.css`
- shadcn/ui (`radix-nova` style) for the React primitives in `src/components/ui`
- `@lucide/astro` in `.astro` files, `lucide-react` in `.tsx`
- Fonts: Saira Condensed 700 (headings, buttons) and Roboto Variable (body) from Fontsource
- Cloudflare: Workers, D1 (`DB`), R2 (`UPLOADS`), Email Sending (`EMAIL`), Rate Limiting (`LEAD_RATE_LIMIT`)

## Repo map

- `src/pages/index.astro`: homepage
- `src/pages/services/index.astro`, `[slug].astro`: services listing and detail
- `src/pages/products/index.astro`, `category/[category]/index.astro`, `category/[category]/[subcategory].astro`, `[slug].astro`: product browsing
- `src/pages/get-quote.astro`, `contact.astro`, `thank-you.astro`, `404.astro`
- `src/pages/api/quote.ts`, `api/contact.ts`, `api/photo/[...key].ts`: server routes (`prerender = false`)
- `src/pages/llms.txt.ts`: prerendered LLM-facing site summary
- `src/layouts/Base.astro`: document shell, SEO tags, WebSite + LocalBusiness JSON-LD, header, footer
- `src/components/layout/*`: Header (floating pill on desktop), MobileNav island, Footer, Wordmark, Breadcrumbs, `nav.ts`
- `src/components/home/*`: homepage sections; `HeroLeadForm.astro` is the plain-HTML GET form that hands off to the wizard
- `src/components/services/*`: service page sections
- `src/components/products/*`: cards, `filters.ts`, `ProductListing.tsx` island
- `src/components/quote/*`: `QuoteWizard.tsx` island and `OptionCard.tsx`
- `src/components/contact/ContactForm.tsx`: island
- `src/components/{SectionHeading,Faq,Cta,NumberedSteps,ServiceIcon,ImageSlot}.astro`: shared sections. `ImageSlot` renders a photo or, when `image` is absent, a labeled gray frame at the final aspect ratio; the label is the shot list
- `src/components/seo/{SEO,JsonLd}.astro`
- `src/lib/business.ts`: the only place business facts live
- `src/lib/seo.ts`, `image.ts`, `utils.ts`
- `src/lib/data/types.ts`: content model
- `src/lib/data/services/catalog.ts`: the 20-service list (slug, name, category, icon); `services/<slug>.ts`: full page content; `services/index.ts`: glob loader and helpers
- `src/lib/data/categories.ts`, `products/*.ts`, `faqs.ts`
- `src/lib/leads/*`: validation, D1, R2 storage and signed links, email HTML, MIME fallback, delivery, request helpers
- `migrations/0001_leads.sql`: D1 schema
- `scripts/generate-placeholder-products.mjs`, `scripts/generate-og.mjs`
- `wrangler.jsonc`, `worker-configuration.d.ts` (generated, committed), `.dev.vars.example`
- `docs/decisions/`: design decisions and the rejected options

## Functional behavior

### Header and navigation

- Desktop: floating rounded bar with wordmark, Services / Products / Contact, phone (from `lg`), and a "Get a quote" button
- Mobile: flat bar; hamburger opens a right-side sheet (`MobileNav.tsx`, hydrated only under 768px) with the nav, quote button, and phone
- Active link shows a red underline; nav items come from `src/components/layout/nav.ts`

### Homepage and hero

- The hero is the "Dark & Direct" direction from the prototype round (`docs/decisions/hero.md`): ink band, uppercase headline, white quote card
- `HeroLeadForm.astro` is a plain `GET` form to `/get-quote` with `service`, `zip`, `phone`. No JavaScript
- No scroll-triggered animation, count-ups, testimonials, or statistics anywhere: nothing on the site claims a number we can't back

### Services

- `catalog.ts` is the list every menu and form reads; `<slug>.ts` files carry the page content and are loaded with `import.meta.glob`
- Detail page order: hero → quick facts → content sections (alternating white/cream, highlights and callouts) → benefits → numbered process → FAQ (native `<details>`) → related services → CTA
- Content voice rules used for the first draft: plain, specific, trade-accurate, Las Vegas-specific `local` callouts, search-phrased FAQs, no invented numbers or awards

### Products

- Category → subcategory → product. Subcategory pages render `ProductListing.tsx` (`client:idle`) with filters derived from product tags and brand; filter state lives in the URL query string
- Product detail links to the installing service and to `/get-quote?service=…&product=…`
- Product data is generated placeholder content; re-run `npm run products:placeholders` after editing the generator, or replace the files with the real catalog keeping the `Product` shape

### Quote wizard

- Steps: Service(s) → Timing → Your home → Photos → Budget → Contact
- Prefills from `?service`, `?zip`, `?phone`, `?product`; skips to step 2 when a service is given
- Draft persists in `sessionStorage` (`hw-quote-draft`), not photos
- Submits `FormData` to `/api/quote`; on success redirects to `/thank-you?type=quote`

### Lead API

- Both routes: reject when the honeypot `website` is filled or the render timestamp `t` is under 3 s old (silently return ok), rate-limit by `cf-connecting-ip` when the `LEAD_RATE_LIMIT` binding exists, validate, insert into D1, then `deliverLead()`
- `/api/quote` also stores up to 5 images (8 MB each) in R2 under `quotes/<leadId>/`
- The D1 row is the source of truth. A lead is `200 { ok, id }` once inserted, even if email fails; `email_status` records `sent | failed | skipped`
- Email uses the `send_email` binding. The code tries the object-form `send()` first and falls back to `EmailMessage` with a hand-built MIME body
- Photo links in the email are signed: `/api/photo/<key>?t=<hmac>` using `PHOTO_LINK_SECRET`
- Astro's CSRF origin check is on: POSTs need an `Origin` header (browsers send it; for curl add `-H "Origin: http://localhost:4321" -H "Expect:"`)

### SEO

- Every page passes `title`, `description`, optional `image` and `noIndex` to `Base.astro`
- JSON-LD: WebSite + HomeAndConstructionBusiness on every page, plus per-page Service, FAQPage, BreadcrumbList, CollectionPage, Product
- `astro.config.mjs` sitemap filter excludes `/thank-you`, `/api`, `/proto`
- `public/robots.txt` disallows `/api/` and `/thank-you`

## Conventions

- Business facts only from `src/lib/business.ts`. Never hardcode the name, phone, email, hours, or areas
- `.astro` for anything static; `.tsx` islands only when the UI needs client state (`MobileNav`, `QuoteWizard`, `ContactForm`, `ProductListing`)
- Image `src` values in data stay as `/images/...`; wrap with `cdnUrl()` at render time so a CDN origin can be added with `PUBLIC_CDN_URL`
- Photos go through `ImageSlot` with a `shot` description. Until real photos exist the placeholder frames stay; when a photo lands, pass `image` and keep the `shot` as its alt fallback. Service data can set `heroShot` and per-section `shot`; otherwise the label derives from the heading
- Every section opens with `SectionHeading` (red eyebrow, condensed heading). Red is reserved for the wordmark mark, eyebrows, step numbers, and one CTA at most
- Buttons: 12px radius, condensed uppercase. Cards: `shadow-raised`, never a solid border for depth. Separation lines: `border-black/10`
- Transitions list properties explicitly (no `transition-all`); press feedback is `active:scale-[0.96]`; hover only changes color, shadow, or transform
- Form edges use the visible `border-input` token; white surfaces inside `.dark` bands use `.light` to restore light tokens. Keep form borders at 1px (2px for option controls), not hairlines.
- Motion uses only transform/opacity: wizard steps 200ms, progress 220ms, sheets 240ms in / 180ms out. No initial-load or scroll reveals. Respect reduced motion (including fades); keyboard wizard navigation is immediate.
- Inputs are 16px or larger; every input has a `<label for>`; errors render next to the field with `aria-describedby`
- No fabricated proof: no invented stats, testimonials, logos, or awards. Leave the space empty until real ones exist
- Never import `cloudflare:workers` from prerendered pages or data modules
- Dynamic routes use `getStaticPaths()` from the data modules
- Prototype work goes in `src/pages/proto/` + `src/components/proto/` and is deleted after the decision is written to `docs/decisions/`

## Commands

```bash
npm run dev                # wrangler types + astro dev (workerd with local D1/R2)
npm run build              # astro build
npm run check              # astro check
npm run typegen            # regenerate worker-configuration.d.ts after editing wrangler.jsonc
npm run db:migrate:local   # apply migrations to the local D1
npm run db:migrate:remote  # apply migrations to production D1
npm run og                 # regenerate public/og/default.png
npm run products:placeholders
npm run deploy             # refuses if src/pages/proto exists; astro build + wrangler deploy
```

Inspect local leads:

```bash
npx wrangler d1 execute homeworks-leads --local --command "SELECT id, type, name, email_status FROM leads ORDER BY created_at DESC LIMIT 20"
```

## Environment and bindings

| Name | Kind | Purpose |
|---|---|---|
| `DB` | D1 (`homeworks-leads`) | lead rows, `migrations/` |
| `UPLOADS` | R2 (`homeworks-uploads`) | quote photos, private |
| `EMAIL` | send_email | lead notification to `LEAD_TO` |
| `LEAD_RATE_LIMIT` | ratelimits (5 / 60 s) | per-IP throttle |
| `LEAD_FROM`, `LEAD_TO` | vars | sender (must be on a verified sending domain) and destination inbox |
| `PHOTO_LINK_SECRET` | secret | HMAC for photo links; `.dev.vars` locally, `wrangler secret put` in prod |
| `PUBLIC_CDN_URL` | optional public var | CDN origin for `/images/...` |
| `PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN` | optional public var | Web Analytics beacon |

## Deployment

One-time setup (needs the Cloudflare account and the `homeworksnv.com` zone):

1. `npx wrangler login`
2. `npx wrangler d1 create homeworks-leads` → paste the id into `wrangler.jsonc`
3. `npx wrangler r2 bucket create homeworks-uploads`
4. Dashboard → Email → Email Sending: add `homeworksnv.com`, verify the destination inbox; set `LEAD_TO` and `allowed_destination_addresses`
5. `npx wrangler secret put PHOTO_LINK_SECRET`
6. `npm run typegen && npm run db:migrate:remote`
7. `npm run deploy`; attach the custom domain under Workers → Domains (or add `routes` with `custom_domain: true` to `wrangler.jsonc`)

Verify after deploy: `curl -I https://homeworksnv.com`, `/sitemap-index.xml`, `/llms.txt`, submit a real quote and confirm the email and photo links, `npx wrangler tail`.

## Follow-ups

- Real hero photo and product catalog with images (then `PUBLIC_CDN_URL` if served from R2)
- Confirm license number and operational claims in copy
- Turnstile on the two forms if spam appears
- Webhook deliverer in `src/lib/leads/deliver.ts` for a CRM
- Portfolio once there are completed projects to show
