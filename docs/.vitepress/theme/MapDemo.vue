<script setup lang="ts">
  import 'maplibre-gl/dist/maplibre-gl.css';
  import type { ArcLayerProps } from '@deck.gl/layers';
  import type { LngLatLike, Map, MapOptions } from 'maplibre-gl';
  import { setWorkerUrl } from 'maplibre-gl';
  import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url';
  import { useData } from 'vitepress';
  import { computed, defineAsyncComponent, ref, shallowRef, watch } from 'vue';
  import {
    VControlFullscreen,
    VControlNavigation,
    VControlScale,
    VLayerMapboxGeojson,
    VMap,
    VMarker,
  } from 'v-mapbox';
  import { track } from './analytics';

  // deck.gl is large; load it only when the full demo shows the arcs.
  const VLayerDeckArc = defineAsyncComponent(() =>
    import('v-mapbox').then((m) => m.VLayerDeckArc),
  );

  // MapLibre 6 needs the worker URL set once when it runs through a bundler.
  setWorkerUrl(workerUrl);

  const props = withDefaults(defineProps<{ compact?: boolean }>(), {
    compact: false,
  });

  interface City {
    name: string;
    note: string;
    coordinates: [number, number];
  }

  const cities: City[] = [
    {
      name: 'Pune',
      note: 'Where v-mapbox is built',
      coordinates: [73.8567, 18.5204],
    },
    {
      name: 'Mumbai',
      note: 'Financial capital',
      coordinates: [72.8777, 19.076],
    },
    {
      name: 'Bengaluru',
      note: 'Silicon plateau',
      coordinates: [77.5946, 12.9716],
    },
    { name: 'Delhi', note: 'National capital', coordinates: [77.209, 28.6139] },
    { name: 'Kolkata', note: 'City of joy', coordinates: [88.3639, 22.5726] },
  ];

  const { isDark } = useData();
  const styleUrl = computed(() =>
    isDark.value
      ? 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'
      : 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
  );

  const containerId = props.compact ? 'v-mapbox-hero' : 'v-mapbox-demo';
  const options = computed<MapOptions>(() => ({
    container: containerId,
    style: styleUrl.value,
    center: [78.9, 21.5],
    zoom: props.compact ? 3.4 : 4,
    attributionControl: { compact: true },
  }));

  const map = shallowRef<Map | null>(null);
  const ready = ref(false);
  const showArcs = ref(true);
  const showRoute = ref(true);
  const active = ref('Pune');

  /**
   * Stores the map once its style has loaded
   * @param instance - The MapLibre map
   */
  function onLoaded(instance: Map): void {
    map.value = instance;
    ready.value = true;
  }

  // The basemap is rebuilt when the theme flips; hide the children until the
  // new map has loaded so they inject the fresh instance.
  watch(styleUrl, () => {
    ready.value = false;
    map.value = null;
  });

  /**
   * Flies to a city and records the interaction
   * @param city - The selected city
   */
  function flyTo(city: City): void {
    active.value = city.name;
    map.value?.flyTo({ center: city.coordinates as LngLatLike, zoom: 9 });
    track('demo_interaction', { action: 'fly_to', city: city.name });
  }

  /**
   * Toggles a demo layer and records the interaction
   * @param layer - Which layer to toggle
   */
  function toggle(layer: 'arcs' | 'route'): void {
    const flag = layer === 'arcs' ? showArcs : showRoute;
    flag.value = !flag.value;
    track('demo_interaction', { action: `toggle_${layer}`, on: flag.value });
  }

  /**
   * Records a marker click
   * @param city - The clicked city
   */
  function onMarkerClick(city: City): void {
    track('demo_interaction', { action: 'marker_click', city: city.name });
  }

  const route = {
    type: 'geojson' as const,
    data: {
      type: 'Feature' as const,
      properties: {},
      geometry: {
        type: 'LineString' as const,
        coordinates: cities.map((c) => c.coordinates),
      },
    },
  };

  const routeLayer = computed(() => ({
    type: 'line' as const,
    paint: {
      'line-color': isDark.value ? '#7fd1c1' : '#0f766e',
      'line-width': 2.5,
      'line-dasharray': [2, 1.5],
    },
  }));

  const arcs = cities.slice(1).map((c) => ({
    from: cities[0].coordinates,
    to: c.coordinates,
  }));
  type Arc = (typeof arcs)[number];
  const arcOptions: Omit<ArcLayerProps<Arc>, 'id' | 'data'> = {
    getSourcePosition: (d: Arc) => d.from,
    getTargetPosition: (d: Arc) => d.to,
    getSourceColor: [15, 118, 110] as const,
    getTargetColor: [234, 88, 12] as const,
    getWidth: 3,
    greatCircle: true,
  };
</script>

<template>
  <div :class="['demo', { 'demo--compact': compact }]">
    <div v-if="!compact" class="demo__bar" role="toolbar" aria-label="Map demo">
      <div class="demo__group">
        <button
          v-for="city in cities"
          :key="city.name"
          type="button"
          :class="['chip', { 'chip--active': active === city.name }]"
          :aria-pressed="active === city.name"
          @click="flyTo(city)"
        >
          {{ city.name }}
        </button>
      </div>
      <div class="demo__group">
        <button
          type="button"
          :class="['chip', { 'chip--active': showRoute }]"
          :aria-pressed="showRoute"
          @click="toggle('route')"
        >
          GeoJSON route
        </button>
        <button
          type="button"
          :class="['chip', { 'chip--active': showArcs }]"
          :aria-pressed="showArcs"
          @click="toggle('arcs')"
        >
          deck.gl arcs
        </button>
      </div>
    </div>
    <div class="demo__map">
      <VMap :key="styleUrl" :options="options" @loaded="onLoaded">
        <template v-if="ready">
          <VControlNavigation position="top-right" />
          <template v-if="!compact">
            <VControlScale position="bottom-left" />
            <VControlFullscreen position="top-right" />
          </template>
          <VLayerMapboxGeojson
            v-if="showRoute"
            source-id="demo-route"
            layer-id="demo-route-line"
            :source="route"
            :layer="routeLayer"
          />
          <VLayerDeckArc
            v-if="showArcs && !compact"
            layer-id="demo-arcs"
            :data="arcs"
            :options="arcOptions"
          />
          <VMarker
            v-for="city in cities"
            :key="city.name"
            :coordinates="city.coordinates"
            :popup-options="{ offset: 18, closeButton: false }"
            @click="onMarkerClick(city)"
          >
            <template #markers="{ setRef }">
              <span :ref="setRef" class="pin" :aria-label="city.name" />
            </template>
            <strong class="popup__title">{{ city.name }}</strong>
            <span class="popup__note">{{ city.note }}</span>
          </VMarker>
        </template>
      </VMap>
    </div>
  </div>
</template>

<style scoped>
  .demo {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
  }
  .demo__bar {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 8px;
  }
  .demo__group {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .chip {
    padding: 6px 12px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 999px;
    font-size: 13px;
    font-weight: 500;
    color: var(--vp-c-text-2);
    background: var(--vp-c-bg);
    transition:
      color 0.15s ease,
      border-color 0.15s ease,
      background-color 0.15s ease;
  }
  .chip:hover {
    color: var(--vp-c-text-1);
    border-color: var(--vp-c-brand-1);
  }
  .chip:focus-visible {
    outline: 2px solid var(--vp-c-brand-1);
    outline-offset: 2px;
  }
  .chip--active {
    color: var(--vp-c-brand-1);
    border-color: var(--vp-c-brand-1);
    background: var(--vp-c-brand-soft);
  }
  .demo__map {
    position: relative;
    height: min(70vh, 560px);
    min-height: 360px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 12px;
    overflow: hidden;
    background: var(--vp-c-bg-soft);
  }
  .demo--compact .demo__map {
    height: clamp(260px, 42vw, 400px);
    min-height: 0;
    width: min(100%, 520px);
    margin: 0 auto;
  }
  .demo__map :deep(.v-map-container) {
    position: absolute;
    inset: 0;
  }
  .pin {
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--vp-c-brand-1);
    border: 3px solid var(--vp-c-bg);
    box-shadow: 0 0 0 1px var(--vp-c-brand-1);
  }
  .popup__title {
    display: block;
    font-size: 14px;
    color: oklch(0.22 0.02 200);
  }
  .popup__note {
    font-size: 12px;
    color: oklch(0.45 0.02 200);
  }
</style>
