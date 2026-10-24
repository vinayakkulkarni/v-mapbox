import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitepress';
import type { DefaultTheme, HeadConfig } from 'vitepress';

import {
  GA4_MEASUREMENT_ID,
  OPENPANEL_API_URL,
  OPENPANEL_CLIENT_ID,
  PLAUSIBLE_SCRIPT_ID,
} from './theme/analytics';

const SITE_URL = 'https://v-mapbox.vinayakkulkarni.dev';

const analyticsHead: HeadConfig[] = [
  [
    'script',
    {
      async: '',
      src: `https://analytics.geoql.in/js/${PLAUSIBLE_SCRIPT_ID}.js`,
    },
  ],
  [
    'script',
    {},
    'window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()',
  ],
  [
    'script',
    {},
    `window.op=window.op||function(){var n=[];return new Proxy(function(){arguments.length&&n.push([].slice.call(arguments))},{get:function(t,r){return"q"===r?n:function(){n.push([r].concat([].slice.call(arguments)))}},has:function(t,r){return"q"===r}})}();window.op('init',${JSON.stringify(
      {
        apiUrl: OPENPANEL_API_URL,
        clientId: OPENPANEL_CLIENT_ID,
        trackScreenViews: true,
        trackOutgoingLinks: true,
        trackAttributes: true,
      },
    )});`,
  ],
  ['script', { async: '', defer: '', src: 'https://openpanel.dev/op1.js' }],
  ...(GA4_MEASUREMENT_ID
    ? ([
        [
          'script',
          {
            async: '',
            src: `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`,
          },
        ],
        [
          'script',
          {},
          `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA4_MEASUREMENT_ID}');`,
        ],
      ] satisfies HeadConfig[])
    : []),
];

const nav: DefaultTheme.Config['nav'] = [
  {
    text: 'Demo',
    link: '/demo',
  },
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
        { text: 'Layers', link: '/api/Layers/index.md' },
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
  description: 'MapLibre GL maps as Vue 3 components',
  lang: 'en-US',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: { hostname: SITE_URL },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#0f766e' }],
    ['meta', { property: 'og:url', content: SITE_URL }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@300;400;500;600;800&display=swap',
      },
    ],
    ...analyticsHead,
  ],
  vite: {
    build: {
      // maplibre-gl ships one prebuilt ~1 MB bundle that cannot be split, and
      // deck.gl (~0.95 MB) is already its own lazy chunk. Both load only on
      // the map routes, never on first paint of the docs.
      chunkSizeWarningLimit: 1200,
    },
    resolve: {
      alias: {
        'v-mapbox': fileURLToPath(
          new URL('../../src/index.ts', import.meta.url),
        ),
      },
    },
  },
  themeConfig: {
    logo: '/logo.svg',
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vinayakkulkarni/v-mapbox' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/v-mapbox' },
    ],
    search: { provider: 'local' },
    footer: {
      message:
        'Released under the <a href="https://github.com/vinayakkulkarni/v-mapbox/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright &copy; 2019-present <a href="https://github.com/vinayakkulkarni">Vinayak Kulkarni</a>',
    },
  },
});
