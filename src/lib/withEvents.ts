import Vue from 'vue';

export default Vue.extend({
  methods: {
    /**
     * Emit Vue event with additional data
     *
     * @param {string} name EventName
     * @param {object} [data={}] Additional data
     */
    $_emitEvent(name: string, data = {}) {
      this.$emit(name, {
        map: this.map,
        component: this,
        ...data,
      });
    },

    /**
     * Emit Vue event with Mapbox event as additional data
     *
     * @param {Record<string, any>} event - Event Payload
     * @param {Record<string, any>} data - Data to be added to event
     */
    $_emitMapEvent(event: Record<string, any>, data = {}) {
      this.$_emitEvent(event.type, { mapboxEvent: event, ...data });
    },
  },
});
