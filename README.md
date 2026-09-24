# Krow Labs website

Static front end for the Krow Labs site, built from the Figma file (6 desktop frames, 1440px).

**Stack:** Vite · React · TypeScript · Tailwind CSS v3 · React Router (the same stack Lovable generates, so it can be imported as-is).

## Run

```bash
npm install
npm run dev      # http://localhost:8080
npm run build
```

## Pages

| Route | Figma frame |
| --- | --- |
| `/` | Krow Labs Home |
| `/services/cro` | Krow Labs Service (CRO audit) |
| `/services/web-development` | Web Dev Service Page |
| `/services/ui-ux-design` | UI/UX Design Service Page |
| `/services/brand-identity` | brand identity service page |
| `/services/digital-advertising` | digital advertising Page |

## Structure

```
src/
  components/
    layout/     Navbar, Footer
    sections/   Reusable page blocks (ribbons, results, testimonials, process, FAQ, CTA, service hero)
    ui/         Button, Container
  pages/        Index (home) + services/*
public/
  images/       Figma exports (file names are the Figma asset hashes)
  fonts/        BDO Grotesk (variable) + PP Editorial New Italic
```

## Design tokens

Defined in `tailwind.config.ts`: `ink #21211f`, `page #f5f5f5`, `brand #f5852d` (+ `deep`, `warm`, `stat`), `navy #21212f`,
fonts `font-sans` (BDO Grotesk) and `font-serif` (PP Editorial New). The orange italic accent word is the `.accent` class in `src/index.css`.

## Notes for the animation pass

- Ribbons (`components/sections/Ribbons.tsx`) render one static row per band. For a marquee, duplicate the `TagRow` and translate it.
- FAQ is static (first item open). Testimonial arrows and the showreel play button are buttons without handlers yet.
- Layout is desktop-first at 1440px (the only breakpoint in the Figma file).

## Fonts

PP Editorial New is a commercial typeface from Pangram Pangram. Make sure the licence covers web use before publishing.
