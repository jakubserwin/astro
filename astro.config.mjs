// https://astro.build/config
// https://astro.build/config
import netlify from '@astrojs/netlify/functions';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import astroI18next from 'astro-i18next';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), astroI18next()],
  output: 'server',
  adapter: netlify(),
});
