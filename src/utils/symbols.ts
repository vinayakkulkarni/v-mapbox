import type { Map } from 'maplibre-gl';
import type { InjectionKey, Ref } from 'vue';

const MapKey: InjectionKey<Ref<Map>> = Symbol('Map');

export { MapKey };
