<script lang="ts">
  import type { ScaleOptions } from 'maplibre-gl';
  import { ScaleControl } from 'maplibre-gl';
  import type { PropType } from 'vue';
  import { defineComponent, onMounted } from 'vue';
  import { injectStrict, MapKey } from '../utils';

  export default defineComponent({
    name: 'VControlFullscreen',
    props: {
      options: {
        type: Object as PropType<ScaleOptions>,
        default: () => ({}),
        required: true,
      },
      position: {
        type: String as PropType<
          'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
        >,
        default: () => 'bottom-left',
        required: false,
      },
    },
    setup(props) {
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
        const control = new ScaleControl(props.options);
        map.value.addControl(control, props.position);
      }
    },
  });
</script>
