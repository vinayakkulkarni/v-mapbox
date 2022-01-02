export { default as MglCanvasLayer } from './components/layer/CanvasLayer';
export { default as MglGeojsonLayer } from './components/layer/GeojsonLayer';
export { default as MglImageLayer } from './components/layer/ImageLayer';
export { default as MglRasterLayer } from './components/layer/RasterLayer';
export { default as MglVectorLayer } from './components/layer/VectorLayer';
export { default as MglVideoLayer } from './components/layer/VideoLayer';
export { default as MglMap } from './components/map/GlMap.vue';
export { default as MglAttributionControl } from './components/UI/controls/AttributionControl';
export { default as MglFullscreenControl } from './components/UI/controls/FullscreenControl';
export { default as MglGeolocateControl } from './components/UI/controls/GeolocateControl';
export { default as MglIControl } from './components/UI/controls/IControl';
export { default as MglNavigationControl } from './components/UI/controls/NavigationControl';
export { default as MglScaleControl } from './components/UI/controls/ScaleControl';
export { default as MglMarker } from './components/UI/Marker.vue';
export { default as MglPopup } from './components/UI/Popup.vue';
export { default } from './install';

import layerMixin from './components/layer/layerMixin';
import controlMixin from './components/UI/controls/controlMixin';
import withSelfEventsMixin from './components/UI/withSelfEvents';
import withEventsMixin from './lib/withEvents';

export const withEvents = withEventsMixin;
export const withSelfEvents = withSelfEventsMixin;
export const asControl = controlMixin;
export const asLayer = layerMixin;

export const $helpers = {
  withEvents: withEventsMixin,
  withSelfEvents: withSelfEventsMixin,
  asControl: controlMixin,
  asLayer: layerMixin,
};
