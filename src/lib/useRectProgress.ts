import { useMotionValue, type MotionValue } from "framer-motion";
import { useEffect, type RefObject } from "react";

/**
 * Scroll progress for an element, measured with getBoundingClientRect (on-screen pixels).
 *
 * framer-motion's useScroll mixes layout offsets with scroll position, which drifts apart when the
 * page is scaled with CSS `zoom` (our 1024–1439px laptop mode). Measuring the element's rect each
 * frame stays correct at any zoom level.
 *
 * `compute(rect, viewportHeight)` returns the raw progress; it is clamped to 0–1.
 */
export function useRectProgress(
  ref: RefObject<HTMLElement | null>,
  compute: (rect: DOMRect, vh: number) => number,
): MotionValue<number> {
  const progress = useMotionValue(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const p = compute(el.getBoundingClientRect(), window.innerHeight);
      progress.set(Math.min(1, Math.max(0, Number.isFinite(p) ? p : 0)));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
    // compute is expected to be a stable, pure mapping
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, progress]);

  return progress;
}

/** Pinned section: 0 when its top reaches the viewport top, 1 when its bottom reaches the viewport bottom. */
export const pinProgress = (r: DOMRect, vh: number) => -r.top / (r.height - vh);

/** 0 when the element's top enters from the bottom, 1 when its center reaches the viewport center. */
export const enterToCenter = (r: DOMRect, vh: number) => (vh - r.top) / (vh / 2 + r.height / 2);

/** 0 when the element's top enters from the bottom, 1 when its top reaches 25% from the top. */
export const enterToUpperQuarter = (r: DOMRect, vh: number) => (vh - r.top) / (vh * 0.75);
