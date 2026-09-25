import type { ServiceKey } from "./services";
import { workMedia, type WorkMedia } from "./workMedia";

/**
 * Case studies, sourced from sufyanbaig.online (Contra) and behance.net/sufyannbaig.
 *
 * `highlight` is a factual scope line shown where the design has a big number.
 * When you have verified numbers for a project, add `metric` and it replaces the highlight everywhere.
 */
export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  year: string;
  services: ServiceKey[];
  /** One line for cards and meta descriptions. */
  summary: string;
  highlight: { value: string; label: string };
  metric?: { value: string; label: string };
  deliverables: string[];
  tools: string[];
  sections: { heading: string; body: string[] }[];
  source: { label: string; url: string };
};

const caseStudyList: CaseStudy[] = [
  {
    slug: "zaffo-coffee",
    title: "Zaffo Coffee: a DTC store rebuilt to convert its ad traffic",
    client: "Zaffo Coffee",
    industry: "DTC · Food & Beverage",
    year: "2026",
    services: ["cro", "web-development"],
    summary: "Redesigned a protein coffee Shopify store so paid traffic could actually find, trust and buy the product.",
    highlight: { value: "Shopify", label: "Redesign, CRO & development" },
    deliverables: ["Website redesign", "Shopify development", "Conversion rate optimization", "UI improvements"],
    tools: ["Figma", "Shopify", "Google Analytics"],
    sections: [
      {
        heading: "The problem",
        body: [
          "Zaffo sells protein coffee, coffee syrups and protein creamer. Their ads were driving good traffic, but visitors were not converting: the store was confusing, product pages were unclear and there was little to build trust.",
        ],
      },
      {
        heading: "What we did",
        body: [
          "We simplified the store, rewrote the homepage and product page hierarchy for clarity, optimized speed and removed friction on the path to checkout, so more of the traffic they were already paying for could move easily toward buying.",
          "The redesign was delivered in Figma and implemented directly in Shopify.",
        ],
      },
    ],
    source: { label: "View on Behance", url: "https://www.behance.net/gallery/248692921/DTC-E-commerce-Store-CRO-Focused-Store-Design" },
  },
  {
    slug: "optiwrite",
    title: "OptiWrite: a SaaS landing page built for instant clarity",
    client: "OptiWrite",
    industry: "SaaS · AI content",
    year: "2025",
    services: ["cro", "ui-ux-design"],
    summary: "A conversion-focused landing page for an AI tool that helps marketing teams create SEO content at scale.",
    highlight: { value: "SaaS", label: "Conversion-focused landing page" },
    deliverables: ["Landing page strategy", "UI/UX design"],
    tools: ["Figma"],
    sections: [
      {
        heading: "The challenge",
        body: [
          "SaaS landing pages live or die by clarity. Visitors arrive from ads or search with a specific intent. They need to understand what the product does, why it matters and how to start within seconds, or they bounce.",
        ],
      },
      {
        heading: "Our approach",
        body: [
          "A clear visual hierarchy: a strong above-the-fold value proposition, feature sections written around real user pain points, deliberate social proof placement, and a frictionless CTA flow that guides visitors toward signup.",
        ],
      },
    ],
    source: { label: "View on Contra", url: "https://contra.com/p/UcZR7ccP-opti-write-or-saa-s-ui-ux-design" },
  },
  {
    slug: "b2b-saas-website",
    title: "A B2B SaaS website, designed in Figma and shipped in Framer",
    client: "B2B SaaS startup",
    industry: "Computer Software",
    year: "2026",
    services: ["web-development", "ui-ux-design"],
    summary: "Website design and Framer build for a newly launched product that had to speak to both B2B and B2C buyers.",
    highlight: { value: "Figma → Framer", label: "Designed and developed end to end" },
    deliverables: ["Website design", "Framer development", "Launch handoff"],
    tools: ["Figma", "Framer"],
    sections: [
      {
        heading: "The brief",
        body: [
          "A newly launched product needed a strong digital presence that could present it clearly to both B2B and B2C users.",
        ],
      },
      {
        heading: "What we did",
        body: [
          "We designed the whole website in Figma, focusing on presenting the product, its features and its value proposition clearly, then developed the complete site in Framer and handed the finished website over to the owner.",
        ],
      },
    ],
    source: { label: "View on Contra", url: "https://contra.com/p/Pb2Uq3L6-modern-b2-b-saa-s-website-design-and-development" },
  },
  {
    slug: "b2b-agency-website",
    title: "A modern B2B agency website, from Figma to Framer",
    client: "B2B agency",
    industry: "Design & Services",
    year: "2026",
    services: ["web-development"],
    summary: "A promotional homepage designed in Figma and built in Framer to present a B2B offer with a strong first impression.",
    highlight: { value: "Framer", label: "Website design & development" },
    deliverables: ["UI/UX design", "Framer development"],
    tools: ["Figma", "Framer", "Zeplin"],
    sections: [
      {
        heading: "What we did",
        body: [
          "We designed the homepage in Figma around the offer and the audience it needed to convince, then built and launched it in Framer with responsive layouts and interactions.",
        ],
      },
    ],
    source: { label: "View on Contra", url: "https://contra.com/p/6e6skPkF-modern-b2-b-agency-website-design-or-figma-framer" },
  },
  {
    slug: "fintech-investor-landing",
    title: "An investor-focused fintech landing page",
    client: "Fintech startup",
    industry: "FinTech & Payments",
    year: "2026",
    services: ["ui-ux-design", "cro"],
    summary: "A promotional homepage that shows angel investors how the product tracks their portfolio and growth.",
    highlight: { value: "Fintech", label: "Landing page UI/UX" },
    deliverables: ["Landing page design", "UI/UX design"],
    tools: ["Figma", "Figma Make"],
    sections: [
      {
        heading: "The audience",
        body: [
          "Angel investors who back startups and want to keep track of their investments, monitor how their money grows and get better visibility into their gains.",
        ],
      },
      {
        heading: "What we did",
        body: [
          "We designed the homepage to bring the real product to life, showcasing its features and how each one helps investors manage and understand their investments.",
        ],
      },
    ],
    source: { label: "View on Contra", url: "https://contra.com/p/7U7QUsgL-investor-focused-fintech-landing-page-design" },
  },
  {
    slug: "revsta-platform",
    title: "Revsta: an AI review platform made simple enough to trust",
    client: "Revsta",
    industry: "AI · E-commerce",
    year: "2026",
    services: ["ui-ux-design"],
    summary: "End-to-end UX/UI for a product that turns real social-media reviews into a clear, AI-summarized verdict.",
    highlight: { value: "End to end", label: "Research, IA and hi-fi UI" },
    deliverables: ["UX research", "Information architecture", "High-fidelity UI"],
    tools: ["Figma", "FigJam", "Figma Make"],
    sections: [
      {
        heading: "The problem",
        body: [
          "Most brand websites control which reviews you see, highlighting 5-star ratings and hiding the rest. That biased picture drives bad purchases, and people end up turning to social media to find the truth.",
        ],
      },
      {
        heading: "The product",
        body: [
          "Revsta collects real user reviews from social platforms and runs them through AI sentiment analysis. Within minutes, shoppers get a clear, data-driven summary of how a product actually performs.",
        ],
      },
      {
        heading: "Our role",
        body: [
          "End-to-end UX/UI, from research and information architecture to final high-fidelity screens. The core challenge was structuring complex AI-generated data into a simple, trustworthy interface that everyday shoppers can use without friction.",
        ],
      },
    ],
    source: { label: "View on Contra", url: "https://contra.com/p/NmOgeO2E-ai-driven-product-review-platform-uxui" },
  },
  {
    slug: "revsta-identity",
    title: "Revsta: visual identity for an AI SaaS startup",
    client: "Revsta",
    industry: "AI · SaaS",
    year: "2026",
    services: ["brand-identity"],
    summary: "A modern tech identity that avoids looking like every other AI startup.",
    highlight: { value: "AI SaaS", label: "Logo & visual identity" },
    deliverables: ["Logo", "Visual direction", "Typography", "Color", "Brand system"],
    tools: ["Adobe Illustrator"],
    sections: [
      {
        heading: "What we did",
        body: [
          "Revsta helps people discover and compare products through reviews. We created the logo, visual direction, typography, colors and overall brand system so the identity feels clean, smart and easy to recognize across the product and marketing.",
        ],
      },
    ],
    source: { label: "View on Contra", url: "https://contra.com/p/BYPmXv7O-visual-identity-design-for-revsta" },
  },
  {
    slug: "korax",
    title: "Korax: a fintech identity inspired by a 1800s instrument",
    client: "Korax",
    industry: "Fintech · Web 3.0",
    year: "2026",
    services: ["brand-identity"],
    summary: "Brand identity for a fintech startup, drawing on the strings and flow of the African kora.",
    highlight: { value: "Fintech", label: "Logo & brand identity" },
    deliverables: ["Logo exploration", "Brand identity", "Brand applications"],
    tools: ["Adobe Illustrator", "Figma"],
    sections: [
      {
        heading: "The brief",
        body: [
          "Korax is a fintech startup focused on making digital finance feel simpler, cleaner and more modern. The name comes from the kora, an African string instrument, and the client wanted that inspiration in the logo without anything literal or clip-art.",
        ],
      },
      {
        heading: "The challenge",
        body: [
          "Building an identity that feels modern and technology-focused while carrying inspiration from a traditional wooden instrument: the strings, the flow and the shape language, balanced between old and new.",
          "We explored many directions. Each one moved the identity closer to the final mark.",
        ],
      },
    ],
    source: { label: "View on Behance", url: "https://www.behance.net/gallery/250497949/KORAX-FintechWeb-30-Brand-Identity" },
  },
  {
    slug: "kebabberia-sabri",
    title: "Kebabberia Sabri: “the KFC of Italian restaurants”",
    client: "Kebabberia Sabri",
    industry: "Restaurant · Food & Beverage",
    year: "2024",
    services: ["brand-identity"],
    summary: "A mascot-led rebrand featuring the founder, built for a restaurant expanding into multiple branches.",
    highlight: { value: "Multi-branch", label: "Rebrand, mascot & guidelines" },
    deliverables: ["Mascot logo", "Brand identity", "Brand guidelines", "Packaging"],
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    sections: [
      {
        heading: "The brief",
        body: [
          "It started with one line from the client: “We want to be the KFC of Italian restaurants.” Kebabberia Sabri was about to expand into multiple branches and needed a completely new identity, led by a mascot-style logo of their founder.",
        ],
      },
      {
        heading: "How it came together",
        body: [
          "Over a month we went through multiple rounds of feedback, refining typography, adjusting details and making sure the mascot felt like the perfect fit for the brand, then extended it into full guidelines and packaging.",
        ],
      },
    ],
    source: { label: "View on Behance", url: "https://www.behance.net/gallery/215772043/KS-Restaurant-Brand-Identity-Guidelines" },
  },
  {
    slug: "omnizs",
    title: "OmniZs: a bold identity for a Gen Z fashion brand",
    client: "OmniZs",
    industry: "DTC · Fashion & Apparel",
    year: "2026",
    services: ["brand-identity"],
    summary: "A custom icon hiding a sewing detail in the “O”, paired with a bold wordmark.",
    highlight: { value: "Gen Z", label: "Logo & visual identity" },
    deliverables: ["Logo", "Visual identity", "Brand applications"],
    tools: ["Adobe Illustrator", "Figma"],
    sections: [
      {
        heading: "What we did",
        body: [
          "A modern brand face for a Gen Z fashion label planning to make its mark. The custom icon combines the initial “O” with a sewing element in the negative space, followed by a bold wordmark.",
          "The goal was to keep the identity simple, modern and attractive, with a small detail that ties it back to fashion.",
        ],
      },
    ],
    source: { label: "View on Contra", url: "https://contra.com/p/eqEP2qbv-gen-z-fashion-brand-visual-identity-design" },
  },
  {
    slug: "skincare-identity",
    title: "ELLA: visual identity & packaging for a skincare brand",
    client: "ELLA",
    industry: "Beauty & Wellness",
    year: "2026",
    services: ["brand-identity"],
    summary: "A clean, premium and approachable identity carried through to packaging.",
    highlight: { value: "Packaging", label: "Identity & packaging design" },
    deliverables: ["Brand direction", "Logo", "Typography", "Color", "Packaging"],
    tools: ["Adobe Illustrator", "Figma"],
    sections: [
      {
        heading: "What we did",
        body: [
          "A complete visual identity and packaging system for a skincare, beauty and wellness brand. We set the brand direction, logo, typography, colors and packaging so everything feels premium yet approachable, and works together as one identity.",
        ],
      },
    ],
    source: { label: "View on Contra", url: "https://contra.com/p/QAQLYoLB-skincare-brand-visual-identity-and-packaging-design" },
  },
  {
    slug: "limbers",
    title: "Limber's: a cheesy waiter mascot with a lot of personality",
    client: "Limber's",
    industry: "Food & Beverage",
    year: "2026",
    services: ["brand-identity"],
    summary: "Playful, mascot-led branding built to deliver the “cheesy moments” the brand promises.",
    highlight: { value: "Mascot", label: "Character-led brand identity" },
    deliverables: ["Mascot design", "Logo", "Visual identity"],
    tools: ["Adobe Illustrator", "Figma", "Sketchbook"],
    sections: [
      {
        heading: "What we did",
        body: [
          "The client needed a cute, playful mascot that could become the signature of the brand while still showing what the business does. The core idea was bringing “cheesy” moments to customers, so we created a cheesy waiter mascot that became the brand's core visual element.",
        ],
      },
    ],
    source: { label: "View on Contra", url: "https://contra.com/p/skrBM2lL-playful-mascot-branding-for-limbers" },
  },
  {
    slug: "replix-ai",
    title: "Replix AI: a premium SaaS brand identity",
    client: "Replix AI",
    industry: "AI · SaaS",
    year: "2026",
    services: ["brand-identity"],
    summary: "A modern, clean and trustworthy identity built to feel at home in the AI and SaaS space.",
    highlight: { value: "AI SaaS", label: "Brand identity" },
    deliverables: ["Logo", "Brand identity"],
    tools: ["Adobe Illustrator"],
    sections: [
      {
        heading: "What we did",
        body: [
          "A premium SaaS brand identity for Replix AI. The goal was a modern, clean and trustworthy visual identity that feels right at home in the AI and SaaS space.",
        ],
      },
    ],
    source: { label: "View on Contra", url: "https://contra.com/p/QcWcsFLc-replix-ai-or-brand-identity-just" },
  },
  {
    slug: "kryve",
    title: "KRYVE: premium sportswear ads without a photoshoot",
    client: "KRYVE",
    industry: "Sportswear",
    year: "2026",
    services: ["digital-advertising"],
    summary: "An AI-generated collection of high-end sportswear visuals, art-directed for social, e-commerce and paid ads.",
    highlight: { value: "AI", label: "Product ad visuals, no photoshoot" },
    deliverables: ["Creative direction", "AI product visuals", "Ad creative"],
    tools: ["Adobe Photoshop", "Figma", "Google Flow"],
    sections: [
      {
        heading: "The idea",
        body: [
          "Premium advertising shouldn't require expensive photoshoots. For KRYVE we used generative AI to create a complete collection of high-end sportswear visuals that capture the energy, movement and premium feel of a modern athletic brand.",
        ],
      },
      {
        heading: "What we delivered",
        body: [
          "Every creative was art-directed for social media, e-commerce and paid advertising, delivering realistic, commercial-quality imagery while dramatically reducing production time and cost.",
        ],
      },
    ],
    source: { label: "View on Contra", url: "https://contra.com/p/RFsR2cAe-ai-driven-sportswear-advertising-visuals-for-kryve" },
  },
  {
    slug: "salten",
    title: "SALTEN: a luxury fashion campaign, generated with AI",
    client: "SALTEN",
    industry: "Fashion & Apparel",
    year: "2026",
    services: ["digital-advertising"],
    summary: "Editorial, campaign-ready visuals around the “Wear It. Feel It.” concept, without a traditional shoot.",
    highlight: { value: "AI", label: "Luxury fashion ad campaign" },
    deliverables: ["Creative direction", "AI campaign visuals"],
    tools: ["Figma", "Google Flow"],
    sections: [
      {
        heading: "What we did",
        body: [
          "SALTEN shows how generative AI can produce luxury advertising that feels premium, authentic and campaign-ready. Built around the “Wear It. Feel It.” concept, the visuals deliver editorial aesthetics for social, e-commerce and digital marketing, helping the brand create faster, reduce costs and stay consistent across every platform.",
        ],
      },
    ],
    source: { label: "View on Contra", url: "https://contra.com/p/7FggAPYL-luxury-fashion-ai-ad-campaign-for-salten" },
  },
  {
    slug: "bitenow",
    title: "Bitenow: social posts & ad creative for a fast food brand",
    client: "Bitenow",
    industry: "Fast food",
    year: "2025",
    services: ["digital-advertising"],
    summary: "Scroll-stopping social media posts and static ad creative for a burger brand.",
    highlight: { value: "Social", label: "Posts & ad creative" },
    deliverables: ["Social media posts", "Static ad creative"],
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    sections: [
      {
        heading: "What we did",
        body: [
          "A set of social media posts and static ad creatives for Bitenow, designed to stop the scroll and keep the brand consistent across its feed and paid placements.",
        ],
      },
    ],
    source: { label: "View on Behance", url: "https://www.behance.net/gallery/216011149/Bitenow-Social-Media-Posts-AD-Creative" },
  },
];

export const caseStudies = caseStudyList;

export const getCaseStudy = (slug: string) => caseStudyList.find((c) => c.slug === slug);

export const mediaFor = (slug: string): WorkMedia => workMedia[slug] ?? { cover: null, gallery: [] };

/** Case studies for a service, in the order given (falls back to any that list the service). */
export const caseStudiesFor = (service: ServiceKey, preferred: string[] = []) => {
  const picked = preferred.map(getCaseStudy).filter((c): c is CaseStudy => Boolean(c));
  const rest = caseStudyList.filter((c) => c.services.includes(service) && !preferred.includes(c.slug));
  return [...picked, ...rest];
};

/** Big number on cards: a verified metric when present, otherwise the factual highlight. */
export const statFor = (c: CaseStudy) => c.metric ?? c.highlight;
