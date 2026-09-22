# Homeworks

Static marketing site for Homeworks, a Las Vegas home-services company. Built with Astro 7, React islands, Tailwind 4, and shadcn/ui. Cloudflare only hosts the generated pages and assets.

Read [AGENTS.md](./AGENTS.md) for project context and conventions.

## Prerequisites

- Git
- Node.js **22.12.0 or newer**, with npm
- Access to the [GitHub repository](https://github.com/wmonzon-web/Homeworks)

## Clone and run locally

```bash
git clone https://github.com/wmonzon-web/Homeworks.git
cd Homeworks
npm ci
npm run dev
```

Open [http://localhost:4321](http://localhost:4321), or the address printed in the terminal if that port is occupied. Source changes reload automatically.

No environment files, secrets, database migrations, storage buckets, or Cloudflare login are needed to run the site locally.

To stop the development server:

```bash
npx astro dev stop
```

## Validate and preview

```bash
npm run check
npm run build
npm run preview
```

The build produces a static site in `dist/`. Use the address printed by the preview command to inspect it.

## Deploy from GitHub through Cloudflare

For the existing **Cloudflare Workers Builds** project, use these settings:

| Setting | Value |
|---|---|
| Production branch | `main` |
| Root directory | Repository root |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy --config wrangler.jsonc` |

The small `wrangler.jsonc` file identifies the site and tells Cloudflare to serve `dist/`, including clean URLs and the custom 404 page. It has no Worker script, account IDs, service bindings, or environment variables. Cloudflare runs its deployment tooling on the build server; contributors only need to push to GitHub.

If creating a **Cloudflare Pages** project instead, use build command `npm run build` and output directory `dist`. Pages handles publishing without a separate deploy command.

The build removes the old adapter's generated deployment-config pointer from the local cache so it cannot redirect deployment to the removed backend configuration.

## Current functionality

- Service pages, product browsing/filtering, mobile navigation, and contact details work as static pages with client-side interaction where needed.
- Quote and contact forms have been removed. There are no submissions, uploads, database writes, or automated emails.
- Former `/get-quote` and `/thank-you` URLs redirect to `/contact` on Cloudflare.
- Phone, email, licensing details, product catalog, and photos still need their placeholder values replaced before launch.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Local Astro development server |
| `npm run check` | Check Astro and TypeScript |
| `npm run build` | Generate the static site in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run deploy` | Optional local build and static-asset deployment; not needed for GitHub builds |
| `npm run og` | Regenerate the default social image |
| `npm run products:placeholders` | Regenerate placeholder product data and images |
