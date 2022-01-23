<template>
  <div>
    <slot />
  </div>
</template>
<script lang="ts">
  import type { FeatureCollection } from 'geojson';
  import type { AnyLayer, GeoJSONSourceRaw } from 'mapbox-gl';
  import { defineComponent, onMounted, PropType } from 'vue';
  import { MapKey, MapLoadedKey } from '../../../types/symbols';
  import { injectStrict } from '../../utils';

  export default defineComponent({
    name: 'VLayerMapboxGeojson',
    props: {
      sourceId: {
        type: String as PropType<string>,
        default: 'mapbox.gl-geojson-source',
        required: true,
      },
      layerId: {
        type: String as PropType<string>,
        default: 'mapbox.gl-geojson-layer',
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
      let loaded = injectStrict(MapLoadedKey);

      onMounted(() => {
        if (loaded.value) {
          const source: GeoJSONSourceRaw = {
            type: 'geojson',
            data: props.source,
          };
          const layer = {
            ...props.layer,
            id: props.layerId,
            source: props.sourceId,
          };
          map.value.addSource(props.sourceId, source);
          map.value.addLayer(layer, props.before);
        }
      });
    },
  });
</script>
