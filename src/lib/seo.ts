import { useEffect } from "react";
import { absoluteUrl, fullTitle, metaImage, type PageMeta } from "@/content/pages";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
}

/**
 * Keeps <title>, description, canonical and social tags in sync on client-side navigation.
 * The same values are baked into per-route HTML at build time (see vite.config.ts), so crawlers
 * and link previews get them without running JavaScript. Page metadata lives in src/content/pages.ts.
 */
export function useSeo(meta: PageMeta) {
  const { title, description, image } = meta;
  useEffect(() => {
    const t = fullTitle(title);
    const url = absoluteUrl(window.location.pathname);
    const img = metaImage({ title, description, image });
    document.title = t;
    setMeta("name", "description", description);
    setMeta("property", "og:title", t);
    setMeta("property", "og:description", description);
    setMeta("property", "og:image", img);
    setMeta("property", "og:url", url);
    setMeta("property", "og:type", "website");
    setMeta("name", "twitter:card", "summary_large_image");
    setCanonical(url);
  }, [title, description, image]);
}
