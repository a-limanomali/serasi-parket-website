import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://serasi-parket.com',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      customPages: [
        'https://serasi-parket.com/products/kayu-jati',
        'https://serasi-parket.com/products/kayu-ulin',
        'https://serasi-parket.com/products/kayu-merbau',
        'https://serasi-parket.com/products/kayu-meranti',
        'https://serasi-parket.com/products/kamper',
        'https://serasi-parket.com/products/bengkirai',
        'https://serasi-parket.com/products/sonokling',
        'https://serasi-parket.com/products/mahoni'
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
