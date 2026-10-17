// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import markdownForAgents from '@puralex/astro-markdown-for-agents';

// https://astro.build/config
export default defineConfig({
  site: 'https://dj.dimaminka.com',
  adapter: cloudflare(),
  devToolbar: {
    enabled: false,
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'he'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    markdownForAgents(),
  ],
});