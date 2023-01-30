<script lang="ts">
  import { NavigationControl } from 'mapbox-gl';
  import type { PropType } from 'vue';
  import { defineComponent, onMounted } from 'vue';
  import { injectStrict, MapKey } from '../utils';

  export default defineComponent({
    name: 'VControlNavigation',
    props: {
      options: {
        type: Object as PropType<{
          showCompass?: boolean;
          showZoom?: boolean;
          visualizePitch?: boolean;
        }>,
        default: () => ({}),
        required: true,
      },
      position: {
        type: String as PropType<
          'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
        >,
        default: () => 'top-left',
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
        const control = new NavigationControl(props.options);
        map.value.addControl(control, props.position);
      }
    },
  });
</script>
