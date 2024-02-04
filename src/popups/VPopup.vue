<script lang="ts">
  import type { LngLatLike, Map, Marker, PopupOptions } from 'maplibre-gl';
  import type { PropType, Ref } from 'vue';
  import { Popup } from 'maplibre-gl';
  import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue';
  import { popupEvents } from '../constants/events';
  import { injectStrict, MapKey } from '../utils';

  export default defineComponent({
    name: 'VPopup',
    props: {
      marker: {
        type: Object as PropType<Marker>,
        default: () => ({}) as Marker,
        required: false,
      },
      options: {
        type: Object as PropType<PopupOptions>,
        default: () => ({}) as PopupOptions,
        required: true,
      },
      coordinates: {
        type: Object as PropType<LngLatLike>,
        default: () => ({}),
        required: true,
      },
    },
    emits: ['added', 'removed', ...popupEvents],
    setup(props, { emit }) {
      let map: Ref<Map> = injectStrict(MapKey);
      let popup: Popup = new Popup(props.options);
      let loaded: Ref<boolean> = ref(true);
      const content: Ref<null | HTMLElement> = ref(null);

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
          setPopupContent();
          setPopupCoordinates();
          addToMarker();
          listenPopupEvents();
        } else {
          remove();
          removePopupEvents();
        }
      });

      onBeforeUnmount(() => {
        remove();
        removePopupEvents();
      });

      /**
       * Sets the HTML content for the popup
       * @returns {void}
       */
      function setPopupContent(): void {
        popup.setDOMContent(content.value as Node);
      }
      /**
       * Set popup coordinates
       * @returns {void}
       */
      function setPopupCoordinates(): void {
        popup.setLngLat(props.coordinates);
      }

      /**
       * Add popup to marker if marker exists
       * else add it to the map.
       * @returns {void}
       */
      function addToMarker(): void {
        if (props.marker) {
          props.marker.setPopup(popup);
        } else {
          popup.addTo(map.value);
        }
        emit('added', { popup });
      }
      /**
       * Remove popup from map
       * @returns {void}
       */
      function remove(): void {
        popup.remove();
        emit('removed');
      }

      /**
       * Listen to events
       * @returns {void}
       */
      function listenPopupEvents(): void {
        popupEvents.forEach((event: string) => {
          popup.on(event, () => {
            emit(event);
          });
        });
      }
      /**
       * Turn off listener
       * @returns {void}
       */
      function removePopupEvents(): void {
        popupEvents.forEach((event: string) => {
          popup.off(event, () => {
            emit(event);
          });
        });
      }

      return {
        content,
      };
    },
  });
</script>

<template>
  <section :id="`popup-${Date.now()}`" ref="content">
    <slot />
  </section>
</template>
