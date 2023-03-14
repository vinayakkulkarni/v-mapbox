<template>
  <div>
    <slot />
  </div>
</template>
<script lang="ts">
  import type {
    LayerSpecification as AnyLayer,
    SourceSpecification as AnySource,
  } from 'maplibre-gl';
  import type { PropType, Ref } from 'vue';
  import { defineComponent, onMounted, onBeforeUnmount, ref, watch } from 'vue';
  import { injectStrict, MapKey } from '../../utils';

  export default defineComponent({
    name: 'VLayerMapboxGeojson',
    props: {
      sourceId: {
        type: String as PropType<string>,
        default: 'maplibre.gl-geojson-source',
        required: true,
      },
      layerId: {
        type: String as PropType<string>,
        default: 'maplibre.gl-geojson-layer',
        required: true,
      },
      source: {
        type: Object as PropType<AnySource>,
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

      onBeforeUnmount(() => {
        if (map.value.getLayer(props.layerId)) {
          map.value.removeLayer(props.layerId);
          map.value.removeSource(props.sourceId);
        }
      });

      /**
       * Re–adds the layer when style changed
       *
       * @returns {void}
       */
      function addLayer(): void {
        map.value.addSource(props.sourceId, props.source);
        map.value.addLayer(layer, props.before);
      }
    },
  });
</script>
