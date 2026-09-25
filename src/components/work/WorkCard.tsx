import { Link } from "react-router-dom";
import { mediaFor, statFor, type CaseStudy } from "@/content/caseStudies";
import { cn } from "@/lib/utils";
import { Media } from "./Media";

/**
 * Case-study card in the style of the home "Recent work" list:
 * large image, title + summary on the left, orange stat on the right.
 */
export function WorkCard({
  study,
  theme = "light",
  imageClassName = "h-[454px]",
  className,
}: {
  study: CaseStudy;
  theme?: "light" | "dark";
  imageClassName?: string;
  className?: string;
}) {
  const stat = statFor(study);
  const dark = theme === "dark";
  return (
    <Link to={`/work/${study.slug}`} className={cn("group flex flex-col gap-[30px]", className)}>
      <div className="relative w-full overflow-hidden">
        <Media
          item={mediaFor(study.slug).cover}
          alt={study.title}
          className={cn("w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]", imageClassName)}
        />
      </div>
      <div className="flex items-start justify-between gap-6 font-medium max-lg:flex-col max-lg:gap-3">
        <div className="flex w-[300px] shrink-0 flex-col gap-[11px] leading-[1.4] max-lg:w-auto">
          <h3 className={cn("text-[26px] max-lg:text-[22px]", dark ? "text-white" : "text-ink")}>{study.client}</h3>
          <p className={cn("text-[16px] font-normal", dark ? "text-white/60" : "text-ink/60")}>{study.summary}</p>
        </div>
        <p
          className={cn(
            "flex flex-col items-end gap-1 text-right leading-[1.4] tracking-[-0.8px] max-lg:items-start max-lg:text-left",
            dark ? "text-white/60" : "text-ink/60",
          )}
        >
          <span className="text-[36px] leading-[1.1] text-brand-stat max-lg:text-[26px]">{stat.value}</span>
          <span className="max-w-[220px] text-[16px] tracking-normal">{stat.label}</span>
        </p>
      </div>
    </Link>
  );
}
