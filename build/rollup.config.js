import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import vue from 'rollup-plugin-vue';
import scss from 'rollup-plugin-scss';
import typescript from 'rollup-plugin-typescript2';
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';

const extensions = ['.js', '.ts', '.vue'];
const plugins = [
  vue({ css: false }),
  alias({
    entries: {
      vue: 'vue/dist/vue.runtime.esm-browser.prod.js',
    },
  }),
  resolve({ extensions, browser: true }),
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**',
    include: '**/*.js',
  }),
  commonjs(),
  scss({
    output: 'dist/v-mapbox.css',
  }),
  typescript({
    include: [/\.tsx?$/, /\.vue\?.*?lang=ts/],
    useTsconfigDeclarationDir: true,
  }),
];

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: 'src/index.js',
    output: {
      format: 'esm',
      name: 'VMapbox',
      file: 'dist/v-mapbox.esm.js',
    },
    plugins,
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
    plugins,
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
    plugins,
    external: ['vue', 'mapbox-gl', 'map-promisified'],
  },
];
