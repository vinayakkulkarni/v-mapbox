// import withRegistration from "../../../lib/withRegistration";
import withEvents from '../../../lib/withEvents';
import withSelfEvents from '../withSelfEvents';

export default {
  mixins: [withEvents, withSelfEvents],

  inject: ['mapboxCtx'],

  props: {
    position: {
      type: String,
      default: 'top-right',
    },
  },

  emits: [ 'added', 'error' ],

  beforeUnmount() {
    if (this.mapboxCtx.map && this.control) {
      this.mapboxCtx.map.removeControl(this.control);
    }
  },

  methods: {
    $_addControl() {
      try {
        this.mapboxCtx.map.addControl(this.control, this.position);
      } catch (err) {
        this.$_emitEvent('error', { error: err });
        return;
      }
      this.$_emitEvent('added', { control: this.control });
    },
  },

  render() {},
};
