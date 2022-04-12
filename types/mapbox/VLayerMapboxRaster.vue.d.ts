/// <reference types="@types/mapbox-gl" />
import type { FeatureCollection } from 'geojson';
import type { AnyLayer } from 'mapbox-gl';
import type { PropType } from 'vue';
declare const _default: import('vue-demi').DefineComponent<
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
      type: PropType<
        FeatureCollection<
          import('geojson').Geometry,
          import('geojson').GeoJsonProperties
        >
      >;
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
      required: false;
    };
  },
  void,
  unknown,
  {},
  {},
  import('vue-demi').ComponentOptionsMixin,
  import('vue-demi').ComponentOptionsMixin,
  Record<string, any>,
  string,
  import('vue-demi').VNodeProps &
    import('vue-demi').AllowedComponentProps &
    import('vue-demi').ComponentCustomProps,
  Readonly<
    import('vue-demi').ExtractPropTypes<{
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
        type: PropType<
          FeatureCollection<
            import('geojson').Geometry,
            import('geojson').GeoJsonProperties
          >
        >;
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
        required: false;
      };
    }>
  >,
  {
    sourceId: string;
    layerId: string;
    layer: AnyLayer;
    before: string;
  }
>;
export default _default;
