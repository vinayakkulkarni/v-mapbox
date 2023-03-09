<template>
  <div>
    <slot />
  </div>
</template>
<script lang="ts">
  import type {
    LayerSpecification as AnyLayer,
    VectorSourceSpecification as VectorSource,
  } from 'maplibre-gl';
  import type { PropType, Ref } from 'vue';
  import { defineComponent, onMounted, ref, watch } from 'vue';
  import { injectStrict, MapKey } from '../../utils';

  export default defineComponent({
    name: 'VLayerMapboxVector',
    props: {
      sourceId: {
        type: String as PropType<string>,
        default: 'maplibre.gl-vector-source',
        required: true,
      },
      layerId: {
        type: String as PropType<string>,
        default: 'maplibre.gl-vector-layer',
        required: true,
      },
      source: {
        type: Object as PropType<VectorSource>,
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
