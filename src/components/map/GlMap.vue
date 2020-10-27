<template>
  <div class="mgl-map-wrapper">
    <div v-once :id="container" ref="container" />
    <slot v-if="initialized" />
  </div>
</template>

<script lang="ts">
  import {
    defineComponent,
    ref,
    computed,
    onMounted,
    onBeforeDestroy,
    getCurrentInstance,
    nextTick,
  } from 'vue';
  import withEvents from '../../lib/withEvents';
  import mapEvents from './events';
  import options from './options';
  import withWatchers from './mixins/withWatchers';
  import withPrivateMethods from './mixins/withPrivateMethods';
  import withAsyncActions from './mixins/withAsyncActions';

  export default defineComponent({
    name: 'GlMap',
    mixins: [withWatchers, withAsyncActions, withPrivateMethods, withEvents],

    provide() {
      const self = this;
      return {
        get mapbox() {
          return self.mapbox;
        },
        get map() {
          return self.map;
        },
        get actions() {
          return self.actions;
        },
      };
    },

    props: {
      mapboxGl: {
        type: Object,
        default: null,
        required: false,
      },
      ...options,
    },
    setup({ mapboxGl, ...options }, { emit }) {
      /**
       * Vue 3 - data() {}
       */
      const container = ref(null);
      const initial = ref(true);
      const initialized = ref(false);
      const map = null;
      const propsIsUpdating = {};
      const mapboxPromise = mapboxGl
        ? Promise.resolve(mapboxGl)
        : import('mapbox-gl');
      /**
       * Vue 3 - computed properties
       */
      const loaded = computed(() => {
        return map ? map.loaded() : false;
      });
      const isStyleLoaded = computed(() => {
        return map ? map.isStyleLoaded() : false;
      });
      const areTilesLoaded = computed(() => {
        return map ? map.areTilesLoaded() : false;
      });
      const isMoving = computed(() => {
        return map ? map.isMoving() : false;
      });
      const canvas = computed(() => {
        return map ? map.getCanvas() : null;
      });
      const canvasContainer = computed(() => {
        return map ? map.getCanvasContainer() : null;
      });
      const version = computed(() => {
        return map ? map.version : null;
      });
      const images = computed(() => {
        return map ? map.listImages() : null;
      });
      /**
       * Lifecycle hooks - mounted()
       */
      onMounted(() => {
        loadMap().then((map) => {
          map = map;
          if (
            options.RTLTextPluginUrl !== undefined &&
            mapbox.getRTLTextPluginStatus() !== 'loaded'
          ) {
            this.mapbox.setRTLTextPlugin(
              this.RTLTextPluginUrl,
              this.$_RTLTextPluginError,
            );
          }
          const eventNames = Object.keys(mapEvents);
          this.$_bindMapEvents(eventNames);
          this.$_registerAsyncActions(map);
          this.$_bindPropsUpdateEvents();
          initial.value = false;
          initialized.value = true;
          emit('load', { map, component: getCurrentInstance() });
        });
      });

      /**
       * Destroy the map
       */
      onBeforeDestroy(() => {
        nextTick(() => {
          if (map) map.remove();
        });
      });

      /**
       * Vue 3 Methods:
       */

      async function loadMap() {
        return mapboxPromise.then((mapbox) => {
          mapbox = mapbox.default ? mapbox.default : mapbox;
          return new Promise((resolve) => {
            if (options.accessToken) mapbox.accessToken = options.accessToken;
            const map = new mapbox.Map({
              ...options,
              container: container.value,
            });
            map.on('load', () => resolve(map));
          });
        });
      }

      return {
        container,
        initial,
        initialized,
        loaded,
        version,
        isStyleLoaded,
        areTilesLoaded,
        isMoving,
        canvas,
        canvasContainer,
        images,
      };
    },
  });
</script>

<style lang="scss">
  .mgl-map-wrapper {
    height: 100%;
    position: relative;
    width: 100%;
  }

  .mgl-map-wrapper .mapboxgl-map {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
</style>
