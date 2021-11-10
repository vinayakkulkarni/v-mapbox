import Vue from 'vue';
import controlMixin from './controlMixin';

class SlotControl {
  constructor(options = {}, element) {
    this.options = options;
    this.element = element;
  }
  onAdd() {
    this.element.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';
    return this.element;
  }

  onRemove() {
    this.element.parentNode.removeChild(this.element);
  }
}

export default Vue.extend({
  name: 'IControl',
  mixins: [controlMixin],
  mounted() {
    this.control = new SlotControl(this.$attrs, this.$el);
    this.$_addControl();
  },
  render(createElement) {
    return createElement('div', this.$slots.default);
  },
});
