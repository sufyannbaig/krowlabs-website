import type { ResultCardProps } from "@/components/sections/ResultCard";
import { Media } from "@/components/work/Media";
import { getCaseStudy, mediaFor, statFor } from "./caseStudies";

/** Build result cards from case-study slugs (content lives in src/content/caseStudies.ts). */
export function resultCards(slugs: string[]): ResultCardProps[] {
  return slugs.flatMap((slug) => {
    const c = getCaseStudy(slug);
    if (!c) return [];
    const stat = statFor(c);
    return [
      {
        href: `/work/${c.slug}`,
        label: `${c.client} · ${c.industry}`,
        title: c.summary,
        stat: stat.value,
        statLabel: stat.label,
        image: (
          <Media
            item={mediaFor(c.slug).cover}
            alt={c.title}
            className="h-[244px] w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        ),
      },
    ];
  });
}
