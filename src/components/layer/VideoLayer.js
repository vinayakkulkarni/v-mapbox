import layerEvents from '../../lib/layerEvents';
import mixin from './layerMixin';

export default {
  name: 'VideoLayer',
  mixins: [mixin],

  computed: {
    video() {
      const { map } = this.mapboxCtx;
      return map.getSource(this.sourceId).getVideo();
    },
  },

  created() {
    if (this.source && this.source.coordinates) {
      this.$watch('source.coordinates', function (next) {
        if (this.initial) return;
        this.mapSource.setCoordinates(next);
      });
    }
    this.$_deferredMount();
  },

  methods: {
    $_deferredMount() {
      const { map } = this.mapboxCtx;
      const source = {
        type: 'video',
        ...this.source,
      };

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
        type: 'background',
        ...this.layer,
      };

      map.addLayer(layer, this.before);
      this.$_emitEvent('added', { layerId: this.layerId });
    },
  },
};
