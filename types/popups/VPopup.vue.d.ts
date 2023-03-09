import type { LngLatLike, Marker, PopupOptions } from 'maplibre-gl';
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
    marker: Marker;
    options: PopupOptions;
    coordinates: LngLatLike;
  }
>;
export default _default;
