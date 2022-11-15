import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import beep from '@rollup/plugin-beep';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import sucrase from '@rollup/plugin-sucrase';
import scss from 'rollup-plugin-scss';
import vue from 'rollup-plugin-vue';
import pkg from '../package.json';

export const banner = `/*!
* ${pkg.name} v${pkg.version}
* (c) ${new Date().getFullYear()} ${pkg.author.name}
* @license ${pkg.license}
*/`;

const plugins = [
  alias({
    entries: {
      vue$: 'vue/dist/vue.runtime.esm.js',
    },
  }),
  resolve({
    extensions: ['.js', '.ts', '.vue'],
    browser: true,
  }),
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**',
  }),
  commonjs({
    extensions: ['.js', '.ts', '.vue'],
    exclude: 'src/**',
    include: 'node_modules/**',
  }),
  vue({ css: false }),
  scss({
    output: 'dist/v-mapbox.css',
    sass: require('sass'),
    sourceMap: true,
  }),
  sucrase({
    exclude: ['node_modules/**'],
    transforms: ['typescript'],
  }),
  beep(),
];

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/v-mapbox.cjs.js',
      format: 'cjs',
      name: 'VMapbox',
      exports: 'named',
      strict: true,
      sourcemap: true,
      banner,
    },
    {
      file: 'dist/v-mapbox.esm.js',
      format: 'es',
      name: 'VMapbox',
      exports: 'named',
      sourcemap: true,
      banner,
    },
    {
      file: 'dist/v-mapbox.js',
      format: 'umd',
      name: 'VMapbox',
      exports: 'named',
      banner,
      sourcemap: true,
      globals: {
        vue: 'vue',
        'mapbox-gl': 'mapboxGl',
        'map-promisified': 'mapPromisified',
      },
    },
  ],
  plugins,
  external: ['vue', 'mapbox-gl', 'map-promisified'],
};
