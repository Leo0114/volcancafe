import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://Leo0114.github.io",
  base: "/volcancafe",
  experimental: {
    assets: true,
  },
  integrations: [tailwind(), image(), preact()],
});
