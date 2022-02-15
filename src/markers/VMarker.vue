<template>
  <section :id="`marker-${Date.now()}`">
    <v-popup
      :marker="marker"
      :options="popupOptions"
      :coordinates="coordinates"
    >
      <slot />
    </v-popup>
  </section>
</template>
<script lang="ts">
  import type {
    EventData,
    LngLatLike,
    MarkerOptions,
    PopupOptions,
  } from 'mapbox-gl';
  import { Marker } from 'mapbox-gl';
  import type { PropType, Ref, SetupContext } from 'vue-demi';
  import { defineComponent, onMounted, ref } from 'vue-demi';
  import { MapKey } from '../../types/symbols';
  import { markerDOMEvents, markerMapEvents } from '../constants/events';
  import VPopup from '../popups/VPopup.vue';
  import { injectStrict } from '../utils';

  export default defineComponent({
    name: 'VMarker',
    components: {
      VPopup,
    },
    props: {
      options: {
        type: Object as PropType<MarkerOptions>,
        default: () => ({} as MarkerOptions),
        required: true,
      },
      popupOptions: {
        type: Object as PropType<PopupOptions>,
        default: () => ({} as PopupOptions),
        required: true,
      },
      coordinates: {
        type: [Object, Array] as PropType<LngLatLike>,
        default: () => ({}),
        required: true,
      },
      cursor: {
        type: String as PropType<string>,
        default: 'pointer',
        required: false,
      },
    },
    setup(props, { emit }: SetupContext) {
      let map = injectStrict(MapKey);
      let marker: Marker = new Marker(props.options);
      let loaded: Ref<boolean> = ref(true);

      map.value.on('style.load', () => {
        // https://github.com/mapbox/mapbox-gl-js/issues/2268#issuecomment-401979967
        const styleTimeout = () => {
          if (!map.value.isStyleLoaded()) {
            loaded.value = false;
            setTimeout(styleTimeout, 200);
          } else {
            loaded.value = true;
          }
        };
        styleTimeout();
      });

      onMounted(() => {
        if (loaded.value) {
          setMarkerCoordinates();
          addToMap();
          setCursorPointer();
        } else {
          removeFromMap();
        }
        listenMarkerEvents();
      });

      /**
       * Set marker coordinates
       *
       * @returns {void}
       */
      function setMarkerCoordinates(): void {
        marker.setLngLat(props.coordinates);
      }
      /**
       * Sets the Cursor to Pointer
       *
       * @returns {void}
       */
      function setCursorPointer(): void {
        marker.getElement().style.cursor = props.cursor || 'default';
      }

      /**
       * Add marker to map
       *
       * @returns {void}
       */
      function addToMap(): void {
        marker.addTo(map.value);
        emit('added', { marker });
      }
      /**
       * Remove marker from map
       *
       * @returns {void}
       */
      function removeFromMap(): void {
        marker.remove();
        emit('removed');
      }

      /**
       * Listen to events
       *
       * @returns {void}
       */
      function listenMarkerEvents(): void {
        let coordinates: LngLatLike;
        // Listen to Marker Mapbox events
        markerMapEvents.forEach((event: string) => {
          marker.on(event, (e: EventData) => {
            if (event === 'dragend') {
              if (props.coordinates instanceof Array) {
                coordinates = [e.target._lngLat.lng, e.target._lngLat.lat];
              } else {
                coordinates = e.target._lngLat;
              }
              emit('update:coordinates', coordinates);
            }
            emit(event, e);
          });
        });
        // Listen to Marker DOM events
        markerDOMEvents.forEach((event: string) => {
          marker.getElement().addEventListener(event, (e) => {
            emit(event, e);
          });
        });
      }

      return {
        marker,
      };
    },
  });
</script>
