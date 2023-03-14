import { test, expect } from 'vitest';
import VMarker from '../../src/markers/VMarker.vue';

test('mount component', async () => {
  expect(VMarker).toBeTruthy();
});
