import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://USERNAME.github.io',
  base: '/REPOSITORY-NAME',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      filter: page => !page.includes('/admin') && !page.includes('/api'),
    }),
  ],
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  output: 'static',
  adapter: undefined,
});
