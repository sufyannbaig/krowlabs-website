import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Index from "@/pages/Index";
import BrandIdentity from "@/pages/services/BrandIdentity";
import Cro from "@/pages/services/Cro";
import DigitalAdvertising from "@/pages/services/DigitalAdvertising";
import UiUxDesign from "@/pages/services/UiUxDesign";
import WebDevelopment from "@/pages/services/WebDevelopment";

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
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services/cro" element={<Cro />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
        <Route path="/services/brand-identity" element={<BrandIdentity />} />
        <Route path="/services/digital-advertising" element={<DigitalAdvertising />} />
        <Route path="*" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}
