import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE = process.env.PUBLIC_SITE_URL ?? 'https://kenmartz.com';

export default defineConfig({
  site: SITE,
  output: 'hybrid',
  adapter: node({ mode: 'standalone' }),
  i18n: {
    defaultLocale: 'ka',
    locales: ['ka', 'en', 'ru'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
    fallback: {
      ru: 'en',
      ka: 'en',
    },
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
