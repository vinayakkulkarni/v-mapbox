import type { InjectionKey } from 'vue-demi';
/**
 * Dependency injection 🥳
 *
 * @param {InjectionKey} key - The key to inject
 * @param {string | undefined} fallback - The fallback value
 * @returns {undefined} - The value
 */
export declare function injectStrict<T>(key: InjectionKey<T>, fallback?: T): T;
