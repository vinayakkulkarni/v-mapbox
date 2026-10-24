import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import pkg from './package.json' with { type: 'json' };

const banner = `/*!
* ${pkg.name} v${pkg.version}
* (c) ${new Date().getFullYear()} ${pkg.author.name}
* @license ${pkg.license}
*/`;

export default defineConfig({
  plugins: [vue()],
  build: {
    target: 'esnext',
    sourcemap: true,
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      name: 'VMapbox',
      formats: ['es', 'cjs', 'umd'],
      fileName: pkg.name,
      cssFileName: pkg.name,
    },
    rolldownOptions: {
      external: [
        'vue',
        'maplibre-gl',
        '@deck.gl/layers',
        '@deck.gl/mapbox',
        '@deck.gl/core',
      ],
      output: {
        exports: 'named',
        banner,
        strict: true,
        globals: {
          vue: 'vue',
          'maplibre-gl': 'maplibreGl',
          '@deck.gl/mapbox': 'deckGlMapbox',
          '@deck.gl/layers': 'deckGlLayers',
          '@deck.gl/core': 'deckGlCore',
        },
      },
    },
  },
});
