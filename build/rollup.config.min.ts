import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import beep from '@rollup/plugin-beep';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import sucrase from '@rollup/plugin-sucrase';
import scss from 'rollup-plugin-scss';
import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';
import pkg from '../package.json';

const plugins = [
  alias({
    entries: {
      vue$: 'vue/dist/vue.runtime.esm-bundler.js',
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
  vue(),
  scss({
    output: 'dist/v-mapbox.min.css',
    // @ts-ignore
    outputStyle: 'compressed',
    sourceMap: true,
    sass: require('sass'),
  }),
  replace({
    preventAssignment: true,
    __VUE_OPTIONS_API__: JSON.stringify('true'),
    __VUE_PROD_DEVTOOLS__: JSON.stringify('false'),
  }),
  // @ts-ignore
  sucrase({
    exclude: ['node_modules/**'],
    transforms: ['typescript'],
  }),
  beep(),
  terser({
    compress: {
      drop_console: true,
      drop_debugger: true,
    },
  }),
];

const banner = `/*!
  * ${pkg.name} v${pkg.version}
  * (c) ${new Date().getFullYear()} ${pkg.author.name}
  * @license ${pkg.license}
  */`;

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.cdn,
      format: 'umd',
      name: 'VMapbox',
      exports: 'named',
      banner,
      sourcemap: true,
      globals: {
        vue: 'vue',
        'mapbox-gl': 'mapboxGl',
        '@deck.gl/mapbox': 'deckGlMapbox',
        '@deck.gl/layers': 'deckGlLayers',
        '@deck.gl/core': 'deckGlCore',
      },
    },
  ],
  plugins,
  external: [
    'vue',
    'mapbox-gl',
    '@deck.gl/layers',
    '@deck.gl/mapbox',
    '@deck.gl/core',
  ],
};
