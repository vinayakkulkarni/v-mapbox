<template>
  <div>
    <slot />
  </div>
</template>
<script lang="ts">
  import { AttributionControl } from 'mapbox-gl';
  import type { PropType } from 'vue';
  import { defineComponent, onMounted } from 'vue';
  import { MapKey } from '../../types/symbols';
  import { injectStrict } from '../utils';

  export default defineComponent({
    name: 'VControlAttribution',
    props: {
      options: {
        type: Object as PropType<{
          compact?: boolean;
          customAttribution?: string | string[];
        }>,
        default: () => ({
          compact: false,
          customAttribution: 'Map design by me',
        }),
        required: true,
      },
      position: {
        type: String as PropType<
          'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
        >,
        default: () => 'bottom-right',
        required: false,
      },
    },
    setup(props, { slots }) {
      let map = injectStrict(MapKey);

      onMounted(() => {
        addControl();
      });

      /**
       * Adds the Attribution Control
       *
       * @returns {void}
       */
      function addControl(): void {
        const options = {
          ...props.options,
        };
        if (slots && slots.default!() && Array.isArray(slots.default!())) {
          options.customAttribution = slots.default().at(0).el.data;
        }
        const control = new AttributionControl(options);
        map.value.addControl(control, props.position);
      }
    },
  });
</script>
