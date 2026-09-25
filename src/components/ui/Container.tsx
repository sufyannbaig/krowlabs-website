import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/** 1320px content column centered inside the 1440px design frame. */
export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mx-auto w-full max-w-[1440px] px-[60px] max-lg:px-5", className)} {...props} />;
}
