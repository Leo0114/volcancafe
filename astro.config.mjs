import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://Leo0114.github.io",
  base: "/volcancafe",
  integrations: [tailwind(), image()]
});