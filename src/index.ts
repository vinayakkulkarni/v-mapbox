// Controls
import VControlAttribution from './controls/VControlAttribution.vue';
import VControlFullscreen from './controls/VControlFullscreen.vue';
import VControlGeolocate from './controls/VControlGeolocate.vue';
import VControlNavigation from './controls/VControlNavigation.vue';
import VControlScale from './controls/VControlScale.vue';
// Layers – Mapbox
import VLayerMapboxCanvas from './layers/mapbox/VLayerMapboxCanvas.vue';
import VLayerMapboxGeojson from './layers/mapbox/VLayerMapboxGeojson.vue';
import VLayerMapboxImage from './layers/mapbox/VLayerMapboxImage.vue';
import VLayerMapboxRaster from './layers/mapbox/VLayerMapboxRaster.vue';
import VLayerMapboxVector from './layers/mapbox/VLayerMapboxVector.vue';
import VLayerMapboxVideo from './layers/mapbox/VLayerMapboxVideo.vue';
// Map
import VMap from './map/VMap.vue';
// Marker
import VMarker from './markers/VMarker.vue';
// Popup
import VPopup from './popups/VPopup.vue';

export {
  VMap,
  // Marker
  VMarker,
  // Popup
  VPopup,
  // Layers
  VLayerMapboxCanvas,
  VLayerMapboxGeojson,
  VLayerMapboxImage,
  VLayerMapboxRaster,
  VLayerMapboxVector,
  VLayerMapboxVideo,
  // Controls
  VControlAttribution,
  VControlFullscreen,
  VControlGeolocate,
  VControlNavigation,
  VControlScale,
};

export default VMap;
