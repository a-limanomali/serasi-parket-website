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
      customPages: [
        'https://USERNAME.github.io/REPOSITORY-NAME/products/kayu-jati',
        'https://USERNAME.github.io/REPOSITORY-NAME/products/kayu-ulin',
        'https://USERNAME.github.io/REPOSITORY-NAME/products/kayu-merbau',
        'https://USERNAME.github.io/REPOSITORY-NAME/products/kayu-meranti',
        'https://USERNAME.github.io/REPOSITORY-NAME/products/kamper',
        'https://USERNAME.github.io/REPOSITORY-NAME/products/bengkirai',
        'https://USERNAME.github.io/REPOSITORY-NAME/products/sonokling',
        'https://USERNAME.github.io/REPOSITORY-NAME/products/mahoni'
      ],
      filter: (page) => !page.includes('/admin') && !page.includes('/api'),
    })
  ],
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  experimental: {
    optimizeHoistedScript: true,
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]',
          chunkFileNames: 'assets/[name].[hash].js',
          entryFileNames: 'assets/[name].[hash].js',
        }
      },
      cssCodeSplit: true,
      sourcemap: false,
    },
    optimizeDeps: {
      include: ['astro/runtime/client/*'],
    },
  },
  output: 'static',
  adapter: undefined,
});
