<script lang="ts">
  import type { LngLatLike, MarkerOptions, PopupOptions } from 'maplibre-gl';
  import { Marker } from 'maplibre-gl';
  import type { PropType, Ref } from 'vue';
  import { defineComponent, onMounted, onBeforeUnmount, ref, watch } from 'vue';
  import { markerDOMEvents, markerMapEvents } from '../constants/events';
  import VPopup from '../popups/VPopup.vue';
  import { injectStrict, MapKey } from '../utils';

  export default defineComponent({
    name: 'VMarker',
    components: {
      VPopup,
    },
    props: {
      coordinates: {
        type: [Object, Array] as PropType<LngLatLike>,
        default: () => ({}),
        required: true,
      },
      options: {
        type: Object as PropType<MarkerOptions>,
        default: () => ({}) as MarkerOptions,
        required: false,
      },
      popupOptions: {
        type: Object as PropType<PopupOptions>,
        default: () => ({}) as PopupOptions,
        required: false,
      },
      cursor: {
        type: String as PropType<string>,
        default: 'pointer',
        required: false,
      },
    },
    emits: [
      'added',
      'update:coordinates',
      'removed',
      ...markerMapEvents,
      ...markerDOMEvents,
    ],
    setup(props, { emit }) {
      let map = injectStrict(MapKey);
      let marker: Ref<Marker> = ref({}) as Ref<Marker>;
      let loaded: Ref<boolean> = ref(true);
      let isMarkerAvailable = ref(false);
      let slotRef: Ref<HTMLElement | null> = ref(null);

      const setSlotRef = (el: HTMLElement) => {
        slotRef.value = el;
      };

      watch(marker, (marker) => {
        if ('_map' in marker) {
          isMarkerAvailable.value = true;
        } else {
          isMarkerAvailable.value = false;
        }
      });

      onMounted(() => {
        if (loaded.value) {
          if (slotRef.value !== null) {
            // add marker to map
            marker.value = new Marker({
              element: slotRef.value!,
              ...props.options,
            });
            setMarkerCoordinates(marker.value);
            addToMap(marker.value);
            setCursorPointer(marker.value);
            listenMarkerEvents(marker.value);
          } else {
            marker.value = new Marker(props.options);
            setMarkerCoordinates(marker.value);
            addToMap(marker.value);
            setCursorPointer(marker.value);
            listenMarkerEvents(marker.value);
          }
        } else {
          removeFromMap(marker.value);
        }
      });

      onBeforeUnmount(() => {
        removeFromMap(marker.value);
      });

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

      /**
       * Set marker coordinates
       * @param {Marker} marker - Marker
       * @returns {void}
       */
      function setMarkerCoordinates(marker: Marker): void {
        marker.setLngLat(props.coordinates);
      }
      /**
       * Sets the Cursor to Pointer
       * @param {Marker} marker - Marker
       * @returns {void}
       */
      function setCursorPointer(marker: Marker): void {
        marker.getElement().style.cursor = props.cursor || 'default';
      }

      /**
       * Add marker to map
       * @param {Marker} marker - Marker
       * @returns {void}
       */
      function addToMap(marker: Marker): void {
        marker.addTo(map.value);
        emit('added', { marker });
      }
      /**
       * Remove marker from map
       * @param {Marker} marker - Marker
       * @returns {void}
       */
      function removeFromMap(marker: Marker): void {
        if (isMarkerAvailable.value) {
          marker.remove();
          emit('removed');
        }
      }

      /**
       * Listen to events
       * @param {Marker} marker - Marker
       * @returns {void}
       */
      function listenMarkerEvents(marker: Marker): void {
        let coordinates: LngLatLike;
        // Listen to Marker Mapbox events
        markerMapEvents.forEach((event: string) => {
          marker.on(event, (e: { target: Marker }) => {
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
        isMarkerAvailable,
        marker,
        setSlotRef,
      };
    },
  });
</script>

<template>
  <section :id="`marker-${Date.now()}`" class="absolute">
    <slot :set-ref="setSlotRef" name="markers" />
    <template v-if="isMarkerAvailable">
      <v-popup
        :marker="marker"
        :options="popupOptions"
        :coordinates="coordinates"
      >
        <slot />
      </v-popup>
    </template>
  </section>
</template>

<style>
  .absolute {
    position: absolute !important;
  }
</style>
