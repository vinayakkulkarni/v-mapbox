import Vue from 'vue';
import controlMixin from './controlMixin';

export default Vue.extend({
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
    this.control = new this.mapbox.AttributionControl(this.$props);
    this.$_addControl();
  },

  render() {},
});
