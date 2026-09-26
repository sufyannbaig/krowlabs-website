/**
 * Title, description and social image for every route.
 * Used at runtime (useSeo) and at build time (vite.config.ts writes per-route HTML, sitemap and robots.txt),
 * so this file only uses relative imports.
 */
import { caseStudies } from "./caseStudies";
import { siteUrl } from "./site";
import { workMedia } from "./workMedia";

export type PageMeta = { title: string; description: string; image?: string };

// 1200×630 JPEG share images (LinkedIn does not reliably preview WebP), generated next to each cover.
const DEFAULT_IMAGE = "/work/b2b-saas-website/og.jpg";

export const staticPages: Record<string, PageMeta> = {
  "/": {
    title: "Krow Labs | Conversion-focused design & development",
    description:
      "Krow Labs designs and optimizes the pages your customers actually see: sales pages, product pages, and apps, so they convert more of the traffic you are already paying for.",
  },
  "/work": {
    title: "Work",
    description:
      "Selected Krow Labs case studies: CRO, website development, UI/UX, brand identity and ad creative for ecommerce, SaaS and service brands.",
  },
  "/about": {
    title: "About",
    description:
      "Krow Labs is a conversion-focused design studio led by Sufyan Baig: brand, UI/UX, landing pages, ad creative and development for growing ecommerce and SaaS brands.",
    image: "/images/team/og.jpg",
  },
  "/free-audit": {
    title: "Free Conversion Audit",
    description:
      "Send us your website and get the biggest conversion leaks on your key page, ranked by impact with concrete fixes. Free, by email, no call required.",
  },
  "/services/cro": {
    title: "CRO & Conversion-Focused Design",
    description:
      "A full audit of your site or app plus a prioritized fix list ranked by revenue impact. Conversion rate optimization for ecommerce, SaaS and service brands.",
    image: "/work/zaffo-coffee/og.jpg",
  },
  "/services/web-development": {
    title: "Website Development",
    description:
      "Landing pages and full marketing sites built fast with an AI-assisted workflow and reviewed by a senior designer at every step. Framer, Webflow, Shopify or your stack.",
    image: "/work/b2b-saas-website/og.jpg",
  },
  "/services/ui-ux-design": {
    title: "UI/UX Design",
    description:
      "Product design for SaaS platforms and mobile apps, from first wireframe to a design system your team can keep building on.",
    image: "/work/revsta-platform/og.jpg",
  },
  "/services/brand-identity": {
    title: "Brand Identity",
    description:
      "Logo, visual identity and brand guidelines that hold up everywhere your brand shows up, from product UI to packaging, menus and signage.",
    image: "/work/korax/og.jpg",
  },
  "/services/digital-advertising": {
    title: "Digital Advertising & Creative",
    description:
      "Static ad creative for Google Ads and paid social, designed to match the landing page it sends traffic to.",
    image: "/work/kryve/og.jpg",
  },
};

export function caseStudyMeta(slug: string): PageMeta | undefined {
  const c = caseStudies.find((s) => s.slug === slug);
  if (!c) return undefined;
  const cover = workMedia[slug]?.cover;
  return {
    title: `${c.client} case study`,
    description: c.summary,
    image: cover?.type === "image" ? `/work/${slug}/og.jpg` : undefined,
  };
}

/** Every indexable route with its metadata. */
export function allPages(): { path: string; meta: PageMeta }[] {
  return [
    ...Object.entries(staticPages).map(([path, meta]) => ({ path, meta })),
    ...caseStudies.map((c) => ({ path: `/work/${c.slug}`, meta: caseStudyMeta(c.slug)! })),
  ];
}

export const SITE_NAME = "Krow Labs";

export function fullTitle(title: string) {
  return title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
}

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function metaImage(meta: PageMeta) {
  return absoluteUrl(meta.image ?? DEFAULT_IMAGE);
}

/** Structured data: the organization everywhere, plus a CreativeWork on case study pages. */
export function structuredData(path: string, meta: PageMeta) {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: siteUrl,
    logo: absoluteUrl("/icon-512.png"),
    email: "sales@krowlabs.com",
    founder: { "@type": "Person", name: "Sufyan Baig", jobTitle: "Founder & Creative Director" },
    sameAs: [
      "https://www.linkedin.com/company/krow-labs/",
      "https://www.instagram.com/krow_labs/",
      "https://www.behance.net/krowlabs",
      "https://dribbble.com/krowlabs",
    ],
  };
  const data: object[] = [org];
  const slug = path.startsWith("/work/") ? path.slice(6) : null;
  const study = slug ? caseStudies.find((c) => c.slug === slug) : null;
  if (study) {
    data.push({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: study.title,
      description: study.summary,
      image: metaImage(meta),
      url: absoluteUrl(path),
      dateCreated: study.year,
      creator: { "@type": "Organization", name: SITE_NAME, url: siteUrl },
      about: study.client,
    });
  }
  return data;
}
