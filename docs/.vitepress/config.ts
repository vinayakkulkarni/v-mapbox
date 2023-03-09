import { defineConfig } from 'vitepress';
import type { DefaultTheme } from 'vitepress/types/default-theme';

const nav: DefaultTheme.Config['nav'] = [
  {
    text: 'Guide',
    link: '/guide/',
  },
  {
    text: 'API',
    link: '/api/',
  },
  {
    text: 'Plugin Components',
    link: '/plugin-components/',
  },
];

const sidebar: DefaultTheme.Config['sidebar'] = {
  '/guide/': [
    {
      text: 'Guide',
      items: [
        { text: 'Index', link: '/guide/index.md' },
        { text: 'Basemap', link: '/guide/basemap.md' },
        { text: 'Composition', link: '/guide/composition.md' },
        { text: 'Controls', link: '/guide/controls.md' },
        { text: 'Markers & Popups', link: '/guide/markers-and-popups.md' },
        { text: 'Layers & Sources', link: '/guide/layers-and-sources.md' },
      ],
    },
  ],
  '/api/': [
    {
      text: 'API',
      items: [
        { text: 'Index', link: '/api/index.md' },
        { text: 'Controls', link: '/api/controls.md' },
        { text: 'Markers', link: '/api/marker.md' },
        { text: 'Popups', link: '/api/popup.md' },
        { text: 'Layers', link: '/api/Layers/README.md' },
        { text: 'GeoJSON Layer', link: '/api/Layers/geojsonlayer.md' },
        { text: 'Vector Layer', link: '/api/Layers/vectorlayer.md' },
        { text: 'Raster Layer', link: '/api/Layers/rasterlayer.md' },
        { text: 'Image Layer', link: '/api/Layers/imagelayer.md' },
        { text: 'Video Layer', link: '/api/Layers/videolayer.md' },
        { text: 'Canvas Layer', link: '/api/Layers/canvaslayer.md' },
      ],
    },
  ],
  '/plugin-components/': [
    {
      text: 'Plugin Components',
      items: [
        { text: 'Index', link: '/plugin-components/index.md' },
        {
          text: 'Development',
          link: '/plugin-components/plugin-components-development.md',
        },
      ],
    },
  ],
};

export default defineConfig({
  title: 'V-Mapbox',
  description: 'Combine powers of Mapbox GL JS and Vue.js',
  themeConfig: {
    nav,
    sidebar,
    footer: {
      message:
        'Released under the <a href="https://github.com/geospoc/v-mapbox/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright &copy; 2019-present <a href="https://github.com/vinayakkulkarni">Vinayak Kulkarni</a>',
    },
  },
});
