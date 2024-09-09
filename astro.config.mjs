import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';

export default defineConfig({
  output: 'server',
  adapter: netlify({
    functionPerRoute: true,
    dist: new URL('./dist/', import.meta.url),
  }),
  integrations: [
    // Cualquier otra integración que estés usando
  ],
  // Habilita los scripts del lado del cliente
  scripts: {
    clientEntry: true
  },

  vite: {
    resolve: {
      alias: {
        '~/': '/src/',
      },
    },
  },
  
  content: {
    collections: {
    posts: {
      entrySchema: 'config:content',
      directory: 'src/content/posts',
     },
    }
  }        
});