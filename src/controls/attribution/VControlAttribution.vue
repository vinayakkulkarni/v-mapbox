<script setup lang="ts">
  import type { ControlPosition, AttributionControlOptions } from './types';
  import { AttributionControl } from 'maplibre-gl';
  import { useSlots, onMounted } from 'vue';
  import { MapKey, injectStrict } from '../../utils';

  const defaultOptions: AttributionControlOptions = {
    compact: false,
    customAttribution: undefined,
  };

  const props = withDefaults(
    defineProps<{
      options?: AttributionControlOptions;
      position?: ControlPosition;
    }>(),
    {
      options: undefined,
      position: 'bottom-right',
    },
  );

  const slots = useSlots();

  let map = injectStrict(MapKey);

  onMounted(() => {
    addControl();
  });

  const addControl = (): void => {
    let options = defaultOptions;
    if (props.options) {
      options = {
        ...props.options,
      };
    }
    if (slots && slots.default?.()) {
      options.customAttribution = slots.default()[0]
        .children as unknown as string;
    }
    const control = new AttributionControl(options);
    map.value.addControl(control, props.position);
  };
</script>

<template>
  <slot />
</template>
