import type { Testimonial } from "@/components/sections/TestimonialCard";

/**
 * Real client feedback only.
 * Sources: Upwork profile (Allan G.) and verified Contra reviews (reviewer names are hidden on Contra).
 * To add more Upwork reviews, paste them here with the client's name and role.
 */
export const testimonials = {
  gkTraining: {
    quote:
      "“Sufyan became an essential part of our product team. What started as a small landing page fix turned into a long-term partnership because of his reliability, speed, and consistently polished work. He now leads all of our design projects.”",
    name: "Allan G.",
    role: "Head of B2B & B2C Growth, GK Training",
    initials: "AG",
  },
  contraLandingPage: {
    quote:
      "“We started with a simple landing page review, and he quickly proved his value: fast, reliable, and always on time. His design work is clean, professional, and consistently high-quality. He now leads all our design projects.”",
    name: "Verified client",
    role: "Landing page & design lead · via Contra",
    initials: "VC",
  },
  contraDeveloper: {
    quote:
      "“As a developer, I really appreciated how thoughtfully his designs were structured and how easy they were to implement. He thinks beyond standard layouts and delivers creative, out-of-the-box solutions.”",
    name: "Verified client",
    role: "Website design project · via Contra",
    initials: "VC",
  },
} satisfies Record<string, Testimonial>;

/** Results quoted on the Upwork profile (client names withheld there). */
export const provenResults = [
  { value: "+36%", label: "Monthly form opt-ins after a home repair service homepage redesign" },
  { value: "6% → 22%", label: "Conversion rate after redesigning a low-converting landing page" },
  { value: "Seed round", label: "Secured by an AI startup using the Figma prototype we built from their idea" },
];
