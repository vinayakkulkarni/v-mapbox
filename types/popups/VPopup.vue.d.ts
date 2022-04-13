/// <reference types="@types/mapbox-gl" />
import type { LngLatLike, Marker, PopupOptions } from 'mapbox-gl';
import type { PropType, Ref } from 'vue';
declare const _default: import('vue').DefineComponent<
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
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  import('vue').EmitsOptions,
  string,
  import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps,
  Readonly<
    import('vue').ExtractPropTypes<{
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
