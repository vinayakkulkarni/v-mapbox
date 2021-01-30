// import withRegistration from "../../lib/withRegistration";
import withEvents from '../../lib/withEvents';

const mapboxSourceProps = {
  sourceId: {
    type: String,
    required: true,
  },
  source: {
    type: [Object, String],
    default: undefined,
  },
};

const mapboxLayerStyleProps = {
  layerId: {
    type: String,
    required: true,
  },
  layer: {
    type: Object,
    required: true,
  },
  before: {
    type: String,
    default: undefined,
  },
};

const componentProps = {
  clearSource: {
    type: Boolean,
    default: true,
  },
  replaceSource: {
    type: Boolean,
    default: false,
  },
  replace: {
    type: Boolean,
    default: false,
  },
};

export default {
  mixins: [withEvents],
  props: {
    ...mapboxSourceProps,
    ...mapboxLayerStyleProps,
    ...componentProps,
  },

  inject: ['mapboxCtx'],

  data() {
    return {
      initial: true,
    };
  },

  computed: {
    sourceLoaded() {
      const { map } = this.mapboxCtx;
      return map ? map.isSourceLoaded(this.sourceId) : false;
    },
    mapLayer() {
      const { map } = this.mapboxCtx;
      return map ? map.getLayer(this.layerId) : null;
    },
    mapSource() {
      const { map } = this.mapboxCtx;
      return map ? map.getSource(this.sourceId) : null;
    },
  },

  created() {
    const { map } = this.mapboxCtx;
    if (this.layer.minzoom) {
      this.$watch('layer.minzoom', function (next) {
        if (this.initial) return;
        map.setLayerZoomRange(this.layerId, next, this.layer.maxzoom);
      });
    }

    if (this.layer.maxzoom) {
      this.$watch('layer.maxzoom', function (next) {
        if (this.initial) return;
        map.setLayerZoomRange(this.layerId, this.layer.minzoom, next);
      });
    }

    if (this.layer.paint) {
      this.$watch(
        'layer.paint',
        function (next) {
          if (this.initial) return;
          if (next) {
            for (let prop of Object.keys(next)) {
              map.setPaintProperty(this.layerId, prop, next[prop]);
            }
          }
        },
        { deep: true },
      );
    }

    if (this.layer.layout) {
      this.$watch(
        'layer.layout',
        function (next) {
          if (this.initial) return;
          if (next) {
            for (let prop of Object.keys(next)) {
              map.setLayoutProperty(this.layerId, prop, next[prop]);
            }
          }
        },
        { deep: true },
      );
    }

    if (this.layer.filter) {
      this.$watch(
        'layer.filter',
        function (next) {
          if (this.initial) return;
          map.setFilter(this.layerId, next);
        },
        { deep: true },
      );
    }
  },

  beforeUnmount() {
    const { map } = this.mapboxCtx;
    if (map && map.loaded()) {
      try {
        map.removeLayer(this.layerId);
      } catch (err) {
        this.$_emitEvent('layer-does-not-exist', {
          layerId: this.sourceId,
          error: err,
        });
      }
      if (this.clearSource) {
        try {
          map.removeSource(this.sourceId);
        } catch (err) {
          this.$_emitEvent('source-does-not-exist', {
            sourceId: this.sourceId,
            error: err,
          });
        }
      }
    }
  },

  methods: {
    $_emitLayerMapEvent(event) {
      return this.$_emitMapEvent(event, { layerId: this.layerId });
    },

    $_bindLayerEvents(events) {
      const { map } = this.mapboxCtx;
      Object.keys(this.$listeners).forEach((eventName) => {
        if (events.includes(eventName)) {
          map.on(eventName, this.layerId, this.$_emitLayerMapEvent);
        }
      });
    },

    $_unbindEvents(events) {
      const { map } = this.mapboxCtx;
      if (map) {
        events.forEach((eventName) => {
          map.off(eventName, this.layerId, this.$_emitLayerMapEvent);
        });
      }
    },

    $_watchSourceLoading(data) {
      const { map } = this.mapboxCtx;
      if (data.dataType === 'source' && data.sourceId === this.sourceId) {
        this.$_emitEvent('layer-source-loading', { sourceId: this.sourceId });
        map.off('dataloading', this.$_watchSourceLoading);
      }
    },

    move(beforeId) {
      const { map } = this.mapboxCtx;
      map.moveLayer(this.layerId, beforeId);
      this.$_emitEvent('layer-moved', {
        layerId: this.layerId,
        beforeId: beforeId,
      });
    },

    remove() {
      const { map } = this.mapboxCtx;
      map.removeLayer(this.layerId);
      map.removeSource(this.sourceId);
      this.$_emitEvent('layer-removed', { layerId: this.layerId });
      this.$destroy();
    },
  },

  render() {},
};
