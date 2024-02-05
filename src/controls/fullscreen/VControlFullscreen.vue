<script setup lang="ts">
  import type { ControlPosition, FullscreenControlOptions } from './types';
  import { FullscreenControl } from 'maplibre-gl';
  import { onMounted } from 'vue';
  import { MapKey, injectStrict } from '../../utils';

  const defaultOptions: FullscreenControlOptions = {
    container: undefined,
  };

  const props = withDefaults(
    defineProps<{
      options?: FullscreenControlOptions;
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
