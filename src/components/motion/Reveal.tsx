import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Vertical offset to rise from, in px. */
  y?: number;
  /** Animate on mount (hero) instead of when scrolled into view. */
  immediate?: boolean;
  as?: "div" | "li" | "section" | "span";
};

/** Fade + rise into place once, when scrolled into view (or on mount for hero content). */
export function Reveal({ children, className, delay = 0, y = 24, immediate = false, as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  if (reduce) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }
  const target = { opacity: 1, y: 0 };
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      {...(immediate ? { animate: target } : { whileInView: target, viewport: { once: true, amount: 0.2 } })}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </Tag>
  );
}

export { EASE };
