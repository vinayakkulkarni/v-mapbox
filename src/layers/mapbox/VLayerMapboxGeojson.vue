<template>
  <div>
    <slot />
  </div>
</template>
<script lang="ts">
  import type { AnyLayer, GeoJSONSourceRaw } from 'mapbox-gl';
  import type { PropType } from 'vue';
  import { defineComponent, onMounted, onUnmounted, watch } from 'vue';
  import { injectStrict, MapKey } from '../../utils';

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
        type: Object as PropType<GeoJSONSourceRaw>,
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
      },
      visible: {
        type: Boolean as PropType<boolean>,
        default: true,
      },
    },
    setup(props) {
      let map = injectStrict(MapKey);

      const layer = {
        ...props.layer,
        id: props.layerId,
        source: props.sourceId,
      };

      onMounted(() => {
        map.value.addSource(props.sourceId, props.source);
        map.value.addLayer(layer, props.before);
      });

      onUnmounted(() => {
        if (map.value.getLayer(props.layerId))
          map.value.removeLayer(props.layerId);
        if (map.value.getSource(props.sourceId))
          map.value.removeSource(props.sourceId);
      });

      watch(
        () => props.visible,
        (visible) => {
          map.value.setLayoutProperty(
            props.layerId,
            'visibility',
            visible ? 'visible' : 'none',
          );
        },
      );
    },
  });
</script>
