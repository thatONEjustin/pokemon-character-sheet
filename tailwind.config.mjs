/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      'pokemon-gb': ['Pokemon GB'],
      'press-start': ['Press Start 2P'],
      'nf-symbols': ['Symbols Nerd Font'],
      'firacode': ['FiraCode Nerd Font'],
    },
    colors: {
      transparent: 'transparent',
      // Colours
      // $neutral: #F8F3F8;
      // $contrast: #181010;
      // $primary-accent: #48A058;
      // $secondary-accent: #F0B088;
      // $danger-accent: #B3181C;
      // $dimmed: change-color($contrast, $alpha: 0.6);
      // $dimmed-light: change-color($neutral, $alpha: 0.6);
    },
    extend: {
      colors: {
        nooch: {
          DEFAULT: '#F8F3F8'
        },
        poke: {
          contrast: {
            DEFAULT: '#181010',
          },
          primary: {
            DEFAULT: '#48A058',
          },
          secondary: {
            DEFAULT: '#F0B088',
          },
          danger: {
            DEFAULT: '#B3181C',
          },
        }
      }
    },
  },
  plugins: [
    require('tailwind-dracula')()
  ],
}
