# Krow Labs website

Marketing site for Krow Labs, built from the Figma file and animated.

**Stack:** Vite · React · TypeScript · Tailwind CSS v3 · React Router · Framer Motion (the same stack Lovable generates, so it imports as-is).

## Run

```bash
npm install
npm run dev      # http://localhost:8080
npm run build
```

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/work` | All case studies (filterable by service) |
| `/work/:slug` | Case study (one per project in `src/content/caseStudies.ts`) |
| `/services/cro` | CRO & Conversion-Focused Design |
| `/services/web-development` | Website Development |
| `/services/ui-ux-design` | UI/UX Design |
| `/services/brand-identity` | Brand Identity |
| `/services/digital-advertising` | Digital Advertising & Creative |

## Editing content (no layout code needed)

Everything editable lives in `src/content/`:

| File | What it controls |
| --- | --- |
| `site.ts` | **Booking link** for every CTA button, social links, homepage showreel video |
| `caseStudies.ts` | Case studies: text, client, services, the stat shown on cards (`highlight`, or add a real `metric`) |
| `workMedia.ts` | Generated list of each case study's images/videos in `public/work/<slug>/` |
| `testimonials.ts` | Real client testimonials and the proven results on the CRO page |
| `clients.ts` | Client logo ticker |
| `faqs.ts` | Shared FAQ entries |

To add a case study: add its images to `public/work/<slug>/` (`cover.webp`, `01.webp`, …), add an entry to
`workMedia.ts` and `caseStudies.ts`, and reference the slug on a service page via `resultCards([...])`.

## Layout & responsiveness

- **≥ 1440px**: the Figma desktop frame, pixel-exact.
- **1024–1439px**: the same desktop frame scaled proportionally with CSS `zoom` (`components/layout/DesktopScale.tsx`).
- **< 1024px**: a dedicated mobile layout via `max-lg:` classes, plus a hamburger menu.

## Animations

| Where | Effect | Code |
| --- | --- | --- |
| Hero collage | Cursor pushes cards away, cards can be thrown and spring back, idle float | `components/home/HeroCollage.tsx` |
| Logo row, ribbons, testimonials | Infinite tickers (testimonials pause and lift on hover) | `components/motion/Marquee.tsx` |
| Ribbons | Swing into their crossed position on scroll | `components/sections/Ribbons.tsx` |
| What we do / How we work / engagement steps | Scroll-stopper sections pinned while each item lights up | `components/motion/ScrollPin.tsx` |
| Recent work | Intro stays pinned while case studies scroll past | `pages/Index.tsx` |
| Why Krow Labs | Blocks slide in from left and right | `pages/Index.tsx` |
| FAQ | Accordion | `components/sections/Faq.tsx` |
| CTA panel | Shooting-star streaks along the texture lines | `components/sections/CtaBanner.tsx`, `index.css` |
| Footer wordmark | "Let's talk" bubble follows the cursor | `components/layout/Footer.tsx` |
| Header | Services dropdown | `components/layout/Navbar.tsx` |

Everything respects `prefers-reduced-motion`, and pinned sections render normally on mobile.
Scroll-linked values use `lib/useRectProgress.ts` (not framer's `useScroll`) so they stay correct under the laptop zoom.

## Fonts

BDO Grotesk and PP Editorial New Italic are self-hosted in `public/fonts`. PP Editorial New is a commercial
typeface (Pangram Pangram); make sure the licence covers web use.
