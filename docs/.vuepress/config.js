module.exports = {
  title: 'VueMapbox',
  description: 'Combine powers of Mapbox GL JS and Vue.js',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'API',
        link: '/api/',
      },
      {
        text: 'map-promisified',
        link: 'https://github.com/soal/map-promisified',
      },
    ],
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          ['/guide/', 'Quickstart'],
          ['/guide/basemap.md', 'Base map'],
          ['/guide/composition.md', 'Composition'],
          ['/guide/controls.md', 'Controls'],
          ['/guide/markers&popups.md', 'Markers and popups'],
          ['/guide/layers&sources.md', 'Layers and sources'],
        ],
      },
      {
        title: 'API',
        collapsable: false,
        children: [
          ['/api/', 'GlMap'],
          ['/api/controls.md', 'Controls'],
          ['/api/marker.md', 'MapMarker'],
          ['/api/popup.md', 'Popup'],
          ['/api/Layers/', 'Layer commons'],
          ['/api/Layers/geojsonlayer.md', 'GeojsonLayer'],
          ['/api/Layers/vectorlayer.md', 'VectorLayer'],
          ['/api/Layers/rasterlayer.md', 'RasterLayer'],
          ['/api/Layers/imagelayer.md', 'ImageLayer'],
          ['/api/Layers/videolayer.md', 'VideoLayer'],
          ['/api/Layers/canvaslayer.md', 'CanvasLayer'],
        ],
      },
      {
        title: 'Plugin components',
        collapsable: false,
        children: [
          ['/plugin_components/', 'Using plugin components'],
          [
            '/plugin_components/plugin_components_development.md',
            'Create a plugin component',
          ],
        ],
      },
      // ['/plugins/', 'Plugins'],
    ],
    theme: '@vuepress/theme-default',
    lastUpdated: 'Last Updated', // string | boolean
    // Smooth Scrolling
    smoothScroll: true,
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'vinayakkulkarni/v-mapbox',
    // Optional options for generating "Edit this page" link
    // if your docs are in a different repo from your main project:
    docsRepo: 'vinayakkulkarni/v-mapbox',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!',
  },
};
