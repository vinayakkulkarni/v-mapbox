/// <reference types="vitest" />

import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [Vue()],
  test: {
    setupFiles: ['./test/setup/index.ts'],
    globals: true,
    environment: 'happy-dom',
  },
});
