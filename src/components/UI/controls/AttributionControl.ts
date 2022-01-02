import { defineComponent } from 'vue';
import controlMixin from './controlMixin';

export default defineComponent({
  name: 'AttributionControl',
  mixins: [controlMixin],
  props: {
    compact: {
      type: Boolean,
      default: true,
    },
    customAttribution: {
      type: [String, Array],
      default: undefined,
    },
  },

  created() {
    const { mapbox } = this.mapboxCtx;

    this.control = new mapbox.AttributionControl(this.$props);
    this.$_addControl();
  },

  render() {},
});
