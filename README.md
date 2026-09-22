# Homeworks

Marketing site and lead funnel for Homeworks, a Las Vegas home-services company. Astro 7, React islands, Tailwind 4, shadcn/ui, deployed to Cloudflare Workers with D1, R2, and Email Sending.

Read [AGENTS.md](./AGENTS.md) for the full project context, conventions, bindings, and deployment steps.

## Prerequisites

- Git
- Node.js **22.12.0 or newer**, with npm
- Access to the [GitHub repository](https://github.com/wmonzon-web/Homeworks)

## Clone and run locally

### 1. Clone the repository and install dependencies

```bash
git clone https://github.com/wmonzon-web/Homeworks.git
cd Homeworks
npm ci
```

### 2. Set up local environment variables

```bash
cp .dev.vars.example .dev.vars
```

In `.dev.vars`, replace the example `PHOTO_LINK_SECRET` with a random string. You can generate one with:

```bash
node -e "console.log(require('node:crypto').randomBytes(32).toString('hex'))"
```

This secret signs photo links in quote notifications. `.dev.vars` is ignored by Git.

### 3. Initialize the local database

```bash
npm run db:migrate:local
```

This creates the lead tables in the local D1 database. Local database and upload data are stored under `.wrangler/`, which is ignored by Git.

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321). If that port is occupied, use the address printed in the terminal. Changes to source files reload automatically.

The development server uses local Cloudflare bindings for D1 and R2. Production provisioning is separate; see [deployment instructions in AGENTS.md](./AGENTS.md#deployment) for Cloudflare account setup and real email delivery.

To stop the development server:

```bash
npx astro dev stop
```

## Validate changes

```bash
npm run check
npm run build
```

These commands check Astro/TypeScript and create a production build without deploying it.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Dev server in workerd with local D1/R2 |
| `npm run build` | Production build |
| `npm run check` | Type-check Astro and TypeScript |
| `npm run db:migrate:local` | Apply database migrations locally |
| `npm run typegen` | Regenerate Cloudflare binding types |
| `npm run deploy` | Build and deploy to Cloudflare |
