import { cn, img } from "@/lib/utils";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  /** Photo in /public/images; when missing a monogram avatar is shown. */
  avatar?: string;
  initials?: string;
  /** Where the review was left (kept for our records, not shown on the site). */
  source?: string;
};

type Props = Testimonial & {
  /** Dark card instead of the default white card. */
  dark?: boolean;
  className?: string;
};

// A few on-brand gradients so the monograms don't all look identical.
const avatarTones = [
  "from-[#f5852d] to-[#de4911]",
  "from-[#3a3a36] to-[#141413]",
  "from-[#4f6bed] to-[#2338a8]",
  "from-[#14a38b] to-[#0c6b5c]",
  "from-[#9b5cf6] to-[#5b21b6]",
];

function tone(name: string) {
  let h = 0;
  for (const ch of name) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return avatarTones[h % avatarTones.length];
}

function VerifiedTick() {
  return (
    <svg viewBox="0 0 24 24" aria-label="Verified" role="img" className="size-[18px] shrink-0">
      <path
        fill="#1d9bf0"
        d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81C14.67 2.63 13.43 1.75 12 1.75s-2.67.88-3.34 2.19c-1.39-.46-2.9-.2-3.91.81s-1.27 2.52-.81 3.91C2.63 9.33 1.75 10.57 1.75 12s.88 2.67 2.19 3.34c-.46 1.39-.2 2.9.81 3.91s2.52 1.27 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.34-2.19c1.39.46 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34z"
      />
      <path fill="#fff" d="m10.54 16.2-3.7-3.7 1.41-1.42 2.29 2.3 5.2-5.2 1.42 1.41z" />
    </svg>
  );
}

function Stars() {
  return (
    <span className="flex gap-0.5 text-[#f5a524]" role="img" aria-label="Rated 5 out of 5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="size-4" aria-hidden>
          <path fill="currentColor" d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.8z" />
        </svg>
      ))}
    </span>
  );
}

export function TestimonialCard({ quote, name, role, avatar, initials, source, dark = false, className }: Props) {
  return (
    <figure
      className={cn(
        "flex shrink-0 items-start pb-[40px] pl-[34px] pr-[38px] pt-[40px] max-lg:p-6",
        dark ? "bg-ink" : "bg-white",
        className,
      )}
    >
      <div className="flex min-w-px flex-1 flex-col gap-[28px] self-stretch max-lg:gap-5">
        <div className="flex items-center justify-between">
          <img src={img("a417f.svg")} alt="" className="h-[34px] w-[40px]" />
          <Stars />
        </div>
        <div className="flex flex-1 flex-col justify-between gap-[48px] max-lg:gap-7">
          <blockquote
            className={cn(
              "text-[21px] leading-[1.32] tracking-[-0.42px] max-lg:text-[17px]",
              dark ? "text-white" : "text-ink/75",
            )}
          >
            {quote}
          </blockquote>
          <figcaption className="flex items-center gap-[14px]">
            {avatar ? (
              <img src={img(avatar)} alt="" width={48} height={48} className="size-12 shrink-0 rounded-full object-cover" />
            ) : (
              <span
                aria-hidden
                className={cn(
                  "flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-[16px] font-semibold tracking-[0.5px] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]",
                  tone(name),
                )}
              >
                {initials}
              </span>
            )}
            <div className="flex min-w-px flex-col leading-[1.35]">
              <p
                className={cn(
                  "flex items-center gap-1.5 text-[18px] font-medium tracking-[-0.36px]",
                  dark ? "text-white" : "text-ink",
                )}
              >
                <span className="truncate">{name}</span>
                <VerifiedTick />
              </p>
              <p className={cn("text-[14px]", dark ? "text-white/[0.7]" : "text-ink/[0.6]")}>{role}</p>
              {source && (
                <p className={cn("mt-0.5 text-[12px] font-medium tracking-[0.2px]", dark ? "text-white/[0.5]" : "text-[#14a800]")}>
                  Verified client
                </p>
              )}
            </div>
          </figcaption>
        </div>
      </div>
    </figure>
  );
}
