<script setup lang="ts" generic="DataT">
  import type { GeoJsonLayerProps } from '@deck.gl/layers';
  import { GeoJsonLayer } from '@deck.gl/layers';
  import { MapboxOverlay } from '@deck.gl/mapbox';
  import { onBeforeUnmount, onMounted, watch } from 'vue';
  import { injectStrict, MapKey } from '../../utils';

  const props = withDefaults(
    defineProps<{
      layerId?: string;
      data: GeoJsonLayerProps<DataT>['data'];
      options?: Omit<GeoJsonLayerProps<DataT>, 'id' | 'data'>;
      before?: string;
      interleaved?: boolean;
    }>(),
    {
      layerId: 'deck.gl-geojson-layer',
      options: () => ({}),
      before: '',
      interleaved: false,
    },
  );

  const map = injectStrict(MapKey);

  // deck.gl v9 draws through MapboxOverlay. The default overlaid mode keeps
  // its own canvas in sync with the camera and works with MapLibre 6.
  // `interleaved` shares the MapLibre WebGL context so `before` can slot the
  // layer into the style; deck.gl 9.4 still has open MapLibre 6 interleaving
  // bugs (visgl/deck.gl#10700), so it stays opt-in.
  const overlay = new MapboxOverlay({
    interleaved: props.interleaved,
    layers: [],
  });

  /**
   * Builds the deck.gl GeoJSON layer from the current props
   * @returns - The deck.gl GeoJSON layer
   */
  function buildLayer(): GeoJsonLayer<DataT> {
    // `beforeId` is the overlay's documented per-layer prop; deck.gl types it
    // in @deck.gl/mapbox (LayerOverlayProps) without exporting it.
    const layerProps: GeoJsonLayerProps<DataT> & { beforeId?: string } = {
      ...props.options,
      id: props.layerId,
      data: props.data,
      beforeId: (props.interleaved && props.before) || undefined,
    };
    return new GeoJsonLayer<DataT>(layerProps);
  }

  watch(
    () => [props.data, props.options, props.before],
    () => overlay.setProps({ layers: [buildLayer()] }),
    { deep: true },
  );

  onMounted(() => {
    overlay.setProps({ layers: [buildLayer()] });
    map.value.addControl(overlay);
  });

  onBeforeUnmount(() => {
    map.value.removeControl(overlay);
  });
</script>

<template>
  <div />
</template>
