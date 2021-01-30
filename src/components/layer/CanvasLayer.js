import layerEvents from '../../lib/layerEvents';
import mixin from './layerMixin';

export default {
  name: 'CanvasLayer',
  mixins: [mixin],

  inject: ['mapboxCts'],

  props: {
    source: {
      type: Object,
      required: true,
    },
    layer: {
      type: Object,
      default: null,
    },
  },

  computed: {
    canvasElement() {
      return this.mapSource ? this.mapSource.getCanvas() : null;
    },
  },

  watch: {
    coordinates(val) {
      if (this.initial) return;
      this.mapSource.setCoordinates(val);
    },
  },

  created() {
    this.$_deferredMount();
  },

  methods: {
    $_deferredMount() {
      const source = {
        type: 'canvas',
        ...this.source,
      };

      const { map } = this.mapboxCtx;

      map.on('dataloading', this.$_watchSourceLoading);
      try {
        map.addSource(this.sourceId, source);
      } catch (err) {
        if (this.replaceSource) {
          map.removeSource(this.sourceId);
          map.addSource(this.sourceId, source);
        }
      }
      this.$_addLayer();
      this.$_bindLayerEvents(layerEvents);
      this.initial = false;
    },

    $_addLayer() {
      const { map } = this.mapboxCtx;

      let existed = map.getLayer(this.layerId);
      if (existed) {
        if (this.replace) {
          map.removeLayer(this.layerId);
        } else {
          this.$_emitEvent('layer-exists', { layerId: this.layerId });
          return existed;
        }
      }
      let layer = {
        id: this.layerId,
        source: this.sourceId,
        type: 'raster',
        ...this.layer,
      };
      map.addLayer(layer, this.before);
      this.$_emitEvent('added', {
        layerId: this.layerId,
        canvas: this.canvasElement,
      });
    },
  },
};
