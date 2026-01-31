import { defineConfig, mergeConfig } from 'vite';
import baseViteConfig from '@astro-kitchen/vite-config';

export default mergeConfig(
  baseViteConfig,
  defineConfig({
    appType: 'mpa',
    build: {
      outDir: '../dist',
      emptyOutDir: true,
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
