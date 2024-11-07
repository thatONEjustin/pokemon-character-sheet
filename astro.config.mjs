// @ts-check
import { defineConfig } from 'astro/config';

import deno from "@deno/astro-adapter";
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: deno(),
  integrations: [svelte(), tailwind({
    applyBaseStyles: false,
    nesting: true
  })]
});
