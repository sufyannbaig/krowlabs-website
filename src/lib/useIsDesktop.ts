import { useSyncExternalStore } from "react";

export const DESKTOP = "(min-width: 1024px)";

const subscribe = (onChange: () => void) => {
  const mq = window.matchMedia(DESKTOP);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
};

/**
 * True on the desktop layout (≥1024px), where scroll-pinned and cursor effects run.
 * Prerendered HTML is built as desktop (the server snapshot), so hydration matches and then
 * React switches to the real value straight after.
 */
export function useIsDesktop() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(DESKTOP).matches,
    () => true,
  );
}
