// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import markdownForAgents from '@puralex/astro-markdown-for-agents';

// https://astro.build/config
export default defineConfig({
  site: 'https://dj.dimaminka.com',
  adapter: cloudflare(),
  integrations: [
    markdownForAgents(),
  ],
});