// Single source of truth for site-wide SEO constants: organization
// identity, markets served, and the keyword landing pages. Imported by
// the root layout (Organization JSON-LD), sitemap, footer and llms.txt
// generation so these never drift apart.

export const SITE_URL = "https://www.greyarc.co";

export const ORG = {
  name: "GreyArc Consulting",
  legalName: "Vanrao Distributors LLP",
  email: "info@greyarc.co",
  // Single public number (Sep 2026) — also used in the CMS contact block.
  telephone: "+91-8356914504",
  telephoneDisplay: "+91 8356914504",
  telephoneHref: "tel:+918356914504",
  linkedin: "https://in.linkedin.com/company/greyarcco",
  address: {
    streetAddress:
      "WeWork Zenia, 5th floor, Hiranandani Estate, Ghodbunder Rd, Thane (W)",
    addressLocality: "Thane",
    addressRegion: "Maharashtra",
    postalCode: "400607",
    addressCountry: "IN",
  },
};

// Markets GreyArc serves. Used for schema.org areaServed.
export const AREA_SERVED = [
  { "@type": "Country", name: "India" },
  { "@type": "Place", name: "Southeast Asia" },
  { "@type": "Country", name: "Indonesia" },
  { "@type": "Country", name: "Vietnam" },
  { "@type": "Country", name: "Thailand" },
  { "@type": "Country", name: "Malaysia" },
  { "@type": "Country", name: "Philippines" },
  { "@type": "Country", name: "Singapore" },
  { "@type": "Place", name: "Middle East" },
  { "@type": "Country", name: "United Arab Emirates" },
  { "@type": "Country", name: "Saudi Arabia" },
  { "@type": "Place", name: "Europe" },
];

export const KNOWS_ABOUT = [
  "Agrochemical supply chain consulting",
  "Crop protection operations",
  "Sales and operations planning (S&OP)",
  "Demand forecasting and forecast accuracy",
  "Agrochemical warehousing and depot operations",
  "Inventory optimization",
  "Toll manufacturing",
  "Agrochemical export enablement",
];

// Keyword landing pages (code-managed, not CMS). Order = display order.
export const EXPERTISE_PAGES = [
  {
    href: "/agrochemical-supply-chain-consulting",
    label: "Agrochemical Supply Chain Consulting",
  },
  { href: "/agrochemical-sop", label: "Agrochemical S&OP" },
  { href: "/agrochemical-planning", label: "Agrochemical Planning" },
  {
    href: "/agrochemical-forecast-accuracy",
    label: "Forecast Accuracy Improvement",
  },
  {
    href: "/agrochemical-warehousing-consulting",
    label: "Agrochemical Warehousing Consulting",
  },
];

export const MARKET_PAGES = [
  { href: "/markets/southeast-asia", label: "Southeast Asia" },
  { href: "/markets/middle-east", label: "Middle East & GCC" },
  { href: "/markets/europe", label: "Europe" },
];

// Informational guides (Article schema). Listed in the sitemap and footer.
export const GUIDE_PAGES = [
  { href: "/agrochemical-supply-chain", label: "Agrochemical Supply Chain Guide" },
];
