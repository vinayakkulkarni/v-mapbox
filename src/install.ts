import { App, Plugin } from 'vue';
import CanvasLayer from './components/layer/CanvasLayer';
import GeojsonLayer from './components/layer/GeojsonLayer';
import ImageLayer from './components/layer/ImageLayer';
import layerMixin from './components/layer/layerMixin';
import RasterLayer from './components/layer/RasterLayer';
import VectorLayer from './components/layer/VectorLayer';
import VideoLayer from './components/layer/VideoLayer';
import GlMap from './components/map/GlMap.vue';
import AttributionControl from './components/UI/controls/AttributionControl';
import controlMixin from './components/UI/controls/controlMixin';
import FullscreenControl from './components/UI/controls/FullscreenControl';
import GeolocateControl from './components/UI/controls/GeolocateControl';
import NavigationControl from './components/UI/controls/NavigationControl';
import ScaleControl from './components/UI/controls/ScaleControl';
import Marker from './components/UI/Marker.vue';
import Popup from './components/UI/Popup.vue';
import withSelfEventsMixin from './components/UI/withSelfEvents';
import withEventsMixin from './lib/withEvents';
import { setVueInstance } from './utils/config';

let installed: boolean = false;

export const plugin: Plugin = {
  install(app: App) {
    if (!installed) {
      setVueInstance(app);
      const $helpers = {
        withEvents: withEventsMixin,
        withSelfEvents: withSelfEventsMixin,
        asControl: controlMixin,
        asLayer: layerMixin,
      };
      app.component('MglMap', GlMap);
      app.component('MglNavigationControl', NavigationControl);
      app.component('MglGeolocateControl', GeolocateControl);
      app.component('MglFullscreenControl', FullscreenControl);
      app.component('MglAttributionControl', AttributionControl);
      app.component('MglScaleControl', ScaleControl);
      app.component('MglGeojsonLayer', GeojsonLayer);
      app.component('MglImageLayer', ImageLayer);
      app.component('MglCanvasLayer', CanvasLayer);
      app.component('MglVideoLayer', VideoLayer);
      app.component('MglVectorLayer', VectorLayer);
      app.component('MglRasterLayer', RasterLayer);
      app.component('MglMarker', Marker);
      app.component('MglPopup', Popup);
      app.config.globalProperties.$helpers = $helpers;
      installed = true;
    }
  }
};

export default plugin;
