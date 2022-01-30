declare module '*.vue' {
  import Vue, { defineComponent, VueConstructor } from 'vue';
  const component: ReturnType<typeof defineComponent> & {
    install(app: VueConstructor<Vue>): void;
  };
  export default component;
}
