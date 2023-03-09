import type { FullscreenOptions } from 'maplibre-gl';
import type { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<
  {
    options: {
      type: PropType<FullscreenOptions>;
      default: () => {};
      required: true;
    };
    position: {
      type: PropType<'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'>;
      default: () => string;
      required: false;
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
        type: PropType<FullscreenOptions>;
        default: () => {};
        required: true;
      };
      position: {
        type: PropType<
          'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
        >;
        default: () => string;
        required: false;
      };
    }>
  >,
  {
    options: FullscreenOptions;
    position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  }
>;
export default _default;
