// import withRegistration from "../../../lib/withRegistration";
import { defineComponent } from 'vue';
import withEvents from '../../../lib/withEvents';
import withSelfEvents from '../withSelfEvents';

export default defineComponent({
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

  watch: {
    position() {
      this.$_removeControl();
      this.$_addControl();
    },
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
});
