import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://a-limanomali.github.io',
  base: '/serasi-parket-website',
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
