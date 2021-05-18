import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import vue from 'rollup-plugin-vue';
import scss from 'rollup-plugin-scss';

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
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
      }),
      commonjs(),
      vue({ css: false }),
      scss({ output: 'dist/v-mapbox.css', sass: require('sass') }),
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
        babelHelpers: 'bundled',
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
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
      }),
      commonjs(),
      vue(),
    ],
    external: ['vue', 'mapbox-gl', 'map-promisified'],
  },
];
