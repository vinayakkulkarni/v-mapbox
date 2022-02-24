import { MapLayerEventType } from 'mapbox-gl';

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
