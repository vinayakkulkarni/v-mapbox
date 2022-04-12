/// <reference types="@types/mapbox-gl" />
import type { LngLatLike, Marker, PopupOptions } from 'mapbox-gl';
import type { PropType, Ref } from 'vue';
declare const _default: import('vue-demi').DefineComponent<
  {
    marker: {
      type: PropType<Marker>;
      default: () => Marker;
      required: false;
    };
    options: {
      type: PropType<PopupOptions>;
      default: () => PopupOptions;
      required: true;
    };
    coordinates: {
      type: PropType<LngLatLike>;
      default: () => {};
      required: true;
    };
  },
  {
    content: Ref<HTMLElement | null>;
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
      marker: {
        type: PropType<Marker>;
        default: () => Marker;
        required: false;
      };
      options: {
        type: PropType<PopupOptions>;
        default: () => PopupOptions;
        required: true;
      };
      coordinates: {
        type: PropType<LngLatLike>;
        default: () => {};
        required: true;
      };
    }>
  >,
  {
    options: PopupOptions;
    marker: Marker;
    coordinates: LngLatLike;
  }
>;
export default _default;
