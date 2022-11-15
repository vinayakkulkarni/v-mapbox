import type { PropType } from 'vue';
import type {
  FitBoundsOptions,
  Light,
  LngLatBoundsLike,
  LngLatLike,
  Style,
  TransformRequestFunction,
} from 'mapbox-gl';

const props = {
  antialias: {
    type: [Boolean, undefined] as PropType<boolean | undefined>,
    default: false,
    required: false,
  },
  attributionControl: {
    type: [Boolean, undefined] as PropType<boolean | undefined>,
    default: true,
    required: false,
  },
  bearing: {
    type: [Number, undefined] as PropType<number | undefined>,
    default: 0,
    required: false,
  },
  bearingSnap: {
    type: [Number, undefined] as PropType<number | undefined>,
    default: 7,
    required: false,
  },
  bounds: {
    type: [Object, Array, undefined] as PropType<LngLatBoundsLike | undefined>,
    default: undefined,
    required: false,
  },
  boxZoom: {
    type: [Boolean, undefined] as PropType<boolean | undefined>,
    default: true,
    required: false,
  },
  center: {
    type: [Object, Array, undefined] as PropType<LngLatLike | undefined>,
    default: undefined,
    required: false,
  },
  clickTolerance: {
    type: [Number, undefined] as PropType<number | undefined>,
    default: 3,
    required: false,
  },
  collectResourceTiming: {
    type: [Boolean, undefined] as PropType<boolean | undefined>,
    default: false,
    required: false,
  },
  crossSourceCollisions: {
    type: [Boolean, undefined] as PropType<boolean | undefined>,
    default: true,
    required: false,
  },
  container: {
    type: String as PropType<string | HTMLElement>,
    required: false,
    default: () => `map-${('' + Math.random()).split('.')[1]}`,
  },
  customAttribution: {
    type: [String, Array, undefined] as PropType<string | string[] | undefined>,
    default: null,
    required: false,
  },
  dragPan: {
    type: [Boolean, undefined] as PropType<boolean | undefined>,
    default: true,
    required: false,
  },
  dragRotate: {
    type: [Boolean, undefined] as PropType<boolean | undefined>,
    default: true,
    required: false,
  },
  doubleClickZoom: {
    type: [Boolean, undefined] as PropType<boolean | undefined>,
    default: true,
    required: false,
  },
  hash: {
    type: [Boolean, String, undefined] as PropType<
      boolean | string | undefined
    >,
    default: false,
    required: false,
  },
  fadeDuration: {
    type: [Number, undefined] as PropType<number | undefined>,
    default: 300,
    required: false,
  },
  failIfMajorPerformanceCaveat: {
    type: [Boolean, undefined] as PropType<boolean | undefined>,
    default: false,
    required: false,
  },
  fitBoundsOptions: {
    type: [Object, undefined] as PropType<FitBoundsOptions | undefined>,
    default: undefined,
    required: false,
  },
  interactive: {
    type: [Boolean, undefined] as PropType<boolean | undefined>,
    default: true,
    required: false,
  },
  keyboard: {
    type: [Boolean, undefined] as PropType<boolean | undefined>,
    default: true,
    required: false,
  },
  locale: {
    type: [Object, undefined] as PropType<
      { [key: string]: string } | undefined
    >,
    default: undefined,
    required: false,
  },
  localIdeographFontFamily: {
    type: [String, undefined] as PropType<string | undefined>,
    default: 'sans-serif',
    required: false,
  },
  logoPosition: {
    type: [String, undefined] as PropType<string | undefined>,
    default: 'bottom-left',
    validator: (val: string) =>
      ['top-left', 'top-right', 'bottom-left', 'bottom-right'].includes(val),
    required: false,
  },
  maxBounds: {
    type: [Array, Object, undefined] as PropType<LngLatBoundsLike | undefined>,
    default: undefined,
    required: false,
  },
  maxPitch: {
    type: [Number, undefined] as PropType<number | undefined>,
    default: 0,
    required: false,
  },
  maxZoom: {
    type: [Number, undefined] as PropType<number | undefined>,
    default: 22,
    required: false,
  },
  minPitch: {
    type: [Number, undefined] as PropType<number | undefined>,
    default: 0,
    required: false,
  },
  minZoom: {
    type: [Number, undefined] as PropType<number | undefined>,
    default: 0,
    required: false,
  },
  preserveDrawingBuffer: {
    type: [Boolean, undefined] as PropType<boolean | undefined>,
    default: false,
    required: false,
  },
  pitch: {
    type: [Number, undefined] as PropType<number | undefined>,
    default: 0,
    required: false,
  },
  pitchWithRotate: {
    type: [Boolean, undefined] as PropType<boolean | undefined>,
    default: true,
    required: false,
  },
  refreshExpiredTiles: {
    type: [Boolean, undefined] as PropType<boolean | undefined>,
    default: true,
    required: false,
  },
  renderWorldCopies: {
    type: [Boolean, undefined] as PropType<boolean | undefined>,
    default: true,
    required: false,
  },
  scrollZoom: {
    type: [Boolean, undefined] as PropType<boolean | undefined>,
    default: () => true,
    required: false,
  },
  mapStyle: {
    type: [String, Object, undefined] as PropType<Style | string | undefined>,
    default: undefined,
    required: true,
  },
  trackResize: {
    type: [Boolean, undefined] as PropType<boolean | undefined>,
    default: true,
    required: false,
  },
  transformRequest: {
    type: [Function, undefined] as PropType<
      TransformRequestFunction | undefined
    >,
    default: undefined,
    required: false,
  },
  touchZoomRotate: {
    type: [Boolean, undefined] as PropType<boolean | undefined>,
    default: () => true,
    required: false,
  },
  touchPitch: {
    type: [Boolean, undefined] as PropType<boolean | undefined>,
    default: () => true,
    required: false,
  },
  zoom: {
    type: [Number, undefined] as PropType<number | undefined>,
    default: 0,
    required: false,
  },
  maxTileCacheSize: {
    type: [Number, undefined] as PropType<number | undefined>,
    default: null,
    required: false,
  },
  accessToken: {
    type: [String, undefined] as PropType<string | undefined>,
    default: undefined,
    required: false,
  },
  /**
   * Reference(mapbox): https://docs.mapbox.com/mapbox-gl-js/example/mapbox-gl-rtl-text/
   * Reference(v-mapbox): ./GlMap.vue#L89
   */
  RTLTextPluginUrl: {
    type: [String, undefined] as PropType<string | undefined>,
    default: undefined,
    required: false,
  },
  /**
   * Reference(mapbox): https://docs.mapbox.com/mapbox-gl-js/api/map/#map#setlight
   * Reference(v-mapbox): ./mixins/withWatchers.js#L43
   */
  light: {
    type: [Object, undefined] as PropType<Light | undefined>,
    default: undefined,
    required: false,
  },
  /**
   * Reference(mapbox): https://docs.mapbox.com/mapbox-gl-js/api/map/#map#showtileboundaries
   * Reference(v-mapbox): ./mixins/withWatchers.js#L25
   */
  tileBoundaries: {
    type: [Boolean, undefined] as PropType<boolean | undefined>,
    default: false,
    required: false,
  },
  /**
   * Reference(mapbox): https://docs.mapbox.com/mapbox-gl-js/api/map/#map#showcollisionboxes
   * Reference(v-mapbox): ./mixins/withWatchers.js#L22
   */
  collisionBoxes: {
    type: [Boolean, undefined] as PropType<boolean | undefined>,
    default: false,
    required: false,
  },
  /**
   * Reference(mapbox): https://docs.mapbox.com/mapbox-gl-js/api/map/#map#repaint
   * Reference(v-mapbox): ./mixins/withWatchers.js#L28
   */
  repaint: {
    type: [Boolean, undefined] as PropType<boolean | undefined>,
    default: false,
    required: false,
  },
};

export default props;
