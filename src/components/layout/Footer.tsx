import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const columns = [
  { title: "Site", width: "w-[118px]", links: [["Services", "/#services"], ["Work", "/#work"], ["About", "/#about"]] },
  {
    title: "Contact",
    links: [
      ["sales@krowlabs.com", "mailto:sales@krowlabs.com"],
      ["Portfolio", "https://www.behance.net/sufyannbaig"],
    ],
  },
  {
    title: "Connect",
    width: "w-[118px]",
    links: [["LinkedIn", "#"], ["Instagram", "#"], ["X (Twitter)", "#"], ["Behance", "https://www.behance.net/sufyannbaig"], ["Dribbble", "#"]],
  },
];

/**
 * Footer block: 6px brand line, white panel and the oversized "Krow Labs" wordmark,
 * which is cropped by the bottom edge of the page like in the design.
 */
export function Footer({ className }: { className?: string }) {
  return (
    <footer id="contact" className={cn("relative h-[753px] overflow-hidden", className)}>
      <div className="h-[6px] w-full bg-brand-line" />
      <div className="absolute inset-x-0 top-[7px] h-[747px] bg-white" />

      <div className="relative mx-auto h-full max-w-[1440px]">
        <div className="absolute left-[60px] top-[93px] flex w-[1298px] flex-col gap-10">
          <div className="flex items-center justify-between">
            <a
              href="mailto:sales@krowlabs.com"
              className="bg-gradient-to-r from-black to-brand to-[78.846%] bg-clip-text text-[48px] leading-[1.3] tracking-[-0.48px] text-transparent"
            >
              sales@krowlabs.com
            </a>
            <Button variant="brand" size="md">
              Book a Free Strategy Call
            </Button>
          </div>
          <div className="relative h-0 w-[1243.5px]">
            <div className="absolute inset-x-0 -top-[0.5px] h-px bg-black/[0.19]" />
          </div>
        </div>

        <p className="absolute left-[62px] top-[242px] w-[445px] text-[22px] capitalize leading-[1.28] tracking-[0.22px] text-black/60">
          © 2026 Krow Labs. All rights reserved.
        </p>
        <p className="absolute left-[62px] top-[312px] w-[358px] text-[20px] font-medium leading-[1.3] tracking-[-0.4px] text-black/60">
          We design, develop, and deliver digital experiences that help businesses innovate, grow, and lead with confidence.
        </p>

        <div className="absolute left-[863px] top-[242px] flex w-[517px] items-start gap-[50px]">
          {columns.map((col) => (
            <div key={col.title} className={cn("flex flex-col gap-[25px] leading-[1.3]", col.width)}>
              <p className="whitespace-nowrap text-[24px] capitalize tracking-[0.24px] text-black">{col.title}</p>
              <ul className="flex flex-col gap-3 text-[16px] tracking-[-0.16px] text-black/60">
                {col.links.map(([label, href]) => (
                  <li key={label} className="whitespace-nowrap">
                    <a href={href} className={cn(label === "Portfolio" && "underline")}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p
          aria-hidden
          className="absolute left-[calc(50%-737px)] top-[475px] whitespace-nowrap text-[337.121px] font-medium leading-[1.11] tracking-[-13.4848px] text-ink"
        >
          Krow <span className="font-serif font-normal italic leading-none">Labs</span>
        </p>
      </div>
    </footer>
  );
}
