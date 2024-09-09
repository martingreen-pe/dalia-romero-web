import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify'; // Reemplaza la importación anterior

export default defineConfig({
  output: 'server',
  adapter: netlify({
    functionPerRoute: true,  // Configura el adaptador correctamente
    dist: new URL('./dist/', import.meta.url),
  }),
  content: {
    collections: {
      posts: {
        schema: 'config:content',
        directory: 'src/content/posts',
      },
    },
  },
  vite: {
    assetsInclude: ['**/*.jpg', '**/*.png', '**/*.gif', '**/*.svg'],
  },     
});
