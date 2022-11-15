declare module '*.vue' {
  import Vue, { VueConstructor, defineComponent } from 'vue';
  const component: ReturnType<typeof defineComponent> & {
    install(app: VueConstructor<Vue>): void;
  };
  export default component;
}
