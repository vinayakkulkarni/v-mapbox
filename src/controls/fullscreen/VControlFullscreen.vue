<script setup lang="ts">
  import type { ControlPosition, FullscreenOptions } from './types';
  import { FullscreenControl } from 'maplibre-gl';
  import { onMounted } from 'vue';
  import { MapKey, injectStrict } from '../../utils';

  const defaultOptions: FullscreenOptions = {
    container: undefined,
  };

  const props = withDefaults(
    defineProps<{
      options?: FullscreenOptions;
      position?: ControlPosition;
    }>(),
    {
      options: undefined,
      position: 'top-left',
    },
  );

  let map = injectStrict(MapKey);

  onMounted(() => {
    addControl();
  });

  const addControl = (): void => {
    const control = new FullscreenControl(props.options || defaultOptions);
    map.value.addControl(control, props.position);
  };
</script>
