import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig, mergeConfig } from 'vite';
import baseViteConfig from '@astro-kitchen/vite-config';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default mergeConfig(
  baseViteConfig,
  defineConfig({
    appType: 'mpa',
    build: {
      outDir: '../dist',
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          404: resolve(__dirname, '404.html'),
        },
      },
    },

    server: {
      proxy: {
        '/vanilla': {
          target: 'http://localhost:4321',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/vanilla/, ''),
        },
      },
    },
  }),
);
