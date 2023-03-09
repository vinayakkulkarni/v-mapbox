import { MapLayerEventType } from 'maplibre-gl';

export const mapLayerEvents: Array<keyof MapLayerEventType> = [
  'click',
  'dblclick',
  'mousedown',
  'mouseup',
  'mousemove',
  'mouseenter',
  'mouseleave',
  'mouseover',
  'mouseout',
  'contextmenu',
  'touchstart',
  'touchend',
  'touchcancel',
];
