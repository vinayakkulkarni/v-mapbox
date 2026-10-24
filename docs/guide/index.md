# Quickstart

## Using as ES module

### Installation

Install v-mapbox with `maplibre-gl` as its peer dependency:

```bash
pnpm add v-mapbox maplibre-gl
```

Add Mapbox JS and CSS files to the files where you need them:

```js
import 'maplibre-gl/dist/maplibre-gl.css';
import 'v-mapbox/dist/v-mapbox.css';
import { VMap } from 'v-mapbox';
```

MapLibre GL 6 is ESM-only. Under a bundler, set its worker URL once before the first map renders (Vite shown, see the [MapLibre install guide](https://maplibre.org/maplibre-gl-js/docs/#installation) for other bundlers):

```js
import { setWorkerUrl } from 'maplibre-gl';
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url';

setWorkerUrl(workerUrl);
```

## Using in browser

### Installation

Add Vue, MapboxGL and v-mapbox scripts on your page:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- ... -->
    <!-- Mapbox GL CSS -->
    <link
      href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.13.2/mapbox-gl.css"
      rel="stylesheet"
    />
    <!-- v-mapbox CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/v-mapbox@latest/dist/v-mapbox.css"
      rel="stylesheet"
    />
    <!-- Mapbox GL JS -->
    <script src="https://api.tiles.mapbox.com/mapbox-gl-js/v1.13.2/mapbox-gl.js"></script>
    <!-- VueJS -->
    <script src="https://cdn.jsdelivr.net/npm/vue@latest/dist/vue.min.js"></script>
    <!-- v-mapbox -->
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/v-mapbox@latest/dist/v-mapbox.min.js"
    ></script>
    <!-- ... -->
  </head>
</html>
```

All components will be placed in global VueMapbox object (`VueMapbox.VMap` etc.)
