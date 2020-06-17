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
import Mapbox from "mapbox-gl"
import { MglMap } from "v-mapbox"
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
      href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.11.0/mapbox-gl.css"
      rel="stylesheet"
    />
    <!-- v-mapbox CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/v-mapbox@latest/dist/v-mapbox.css"
      rel="stylesheet"
    />
    <!-- Mapbox GL JS -->
    <script src="https://api.tiles.mapbox.com/mapbox-gl-js/v1.11.0/mapbox-gl.js"></script>
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

All components will be placed in global VueMapbox object (`VueMapbox.MglMap` etc.)

## Migration from version 0.1.x

In version `0.2` you don't need to register VueMapbox as Vue plugin.

So you don't need this code anymore:

```js
import VueMapbox from "v-mapbox";
import Mapbox from "mapbox-gl";

Vue.use(VueMapbox, { mapboxgl: Mapbox });
```

Now you're ready for mapping. See how to [create a map](/guide/basemap.md).
