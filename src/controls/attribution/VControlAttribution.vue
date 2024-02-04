<script setup lang="ts">
  import type { AttributionOptions, ControlPosition } from './types';
  import { AttributionControl } from 'maplibre-gl';
  import { onMounted } from 'vue';
  import { MapKey, injectStrict } from '../../utils';

  const defaultOptions: AttributionOptions = {
    compact: false,
    customAttribution: undefined,
  };

  const props = withDefaults(
    defineProps<{
      options?: AttributionOptions;
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
