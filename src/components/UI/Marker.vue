<template>
  <div style="display: none">
    <!-- slot for custom marker -->
    <slot name="marker" />
    <!-- slot for popup -->
    <slot v-if="marker" />
  </div>
</template>

<script>
  import withEvents from '../../lib/withEvents';
  import withSelfEvents from './withSelfEvents';

  const markerEvents = [
    'drag',
    'dragstart',
    'dragend',
  ];

  const markerDOMEvents = [
    'click',
    'mouseenter',
    'mouseleave',
  ];

  export default {
    name: 'MapMarker',
    mixins: [withEvents, withSelfEvents],

    inject: ['mapboxCtx'],

    provide() {
      const self = this;
      return {
        get marker() {
          return self.marker;
        },
      };
    },

    props: {
      // mapbox marker options
      offset: {
        type: [Object, Array],
        default: () => [0, 0],
      },
      coordinates: {
        type: Array,
        required: true,
      },
      color: {
        type: String,
        default: 'blue',
      },
      anchor: {
        type: String,
        default: 'center',
      },
      draggable: {
        type: Boolean,
        default: false,
      },
    },

    emits: [
      'added',
      'removed',
      'update:coordinates',
      ...markerEvents,
      ...markerDOMEvents,
    ],

    data() {
      return {
        initial: true,
        marker: undefined,
      };
    },

    watch: {
      coordinates(lngLat) {
        if (this.initial) return;
        this.marker.setLngLat(lngLat);
      },
      draggable(next) {
        if (this.initial) return;
        this.marker.setDraggable(next);
      },
    },

    mounted() {
      const { mapbox } = this.mapboxCtx;

      const markerOptions = {
        ...this.$props,
      };
      if (this.$slots.marker) {
        markerOptions.element = this.$slots.marker[0].elm;
      }
      this.marker = new mapbox.Marker(markerOptions);

      if (this.$props['onUpdate:coordinates']) {
        this.marker.on('dragend', (event) => {
          let newCoordinates;
          if (this.coordinates instanceof Array) {
            newCoordinates = [
              event.target._lngLat.lng,
              event.target._lngLat.lat,
            ];
          } else {
            newCoordinates = event.target._lngLat;
          }
          this.$emit('update:coordinates', newCoordinates);
        });
      }

      this.$_bindSelfEvents(markerEvents, this.marker);

      this.initial = false;
      this.$_addMarker();
    },

    beforeUnmount() {
      if (this.mapboxCtx.map !== undefined && this.marker !== undefined) {
        this.marker.remove();
      }
    },

    methods: {
      $_addMarker() {
        this.marker.setLngLat(this.coordinates).addTo(this.mapboxCtx.map);
        this.$_bindMarkerDOMEvents();
        this.$_emitEvent('added', { marker: this.marker });
      },

      $_emitSelfEvent(event) {
        this.$_emitMapEvent(event, { marker: this.marker });
      },

      $_bindMarkerDOMEvents() {
        markerDOMEvents.forEach(eventName => {
          this.marker._element.addEventListener(eventName, (event) => {
            this.$_emitSelfEvent(event);
          });
        });
      },

      remove() {
        this.marker.remove();
        this.$_emitEvent('removed');
      },

      togglePopup() {
        return this.marker.togglePopup();
      },
    },
  };
</script>
