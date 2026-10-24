import type { GeolocateControlEventType } from 'maplibre-gl';

export const geolocateControlEvents: Array<keyof GeolocateControlEventType> = [
  'geolocate',
  'error',
  'outofmaxbounds',
  'trackuserlocationstart',
  'trackuserlocationend',
];
