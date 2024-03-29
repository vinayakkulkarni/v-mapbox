# Quickstart

## Using as ES module

### Installation

You can install v-mapbox via npm. Take note that you need to install mapbox-gl as peer dependency:

```bash
npm install --save v-mapbox mapbox-gl
```

Add Mapbox JS and CSS files to the files where you need them:

```js
import 'mapbox-gl/dist/mapbox-gl.css'
import 'v-mapbox/dist/v-mapbox.css';
import Mapbox from "mapbox-gl"
import { VMap } from "v-mapbox"
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


