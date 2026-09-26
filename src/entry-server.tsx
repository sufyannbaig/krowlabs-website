/**
 * Build-time prerendering (used by the seoPages plugin in vite.config.ts, never shipped to browsers).
 * Renders a route to static HTML so crawlers that do not run JavaScript (AI assistants, link previews,
 * some search engines) still see the full page content. The browser app then renders normally on top.
 */
import { StrictMode } from "react";
import { prerender } from "react-dom/static";
import { StaticRouter } from "react-router-dom";
import { AppRoutes } from "./App";

async function renderOnce(url: string) {
  const { prelude } = await prerender(
    <StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
    // Never split big sections out into a placeholder + swap script: static pages ship complete HTML.
    { progressiveChunkSize: Number.POSITIVE_INFINITY },
  );
  return new Response(prelude).text();
}

export async function render(url: string): Promise<string> {
  // Pages are lazy-loaded. The first pass loads the page's code; the second renders it inline
  // (a single pass would emit a loading placeholder plus a script that swaps the page in later,
  // which does not hydrate cleanly).
  await renderOnce(url);
  return renderOnce(url);
}
