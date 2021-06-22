// import withRegistration from "../../../lib/withRegistration";
import withEvents from '../../../lib/withEvents';
import withSelfEvents from '../withSelfEvents';

export default {
  mixins: [withEvents, withSelfEvents],

  inject: ['mapbox', 'map', 'actions'],

  props: {
    position: {
      type: String,
      default: 'top-right',
    },
  },

  watch: {
    position() {
      this.$_removeControl();
      this.$_addControl();
    },
  },

  beforeDestroy() {
    this.$_removeControl();
  },

  methods: {
    $_addControl() {
      try {
        this.map.addControl(this.control, this.position);
      } catch (err) {
        this.$_emitEvent('error', { error: err });
        return;
      }
      this.$_emitEvent('added', { control: this.control });
    },

    $_removeControl() {
      try {
        if (this.map && this.control) {
          this.map.removeControl(this.control);
        }
      } catch (err) {
        this.$_emitEvent('error', { error: err });
        return;
      }
      this.$_emitEvent('removed', { control: this.control });
    },
  },

  render() {},
};
