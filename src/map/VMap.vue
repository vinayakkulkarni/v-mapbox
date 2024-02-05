<script setup lang="ts">
  import type { MapOptions, MapEventType } from 'maplibre-gl';
  import type { Ref } from 'vue';
  import { Map } from 'maplibre-gl';
  import { onMounted, provide, ref, shallowRef } from 'vue';
  import { mapEvents } from '../constants/events';
  import { MapKey } from '../utils/symbols';

  const props = withDefaults(
    defineProps<{
      options: MapOptions;
    }>(),
    {
      // @ts-ignore
      options: { container: 'map' },
    },
  );

  const emit = defineEmits(['loaded', ...mapEvents]);

  let map: Ref<Map> = shallowRef({} as Map);
  let loaded: Ref<boolean> = ref(false);
  let events: Ref<Array<keyof MapEventType>> = ref(mapEvents);

  onMounted(() => {
    map.value = new Map(props.options);
    loaded.value = true;
    provide(MapKey, map);
    listenMapEvents();
  });

  const listenMapEvents = () => {
    events.value.forEach((e) => {
      map.value.on(e, (evt) => {
        switch (e) {
          case 'load':
            emit('loaded', map.value);
            break;
          default:
            emit(e, evt);
            break;
        }
      });
    });
  };
</script>

<template>
  <div :id="`${options?.container}`" class="v-map-container">
    <slot />
  </div>
</template>

<style scoped>
  canvas {
    outline: none;
  }
  .v-map-container {
    width: 100%;
    height: 100%;
  }
</style>
