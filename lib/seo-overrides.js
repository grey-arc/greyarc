// SEO overrides for CMS-driven service pages (Oct 2026 keyword map).
//
// Service records live in MongoDB and their `title` doubles as the card
// label on /services, so search-facing copy is kept here in code instead:
// - `title`: full <title> tag (rendered as absolute — no "| GreyArc" appended)
// - `description`: meta description (≤155 chars so Google doesn't truncate)
// - `h1`: on-page H1, keyword-led; the CMS title stays as the card label
// Any slug not listed falls back to the CMS values, so new services still work.

export const SERVICE_SEO = {
  inventory: {
    title: "Agrochemical Inventory Optimization – 40% Fewer Stockouts",
    description:
      "Right stock at the right depot before the season. Inventory norms, near-expiry control and liquidation planning for agrochemical companies.",
    h1: "Agrochemical Inventory Optimization",
  },
  manufacturing: {
    title: "Agrochemical Manufacturing Consulting | Plant OpEx – GreyArc",
    description:
      "OEE, batch yield, changeover and capacity debottlenecking for technical and formulation plants. Led by 30+ year plant veterans. Book a call.",
    h1: "Agrochemical Manufacturing & Operational Excellence Consulting",
  },
  logistics: {
    title: "Agrochemical Logistics & Distribution Network Consulting",
    description:
      "Depot network design, CFA performance and freight cost-to-serve for crop protection companies across India. Lower cost, faster dispatch.",
    h1: "Agrochemical Logistics & Distribution Network Consulting",
  },
  erp: {
    title: "SAP & ERP Implementation for Agrochemical Companies",
    description:
      "SAP MM/WM and ERP rollouts configured for seasonal agrochemical and seed businesses. Client result: order fulfilment up 45%. Talk to GreyArc.",
    h1: "SAP & ERP Implementation for Agrochemical Companies",
  },
  sales: {
    title: "Agrochemical Sales Consulting | Distributor Performance",
    description:
      "Sales-force effectiveness, distributor management and liquidation tracking for crop protection companies. Grow secondary sales. Talk to us.",
    h1: "Agrochemical Sales & Customer Experience Consulting",
  },
  // Owns "demand planning"; "S&OP" is owned by /agrochemical-sop.
  "sop-demand-forecasting": {
    title: "Crop Protection Demand Planning & Forecasting | GreyArc",
    description:
      "Territory-level demand planning for pesticides and crop protection SKUs, linked to a monthly S&OP cycle. Fewer stockouts, less dead stock.",
    h1: "Crop Protection Demand Planning & Forecasting",
  },
  // Owns "depot management / FEFO"; "warehousing" is owned by
  // /agrochemical-warehousing-consulting.
  "warehouse-depot-operations": {
    title: "Agrochemical Depot Management & FEFO Compliance | GreyArc",
    description:
      "Depot audits, FIFO/FEFO compliance and CFA governance across multi-location agrochemical networks. Eliminate seasonal write-offs.",
    h1: "Agrochemical Depot Management & FEFO Compliance",
  },
  "export-offshore-market-entry": {
    title: "Agrochemical Export Consulting & Offshore Market Entry",
    description:
      "Help Indian agrochemical manufacturers enter SE Asia, Middle East and Europe: partner search, offshore structuring and export readiness.",
    h1: "Agrochemical Export & Offshore Market Entry Consulting",
  },
  "toll-manufacturing-origination": {
    title: "Agrochemical Toll Manufacturing Partner Sourcing India",
    description:
      "Find, vet and contract the right toll or contract manufacturer for technicals and formulations in India. Capacity, quality and cost checked.",
    h1: "Agrochemical Toll Manufacturing Partner Sourcing",
  },
  "training-workshops": {
    title: "Agrochemical Training Workshops | Supply Chain, Plant, Sales",
    description:
      "In-house workshops for agrochemical teams: warehouse ops, S&OP, manufacturing, QC and distributor sales. Practitioner-led. Enquire now.",
    h1: "Agrochemical Training Workshops",
  },
};

// Cross-links between pages that share a topic, so each keeps its own
// primary keyword but Google sees which page owns the broader term.
export const SERVICE_RELATED = {
  "sop-demand-forecasting": {
    href: "/agrochemical-sop",
    label: "Agrochemical S&OP consulting",
  },
  "warehouse-depot-operations": {
    href: "/agrochemical-warehousing-consulting",
    label: "Agrochemical warehousing consulting",
  },
  inventory: {
    href: "/agrochemical-supply-chain-consulting",
    label: "Agrochemical supply chain consulting",
  },
  logistics: {
    href: "/agrochemical-supply-chain-consulting",
    label: "Agrochemical supply chain consulting",
  },
};
