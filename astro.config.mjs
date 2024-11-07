// @ts-check
import { defineConfig } from 'astro/config';

// import deno from "@deno/astro-adapter";
// import node from "@astrojs/node";
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind({
    applyBaseStyles: false,
    nesting: true
  })],

  output: 'server',

  adapter: node({
    mode: 'standalone'
  })
});