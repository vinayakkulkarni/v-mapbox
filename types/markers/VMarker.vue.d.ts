/// <reference types="@types/mapbox-gl" />
import type { LngLatLike, MarkerOptions, PopupOptions } from 'mapbox-gl';
import { Marker } from 'mapbox-gl';
import type { PropType } from 'vue';
declare const _default: import('vue-demi').DefineComponent<
  {
    options: {
      type: PropType<MarkerOptions>;
      default: () => MarkerOptions;
      required: true;
    };
    popupOptions: {
      type: PropType<PopupOptions>;
      default: () => PopupOptions;
      required: true;
    };
    coordinates: {
      type: PropType<LngLatLike>;
      default: () => {};
      required: true;
    };
    cursor: {
      type: PropType<string>;
      default: string;
      required: false;
    };
  },
  {
    marker: Marker;
  },
  unknown,
  {},
  {},
  import('vue-demi').ComponentOptionsMixin,
  import('vue-demi').ComponentOptionsMixin,
  import('vue-demi').EmitsOptions,
  string,
  import('vue-demi').VNodeProps &
    import('vue-demi').AllowedComponentProps &
    import('vue-demi').ComponentCustomProps,
  Readonly<
    import('vue-demi').ExtractPropTypes<{
      options: {
        type: PropType<MarkerOptions>;
        default: () => MarkerOptions;
        required: true;
      };
      popupOptions: {
        type: PropType<PopupOptions>;
        default: () => PopupOptions;
        required: true;
      };
      coordinates: {
        type: PropType<LngLatLike>;
        default: () => {};
        required: true;
      };
      cursor: {
        type: PropType<string>;
        default: string;
        required: false;
      };
    }>
  >,
  {
    options: MarkerOptions;
    coordinates: LngLatLike;
    popupOptions: PopupOptions;
    cursor: string;
  }
>;
export default _default;
