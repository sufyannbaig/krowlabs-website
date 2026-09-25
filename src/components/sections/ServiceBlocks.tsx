import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollPin } from "@/components/motion/ScrollPin";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { ProcessSteps, type Step } from "./ProcessSteps";
import { ResultCard, type ResultCardProps } from "./ResultCard";
import type { Testimonial } from "./TestimonialCard";
import { TestimonialTicker } from "./TestimonialTicker";

/** Typography presets that repeat across the service pages (desktop size, then mobile). */
export const headingXL =
  "text-[60px] font-medium leading-[1.24] tracking-[-2.4px] max-lg:text-[36px] max-lg:leading-[1.15] max-lg:tracking-[-1.2px]";
export const headingLG =
  "text-[52px] leading-[1.24] tracking-[-2.6px] max-lg:text-[34px] max-lg:leading-[1.15] max-lg:tracking-[-1.2px]";

/** "What Is Included" row: heading + evenly spread columns of copy that stagger in. */
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
    <section className={cn("px-[60px] py-20 max-lg:px-5 max-lg:py-16", className)}>
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-10">
        <Reveal>
          <h2 className={cn(headingLG, "w-full")}>{heading}</h2>
        </Reveal>
        <div
          className={cn(
            "flex items-start justify-between text-[22px] leading-[1.4] max-lg:grid max-lg:grid-cols-2 max-lg:gap-6 max-lg:text-[17px] max-sm:grid-cols-1",
            itemClassName,
          )}
        >
          {items.map((item, i) => (
            <Reveal key={item} delay={i * 0.08} className="w-[224px] max-lg:w-auto">
              <p>{item}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Heading + row of result cards (stacked on mobile). */
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
    <div className={cn("flex flex-col items-center gap-10 max-lg:w-full", className)}>
      <Reveal className="w-full">
        <h2 className={cn(headingLG, "w-full text-center")}>{heading}</h2>
      </Reveal>
      <div className={cn("flex w-full items-center gap-[47px] px-[74px] max-lg:flex-col max-lg:gap-6 max-lg:px-0", rowClassName)}>
        {cards.map((card, i) => (
          <Reveal key={card.label} delay={i * 0.12} y={40} className="flex min-w-px flex-1 self-stretch max-lg:w-full">
            <ResultCard {...card} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/** Heading + slow testimonial ticker spanning the full width. */
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
    <section className={cn("flex flex-col items-center gap-[50px] overflow-x-clip py-20 max-lg:gap-6 max-lg:py-16", className)}>
      <Container>
        <Reveal>
          <h2 className={cn(headingXL, "w-full text-center")}>{heading}</h2>
        </Reveal>
      </Container>
      <TestimonialTicker items={items} dark={dark} />
    </section>
  );
}

/**
 * "How this engagement runs": pinned while its 4 steps light up one by one, then scrolling continues.
 * `bg` is the section background, which fills the pinned screen.
 */
export function EngagementBlock({
  heading,
  steps,
  theme,
  button,
  bg,
  className,
  stepsClassName,
  inactiveOpacity,
}: {
  heading: ReactNode;
  steps: Step[];
  theme: "light" | "dark";
  button?: "outline-white" | "outline-muted";
  bg: string;
  className?: string;
  stepsClassName?: string;
  inactiveOpacity?: 30 | 60;
}) {
  return (
    <ScrollPin screens={2.4} className={cn(bg, className)} innerClassName="max-lg:py-16">
      {(progress) => (
        <Container className="flex flex-col gap-[82px] max-lg:gap-8">
          <Reveal className="flex w-[316px] flex-col gap-[26px] max-lg:w-auto max-lg:gap-5">
            <h2
              className={cn(
                "whitespace-nowrap text-[52px] font-medium leading-[1.24] tracking-[-2.08px] max-lg:whitespace-normal max-lg:text-[34px] max-lg:tracking-[-1.2px]",
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
          </Reveal>
          <ProcessSteps
            steps={steps}
            theme={theme}
            inactiveOpacity={inactiveOpacity ?? (theme === "dark" ? 60 : 30)}
            className={stepsClassName}
            progress={progress}
          />
        </Container>
      )}
    </ScrollPin>
  );
}
