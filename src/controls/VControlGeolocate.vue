<script lang="ts">
  import type { FitBoundsOptions, PositionOptions } from 'mapbox-gl';
  import { GeolocateControl } from 'mapbox-gl';
  import type { PropType } from 'vue';
  import { defineComponent, onMounted } from 'vue';
  import { geolocateControlEvents as events } from '../constants/events/geolocate';
  import { injectStrict, MapKey } from '../utils';

  export default defineComponent({
    name: 'VControlGeolocate',
    props: {
      options: {
        type: Object as PropType<{
          positionOptions?: PositionOptions;
          fitBoundsOptions?: FitBoundsOptions;
          trackUserLocation?: boolean;
          showAccuracyCircle?: boolean;
          showUserLocation?: boolean;
        }>,
        default: () => ({}),
      },
      position: {
        type: String as PropType<
          'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
        >,
        default: () => 'top-left',
      },
    },
    setup(props, { emit }) {
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
        const control = new GeolocateControl(props.options);
        map.value.addControl(control, props.position);
        events.forEach((event: string) => {
          control.on(event, () => {
            emit(event);
          });
        });
      }
    },
    render: () => [],
  });
</script>
