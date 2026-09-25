import { motionValue, type MotionValue } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useIsDesktop } from "@/lib/useIsDesktop";
import { pinProgress, useRectProgress } from "@/lib/useRectProgress";

const DONE = motionValue(1);

type Props = {
  /** How many screen-heights of scrolling the section holds the screen for (≥ 1). */
  screens: number;
  className?: string;
  innerClassName?: string;
  children: (progress: MotionValue<number>) => ReactNode;
  id?: string;
};

/**
 * "Scroll stopper": pins its content to the viewport while the user scrolls through
 * `screens` × viewport heights, exposing 0→1 progress to drive the animation.
 * On mobile (or reduced motion) it renders the content once, in its finished state.
 */
export function ScrollPin({ screens, className, innerClassName, children, id }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const desktop = useIsDesktop();
  const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pinned = desktop && !reduce;
  const scrollYProgress = useRectProgress(ref, pinProgress);

  if (!pinned) {
    return (
      <section id={id} className={className}>
        <div className={innerClassName}>{children(DONE)}</div>
      </section>
    );
  }

  return (
    <section
      id={id}
      ref={ref}
      className={cn("relative", className)}
      style={{ height: `calc(var(--kl-vh, 100vh) * ${screens})` }}
    >
      <div className={cn("sticky top-0 flex h-[var(--kl-vh,100vh)] flex-col justify-center overflow-hidden", innerClassName)}>
        {children(scrollYProgress)}
      </div>
    </section>
  );
}
