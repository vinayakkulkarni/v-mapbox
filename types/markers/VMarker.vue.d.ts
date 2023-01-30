/// <reference types="@types/mapbox-gl" />
import type { LngLatLike, MarkerOptions, PopupOptions } from 'mapbox-gl';
import { Marker } from 'mapbox-gl';
import type { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<
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
    };
  },
  {
    marker: Marker;
  },
  unknown,
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  import('vue').EmitsOptions,
  string,
  import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps,
  Readonly<
    import('vue').ExtractPropTypes<{
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
