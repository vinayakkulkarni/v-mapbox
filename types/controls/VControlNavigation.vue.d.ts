import type { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<
  {
    options: {
      type: PropType<{
        showCompass?: boolean | undefined;
        showZoom?: boolean | undefined;
        visualizePitch?: boolean | undefined;
      }>;
      default: () => {};
      required: true;
    };
    position: {
      type: PropType<'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'>;
      default: () => string;
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
        type: PropType<{
          showCompass?: boolean | undefined;
          showZoom?: boolean | undefined;
          visualizePitch?: boolean | undefined;
        }>;
        default: () => {};
        required: true;
      };
      position: {
        type: PropType<
          'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
        >;
        default: () => string;
      };
    }>
  >,
  {
    options: {
      showCompass?: boolean | undefined;
      showZoom?: boolean | undefined;
      visualizePitch?: boolean | undefined;
    };
    position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  }
>;
export default _default;
