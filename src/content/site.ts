/**
 * Site-wide content switches. Edit these in one place.
 */

/** Production domain, used for canonical URLs, the sitemap and social preview images. */
export const siteUrl = "https://krowlabs.com";

/** Where every "Book a Free Strategy Call" / "Book a Discovery Call" button points. */
export const bookingUrl = "https://cal.com/krowlabs/discovery";

/** The free conversion audit request page. */
export const auditUrl = "/free-audit";

/**
 * Where the free-audit form is sent. Paste an endpoint that accepts a JSON POST
 * (Formspree, Web3Forms, a Zapier/Make webhook, or a Lovable/Supabase edge function).
 * While this is null the form opens a pre-filled email to sales@krowlabs.com instead, so no lead is lost.
 */
export const auditFormEndpoint: string | null = null;

/**
 * Analytics: fill in any of these and the matching script loads automatically (see lib/analytics.ts).
 * Booking-button clicks and audit-form submissions are sent as conversion events.
 */
export const analytics = {
  /** Google Analytics 4 measurement ID, e.g. "G-XXXXXXX". */
  ga4Id: null as string | null,
  /** Plausible domain, e.g. "krowlabs.com". */
  plausibleDomain: null as string | null,
  /** Microsoft Clarity project ID (free heatmaps + session recordings). */
  clarityId: null as string | null,
};

/** Social profiles. Links left as null are hidden until a URL is added. */
export const socials: { label: string; url: string | null }[] = [
  { label: "LinkedIn", url: "https://www.linkedin.com/company/krow-labs/" },
  { label: "Instagram", url: "https://www.instagram.com/krow_labs/" },
  { label: "Behance", url: "https://www.behance.net/krowlabs" },
  { label: "Dribbble", url: "https://dribbble.com/krowlabs" },
];

/**
 * Showreel: drop the video into /public/video/ and set `video` (e.g. "/video/showreel.mp4").
 * Until then the poster image is shown with the play button.
 */
export const showreel = {
  video: "/video/showreel.mp4" as string | null,
  poster: "/video/showreel-poster.jpg",
};
