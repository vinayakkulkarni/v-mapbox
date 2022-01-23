<script lang="ts">
  import type { MapboxOptions, MapEventType } from 'mapbox-gl';
  import { Map } from 'mapbox-gl';
  import type { PropType, Ref, SetupContext } from 'vue';
  import { defineComponent, h, onMounted, provide, ref } from 'vue';
  import {
    MapKey,
    MapLoadedKey,
    MapStylesLoadedKey,
    MapTilesLoadedKey,
  } from '../../types/symbols';
  import { mapEvents } from '../constants/events';

  export default defineComponent({
    name: 'VMap',
    props: {
      options: {
        type: Object as PropType<MapboxOptions>,
        required: true,
        default: () => ({}),
      },
    },
    setup(props, { emit, slots }: SetupContext) {
      let map: Ref<Map> = ref({} as Map);
      let events: Ref<Array<keyof MapEventType>> = ref(mapEvents);
      let loaded: Ref<boolean> = ref(false);
      let styleChanged: Ref<boolean> = ref(false);
      let tilesLoaded: Ref<boolean> = ref(false);

      onMounted(() => {
        map.value = new Map({
          ...props.options,
          container: 'map',
        });
        loaded.value = true;
        provide(MapLoadedKey, loaded);
        provide(MapKey, map);
        provide(MapStylesLoadedKey, styleChanged);
        provide(MapTilesLoadedKey, tilesLoaded);
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
                emit('loaded', map.value);
                break;
              case 'sourcedata' || 'sourcedataloading':
                const sourceTimeout = () => {
                  if (!map.value.areTilesLoaded()) {
                    tilesLoaded.value = false;
                    setTimeout(sourceTimeout, 200);
                  } else {
                    tilesLoaded.value = true;
                  }
                };
                sourceTimeout();
                break;
              // https://github.com/mapbox/mapbox-gl-js/issues/2268#issuecomment-401979967
              // @ts-ignore
              case 'style.load':
                const styleTimeout = () => {
                  if (!map.value.isStyleLoaded()) {
                    styleChanged.value = false;
                    setTimeout(styleTimeout, 200);
                  } else {
                    styleChanged.value = true;
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

      return () =>
        h('div', { id: 'map' }, slots && slots.default ? slots.default() : {});
    },
  });
</script>

<style>
  canvas {
    outline: none;
  }

  #map {
    width: 100%;
    height: 100%;
  }
</style>
