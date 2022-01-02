import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    $_emitSelfEvent(event, data = {}) {
      this.$_emitMapEvent(event, { control: this.control, ...data });
    },
    /**
     * Bind events for markers, popups and controls.
     * MapboxGL JS emits this events on popup or marker object,
     * so we treat them as 'self' events of these objects
     *
     * @param {object} events - events to bind
     * @param {any} emitter - object to bind events to
     */
    $_bindSelfEvents(events, emitter) {
      events.forEach(eventName => {
        emitter.on(eventName, this.$_emitSelfEvent);
      });
    },

    $_unbindSelfEvents(events, emitter) {
      if (events.length === 0) return;
      if (!emitter) return;
      events.forEach((eventName) => {
        emitter.off(eventName, this.$_emitSelfEvent);
      });
    },
  },
});
