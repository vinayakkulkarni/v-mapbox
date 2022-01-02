import { defineComponent } from 'vue';
import controlMixin from './controlMixin';

export default defineComponent({
  name: 'ScaleControl',

  mixins: [controlMixin],

  props: {
    maxWidth: {
      type: Number,
      default: 150,
    },
    unit: {
      type: String,
      default: 'metric',
      validator(value) {
        return ['imperial', 'metric', 'nautical'].includes(value);
      },
    },
  },

  watch: {
    unit(next, prev) {
      if (this.control && next !== prev) {
        this.control.setUnit(next);
      }
    },
  },

  created() {
    const { mapbox } = this.mapboxCtx;

    this.control = new mapbox.ScaleControl(this.$props);
    this.$_addControl();
  },

  render() {},
});
