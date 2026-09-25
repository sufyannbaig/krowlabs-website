import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export type ResultCardProps = {
  image: ReactNode;
  label: string;
  title: string;
  stat: string;
  statLabel: string;
  titleClassName?: string;
  /** Case-study page the card links to. */
  href?: string;
};

/** White case-study card used in the "Recent work" sections of the service pages. */
export function ResultCard({ image, label, title, stat, statLabel, titleClassName, href }: ResultCardProps) {
  const content = (
    <div className="flex flex-col justify-center gap-[35px]">
      <div className="overflow-hidden">{image}</div>
      <div className="flex flex-col gap-[18px] font-medium">
        <div className="flex flex-col gap-[14px] leading-[1.3]">
          <p className="text-[18px] uppercase tracking-[-0.36px] text-ink/60">{label}</p>
          <p className={cn("text-[23px] tracking-[-0.46px] text-ink", titleClassName)}>{title}</p>
        </div>
        <p className="leading-[1.3] tracking-[-0.4px] text-ink">
          <span className="text-[36px] text-brand">{stat}</span>
          <span className="text-[20px]"> </span>
          <span className="text-[16px]">{statLabel}</span>
        </p>
      </div>
    </div>
  );
  const classes =
    "group flex min-w-px flex-1 flex-col bg-white p-[42px] drop-shadow-[0px_0px_4.65px_rgba(0,0,0,0.03)]";
  return href ? (
    <Link to={href} className={classes}>
      {content}
    </Link>
  ) : (
    <article className={classes}>{content}</article>
  );
}

/** 244px tall image slot. */
export function ResultImage({
  src,
  className,
  imgClassName,
}: {
  src: string;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <div className={cn("relative h-[244px] w-full shrink-0 overflow-hidden", className)}>
      <img src={src} alt="" className={cn("absolute inset-0 size-full max-w-none object-cover", imgClassName)} />
    </div>
  );
}
