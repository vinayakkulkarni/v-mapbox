<template>
  <div :id="getContainer()" class="v-map-container">
    <slot v-if="loaded" />
  </div>
</template>
<script lang="ts">
  import type { MapboxOptions, MapEventType } from 'mapbox-gl';
  import { Map } from 'mapbox-gl';
  import type { PropType, Ref, SetupContext } from 'vue';
  import { defineComponent, onMounted, provide, ref } from 'vue';
  import { mapEvents } from '../constants/events';
  import { MapKey } from '../utils';

  export default defineComponent({
    name: 'VMap',
    props: {
      options: {
        type: Object as PropType<MapboxOptions>,
        required: true,
        default: () => ({}),
      },
    },
    setup(props, { emit }: SetupContext) {
      let map: Ref<Map> = ref({} as Map);
      let loaded = ref(false);
      let events: Ref<Array<keyof MapEventType>> = ref(mapEvents);

      onMounted(() => {
        const options =
          'container' in props.options
            ? props.options
            : { ...props.options, container: 'map' };
        map.value = new Map(options);
        provide(MapKey, map);
        listenMapEvents();
      });

      /**
       * Listen to map events
       *
       * @returns {void}
       */
      function listenMapEvents(): void {
        // Listen for events
        events.value.forEach((e) => {
          map.value.on(e, (evt) => {
            switch (e) {
              case 'load':
                // https://github.com/mapbox/mapbox-gl-js/issues/2268#issuecomment-401979967
                const styleTimeout = () => {
                  if (!map.value.isStyleLoaded()) {
                    setTimeout(styleTimeout, 200);
                  } else {
                    loaded.value = true;
                    map.value.resize();
                    emit('loaded', map.value);
                  }
                };
                styleTimeout();
                break;
              default:
                emit(e, evt);
                break;
            }
          });
        });
      }

      /**
       * Gets the container element
       *
       * @returns {string} - The container element id
       */
      const getContainer = (): string => {
        if (Object.keys(props.options).includes('container')) {
          return `${props.options.container}`;
        }
        return 'map';
      };

      return {
        getContainer,
        loaded,
      };
    },
  });
</script>

<style>
  canvas {
    outline: none;
  }

  .v-map-container {
    width: 100%;
    height: 100%;
  }
</style>
