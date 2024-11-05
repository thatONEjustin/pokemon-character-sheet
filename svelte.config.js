// import { sveltePreprocess } from "svelte-preprocess"
import { vitePreprocess } from '@astrojs/svelte';


export default {
  preprocess: vitePreprocess({ postcss: true }),
}
