import netlify from '@astrojs/netlify/functions';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import astroI18next from 'astro-i18next';

export default defineConfig({
  integrations: [tailwind(), astroI18next()],
  output: 'server',
  adapter: netlify(),
});
