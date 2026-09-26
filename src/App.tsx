import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { DesktopScale } from "@/components/layout/DesktopScale";
import Index from "@/pages/Index";

const CaseStudy = lazy(() => import("@/pages/CaseStudy"));
const BrandIdentity = lazy(() => import("@/pages/services/BrandIdentity"));
const Cro = lazy(() => import("@/pages/services/Cro"));
const DigitalAdvertising = lazy(() => import("@/pages/services/DigitalAdvertising"));
const UiUxDesign = lazy(() => import("@/pages/services/UiUxDesign"));
const WebDevelopment = lazy(() => import("@/pages/services/WebDevelopment"));
const Work = lazy(() => import("@/pages/Work"));
const About = lazy(() => import("@/pages/About"));
const FreeAudit = lazy(() => import("@/pages/FreeAudit"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <DesktopScale>
        <Suspense fallback={<div className="min-h-screen bg-page" />}>
        <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/free-audit" element={<FreeAudit />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
        <Route path="/services/cro" element={<Cro />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
        <Route path="/services/brand-identity" element={<BrandIdentity />} />
        <Route path="/services/digital-advertising" element={<DigitalAdvertising />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </DesktopScale>
    </BrowserRouter>
  );
}
