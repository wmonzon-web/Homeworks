// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://homeworksnv.com",
  trailingSlash: "never",
  build: { format: "file" },
  integrations: [
    react(),
    sitemap({
      filter: (page) => !/\/(thank-you|proto|api)(\/|$)/.test(page),
    }),
  ],
  adapter: cloudflare({ imageService: "passthrough" }),
  vite: {
    plugins: [tailwindcss()],
  },
});
