import { VueConstructor as Application, PluginFunction } from 'vue';
import VueCompositionApi from '@vue/composition-api';
import GlMap from './components/map/GlMap.vue';

import NavigationControl from './components/UI/controls/NavigationControl';
import GeolocateControl from './components/UI/controls/GeolocateControl';
import FullscreenControl from './components/UI/controls/FullscreenControl';
import AttributionControl from './components/UI/controls/AttributionControl';
import ScaleControl from './components/UI/controls/ScaleControl';
import Marker from './components/UI/Marker.vue';
import Popup from './components/UI/Popup.vue';

import GeojsonLayer from './components/layer/GeojsonLayer';
import ImageLayer from './components/layer/ImageLayer';
import CanvasLayer from './components/layer/CanvasLayer';
import VideoLayer from './components/layer/VideoLayer';
import VectorLayer from './components/layer/VectorLayer';
import RasterLayer from './components/layer/RasterLayer';

import withEventsMixin from './lib/withEvents';
import withSelfEventsMixin from './components/UI/withSelfEvents';
import controlMixin from './components/UI/controls/controlMixin';
import layerMixin from './components/layer/layerMixin';

import { setVueInstance } from './utils/config';

let installed: boolean = false;

const install: PluginFunction<Application> = (app: Application) => {
  if (installed) return;
  if (!installed) {
    setVueInstance(app);
    const $helpers = {
      withEvents: withEventsMixin,
      withSelfEvents: withSelfEventsMixin,
      asControl: controlMixin,
      asLayer: layerMixin,
    };
    app.use(VueCompositionApi);
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
    app.prototype.$helpers = $helpers;
    installed = true;
  }
};

export default install;
