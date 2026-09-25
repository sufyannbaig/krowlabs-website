import { useEffect, useState } from "react";

export const DESKTOP = "(min-width: 1024px)";

/** True on the desktop layout (≥1024px), where scroll-pinned and cursor effects run. */
export function useIsDesktop() {
  const [desktop, setDesktop] = useState(() =>
    typeof window === "undefined" ? true : window.matchMedia(DESKTOP).matches,
  );
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP);
    const on = () => setDesktop(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return desktop;
}
