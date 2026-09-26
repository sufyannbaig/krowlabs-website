import type { Testimonial } from "@/components/sections/TestimonialCard";

/**
 * Real client reviews (5.0★) from Upwork, lightly edited to refer to "Krow Labs" instead of a
 * person. Names follow Upwork's public format (first name + last initial) or the client company.
 * `avatar` can be set to a photo in /public/images once a client provides one; otherwise a monogram shows.
 */
export const testimonials = {
  gkTraining: {
    quote:
      "“Krow Labs became an essential part of our product team. What started as a small landing page fix turned into a long-term partnership because of their reliability, speed, and consistently polished work. They now lead all of our design projects.”",
    name: "Allan G.",
    role: "Head of B2B & B2C Growth, GK Training",
    initials: "AG",
    source: "Upwork",
  },
  misk: {
    quote:
      "“Krow Labs did an incredible job redesigning our website (misk.ngo). Professional, highly skilled, creative, and a pleasure to collaborate with from start to finish.”",
    name: "Misk Youth",
    role: "Nonprofit website redesign",
    initials: "MY",
    source: "Upwork",
  },
  chander: {
    quote:
      "“Super talented designers, easy to communicate with, and they really knew what they were doing. They worked fast, listened to feedback, and delivered exactly what we were looking for in a short amount of time. Would definitely work with them again!”",
    name: "Chander K.",
    role: "CRO landing page & homepage",
    initials: "CK",
    source: "Upwork",
  },
  benAds: {
    quote:
      "“Absolutely fantastic to work with. They consistently go above and beyond to make sure every task is completed to the highest standard, and they always deliver.”",
    name: "Ben P.",
    role: "AI ad generation system & product UI",
    initials: "BP",
    source: "Upwork",
  },
  benProduct: {
    quote:
      "“An incredibly talented team that consistently delivers high-quality work. Their creativity, attention to detail, and ability to turn ideas into beautiful, professional designs are truly impressive.”",
    name: "Ben P.",
    role: "AI SaaS, Shopify App Store design",
    initials: "BP",
    source: "Upwork",
  },
  prospectBase: {
    quote:
      "“They communicated clearly throughout, delivered the work promptly, and met the brief to our client’s satisfaction. I would highly recommend Krow Labs for similar design projects.”",
    name: "ProspectBase",
    role: "B2B banner ad campaign",
    initials: "PB",
    source: "Upwork",
  },
  deborah: {
    quote:
      "“It was great to work with Krow Labs! Great design and good communication, and they got me an even better design than what I was expecting!”",
    name: "Deborah G.",
    role: "Promo landing page & print",
    initials: "DG",
    source: "Upwork",
  },
  efogi: {
    quote: "“Really great designers who provided high-quality options, exactly up to spec!”",
    name: "EFOGI",
    role: "Logo for The Summit 2025",
    initials: "EF",
    source: "Upwork",
  },
  iskender: {
    quote: "“Multiple projects done well, good communication. We will continue to work with Krow Labs.”",
    name: "Iskender I.",
    role: "Branding recreation & motion",
    initials: "II",
    source: "Upwork",
  },
  gkEvent: {
    quote:
      "“Fantastic to work with. They delivered a high-quality banner and promo video for our event: fast, spot-on, and exactly what we needed. Very responsive throughout the process.”",
    name: "GK Training",
    role: "Webinar banner & promo video",
    initials: "GK",
    source: "Upwork",
  },
} satisfies Record<string, Testimonial>;

/** Rotation used on the home, about and free-audit pages. */
export const featuredTestimonials = [
  testimonials.gkTraining,
  testimonials.misk,
  testimonials.chander,
  testimonials.benAds,
  testimonials.prospectBase,
  testimonials.deborah,
  testimonials.efogi,
  testimonials.gkEvent,
  testimonials.iskender,
];

/** Results quoted on the Upwork profile (client names withheld there). */
export const provenResults = [
  { value: "+36%", label: "Monthly form opt-ins after a home repair service homepage redesign" },
  { value: "6% → 22%", label: "Conversion rate after redesigning a low-converting landing page" },
  { value: "Seed round", label: "Secured by an AI startup using the Figma prototype we built from their idea" },
];
