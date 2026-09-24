# AGENTS.md

This is the canonical project context file. Update it when architecture, functionality, workflow, or product constraints change.

## Project

- Homeworks is a Las Vegas home services marketing site and quote funnel at `https://homeworksnv.com`.
- It is a child company of Xtreme Build Group. Only general colors and typography direction are shared; never reuse its copy, photos, or contact details.
- Astro 7 prerenders the website. Cloudflare Workers serves static assets and handles `POST /api/quote` from `src/worker.ts`.
- Production deploys through Cloudflare Workers Builds from `main` using `npm run build` and `npx wrangler deploy --config wrangler.jsonc`.
- The Worker serves `homeworksnv.com` and `www.homeworksnv.com`. Both custom domains are declared in `wrangler.jsonc`; canonical SEO URLs use the root hostname.
- Design decisions are in `docs/decisions/`.

## Current functionality

- Homepage with short quote form, services, process, products, FAQ, and CTA.
- Homepage hero uses an illustrative generated flooring installation photo at `public/images/hero/flooring-installation.png`; replace it with a real Homeworks project photo when available.
- Twenty service pages and product browse pages. Product content and imagery remain placeholders.
- The short form takes service selections, property address, ZIP, and phone to `/get-quote`. The address is passed through session storage so it is absent from the URL.
- `/get-quote` is a five step React wizard: services, timing, home, budget, contact. It submits to `POST /api/quote` and redirects to `/thank-you` on success.
- `src/worker.ts` validates and rate limits requests, inserts leads into D1 `homeworks-leads`, and records notification status. D1 is the source of truth.
- Email delivery is prepared in the Worker but inactive until `leads@homeworksnv.com` is created and verified and a `send_email` binding is added. Rows have `notification_status = pending_setup` in the meantime. Do not promise email delivery yet.
- R2 is unavailable; quote photos are not offered or stored.
- `/contact` remains a static contact page.
- Sitemap, robots, `llms.txt`, canonical and Open Graph metadata, and page JSON-LD are present.

## Key files

- `src/components/home/HeroLeadForm.astro`: short form, including multi service selection.
- `src/components/quote/QuoteWizard.tsx`: quote wizard.
- `src/pages/get-quote.astro`, `src/pages/thank-you.astro`: prerendered pages.
- `src/worker.ts`: API handler, binding types, and asset fallback.
- `migrations/0001_quote_leads.sql`: D1 schema.
- `wrangler.jsonc`: Worker entrypoint, static assets, D1, and rate limit bindings.
- `src/lib/business.ts`: business facts; do not hardcode phone, email, hours, or service areas elsewhere.
- `src/lib/data/services/catalog.ts`: service choices used by forms and menus.
- `src/components/services/`, `src/components/products/`: detail pages and cards.
- `src/styles/global.css`: Tailwind tokens.

## Conventions

- Use `.astro` for static UI and `.tsx` only for interactions needing client state.
- Preserve the existing design: Saira Condensed headings/buttons, Roboto body, red eyebrows and select accents, `shadow-raised` cards, 12px buttons.
- Inputs are at least 16px, have labels, and show field errors with `aria-describedby`.
- Keep claims factual. Do not invent statistics, testimonials, awards, product details, licensing facts, or scheduling guarantees.
- Never import `cloudflare:workers` from prerendered pages or data modules.
- Dynamic routes use `getStaticPaths()`.
- Keep prototype work in `src/pages/proto/` and `src/components/proto/`; remove it after recording the decision.
- Image data paths stay `/images/...`. Missing real photos use `ImageSlot` with a shot description.

## Commands

```bash
npm run dev                 # Astro frontend only; API needs Wrangler dev
npm run check               # Astro and TypeScript diagnostics
npm run build               # prerender dist/
npx wrangler types          # optional Cloudflare binding type check (generated file is not committed)
npx wrangler d1 migrations apply homeworks-leads --local
npx wrangler dev            # local Worker and static assets after build
npx wrangler d1 migrations apply homeworks-leads --remote
npm run deploy              # build and Wrangler deploy
```

## Deployment state and remaining work

- D1 database ID is in `wrangler.jsonc`. Apply `migrations/0001_quote_leads.sql` before deploying the API.
- Create `leads@homeworksnv.com`, then verify the pending Cloudflare destination address. Configure Cloudflare Email Sending for the domain, add `send_email` binding and allowed destination in `wrangler.jsonc`, and test delivery. The Worker already supports an optional `EMAIL` binding.
- Confirm business phone, license, social links, and operational claims. Replace placeholder photos and product catalog before launch.
- Turnstile and CRM webhook are not built. Add them only when requested or warranted by spam/workflow needs.
