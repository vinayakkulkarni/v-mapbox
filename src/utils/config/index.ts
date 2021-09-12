import { VueConstructor } from 'vue';

const config = {};

export let VueInstance: VueConstructor;

export { config as default };

export const setVueInstance = (instance: VueConstructor) => {
  VueInstance = instance;
};
