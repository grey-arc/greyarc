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
    seoTitle: "Agrochemical Supply Chain Consulting India | GreyArc",
    metaDescription:
      "Fix forecast gaps, depot stockouts and working-capital leaks. Senior ex-Bayer practitioners; first findings in 60 days. Talk to GreyArc.",
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
    relatedLinks: [
      { href: "/agrochemical-supply-chain", label: "Agrochemical supply chain guide", note: "How the chain works and where it breaks" },
      { href: "/services/logistics", label: "Logistics & distribution network", note: "Depot network design and CFA performance" },
      { href: "/services/toll-manufacturing-origination", label: "Toll manufacturing partner sourcing", note: "Find and contract the right tollers" },
      { href: "/services/sales", label: "Sales & distributor performance", note: "Secondary sales and liquidation tracking" },
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
    seoTitle: "Agrochemical S&OP Consulting | Season-Ready Planning",
    metaDescription:
      "Sales & operations planning built for monsoon-driven demand. Monthly S&OP cycles, season triggers, 30% faster planning. GreyArc consultants.",
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
    relatedLinks: [
      { href: "/agrochemical-planning", label: "Agrochemical planning", note: "Production, procurement and depot plans that feed S&OP" },
      { href: "/services/sop-demand-forecasting", label: "Crop protection demand planning", note: "Territory-level demand plans" },
      { href: "/services/training-workshops", label: "S&OP and planning workshops", note: "Train the team that runs the cycle" },
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
    seoTitle: "Agrochemical Forecast Accuracy Improvement (+25%) | GreyArc",
    metaDescription:
      "Raise forecast accuracy for crop protection SKUs across seasons and territories. Client result: +25% accuracy. Methods, KPIs and a 60-day plan.",
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
    relatedLinks: [
      { href: "/services/sop-demand-forecasting", label: "Crop protection demand planning", note: "Territory-level forecasting" },
      { href: "/agrochemical-planning", label: "Agrochemical planning", note: "Turn better forecasts into better plans" },
      { href: "/services/sales", label: "Sales & distributor performance", note: "Secondary-sales visibility" },
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
    seoTitle: "Agrochemical Warehousing Consulting & Solutions | GreyArc",
    metaDescription:
      "Warehouse design, FEFO compliance and depot audits for pesticide and crop protection stock. Cut write-offs before peak season. Talk to us.",
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
    relatedLinks: [
      { href: "/services/warehouse-depot-operations", label: "Depot management & FEFO compliance", note: "Audits and CFA governance" },
      { href: "/services/logistics", label: "Logistics & distribution network", note: "Depot network design" },
      { href: "/services/training-workshops", label: "Warehouse operations workshops", note: "Practical training for depot teams" },
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
    seoTitle: "Agrochemical Consultants Southeast Asia | GreyArc",
    metaDescription:
      "Operations and market-entry consulting for agrochemical companies in Vietnam, Indonesia, Thailand and the Philippines. Talk to GreyArc.",
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
    relatedLinks: [
      { href: "/services/toll-manufacturing-origination", label: "Toll manufacturing partner sourcing in India" },
      { href: "/services/export-offshore-market-entry", label: "Export & offshore market entry" },
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
    seoTitle: "Agrochemical Consultants Middle East & GCC | GreyArc",
    metaDescription:
      "Supply chain, warehousing and distribution consulting for agrochemical companies across the GCC and wider Middle East.",
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
    relatedLinks: [
      { href: "/services/toll-manufacturing-origination", label: "Toll manufacturing partner sourcing in India" },
      { href: "/services/export-offshore-market-entry", label: "Export & offshore market entry" },
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
    seoTitle: "Agrochemical Operations Consultants for Europe | GreyArc",
    metaDescription:
      "India sourcing, toll manufacturing and supply chain support for European crop protection companies buying from or building in India.",
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
    relatedLinks: [
      { href: "/services/toll-manufacturing-origination", label: "Toll manufacturing partner sourcing in India" },
      { href: "/services/export-offshore-market-entry", label: "Export & offshore market entry" },
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

  "agrochemical-planning": {
    path: "/agrochemical-planning",
    breadcrumb: "Agrochemical Planning",
    serviceName: "Agrochemical planning consulting",
    metaTitle: "Agrochemical Planning Consulting",
    seoTitle: "Agrochemical Planning: Season, Production & Procurement",
    metaDescription:
      "Agrochemical planning that follows the crop calendar: season plans, production and toller scheduling, technical procurement and depot stock positioning.",
    eyebrow: "Agrochemical planning",
    h1: "Agrochemical Planning: From Season Plan to Spray Window",
    lede:
      "Good agrochemical planning decides months in advance what to make, buy and position, then adjusts fast when the monsoon, pest pressure or cropping moves. GreyArc builds the planning layers that crop protection manufacturers and distributors run on, from the annual season plan to weekly production, procurement and depot decisions.",
    stats: [
      { value: "30%", label: "faster planning and reporting cycles with standardised processes" },
      { value: "40%", label: "fewer stockouts after season-linked planning at a distributor" },
      { value: "60 days", label: "from kickoff to first operational findings" },
    ],
    sections: [
      {
        h2: "Why planning is harder in agrochemicals",
        body: [
          "Most of a crop protection company's volume moves in a few weeks of each Kharif and Rabi season, but the decisions that make or break those weeks are taken months earlier: technical-grade purchases with long and volatile lead times, toller slots booked well ahead, packing material, and how much stock to push to which depot. When the season breaks early, late or somewhere unexpected, a plan built on last year's averages fails.",
          "Planning in this industry is therefore less about one forecast and more about a set of linked decisions, each with its own horizon, that have to be revisited as field signals arrive.",
        ],
      },
      {
        h2: "The planning layers we design and fix",
        bullets: [
          "Season planning: the Kharif/Rabi volume, mix and working-capital plan, agreed across sales, supply chain and finance",
          "Production planning and scheduling: plant and toller loading that flexes with weather and export timelines",
          "Procurement planning: timing and quantities for technical-grade actives, intermediates and packing material",
          "Distribution and depot planning: positioning stock where the season will break, at territory level",
          "Inventory planning: safety stock and reorder points for seasonal, weather-driven demand, and near-expiry control",
          "Monthly S&OP: the review where all these plans are reconciled into one operating plan",
        ],
      },
      {
        h2: "How planning connects to S&OP",
        body: [
          "S&OP is the monthly management process that reconciles demand, supply and cash. The planning layers above are what feed it and what carry out its decisions. Companies that run S&OP meetings without fixing the underlying production, procurement and depot plans get a good meeting and the same firefighting. We work on both levels, so the decisions taken in S&OP actually change what gets made, bought and shipped.",
        ],
      },
      {
        h2: "How an engagement runs",
        body: [
          "We start with a diagnostic of your current plans, data and decision rights (the Ground and Reveal steps of our GRACE framework), then design the planning calendar, horizons, templates and KPIs, and run the first cycles alongside your team until they own them. First findings typically land within 60 days of kickoff.",
        ],
      },
    ],
    proof: [PROOF.stockouts, PROOF.planning, PROOF.exporter],
    relatedLinks: [
      { href: "/agrochemical-sop", label: "Agrochemical S&OP consulting", note: "The monthly process that ties the plans together" },
      { href: "/services/sop-demand-forecasting", label: "Crop protection demand planning", note: "Territory-level demand plans and forecasting" },
      { href: "/agrochemical-forecast-accuracy", label: "Forecast accuracy improvement", note: "Measure, diagnose and reduce forecast error" },
      { href: "/services/toll-manufacturing-origination", label: "Toll manufacturing partner sourcing", note: "Find and contract the right toller capacity" },
      { href: "/services/warehouse-depot-operations", label: "Depot management & FEFO compliance", note: "Run depots to the plan, without write-offs" },
      { href: "/services/logistics", label: "Logistics & distribution network", note: "Depot network design and dispatch planning" },
    ],
    faqs: [
      {
        q: "What does agrochemical planning include?",
        a: "Agrochemical planning covers the season plan (volume, mix and working capital for Kharif and Rabi), production and toller scheduling, procurement of technical-grade inputs and packing material, distribution and depot stock positioning, and inventory policy, all reconciled through a monthly S&OP process.",
      },
      {
        q: "How far ahead should an agrochemical company plan?",
        a: "Most need a 12–18 month horizon for capacity and technical procurement, a season horizon for volume and mix, and short weekly cycles during the season. The right horizons depend on your lead times for actives, toller commitments and how concentrated your demand is.",
      },
      {
        q: "Is agrochemical planning the same as S&OP?",
        a: "No. S&OP is the monthly cross-functional review where demand, supply and cash plans are reconciled into one operating plan. Planning includes the detailed production, procurement, inventory and distribution plans that feed S&OP and execute its decisions.",
      },
    ],
  },

  "agrochemical-supply-chain": {
    path: "/agrochemical-supply-chain",
    kind: "article",
    datePublished: "2026-10-08",
    breadcrumb: "Agrochemical Supply Chain Guide",
    serviceName: "Agrochemical supply chain",
    metaTitle: "Agrochemical Supply Chain: A Practical Guide",
    seoTitle: "Agrochemical Supply Chain: How It Works & How to Fix It",
    metaDescription:
      "How the agrochemical supply chain works, from technical-grade actives to the farmer, why it is so hard to run in India, and the levers that improve it.",
    eyebrow: "Guide",
    h1: "The Agrochemical Supply Chain: How It Works and How to Improve It",
    lede:
      "The agrochemical supply chain moves crop protection products from technical-grade synthesis through formulation, packing and a multi-tier distribution network to the farmer, usually inside a few weeks of each season. This guide explains each stage, why the chain is so hard to run well, especially in India, and the practical levers that improve service, cost and working capital.",
    sections: [
      {
        h2: "The stages of the agrochemical supply chain",
        bullets: [
          "Technical-grade active ingredients: synthesised in-house or bought in, often from India or China, with volatile prices and lead times",
          "Formulation: converting technicals into usable products (EC, SC, WP, WDG and others), in own plants or at toll manufacturers",
          "Packing: filling into bottles, pouches and drums by pack size, often the last-minute bottleneck before a season",
          "Warehousing: central and regional warehouses feeding a wider depot or C&F network",
          "Distribution: from depots to distributors, dealers and retailers — Indian companies may serve tens of thousands of channel partners",
          "Farmer application: demand concentrated into short spray windows set by crop stage, weather and pest pressure",
        ],
      },
      {
        h2: "Why the agrochemical supply chain is so hard to run",
        body: [
          "Three forces make crop protection unusually difficult. First, seasonality: much of the annual volume moves in a few weeks of each Kharif and Rabi season, and the timing shifts with the monsoon and pest outbreaks. Second, long and volatile upstream lead times: technical-grade inputs and toller slots have to be committed months before demand is visible. Third, a long, opaque channel: head office usually sees primary billing to distributors, not what is actually being sold to farmers.",
          "The result is a familiar pattern: too much of the wrong product and not enough of the right one when the season breaks, stock ageing against its label life, credit tied up at distributors, and planning that collapses into firefighting between sales and supply chain.",
        ],
      },
      {
        h2: "The agrochemical supply chain in India",
        body: [
          "India adds its own complexity: state-wise registrations and compliance, large multi-level distribution networks, monsoon-driven variability that differs region by region, and a large share of volume made through toll manufacturing. India is also a major exporter of technicals and formulations, so many Indian manufacturers run a domestic seasonal business and an export business with different rhythms through the same plants and warehouses.",
        ],
      },
      {
        h2: "Levers that improve agrochemical supply chain performance",
        bullets: [
          "Crop-calendar S&OP: one operating plan for demand, supply and cash, reviewed monthly and faster in season",
          "Forecast accuracy: measuring error and bias by SKU and region, adding field signals and secondary-sales visibility",
          "Planning upstream earlier: technical procurement and toller capacity committed against a season plan, not last year's numbers",
          "Inventory policy for seasonal demand: safety stock, SKU rationalisation and near-expiry control",
          "Depot discipline: FIFO/FEFO compliance, storage norms and pre-season space planning",
          "Network design: the right number and location of depots for where demand actually is",
          "Clean data: one version of stock and sales across plant, warehouse and ERP",
        ],
      },
      {
        h2: "What good looks like",
        body: [
          "In GreyArc engagements, these levers have delivered measurable results: a 25% improvement in forecast accuracy at a ₹600 Cr formulation company after standardising reporting, 40% fewer stockouts at a distributor after introducing a forward, season-linked S&OP, and peak-season dispatch stabilised at a ₹1,200 Cr exporter by rebalancing toller contribution. The common thread is fixing the process and data before buying new systems.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/agrochemical-supply-chain-consulting", label: "Agrochemical supply chain consulting", note: "How GreyArc diagnoses and fixes these problems" },
      { href: "/blogs/supply-chain-management-in-agrochemicals-and-seeds", label: "Supply chain management in agrochemicals and seeds", note: "Lessons from decades inside the industry" },
      { href: "/blogs/when-to-hire-a-supply-chain-consultant", label: "When to hire a supply chain consultant", note: "And when you don't need one" },
      { href: "/agrochemical-planning", label: "Agrochemical planning", note: "Season, production, procurement and depot planning" },
      { href: "/services/logistics", label: "Agrochemical logistics & distribution", note: "Depot network and dispatch" },
      { href: "/services/sales", label: "Agrochemical sales & distributor performance", note: "Secondary sales and liquidation" },
      { href: "/services/training-workshops", label: "Agrochemical training workshops", note: "Warehouse, S&OP, plant and sales teams" },
    ],
    faqs: [
      {
        q: "What is the agrochemical supply chain?",
        a: "The agrochemical supply chain is the network that turns technical-grade active ingredients into formulated, packed crop protection products and moves them through warehouses, depots, distributors and dealers to farmers, timed to short seasonal application windows.",
      },
      {
        q: "What are the biggest challenges in the agrochemical supply chain?",
        a: "The biggest challenges are extreme seasonality, long and volatile lead times for technical-grade inputs and toller capacity, poor visibility of secondary sales at distributors and retailers, product shelf-life and label limits, and multi-tier distribution networks that are expensive to stock and serve.",
      },
      {
        q: "How can an agrochemical company improve its supply chain?",
        a: "Start with a crop-calendar S&OP process and better forecast accuracy, commit upstream procurement and toller capacity against a season plan, set inventory policy for seasonal demand, enforce FIFO/FEFO in depots, and fix data so plant, warehouse and ERP report one version of stock and sales.",
      },
    ],
  },
};

export function landingMetadata(key) {
  const p = LANDING_PAGES[key];
  const url = `https://www.greyarc.co${p.path}`;
  return {
    // seoTitle is the complete, length-checked <title>; fall back to the
    // old "metaTitle | GreyArc" pattern for pages without one.
    title: { absolute: p.seoTitle ?? `${p.metaTitle} | GreyArc` },
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
