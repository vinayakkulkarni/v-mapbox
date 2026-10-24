import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme-without-fonts';
import { defineAsyncComponent, h } from 'vue';
import { installGlobalTracking } from './analytics';
import InstallSnippet from './InstallSnippet.vue';
import './style.css';

const MapDemo = defineAsyncComponent(() => import('./MapDemo.vue'));

export default {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'home-hero-image': () => h(MapDemo, { compact: true }),
    }),
  enhanceApp({ app }) {
    app.component('MapDemo', MapDemo);
    app.component('InstallSnippet', InstallSnippet);
    if (!import.meta.env.SSR) installGlobalTracking();
  },
} satisfies Theme;
