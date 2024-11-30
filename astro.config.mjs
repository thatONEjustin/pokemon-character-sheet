// @ts-check
import { defineConfig } from 'astro/config';

import deno from "@deno/astro-adapter";
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';

import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],

  adapter: deno(),
  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  },

});
