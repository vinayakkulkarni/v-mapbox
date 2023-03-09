import type { LngLatLike, MarkerOptions, PopupOptions } from 'maplibre-gl';
import { Marker } from 'maplibre-gl';
import type { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<
  {
    options: {
      type: PropType<MarkerOptions>;
      default: () => MarkerOptions;
      required: true;
    };
    coordinates: {
      type: PropType<LngLatLike>;
      default: () => {};
      required: true;
    };
    popupOptions: {
      type: PropType<PopupOptions>;
      default: () => PopupOptions;
      required: false;
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
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  {},
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
      coordinates: {
        type: PropType<LngLatLike>;
        default: () => {};
        required: true;
      };
      popupOptions: {
        type: PropType<PopupOptions>;
        default: () => PopupOptions;
        required: false;
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
