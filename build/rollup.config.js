import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import vue from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only';

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: 'src/index.js',
    output: {
      format: 'esm',
      name: 'VMapbox',
      file: 'dist/v-mapbox.esm.js',
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      commonjs(),
      vue({ css: false }),
      css({ output: 'dist/v-mapbox.css' }),
    ],
    external: ['vue', 'mapbox-gl', 'map-promisified'],
  },
  // UMD build.
  {
    input: 'src/index.js',
    output: {
      format: 'umd',
      name: 'VMapbox',
      file: 'dist/v-mapbox.js',
      exports: 'named',
      globals: {
        vue: 'vue',
        'mapbox-gl': 'mapboxGl',
        'map-promisified': 'mapPromisified',
      },
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      commonjs(),
      vue(),
    ],
    external: ['vue', 'mapbox-gl', 'map-promisified'],
  },
  // CommonJS build
  {
    input: 'src/index.js',
    output: {
      format: 'cjs',
      name: 'VMapbox',
      file: 'dist/v-mapbox.cjs.js',
      exports: 'named',
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      commonjs(),
      vue(),
    ],
    external: ['vue', 'mapbox-gl', 'map-promisified'],
  },
];
