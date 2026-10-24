<script setup lang="ts">
  import { ref } from 'vue';
  import { track } from './analytics';

  const command = 'pnpm add v-mapbox maplibre-gl';
  const copied = ref(false);

  /**
   * Copies the install command and records the copy
   */
  async function copy(): Promise<void> {
    await navigator.clipboard.writeText(command);
    copied.value = true;
    track('install_copy', { command, source: 'hero' });
    setTimeout(() => (copied.value = false), 1600);
  }
</script>

<template>
  <div class="install">
    <code class="install__cmd"
      ><span aria-hidden="true">$</span> {{ command }}</code
    >
    <button type="button" class="install__btn" @click="copy">
      {{ copied ? 'Copied' : 'Copy' }}
    </button>
  </div>
</template>

<style scoped>
  .install {
    display: flex;
    align-items: center;
    gap: 12px;
    max-width: 100%;
    margin: 0 auto;
    padding: 6px 6px 6px 16px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 10px;
    background: var(--vp-c-bg-soft);
    width: fit-content;
  }
  .install__cmd {
    font-family: var(--vp-font-family-mono);
    font-size: 14px;
    white-space: nowrap;
    overflow-x: auto;
    min-width: 0;
    color: var(--vp-c-text-1);
  }
  .install__cmd span {
    color: var(--vp-c-text-3);
  }
  .install__btn {
    flex: none;
    padding: 6px 14px;
    border-radius: 7px;
    font-size: 13px;
    font-weight: 600;
    background: var(--vp-c-brand-1);
    color: var(--vp-c-white);
    transition: background-color 0.15s ease;
  }
  .install__btn:hover {
    background: var(--vp-c-brand-2);
  }
  .install__btn:focus-visible {
    outline: 2px solid var(--vp-c-brand-1);
    outline-offset: 2px;
  }
</style>
