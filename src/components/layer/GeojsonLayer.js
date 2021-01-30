import layerEvents from '../../lib/layerEvents';
import mixin from './layerMixin';

export default {
  name: 'GeojsonLayer',
  mixins: [mixin],

  computed: {
    getSourceFeatures() {
      const { map } = this.mapboxCtx;
      return (filter) => {
        if (map) {
          return map.querySourceFeatures(this.sourceId, { filter });
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

    getClusterExpansionZoom() {
      return (clusterId) => {
        return new Promise((resolve, reject) => {
          if (this.mapSource) {
            this.mapSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
              if (err) {
                return reject(err);
              }
              return resolve(zoom);
            });
          } else {
            return reject(
              new Error(`Map source with id ${this.sourceId} not found.`),
            );
          }
        });
      };
    },

    getClusterChildren() {
      return (clusterId) => {
        return new Promise((resolve, reject) => {
          const source = this.mapSource;
          if (source) {
            source.getClusterChildren(clusterId, (err, features) => {
              if (err) {
                return reject(err);
              }
              return resolve(features);
            });
          } else {
            return reject(
              new Error(`Map source with id ${this.sourceId} not found.`),
            );
          }
        });
      };
    },

    getClusterLeaves() {
      return (...args) => {
        return new Promise((resolve, reject) => {
          if (this.mapSource) {
            this.mapSource.getClusterLeaves(...args, (err, features) => {
              if (err) {
                return reject(err);
              }
              return resolve(features);
            });
          } else {
            return reject(
              new Error(`Map source with id ${this.sourceId} not found.`),
            );
          }
        });
      };
    },
  },

  created() {
    if (this.source) {
      this.$watch(
        'source.data',
        function (next) {
          if (this.initial) return;
          this.mapSource.setData(next);
        },
        { deep: true },
      );
    }
    this.$_deferredMount();
  },

  methods: {
    $_deferredMount() {
      const { map } = this.mapboxCtx;
      map.on('dataloading', this.$_watchSourceLoading);
      if (this.source) {
        const source = {
          type: 'geojson',
          ...this.source,
        };
        try {
          map.addSource(this.sourceId, source);
        } catch (err) {
          if (this.replaceSource) {
            map.removeSource(this.sourceId);
            map.addSource(this.sourceId, source);
          }
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
        const params = { id: featureId, source: this.source };
        return map.setFeatureState(params, state);
      }
    },

    getFeatureState(featureId) {
      const { map } = this.mapboxCtx;
      if (map) {
        const params = { id: featureId, source: this.source };
        return map.getFeatureState(params);
      }
    },

    removeFeatureState(featureId, sourceLayer, key) {
      const { map } = this.mapboxCtx;
      if (map) {
        const params = {
          id: featureId,
          source: this.source,
          sourceLayer,
        };
        return map.removeFeatureState(params, key);
      }
    },
  },
};
