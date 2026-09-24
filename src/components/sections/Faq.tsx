import type { ReactNode } from "react";
import { cn, img } from "@/lib/utils";

export type FaqItem = {
  question: string;
  answer?: string;
  /** How the +/- icon aligns with the question text (differs per item in the design). */
  align?: "start" | "center" | "end";
  /** Fixed question width, forces the same line breaks as the design. */
  questionWidth?: number;
};

/** Static FAQ list: the first item is shown expanded, the rest collapsed. */
export function FaqList({ items, className }: { items: FaqItem[]; className?: string }) {
  return (
    <div className={cn("flex w-[680px] shrink-0 flex-col gap-[26px]", className)}>
      {items.map((item, i) =>
        i === 0 ? (
          <div key={item.question} className="border border-ink bg-white px-[26px] pb-[30px] pt-[31px]">
            <div className="flex items-start justify-between">
              <div className="flex min-w-px flex-1 flex-col gap-4">
                <p className="text-[22px] font-medium leading-[1.3] tracking-[-0.44px] text-ink">{item.question}</p>
                <p className="text-[18px] leading-[1.2] text-ink/50">{item.answer}</p>
              </div>
              <span className="relative size-5 shrink-0">
                <img src={img("548a5.svg")} alt="" className="absolute left-[12.73%] top-[42.83%] h-[14.34%] w-[74.54%]" />
              </span>
            </div>
          </div>
        ) : (
          <div key={item.question} className="bg-white px-[27px] py-[25px]">
            <div
              className={cn(
                "flex justify-between",
                item.align === "center" ? "items-center" : item.align === "start" ? "items-start" : "items-end",
              )}
            >
              <p
                className="min-w-px flex-1 text-[22px] font-medium leading-[1.3] tracking-[-0.44px] text-ink"
                style={item.questionWidth ? { flex: "none", width: item.questionWidth } : undefined}
              >
                {item.question}
              </p>
              <span className="relative size-5 shrink-0">
                <img src={img("26c70.svg")} alt="" className="absolute inset-[3.13%] size-[93.74%]" />
              </span>
            </div>
          </div>
        ),
      )}
    </div>
  );
}

/** Heading on the left, FAQ list on the right. */
export function FaqSection({ heading, items, className }: { heading: ReactNode; items: FaqItem[]; className?: string }) {
  return (
    <div className={cn("flex w-full items-start justify-between", className)}>
      {heading}
      <FaqList items={items} />
    </div>
  );
}
