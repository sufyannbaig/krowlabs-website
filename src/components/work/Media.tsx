import type { MediaItem } from "@/content/workMedia";
import { cn } from "@/lib/utils";

/** Renders a case-study image or a muted looping video, filling its box. */
export function Media({
  item,
  alt,
  className,
  fit = "cover",
  eager = true,
}: {
  item: MediaItem | null;
  alt: string;
  className?: string;
  fit?: "cover" | "natural";
  eager?: boolean;
}) {
  if (!item) return <div className={cn("bg-ink/10", className)} />;
  const sizing = fit === "cover" ? "absolute inset-0 size-full object-cover" : "block h-auto w-full";

  if (item.type === "video") {
    return (
      <div className={cn(fit === "cover" && "relative overflow-hidden", className)}>
        <video
          src={item.src}
          className={sizing}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={alt}
        />
      </div>
    );
  }

  return (
    <div className={cn(fit === "cover" && "relative overflow-hidden", className)}>
      <img
        src={item.src}
        alt={alt}
        width={item.w}
        height={item.h}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={sizing}
      />
    </div>
  );
}
