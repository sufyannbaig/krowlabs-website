import type { AnchorHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { bookingUrl } from "@/content/site";
import { cn } from "@/lib/utils";

const variants = {
  gradient: "bg-brand-button text-white hover:brightness-110",
  brand: "bg-brand text-white hover:bg-[#e8761f]",
  black: "bg-black text-white hover:bg-ink",
  dark: "bg-[#1c1c1c] text-white hover:bg-black",
  white: "bg-white text-black hover:bg-page",
  outline: "border border-ink px-[19px] py-[13px] text-ink hover:bg-ink hover:text-white",
  "outline-muted": "border border-ink/40 px-[19px] py-[13px] text-ink/40 hover:border-ink hover:text-ink",
  "outline-white": "border border-white px-[19px] py-[13px] text-white hover:bg-white hover:text-ink",
} as const;

const sizes = {
  lg: "text-[20px] tracking-[-0.4px] max-lg:text-[16px]",
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
  href = bookingUrl,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center whitespace-nowrap px-5 py-[14px] font-medium transition-[background-color,color,border-color,filter,transform] duration-300 ease-out hover:-translate-y-0.5",
    variants[variant],
    sizes[size],
    "leading-[1.4]",
    raised && "drop-shadow-[0px_14px_11.35px_rgba(0,0,0,0.07)]",
    className,
  );

  // Internal routes go through the router so the page doesn't reload.
  if (href.startsWith("/") && !href.startsWith("//")) {
    return (
      <Link to={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  // External links (the booking page) open in a new tab.
  const external = href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {};
  return (
    <a href={href} className={classes} {...external} {...props}>
      {children}
    </a>
  );
}
