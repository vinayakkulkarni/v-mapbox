import { defineComponent } from 'vue';
import controlMixin from './controlMixin';

export default defineComponent({
  name: 'NavigationControl',
  mixins: [controlMixin],

  props: {
    showCompass: {
      type: Boolean,
      default: true,
    },
    showZoom: {
      type: Boolean,
      default: true,
    },
    visualizePitch: {
      type: Boolean,
      default: true,
    },
  },

  created() {
    const { mapbox } = this.mapboxCtx;

    this.control = new mapbox.NavigationControl(this.$props);
    this.$_addControl();
  },

  render() {},
});
