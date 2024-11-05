/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      'nf-symbols': ['Symbols Nerd Font'],
      'firacode': ['FiraCode Nerd Font'],
    },
    colors: {
      transparent: 'transparent',
      black: '#0e0d11'
    },
    extend: {},
  },
  plugins: [
    require('tailwind-dracula')()
  ],
}
