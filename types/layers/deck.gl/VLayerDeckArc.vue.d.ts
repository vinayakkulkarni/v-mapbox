import type { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<
  {
    layerId: {
      type: PropType<string>;
      default: string;
      required: true;
    };
    data: {
      type: PropType<any>;
      required: true;
    };
    options: {
      type: ObjectConstructor;
      required: true;
    };
    before: {
      type: PropType<string>;
      default: string;
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
      layerId: {
        type: PropType<string>;
        default: string;
        required: true;
      };
      data: {
        type: PropType<any>;
        required: true;
      };
      options: {
        type: ObjectConstructor;
        required: true;
      };
      before: {
        type: PropType<string>;
        default: string;
        required: false;
      };
    }>
  >,
  {
    layerId: string;
    before: string;
  }
>;
export default _default;
