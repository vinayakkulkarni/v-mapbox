/**
 * Analytics for the v-mapbox demo site.
 *
 * Three trackers load from `<head>` (see `../config.ts`): Plausible,
 * OpenPanel and GA4. GA4 stays off while `GA4_MEASUREMENT_ID` is empty.
 */

export const PLAUSIBLE_SCRIPT_ID = 'pa-m5vabwBc94QLDFIMWJr1l';
export const OPENPANEL_CLIENT_ID = '723c5458-f045-44ee-a792-267353e29c72';
export const OPENPANEL_API_URL = 'https://events.geoql.in/api';
/** GA4 measurement ID. Empty until the property exists; GA4 is skipped. */
export const GA4_MEASUREMENT_ID = 'G-1KGMBQJ5YB';

type Props = Record<string, string | number | boolean>;

interface TrackerWindow extends Window {
  plausible?: (event: string, options?: { props?: Props }) => void;
  op?: (method: string, ...args: unknown[]) => void;
  gtag?: (command: string, ...args: unknown[]) => void;
}

/**
 * Sends one event to every tracker that is loaded.
 * @param event - The event name
 * @param props - Extra event properties
 */
export function track(event: string, props: Props = {}): void {
  if (typeof window === 'undefined') return;
  const { plausible, op, gtag } = window as TrackerWindow;
  // Call the trackers directly: the OpenPanel stub is a Proxy whose `get`
  // trap turns `op.call(...)` (what `op?.()` compiles to) into a `call`
  // method event instead of a `track` event.
  if (plausible) plausible(event, { props });
  if (op) op('track', event, props);
  if (GA4_MEASUREMENT_ID && gtag) gtag('event', event, props);
}

/**
 * Tracks install-command copies and GitHub / npm outbound clicks.
 */
export function installGlobalTracking(): void {
  document.addEventListener(
    'click',
    (event) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const copy = target.closest('button.copy');
      if (copy) {
        const block = copy.closest('div[class*="language-"]');
        const code = block?.querySelector('code')?.textContent ?? '';
        if (/\b(?:npm|pnpm|yarn)\s.*v-mapbox/.test(code)) {
          track('install_copy', { command: code.trim().slice(0, 80) });
        }
        return;
      }

      const link = target.closest('a');
      const href = link?.getAttribute('href') ?? '';
      if (/^https:\/\/(?:www\.)?github\.com\//.test(href)) {
        track('outbound_github', { href });
      } else if (/^https:\/\/(?:www\.)?npmjs\.com\//.test(href)) {
        track('outbound_npm', { href });
      }
    },
    { capture: true },
  );
}
