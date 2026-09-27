import { Link } from "react-router-dom";
import { formatDate, readingMinutes, type Post } from "@/content/posts";
import { services } from "@/content/services";
import { cn } from "@/lib/utils";

/** Blog post card: cover, service tag, title, description and date. */
export function PostCard({ post, theme = "light", className }: { post: Post; theme?: "light" | "dark"; className?: string }) {
  const dark = theme === "dark";
  return (
    <Link to={`/blog/${post.slug}`} className={cn("group flex flex-col gap-6", className)}>
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink/5">
        <img
          src={post.cover}
          alt=""
          loading="lazy"
          className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-col gap-3">
        <p className={cn("text-[14px] font-medium uppercase tracking-[0.6px]", dark ? "text-white/50" : "text-ink/50")}>
          {services[post.service].short} · {readingMinutes(post)} min read
        </p>
        <h3
          className={cn(
            "text-[26px] font-medium leading-[1.2] tracking-[-0.6px] transition-colors group-hover:text-brand max-lg:text-[22px]",
            dark ? "text-white" : "text-ink",
          )}
        >
          {post.title}
        </h3>
        <p className={cn("text-[16px] leading-[1.5]", dark ? "text-white/60" : "text-ink/60")}>{post.description}</p>
        <p className={cn("text-[14px]", dark ? "text-white/40" : "text-ink/40")}>{formatDate(post.date)}</p>
      </div>
    </Link>
  );
}
