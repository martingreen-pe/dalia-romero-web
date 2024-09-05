import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/static'; // Adaptador para sitios estáticos

export default defineConfig({
  output: 'static', // Genera un sitio completamente estático
  adapter: netlify(), // Adaptador de Netlify para estático
});