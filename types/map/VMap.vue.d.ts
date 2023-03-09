import type { MapOptions } from 'maplibre-gl';
import type { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<
  {
    options: {
      type: PropType<MapOptions>;
      required: true;
      default: () => {
        container: string;
      };
    };
  },
  void,
  unknown,
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  Record<string, any>,
  string,
  import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps,
  Readonly<
    import('vue').ExtractPropTypes<{
      options: {
        type: PropType<MapOptions>;
        required: true;
        default: () => {
          container: string;
        };
      };
    }>
  >,
  {
    options: MapOptions;
  }
>;
export default _default;
