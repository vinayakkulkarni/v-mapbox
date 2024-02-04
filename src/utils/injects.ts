import type { InjectionKey } from 'vue';
import { inject } from 'vue';

/**
 * Dependency injection 🥳
 * @param {InjectionKey} key - The key to inject
 * @param {string | undefined} fallback - The fallback value
 * @returns {undefined} - The value
 */
export function injectStrict<T>(key: InjectionKey<T>, fallback?: T): T {
  const resolved = inject(key, fallback);
  if (!resolved) {
    throw new Error(`Could not resolve ${key.description}`);
  }
  return resolved;
}
