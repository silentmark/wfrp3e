import sveltePreprocess from 'svelte-preprocess'

export default {
  preprocess: sveltePreprocess(),
   // enable run-time checks when not in production
  dev: true,
   // we'll extract any component CSS out into
   // a separate file — better for performance
  css: css => {
     css.write('dist/style.css')
  },
}