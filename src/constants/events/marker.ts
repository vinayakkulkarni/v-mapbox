import type { MarkerEventType } from 'maplibre-gl';

export const markerMapEvents: Array<keyof MarkerEventType> = [
  'dragstart',
  'drag',
  'dragend',
];
export const markerDOMEvents: Array<keyof HTMLElementEventMap> = [
  'click',
  'mouseenter',
  'mouseleave',
];
