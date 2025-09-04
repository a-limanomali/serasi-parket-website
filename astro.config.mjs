import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://serasi-parket.com',
  base: '/',
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
  image: {
    formats: ['avif', 'webp'],
  },
  compressHTML: true,
  output: 'static',
  adapter: undefined,
});
