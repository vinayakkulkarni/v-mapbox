<script lang="ts">
  // @ts-ignore
  import { ArcLayer } from '@deck.gl/layers';
  // @ts-ignore
  import { MapboxLayer } from '@deck.gl/mapbox';
  import type { PropType, Ref } from 'vue';
  import { defineComponent, onMounted, ref, watch } from 'vue';
  import { injectStrict, MapKey } from '../../utils';

  export default defineComponent({
    name: 'VLayerDeckArc',
    props: {
      layerId: {
        type: String as PropType<string>,
        default: 'deck.gl-arc-layer',
        required: true,
      },
      data: {
        type: Object as PropType<any>,
        required: true,
      },
      options: {
        type: Object,
        required: true,
      },
      before: {
        type: String as PropType<string>,
        default: '',
        required: false,
      },
    },
    setup(props) {
      let map = injectStrict(MapKey);
      let loaded: Ref<boolean> = ref(false);

      const layer = new MapboxLayer({
        ...props.options,
        id: props.layerId,
        data: props.data,
        type: ArcLayer,
      });

      map.value.on('style.load', () => {
        // https://github.com/mapbox/mapbox-gl-js/issues/2268#issuecomment-401979967
        const styleTimeout = () => {
          if (!map.value.isStyleLoaded()) {
            loaded.value = false;
            setTimeout(styleTimeout, 200);
          } else {
            loaded.value = true;
          }
        };
        styleTimeout();
      });

      /**
       * Watcher(s)
       */
      watch(loaded, (value) => {
        if (value) {
          addLayer();
        }
      });

      onMounted(() => {
        addLayer();
      });

      /**
       * Re–adds the layer when style changed
       *
       * @returns {void}
       */
      function addLayer(): void {
        map.value.addLayer(layer, props.before);
      }
    },
  });
</script>
