<template>
  <main>
    {{ options }}
  </main>
</template>

<script lang="ts">
  import type { PropType } from 'vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'VControlNavigation',
    props: {
      options: {
        type: Object as PropType<{}>,
        default: () => ({}),
        required: true,
      },
    },
    setup() {},
  });
</script>
