/**
 * Site-wide content switches. Edit these in one place.
 */

/**
 * Where every "Book a Free Strategy Call" / "Book a Discovery Call" / "Get a Free Conversion Audit"
 * button points. Replace with the booking link (e.g. a Calendly URL). "#contact" scrolls to the footer.
 */
export const bookingUrl = "#contact";

/** Social profiles. Links left as null are hidden until a URL is added. */
export const socials: { label: string; url: string | null }[] = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/sufyanbaig/" },
  { label: "Instagram", url: null },
  { label: "Behance", url: "https://www.behance.net/sufyannbaig" },
  { label: "Dribbble", url: null },
];

/**
 * Showreel: drop the video into /public/video/ and set `video` (e.g. "/video/showreel.mp4").
 * Until then the poster image is shown with the play button.
 */
export const showreel = {
  video: null as string | null,
  poster: "/images/7eefb.jpg",
};
