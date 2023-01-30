/// <reference types="@types/mapbox-gl" />
import type { AnyLayer, ImageSourceRaw } from 'mapbox-gl';
import type { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<
  {
    sourceId: {
      type: PropType<string>;
      default: string;
      required: true;
    };
    layerId: {
      type: PropType<string>;
      default: string;
      required: true;
    };
    source: {
      type: PropType<ImageSourceRaw>;
      required: true;
    };
    layer: {
      type: PropType<AnyLayer>;
      default: () => {};
      required: true;
    };
    before: {
      type: PropType<string>;
      default: string;
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
      sourceId: {
        type: PropType<string>;
        default: string;
        required: true;
      };
      layerId: {
        type: PropType<string>;
        default: string;
        required: true;
      };
      source: {
        type: PropType<ImageSourceRaw>;
        required: true;
      };
      layer: {
        type: PropType<AnyLayer>;
        default: () => {};
        required: true;
      };
      before: {
        type: PropType<string>;
        default: string;
      };
    }>
  >,
  {
    layerId: string;
    before: string;
    sourceId: string;
    layer: AnyLayer;
  }
>;
export default _default;
