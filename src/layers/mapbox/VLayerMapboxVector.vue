<template>
  <div>
    <slot />
  </div>
</template>
<script lang="ts">
  import type { AnyLayer, VectorSource } from 'mapbox-gl';
  import { defineComponent, onMounted, PropType } from 'vue';
  import { MapKey, MapLoadedKey } from '../../../types/symbols';
  import { injectStrict } from '../../utils';

  export default defineComponent({
    name: 'VLayerMapboxVector',
    props: {
      sourceId: {
        type: String as PropType<string>,
        default: 'mapbox.gl-vector-source',
        required: true,
      },
      layerId: {
        type: String as PropType<string>,
        default: 'mapbox.gl-vector-layer',
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
      let loaded = injectStrict(MapLoadedKey);

      onMounted(() => {
        if (loaded.value) {
          const layer = {
            ...props.layer,
            id: props.layerId,
            source: props.sourceId,
          };
          map.value.addSource(props.sourceId, props.source);
          map.value.addLayer(layer, props.before);
        }
      });
    },
  });
</script>
