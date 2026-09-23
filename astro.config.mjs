// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://homeworksnv.com",
  trailingSlash: "never",
  output: "static",
  build: { format: "file" },
  integrations: [
    react(),
    sitemap({
      filter: (page) => !/\/(proto|thank-you)(\/|$)/.test(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
