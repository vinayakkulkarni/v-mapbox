import { defineComponent } from 'vue';
import controlMixin from './controlMixin';

export default defineComponent({
  name: 'FullscreenControl',
  mixins: [controlMixin],

  props: {
    container: {
      type: HTMLElement,
      default: undefined,
    },
  },

  created() {
    const { mapbox } = this.mapboxCtx;

    this.control = new mapbox.FullscreenControl(this.$props);
    this.$_addControl();
  },

  render() {},
});
