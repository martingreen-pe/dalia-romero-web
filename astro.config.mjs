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
  content: {
    collections: {
    posts: {
      schema: 'config:content',
      directory: 'src/content/posts',
     },
    }
  },   
  vite: {
    assetsInclude: ['**/*.jpg', '**/*.png', '**/*.gif', '**/*.svg'],
  },     
});