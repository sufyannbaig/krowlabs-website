export type ServiceKey = "cro" | "web-development" | "ui-ux-design" | "brand-identity" | "digital-advertising";

export const services: Record<ServiceKey, { name: string; short: string; path: string }> = {
  cro: { name: "CRO & Conversion-Focused Design", short: "CRO", path: "/services/cro" },
  "web-development": { name: "Website Development", short: "Web Development", path: "/services/web-development" },
  "ui-ux-design": { name: "UI/UX Design", short: "UI/UX Design", path: "/services/ui-ux-design" },
  "brand-identity": { name: "Brand Identity", short: "Brand Identity", path: "/services/brand-identity" },
  "digital-advertising": {
    name: "Digital Advertising & Creative",
    short: "Ad Creative",
    path: "/services/digital-advertising",
  },
};
