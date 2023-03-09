<script lang="ts">
  import { AttributionControl } from 'maplibre-gl';
  import type { PropType } from 'vue';
  import { defineComponent, onMounted, h } from 'vue';
  import { injectStrict, MapKey } from '../utils';

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
        required: false,
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
        if (slots && slots.default?.()) {
          options.customAttribution = slots.default?.() as any;
        }
        const control = new AttributionControl(options);
        map.value.addControl(control, props.position);
      }

      return () => [h('div', slots.default?.())];
    },
  });
</script>
