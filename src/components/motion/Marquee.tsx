import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  /** Seconds for one full loop. Higher = slower. */
  duration?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
  trackClassName?: string;
};

/**
 * Seamless infinite ticker: renders the content twice and slides the track by half its width.
 * Give each copy trailing spacing equal to the item gap so the loop seam is invisible.
 */
export function Marquee({ children, duration = 40, direction = "left", pauseOnHover, className, trackClassName }: Props) {
  return (
    <div className={cn("overflow-hidden", pauseOnHover && "marquee-pause", className)}>
      <div
        className={cn("marquee-track", trackClassName)}
        data-direction={direction}
        style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
