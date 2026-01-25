import { defineConfig, mergeConfig } from 'vite';
import baseViteConfig from '@astro-kitchen/vite-config';

export default mergeConfig(
  baseViteConfig,
  defineConfig({
    build: {
      outDir: '../dist',
      emptyOutDir: true,
    },
  }),
);
