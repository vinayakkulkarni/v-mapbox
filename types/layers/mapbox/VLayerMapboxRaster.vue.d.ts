import type { FeatureCollection } from 'geojson';
import type { LayerSpecification as AnyLayer } from 'maplibre-gl';
import { PropType } from 'vue';
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
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  {},
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
    layerId: string;
    before: string;
    sourceId: string;
    layer: AnyLayer;
  }
>;
export default _default;
