import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const variants = {
  gradient: "bg-brand-button text-white",
  brand: "bg-brand text-white",
  black: "bg-black text-white",
  dark: "bg-[#1c1c1c] text-white",
  white: "bg-white text-black",
  outline: "border border-ink px-[19px] py-[13px] text-ink",
  "outline-muted": "border border-ink/40 px-[19px] py-[13px] text-ink/40",
  "outline-white": "border border-white px-[19px] py-[13px] text-white",
} as const;

const sizes = {
  lg: "text-[20px] tracking-[-0.4px]",
  md: "text-[16px] tracking-[-0.32px]",
} as const;

export type ButtonVariant = keyof typeof variants;

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
  size?: keyof typeof sizes;
  /** Soft drop shadow used on hero / nav CTAs. */
  raised?: boolean;
};

export function Button({
  variant = "brand",
  size = "lg",
  raised = false,
  className,
  href = "#contact",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex shrink-0 items-center justify-center whitespace-nowrap px-5 py-[14px] font-medium",
        variants[variant],
        sizes[size],
        "leading-[1.4]",
        raised && "drop-shadow-[0px_14px_11.35px_rgba(0,0,0,0.07)]",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
