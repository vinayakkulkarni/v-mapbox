import { defineUserConfig } from '@vuepress/cli';
import type {
  DefaultThemeOptions,
  NavbarConfig,
  SidebarConfig,
} from '@vuepress/theme-default';

const nav: NavbarConfig = [
  {
    text: 'Guide',
    link: '/guide/',
  },
  {
    text: 'API',
    link: '/api/',
  },
];

export const sidebar: SidebarConfig = {
  '/guide/': [
    {
      text: 'Guide',
      children: [
        '/guide/README.md',
        '/guide/basemap.md',
        '/guide/composition.md',
        '/guide/controls.md',
        '/guide/markers&popups.md',
        '/guide/layers&sources.md',
      ],
    },
  ],
  '/api/': [
    {
      text: 'API',
      children: [
        '/api/README.md',
        '/api/controls.md',
        '/api/marker.md',
        '/api/popup.md',
        '/api/Layers/README.md',
        '/api/Layers/geojsonlayer.md',
        '/api/Layers/vectorlayer.md',
        '/api/Layers/rasterlayer.md',
        '/api/Layers/imagelayer.md',
        '/api/Layers/videolayer.md',
        '/api/Layers/canvaslayer.md',
      ],
    },
  ],
};

export default defineUserConfig<DefaultThemeOptions>({
  base: '/',
  title: 'VMapbox',
  description: 'Combine powers of Mapbox GL JS and Vue.js',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    locales: {
      '/': {
        // navbar
        navbar: nav,
        // sidebar
        sidebar,
        // page meta
        editLinkText: 'Edit this page on GitHub',
      },
    },
    theme: '@vuepress/theme-default',
    // Smooth Scrolling
    smoothScroll: true,
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'geospoc/v-mapbox',
    // Optional options for generating "Edit this page" link
    // if your docs are in a different repo from your main project:
    docsRepo: 'geospoc/v-mapbox',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!',
  },
});
