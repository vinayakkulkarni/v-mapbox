import { defineComponent } from 'vue';
import layerEvents from '../../lib/layerEvents';
import mixin from './layerMixin';

export default defineComponent({
  name: 'MglVectorLayer',
  mixins: [mixin],

  computed: {
    getSourceFeatures() {
      const { map } = this.mapboxCtx;
      return (filter) => {
        if (map) {
          return map.querySourceFeatures(this.sourceId, {
            sourceLayer: this.layer['source-layer'],
            filter,
          });
        }
        return null;
      };
    },

    getRenderedFeatures() {
      const { map } = this.mapboxCtx;
      return (geometry, filter) => {
        if (map) {
          return map.queryRenderedFeatures(geometry, {
            layers: [this.layerId],
            filter,
          });
        }
        return null;
      };
    },
  },

  watch: {
    filter(filter) {
      if (this.initial) return;
      const { map } = this.mapboxCtx;
      map.setFilter(this.layerId, filter);
    },
  },

  created() {
    this.$_deferredMount();
  },

  methods: {
    $_deferredMount() {
      const { map } = this.mapboxCtx;
      const source = {
        type: 'vector',
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
      const existed = map.getLayer(this.layerId);
      if (existed) {
        if (this.replace) {
          map.removeLayer(this.layerId);
        } else {
          this.$_emitEvent('layer-exists', { layerId: this.layerId });
          return existed;
        }
      }
      const layer = {
        id: this.layerId,
        source: this.sourceId,
        ...this.layer,
      };

      map.addLayer(layer, this.before);
      this.$_emitEvent('added', { layerId: this.layerId });
    },

    setFeatureState(featureId, state) {
      const { map } = this.mapboxCtx;
      if (map) {
        const params = {
          id: featureId,
          source: this.sourceId,
          'source-layer': this.layer['source-layer'],
        };
        return map.setFeatureState(params, state);
      }
    },

    getFeatureState(featureId) {
      const { map } = this.mapboxCtx;
      if (map) {
        const params = {
          id: featureId,
          source: this.source,
          'source-layer': this.layer['source-layer'],
        };
        return map.getFeatureState(params);
      }
    },
  },
});
