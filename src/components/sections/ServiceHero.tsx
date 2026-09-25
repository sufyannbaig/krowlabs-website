import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Button, type ButtonVariant } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { HeroGrid, HeroImage, LogoStrip } from "./HeroBackdrop";

type Props = {
  heading: ReactNode;
  intro: string;
  buttonVariant: ButtonVariant;
  image: ReactNode;
  /** Grid backdrop file + optional positioning override. */
  grid?: string;
  gridClassName?: string;
  /** Left offset / width of the copy column (varies by a few px per page in the design). */
  left?: number;
  width?: number;
  headingWidth?: number;
  gap?: number;
  innerGap?: number;
  introClassName?: string;
  showLogos?: boolean;
  children?: ReactNode;
};

/** 797px tall hero shared by the service pages (grid, nav, copy, image, optional logos). */
export function ServiceHero({
  heading,
  intro,
  buttonVariant,
  image,
  grid = "06d81.svg",
  gridClassName,
  left = 60,
  width = 655,
  headingWidth,
  gap = 16,
  innerGap = 14,
  introClassName,
  showLogos = false,
  children,
}: Props) {
  return (
    <section className="relative h-[797px]">
      <HeroGrid src={grid} className={gridClassName} />
      {children}
      <Navbar />
      <div className="relative mx-auto h-full max-w-[1440px]">
        <div className="absolute top-[254px] flex flex-col items-start" style={{ left, width, gap }}>
          <div className="flex flex-col" style={{ gap: innerGap, width: headingWidth }}>
            {heading}
            <p className={cn("w-[676px] text-[18px] leading-[1.4] text-ink/60", introClassName)}>{intro}</p>
          </div>
          <Button variant={buttonVariant} raised>
            Book a Free Strategy Call
          </Button>
        </div>
        {image}
      </div>
      {showLogos && <LogoStrip className="top-[715px]" />}
    </section>
  );
}

export { HeroImage };
