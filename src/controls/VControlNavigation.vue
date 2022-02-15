<template>
  <main>
    {{ options }}
  </main>
</template>

<script lang="ts">
  import type { PropType } from 'vue-demi';
  import { defineComponent } from 'vue-demi';

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
