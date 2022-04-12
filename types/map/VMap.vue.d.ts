/// <reference types="@types/mapbox-gl" />
import type { MapboxOptions } from 'mapbox-gl';
import type { PropType } from 'vue';
declare const _default: import('vue-demi').DefineComponent<
  {
    options: {
      type: PropType<MapboxOptions>;
      required: true;
      default: () => {};
    };
  },
  () => import('vue-demi').VNode<
    import('vue-demi').RendererNode,
    import('vue-demi').RendererElement,
    {
      [key: string]: any;
    }
  >,
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
