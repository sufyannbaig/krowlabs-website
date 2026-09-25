import { useEffect, type ReactNode } from "react";
import { DESKTOP } from "@/lib/useIsDesktop";

/**
 * The design is a 1440px desktop frame. On laptop widths (1024–1439px) we scale that frame
 * down proportionally with CSS `zoom` so it stays pixel-faithful instead of reflowing.
 * Below 1024px the dedicated mobile layout (max-lg: classes) takes over. See `.kl-scale` in index.css.
 *
 * Also exposes `--kl-vh`: the viewport height in the page's own (zoomed) pixels, used by the
 * pinned "scroll-stopper" sections so they always fill exactly one screen.
 */
export function DesktopScale({ children }: { children: ReactNode }) {
  useEffect(() => {
    const update = () => {
      const w = document.documentElement.clientWidth;
      // Must mirror the CSS media query (which measures the viewport including the scrollbar).
      const zoomed = window.matchMedia(DESKTOP).matches && window.innerWidth < 1440;
      const zoom = zoomed ? w / 1440 : 1;
      const root = document.documentElement.style;
      root.setProperty("--kl-zoom", String(zoom));
      root.setProperty("--kl-vh", `${window.innerHeight / zoom}px`);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return <div className="kl-scale">{children}</div>;
}
