/**
 * robots.txt and llms.txt, written at build time by the seoPages plugin in vite.config.ts.
 * llms.txt follows https://llmstxt.org: a plain-markdown summary of the site for AI assistants
 * (ChatGPT, Claude, Perplexity, Gemini) so they can describe and cite Krow Labs accurately.
 * Relative imports only (this file is loaded by the Vite config).
 */
import { caseStudies } from "./caseStudies";
import { homeFaq } from "./homeFaq";
import { absoluteUrl, staticPages } from "./pages";
import { services } from "./services";
import { bookingUrl, siteUrl, socials } from "./site";

/** Search and AI crawlers we explicitly welcome (everything else is allowed by the `*` group too). */
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
];

export function robotsTxt() {
  return [
    "# Krow Labs: search engines and AI assistants are welcome to crawl the whole site.",
    "User-agent: *",
    "Allow: /",
    "Disallow: /404.html",
    "",
    ...aiCrawlers.flatMap((bot) => [`User-agent: ${bot}`, "Allow: /", ""]),
    `Sitemap: ${siteUrl}/sitemap.xml`,
    "",
    "# A plain-language summary of this site for AI assistants:",
    `# ${siteUrl}/llms.txt`,
    "",
  ].join("\n");
}

const link = (label: string, path: string, note?: string) => `- [${label}](${absoluteUrl(path)})${note ? `: ${note}` : ""}`;

export function llmsTxt() {
  const home = staticPages["/"];
  const lines = [
    "# Krow Labs",
    "",
    `> ${home.description}`,
    "",
    "Krow Labs is a conversion-focused design and development studio founded by Sufyan Baig (Founder & Creative Director).",
    "It works with DTC ecommerce brands (including Shopify stores), B2B and B2C SaaS teams, AI startups and service businesses.",
    "The team audits where a funnel loses customers, ranks the fixes by expected revenue impact, then designs and builds them:",
    "brand identity, UI/UX, landing pages, ad creative and development under one roof.",
    "",
    "Key facts:",
    "- 5+ years designing brands and products; 25+ projects shipped for clients worldwide",
    "- Google UX Design certified",
    "- Typical project budget: $449 to $2,499, scoped on a free strategy call before anything is billed",
    "- Projects usually start within a week",
    "- Works remotely with clients worldwide",
    "",
    "## Services",
    "",
    ...Object.values(services).map((s) => link(s.name, s.path, staticPages[s.path]?.description)),
    "",
    "## Get in touch",
    "",
    `- [Book a free strategy call](${bookingUrl}): a free discovery call to scope your project`,
    link("Free conversion audit", "/free-audit", staticPages["/free-audit"].description),
    "- Email: sales@krowlabs.com (new projects), hr@krowlabs.com (careers)",
    ...socials.filter((s) => s.url).map((s) => `- [${s.label}](${s.url})`),
    "",
    "## Company",
    "",
    link("Home", "/"),
    link("About", "/about", staticPages["/about"].description),
    link("Work", "/work", staticPages["/work"].description),
    "",
    "## Case studies",
    "",
    ...caseStudies.map((c) => link(`${c.client} (${c.industry})`, `/work/${c.slug}`, c.summary)),
    "",
    "## Frequently asked questions",
    "",
    ...homeFaq.flatMap((f) => [`### ${f.question}`, "", f.answer, ""]),
  ];
  return lines.join("\n");
}
