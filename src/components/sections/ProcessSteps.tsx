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
  /** Opacity applied to steps 2-4 (the design shows only step 1 as "active"). */
  inactiveOpacity?: 30 | 60;
  /** Step 1 description uses the muted text color on light pages. */
  mutedActiveDescription?: boolean;
  className?: string;
};

export function ProcessSteps({
  steps,
  theme = "light",
  inactiveOpacity = 30,
  mutedActiveDescription = theme === "light",
  className,
}: Props) {
  const text = theme === "dark" ? "text-white" : "text-ink";
  const line = theme === "dark" ? "bg-white" : "bg-ink";

  return (
    <ol className={cn("flex w-full items-start gap-10", className)}>
      {steps.map((step, i) => (
        <li
          key={step.title}
          className={cn(
            "flex shrink-0 items-center gap-10",
            i > 0 && (inactiveOpacity === 30 ? "opacity-30" : "opacity-60"),
          )}
        >
          <div className={cn("flex w-[260px] flex-col", text)} style={{ gap: step.gap }}>
            <p className="text-[26px] leading-[1.24] tracking-[-1.04px]">{String(i + 1).padStart(2, "0")}</p>
            <div className="flex flex-col gap-[26px]">
              <h3 className="text-[50px] font-medium leading-[1.24] tracking-[-2px]">{step.title}</h3>
              <p
                className={cn(
                  "text-[18px] leading-[1.4]",
                  i === 0 && mutedActiveDescription && "text-ink/60",
                )}
              >
                {step.description}
              </p>
            </div>
          </div>
          {/* zero-width slot like Figma's 0px vector, 1px line centered on it */}
          <div aria-hidden className="relative w-0 self-stretch">
            <div className={cn("absolute inset-y-0 -left-[0.5px] w-px", line)} />
          </div>
        </li>
      ))}
    </ol>
  );
}
