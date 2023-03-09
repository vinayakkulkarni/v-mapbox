import type { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<
  {
    options: {
      type: PropType<{
        compact?: boolean | undefined;
        customAttribution?: string | string[] | undefined;
      }>;
      default: () => {
        compact: boolean;
        customAttribution: string;
      };
      required: false;
    };
    position: {
      type: PropType<'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'>;
      default: () => string;
      required: false;
    };
  },
  () => import('vue').VNode<
    import('vue').RendererNode,
    import('vue').RendererElement,
    {
      [key: string]: any;
    }
  >[],
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
        type: PropType<{
          compact?: boolean | undefined;
          customAttribution?: string | string[] | undefined;
        }>;
        default: () => {
          compact: boolean;
          customAttribution: string;
        };
        required: false;
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
    options: {
      compact?: boolean | undefined;
      customAttribution?: string | string[] | undefined;
    };
    position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  }
>;
export default _default;
