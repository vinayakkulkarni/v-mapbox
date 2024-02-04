<script setup lang="ts">
  import type { ControlPosition, NavigationOptions } from './types';
  import { NavigationControl } from 'maplibre-gl';
  import { onMounted, inject } from 'vue';
  import { MapKey } from '../../utils';

  const defaultOptions: NavigationOptions = {
    showCompass: true,
    showZoom: true,
    visualizePitch: true,
  };

  const props = withDefaults(
    defineProps<{
      options?: NavigationOptions;
      position?: ControlPosition;
    }>(),
    {
      options: undefined,
      position: 'top-left',
    },
  );

  const map = inject(MapKey);

  onMounted(() => {
    addControl();
  });

  const addControl = (): void => {
    const control = new NavigationControl(props.options || defaultOptions);
    map?.value.addControl(control, props.position);
  };
</script>
