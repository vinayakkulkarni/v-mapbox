// https://github.com/vuejs/vue-test-utils/issues/936
// from @vue/cli-plugin-unit-mocha/setup.js
require('jsdom-global')();
require('browser-env');
// https://github.com/vuejs/vue-test-utils/issues/936
// better fix for "TypeError: Super expression must either be null or
// a function" than pinning an old version of prettier.
window.Date = Date;
window.URL.createObjectURL = function () {};

// Setup browser environment
const hooks = require('require-extension-hooks');
const Vue = require('vue');

// Setup Vue.js to remove production tip
Vue.config.productionTip = false;

// Setup vue files to be processed by `require-extension-hooks-vue`
hooks('vue').plugin('vue').push();
// Setup vue, js and ts files to be processed by `require-extension-hooks-babel`
hooks(['vue', 'js', 'ts'])
  .exclude(({ filename }) => filename.match(/\/node_modules\//))
  .plugin('babel')
  .push();
