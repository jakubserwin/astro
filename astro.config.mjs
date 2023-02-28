// https://astro.build/config
import netlify from '@astrojs/netlify/functions';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: netlify(),
});
