import { analytics } from "@/content/site";

type Win = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  plausible?: (event: string, opts?: { props?: Record<string, string> }) => void;
  clarity?: (...args: unknown[]) => void;
};

function addScript(src: string, attrs: Record<string, string> = {}) {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  Object.entries(attrs).forEach(([k, v]) => s.setAttribute(k, v));
  document.head.appendChild(s);
}

/** Loads whichever analytics tools are configured in src/content/site.ts. Safe to call once at startup. */
export function initAnalytics() {
  if (typeof window === "undefined") return;
  const w = window as Win;

  // The GA4 tag is normally already in index.html <head> (so Google's tag checker finds it);
  // only inject it here if it is missing, e.g. after changing ga4Id without updating index.html.
  if (analytics.ga4Id && !w.gtag) {
    addScript(`https://www.googletagmanager.com/gtag/js?id=${analytics.ga4Id}`);
    w.dataLayer = w.dataLayer || [];
    w.gtag = function gtag() {
      // gtag expects the raw `arguments` object
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer!.push(arguments);
    };
    w.gtag("js", new Date());
    w.gtag("config", analytics.ga4Id);
  }

  if (analytics.plausibleDomain) {
    addScript("https://plausible.io/js/script.js", { "data-domain": analytics.plausibleDomain, defer: "" });
  }

  if (analytics.clarityId) {
    const c = function clarity(...args: unknown[]) {
      ((c as unknown as { q: unknown[] }).q ||= []).push(args);
    };
    w.clarity = w.clarity || c;
    addScript(`https://www.clarity.ms/tag/${analytics.clarityId}`);
  }
}

/** Sends a conversion event to every configured tool (no-op when none are set). */
export function track(event: string, props: Record<string, string> = {}) {
  const w = window as Win;
  w.gtag?.("event", event, props);
  w.plausible?.(event, { props });
  w.clarity?.("event", event);
}

// Page views on client-side route changes are recorded automatically: GA4 through enhanced measurement
// ("page changes based on browser history events"), Plausible and Clarity natively. Sending our own
// page_view as well would double-count every page.
