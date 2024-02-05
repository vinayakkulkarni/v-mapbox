<script setup lang="ts">
  import type { ControlPosition, ScaleControlOptions } from './types';
  import { onMounted, inject } from 'vue';
  import { ScaleControl } from 'maplibre-gl';
  import { MapKey } from '../../utils';

  const defaultOptions: ScaleControlOptions = {
    maxWidth: 100,
    unit: 'metric',
  };

  const props = withDefaults(
    defineProps<{
      options?: ScaleControlOptions;
      position?: ControlPosition;
    }>(),
    {
      options: undefined,
      position: 'bottom-left',
    },
  );

  const map = inject(MapKey);

  onMounted(() => {
    addControl();
  });

  const addControl = (): void => {
    const control = new ScaleControl(props.options || defaultOptions);
    map?.value.addControl(control, props.position);
  };
</script>
