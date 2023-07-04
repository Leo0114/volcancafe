import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import image from "@astrojs/image";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://Leo0114.github.io",
  base: "/volcancafe",
  integrations: [tailwind(), image(), preact(), partytown()]
});