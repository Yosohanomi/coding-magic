import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: glob.sync('./src/*.html'),
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',

        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name.split('.').pop().toLowerCase();
          const imagesExt = ['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'avif'];

          if (imagesExt.includes(ext)) {
            return `assets/${assetInfo.name}`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      }
    },
    outDir: '../dist',
  },
  plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
});
