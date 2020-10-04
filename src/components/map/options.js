export default {
  container: {
    type: [String, HTMLElement],
    default() {
      return `map-${('' + Math.random()).split('.')[1]}`;
    },
  },
  minZoom: {
    type: Number,
    default: 0,
    required: false,
  },
  maxZoom: {
    type: Number,
    default: 22,
    required: false,
  },
  minPitch: {
    type: Number,
    default: 0,
    required: false,
  },
  maxPitch: {
    type: Number,
    default: 0,
    required: false,
  },
  mapStyle: {
    type: [String, Object],
    default: undefined,
    required: true,
  },
  hash: {
    type: [Boolean, String],
    default: false,
    required: false,
  },
  interactive: {
    type: Boolean,
    default: true,
    required: false,
  },
  bearingSnap: {
    type: Number,
    default: 7,
    required: false,
  },
  pitchWithRotate: {
    type: Boolean,
    default: true,
    required: false,
  },
  clickTolerance: {
    type: Number,
    default: 3,
    required: false,
  },
  attributionControl: {
    type: Boolean,
    default: true,
    required: false,
  },
  customAttribution: {
    type: [String, Array],
    default: null,
    required: false,
  },
  logoPosition: {
    type: String,
    default: 'bottom-left',
    validator: (val) =>
      ['top-left', 'top-right', 'bottom-left', 'bottom-right'].includes(val),
    required: false,
  },
  failIfMajorPerformanceCaveat: {
    type: Boolean,
    default: false,
    required: false,
  },
  preserveDrawingBuffer: {
    type: Boolean,
    default: false,
    required: false,
  },
  antialias: {
    type: Boolean,
    default: false,
    required: false,
  },
  refreshExpiredTiles: {
    type: Boolean,
    default: true,
    required: false,
  },
  maxBounds: {
    type: [Array, Object],
    default: () => undefined,
    required: false,
  },
  scrollZoom: {
    type: [Boolean, Object],
    default: () => true,
    required: false,
  },
  boxZoom: {
    type: Boolean,
    default: true,
    required: false,
  },
  dragRotate: {
    type: Boolean,
    default: true,
    required: false,
  },
  dragPan: {
    type: Boolean,
    default: true,
    required: false,
  },
  keyboard: {
    type: Boolean,
    default: true,
    required: false,
  },
  doubleClickZoom: {
    type: Boolean,
    default: true,
    required: false,
  },
  touchZoomRotate: {
    type: [Boolean, Object],
    default: () => true,
    required: false,
  },
  touchPitch: {
    type: [Boolean, Object],
    default: () => true,
    required: false,
  },
  trackResize: {
    type: Boolean,
    default: true,
    required: false,
  },
  center: {
    type: [Object, Array],
    default: undefined,
    required: false,
  },
  zoom: {
    type: Number,
    default: 0,
    required: false,
  },
  bearing: {
    type: Number,
    default: 0,
    required: false,
  },
  pitch: {
    type: Number,
    default: 0,
    required: false,
  },
  bounds: {
    type: [Object, Array],
    default: undefined,
    required: false,
  },
  fitBoundsOptions: {
    type: Object,
    default: undefined,
    required: false,
  },
  renderWorldCopies: {
    type: Boolean,
    default: true,
    required: false,
  },
  maxTileCacheSize: {
    type: Number,
    default: null,
    required: false,
  },
  localIdeographFontFamily: {
    type: String,
    default: 'sans-serif',
    required: false,
  },
  transformRequest: {
    type: Function,
    default: null,
    required: false,
  },
  collectResourceTiming: {
    type: Boolean,
    default: false,
    required: false,
  },
  fadeDuration: {
    type: Number,
    default: 300,
    required: false,
  },
  crossSourceCollisions: {
    type: Boolean,
    default: true,
    required: false,
  },
  accessToken: {
    type: String,
    default: undefined,
    required: false,
  },
  locale: {
    type: Object,
    default: undefined,
    required: false,
  },
  /**
   * Reference(mapobox): https://docs.mapbox.com/mapbox-gl-js/example/mapbox-gl-rtl-text/
   * Reference(v-mapbox): ./GlMap.vue#L89
   */
  RTLTextPluginUrl: {
    type: String,
    default: undefined,
    required: false,
  },
  /**
   * Reference(mapbox): https://docs.mapbox.com/mapbox-gl-js/api/map/#map#setlight
   * Reference(v-mapbox): ./mixins/withWatchers.js#L43
   */
  light: {
    type: Object,
    default: undefined,
    required: false,
  },
  /**
   * Reference(mapbox): https://docs.mapbox.com/mapbox-gl-js/api/map/#map#showtileboundaries
   * Reference(v-mapbox): ./mixins/withWatchers.js#L25
   */
  tileBoundaries: {
    type: Boolean,
    default: false,
    required: false,
  },
  /**
   * Reference(mapbox): https://docs.mapbox.com/mapbox-gl-js/api/map/#map#showcollisionboxes
   * Reference(v-mapbox): ./mixins/withWatchers.js#L22
   */
  collisionBoxes: {
    type: Boolean,
    default: false,
    required: false,
  },
  /**
   * Reference(mapbox): https://docs.mapbox.com/mapbox-gl-js/api/map/#map#repaint
   * Reference(v-mapbox): ./mixins/withWatchers.js#L28
   */
  repaint: {
    type: Boolean,
    default: false,
    required: false,
  },
};
