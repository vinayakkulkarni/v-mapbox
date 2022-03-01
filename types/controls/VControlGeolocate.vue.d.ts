/// <reference types="@types/mapbox-gl" />
import type { FitBoundsOptions, PositionOptions } from 'mapbox-gl';
import type { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<
  {
    options: {
      type: PropType<{
        positionOptions?: PositionOptions | undefined;
        fitBoundsOptions?: FitBoundsOptions | undefined;
        trackUserLocation?: boolean | undefined;
        showAccuracyCircle?: boolean | undefined;
        showUserLocation?: boolean | undefined;
      }>;
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
        type: PropType<{
          positionOptions?: PositionOptions | undefined;
          fitBoundsOptions?: FitBoundsOptions | undefined;
          trackUserLocation?: boolean | undefined;
          showAccuracyCircle?: boolean | undefined;
          showUserLocation?: boolean | undefined;
        }>;
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
    options: {
      positionOptions?: PositionOptions | undefined;
      fitBoundsOptions?: FitBoundsOptions | undefined;
      trackUserLocation?: boolean | undefined;
      showAccuracyCircle?: boolean | undefined;
      showUserLocation?: boolean | undefined;
    };
    position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  }
>;
export default _default;
