// @ts-check
import { defineConfig } from 'astro/config';

import deno from "@deno/astro-adapter";
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';

export default defineConfig({
  integrations: [svelte(), tailwind({
    applyBaseStyles: false,
    nesting: true
  })],

  output: "server",
  adapter: deno(),
});
