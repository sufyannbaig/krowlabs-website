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
 * Where free-audit requests go. Set ONE of these (the first one set wins):
 *
 * 1. `auditFormWeb3FormsKey`: easiest. Get a free access key at https://web3forms.com by entering
 *    sales@krowlabs.com; every request then arrives in that inbox as an email. The key is safe to publish.
 * 2. `auditFormEndpoint`: any URL that accepts a JSON POST (Formspree "https://formspree.io/f/xxxx",
 *    a Zapier/Make webhook, or a Lovable/Supabase edge function).
 *
 * While both are null the form opens a pre-filled email to sales@krowlabs.com in the visitor's mail app,
 * which works but loses visitors who have no mail app set up. Set one before launch.
 */
export const auditFormWeb3FormsKey: string | null = "afbf932d-db45-42a1-ab58-c5ca09542936";
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
