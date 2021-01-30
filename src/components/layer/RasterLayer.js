import layerEvents from '../../lib/layerEvents';
import mixin from './layerMixin';

export default {
  name: 'RasterLayer',
  mixins: [mixin],

  created() {
    this.$_deferredMount();
  },

  methods: {
    $_deferredMount() {
      const { map } = this.mapboxCtx;
      let source = {
        type: 'raster',
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
      map.off('dataloading', this.$_watchSourceLoading);
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
        type: 'raster',
        source: this.sourceId,
        ...this.layer,
      };

      map.addLayer(layer, this.before);
      this.$_emitEvent('added', { layerId: this.layerId });
    },
  },
};
