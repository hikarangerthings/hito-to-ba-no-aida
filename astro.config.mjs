import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://hito-to-ba-no-aida.hikaru-taniguchi-2023.workers.dev',
  integrations: [sitemap()],
  trailingSlash: 'always',
});
