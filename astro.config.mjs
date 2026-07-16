import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://hito-to-ba-no-aida.pages.dev',
  integrations: [sitemap()],
  trailingSlash: 'always',
});
