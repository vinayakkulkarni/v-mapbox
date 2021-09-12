// TODO: Remove once https://github.com/rollup/plugins/pull/969 is merged
declare module '@rollup/plugin-beep' {
  import { Plugin } from 'rollup';
  export default function beep(): Plugin;
}
