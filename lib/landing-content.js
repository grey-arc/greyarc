// Copy for the code-managed keyword landing pages. Claims are limited to
// what GreyArc already states publicly (client results on
// /success-stories, team background on /credentials, the GRACE framework,
// the 60-day diagnostic). Do not add figures here that aren't backed by an
// actual engagement.

const PROOF = {
  forecast: {
    result: "+25% forecast accuracy",
    label: "Formulation company (₹600 Cr) — after standardising daily RM/SF/FG reporting across plant and warehouse",
  },
  stockouts: {
    result: "40% fewer stockouts",
    label: "Agrochemical distributor — forward S&OP with season-linked triggers and a supplier collaboration model",
  },
  fulfilment: {
    result: "+45% order fulfilment",
    label: "Seed company — SAP implementation configured for seed production cycles, with process re-engineering",
  },
  planning: {
    result: "30% faster planning cycles",
    label: "Standardised S&OP processes, SOP documentation and ERP-aligned dashboards",
  },
  exporter: {
    result: "Peak-season dispatch stabilised",
    label: "Leading agrochemical exporter (₹1,200 Cr) — warehouse overloading eliminated by rebalancing toller contribution",
  },
  efficiency: {
    result: "15–25% efficiency gain",
    label: "Across supply chain and depot management — measured by inventory turns, forecast accuracy and working capital released",
  },
};

const STATS = [
  { value: "110+", label: "years of combined agrochemical industry experience" },
  { value: "60 days", label: "from kickoff to first operational findings" },
  { value: "5 steps", label: "GRACE: Ground, Reveal, Analyse, Crystallise, Execute" },
];

export const LANDING_PAGES = {
  "agrochemical-supply-chain-consulting": {
    path: "/agrochemical-supply-chain-consulting",
    breadcrumb: "Agrochemical Supply Chain Consulting",
    serviceName: "Agrochemical supply chain consulting",
    metaTitle: "Agrochemical Supply Chain Consulting",
    metaDescription:
      "Agrochemical supply chain consulting for crop protection manufacturers and distributors: S&OP, forecasting, inventory, warehousing, tollers and distribution. India, SE Asia, Middle East, Europe.",
    eyebrow: "Agrochemical supply chain consultants",
    h1: "Agrochemical Supply Chain Consulting, Built Only for Crop Protection",
    lede:
      "GreyArc is a specialist agrochemical supply chain consulting firm. We help crop protection manufacturers, formulators and distributors plan to the crop calendar, release working capital trapped in the wrong stock, and get product to the distributor inside the spray window — led by practitioners who spent their careers inside the industry.",
    stats: STATS,
    sections: [
      {
        h2: "Why agrochemical supply chains need specialist consultants",
        body: [
          "Crop protection does not behave like FMCG or general chemicals. Demand compresses into narrow application windows driven by monsoon timing, pest and disease pressure and crop stage. Technical-grade inputs are volatile in price and availability. Much of the volume runs through tollers. Distribution reaches tens of thousands of dealers, and a forecast miss shows up as stock ageing against its label life or a missed season a customer won't forget.",
          "Generalist supply chain consultants spend the first months of an engagement learning this. Our founding team spent decades inside it — at Bayer CropScience, Aventis, Hoechst and leading Indian manufacturers — so an engagement starts on the real problem.",
        ],
      },
      {
        h2: "What our agrochemical supply chain consulting covers",
        bullets: [
          "Sales & Operations Planning (S&OP) designed around the crop calendar, not calendar quarters",
          "Demand forecasting and forecast accuracy improvement using field signals and distributor sell-through",
          "Inventory optimisation — safety stock for seasonal demand, SKU rationalisation, expiry exposure",
          "Warehouse and depot network design, FIFO/FEFO discipline and peak-season readiness",
          "Toller capacity planning and supply review across technical, formulation and packing",
          "Logistics and dispatch flow from plant to distributor during the season",
          "ERP/SAP process alignment so systems reflect how the business actually plans",
        ],
      },
      {
        h2: "How an engagement runs: the GRACE framework",
        body: [
          "Every engagement follows GRACE — Ground, Reveal, Analyse, Crystallise, Execute. We ground ourselves in your plants, tollers, warehouses and seasonal cycle; reveal the real bottleneck through a multi-layer diagnostic; quantify and prioritise by ROI; design a 90–180 day roadmap; and execute through lighthouse pilots governed by a Transformation Management Office. First operational findings typically arrive within 60 days of kickoff.",
        ],
      },
      {
        h2: "Who we work with",
        body: [
          "Agrochemical and crop protection manufacturers, formulators, exporters, distributors and seed companies — from ₹500 Cr mid-size players to multinational subsidiaries. We are headquartered in Thane, India and work with companies whose supply chains run through India, including importers and distributors in Southeast Asia, the Middle East and Europe.",
        ],
      },
    ],
    proof: [PROOF.forecast, PROOF.stockouts, PROOF.exporter, PROOF.efficiency],
    faqs: [
      {
        q: "What does an agrochemical supply chain consultant do?",
        a: "An agrochemical supply chain consultant diagnoses and fixes how a crop protection business plans, sources, makes, stores and delivers product — typically S&OP, demand forecasting, inventory, toller and plant planning, warehousing and distribution — with processes designed around seasonal, weather-driven demand rather than steady FMCG-style demand.",
      },
      {
        q: "How is GreyArc different from regulatory agrochemical consultants?",
        a: "Most firms that call themselves agrochemical consultants focus on product registration and regulatory dossiers. GreyArc focuses on operations: planning, supply chain, inventory, warehousing, manufacturing and distribution. We work alongside your regulatory partners rather than replacing them.",
      },
      {
        q: "How long does an agrochemical supply chain audit take?",
        a: "A structured diagnostic delivers first operational findings and a summary report within about 60 days of kickoff. Implementation roadmaps usually run 90–180 days, delivered through pilots that prove value before scaling.",
      },
      {
        q: "Do you work outside India?",
        a: "Yes. We are based in Thane, India, and work with crop protection companies in Southeast Asia, the Middle East and Europe — particularly those manufacturing, tolling or sourcing in India.",
      },
    ],
  },

  "agrochemical-sop": {
    path: "/agrochemical-sop",
    breadcrumb: "Agrochemical S&OP & Planning",
    serviceName: "Agrochemical S&OP and planning consulting",
    metaTitle: "Agrochemical S&OP & Planning Consulting",
    metaDescription:
      "Sales & Operations Planning (S&OP) for agrochemical and crop protection companies: crop-calendar demand review, toller-aware supply review, one operating forecast. 30% faster planning cycles.",
    eyebrow: "Agrochemical planning",
    h1: "Agrochemical S&OP: Planning Demand, Supply and Cash on the Crop Calendar",
    lede:
      "We design and run Sales & Operations Planning for agrochemical and crop protection companies — an S&OP cycle that moves with monsoon timing, pest pressure and cropping patterns, and gives sales, supply chain and finance one number to plan against.",
    stats: [
      { value: "30%", label: "faster planning and reporting cycles with standardised S&OP" },
      { value: "40%", label: "fewer stockouts after a forward, season-linked S&OP" },
      { value: "60 days", label: "from kickoff to first operational findings" },
    ],
    sections: [
      {
        h2: "Why generic S&OP breaks in agrochemicals",
        body: [
          "Textbook S&OP assumes demand that is roughly stable month to month. Agrochemical demand isn't: a late monsoon, a pest outbreak or a shift in cropping can move a season's plan by weeks with almost no warning, while technical-grade lead times and toller slots are locked in months earlier. A monthly cycle built for consumer goods reacts too late, and planning collapses back into firefighting between sales and supply chain.",
        ],
      },
      {
        h2: "What agrochemical S&OP looks like when it works",
        bullets: [
          "Demand review grounded in field signals — rainfall deviation, crop stage, distributor sell-through and historical seasonality, not trailing sales averages",
          "Supply review that accounts for toller capacity, technical availability and plant constraints alongside finished-goods stock",
          "Pre-season and in-season cadences: a longer-horizon Kharif/Rabi plan plus faster in-season reviews with season-linked triggers",
          "Reconciliation between sales ambition and what production, procurement and working capital can support — before it becomes a crisis",
          "An executive S&OP meeting that produces one operating forecast for the whole business",
          "KPIs that matter in the industry: forecast accuracy and bias by SKU-region, inventory age against label life, fill rate in the spray window",
        ],
      },
      {
        h2: "Agrochemical planning beyond S&OP",
        body: [
          "S&OP sits on top of the day-to-day planning layers, and we fix those too: production scheduling that flexes with weather and export timelines, procurement timing for volatile technicals, toller loading, and territory-level distribution planning so stock is positioned where the season will actually break.",
        ],
      },
      {
        h2: "How we implement it",
        body: [
          "We start with a diagnostic of your current planning process and data (the Ground and Reveal steps of our GRACE framework), design the S&OP calendar, roles, templates and dashboards, then run the first cycles alongside your team until they own it. The outcome is a planning process that survives the consultants leaving.",
        ],
      },
    ],
    proof: [PROOF.stockouts, PROOF.planning, PROOF.forecast],
    faqs: [
      {
        q: "What is S&OP in the agrochemical industry?",
        a: "Sales & Operations Planning in agrochemicals is a recurring cross-functional process that reconciles demand forecasts with supply capacity (plants, tollers, technical-grade inputs) and working capital, on a cycle aligned to the crop calendar, so the business commits to one operating plan for the season.",
      },
      {
        q: "How often should an agrochemical company run S&OP?",
        a: "Most benefit from a monthly executive cycle plus a longer pre-season plan for each major season, and faster weekly in-season reviews during peak application windows when demand signals move quickly.",
      },
      {
        q: "Do we need new software to implement S&OP?",
        a: "Usually not at first. We design the process, roles and templates to work with your existing ERP (often SAP) and reporting, and only recommend planning tools once the process is stable and the gaps are clear.",
      },
    ],
  },

  "agrochemical-forecast-accuracy": {
    path: "/agrochemical-forecast-accuracy",
    breadcrumb: "Forecast Accuracy Improvement",
    serviceName: "Agrochemical demand forecasting and forecast accuracy improvement",
    metaTitle: "Agrochemical Forecast Accuracy Improvement",
    metaDescription:
      "Improve agrochemical demand forecast accuracy with crop-calendar forecasting, field signals and distributor sell-through. GreyArc clients have improved forecast accuracy by 25%.",
    eyebrow: "Demand forecasting",
    h1: "Agrochemical Forecast Accuracy Improvement",
    lede:
      "Forecast misses in crop protection are expensive: stock ageing against its label, credit tied up at distributors, or product missing in the spray window. We help agrochemical manufacturers and distributors measure, diagnose and improve forecast accuracy — one client improved it by 25%.",
    stats: [
      { value: "+25%", label: "forecast accuracy improvement at a ₹600 Cr formulation company" },
      { value: "40%", label: "fewer stockouts after forward S&OP at a distributor" },
      { value: "60 days", label: "from kickoff to first findings" },
    ],
    sections: [
      {
        h2: "Why agrochemical forecasts are hard to get right",
        bullets: [
          "Demand is weather- and pest-driven, concentrated into short application windows",
          "Secondary sales at distributors and retailers are poorly visible, so head office forecasts primary billing, not consumption",
          "Registrations and labels change product availability season to season",
          "Sales forecasts are often targets in disguise, creating systematic bias",
          "Plant, warehouse and sales systems report different numbers for the same stock",
        ],
      },
      {
        h2: "How we improve forecast accuracy",
        body: [
          "Accuracy improves when the basics are fixed before the models. We typically work in four steps:",
        ],
        bullets: [
          "Measure properly: forecast accuracy and bias by SKU, region and horizon, so the problem is visible and owned",
          "Fix the data: one version of stock and sales across plant, warehouse and ERP — standardising daily RM/SF/FG reporting was what delivered our client's 25% gain",
          "Add the right signals: crop stage, rainfall deviation, pest alerts and distributor sell-through alongside history",
          "Embed it in S&OP: consensus forecasting with clear accountability, reviewed in-season when signals move",
        ],
      },
      {
        h2: "What better forecasts are worth",
        body: [
          "Better forecast accuracy shows up directly in working capital released, fewer season-end write-offs, higher fill rates in the spray window and calmer planning between sales and supply chain. Across engagements, our clients have seen 15–25% operational efficiency improvements measured by inventory turns, forecast accuracy and working capital.",
        ],
      },
    ],
    proof: [PROOF.forecast, PROOF.stockouts, PROOF.efficiency],
    faqs: [
      {
        q: "What is a good forecast accuracy for an agrochemical company?",
        a: "It depends on the level you measure at — accuracy is naturally higher at brand-national level than at SKU-depot level. Rather than a single benchmark, we set a baseline by SKU, region and horizon, track bias alongside accuracy, and target improvement where errors cost the most working capital or service.",
      },
      {
        q: "Can AI or machine learning fix agrochemical forecasting?",
        a: "Models help once data and process are sound. Most accuracy gains we see come first from clean, consistent stock and sales data, secondary-sales visibility and removing bias from sales inputs — then better models add further gains on top.",
      },
      {
        q: "How quickly can forecast accuracy improve?",
        a: "Measurement and data fixes can show results within the first season. Our diagnostic produces findings within about 60 days, and one client improved forecast accuracy by 25% after reporting standardisation.",
      },
    ],
  },

  "agrochemical-warehousing-consulting": {
    path: "/agrochemical-warehousing-consulting",
    breadcrumb: "Agrochemical Warehousing Consulting",
    serviceName: "Agrochemical warehousing and depot consulting",
    metaTitle: "Agrochemical Warehousing Solutions & Consulting",
    metaDescription:
      "Agrochemical warehousing solutions: depot network design, FIFO/FEFO compliance, safe drum handling, peak-season space planning and new warehouse projects for crop protection companies.",
    eyebrow: "Agrochemical warehousing solutions",
    h1: "Agrochemical Warehousing Solutions and Depot Consulting",
    lede:
      "We are not a 3PL — we are the consultants who make your warehouses and depots work. GreyArc designs agrochemical warehousing solutions for crop protection companies: right-sized depot networks, FIFO/FEFO discipline, safe handling of technicals and formulations, and warehouses ready before the season breaks.",
    stats: STATS,
    sections: [
      {
        h2: "Where agrochemical warehouse margin quietly disappears",
        body: [
          "Warehouse and depot problems in crop protection rarely show up as one dramatic failure. They show up as slow, silent losses: a drum damaged in handling, space mismanaged ahead of a season, stock ageing in the wrong depot while another location runs short, or a peak-season dispatch queue that misses the spray window.",
        ],
      },
      {
        h2: "Our agrochemical warehousing solutions",
        bullets: [
          "Depot network design — number and location of depots right-sized to regional demand and distributor density",
          "FIFO/FEFO compliance across multi-location networks to eliminate seasonal write-offs",
          "Storage norms for technical vs. formulated product, segregation and palletisation",
          "Drum and container handling practices that reduce damage, loss and safety risk",
          "Pre-season space and labour planning to prevent peak-season overflow",
          "Dispatch flow from warehouse release to distributor delivery",
          "New warehouse and factory erection or modernisation consulting — layout, capacity and process design",
        ],
      },
      {
        h2: "Warehousing connected to planning",
        body: [
          "Most warehouse overload is a planning problem showing up on the floor. For a ₹1,200 Cr exporter, warehouse overloading was eliminated by rebalancing toller contribution upstream, and dispatch visibility stabilised before peak season. That's why our warehousing work links directly to S&OP, inventory and toller planning.",
        ],
      },
      {
        h2: "Training the teams who run it",
        body: [
          "Discipline only lasts if the depot team owns it. We run focused 1–2 day warehouse operations workshops covering FIFO/FEFO, seasonal peak handling, storage and handling compliance, and the silent losses that only show up at stock audit.",
        ],
      },
    ],
    proof: [PROOF.exporter, PROOF.efficiency],
    faqs: [
      {
        q: "Do you provide agrochemical warehouse space or 3PL services?",
        a: "No. GreyArc is a consulting firm. We help you design, fix and run your own or your 3PL's agrochemical warehouses and depots better — network design, processes, compliance, handling and peak-season readiness — and can support new warehouse projects.",
      },
      {
        q: "What is FEFO and why does it matter for agrochemicals?",
        a: "FEFO (first expired, first out) dispatches the stock closest to expiry first. Agrochemical products have label and shelf-life limits, so FEFO discipline across every depot prevents stock ageing out of sellable condition and seasonal write-offs.",
      },
      {
        q: "Can you help design a new agrochemical warehouse?",
        a: "Yes. We consult on new warehouse and factory erection and modernisation — capacity sizing against seasonal peaks, layout, storage segregation for technicals and formulations, material handling and operating processes.",
      },
    ],
  },

  "markets/southeast-asia": {
    path: "/markets/southeast-asia",
    breadcrumb: "Southeast Asia",
    serviceName: "Agrochemical supply chain consulting in Southeast Asia",
    areaServed: [
      { "@type": "Place", name: "Southeast Asia" },
      { "@type": "Country", name: "Indonesia" },
      { "@type": "Country", name: "Vietnam" },
      { "@type": "Country", name: "Thailand" },
      { "@type": "Country", name: "Malaysia" },
      { "@type": "Country", name: "Philippines" },
      { "@type": "Country", name: "Singapore" },
    ],
    metaTitle: "Agrochemical Consultants in Southeast Asia",
    metaDescription:
      "Agrochemical supply chain and S&OP consulting for crop protection companies in Indonesia, Vietnam, Thailand, Malaysia, the Philippines and Singapore — especially those sourcing from India.",
    eyebrow: "Markets — Southeast Asia",
    h1: "Agrochemical Supply Chain Consulting in Southeast Asia",
    lede:
      "Southeast Asia's crop protection companies plan against monsoons, multiple cropping cycles and long import supply lines. GreyArc brings crop-calendar S&OP, forecast accuracy and inventory discipline to manufacturers, formulators and distributors across Indonesia, Vietnam, Thailand, Malaysia, the Philippines and Singapore.",
    stats: STATS,
    sections: [
      {
        h2: "The planning problem in Southeast Asian crop protection",
        body: [
          "Demand across the region is shaped by monsoon timing and by rice, palm oil, fruit and vegetable cropping cycles that differ country by country. Many companies import technicals or finished formulations — frequently from India — so a forecast miss is compounded by long lead times and minimum order quantities. The result is familiar: excess stock of the wrong products and shortages of the right ones when the season breaks.",
        ],
      },
      {
        h2: "How we help",
        bullets: [
          "S&OP designed around each country's crop calendar, with one regional operating plan",
          "Forecast accuracy improvement using crop stage, rainfall and distributor sell-through",
          "Inventory and safety-stock policy that accounts for import lead times and MOQs",
          "Supplier and toller planning with Indian manufacturing partners",
          "Warehouse, depot and distribution operations improvement",
        ],
      },
      {
        h2: "Why an India-based specialist",
        body: [
          "India is one of the region's largest sources of technical-grade actives and formulations. Our team has spent decades inside Indian and multinational agrochemical operations, so we understand both sides of the supply line — how Indian plants and tollers plan, and what a Southeast Asian importer needs from them. We also help source toll manufacturing partners in India.",
        ],
      },
    ],
    proof: [PROOF.forecast, PROOF.stockouts, PROOF.planning],
    faqs: [
      {
        q: "Does GreyArc work with companies in Southeast Asia?",
        a: "Yes. We are headquartered in Thane, India and work with crop protection manufacturers, formulators and distributors in Southeast Asia, combining remote diagnostics with on-site working sessions.",
      },
      {
        q: "Do you handle pesticide registration in Southeast Asia?",
        a: "No — GreyArc focuses on operations: S&OP, forecasting, inventory, warehousing, manufacturing and sourcing. We work alongside your regulatory partners.",
      },
    ],
  },

  "markets/middle-east": {
    path: "/markets/middle-east",
    breadcrumb: "Middle East & GCC",
    serviceName: "Agrochemical supply chain consulting in the Middle East",
    areaServed: [
      { "@type": "Place", name: "Middle East" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "Country", name: "Oman" },
      { "@type": "Country", name: "Qatar" },
      { "@type": "Country", name: "Kuwait" },
      { "@type": "Country", name: "Bahrain" },
    ],
    metaTitle: "Agrochemical Consultants — Middle East & GCC",
    metaDescription:
      "Agrochemical supply chain, inventory and warehousing consulting for crop protection importers, distributors and re-exporters in the UAE, Saudi Arabia and the GCC — especially those sourcing from India.",
    eyebrow: "Markets — Middle East & GCC",
    h1: "Agrochemical Supply Chain Consulting for the Middle East and GCC",
    lede:
      "Crop protection businesses in the UAE, Saudi Arabia and the wider GCC are import-led, often run regional re-export hubs, and plan against long supply lines. GreyArc helps importers, distributors and regional traders plan better, hold the right stock and run compliant, efficient warehouses.",
    stats: STATS,
    sections: [
      {
        h2: "What makes Middle East agrochemical supply chains different",
        body: [
          "Most crop protection product in the region is imported, and hubs such as the UAE serve markets across the Gulf, the wider Middle East and East Africa. That means planning is dominated by supplier lead times, shipping schedules and re-export demand from multiple markets, while hot-climate storage puts extra pressure on warehouse discipline and shelf life.",
        ],
      },
      {
        h2: "How we help",
        bullets: [
          "Demand planning and S&OP across multiple destination markets from a regional hub",
          "Inventory policy that balances long import lead times against working capital",
          "Supplier planning and collaboration with Indian manufacturers and tollers",
          "Warehouse operations: FEFO discipline, storage segregation and handling for agrochemical products",
          "Sourcing and qualifying toll manufacturing partners in India",
        ],
      },
      {
        h2: "Why an India-based specialist",
        body: [
          "India is a major supplier of agrochemicals to the Gulf. Our team has spent decades inside Indian and multinational crop protection companies, so we can fix the supply line from both ends — how Indian plants and tollers plan and ship, and what a GCC distributor needs to hold the right stock at the right time.",
        ],
      },
    ],
    proof: [PROOF.stockouts, PROOF.exporter, PROOF.efficiency],
    faqs: [
      {
        q: "Does GreyArc work with agrochemical companies in the UAE and Saudi Arabia?",
        a: "Yes. We work with importers, distributors and regional traders across the GCC, combining remote diagnostics with on-site sessions, and help them work more effectively with Indian suppliers.",
      },
      {
        q: "Can GreyArc help us find an Indian toll manufacturer?",
        a: "Yes. Toll manufacturing partner origination is one of our core services — identifying, assessing and structuring partnerships with Indian formulators and tollers.",
      },
    ],
  },

  "markets/europe": {
    path: "/markets/europe",
    breadcrumb: "Europe",
    serviceName: "Agrochemical supply chain consulting for European companies",
    areaServed: [{ "@type": "Place", name: "Europe" }],
    metaTitle: "Agrochemical Supply Chain Consulting — Europe",
    metaDescription:
      "Supply chain consulting for European crop protection companies sourcing actives, intermediates and formulations from India: supplier planning, toll manufacturing, forecasting and inventory.",
    eyebrow: "Markets — Europe",
    h1: "Agrochemical Supply Chain Consulting for European Crop Protection Companies",
    lede:
      "European crop protection companies increasingly rely on India for actives, intermediates and toll-manufactured formulations. GreyArc helps them build a reliable Indian supply base — supplier and toller planning, forecast collaboration and inventory policy — and helps Indian manufacturers meet European expectations.",
    stats: STATS,
    sections: [
      {
        h2: "The European sourcing challenge",
        body: [
          "European buyers diversifying supply toward India face long lead times, seasonal demand at home that doesn't match supplier capacity cycles, and the need for suppliers who can plan reliably and document everything. When forecasts aren't shared and capacity isn't reserved, the result is expediting, missed seasons and excess safety stock.",
        ],
      },
      {
        h2: "How we help European companies",
        bullets: [
          "Identifying and assessing Indian manufacturers and toll partners",
          "Forecast sharing and collaborative planning with Indian suppliers",
          "Capacity reservation and supply review aligned to the European season",
          "Inventory and safety-stock policy for long, variable lead times",
          "Operational due diligence on supplier plants, warehouses and planning maturity",
        ],
      },
      {
        h2: "How we help Indian exporters to Europe",
        body: [
          "On the other side, we help Indian agrochemical exporters build the planning maturity, reporting discipline and operational reliability European customers expect — the same work that stabilised peak-season dispatch for a ₹1,200 Cr exporter.",
        ],
      },
    ],
    proof: [PROOF.exporter, PROOF.forecast, PROOF.efficiency],
    faqs: [
      {
        q: "Does GreyArc work with European agrochemical companies?",
        a: "Yes — primarily European crop protection companies sourcing from or manufacturing in India, and Indian manufacturers supplying European customers.",
      },
      {
        q: "Do you provide EU regulatory or REACH services?",
        a: "No. GreyArc focuses on operations, supply chain and sourcing. We work alongside your regulatory advisers.",
      },
    ],
  },
};

export function landingMetadata(key) {
  const p = LANDING_PAGES[key];
  const url = `https://www.greyarc.co${p.path}`;
  return {
    title: { absolute: `${p.metaTitle} | GreyArc` },
    description: p.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: "GreyArc",
      title: p.metaTitle,
      description: p.metaDescription,
      url,
    },
    twitter: { card: "summary_large_image", title: p.metaTitle, description: p.metaDescription },
  };
}
