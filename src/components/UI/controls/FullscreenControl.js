import controlMixin from './controlMixin';

export default {
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
};
