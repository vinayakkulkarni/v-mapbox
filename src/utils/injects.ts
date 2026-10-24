import type { InjectionKey } from 'vue';
import { inject } from 'vue';

/**
 * Dependency injection 🥳
 * @param key - The key to inject
 * @param fallback - The fallback value
 * @returns - The value
 */
export function injectStrict<T>(key: InjectionKey<T>, fallback?: T): T {
  const resolved = inject(key, fallback);
  if (!resolved) {
    throw new Error(`Could not resolve ${key.description}`);
  }
  return resolved;
}
