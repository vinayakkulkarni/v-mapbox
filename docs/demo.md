---
title: Live demo
description: v-mapbox components rendering a MapLibre map with markers, popups, a GeoJSON layer and deck.gl arcs.
---

# Live demo

Every piece of this map is a v-mapbox component: `VMap`, `VMarker` with a popup, `VLayerMapboxGeojson`, `VLayerDeckArc`, and the navigation, scale and fullscreen controls. Pick a city to fly there, click a pin for its popup, or toggle the layers.

<ClientOnly>
  <MapDemo />
</ClientOnly>

## The code

```vue
<script setup lang="ts">
  import 'maplibre-gl/dist/maplibre-gl.css';
  import { setWorkerUrl } from 'maplibre-gl';
  import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url';
  import { VControlNavigation, VMap, VMarker } from 'v-mapbox';

  // MapLibre 6 + Vite: point MapLibre at its bundled worker once.
  setWorkerUrl(workerUrl);

  const options = {
    container: 'map',
    style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
    center: [78.9, 21.5],
    zoom: 4,
  };
</script>

<template>
  <VMap :options="options" style="height: 480px">
    <VControlNavigation position="top-right" />
    <VMarker :coordinates="[73.8567, 18.5204]">Pune</VMarker>
  </VMap>
</template>
```

Basemap tiles: © [CARTO](https://carto.com/attributions), © [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors.
