# Homeworks

Marketing site and lead funnel for Homeworks, a Las Vegas home-services company. Astro 7, React islands, Tailwind 4, shadcn/ui, deployed to Cloudflare Workers with D1, R2, and Email Sending.

Read [AGENTS.md](./AGENTS.md) for the full project context, conventions, bindings, and deployment steps.

## Quick start

```bash
npm install
cp .dev.vars.example .dev.vars
npm run db:migrate:local
npm run dev
```

Open http://localhost:4321.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Dev server in workerd with local D1/R2 |
| `npm run build` | Production build |
| `npm run check` | Type-check Astro and TypeScript |
| `npm run deploy` | Build and deploy to Cloudflare |
