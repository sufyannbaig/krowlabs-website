import { motion, useMotionValue, useTransform, type MotionValue } from "framer-motion";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

export type Step = {
  title: string;
  description: string;
  /** Vertical gap between the step number and the title block (from the design). */
  gap: number;
};

type Props = {
  steps: Step[];
  theme?: "light" | "dark";
  /** Opacity of a step before it lights up (design: 30% on light pages, 60% on dark). */
  inactiveOpacity?: 30 | 60;
  /** Step 1 description uses the muted text color on light pages. */
  mutedActiveDescription?: boolean;
  /**
   * 0→1 scroll progress from a ScrollPin: steps light up one by one.
   * Without it the static design state is shown (step 1 lit, the rest dimmed).
   */
  progress?: MotionValue<number>;
  className?: string;
};

function StepItem({
  step,
  index,
  count,
  theme,
  dim,
  mutedDescription,
  progress,
  animated,
}: {
  step: Step;
  index: number;
  count: number;
  theme: "light" | "dark";
  dim: number;
  mutedDescription: boolean;
  progress: MotionValue<number>;
  animated: boolean;
}) {
  // Each step owns an equal slice of the scroll; it fades from dim to full inside its slice.
  const start = index / (count + 0.5);
  const end = (index + 0.8) / (count + 0.5);
  // Function transforms (not range arrays): framer would otherwise hand scroll-linked opacity to the
  // browser's native ScrollTimeline, which mis-maps the range inside the pinned section.
  const t = (v: number) => Math.min(1, Math.max(0, (v - start) / (end - start)));
  const opacity = useTransform(progress, (v) => dim + (1 - dim) * t(v));
  const lineScale = useTransform(progress, t);
  const text = theme === "dark" ? "text-white" : "text-ink";
  const line = theme === "dark" ? "bg-white" : "bg-ink";

  return (
    <motion.li
      className={cn(
        "flex shrink-0 items-center gap-10 max-lg:w-full max-lg:border-t max-lg:py-6",
        theme === "dark" ? "max-lg:border-white/20" : "max-lg:border-ink/15",
      )}
      style={{ opacity }}
    >
      <div
        className={cn(
          "flex w-[260px] flex-col gap-[var(--step-gap)] max-lg:w-full max-lg:gap-4",
          text,
        )}
        style={{ "--step-gap": `${step.gap}px` } as CSSProperties}
      >
        <p className="text-[26px] leading-[1.24] tracking-[-1.04px] max-lg:text-[18px]">{String(index + 1).padStart(2, "0")}</p>
        <div className="flex flex-col gap-[26px] max-lg:gap-3">
          <h3 className="text-[50px] font-medium leading-[1.24] tracking-[-2px] max-lg:text-[32px] max-lg:tracking-[-1.2px]">
            {step.title}
          </h3>
          <p className={cn("text-[18px] leading-[1.4] max-lg:text-[16px]", index === 0 && mutedDescription && "text-ink/60")}>
            {step.description}
          </p>
        </div>
      </div>
      {/* zero-width slot like Figma's 0px vector, 1px line centered on it; it draws in as the step lights up */}
      <div aria-hidden className="relative w-0 self-stretch max-lg:hidden">
        <motion.div
          className={cn("absolute inset-y-0 -left-[0.5px] w-px origin-top", line)}
          style={animated ? { scaleY: lineScale } : undefined}
        />
      </div>
    </motion.li>
  );
}

export function ProcessSteps({
  steps,
  theme = "light",
  inactiveOpacity = 30,
  mutedActiveDescription = theme === "light",
  progress,
  className,
}: Props) {
  // Without scroll progress, freeze at the design state: step 1 lit, the rest dimmed.
  const designState = useMotionValue(0.8 / (steps.length + 0.5));
  return (
    <ol className={cn("flex w-full items-start gap-10 max-lg:flex-col max-lg:gap-0", className)}>
      {steps.map((step, i) => (
        <StepItem
          key={step.title}
          step={step}
          index={i}
          count={steps.length}
          theme={theme}
          dim={inactiveOpacity / 100}
          mutedDescription={mutedActiveDescription}
          progress={progress ?? designState}
          animated={Boolean(progress)}
        />
      ))}
    </ol>
  );
}
