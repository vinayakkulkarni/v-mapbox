<template>
  <div>
    <slot />
  </div>
</template>
<script lang="ts">
  import type { FeatureCollection } from 'geojson';
  import type {
    LayerSpecification as AnyLayer,
    GeoJSONSourceSpecification as GeoJSONSourceRaw,
  } from 'maplibre-gl';
  import { defineComponent, onMounted, PropType, ref, Ref, watch } from 'vue';
  import { injectStrict, MapKey } from '../../utils';

  export default defineComponent({
    name: 'VLayerMapboxRaster',
    props: {
      sourceId: {
        type: String as PropType<string>,
        default: 'maplibre.gl-raster-source',
        required: true,
      },
      layerId: {
        type: String as PropType<string>,
        default: 'maplibre.gl-raster-layer',
        required: true,
      },
      source: {
        type: Object as PropType<FeatureCollection>,
        required: true,
      },
      layer: {
        type: Object as PropType<AnyLayer>,
        default: () => ({}),
        required: true,
      },
      before: {
        type: String as PropType<string>,
        default: '',
        required: false,
      },
    },
    setup(props) {
      let map = injectStrict(MapKey);
      let loaded: Ref<boolean> = ref(false);

      const layer = {
        ...props.layer,
        id: props.layerId,
        source: props.sourceId,
      };
      const source: GeoJSONSourceRaw = {
        type: 'geojson',
        data: props.source,
      };

      map.value.on('style.load', () => {
        // https://github.com/mapbox/mapbox-gl-js/issues/2268#issuecomment-401979967
        const styleTimeout = () => {
          if (!map.value.isStyleLoaded()) {
            loaded.value = false;
            setTimeout(styleTimeout, 200);
          } else {
            loaded.value = true;
          }
        };
        styleTimeout();
      });

      /**
       * Watcher(s)
       */
      watch(loaded, (value) => {
        if (value) {
          addLayer();
        }
      });

      onMounted(() => {
        addLayer();
      });

      /**
       * Re–adds the layer when style changed
       *
       * @returns {void}
       */
      function addLayer(): void {
        map.value.addSource(props.sourceId, source);
        map.value.addLayer(layer, props.before);
      }
    },
  });
</script>
