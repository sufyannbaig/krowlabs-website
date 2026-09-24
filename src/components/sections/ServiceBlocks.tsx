import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { ProcessSteps, type Step } from "./ProcessSteps";
import { ResultCard, type ResultCardProps } from "./ResultCard";
import { TestimonialCard, type Testimonial } from "./TestimonialCard";

/** Typography presets that repeat across the service pages. */
export const headingXL = "text-[60px] font-medium leading-[1.24] tracking-[-2.4px]";
export const headingLG = "text-[52px] leading-[1.24] tracking-[-2.6px]";

/** "What Is Included" row: heading + evenly spread columns of copy. */
export function IncludedColumns({
  items,
  heading,
  className,
  itemClassName = "text-white/70",
}: {
  items: string[];
  heading: ReactNode;
  className?: string;
  itemClassName?: string;
}) {
  return (
    <section className={cn("px-[60px] py-20", className)}>
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-10">
        <h2 className={cn(headingLG, "w-full")}>{heading}</h2>
        <div className={cn("flex items-start justify-between text-[22px] leading-[1.4]", itemClassName)}>
          {items.map((item) => (
            <p key={item} className="w-[224px]">
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Heading + row of result cards. */
export function ResultsBlock({
  heading,
  cards,
  className,
  rowClassName,
}: {
  heading: ReactNode;
  cards: ResultCardProps[];
  className?: string;
  rowClassName?: string;
}) {
  return (
    <div className={cn("flex flex-col items-center gap-10", className)}>
      <h2 className={cn(headingLG, "w-full text-center")}>{heading}</h2>
      <div className={cn("flex w-full items-center gap-[47px] px-[74px]", rowClassName)}>
        {cards.map((card) => (
          <ResultCard key={card.label} {...card} />
        ))}
      </div>
    </div>
  );
}

/** Two-up testimonials, 1174px wide. */
export function TestimonialsBlock({
  heading,
  items,
  dark = false,
  className,
}: {
  heading: ReactNode;
  items: Testimonial[];
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto flex w-[1174px] flex-col items-center gap-[50px]", className)}>
      <h2 className={cn(headingXL, "w-full text-center")}>{heading}</h2>
      <div className="flex w-full items-center gap-10">
        {items.map((t, i) => (
          <TestimonialCard key={i} {...t} dark={dark} className="min-w-px flex-1 shrink" />
        ))}
      </div>
    </div>
  );
}

/** "How this engagement runs" block, dark (715px) or light variant. */
export function EngagementBlock({
  heading,
  steps,
  theme,
  button,
  className,
  stepsClassName,
  inactiveOpacity,
}: {
  heading: ReactNode;
  steps: Step[];
  theme: "light" | "dark";
  button?: "outline-white" | "outline-muted";
  className?: string;
  stepsClassName?: string;
  inactiveOpacity?: 30 | 60;
}) {
  return (
    <section className={className}>
      <Container className="flex flex-col gap-[82px]">
        <div className="flex w-[316px] flex-col gap-[26px]">
          <h2
            className={cn(
              "whitespace-nowrap text-[52px] font-medium leading-[1.24] tracking-[-2.08px]",
              theme === "dark" ? "text-white" : "text-ink",
            )}
          >
            {heading}
          </h2>
          {button && (
            <div className="flex">
              <Button variant={button} size="md">
                Book a Discovery Call
              </Button>
            </div>
          )}
        </div>
        <ProcessSteps
          steps={steps}
          theme={theme}
          inactiveOpacity={inactiveOpacity ?? (theme === "dark" ? 60 : 30)}
          className={stepsClassName}
        />
      </Container>
    </section>
  );
}
