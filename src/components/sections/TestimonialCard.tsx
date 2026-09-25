import { cn, img } from "@/lib/utils";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  /** Photo in /public/images; when missing, `initials` are shown in a brand-colored circle. */
  avatar?: string;
  initials?: string;
};

type Props = Testimonial & {
  /** Dark card (UI/UX page) instead of the default white card. */
  dark?: boolean;
  className?: string;
};

export function TestimonialCard({ quote, name, role, avatar, initials, dark = false, className }: Props) {
  return (
    <figure
      className={cn(
        "flex shrink-0 items-start pb-[44px] pl-[34px] pr-[41px] pt-[45px]",
        dark ? "bg-ink" : "bg-white",
        className,
      )}
    >
      <div className="flex min-w-px flex-1 flex-col gap-[34px]">
        <img src={img("a417f.svg")} alt="" className="h-[39.143px] w-[46px]" />
        <div className="flex flex-col gap-[77px]">
          <blockquote
            className={cn("text-[24px] leading-[1.23] tracking-[-0.48px]", dark ? "text-white" : "text-ink/70")}
          >
            {quote}
          </blockquote>
          <figcaption className="flex items-start gap-[14px]">
            {avatar ? (
              <img src={img(avatar)} alt="" width={46} height={46} className="size-[46px] shrink-0 rounded-full" />
            ) : (
              <span
                aria-hidden
                className="flex size-[46px] shrink-0 items-center justify-center rounded-full bg-brand text-[16px] font-medium text-white"
              >
                {initials}
              </span>
            )}
            <div className="flex flex-col justify-center leading-[1.4]">
              <p className={cn("text-[18px] tracking-[-0.36px]", dark ? "text-white" : "text-ink")}>{name}</p>
              <p className={cn("text-[14px]", dark ? "text-white/[0.74]" : "text-ink/[0.74]")}>{role}</p>
            </div>
          </figcaption>
        </div>
      </div>
    </figure>
  );
}
