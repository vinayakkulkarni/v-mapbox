import type { Map } from 'mapbox-gl';
import type { InjectionKey, Ref } from 'vue';

const MapKey: InjectionKey<Ref<Map>> = Symbol('Map');

export { MapKey };
