/// <reference types="@types/mapbox-gl" />
import type { MapboxOptions } from 'mapbox-gl';
import type { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<
  {
    options: {
      type: PropType<MapboxOptions>;
      required: true;
      default: () => {};
    };
  },
  void,
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
        type: PropType<MapboxOptions>;
        required: true;
        default: () => {};
      };
    }>
  >,
  {
    options: MapboxOptions;
  }
>;
export default _default;
