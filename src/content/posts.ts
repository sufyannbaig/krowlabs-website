/**
 * Blog posts ("Insights"). Plain data with relative imports only, so the build can also use it for
 * page metadata, the sitemap, llms.txt and share images.
 *
 * Body text supports two inline marks: **bold** and [link text](/path or https://...).
 * To add a post: copy an entry, give it a unique slug, and write the body as blocks.
 */
import type { ServiceKey } from "./services";

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "callout"; title?: string; text: string };

export type Post = {
  slug: string;
  title: string;
  /** One or two sentences: used under the title, on cards and as the meta description. */
  description: string;
  /** ISO date, e.g. "2026-09-27". */
  date: string;
  service: ServiceKey;
  /** Image shown on the card and at the top of the post (from /public). */
  cover: string;
  /** Case studies shown under the post. */
  related: string[];
  body: PostBlock[];
};

export const AUTHOR = { name: "Sufyan Baig", role: "Founder & Creative Director, Krow Labs" };

export const posts: Post[] = [
  {
    slug: "shopify-store-traffic-but-no-sales",
    title: "Your Shopify store gets traffic but no sales. Here are the 5 fixes we start with.",
    description:
      "When ads bring visitors but the store does not convert, the problem is almost never the traffic. These are the five places we look first, and what we changed on a real DTC store.",
    date: "2026-09-27",
    service: "cro",
    cover: "/work/zaffo-coffee/cover.webp",
    related: ["zaffo-coffee", "optiwrite"],
    body: [
      {
        type: "p",
        text: "A common message we get: “Our ads are working, people are coming to the store, but hardly anyone buys.” The instinct is to fix the ads, try a new audience, or push a discount. Most of the time that is the wrong place to start. If people are arriving and leaving, the store is the part that is not doing its job.",
      },
      {
        type: "p",
        text: "When we audit an underperforming Shopify store, we check the same five things first, in this order. They are the fixes that usually move revenue fastest, and none of them need a full redesign.",
      },
      { type: "h2", text: "1. The first screen does not say what you sell, or why it is better" },
      {
        type: "p",
        text: "A visitor from an ad decides in a few seconds whether they are in the right place. If the first screen is a lifestyle photo with a vague line like “Elevate your mornings”, they have to scroll and work out what the product is. Many will not bother.",
      },
      {
        type: "list",
        items: [
          "Say what the product is in plain words, in the headline or right under it.",
          "Give one clear reason to choose it over the obvious alternative.",
          "Show the product itself, not just a mood image.",
          "Put one primary action above the fold (shop, or go to the product), not three competing ones.",
        ],
      },
      { type: "h2", text: "2. The product page answers the wrong questions" },
      {
        type: "p",
        text: "Product pages are where buying decisions are made, yet they are often a photo carousel, a price and a paragraph of brand copy. Shoppers arrive with specific doubts: what is in it, how does it taste or fit, how is it different, what if I do not like it. If the page does not answer those, the doubt wins.",
      },
      {
        type: "p",
        text: "We rebuild the product page hierarchy around those questions: benefits first, then the details that remove risk (ingredients, sizing, shipping, returns), then proof. On [Zaffo Coffee](/work/zaffo-coffee), a protein coffee brand whose ads were bringing in good traffic that was not converting, a big part of the work was simply making each product page clear about what the product is and who it is for.",
      },
      { type: "h2", text: "3. There is nothing that makes a stranger trust you" },
      {
        type: "p",
        text: "Paid traffic is mostly people who have never heard of you. They need reasons to believe the store is real, the product is good and the order will arrive. Reviews buried in a tab, no guarantee and no visible shipping information all quietly cost sales.",
      },
      {
        type: "list",
        items: [
          "Place reviews and ratings near the price and the add-to-cart button, not only at the bottom.",
          "Make shipping times, costs and the returns policy visible before checkout.",
          "Use real photos and real customer content wherever you can.",
          "Keep the design consistent. A store that looks stitched together reads as risky.",
        ],
      },
      { type: "h2", text: "4. The path to checkout has too much friction" },
      {
        type: "p",
        text: "Every extra step between “I want this” and “I paid” loses people: slow pages, pop-ups that interrupt the first visit, variant pickers that are hard to use on a phone, surprise costs at checkout. Most of this traffic is on mobile, so we walk the whole journey on a phone first.",
      },
      {
        type: "p",
        text: "Speed matters here too. Large uncompressed images and piles of apps are the usual culprits on Shopify. Removing what is not earning its place is often the quickest win of the whole project.",
      },
      { type: "h2", text: "5. The ad and the landing page tell different stories" },
      {
        type: "p",
        text: "If the ad promises a specific product, offer or angle and the click lands on a generic homepage, the visitor has to start again. The closer the landing page matches the ad (same product, same message, same visual style), the more of that paid click turns into a sale. We go deeper on this in [why paid traffic bounces](/blog/ad-to-landing-page-match).",
      },
      {
        type: "callout",
        title: "Where to start",
        text: "Do not try to fix everything at once. List the pages that get the most paid traffic, check them against these five points on a phone, and fix the biggest gap first. If you want a second pair of eyes, our [free conversion audit](/free-audit) does exactly this for your key page.",
      },
      { type: "h2", text: "What this looks like in practice" },
      {
        type: "p",
        text: "For Zaffo, we simplified the store, rewrote the homepage and product page hierarchy for clarity, improved speed and removed friction on the path to checkout. The redesign was done in Figma and built directly in Shopify, the platform the brand was already selling on.",
      },
      {
        type: "p",
        text: "The point was not a prettier store. It was to let more of the traffic they were already paying for move easily toward buying. That is the lens we use on every store: the pages your customers actually see, judged by whether they help someone buy.",
      },
    ],
  },
  {
    slug: "saas-landing-page-checklist",
    title: "The SaaS landing page checklist we use before anything goes live",
    description:
      "SaaS landing pages live or die by clarity. This is the checklist we run on every page we design, from the headline to the signup flow, with examples from our own projects.",
    date: "2026-09-27",
    service: "web-development",
    cover: "/work/optiwrite/cover.webp",
    related: ["optiwrite", "b2b-saas-website"],
    body: [
      {
        type: "p",
        text: "Visitors land on a SaaS page with a specific intent, usually from an ad, a search or a recommendation. Within seconds they need to understand what the product does, why it matters to them and how to start. If they cannot, they leave, and most of them do not come back.",
      },
      {
        type: "p",
        text: "We design and build a lot of SaaS landing pages, for products like [OptiWrite](/work/optiwrite), an AI content tool, and a [newly launched B2B SaaS product](/work/b2b-saas-website) that had to speak to both business and consumer buyers. This is the checklist every page goes through before it ships.",
      },
      { type: "h2", text: "Above the fold" },
      {
        type: "list",
        items: [
          "**The headline says what the product does**, in the customer’s words. Clever lines can come later.",
          "**The subheading names who it is for and the result they get.** “For marketing teams who need to publish more SEO content without hiring” beats a list of features.",
          "**One primary call to action**, worded as the next step (“Start free trial”, “Book a demo”), not “Submit” or “Learn more”.",
          "**A real product visual.** Show the interface doing the job, not an abstract illustration.",
          "**A trust signal near the CTA**: customer logos, a rating, a short quote or a number that matters.",
        ],
      },
      { type: "h2", text: "The body of the page" },
      {
        type: "list",
        items: [
          "**Features are written around pain points.** Each section starts with the problem it solves, then shows how.",
          "**The page has one job.** A landing page for a campaign should not also be the careers page, the blog and the docs. Remove links that lead away from the goal.",
          "**Proof is spread through the page**, not dumped at the bottom: a testimonial next to the feature it talks about, logos near the first CTA.",
          "**Objections are answered before they are asked**: pricing, setup time, integrations, data security, cancellation. A short FAQ does a lot of work here.",
          "**The CTA repeats** after each major section, so nobody has to scroll back to the top to act.",
        ],
      },
      { type: "h2", text: "Signup and forms" },
      {
        type: "list",
        items: [
          "Ask only for what you need to start. Every extra field costs signups.",
          "Tell people what happens after they click: is it a trial, a demo call, a waitlist?",
          "Make error messages specific and friendly, and keep what they already typed.",
          "Test the full flow on a phone, including the confirmation email.",
        ],
      },
      { type: "h2", text: "Speed, mobile and tracking" },
      {
        type: "list",
        items: [
          "The page loads fast on a mid-range phone on mobile data, not just on the office Wi-Fi.",
          "Every section is designed for mobile, not just shrunk: readable type, tappable buttons, no sideways scrolling.",
          "Analytics and conversion events are installed and tested before launch, so you can see what the page actually does.",
          "The page has a proper title, description and share image, so links look right in Slack, LinkedIn and search results.",
        ],
      },
      {
        type: "callout",
        title: "Why this matters",
        text: "On one project, a low-converting landing page went from a 6% to a 22% conversion rate after a redesign built on these principles. The traffic did not change. The page did.",
      },
      { type: "h2", text: "Building it fast without cutting corners" },
      {
        type: "p",
        text: "We usually design in Figma and build in Framer or Webflow, which lets us ship quickly and hand the site over so your team can edit it without a developer. For the B2B SaaS project above, we designed the whole site, built it in Framer and handed the finished website to the owner.",
      },
      {
        type: "p",
        text: "Speed is only useful if the page is right, which is why this checklist exists. If you are about to launch or relaunch a SaaS page and want it reviewed against it, [book a free strategy call](https://cal.com/krowlabs/discovery) or read more about our [website development](/services/web-development) work.",
      },
    ],
  },
  {
    slug: "redesign-or-fix-your-website",
    title: "Redesign or fix? How to tell what your website actually needs",
    description:
      "A full redesign feels like progress, but it is often the slowest and riskiest way to get more customers. Here is how we decide between fixing what is broken and starting again.",
    date: "2026-09-27",
    service: "cro",
    cover: "/work/b2b-agency-website/cover.webp",
    related: ["b2b-saas-website", "zaffo-coffee"],
    body: [
      {
        type: "p",
        text: "When a website is not bringing in enough customers, the first idea is often “we need a new website”. Sometimes that is true. More often, a handful of pages and steps are losing most of the revenue, and fixing those would pay off faster, for a fraction of the cost and risk.",
      },
      {
        type: "p",
        text: "This is the question we answer in every audit, and the way we answer it.",
      },
      { type: "h2", text: "Why a redesign is not automatically the answer" },
      {
        type: "list",
        items: [
          "**It takes longer.** Months of design and build before you learn anything from real visitors.",
          "**It resets what already works.** Pages that rank, copy that converts and flows people know can be lost along the way.",
          "**It mixes many changes into one.** If results go up or down afterwards, it is hard to know why.",
          "**It is easy to optimize for taste**, not for customers. A redesign judged in a meeting room is not the same as one judged by buyers.",
        ],
      },
      { type: "h2", text: "Signs that fixing is the better move" },
      {
        type: "list",
        items: [
          "Most traffic and revenue go through a few pages (homepage, key product or service pages, pricing, checkout).",
          "Visitors arrive but drop off at a specific step you can point to in your analytics.",
          "The brand and design still represent the business well, even if parts feel dated.",
          "The platform does what you need. The problem is what is on the pages, not what they run on.",
        ],
      },
      {
        type: "p",
        text: "In these cases we rank the problems by expected revenue impact and fix the biggest first: usually the first screen, the key product or service page, trust signals and the path to checkout or contact. On one home repair service, a homepage redesign focused on these areas lifted monthly form opt-ins by 36%. That was one page, not a new site.",
      },
      { type: "h2", text: "Signs that a redesign is worth it" },
      {
        type: "list",
        items: [
          "The brand has changed (new positioning, new audience, new offer) and the site no longer tells the right story.",
          "The site cannot be edited without a developer, so it never improves.",
          "It is slow or broken on mobile at a structural level, not just a few heavy images.",
          "The platform is holding you back: you cannot add the pages, products or integrations you need.",
          "The design is so inconsistent that patching it would cost almost as much as rebuilding.",
        ],
      },
      {
        type: "p",
        text: "When a rebuild is the right call, we still start from the audit. The new site keeps what was working and is designed around the gaps we found, so the redesign is aimed at conversions from day one. For a [newly launched B2B SaaS product](/work/b2b-saas-website), for example, there was no site worth keeping, so we designed and built the whole thing in Framer.",
      },
      {
        type: "callout",
        title: "A simple test",
        text: "Write down the three pages most of your paying customers pass through. If you can name specific problems on each of them, start by fixing those. If the honest answer is “everything”, or the site cannot be changed easily, it is probably time to rebuild.",
      },
      { type: "h2", text: "How we make the call" },
      {
        type: "p",
        text: "Every engagement starts with an audit of the pages your customers actually see. We look at analytics where it exists, walk the journey on desktop and mobile, and list every issue with the fix and its expected impact. Then we recommend the smallest change that gets the biggest result, whether that is three fixes or a full rebuild.",
      },
      {
        type: "p",
        text: "If you are not sure which camp you are in, our [free conversion audit](/free-audit) gives you the biggest leaks on your key page, ranked by impact, with no call required.",
      },
    ],
  },
  {
    slug: "ad-to-landing-page-match",
    title: "Why your paid traffic bounces: the ad-to-landing-page match",
    description:
      "Great ads cannot save a landing page that tells a different story. Here is how to line up your ad creative and your pages so more of each paid click turns into a customer.",
    date: "2026-09-27",
    service: "digital-advertising",
    cover: "/work/kryve/cover.webp",
    related: ["kryve", "salten"],
    body: [
      {
        type: "p",
        text: "You can have a scroll-stopping ad, a strong offer and the right audience, and still watch most paid visitors leave within seconds. One of the most common reasons is simple: the page they land on does not feel like the ad they clicked.",
      },
      {
        type: "p",
        text: "The ad set up an expectation: a specific product, a promise, a look. If the landing page does not pick that thread up immediately, the visitor has to work out whether they are in the right place. Many decide they are not.",
      },
      { type: "h2", text: "What “match” actually means" },
      {
        type: "list",
        items: [
          "**Message match.** The headline on the page echoes the promise in the ad, in similar words.",
          "**Offer match.** If the ad mentions a discount, bundle or free trial, the page shows it right away, not three clicks later.",
          "**Product match.** The ad shows a specific product, so the click goes to that product, not the homepage.",
          "**Visual match.** Same colors, same style of imagery, same product shots. The page should feel like the next frame of the ad.",
          "**Audience match.** An ad aimed at gym-goers and one aimed at busy parents should not land on the same generic page.",
        ],
      },
      { type: "h2", text: "Common mismatches we see" },
      {
        type: "list",
        items: [
          "Every ad points to the homepage, whatever it promotes.",
          "The ad creative is premium and editorial, and the store looks like a default template.",
          "A seasonal offer in the ad is missing from the page, or has already expired there.",
          "The ad talks about one benefit and the page leads with a different one.",
          "The ad was made by one team and the page by another, with no shared brief.",
        ],
      },
      { type: "h2", text: "How we line them up" },
      {
        type: "p",
        text: "Because we design both ad creative and landing pages, we plan them together. Each campaign angle gets a page, or at least a first screen, that continues the same story. The creative and the page share one brief: who it is for, the one thing we promise them, the proof, and the next step.",
      },
      {
        type: "p",
        text: "For sportswear brand [KRYVE](/work/kryve), we produced a collection of high-end, AI-generated sportswear visuals art-directed for social, ecommerce and paid ads, so the same look could run from the ad through to the product pages. For fashion brand [SALTEN](/work/salten), we created campaign visuals around a single “Wear It. Feel It.” idea that could carry across every placement without a traditional shoot.",
      },
      {
        type: "callout",
        title: "A quick check you can do today",
        text: "Open your three best-performing ads next to the pages they send traffic to. Cover the logo. Would a stranger know they belong together? If not, fix the first screen of each page before you spend more on the ads.",
      },
      { type: "h2", text: "What to test first" },
      {
        type: "list",
        ordered: true,
        items: [
          "Send product ads to the product page, not the homepage.",
          "Rewrite the landing page headline to echo the ad’s promise.",
          "Bring the ad’s offer and hero visual into the first screen.",
          "Make one landing page per major audience or angle, even if only the first screen changes.",
          "Measure conversion per ad and page pair, not just click-through rate.",
        ],
      },
      {
        type: "p",
        text: "Better ads bring more clicks. Matching pages turn those clicks into customers. If you want both sides designed together, see our [digital advertising and creative](/services/digital-advertising) work or [book a free strategy call](https://cal.com/krowlabs/discovery).",
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

/** Plain text of a post (for reading time and llms.txt). */
export function postText(post: Post) {
  const strip = (s: string) => s.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\[(.+?)\]\((.+?)\)/g, "$1");
  return post.body
    .map((b) => (b.type === "list" ? b.items.map(strip).join(" ") : strip(b.text)))
    .join(" ");
}

export const readingMinutes = (post: Post) => Math.max(1, Math.round(postText(post).split(/\s+/).length / 220));

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
