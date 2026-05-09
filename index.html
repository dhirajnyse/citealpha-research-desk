"use strict";

const STORAGE_KEYS = {
  uploads: "citealpha-uploads-v1",
  notes: "citealpha-notes-v1",
  waitlist: "citealpha-waitlist-v1",
  marketSettings: "citealpha-market-settings-v1",
  workflowEvents: "citealpha-workflow-events-v1",
  portfolio: "citealpha-portfolio-v1",
  decisions: "citealpha-decisions-v1",
  alerts: "citealpha-alerts-v1",
  revenue: "citealpha-revenue-v1",
  pipeline: "citealpha-pipeline-v1",
  eval: "citealpha-eval-v1",
  compliance: "citealpha-compliance-v1",
  complianceEvents: "citealpha-compliance-events-v1",
  trace: "citealpha-trace-v1",
  peer: "citealpha-peer-v1",
  stress: "citealpha-stress-v1",
  filingChange: "citealpha-filing-change-v1",
  valuationMatrix: "citealpha-valuation-matrix-v1",
  tearSheet: "citealpha-tear-sheet-v1",
  thesisDebate: "citealpha-thesis-debate-v1",
  dossier: "citealpha-dossier-v1",
  timeline: "citealpha-thesis-timeline-v1",
  briefing: "citealpha-morning-briefing-v1",
  callPrep: "citealpha-call-prep-v1",
  debrief: "citealpha-post-earnings-debrief-v1",
  revision: "citealpha-guidance-revision-v1",
  modelControl: "citealpha-model-version-control-v1",
  approval: "citealpha-ic-approval-v1",
  portfolioAction: "citealpha-portfolio-action-v1",
  researchQueue: "citealpha-autonomous-research-queue-v1",
  researchSla: "citealpha-research-sla-scheduler-v1",
  researchOutcome: "citealpha-research-outcome-loop-v1",
  researchMemory: "citealpha-research-memory-vault-v1",
  guidedNavigator: "citealpha-guided-research-navigator-v1",
  pilotDemo: "citealpha-pilot-demo-concierge-v1",
  pilotFeedback: "citealpha-pilot-feedback-tracker-v1",
  pilotFeedbackSignals: "citealpha-pilot-feedback-signals-v1",
  pilotCohort: "citealpha-pilot-cohort-command-center-v1",
  pilotCohortSnapshots: "citealpha-pilot-cohort-snapshots-v1",
  pilotOutreach: "citealpha-pilot-outreach-reply-room-v1",
  pilotOutreachReplies: "citealpha-pilot-outreach-replies-v1",
  pilotActivation: "citealpha-pilot-activation-retention-room-v1",
  pilotActivationSessions: "citealpha-pilot-activation-sessions-v1"
};

const WAITLIST_ENDPOINT = "https://formsubmit.co/ajax/dhirajnyse@gmail.com";
const SEC_COMPANY_TICKERS_URL = "https://www.sec.gov/files/company_tickers.json";
const SEC_SUBMISSIONS_URL = "https://data.sec.gov/submissions/CIK";

const MARKET_PROVIDER_LABELS = {
  demo: "Demo quote",
  "alpha-vantage": "Alpha Vantage",
  fmp: "Financial Modeling Prep"
};

const DEFAULT_PORTFOLIO_POSITIONS = [
  { ticker: "NVDA", weight: 35 },
  { ticker: "AAPL", weight: 25 },
  { ticker: "TSLA", weight: 20 },
  { ticker: "MSFT", weight: 15 },
  { ticker: "CASH", weight: 5 }
];

const DEMO_MARKET_QUOTES = {
  NVDA: { name: "NVIDIA Corp.", price: 874.2, change: 18.4, changePercent: 2.15, marketCap: 2150000000000, pe: 71.2, dividendYield: 0.02 },
  AAPL: { name: "Apple Inc.", price: 189.7, change: -1.6, changePercent: -0.84, marketCap: 2920000000000, pe: 29.8, dividendYield: 0.51 },
  TSLA: { name: "Tesla Inc.", price: 182.4, change: 5.8, changePercent: 3.28, marketCap: 580000000000, pe: 62.4, dividendYield: 0 },
  MSFT: { name: "Microsoft Corp.", price: 421.9, change: 3.1, changePercent: 0.74, marketCap: 3130000000000, pe: 36.5, dividendYield: 0.71 },
  AMZN: { name: "Amazon.com Inc.", price: 184.1, change: 2.2, changePercent: 1.21, marketCap: 1910000000000, pe: 51.6, dividendYield: 0 },
  META: { name: "Meta Platforms Inc.", price: 477.5, change: -4.9, changePercent: -1.02, marketCap: 1210000000000, pe: 25.4, dividendYield: 0.43 }
};

const SECURITY_PATTERNS = [
  {
    id: "script-html",
    label: "Script or HTML injection marker",
    severity: "high",
    pattern: /<\s*script|javascript:|onerror\s*=|onload\s*=|<\s*iframe/i,
    advice: "Render as escaped text and review before using as a source."
  },
  {
    id: "prompt-injection",
    label: "Prompt-injection language",
    severity: "medium",
    pattern: /ignore (all )?(previous|prior)|disregard (all )?(previous|prior)|system prompt|developer message|jailbreak|you are now|override instructions/i,
    advice: "Treat retrieved text as evidence only, never as instructions."
  },
  {
    id: "secret-leak",
    label: "Secret-like token or credential wording",
    severity: "high",
    pattern: /api[_\s-]?key|access[_\s-]?token|client[_\s-]?secret|password|bearer\s+[a-z0-9._-]{12,}|sk-[a-z0-9]{16,}/i,
    advice: "Remove credentials before saving or exporting."
  },
  {
    id: "remote-code",
    label: "Browser/code execution marker",
    severity: "medium",
    pattern: /eval\s*\(|new Function|document\.cookie|localStorage|sessionStorage|fetch\s*\(/i,
    advice: "Keep imported documents inert and avoid executing source content."
  }
];

const SECURITY_BASELINE = [
  "No API keys committed to the repository",
  "Imported text is escaped before rendering",
  "Source passages are evidence, not AI instructions",
  "Live-provider keys stay in the browser session",
  "Static prototype avoids server-side data storage"
];

const SAMPLE_COMPANIES = [
  {
    ticker: "NSCP",
    name: "Northstar Chips",
    sector: "Semiconductors",
    revenue: 18.4,
    growth: 22,
    grossMargin: 58.2,
    opMargin: 34.6,
    fcfMargin: 19,
    netDebt: -3.2,
    shares: 1.24,
    multiple: 21,
    risk: 42,
    sentiment: 76,
    thesis: "AI accelerator demand with customer concentration and supply commitment risk."
  },
  {
    ticker: "AURR",
    name: "Aurora Retail",
    sector: "Specialty retail",
    revenue: 9.7,
    growth: 4,
    grossMargin: 36.1,
    opMargin: 9.4,
    fcfMargin: 7,
    netDebt: 2.2,
    shares: 0.31,
    multiple: 13,
    risk: 58,
    sentiment: 55,
    thesis: "Membership loyalty and private label mix offset price investment and shrink pressure."
  },
  {
    ticker: "HLGD",
    name: "Helios Grid",
    sector: "Renewable infrastructure",
    revenue: 5.2,
    growth: 31,
    grossMargin: 41.8,
    opMargin: 18.2,
    fcfMargin: 4,
    netDebt: 6.8,
    shares: 0.44,
    multiple: 16,
    risk: 71,
    sentiment: 62,
    thesis: "Long contracted backlog with elevated capex, project timing, and financing sensitivity."
  }
];

const PUBLIC_TICKER_ALIASES = {
  NVDA: { ticker: "NSCP", note: "NVDA-style AI accelerator proxy" },
  AAPL: { ticker: "AURR", note: "AAPL-style consumer platform proxy" },
  TSLA: { ticker: "HLGD", note: "TSLA-style growth and capex proxy" },
  BTC: { ticker: "HLGD", note: "BTC-style volatility and rate-sensitivity proxy" }
};

const DEMO_IMPORT_PACKS = {
  NVDA: {
    ticker: "NVDA",
    question: "What are the risks for $NVDA?",
    docs: [
      {
        title: "NVDA demo 10-K risk factors",
        type: "10-K filing",
        text:
          "Risk factors. NVDA demo filing language says AI accelerator demand depends on hyperscale and enterprise capital spending cycles. A pause in customer procurement, lower cloud budget growth, or a shift toward internally designed chips could materially affect revenue, gross margin, and inventory. Management discussion and analysis says supply purchase commitments, advanced packaging capacity, and long-lead tooling deposits may pressure cash conversion if demand normalizes faster than expected. Liquidity and capital resources remain strong with net cash, but export controls, foundry capacity constraints, and delayed platform transitions could reduce shipment timing and force redesign work. The company notes that customer concentration remains elevated, and a small number of cloud customers represent a significant share of accelerator revenue."
      },
      {
        title: "NVDA demo Q4 earnings call",
        type: "Earnings call",
        text:
          "Prepared remarks. Management said demand for AI inference and training systems remains strong, but order timing can move between quarters as cloud customers optimize deployment plans. Analyst Q&A. The CFO said gross margin protection depends on mix, yield, and packaging availability rather than further price increases. Management acknowledged that export rules and platform qualification timing are the most visible execution risks for the next two quarters. When asked about supply commitments, management said cancellation exposure is manageable under the base demand plan but could become a working-capital drag if customer ramps pause."
      }
    ]
  },
  AAPL: {
    ticker: "AAPL",
    question: "Where does management sound less confident than the filing for $AAPL?",
    docs: [
      {
        title: "AAPL demo 10-K business and risk factors",
        type: "10-K filing",
        text:
          "Business overview. AAPL demo filing language describes a premium device and services ecosystem with high customer loyalty, recurring services revenue, and a large installed base. Risk factors. Hardware demand may be affected by replacement cycles, foreign exchange, consumer confidence, and competitive product launches. Gross margin could be pressured by component costs, regional price investment, and a richer mix of entry-level devices. Regulatory scrutiny around app distribution, payments, search arrangements, and platform rules could affect services economics. Management discussion and analysis says services growth remains durable, but product revenue can vary with launch timing and channel inventory."
      },
      {
        title: "AAPL demo earnings call",
        type: "Earnings call",
        text:
          "Prepared remarks. Management said the installed base reached a new high and services revenue grew at a double-digit pace. Analyst Q&A. When asked about hardware demand, management sounded more measured, saying customers remain selective in some regions and currency remains a headwind. The CFO said gross margin will depend on product mix, commodity costs, and services contribution. Management was confident in long-term ecosystem engagement but less specific about near-term unit growth and regulatory outcomes."
      }
    ]
  },
  TSLA: {
    ticker: "TSLA",
    question: "Is $TSLA capex a free-cash-flow risk or a growth moat?",
    docs: [
      {
        title: "TSLA demo 10-K capex and liquidity",
        type: "10-K filing",
        text:
          "Management discussion and analysis. TSLA demo filing language says revenue growth depends on vehicle deliveries, energy storage deployments, software adoption, and manufacturing scale. Capital expenditures remain elevated for factory tooling, battery capacity, compute infrastructure, and new platform development. Liquidity and capital resources are adequate under the base plan, but negative free cash flow could occur if price reductions, inventory growth, or factory ramps absorb cash faster than expected. Risk factors. Demand may be affected by interest rates, EV incentives, competition, residual values, charging availability, and execution timing."
      },
      {
        title: "TSLA demo investor call",
        type: "Earnings call",
        text:
          "Prepared remarks. Management framed capex as a growth moat because battery supply, AI compute, manufacturing automation, and charging infrastructure create scale advantages. Analyst Q&A. The CFO said free cash flow will be uneven during major platform transitions and energy storage ramps. Management acknowledged that higher rates can pressure affordability and leasing economics. The key debate is whether capital intensity converts into durable cost leadership or becomes a cash-consumption risk during slower demand periods."
      }
    ]
  }
};

const DEFAULT_CHANGE_PRIOR_TEXT =
  "Risk factors. Prior-year filing language said AI accelerator demand depends on cloud capital spending and enterprise adoption. Customer concentration remained elevated, but management said multi-year supply agreements and net cash provided flexibility. Supply commitments were described as manageable under the base demand plan. Export controls and foundry capacity constraints could delay shipments, though platform transition risk was described as limited.";

const DEFAULT_CHANGE_CURRENT_TEXT =
  "Risk factors. Current-year filing language says AI accelerator demand depends on a smaller group of hyperscale customers and procurement timing can shift materially between quarters. Supply purchase commitments, advanced packaging deposits, and long-lead tooling obligations increased and may pressure cash conversion if customer ramps pause. Export controls, foundry capacity constraints, and platform qualification delays could reduce shipment timing or require redesign work. Inventory exposure may rise if demand normalizes faster than expected.";

const CHANGE_THEME_LIBRARY = [
  {
    id: "customer",
    label: "Customer concentration",
    severity: "High",
    terms: ["customer", "customers", "hyperscale", "concentration", "procurement", "cloud"]
  },
  {
    id: "demand",
    label: "Demand cadence",
    severity: "High",
    terms: ["demand", "capital spending", "budget", "pause", "ramp", "adoption", "orders"]
  },
  {
    id: "supply",
    label: "Supply commitments",
    severity: "Medium",
    terms: ["supply", "purchase commitments", "long-lead", "tooling", "packaging", "capacity", "deposits"]
  },
  {
    id: "cash",
    label: "Cash conversion",
    severity: "Medium",
    terms: ["cash conversion", "working capital", "inventory", "liquidity", "cash flow", "obligations"]
  },
  {
    id: "export",
    label: "Export and policy",
    severity: "Medium",
    terms: ["export", "controls", "regulatory", "policy", "redesign", "restriction"]
  },
  {
    id: "margin",
    label: "Margin durability",
    severity: "Medium",
    terms: ["margin", "yield", "pricing", "mix", "cost", "gross margin"]
  },
  {
    id: "financing",
    label: "Financing exposure",
    severity: "High",
    terms: ["debt", "financing", "refinancing", "interest", "rates", "credit"]
  }
];

const RISK_FACTOR_LIBRARY = {
  NSCP: [
    {
      title: "Customer concentration and demand volatility",
      severity: "High",
      terms: ["customer", "customers", "demand", "volatile", "cloud", "capital spending"],
      body:
        "Demand is tied to cloud and enterprise AI capital spending, while the top customers drive a large share of revenue. A customer loss, slower procurement cadence, or AI budget pause could pressure revenue, gross margin, and inventory."
    },
    {
      title: "Supply commitments and working-capital drag",
      severity: "Medium",
      terms: ["commitments", "working capital", "cancellation", "cash conversion", "purchase"],
      body:
        "Capacity commitments protect supply but can become a cash-conversion headwind if demand normalizes faster than expected. The key underwriting question is whether backlog stays firm enough to absorb long-lead tooling and purchase commitments."
    },
    {
      title: "Export controls, foundry capacity, and platform timing",
      severity: "Medium",
      terms: ["export", "foundry", "capacity", "delay", "platform", "redesign"],
      body:
        "Export restrictions, foundry bottlenecks, or a delayed accelerator transition could delay shipments or force redesign work. That would make the margin story more dependent on mix and yield execution."
    }
  ],
  AURR: [
    {
      title: "Consumer pressure and trade-down behavior",
      severity: "High",
      terms: ["consumer", "inflation", "higher rates", "unemployment", "trade down"],
      body:
        "Discretionary demand can weaken when inflation, rates, or unemployment pressure household budgets. Trade-down behavior would test traffic, basket size, and private-label mix."
    },
    {
      title: "Margin pressure from shrink, labor, and price investment",
      severity: "Medium",
      terms: ["shrink", "wage", "labor", "price investment", "margin"],
      body:
        "Shrink, wage inflation, and traffic-driving price investment can offset private-label gains. The risk is that gross margin support fades before SG&A automation benefits arrive."
    },
    {
      title: "Lease and variable-rate debt exposure",
      severity: "Medium",
      terms: ["lease", "variable-rate", "debt", "refinancing", "interest"],
      body:
        "Lease obligations and variable-rate debt make cash generation more sensitive to refinancing costs. Higher credit spreads would reduce flexibility for remodels, fulfillment automation, and loyalty investment."
    }
  ],
  HLGD: [
    {
      title: "Construction, permitting, and interconnection delays",
      severity: "High",
      terms: ["construction", "permitting", "interconnection", "delay", "queues"],
      body:
        "The backlog only converts into value if projects clear permitting, interconnection queues, and construction milestones. Delays can push revenue recognition, tax credit timing, and capital recycling further out."
    },
    {
      title: "Financing-rate and tax-equity sensitivity",
      severity: "High",
      terms: ["financing", "tax equity", "interest rate", "rates", "debt service"],
      body:
        "Project returns rely on financing availability and tax-equity execution. A sustained rise in rates can reduce equity returns, delay asset sales, and increase debt service costs."
    },
    {
      title: "Negative free cash flow during the build-out phase",
      severity: "Medium",
      terms: ["free cash flow", "negative", "capex", "development spend", "asset sales"],
      body:
        "Elevated capex and front-loaded battery projects keep free cash flow negative in the near term. The balance sheet depends on project completions, tax-equity closings, and minority asset sales."
    }
  ]
};

const SAMPLE_DOCS = [
  {
    id: "nscp-10k-2025",
    ticker: "NSCP",
    company: "Northstar Chips",
    type: "10-K filing",
    period: "FY2025",
    date: "2026-02-18",
    sections: [
      {
        title: "Business overview",
        text:
          "Northstar Chips designs data center accelerators, networking silicon, and embedded inference modules for enterprise and cloud customers. Fiscal 2025 revenue was $18.4 billion, up 22% year over year, with data center accelerators representing 61% of revenue. Backlog increased 37% as hyperscale customers committed to multi-quarter supply agreements. The company noted that three customers represented 49% of revenue, up from 42% in the prior year."
      },
      {
        title: "Management discussion and analysis",
        text:
          "Gross margin expanded to 58.2% from 55.1% due to higher accelerator mix, improved packaging yields, and stable pricing on enterprise SKUs. Operating margin improved to 34.6% even as research and development expense grew 18%. Management stated that supply purchase commitments rose to $4.1 billion and may pressure cash conversion if cloud demand normalizes faster than expected."
      },
      {
        title: "Risk factors",
        text:
          "Demand for AI infrastructure may be volatile and depends on customer capital spending cycles. The loss of a major cloud customer or a delayed accelerator platform transition could materially affect revenue, gross margin, and inventory levels. Export controls and foundry capacity constraints could delay shipments or require redesigns."
      },
      {
        title: "Liquidity and capital resources",
        text:
          "Free cash flow was $3.5 billion compared with $2.4 billion in fiscal 2024. Cash and marketable securities exceeded debt by $3.2 billion. Capital expenditures were $1.9 billion, primarily for validation labs, advanced packaging equipment, and long-lead tooling deposits."
      }
    ]
  },
  {
    id: "nscp-call-q4-2025",
    ticker: "NSCP",
    company: "Northstar Chips",
    type: "Earnings call",
    period: "Q4 2025",
    date: "2026-02-19",
    sections: [
      {
        title: "Prepared remarks",
        text:
          "Management said demand accelerated through the quarter as enterprise AI inference moved from pilots to production deployments. Lead times remain extended but are improving. The team expects fiscal 2026 revenue growth in the high teens and expects gross margin to remain near recent levels if mix stays skewed toward accelerators."
      },
      {
        title: "Analyst Q&A",
        text:
          "When asked about pricing, the CFO said the company is not assuming further price increases and is focused on yield and mix to protect margin. On customer concentration, management said the top three customers are strategic partners but acknowledged that procurement cadence can create quarter-to-quarter volatility."
      },
      {
        title: "Analyst Q&A",
        text:
          "The CEO described supply commitments as a necessary cost of securing capacity. Management said cancellation terms are manageable under the base demand plan but could become a working capital headwind if cloud spending pauses for more than two quarters."
      }
    ]
  },
  {
    id: "aurr-10k-2025",
    ticker: "AURR",
    company: "Aurora Retail",
    type: "10-K filing",
    period: "FY2025",
    date: "2026-03-04",
    sections: [
      {
        title: "Business overview",
        text:
          "Aurora Retail operates 1,140 stores and a membership commerce platform focused on home, wellness, and daily essentials. Fiscal 2025 revenue was $9.7 billion, up 4%, with comparable sales up 1.8%. Membership revenue grew 16% and private label penetration reached 28% of merchandise sales."
      },
      {
        title: "Management discussion and analysis",
        text:
          "Gross margin improved to 36.1% from 35.4% as private label mix and freight savings offset price investment. Operating margin was 9.4%, down 30 basis points, due to higher labor expense and same-day fulfillment costs. Inventory turns improved to 5.6x, while shrink remained elevated in urban stores."
      },
      {
        title: "Risk factors",
        text:
          "Consumer discretionary demand may weaken during periods of inflation, higher rates, or rising unemployment. Price-sensitive customers may trade down or defer larger purchases. Lease obligations, variable-rate debt, wage inflation, and theft could pressure profitability."
      },
      {
        title: "Liquidity and capital resources",
        text:
          "Free cash flow was $690 million, and the company ended the year with $2.2 billion of net debt. Management plans $520 million of capital expenditures for store remodels, fulfillment automation, and loyalty technology. Roughly 38% of debt is variable rate."
      }
    ]
  },
  {
    id: "aurr-call-q4-2025",
    ticker: "AURR",
    company: "Aurora Retail",
    type: "Earnings call",
    period: "Q4 2025",
    date: "2026-03-05",
    sections: [
      {
        title: "Prepared remarks",
        text:
          "Management said the core customer remains employed but is making sharper trade-offs between discretionary and daily needs. The company is keeping price investments in place on traffic-driving categories, which is expected to create an 80 basis point gross margin headwind in the first half."
      },
      {
        title: "Analyst Q&A",
        text:
          "The CEO said membership households spend 2.3x more than non-members and show better retention. The CFO said automation should bend SG&A growth below sales growth by the second half, but shrink and wage inflation remain the two largest margin pressure points."
      },
      {
        title: "Analyst Q&A",
        text:
          "When asked about rates, management said interest expense is manageable under the current plan but refinancing costs could move higher if credit spreads widen. The company is prioritizing free cash flow over aggressive store growth."
      }
    ]
  },
  {
    id: "hlgd-10k-2025",
    ticker: "HLGD",
    company: "Helios Grid",
    type: "10-K filing",
    period: "FY2025",
    date: "2026-02-27",
    sections: [
      {
        title: "Business overview",
        text:
          "Helios Grid develops, owns, and operates utility-scale solar, storage, and grid services assets. Fiscal 2025 revenue was $5.2 billion, up 31%, supported by new storage projects and contracted power purchase agreements. Contracted backlog was $14.8 billion, with an average remaining contract life of 13 years."
      },
      {
        title: "Management discussion and analysis",
        text:
          "Adjusted EBITDA margin was 32.4%, but free cash flow remained negative due to $3.4 billion of capital expenditures and interconnection deposits. Management expects capex to remain elevated through 2027 as battery storage projects move from development to construction. Project returns depend on tax credit qualification, equipment cost, and financing rates."
      },
      {
        title: "Risk factors",
        text:
          "The company faces construction delays, permitting risk, interconnection queues, availability of tax equity financing, and interest rate sensitivity. A sustained increase in rates could reduce project-level returns, delay asset sales, and increase debt service costs."
      },
      {
        title: "Liquidity and capital resources",
        text:
          "Net debt was $6.8 billion and consolidated liquidity was $1.1 billion. The company has $2.6 billion of committed construction financing but expects to recycle capital through minority asset sales. Free cash flow breakeven depends on project completions and a moderation in development spend."
      }
    ]
  },
  {
    id: "hlgd-call-q4-2025",
    ticker: "HLGD",
    company: "Helios Grid",
    type: "Earnings call",
    period: "Q4 2025",
    date: "2026-02-28",
    sections: [
      {
        title: "Prepared remarks",
        text:
          "Management said storage demand remains strong and contract pricing improved in markets with grid congestion. The 2026 plan assumes project starts accelerate in the second half after permitting milestones are cleared. Management described the backlog as highly visible but acknowledged that cash flow conversion lags earnings during the build-out phase."
      },
      {
        title: "Analyst Q&A",
        text:
          "The CFO said each 100 basis point increase in financing cost reduces the expected equity return on new projects by 60 to 90 basis points unless power prices or tax credit monetization improve. The company is evaluating asset sales to preserve balance sheet flexibility."
      },
      {
        title: "Analyst Q&A",
        text:
          "When asked about free cash flow, management said 2026 will likely remain negative because battery projects are front-loaded. The path to positive free cash flow requires project completions, tax equity closings, and lower development spend."
      }
    ]
  },
  {
    id: "model-note-cross-sector",
    ticker: "NSCP",
    company: "Cross-sector model note",
    type: "Valuation model",
    period: "Base cases",
    date: "2026-03-08",
    sections: [
      {
        title: "Scenario assumptions",
        text:
          "A margin-durability screen favors companies with pricing power, backlog visibility, low leverage, and cash conversion above reinvestment needs. Northstar Chips has the strongest gross margin and net cash position. Aurora Retail has defensive traffic but limited operating margin headroom. Helios Grid has the fastest revenue growth but the highest financing and capex sensitivity."
      },
      {
        title: "Committee debate",
        text:
          "For a higher-rate scenario, the model penalizes variable-rate debt, negative free cash flow, and projects that depend on external financing. Helios Grid is most exposed to discount rate moves. Aurora Retail has refinancing risk but can self-fund most investment. Northstar Chips has supply commitment risk, but the balance sheet provides more room to absorb a demand pause."
      }
    ]
  }
];

const QUESTION_TEMPLATES = [
  "What are the risks for $NVDA?",
  "Which company has the better margin durability if rates stay high?",
  "Where does management sound less confident than the filing?",
  "Is Helios Grid's capex plan a free-cash-flow risk or a growth moat?",
  "What are the three most material risks hidden behind revenue growth?",
  "Compare Northstar Chips and Aurora Retail on pricing power.",
  "What valuation assumptions should I flex first before buying?"
];

const STOP_WORDS = new Set([
  "a",
  "an",
  "and",
  "are",
  "as",
  "at",
  "be",
  "but",
  "by",
  "can",
  "do",
  "does",
  "for",
  "from",
  "has",
  "have",
  "if",
  "in",
  "into",
  "is",
  "it",
  "its",
  "of",
  "on",
  "or",
  "our",
  "over",
  "than",
  "that",
  "the",
  "their",
  "this",
  "to",
  "was",
  "we",
  "what",
  "when",
  "where",
  "which",
  "with",
  "year"
]);

const INTENTS = [
  {
    id: "margin",
    label: "Margin durability",
    terms: ["margin", "gross", "operating", "pricing", "price", "durability", "yield", "mix", "cost", "sg&a", "shrink"]
  },
  {
    id: "growth",
    label: "Growth quality",
    terms: ["growth", "revenue", "demand", "backlog", "orders", "customers", "membership", "contract", "pipeline"]
  },
  {
    id: "risk",
    label: "Risk factors",
    terms: ["risk", "risks", "factor", "factors", "pressure", "headwind", "volatile", "delay", "concentration", "inflation", "control", "permitting"]
  },
  {
    id: "rates",
    label: "Rate sensitivity",
    terms: ["rate", "rates", "interest", "debt", "financing", "discount", "refinancing", "credit", "leverage"]
  },
  {
    id: "cash",
    label: "Cash conversion",
    terms: ["cash", "fcf", "free", "capex", "capital", "liquidity", "working", "inventory", "commitments"]
  },
  {
    id: "tone",
    label: "Management tone",
    terms: ["tone", "confidence", "call", "management", "said", "acknowledged", "expects", "guidance", "q&a"]
  },
  {
    id: "valuation",
    label: "Valuation",
    terms: ["valuation", "multiple", "model", "terminal", "discount", "value", "assumption", "equity"]
  }
];

const SYNONYMS = {
  durable: ["durability", "resilient", "stable", "visibility", "backlog"],
  margin: ["gross", "operating", "pricing", "yield", "mix", "cost"],
  moat: ["pricing", "backlog", "contract", "retention", "visibility"],
  rates: ["interest", "debt", "financing", "discount", "refinancing"],
  cash: ["fcf", "free", "liquidity", "capex", "conversion"],
  call: ["management", "q&a", "guidance", "expects", "said"],
  risk: ["headwind", "pressure", "delay", "volatile", "concentration"],
  valuation: ["multiple", "terminal", "discount", "equity", "model"]
};

const POSITIVE_TERMS = [
  "accelerated",
  "improved",
  "expanded",
  "stable",
  "strong",
  "visibility",
  "backlog",
  "retention",
  "cash",
  "net cash",
  "pricing",
  "growth",
  "contracted"
];

const NEGATIVE_TERMS = [
  "risk",
  "pressure",
  "headwind",
  "delay",
  "volatile",
  "concentration",
  "debt",
  "negative",
  "inflation",
  "shrink",
  "financing",
  "cancellation",
  "working capital"
];

const state = {
  documents: [],
  activeTickers: new Set(SAMPLE_COMPANIES.map((company) => company.ticker)),
  enabledDocIds: new Set(),
  answerDepth: "brief",
  selectedTicker: "NSCP",
  tickerFocus: null,
  lastFocusKey: null,
  uploadedDocs: [],
  notes: [],
  waitlistLeads: [],
  workflowEvents: [],
  portfolioPositions: [],
  decisions: [],
  currentDecision: null,
  alertRules: [],
  revenueModel: null,
  pipelineModel: null,
  evalConfig: null,
  currentEval: null,
  complianceModel: null,
  complianceEvents: [],
  traceConfig: null,
  currentTrace: null,
  peerConfig: null,
  currentPeer: null,
  stressConfig: null,
  currentStress: null,
  changeConfig: null,
  currentChange: null,
  valuationMatrixConfig: null,
  currentValuationMatrix: null,
  tearSheetConfig: null,
  currentTearSheet: null,
  thesisDebateConfig: null,
  currentThesisDebate: null,
  dossierConfig: null,
  currentDossier: null,
  timelineConfig: null,
  currentTimeline: null,
  briefingConfig: null,
  currentBriefing: null,
  callPrepConfig: null,
  currentCallPrep: null,
  debriefConfig: null,
  currentDebrief: null,
  revisionConfig: null,
  currentRevision: null,
  modelControlConfig: null,
  currentModelControl: null,
  approvalConfig: null,
  currentApproval: null,
  portfolioActionConfig: null,
  currentPortfolioAction: null,
  researchQueueConfig: null,
  currentResearchQueue: null,
  researchSlaConfig: null,
  currentResearchSla: null,
  researchOutcomeConfig: null,
  currentResearchOutcome: null,
  researchMemoryConfig: null,
  currentResearchMemory: null,
  guidedNavigatorConfig: null,
  currentNavigator: null,
  pilotDemoConfig: null,
  currentPilotDemo: null,
  pilotFeedbackConfig: null,
  currentPilotFeedback: null,
  pilotFeedbackSignals: [],
  pilotCohortConfig: null,
  currentPilotCohort: null,
  pilotCohortSnapshots: [],
  pilotOutreachConfig: null,
  currentPilotOutreach: null,
  pilotOutreachReplies: [],
  pilotActivationConfig: null,
  currentPilotActivation: null,
  pilotActivationSessions: [],
  marketSettings: { provider: "demo", ticker: "NVDA", apiKey: "" },
  marketQuote: null,
  marketStatus: { level: "idle", message: "Demo quote ready" },
  lastQuestionSecurity: null,
  lastImportAudit: null,
  lastBrief: null,
  lastAnswerModel: null,
  currentCitations: [],
  isRunning: false
};

const els = {};

document.addEventListener("DOMContentLoaded", init);

function init() {
  cacheElements();
  window.CiteAlphaRunAnalysis = submitCurrentQuestion;
  window.CiteAlphaScanFiling = scanFilingFromCurrentQuestion;
  state.uploadedDocs = loadJson(STORAGE_KEYS.uploads, []).map(normalizeUploadedDoc);
  state.notes = loadJson(STORAGE_KEYS.notes, []);
  state.waitlistLeads = loadJson(STORAGE_KEYS.waitlist, []);
  state.workflowEvents = loadJson(STORAGE_KEYS.workflowEvents, []);
  state.portfolioPositions = loadPortfolioPositions();
  state.decisions = loadJson(STORAGE_KEYS.decisions, []);
  state.alertRules = loadAlertRules();
  state.revenueModel = loadRevenueModel();
  state.pipelineModel = loadPipelineModel();
  state.evalConfig = loadEvalConfig();
  state.complianceModel = loadComplianceModel();
  state.complianceEvents = loadJson(STORAGE_KEYS.complianceEvents, []).map(normalizeComplianceEvent);
  state.traceConfig = loadTraceConfig();
  state.peerConfig = loadPeerConfig();
  state.stressConfig = loadStressConfig();
  state.changeConfig = loadChangeConfig();
  state.valuationMatrixConfig = loadValuationMatrixConfig();
  state.tearSheetConfig = loadTearSheetConfig();
  state.thesisDebateConfig = loadThesisDebateConfig();
  state.dossierConfig = loadDossierConfig();
  state.timelineConfig = loadTimelineConfig();
  state.briefingConfig = loadBriefingConfig();
  state.callPrepConfig = loadCallPrepConfig();
  state.debriefConfig = loadDebriefConfig();
  state.revisionConfig = loadRevisionConfig();
  state.modelControlConfig = loadModelControlConfig();
  state.approvalConfig = loadApprovalConfig();
  state.portfolioActionConfig = loadPortfolioActionConfig();
  state.researchQueueConfig = loadResearchQueueConfig();
  state.researchSlaConfig = loadResearchSlaConfig();
  state.researchOutcomeConfig = loadResearchOutcomeConfig();
  state.researchMemoryConfig = loadResearchMemoryConfig();
  state.guidedNavigatorConfig = loadGuidedNavigatorConfig();
  state.pilotDemoConfig = loadPilotDemoConfig();
  state.pilotFeedbackConfig = loadPilotFeedbackConfig();
  state.pilotFeedbackSignals = loadPilotFeedbackSignals();
  state.pilotCohortConfig = loadPilotCohortConfig();
  state.pilotCohortSnapshots = loadPilotCohortSnapshots();
  state.pilotOutreachConfig = loadPilotOutreachConfig();
  state.pilotOutreachReplies = loadPilotOutreachReplies();
  state.pilotActivationConfig = loadPilotActivationConfig();
  state.pilotActivationSessions = loadPilotActivationSessions();
  state.marketSettings = loadMarketSettings();
  state.documents = [...state.uploadedDocs, ...SAMPLE_DOCS];
  state.documents.forEach((doc) => state.enabledDocIds.add(doc.id));
  for (const doc of state.uploadedDocs) {
    state.activeTickers.add(doc.ticker);
  }

  renderTemplates();
  renderCoverage();
  renderLibrary();
  renderSourceQuality();
  renderSecurityPosture();
  renderContextBand();
  renderLiveDataControl();
  renderMarketStatusRail();
  renderQuestionSecurityStrip();
  renderValuationOptions();
  renderNotebook();
  renderLaunchOps();
  renderPortfolioLens();
  renderDecisionRoom();
  renderAlertCenter();
  renderRevenueConsole();
  renderPipelineConsole();
  renderEvalLab();
  renderComplianceCenter();
  renderTraceInspector();
  renderPeerScreener();
  renderStressLab();
  renderFilingChangeMonitor();
  renderValuationMatrix();
  renderResearchTearSheet();
  renderThesisDebateRoom();
  renderResearchDossierBuilder();
  renderThesisTimelineAuditTrail();
  renderMorningBriefingRoom();
  renderEarningsCallPrepRoom();
  renderPostEarningsDebriefRoom();
  renderGuidanceRevisionRoom();
  renderModelVersionControlRoom();
  renderIcApprovalRoom();
  renderPortfolioActionRoom();
  renderAutonomousResearchQueue();
  renderResearchSlaScheduler();
  renderResearchOutcomeLoop();
  renderResearchMemoryVault();
  renderGuidedResearchNavigator();
  renderPilotDemoConcierge();
  renderPilotFeedbackTracker();
  renderPilotCohortCommandCenter();
  renderPilotOutreachReplyRoom();
  renderPilotActivationRetentionRoom();
  bindEvents();
  updateValuationFromCompany();
  updateValuation();
  renderMarketQuoteCard();
  renderEvidence([]);
  drawSignalMap();
}

function cacheElements() {
  els.templateStack = document.querySelector("#templateStack");
  els.questionCount = document.querySelector("#questionCount");
  els.coverageList = document.querySelector("#coverageList");
  els.selectAllTickers = document.querySelector("#selectAllTickers");
  els.libraryList = document.querySelector("#libraryList");
  els.documentCount = document.querySelector("#documentCount");
  els.fileInput = document.querySelector("#fileInput");
  els.fileDrop = document.querySelector(".file-drop");
  els.demoPackActions = document.querySelector("#demoPackActions");
  els.secBridgeForm = document.querySelector("#secBridgeForm");
  els.secBridgeTicker = document.querySelector("#secBridgeTicker");
  els.secBridgeType = document.querySelector("#secBridgeType");
  els.secBridgeStatus = document.querySelector("#secBridgeStatus");
  els.liveDataForm = document.querySelector("#liveDataForm");
  els.marketProvider = document.querySelector("#marketProvider");
  els.marketTicker = document.querySelector("#marketTicker");
  els.marketApiKey = document.querySelector("#marketApiKey");
  els.liveDataStatus = document.querySelector("#liveDataStatus");
  els.sourceQualityPanel = document.querySelector("#sourceQualityPanel");
  els.securityPosturePanel = document.querySelector("#securityPosturePanel");
  els.pasteForm = document.querySelector("#pasteForm");
  els.pasteTicker = document.querySelector("#pasteTicker");
  els.pasteType = document.querySelector("#pasteType");
  els.pasteTitle = document.querySelector("#pasteTitle");
  els.pasteText = document.querySelector("#pasteText");
  els.clearUploads = document.querySelector("#clearUploads");
  els.queryForm = document.querySelector("#queryForm");
  els.queryInput = document.querySelector("#queryInput");
  els.marketStatusRail = document.querySelector("#marketStatusRail");
  els.questionSecurityStrip = document.querySelector("#questionSecurityStrip");
  els.scanFilingButton = document.querySelector("#scanFilingButton");
  els.runAnalysisButton = document.querySelector("#runAnalysisButton");
  els.contextBand = document.querySelector("#contextBand");
  els.answerPanel = document.querySelector("#answerPanel");
  els.evidenceList = document.querySelector("#evidenceList");
  els.evidenceCount = document.querySelector("#evidenceCount");
  els.signalCanvas = document.querySelector("#signalCanvas");
  els.signalStamp = document.querySelector("#signalStamp");
  els.valuationTicker = document.querySelector("#valuationTicker");
  els.growthSlider = document.querySelector("#growthSlider");
  els.marginSlider = document.querySelector("#marginSlider");
  els.multipleSlider = document.querySelector("#multipleSlider");
  els.discountSlider = document.querySelector("#discountSlider");
  els.growthValue = document.querySelector("#growthValue");
  els.marginValue = document.querySelector("#marginValue");
  els.multipleValue = document.querySelector("#multipleValue");
  els.discountValue = document.querySelector("#discountValue");
  els.valuePerShare = document.querySelector("#valuePerShare");
  els.equityValue = document.querySelector("#equityValue");
  els.valuationFootnote = document.querySelector("#valuationFootnote");
  els.marketQuoteCard = document.querySelector("#marketQuoteCard");
  els.copyBrief = document.querySelector("#copyBrief");
  els.saveBrief = document.querySelector("#saveBrief");
  els.exportPdfBrief = document.querySelector("#exportPdfBrief");
  els.exportMarkdownBrief = document.querySelector("#exportMarkdownBrief");
  els.notebookList = document.querySelector("#notebookList");
  els.clearNotes = document.querySelector("#clearNotes");
  els.waitlistForm = document.querySelector("#waitlistForm");
  els.waitlistEmail = document.querySelector("#waitlistEmail");
  els.waitlistProfile = document.querySelector("#waitlistProfile");
  els.waitlistPlan = document.querySelector("#waitlistPlan");
  els.waitlistNeed = document.querySelector("#waitlistNeed");
  els.waitlistTickers = document.querySelector("#waitlistTickers");
  els.waitlistQuestion = document.querySelector("#waitlistQuestion");
  els.waitlistResult = document.querySelector("#waitlistResult");
  els.opsMetricGrid = document.querySelector("#opsMetricGrid");
  els.leadQualityScore = document.querySelector("#leadQualityScore");
  els.leadQualityBoard = document.querySelector("#leadQualityBoard");
  els.workflowScore = document.querySelector("#workflowScore");
  els.workflowHeatmap = document.querySelector("#workflowHeatmap");
  els.launchReadinessScore = document.querySelector("#launchReadinessScore");
  els.launchChecklist = document.querySelector("#launchChecklist");
  els.opsPriority = document.querySelector("#opsPriority");
  els.opsSignalGrid = document.querySelector("#opsSignalGrid");
  els.exportFounderBrief = document.querySelector("#exportFounderBrief");
  els.portfolioInput = document.querySelector("#portfolioInput");
  els.applyPortfolio = document.querySelector("#applyPortfolio");
  els.useActiveTickers = document.querySelector("#useActiveTickers");
  els.exportPortfolioBrief = document.querySelector("#exportPortfolioBrief");
  els.portfolioMetricGrid = document.querySelector("#portfolioMetricGrid");
  els.portfolioPositionCount = document.querySelector("#portfolioPositionCount");
  els.portfolioRiskScore = document.querySelector("#portfolioRiskScore");
  els.portfolioScenarioLabel = document.querySelector("#portfolioScenarioLabel");
  els.portfolioPriorityList = document.querySelector("#portfolioPriorityList");
  els.portfolioScenarioBoard = document.querySelector("#portfolioScenarioBoard");
  els.portfolioQueueCount = document.querySelector("#portfolioQueueCount");
  els.portfolioQuestionQueue = document.querySelector("#portfolioQuestionQueue");
  els.decisionForm = document.querySelector("#decisionForm");
  els.decisionTicker = document.querySelector("#decisionTicker");
  els.decisionAction = document.querySelector("#decisionAction");
  els.decisionWeight = document.querySelector("#decisionWeight");
  els.decisionHorizon = document.querySelector("#decisionHorizon");
  els.decisionThesis = document.querySelector("#decisionThesis");
  els.decisionBear = document.querySelector("#decisionBear");
  els.decisionCatalyst = document.querySelector("#decisionCatalyst");
  els.decisionKill = document.querySelector("#decisionKill");
  els.saveDecision = document.querySelector("#saveDecision");
  els.useCurrentResearch = document.querySelector("#useCurrentResearch");
  els.exportDecisionMemo = document.querySelector("#exportDecisionMemo");
  els.decisionMetricGrid = document.querySelector("#decisionMetricGrid");
  els.decisionPreview = document.querySelector("#decisionPreview");
  els.decisionGateScore = document.querySelector("#decisionGateScore");
  els.decisionGateList = document.querySelector("#decisionGateList");
  els.decisionHistoryCount = document.querySelector("#decisionHistoryCount");
  els.decisionHistory = document.querySelector("#decisionHistory");
  els.alertForm = document.querySelector("#alertForm");
  els.alertTicker = document.querySelector("#alertTicker");
  els.alertTrigger = document.querySelector("#alertTrigger");
  els.alertPriority = document.querySelector("#alertPriority");
  els.alertDueDate = document.querySelector("#alertDueDate");
  els.alertCondition = document.querySelector("#alertCondition");
  els.buildAlertsFromPortfolio = document.querySelector("#buildAlertsFromPortfolio");
  els.clearAlerts = document.querySelector("#clearAlerts");
  els.exportAlertBrief = document.querySelector("#exportAlertBrief");
  els.alertMetricGrid = document.querySelector("#alertMetricGrid");
  els.alertCount = document.querySelector("#alertCount");
  els.alertList = document.querySelector("#alertList");
  els.catalystCount = document.querySelector("#catalystCount");
  els.catalystCalendar = document.querySelector("#catalystCalendar");
  els.alertActionCount = document.querySelector("#alertActionCount");
  els.alertActionQueue = document.querySelector("#alertActionQueue");
  els.revenueForm = document.querySelector("#revenueForm");
  els.revenueLeadTarget = document.querySelector("#revenueLeadTarget");
  els.revenueConversion = document.querySelector("#revenueConversion");
  els.revenueChurn = document.querySelector("#revenueChurn");
  els.revenueGrowth = document.querySelector("#revenueGrowth");
  els.revenueStarterMix = document.querySelector("#revenueStarterMix");
  els.revenueProMix = document.querySelector("#revenueProMix");
  els.revenueAnalystMix = document.querySelector("#revenueAnalystMix");
  els.revenueTrialDays = document.querySelector("#revenueTrialDays");
  els.useWaitlistRevenue = document.querySelector("#useWaitlistRevenue");
  els.resetRevenueModel = document.querySelector("#resetRevenueModel");
  els.exportRevenueBrief = document.querySelector("#exportRevenueBrief");
  els.revenueMetricGrid = document.querySelector("#revenueMetricGrid");
  els.revenuePlanCount = document.querySelector("#revenuePlanCount");
  els.revenuePlanMix = document.querySelector("#revenuePlanMix");
  els.revenueEntitlementScore = document.querySelector("#revenueEntitlementScore");
  els.revenueEntitlements = document.querySelector("#revenueEntitlements");
  els.checkoutReadinessScore = document.querySelector("#checkoutReadinessScore");
  els.checkoutReadiness = document.querySelector("#checkoutReadiness");
  els.pipelineForm = document.querySelector("#pipelineForm");
  els.pipelineCompanies = document.querySelector("#pipelineCompanies");
  els.pipelineFilings = document.querySelector("#pipelineFilings");
  els.pipelineCalls = document.querySelector("#pipelineCalls");
  els.pipelineChunks = document.querySelector("#pipelineChunks");
  els.pipelineQueries = document.querySelector("#pipelineQueries");
  els.pipelineBackend = document.querySelector("#pipelineBackend");
  els.pipelineVectorStore = document.querySelector("#pipelineVectorStore");
  els.pipelineMarketApi = document.querySelector("#pipelineMarketApi");
  els.usePilotScale = document.querySelector("#usePilotScale");
  els.useMvpScale = document.querySelector("#useMvpScale");
  els.exportPipelineBrief = document.querySelector("#exportPipelineBrief");
  els.pipelineMetricGrid = document.querySelector("#pipelineMetricGrid");
  els.pipelineIntegrationScore = document.querySelector("#pipelineIntegrationScore");
  els.pipelineIntegrationMap = document.querySelector("#pipelineIntegrationMap");
  els.pipelineEnvScore = document.querySelector("#pipelineEnvScore");
  els.pipelineEnvChecklist = document.querySelector("#pipelineEnvChecklist");
  els.pipelineOpsCount = document.querySelector("#pipelineOpsCount");
  els.pipelineOpsQueue = document.querySelector("#pipelineOpsQueue");
  els.evalForm = document.querySelector("#evalForm");
  els.evalCaseCount = document.querySelector("#evalCaseCount");
  els.evalPassThreshold = document.querySelector("#evalPassThreshold");
  els.evalMinCitations = document.querySelector("#evalMinCitations");
  els.evalReviewSample = document.querySelector("#evalReviewSample");
  els.evalFocus = document.querySelector("#evalFocus");
  els.evalRegressionMode = document.querySelector("#evalRegressionMode");
  els.useCurrentAnswerEval = document.querySelector("#useCurrentAnswerEval");
  els.resetEvalSuite = document.querySelector("#resetEvalSuite");
  els.exportEvalBrief = document.querySelector("#exportEvalBrief");
  els.evalMetricGrid = document.querySelector("#evalMetricGrid");
  els.evalCaseSummary = document.querySelector("#evalCaseSummary");
  els.evalCaseList = document.querySelector("#evalCaseList");
  els.evalGateScore = document.querySelector("#evalGateScore");
  els.evalGateList = document.querySelector("#evalGateList");
  els.evalReviewCount = document.querySelector("#evalReviewCount");
  els.evalReviewQueue = document.querySelector("#evalReviewQueue");
  els.complianceForm = document.querySelector("#complianceForm");
  els.compliancePosture = document.querySelector("#compliancePosture");
  els.complianceDisclosure = document.querySelector("#complianceDisclosure");
  els.complianceRequiredCitations = document.querySelector("#complianceRequiredCitations");
  els.complianceRetention = document.querySelector("#complianceRetention");
  els.complianceOwner = document.querySelector("#complianceOwner");
  els.complianceEscalation = document.querySelector("#complianceEscalation");
  els.useCurrentAnswerCompliance = document.querySelector("#useCurrentAnswerCompliance");
  els.resetCompliance = document.querySelector("#resetCompliance");
  els.exportComplianceBrief = document.querySelector("#exportComplianceBrief");
  els.complianceMetricGrid = document.querySelector("#complianceMetricGrid");
  els.compliancePolicyScore = document.querySelector("#compliancePolicyScore");
  els.compliancePolicyList = document.querySelector("#compliancePolicyList");
  els.complianceAuditCount = document.querySelector("#complianceAuditCount");
  els.complianceAuditTrail = document.querySelector("#complianceAuditTrail");
  els.complianceDisclosureStatus = document.querySelector("#complianceDisclosureStatus");
  els.complianceDisclosurePack = document.querySelector("#complianceDisclosurePack");
  els.traceForm = document.querySelector("#traceForm");
  els.traceClaimLimit = document.querySelector("#traceClaimLimit");
  els.traceSupportThreshold = document.querySelector("#traceSupportThreshold");
  els.traceMinOverlap = document.querySelector("#traceMinOverlap");
  els.traceMode = document.querySelector("#traceMode");
  els.traceTensionFocus = document.querySelector("#traceTensionFocus");
  els.useCurrentAnswerTrace = document.querySelector("#useCurrentAnswerTrace");
  els.resetTrace = document.querySelector("#resetTrace");
  els.exportTracePack = document.querySelector("#exportTracePack");
  els.traceMetricGrid = document.querySelector("#traceMetricGrid");
  els.traceClaimCount = document.querySelector("#traceClaimCount");
  els.traceClaimMap = document.querySelector("#traceClaimMap");
  els.traceWeakCount = document.querySelector("#traceWeakCount");
  els.traceWeakClaims = document.querySelector("#traceWeakClaims");
  els.traceLineageCount = document.querySelector("#traceLineageCount");
  els.traceSourceLineage = document.querySelector("#traceSourceLineage");
  els.peerForm = document.querySelector("#peerForm");
  els.peerTarget = document.querySelector("#peerTarget");
  els.peerBasket = document.querySelector("#peerBasket");
  els.peerFactor = document.querySelector("#peerFactor");
  els.peerRiskPenalty = document.querySelector("#peerRiskPenalty");
  els.peerValuationWeight = document.querySelector("#peerValuationWeight");
  els.peerEvidenceMode = document.querySelector("#peerEvidenceMode");
  els.useCurrentPeerSet = document.querySelector("#useCurrentPeerSet");
  els.resetPeerScreen = document.querySelector("#resetPeerScreen");
  els.exportPeerBrief = document.querySelector("#exportPeerBrief");
  els.peerMetricGrid = document.querySelector("#peerMetricGrid");
  els.peerRankingCount = document.querySelector("#peerRankingCount");
  els.peerRankingList = document.querySelector("#peerRankingList");
  els.peerGapCount = document.querySelector("#peerGapCount");
  els.peerGapList = document.querySelector("#peerGapList");
  els.peerQuestionCount = document.querySelector("#peerQuestionCount");
  els.peerQuestionQueue = document.querySelector("#peerQuestionQueue");
  els.stressForm = document.querySelector("#stressForm");
  els.stressPreset = document.querySelector("#stressPreset");
  els.stressTickers = document.querySelector("#stressTickers");
  els.stressRateShock = document.querySelector("#stressRateShock");
  els.stressDemandShock = document.querySelector("#stressDemandShock");
  els.stressMarginShock = document.querySelector("#stressMarginShock");
  els.stressInflationDrag = document.querySelector("#stressInflationDrag");
  els.stressWeightMode = document.querySelector("#stressWeightMode");
  els.usePortfolioStress = document.querySelector("#usePortfolioStress");
  els.resetStress = document.querySelector("#resetStress");
  els.exportStressBrief = document.querySelector("#exportStressBrief");
  els.stressMetricGrid = document.querySelector("#stressMetricGrid");
  els.stressRankingCount = document.querySelector("#stressRankingCount");
  els.stressRankingList = document.querySelector("#stressRankingList");
  els.stressPortfolioImpact = document.querySelector("#stressPortfolioImpact");
  els.stressPortfolioBoard = document.querySelector("#stressPortfolioBoard");
  els.stressActionCount = document.querySelector("#stressActionCount");
  els.stressActionQueue = document.querySelector("#stressActionQueue");
  els.changeForm = document.querySelector("#changeForm");
  els.changeTicker = document.querySelector("#changeTicker");
  els.changePriorPeriod = document.querySelector("#changePriorPeriod");
  els.changeCurrentPeriod = document.querySelector("#changeCurrentPeriod");
  els.changeMateriality = document.querySelector("#changeMateriality");
  els.changePriorText = document.querySelector("#changePriorText");
  els.changeCurrentText = document.querySelector("#changeCurrentText");
  els.useImportsChange = document.querySelector("#useImportsChange");
  els.resetChangeMonitor = document.querySelector("#resetChangeMonitor");
  els.exportChangeBrief = document.querySelector("#exportChangeBrief");
  els.changeMetricGrid = document.querySelector("#changeMetricGrid");
  els.changeAddedCount = document.querySelector("#changeAddedCount");
  els.changeAddedList = document.querySelector("#changeAddedList");
  els.changeReducedCount = document.querySelector("#changeReducedCount");
  els.changeReducedList = document.querySelector("#changeReducedList");
  els.changeQuestionCount = document.querySelector("#changeQuestionCount");
  els.changeQuestionQueue = document.querySelector("#changeQuestionQueue");
  els.matrixForm = document.querySelector("#matrixForm");
  els.matrixTicker = document.querySelector("#matrixTicker");
  els.matrixGrowth = document.querySelector("#matrixGrowth");
  els.matrixMargin = document.querySelector("#matrixMargin");
  els.matrixMultiple = document.querySelector("#matrixMultiple");
  els.matrixDiscount = document.querySelector("#matrixDiscount");
  els.matrixSpread = document.querySelector("#matrixSpread");
  els.matrixEvidenceBar = document.querySelector("#matrixEvidenceBar");
  els.matrixHorizon = document.querySelector("#matrixHorizon");
  els.useValuationLens = document.querySelector("#useValuationLens");
  els.resetMatrix = document.querySelector("#resetMatrix");
  els.exportMatrixBrief = document.querySelector("#exportMatrixBrief");
  els.matrixMetricGrid = document.querySelector("#matrixMetricGrid");
  els.matrixCaseCount = document.querySelector("#matrixCaseCount");
  els.matrixCaseList = document.querySelector("#matrixCaseList");
  els.matrixDriverLabel = document.querySelector("#matrixDriverLabel");
  els.matrixDriverList = document.querySelector("#matrixDriverList");
  els.matrixQuestionCount = document.querySelector("#matrixQuestionCount");
  els.matrixQuestionQueue = document.querySelector("#matrixQuestionQueue");
  els.tearForm = document.querySelector("#tearForm");
  els.tearTicker = document.querySelector("#tearTicker");
  els.tearStance = document.querySelector("#tearStance");
  els.tearConviction = document.querySelector("#tearConviction");
  els.tearHorizon = document.querySelector("#tearHorizon");
  els.tearDecisionNote = document.querySelector("#tearDecisionNote");
  els.useCurrentTear = document.querySelector("#useCurrentTear");
  els.resetTearSheet = document.querySelector("#resetTearSheet");
  els.exportTearSheet = document.querySelector("#exportTearSheet");
  els.tearMetricGrid = document.querySelector("#tearMetricGrid");
  els.tearThesisCount = document.querySelector("#tearThesisCount");
  els.tearThesisList = document.querySelector("#tearThesisList");
  els.tearRiskLabel = document.querySelector("#tearRiskLabel");
  els.tearValuationList = document.querySelector("#tearValuationList");
  els.tearActionCount = document.querySelector("#tearActionCount");
  els.tearActionQueue = document.querySelector("#tearActionQueue");
  els.debateForm = document.querySelector("#debateForm");
  els.debateTicker = document.querySelector("#debateTicker");
  els.debateMode = document.querySelector("#debateMode");
  els.debateEvidenceBar = document.querySelector("#debateEvidenceBar");
  els.debateHorizon = document.querySelector("#debateHorizon");
  els.debateThesis = document.querySelector("#debateThesis");
  els.useTearSheetDebate = document.querySelector("#useTearSheetDebate");
  els.resetDebate = document.querySelector("#resetDebate");
  els.exportDebateBrief = document.querySelector("#exportDebateBrief");
  els.debateMetricGrid = document.querySelector("#debateMetricGrid");
  els.debateBullScore = document.querySelector("#debateBullScore");
  els.debateBullList = document.querySelector("#debateBullList");
  els.debateBearScore = document.querySelector("#debateBearScore");
  els.debateBearList = document.querySelector("#debateBearList");
  els.debateQuestionCount = document.querySelector("#debateQuestionCount");
  els.debateQuestionQueue = document.querySelector("#debateQuestionQueue");
  els.dossierForm = document.querySelector("#dossierForm");
  els.dossierTicker = document.querySelector("#dossierTicker");
  els.dossierAudience = document.querySelector("#dossierAudience");
  els.dossierStyle = document.querySelector("#dossierStyle");
  els.dossierEvidenceBar = document.querySelector("#dossierEvidenceBar");
  els.dossierObjective = document.querySelector("#dossierObjective");
  els.useActiveDossier = document.querySelector("#useActiveDossier");
  els.resetDossier = document.querySelector("#resetDossier");
  els.exportDossierBrief = document.querySelector("#exportDossierBrief");
  els.dossierMetricGrid = document.querySelector("#dossierMetricGrid");
  els.dossierSectionCount = document.querySelector("#dossierSectionCount");
  els.dossierSectionList = document.querySelector("#dossierSectionList");
  els.dossierChecklistScore = document.querySelector("#dossierChecklistScore");
  els.dossierChecklist = document.querySelector("#dossierChecklist");
  els.dossierQueueCount = document.querySelector("#dossierQueueCount");
  els.dossierQuestionQueue = document.querySelector("#dossierQuestionQueue");
  els.timelineForm = document.querySelector("#timelineForm");
  els.timelineTicker = document.querySelector("#timelineTicker");
  els.timelineLens = document.querySelector("#timelineLens");
  els.timelineLookback = document.querySelector("#timelineLookback");
  els.timelineScope = document.querySelector("#timelineScope");
  els.timelineObjective = document.querySelector("#timelineObjective");
  els.useDossierTimeline = document.querySelector("#useDossierTimeline");
  els.resetTimeline = document.querySelector("#resetTimeline");
  els.exportTimelineBrief = document.querySelector("#exportTimelineBrief");
  els.timelineMetricGrid = document.querySelector("#timelineMetricGrid");
  els.timelineEventCount = document.querySelector("#timelineEventCount");
  els.timelineEventList = document.querySelector("#timelineEventList");
  els.timelineInflectionCount = document.querySelector("#timelineInflectionCount");
  els.timelineInflectionList = document.querySelector("#timelineInflectionList");
  els.timelineQuestionCount = document.querySelector("#timelineQuestionCount");
  els.timelineQuestionQueue = document.querySelector("#timelineQuestionQueue");
  els.briefingForm = document.querySelector("#briefingForm");
  els.briefingUniverse = document.querySelector("#briefingUniverse");
  els.briefingMode = document.querySelector("#briefingMode");
  els.briefingUrgency = document.querySelector("#briefingUrgency");
  els.briefingHorizon = document.querySelector("#briefingHorizon");
  els.briefingObjective = document.querySelector("#briefingObjective");
  els.useWorkspaceBriefing = document.querySelector("#useWorkspaceBriefing");
  els.resetBriefing = document.querySelector("#resetBriefing");
  els.exportBriefingBrief = document.querySelector("#exportBriefingBrief");
  els.briefingMetricGrid = document.querySelector("#briefingMetricGrid");
  els.briefingAgendaCount = document.querySelector("#briefingAgendaCount");
  els.briefingAgendaList = document.querySelector("#briefingAgendaList");
  els.briefingRiskCount = document.querySelector("#briefingRiskCount");
  els.briefingRiskList = document.querySelector("#briefingRiskList");
  els.briefingQuestionCount = document.querySelector("#briefingQuestionCount");
  els.briefingQuestionQueue = document.querySelector("#briefingQuestionQueue");
  els.callPrepForm = document.querySelector("#callPrepForm");
  els.callPrepTicker = document.querySelector("#callPrepTicker");
  els.callPrepEvent = document.querySelector("#callPrepEvent");
  els.callPrepStyle = document.querySelector("#callPrepStyle");
  els.callPrepFocus = document.querySelector("#callPrepFocus");
  els.callPrepObjective = document.querySelector("#callPrepObjective");
  els.useBriefingCallPrep = document.querySelector("#useBriefingCallPrep");
  els.resetCallPrep = document.querySelector("#resetCallPrep");
  els.exportCallPrepBrief = document.querySelector("#exportCallPrepBrief");
  els.callPrepMetricGrid = document.querySelector("#callPrepMetricGrid");
  els.callPrepQuestionCount = document.querySelector("#callPrepQuestionCount");
  els.callPrepQuestionList = document.querySelector("#callPrepQuestionList");
  els.callPrepReadoutCount = document.querySelector("#callPrepReadoutCount");
  els.callPrepReadoutList = document.querySelector("#callPrepReadoutList");
  els.callPrepScoreCount = document.querySelector("#callPrepScoreCount");
  els.callPrepScoreList = document.querySelector("#callPrepScoreList");
  els.debriefForm = document.querySelector("#debriefForm");
  els.debriefTicker = document.querySelector("#debriefTicker");
  els.debriefEvent = document.querySelector("#debriefEvent");
  els.debriefMode = document.querySelector("#debriefMode");
  els.debriefMarketMove = document.querySelector("#debriefMarketMove");
  els.debriefTranscript = document.querySelector("#debriefTranscript");
  els.useCallPrepDebrief = document.querySelector("#useCallPrepDebrief");
  els.resetDebrief = document.querySelector("#resetDebrief");
  els.exportDebriefBrief = document.querySelector("#exportDebriefBrief");
  els.debriefMetricGrid = document.querySelector("#debriefMetricGrid");
  els.debriefSurpriseCount = document.querySelector("#debriefSurpriseCount");
  els.debriefSurpriseList = document.querySelector("#debriefSurpriseList");
  els.debriefThesisCount = document.querySelector("#debriefThesisCount");
  els.debriefThesisList = document.querySelector("#debriefThesisList");
  els.debriefActionCount = document.querySelector("#debriefActionCount");
  els.debriefActionList = document.querySelector("#debriefActionList");
  els.revisionForm = document.querySelector("#revisionForm");
  els.revisionTicker = document.querySelector("#revisionTicker");
  els.revisionPeriod = document.querySelector("#revisionPeriod");
  els.revisionRevenueGuide = document.querySelector("#revisionRevenueGuide");
  els.revisionConsensus = document.querySelector("#revisionConsensus");
  els.revisionMarginGuide = document.querySelector("#revisionMarginGuide");
  els.revisionPriorModel = document.querySelector("#revisionPriorModel");
  els.revisionConfidence = document.querySelector("#revisionConfidence");
  els.revisionMode = document.querySelector("#revisionMode");
  els.revisionNote = document.querySelector("#revisionNote");
  els.useDebriefRevision = document.querySelector("#useDebriefRevision");
  els.resetRevision = document.querySelector("#resetRevision");
  els.exportRevisionBrief = document.querySelector("#exportRevisionBrief");
  els.revisionMetricGrid = document.querySelector("#revisionMetricGrid");
  els.revisionBridgeCount = document.querySelector("#revisionBridgeCount");
  els.revisionBridgeList = document.querySelector("#revisionBridgeList");
  els.revisionEstimateCount = document.querySelector("#revisionEstimateCount");
  els.revisionEstimateList = document.querySelector("#revisionEstimateList");
  els.revisionActionCount = document.querySelector("#revisionActionCount");
  els.revisionActionList = document.querySelector("#revisionActionList");
  els.modelControlForm = document.querySelector("#modelControlForm");
  els.modelControlTicker = document.querySelector("#modelControlTicker");
  els.modelControlVersion = document.querySelector("#modelControlVersion");
  els.modelControlOwner = document.querySelector("#modelControlOwner");
  els.modelControlStatus = document.querySelector("#modelControlStatus");
  els.modelControlGrowth = document.querySelector("#modelControlGrowth");
  els.modelControlMargin = document.querySelector("#modelControlMargin");
  els.modelControlMultiple = document.querySelector("#modelControlMultiple");
  els.modelControlDiscount = document.querySelector("#modelControlDiscount");
  els.modelControlRationale = document.querySelector("#modelControlRationale");
  els.useRevisionModelControl = document.querySelector("#useRevisionModelControl");
  els.resetModelControl = document.querySelector("#resetModelControl");
  els.exportModelControlBrief = document.querySelector("#exportModelControlBrief");
  els.modelControlMetricGrid = document.querySelector("#modelControlMetricGrid");
  els.modelControlDeltaCount = document.querySelector("#modelControlDeltaCount");
  els.modelControlDeltaList = document.querySelector("#modelControlDeltaList");
  els.modelControlGateCount = document.querySelector("#modelControlGateCount");
  els.modelControlGateList = document.querySelector("#modelControlGateList");
  els.modelControlActionCount = document.querySelector("#modelControlActionCount");
  els.modelControlActionList = document.querySelector("#modelControlActionList");
  els.approvalForm = document.querySelector("#approvalForm");
  els.approvalTicker = document.querySelector("#approvalTicker");
  els.approvalRequest = document.querySelector("#approvalRequest");
  els.approvalReviewer = document.querySelector("#approvalReviewer");
  els.approvalWindow = document.querySelector("#approvalWindow");
  els.approvalRequiredCitations = document.querySelector("#approvalRequiredCitations");
  els.approvalValueLimit = document.querySelector("#approvalValueLimit");
  els.approvalRiskTolerance = document.querySelector("#approvalRiskTolerance");
  els.approvalOutput = document.querySelector("#approvalOutput");
  els.approvalNote = document.querySelector("#approvalNote");
  els.useModelControlApproval = document.querySelector("#useModelControlApproval");
  els.resetApproval = document.querySelector("#resetApproval");
  els.exportApprovalBrief = document.querySelector("#exportApprovalBrief");
  els.approvalMetricGrid = document.querySelector("#approvalMetricGrid");
  els.approvalDecisionCount = document.querySelector("#approvalDecisionCount");
  els.approvalDecisionList = document.querySelector("#approvalDecisionList");
  els.approvalConditionCount = document.querySelector("#approvalConditionCount");
  els.approvalConditionList = document.querySelector("#approvalConditionList");
  els.approvalActionCount = document.querySelector("#approvalActionCount");
  els.approvalActionList = document.querySelector("#approvalActionList");
  els.portfolioActionForm = document.querySelector("#portfolioActionForm");
  els.portfolioActionTicker = document.querySelector("#portfolioActionTicker");
  els.portfolioActionCurrentWeight = document.querySelector("#portfolioActionCurrentWeight");
  els.portfolioActionTargetWeight = document.querySelector("#portfolioActionTargetWeight");
  els.portfolioActionMaxWeight = document.querySelector("#portfolioActionMaxWeight");
  els.portfolioActionStyle = document.querySelector("#portfolioActionStyle");
  els.portfolioActionHorizon = document.querySelector("#portfolioActionHorizon");
  els.portfolioActionRiskBudget = document.querySelector("#portfolioActionRiskBudget");
  els.portfolioActionCadence = document.querySelector("#portfolioActionCadence");
  els.portfolioActionRationale = document.querySelector("#portfolioActionRationale");
  els.useApprovalPortfolioAction = document.querySelector("#useApprovalPortfolioAction");
  els.resetPortfolioAction = document.querySelector("#resetPortfolioAction");
  els.exportPortfolioActionBrief = document.querySelector("#exportPortfolioActionBrief");
  els.portfolioActionMetricGrid = document.querySelector("#portfolioActionMetricGrid");
  els.portfolioActionSizingCount = document.querySelector("#portfolioActionSizingCount");
  els.portfolioActionSizingList = document.querySelector("#portfolioActionSizingList");
  els.portfolioActionRiskCount = document.querySelector("#portfolioActionRiskCount");
  els.portfolioActionRiskList = document.querySelector("#portfolioActionRiskList");
  els.portfolioActionMonitorCount = document.querySelector("#portfolioActionMonitorCount");
  els.portfolioActionMonitorList = document.querySelector("#portfolioActionMonitorList");
  els.researchQueueForm = document.querySelector("#researchQueueForm");
  els.researchQueueUniverse = document.querySelector("#researchQueueUniverse");
  els.researchQueueMode = document.querySelector("#researchQueueMode");
  els.researchQueueCadence = document.querySelector("#researchQueueCadence");
  els.researchQueueSla = document.querySelector("#researchQueueSla");
  els.researchQueueMinSources = document.querySelector("#researchQueueMinSources");
  els.researchQueueRiskTrigger = document.querySelector("#researchQueueRiskTrigger");
  els.researchQueueOwner = document.querySelector("#researchQueueOwner");
  els.researchQueueOutput = document.querySelector("#researchQueueOutput");
  els.researchQueueNote = document.querySelector("#researchQueueNote");
  els.usePortfolioResearchQueue = document.querySelector("#usePortfolioResearchQueue");
  els.resetResearchQueue = document.querySelector("#resetResearchQueue");
  els.exportResearchQueueBrief = document.querySelector("#exportResearchQueueBrief");
  els.researchQueueMetricGrid = document.querySelector("#researchQueueMetricGrid");
  els.researchQueueTaskCount = document.querySelector("#researchQueueTaskCount");
  els.researchQueueTaskList = document.querySelector("#researchQueueTaskList");
  els.researchQueueRuleCount = document.querySelector("#researchQueueRuleCount");
  els.researchQueueRuleList = document.querySelector("#researchQueueRuleList");
  els.researchQueueGapCount = document.querySelector("#researchQueueGapCount");
  els.researchQueueGapList = document.querySelector("#researchQueueGapList");
  els.researchSlaForm = document.querySelector("#researchSlaForm");
  els.researchSlaStart = document.querySelector("#researchSlaStart");
  els.researchSlaWindow = document.querySelector("#researchSlaWindow");
  els.researchSlaCapacity = document.querySelector("#researchSlaCapacity");
  els.researchSlaFreshness = document.querySelector("#researchSlaFreshness");
  els.researchSlaEscalation = document.querySelector("#researchSlaEscalation");
  els.researchSlaOwner = document.querySelector("#researchSlaOwner");
  els.researchSlaLane = document.querySelector("#researchSlaLane");
  els.researchSlaOutput = document.querySelector("#researchSlaOutput");
  els.researchSlaNote = document.querySelector("#researchSlaNote");
  els.useQueueResearchSla = document.querySelector("#useQueueResearchSla");
  els.resetResearchSla = document.querySelector("#resetResearchSla");
  els.exportResearchSlaBrief = document.querySelector("#exportResearchSlaBrief");
  els.researchSlaMetricGrid = document.querySelector("#researchSlaMetricGrid");
  els.researchSlaDueCount = document.querySelector("#researchSlaDueCount");
  els.researchSlaDueList = document.querySelector("#researchSlaDueList");
  els.researchSlaEscalationCount = document.querySelector("#researchSlaEscalationCount");
  els.researchSlaEscalationList = document.querySelector("#researchSlaEscalationList");
  els.researchSlaFreshnessCount = document.querySelector("#researchSlaFreshnessCount");
  els.researchSlaFreshnessList = document.querySelector("#researchSlaFreshnessList");
  els.researchOutcomeForm = document.querySelector("#researchOutcomeForm");
  els.researchOutcomeTicker = document.querySelector("#researchOutcomeTicker");
  els.researchOutcomeDate = document.querySelector("#researchOutcomeDate");
  els.researchOutcomeHorizon = document.querySelector("#researchOutcomeHorizon");
  els.researchOutcomeDirection = document.querySelector("#researchOutcomeDirection");
  els.researchOutcomeExpectedMove = document.querySelector("#researchOutcomeExpectedMove");
  els.researchOutcomeActualMove = document.querySelector("#researchOutcomeActualMove");
  els.researchOutcomeConfidence = document.querySelector("#researchOutcomeConfidence");
  els.researchOutcomeStandard = document.querySelector("#researchOutcomeStandard");
  els.researchOutcomeNote = document.querySelector("#researchOutcomeNote");
  els.useScheduleResearchOutcome = document.querySelector("#useScheduleResearchOutcome");
  els.resetResearchOutcome = document.querySelector("#resetResearchOutcome");
  els.exportResearchOutcomeBrief = document.querySelector("#exportResearchOutcomeBrief");
  els.researchOutcomeMetricGrid = document.querySelector("#researchOutcomeMetricGrid");
  els.researchOutcomeReadCount = document.querySelector("#researchOutcomeReadCount");
  els.researchOutcomeReadList = document.querySelector("#researchOutcomeReadList");
  els.researchOutcomeDriftCount = document.querySelector("#researchOutcomeDriftCount");
  els.researchOutcomeDriftList = document.querySelector("#researchOutcomeDriftList");
  els.researchOutcomeLearningCount = document.querySelector("#researchOutcomeLearningCount");
  els.researchOutcomeLearningList = document.querySelector("#researchOutcomeLearningList");
  els.researchMemoryForm = document.querySelector("#researchMemoryForm");
  els.researchMemoryUniverse = document.querySelector("#researchMemoryUniverse");
  els.researchMemoryMode = document.querySelector("#researchMemoryMode");
  els.researchMemoryLookback = document.querySelector("#researchMemoryLookback");
  els.researchMemoryMinScore = document.querySelector("#researchMemoryMinScore");
  els.researchMemorySensitivity = document.querySelector("#researchMemorySensitivity");
  els.researchMemoryOwner = document.querySelector("#researchMemoryOwner");
  els.researchMemoryOutput = document.querySelector("#researchMemoryOutput");
  els.researchMemoryReuse = document.querySelector("#researchMemoryReuse");
  els.researchMemoryNote = document.querySelector("#researchMemoryNote");
  els.useOutcomeResearchMemory = document.querySelector("#useOutcomeResearchMemory");
  els.resetResearchMemory = document.querySelector("#resetResearchMemory");
  els.exportResearchMemoryBrief = document.querySelector("#exportResearchMemoryBrief");
  els.researchMemoryMetricGrid = document.querySelector("#researchMemoryMetricGrid");
  els.researchMemoryPatternCount = document.querySelector("#researchMemoryPatternCount");
  els.researchMemoryPatternList = document.querySelector("#researchMemoryPatternList");
  els.researchMemoryRuleCount = document.querySelector("#researchMemoryRuleCount");
  els.researchMemoryRuleList = document.querySelector("#researchMemoryRuleList");
  els.researchMemoryReuseCount = document.querySelector("#researchMemoryReuseCount");
  els.researchMemoryReuseList = document.querySelector("#researchMemoryReuseList");
  els.guidedNavigatorForm = document.querySelector("#guidedNavigatorForm");
  els.guidedNavigatorObjective = document.querySelector("#guidedNavigatorObjective");
  els.guidedNavigatorTicker = document.querySelector("#guidedNavigatorTicker");
  els.guidedNavigatorDataPath = document.querySelector("#guidedNavigatorDataPath");
  els.guidedNavigatorTimeBudget = document.querySelector("#guidedNavigatorTimeBudget");
  els.guidedNavigatorOutput = document.querySelector("#guidedNavigatorOutput");
  els.guidedNavigatorAudience = document.querySelector("#guidedNavigatorAudience");
  els.guidedNavigatorNote = document.querySelector("#guidedNavigatorNote");
  els.useCurrentNavigator = document.querySelector("#useCurrentNavigator");
  els.runNavigatorQuestion = document.querySelector("#runNavigatorQuestion");
  els.resetNavigator = document.querySelector("#resetNavigator");
  els.exportNavigatorBrief = document.querySelector("#exportNavigatorBrief");
  els.navigatorMetricGrid = document.querySelector("#navigatorMetricGrid");
  els.navigatorStepCount = document.querySelector("#navigatorStepCount");
  els.navigatorStepList = document.querySelector("#navigatorStepList");
  els.navigatorQuestionCount = document.querySelector("#navigatorQuestionCount");
  els.navigatorQuestionList = document.querySelector("#navigatorQuestionList");
  els.navigatorScriptCount = document.querySelector("#navigatorScriptCount");
  els.navigatorScriptList = document.querySelector("#navigatorScriptList");
  els.pilotDemoForm = document.querySelector("#pilotDemoForm");
  els.pilotDemoPersona = document.querySelector("#pilotDemoPersona");
  els.pilotDemoMoment = document.querySelector("#pilotDemoMoment");
  els.pilotDemoTicker = document.querySelector("#pilotDemoTicker");
  els.pilotDemoProof = document.querySelector("#pilotDemoProof");
  els.pilotDemoLength = document.querySelector("#pilotDemoLength");
  els.pilotDemoObjection = document.querySelector("#pilotDemoObjection");
  els.pilotDemoNextStep = document.querySelector("#pilotDemoNextStep");
  els.pilotDemoNote = document.querySelector("#pilotDemoNote");
  els.useNavigatorPilotDemo = document.querySelector("#useNavigatorPilotDemo");
  els.runPilotDemoQuestion = document.querySelector("#runPilotDemoQuestion");
  els.resetPilotDemo = document.querySelector("#resetPilotDemo");
  els.exportPilotDemoBrief = document.querySelector("#exportPilotDemoBrief");
  els.pilotDemoMetricGrid = document.querySelector("#pilotDemoMetricGrid");
  els.pilotDemoFlowCount = document.querySelector("#pilotDemoFlowCount");
  els.pilotDemoFlowList = document.querySelector("#pilotDemoFlowList");
  els.pilotDemoObjectionCount = document.querySelector("#pilotDemoObjectionCount");
  els.pilotDemoObjectionList = document.querySelector("#pilotDemoObjectionList");
  els.pilotDemoCloseCount = document.querySelector("#pilotDemoCloseCount");
  els.pilotDemoCloseList = document.querySelector("#pilotDemoCloseList");
  els.pilotFeedbackForm = document.querySelector("#pilotFeedbackForm");
  els.pilotFeedbackLead = document.querySelector("#pilotFeedbackLead");
  els.pilotFeedbackSegment = document.querySelector("#pilotFeedbackSegment");
  els.pilotFeedbackResult = document.querySelector("#pilotFeedbackResult");
  els.pilotFeedbackBudget = document.querySelector("#pilotFeedbackBudget");
  els.pilotFeedbackUrgency = document.querySelector("#pilotFeedbackUrgency");
  els.pilotFeedbackTrust = document.querySelector("#pilotFeedbackTrust");
  els.pilotFeedbackFeature = document.querySelector("#pilotFeedbackFeature");
  els.pilotFeedbackNextStep = document.querySelector("#pilotFeedbackNextStep");
  els.pilotFeedbackNote = document.querySelector("#pilotFeedbackNote");
  els.savePilotFeedbackSignal = document.querySelector("#savePilotFeedbackSignal");
  els.useDemoPilotFeedback = document.querySelector("#useDemoPilotFeedback");
  els.resetPilotFeedback = document.querySelector("#resetPilotFeedback");
  els.clearPilotFeedbackLog = document.querySelector("#clearPilotFeedbackLog");
  els.exportPilotFeedbackBrief = document.querySelector("#exportPilotFeedbackBrief");
  els.pilotFeedbackMetricGrid = document.querySelector("#pilotFeedbackMetricGrid");
  els.pilotFeedbackFollowCount = document.querySelector("#pilotFeedbackFollowCount");
  els.pilotFeedbackFollowList = document.querySelector("#pilotFeedbackFollowList");
  els.pilotFeedbackLearningCount = document.querySelector("#pilotFeedbackLearningCount");
  els.pilotFeedbackLearningList = document.querySelector("#pilotFeedbackLearningList");
  els.pilotFeedbackSignalCount = document.querySelector("#pilotFeedbackSignalCount");
  els.pilotFeedbackSignalList = document.querySelector("#pilotFeedbackSignalList");
  els.pilotCohortForm = document.querySelector("#pilotCohortForm");
  els.pilotCohortGoal = document.querySelector("#pilotCohortGoal");
  els.pilotCohortSegment = document.querySelector("#pilotCohortSegment");
  els.pilotCohortSize = document.querySelector("#pilotCohortSize");
  els.pilotCohortChannel = document.querySelector("#pilotCohortChannel");
  els.pilotCohortOffer = document.querySelector("#pilotCohortOffer");
  els.pilotCohortProof = document.querySelector("#pilotCohortProof");
  els.pilotCohortCadence = document.querySelector("#pilotCohortCadence");
  els.pilotCohortOwner = document.querySelector("#pilotCohortOwner");
  els.pilotCohortNote = document.querySelector("#pilotCohortNote");
  els.useFeedbackPilotCohort = document.querySelector("#useFeedbackPilotCohort");
  els.savePilotCohortSnapshot = document.querySelector("#savePilotCohortSnapshot");
  els.resetPilotCohort = document.querySelector("#resetPilotCohort");
  els.clearPilotCohortSnapshots = document.querySelector("#clearPilotCohortSnapshots");
  els.exportPilotCohortBrief = document.querySelector("#exportPilotCohortBrief");
  els.pilotCohortMetricGrid = document.querySelector("#pilotCohortMetricGrid");
  els.pilotCohortOutreachCount = document.querySelector("#pilotCohortOutreachCount");
  els.pilotCohortOutreachList = document.querySelector("#pilotCohortOutreachList");
  els.pilotCohortExperimentCount = document.querySelector("#pilotCohortExperimentCount");
  els.pilotCohortExperimentList = document.querySelector("#pilotCohortExperimentList");
  els.pilotCohortSnapshotCount = document.querySelector("#pilotCohortSnapshotCount");
  els.pilotCohortSnapshotList = document.querySelector("#pilotCohortSnapshotList");
  els.pilotOutreachForm = document.querySelector("#pilotOutreachForm");
  els.pilotOutreachLead = document.querySelector("#pilotOutreachLead");
  els.pilotOutreachChannel = document.querySelector("#pilotOutreachChannel");
  els.pilotOutreachTone = document.querySelector("#pilotOutreachTone");
  els.pilotOutreachOffer = document.querySelector("#pilotOutreachOffer");
  els.pilotOutreachProof = document.querySelector("#pilotOutreachProof");
  els.pilotOutreachCta = document.querySelector("#pilotOutreachCta");
  els.pilotOutreachFollowup = document.querySelector("#pilotOutreachFollowup");
  els.pilotOutreachOwner = document.querySelector("#pilotOutreachOwner");
  els.pilotOutreachReplyText = document.querySelector("#pilotOutreachReplyText");
  els.useCohortPilotOutreach = document.querySelector("#useCohortPilotOutreach");
  els.savePilotOutreachReply = document.querySelector("#savePilotOutreachReply");
  els.resetPilotOutreach = document.querySelector("#resetPilotOutreach");
  els.clearPilotOutreachReplies = document.querySelector("#clearPilotOutreachReplies");
  els.exportPilotOutreachBrief = document.querySelector("#exportPilotOutreachBrief");
  els.pilotOutreachMetricGrid = document.querySelector("#pilotOutreachMetricGrid");
  els.pilotOutreachMessageCount = document.querySelector("#pilotOutreachMessageCount");
  els.pilotOutreachMessageList = document.querySelector("#pilotOutreachMessageList");
  els.pilotOutreachReplyCount = document.querySelector("#pilotOutreachReplyCount");
  els.pilotOutreachReplyList = document.querySelector("#pilotOutreachReplyList");
  els.pilotOutreachSavedCount = document.querySelector("#pilotOutreachSavedCount");
  els.pilotOutreachSavedList = document.querySelector("#pilotOutreachSavedList");
  els.pilotActivationForm = document.querySelector("#pilotActivationForm");
  els.pilotActivationUser = document.querySelector("#pilotActivationUser");
  els.pilotActivationPersona = document.querySelector("#pilotActivationPersona");
  els.pilotActivationSource = document.querySelector("#pilotActivationSource");
  els.pilotActivationWorkflow = document.querySelector("#pilotActivationWorkflow");
  els.pilotActivationAha = document.querySelector("#pilotActivationAha");
  els.pilotActivationPayment = document.querySelector("#pilotActivationPayment");
  els.pilotActivationCadence = document.querySelector("#pilotActivationCadence");
  els.pilotActivationOwner = document.querySelector("#pilotActivationOwner");
  els.pilotActivationNote = document.querySelector("#pilotActivationNote");
  els.useOutreachPilotActivation = document.querySelector("#useOutreachPilotActivation");
  els.savePilotActivationSession = document.querySelector("#savePilotActivationSession");
  els.resetPilotActivation = document.querySelector("#resetPilotActivation");
  els.clearPilotActivationSessions = document.querySelector("#clearPilotActivationSessions");
  els.exportPilotActivationBrief = document.querySelector("#exportPilotActivationBrief");
  els.pilotActivationMetricGrid = document.querySelector("#pilotActivationMetricGrid");
  els.pilotActivationStepCount = document.querySelector("#pilotActivationStepCount");
  els.pilotActivationStepList = document.querySelector("#pilotActivationStepList");
  els.pilotActivationRiskCount = document.querySelector("#pilotActivationRiskCount");
  els.pilotActivationRiskList = document.querySelector("#pilotActivationRiskList");
  els.pilotActivationSessionCount = document.querySelector("#pilotActivationSessionCount");
  els.pilotActivationSessionList = document.querySelector("#pilotActivationSessionList");
}

function bindEvents() {
  els.queryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submitCurrentQuestion();
  });

  els.queryInput.addEventListener("input", () => {
    state.lastQuestionSecurity = assessTextSecurity(els.queryInput.value, "Question");
    renderQuestionSecurityStrip();
    renderSecurityPosture();
    renderMarketStatusRail();
    syncTickerFocus(els.queryInput.value);
  });

  els.scanFilingButton.addEventListener("click", (event) => {
    event.preventDefault();
    scanFilingFromCurrentQuestion();
  });
  els.runAnalysisButton.addEventListener("click", (event) => {
    event.preventDefault();
    submitCurrentQuestion();
  });

  document.querySelectorAll(".segment").forEach((button) => {
    button.addEventListener("click", () => {
      state.answerDepth = button.dataset.depth;
      document.querySelectorAll(".segment").forEach((candidate) => candidate.classList.toggle("is-active", candidate === button));
      if (els.queryInput.value.trim()) {
        runAnalysis(els.queryInput.value.trim());
      }
    });
  });

  els.selectAllTickers.addEventListener("click", () => {
    state.activeTickers = new Set(getCompanies().map((company) => company.ticker));
    renderCoverage();
    renderContextBand();
    renderMarketStatusRail();
    renderLaunchOps();
    drawSignalMap();
  });

  els.fileInput.addEventListener("change", async () => {
    const files = Array.from(els.fileInput.files || []);
    await processFiles(files);
    els.fileInput.value = "";
  });

  els.fileDrop.addEventListener("dragover", (event) => {
    event.preventDefault();
    els.fileDrop.classList.add("is-dragging");
  });

  els.fileDrop.addEventListener("dragleave", () => {
    els.fileDrop.classList.remove("is-dragging");
  });

  els.fileDrop.addEventListener("drop", async (event) => {
    event.preventDefault();
    els.fileDrop.classList.remove("is-dragging");
    const files = Array.from(event.dataTransfer.files || []);
    await processFiles(files);
  });

  els.demoPackActions.querySelectorAll("[data-pack]").forEach((button) => {
    button.addEventListener("click", () => {
      loadDemoImportPack(button.dataset.pack);
    });
  });

  els.secBridgeForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    await connectSecFilingBridge();
  });

  els.liveDataForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    await connectMarketBridge();
  });

  els.marketProvider.addEventListener("change", () => {
    state.marketSettings.provider = els.marketProvider.value;
    state.marketSettings.ticker = normalizeTicker(els.marketTicker.value || state.marketSettings.ticker || "NVDA");
    saveMarketSettings();
    renderLiveDataControl();
    renderMarketStatusRail();
  });

  els.marketTicker.addEventListener("input", () => {
    state.marketSettings.ticker = normalizeTicker(els.marketTicker.value || "NVDA");
    saveMarketSettings();
  });

  els.pasteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = els.pasteText.value.trim();
    if (!text) {
      els.pasteText.focus();
      return;
    }
    addUploadedDocs([
      makeUploadedDoc({
        ticker: els.pasteTicker.value,
        title: els.pasteTitle.value,
        type: els.pasteType.value,
        text
      })
    ]);
    els.pasteText.value = "";
  });

  els.clearUploads.addEventListener("click", () => {
    state.uploadedDocs = [];
    state.documents = [...SAMPLE_DOCS];
    state.enabledDocIds = new Set(state.documents.map((doc) => doc.id));
    state.activeTickers = new Set(SAMPLE_COMPANIES.map((company) => company.ticker));
    state.lastImportAudit = null;
    state.lastQuestionSecurity = null;
    saveJson(STORAGE_KEYS.uploads, []);
  renderCoverage();
  renderLibrary();
  renderSourceQuality();
  renderSecurityPosture();
  renderQuestionSecurityStrip();
  renderContextBand();
  renderMarketStatusRail();
  renderValuationOptions();
  updateValuationFromCompany();
  updateValuation();
  renderMarketQuoteCard();
  renderLaunchOps();
  renderFilingChangeMonitor();
  renderValuationMatrix();
  renderResearchTearSheet();
  renderThesisDebateRoom();
  renderResearchDossierBuilder();
  drawSignalMap();
});

  els.valuationTicker.addEventListener("change", () => {
    state.selectedTicker = els.valuationTicker.value;
    updateValuationFromCompany();
    updateValuation();
    renderMarketQuoteCard();
    drawSignalMap();
  });

  [els.growthSlider, els.marginSlider, els.multipleSlider, els.discountSlider].forEach((slider) => {
    slider.addEventListener("input", updateValuation);
  });

  els.copyBrief.addEventListener("click", copyCurrentBrief);
  els.saveBrief.addEventListener("click", saveCurrentBrief);
  els.exportPdfBrief.addEventListener("click", exportPdfBrief);
  els.exportMarkdownBrief.addEventListener("click", exportMarkdownBrief);
  els.clearNotes.addEventListener("click", () => {
    state.notes = [];
    saveJson(STORAGE_KEYS.notes, state.notes);
    renderNotebook();
    renderLaunchOps();
  });

  els.waitlistForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    await submitWaitlistLead();
  });

  if (els.exportFounderBrief) {
    els.exportFounderBrief.addEventListener("click", exportFounderBrief);
  }

  if (els.applyPortfolio) {
    els.applyPortfolio.addEventListener("click", () => {
      state.portfolioPositions = parsePortfolioInput(els.portfolioInput.value);
      savePortfolioPositions();
      renderPortfolioLens();
      flashButtonLabel(els.applyPortfolio, "Updated");
    });
  }

  if (els.useActiveTickers) {
    els.useActiveTickers.addEventListener("click", () => {
      state.portfolioPositions = buildActiveTickerPortfolio();
      savePortfolioPositions();
      syncPortfolioInput();
      renderPortfolioLens();
      flashButtonLabel(els.useActiveTickers, "Loaded");
    });
  }

  if (els.exportPortfolioBrief) {
    els.exportPortfolioBrief.addEventListener("click", exportPortfolioBrief);
  }

  if (els.decisionForm) {
    els.decisionForm.addEventListener("submit", (event) => {
      event.preventDefault();
      renderDecisionRoom();
      flashButtonLabel(els.decisionForm.querySelector("button[type='submit']"), "Scored");
    });
  }

  if (els.saveDecision) {
    els.saveDecision.addEventListener("click", saveDecisionMemo);
  }

  if (els.useCurrentResearch) {
    els.useCurrentResearch.addEventListener("click", hydrateDecisionFromCurrentResearch);
  }

  if (els.exportDecisionMemo) {
    els.exportDecisionMemo.addEventListener("click", exportDecisionMemo);
  }

  if (els.alertForm) {
    els.alertForm.addEventListener("submit", (event) => {
      event.preventDefault();
      createAlertFromForm();
    });
    if (!els.alertDueDate.value) els.alertDueDate.value = dateAfterDays(7);
  }

  if (els.buildAlertsFromPortfolio) {
    els.buildAlertsFromPortfolio.addEventListener("click", buildAlertsFromPortfolio);
  }

  if (els.clearAlerts) {
    els.clearAlerts.addEventListener("click", () => {
      state.alertRules = [];
      saveAlertRules();
      renderAlertCenter();
      renderLaunchOps();
      flashButtonLabel(els.clearAlerts, "Cleared");
    });
  }

  if (els.exportAlertBrief) {
    els.exportAlertBrief.addEventListener("click", exportAlertBrief);
  }

  if (els.alertActionQueue) {
    els.alertActionQueue.addEventListener("click", (event) => {
      const button = event.target.closest("[data-alert-question]");
      if (!button) return;
      const question = button.dataset.alertQuestion;
      els.queryInput.value = question;
      state.lastQuestionSecurity = assessTextSecurity(question, "Question");
      renderQuestionSecurityStrip();
      renderSecurityPosture();
      syncTickerFocus(question);
      document.querySelector("#desk")?.scrollIntoView({ behavior: "smooth", block: "start" });
      submitCurrentQuestion();
    });
  }

  if (els.revenueForm) {
    els.revenueForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.revenueModel = readRevenueModel();
      saveRevenueModel();
      renderRevenueConsole();
      flashButtonLabel(els.revenueForm.querySelector("button[type='submit']"), "Updated");
    });
  }

  if (els.useWaitlistRevenue) {
    els.useWaitlistRevenue.addEventListener("click", () => {
      state.revenueModel = buildRevenueModelFromWaitlist();
      saveRevenueModel();
      syncRevenueInputs();
      renderRevenueConsole();
      flashButtonLabel(els.useWaitlistRevenue, "Loaded");
    });
  }

  if (els.resetRevenueModel) {
    els.resetRevenueModel.addEventListener("click", () => {
      state.revenueModel = getDefaultRevenueModel();
      saveRevenueModel();
      syncRevenueInputs();
      renderRevenueConsole();
      flashButtonLabel(els.resetRevenueModel, "Reset");
    });
  }

  if (els.exportRevenueBrief) {
    els.exportRevenueBrief.addEventListener("click", exportRevenueBrief);
  }

  if (els.pipelineForm) {
    els.pipelineForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.pipelineModel = readPipelineModel();
      savePipelineModel();
      renderPipelineConsole();
      flashButtonLabel(els.pipelineForm.querySelector("button[type='submit']"), "Updated");
    });
  }

  if (els.usePilotScale) {
    els.usePilotScale.addEventListener("click", () => {
      state.pipelineModel = getPipelinePreset("pilot");
      savePipelineModel();
      syncPipelineInputs();
      renderPipelineConsole();
      flashButtonLabel(els.usePilotScale, "Loaded");
    });
  }

  if (els.useMvpScale) {
    els.useMvpScale.addEventListener("click", () => {
      state.pipelineModel = getPipelinePreset("mvp");
      savePipelineModel();
      syncPipelineInputs();
      renderPipelineConsole();
      flashButtonLabel(els.useMvpScale, "Loaded");
    });
  }

  if (els.exportPipelineBrief) {
    els.exportPipelineBrief.addEventListener("click", exportPipelineBrief);
  }

  if (els.evalForm) {
    els.evalForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.evalConfig = readEvalConfig();
      saveEvalConfig();
      renderEvalLab();
      flashButtonLabel(els.evalForm.querySelector("button[type='submit']"), "Scored");
    });
  }

  if (els.useCurrentAnswerEval) {
    els.useCurrentAnswerEval.addEventListener("click", () => {
      hydrateEvalFromCurrentAnswer();
      saveEvalConfig();
      syncEvalInputs();
      renderEvalLab();
      flashButtonLabel(els.useCurrentAnswerEval, "Loaded");
    });
  }

  if (els.resetEvalSuite) {
    els.resetEvalSuite.addEventListener("click", () => {
      state.evalConfig = getDefaultEvalConfig();
      saveEvalConfig();
      syncEvalInputs();
      renderEvalLab();
      flashButtonLabel(els.resetEvalSuite, "Reset");
    });
  }

  if (els.exportEvalBrief) {
    els.exportEvalBrief.addEventListener("click", exportEvalBrief);
  }

  if (els.complianceForm) {
    els.complianceForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.complianceModel = readComplianceModel();
      saveComplianceModel();
      recordComplianceEvent("Policy check", "Manual compliance check run against the current workspace.");
      renderComplianceCenter();
      flashButtonLabel(els.complianceForm.querySelector("button[type='submit']"), "Checked");
    });
  }

  if (els.useCurrentAnswerCompliance) {
    els.useCurrentAnswerCompliance.addEventListener("click", () => {
      hydrateComplianceFromCurrentAnswer();
      saveComplianceModel();
      recordComplianceEvent("Answer review", "Current answer loaded into the compliance control set.");
      syncComplianceInputs();
      renderComplianceCenter();
      flashButtonLabel(els.useCurrentAnswerCompliance, "Loaded");
    });
  }

  if (els.resetCompliance) {
    els.resetCompliance.addEventListener("click", () => {
      state.complianceModel = getDefaultComplianceModel();
      saveComplianceModel();
      recordComplianceEvent("Policy reset", "Compliance settings reset to the default research-only posture.");
      syncComplianceInputs();
      renderComplianceCenter();
      flashButtonLabel(els.resetCompliance, "Reset");
    });
  }

  if (els.exportComplianceBrief) {
    els.exportComplianceBrief.addEventListener("click", exportComplianceBrief);
  }

  if (els.traceForm) {
    els.traceForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.traceConfig = readTraceConfig();
      saveTraceConfig();
      renderTraceInspector();
      flashButtonLabel(els.traceForm.querySelector("button[type='submit']"), "Traced");
    });
  }

  if (els.useCurrentAnswerTrace) {
    els.useCurrentAnswerTrace.addEventListener("click", () => {
      hydrateTraceFromCurrentAnswer();
      saveTraceConfig();
      syncTraceInputs();
      renderTraceInspector();
      flashButtonLabel(els.useCurrentAnswerTrace, "Loaded");
    });
  }

  if (els.resetTrace) {
    els.resetTrace.addEventListener("click", () => {
      state.traceConfig = getDefaultTraceConfig();
      saveTraceConfig();
      syncTraceInputs();
      renderTraceInspector();
      flashButtonLabel(els.resetTrace, "Reset");
    });
  }

  if (els.exportTracePack) {
    els.exportTracePack.addEventListener("click", exportTracePack);
  }

  if (els.peerForm) {
    els.peerForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.peerConfig = readPeerConfig();
      savePeerConfig();
      renderPeerScreener();
      flashButtonLabel(els.peerForm.querySelector("button[type='submit']"), "Screened");
    });
  }

  if (els.useCurrentPeerSet) {
    els.useCurrentPeerSet.addEventListener("click", () => {
      hydratePeerFromCurrentFocus();
      savePeerConfig();
      syncPeerInputs();
      renderPeerScreener();
      flashButtonLabel(els.useCurrentPeerSet, "Loaded");
    });
  }

  if (els.resetPeerScreen) {
    els.resetPeerScreen.addEventListener("click", () => {
      state.peerConfig = getDefaultPeerConfig();
      savePeerConfig();
      syncPeerInputs();
      renderPeerScreener();
      flashButtonLabel(els.resetPeerScreen, "Reset");
    });
  }

  if (els.exportPeerBrief) {
    els.exportPeerBrief.addEventListener("click", exportPeerBrief);
  }

  if (els.stressForm) {
    els.stressForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.stressConfig = readStressConfig();
      saveStressConfig();
      renderStressLab();
      flashButtonLabel(els.stressForm.querySelector("button[type='submit']"), "Stressed");
    });
  }

  if (els.stressPreset) {
    els.stressPreset.addEventListener("change", () => {
      state.stressConfig = getStressPreset(els.stressPreset.value, readStressConfig());
      saveStressConfig();
      syncStressInputs();
      renderStressLab();
    });
  }

  if (els.usePortfolioStress) {
    els.usePortfolioStress.addEventListener("click", () => {
      hydrateStressFromPortfolio();
      saveStressConfig();
      syncStressInputs();
      renderStressLab();
      flashButtonLabel(els.usePortfolioStress, "Loaded");
    });
  }

  if (els.resetStress) {
    els.resetStress.addEventListener("click", () => {
      state.stressConfig = getDefaultStressConfig();
      saveStressConfig();
      syncStressInputs();
      renderStressLab();
      flashButtonLabel(els.resetStress, "Reset");
    });
  }

  if (els.exportStressBrief) {
    els.exportStressBrief.addEventListener("click", exportStressBrief);
  }

  if (els.stressActionQueue) {
    els.stressActionQueue.addEventListener("click", (event) => {
      const button = event.target.closest("[data-stress-question]");
      if (!button) return;
      const question = button.dataset.stressQuestion;
      els.queryInput.value = question;
      state.lastQuestionSecurity = assessTextSecurity(question, "Question");
      renderQuestionSecurityStrip();
      renderSecurityPosture();
      syncTickerFocus(question);
      document.querySelector("#desk")?.scrollIntoView({ behavior: "smooth", block: "start" });
      submitCurrentQuestion();
    });
  }

  if (els.changeForm) {
    els.changeForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.changeConfig = readChangeConfig();
      saveChangeConfig();
      renderFilingChangeMonitor();
      flashButtonLabel(els.changeForm.querySelector("button[type='submit']"), "Scanned");
    });
  }

  if (els.useImportsChange) {
    els.useImportsChange.addEventListener("click", () => {
      hydrateChangeFromImports();
      saveChangeConfig();
      syncChangeInputs();
      renderFilingChangeMonitor();
      flashButtonLabel(els.useImportsChange, "Loaded");
    });
  }

  if (els.resetChangeMonitor) {
    els.resetChangeMonitor.addEventListener("click", () => {
      state.changeConfig = getDefaultChangeConfig();
      saveChangeConfig();
      syncChangeInputs();
      renderFilingChangeMonitor();
      flashButtonLabel(els.resetChangeMonitor, "Reset");
    });
  }

  if (els.exportChangeBrief) {
    els.exportChangeBrief.addEventListener("click", exportChangeBrief);
  }

  if (els.changeQuestionQueue) {
    els.changeQuestionQueue.addEventListener("click", (event) => {
      const button = event.target.closest("[data-change-question]");
      if (!button) return;
      const question = button.dataset.changeQuestion;
      els.queryInput.value = question;
      state.lastQuestionSecurity = assessTextSecurity(question, "Question");
      renderQuestionSecurityStrip();
      renderSecurityPosture();
      syncTickerFocus(question);
      document.querySelector("#desk")?.scrollIntoView({ behavior: "smooth", block: "start" });
      submitCurrentQuestion();
    });
  }

  if (els.matrixForm) {
    els.matrixForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.valuationMatrixConfig = readValuationMatrixConfig();
      saveValuationMatrixConfig();
      renderValuationMatrix();
      renderResearchTearSheet();
      renderResearchDossierBuilder();
      flashButtonLabel(els.matrixForm.querySelector("button[type='submit']"), "Modeled");
    });
  }

  if (els.useValuationLens) {
    els.useValuationLens.addEventListener("click", () => {
      hydrateValuationMatrixFromLens();
      saveValuationMatrixConfig();
      syncValuationMatrixInputs();
      renderValuationMatrix();
      renderResearchTearSheet();
      renderResearchDossierBuilder();
      flashButtonLabel(els.useValuationLens, "Loaded");
    });
  }

  if (els.resetMatrix) {
    els.resetMatrix.addEventListener("click", () => {
      state.valuationMatrixConfig = getDefaultValuationMatrixConfig();
      saveValuationMatrixConfig();
      syncValuationMatrixInputs();
      renderValuationMatrix();
      renderResearchTearSheet();
      renderResearchDossierBuilder();
      flashButtonLabel(els.resetMatrix, "Reset");
    });
  }

  if (els.exportMatrixBrief) {
    els.exportMatrixBrief.addEventListener("click", exportValuationMatrixBrief);
  }

  if (els.matrixQuestionQueue) {
    els.matrixQuestionQueue.addEventListener("click", (event) => {
      const button = event.target.closest("[data-matrix-question]");
      if (!button) return;
      const question = button.dataset.matrixQuestion;
      els.queryInput.value = question;
      state.lastQuestionSecurity = assessTextSecurity(question, "Question");
      renderQuestionSecurityStrip();
      renderSecurityPosture();
      syncTickerFocus(question);
      document.querySelector("#desk")?.scrollIntoView({ behavior: "smooth", block: "start" });
      submitCurrentQuestion();
    });
  }

  if (els.tearForm) {
    els.tearForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.tearSheetConfig = readTearSheetConfig();
      saveTearSheetConfig();
      renderResearchTearSheet();
      renderThesisDebateRoom();
      renderResearchDossierBuilder();
      flashButtonLabel(els.tearForm.querySelector("button[type='submit']"), "Built");
    });
  }

  if (els.useCurrentTear) {
    els.useCurrentTear.addEventListener("click", () => {
      hydrateTearSheetFromCurrentResearch();
      saveTearSheetConfig();
      syncTearSheetInputs();
      renderResearchTearSheet();
      renderThesisDebateRoom();
      renderResearchDossierBuilder();
      flashButtonLabel(els.useCurrentTear, "Loaded");
    });
  }

  if (els.resetTearSheet) {
    els.resetTearSheet.addEventListener("click", () => {
      state.tearSheetConfig = getDefaultTearSheetConfig();
      saveTearSheetConfig();
      syncTearSheetInputs();
      renderResearchTearSheet();
      renderThesisDebateRoom();
      renderResearchDossierBuilder();
      flashButtonLabel(els.resetTearSheet, "Reset");
    });
  }

  if (els.exportTearSheet) {
    els.exportTearSheet.addEventListener("click", exportResearchTearSheet);
  }

  if (els.tearActionQueue) {
    els.tearActionQueue.addEventListener("click", (event) => {
      const button = event.target.closest("[data-tear-question]");
      if (!button) return;
      const question = button.dataset.tearQuestion;
      els.queryInput.value = question;
      state.lastQuestionSecurity = assessTextSecurity(question, "Question");
      renderQuestionSecurityStrip();
      renderSecurityPosture();
      syncTickerFocus(question);
      document.querySelector("#desk")?.scrollIntoView({ behavior: "smooth", block: "start" });
      submitCurrentQuestion();
    });
  }

  if (els.debateForm) {
    els.debateForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.thesisDebateConfig = readThesisDebateConfig();
      saveThesisDebateConfig();
      renderThesisDebateRoom();
      renderResearchDossierBuilder();
      flashButtonLabel(els.debateForm.querySelector("button[type='submit']"), "Debated");
    });
  }

  if (els.useTearSheetDebate) {
    els.useTearSheetDebate.addEventListener("click", () => {
      hydrateThesisDebateFromTearSheet();
      saveThesisDebateConfig();
      syncThesisDebateInputs();
      renderThesisDebateRoom();
      renderResearchDossierBuilder();
      flashButtonLabel(els.useTearSheetDebate, "Loaded");
    });
  }

  if (els.resetDebate) {
    els.resetDebate.addEventListener("click", () => {
      state.thesisDebateConfig = getDefaultThesisDebateConfig();
      saveThesisDebateConfig();
      syncThesisDebateInputs();
      renderThesisDebateRoom();
      renderResearchDossierBuilder();
      flashButtonLabel(els.resetDebate, "Reset");
    });
  }

  if (els.exportDebateBrief) {
    els.exportDebateBrief.addEventListener("click", exportThesisDebateBrief);
  }

  if (els.debateQuestionQueue) {
    els.debateQuestionQueue.addEventListener("click", (event) => {
      const button = event.target.closest("[data-debate-question]");
      if (!button) return;
      const question = button.dataset.debateQuestion;
      els.queryInput.value = question;
      state.lastQuestionSecurity = assessTextSecurity(question, "Question");
      renderQuestionSecurityStrip();
      renderSecurityPosture();
      syncTickerFocus(question);
      document.querySelector("#desk")?.scrollIntoView({ behavior: "smooth", block: "start" });
      submitCurrentQuestion();
    });
  }

  if (els.dossierForm) {
    els.dossierForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.dossierConfig = readDossierConfig();
      saveDossierConfig();
      renderResearchDossierBuilder();
      renderThesisTimelineAuditTrail();
      renderMorningBriefingRoom();
      renderEarningsCallPrepRoom();
      renderPostEarningsDebriefRoom();
      renderGuidanceRevisionRoom();
      renderModelVersionControlRoom();
      renderIcApprovalRoom();
      renderPortfolioActionRoom();
      flashButtonLabel(els.dossierForm.querySelector("button[type='submit']"), "Built");
    });
  }

  if (els.useActiveDossier) {
    els.useActiveDossier.addEventListener("click", () => {
      hydrateDossierFromActiveResearch();
      saveDossierConfig();
      syncDossierInputs();
      renderResearchDossierBuilder();
      renderThesisTimelineAuditTrail();
      renderMorningBriefingRoom();
      renderEarningsCallPrepRoom();
      renderPostEarningsDebriefRoom();
      renderGuidanceRevisionRoom();
      renderModelVersionControlRoom();
      renderIcApprovalRoom();
      renderPortfolioActionRoom();
      flashButtonLabel(els.useActiveDossier, "Loaded");
    });
  }

  if (els.resetDossier) {
    els.resetDossier.addEventListener("click", () => {
      state.dossierConfig = getDefaultDossierConfig();
      saveDossierConfig();
      syncDossierInputs();
      renderResearchDossierBuilder();
      renderThesisTimelineAuditTrail();
      renderMorningBriefingRoom();
      renderEarningsCallPrepRoom();
      renderPostEarningsDebriefRoom();
      renderGuidanceRevisionRoom();
      renderModelVersionControlRoom();
      renderIcApprovalRoom();
      renderPortfolioActionRoom();
      flashButtonLabel(els.resetDossier, "Reset");
    });
  }

  if (els.exportDossierBrief) {
    els.exportDossierBrief.addEventListener("click", exportResearchDossier);
  }

  if (els.dossierQuestionQueue) {
    els.dossierQuestionQueue.addEventListener("click", (event) => {
      const button = event.target.closest("[data-dossier-question]");
      if (!button) return;
      const question = button.dataset.dossierQuestion;
      els.queryInput.value = question;
      state.lastQuestionSecurity = assessTextSecurity(question, "Question");
      renderQuestionSecurityStrip();
      renderSecurityPosture();
      syncTickerFocus(question);
      document.querySelector("#desk")?.scrollIntoView({ behavior: "smooth", block: "start" });
      submitCurrentQuestion();
    });
  }

  if (els.timelineForm) {
    els.timelineForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.timelineConfig = readTimelineConfig();
      saveTimelineConfig();
      renderThesisTimelineAuditTrail();
      renderMorningBriefingRoom();
      renderEarningsCallPrepRoom();
      renderPostEarningsDebriefRoom();
      renderGuidanceRevisionRoom();
      renderModelVersionControlRoom();
      renderIcApprovalRoom();
      renderPortfolioActionRoom();
      flashButtonLabel(els.timelineForm.querySelector("button[type='submit']"), "Built");
    });
  }

  if (els.useDossierTimeline) {
    els.useDossierTimeline.addEventListener("click", () => {
      hydrateTimelineFromDossier();
      saveTimelineConfig();
      syncTimelineInputs();
      renderThesisTimelineAuditTrail();
      renderMorningBriefingRoom();
      renderEarningsCallPrepRoom();
      renderPostEarningsDebriefRoom();
      renderGuidanceRevisionRoom();
      renderModelVersionControlRoom();
      renderIcApprovalRoom();
      renderPortfolioActionRoom();
      flashButtonLabel(els.useDossierTimeline, "Loaded");
    });
  }

  if (els.resetTimeline) {
    els.resetTimeline.addEventListener("click", () => {
      state.timelineConfig = getDefaultTimelineConfig();
      saveTimelineConfig();
      syncTimelineInputs();
      renderThesisTimelineAuditTrail();
      renderMorningBriefingRoom();
      renderEarningsCallPrepRoom();
      renderPostEarningsDebriefRoom();
      renderGuidanceRevisionRoom();
      renderModelVersionControlRoom();
      renderIcApprovalRoom();
      renderPortfolioActionRoom();
      flashButtonLabel(els.resetTimeline, "Reset");
    });
  }

  if (els.exportTimelineBrief) {
    els.exportTimelineBrief.addEventListener("click", exportThesisTimelineBrief);
  }

  if (els.timelineQuestionQueue) {
    els.timelineQuestionQueue.addEventListener("click", (event) => {
      const button = event.target.closest("[data-timeline-question]");
      if (!button) return;
      const question = button.dataset.timelineQuestion;
      els.queryInput.value = question;
      state.lastQuestionSecurity = assessTextSecurity(question, "Question");
      renderQuestionSecurityStrip();
      renderSecurityPosture();
      syncTickerFocus(question);
      document.querySelector("#desk")?.scrollIntoView({ behavior: "smooth", block: "start" });
      submitCurrentQuestion();
    });
  }

  if (els.briefingForm) {
    els.briefingForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.briefingConfig = readBriefingConfig();
      saveBriefingConfig();
      renderMorningBriefingRoom();
      renderEarningsCallPrepRoom();
      renderPostEarningsDebriefRoom();
      renderGuidanceRevisionRoom();
      renderModelVersionControlRoom();
      renderIcApprovalRoom();
      renderPortfolioActionRoom();
      flashButtonLabel(els.briefingForm.querySelector("button[type='submit']"), "Built");
    });
  }

  if (els.useWorkspaceBriefing) {
    els.useWorkspaceBriefing.addEventListener("click", () => {
      hydrateBriefingFromWorkspace();
      saveBriefingConfig();
      syncBriefingInputs();
      renderMorningBriefingRoom();
      renderEarningsCallPrepRoom();
      renderPostEarningsDebriefRoom();
      renderGuidanceRevisionRoom();
      renderModelVersionControlRoom();
      renderIcApprovalRoom();
      renderPortfolioActionRoom();
      flashButtonLabel(els.useWorkspaceBriefing, "Loaded");
    });
  }

  if (els.resetBriefing) {
    els.resetBriefing.addEventListener("click", () => {
      state.briefingConfig = getDefaultBriefingConfig();
      saveBriefingConfig();
      syncBriefingInputs();
      renderMorningBriefingRoom();
      renderEarningsCallPrepRoom();
      renderPostEarningsDebriefRoom();
      renderGuidanceRevisionRoom();
      renderModelVersionControlRoom();
      renderIcApprovalRoom();
      renderPortfolioActionRoom();
      flashButtonLabel(els.resetBriefing, "Reset");
    });
  }

  if (els.exportBriefingBrief) {
    els.exportBriefingBrief.addEventListener("click", exportMorningBriefing);
  }

  if (els.briefingQuestionQueue) {
    els.briefingQuestionQueue.addEventListener("click", (event) => {
      const button = event.target.closest("[data-briefing-question]");
      if (!button) return;
      const question = button.dataset.briefingQuestion;
      els.queryInput.value = question;
      state.lastQuestionSecurity = assessTextSecurity(question, "Question");
      renderQuestionSecurityStrip();
      renderSecurityPosture();
      syncTickerFocus(question);
      document.querySelector("#desk")?.scrollIntoView({ behavior: "smooth", block: "start" });
      submitCurrentQuestion();
    });
  }

  if (els.callPrepForm) {
    els.callPrepForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.callPrepConfig = readCallPrepConfig();
      saveCallPrepConfig();
      renderEarningsCallPrepRoom();
      renderPostEarningsDebriefRoom();
      renderGuidanceRevisionRoom();
      renderModelVersionControlRoom();
      renderIcApprovalRoom();
      renderPortfolioActionRoom();
      flashButtonLabel(els.callPrepForm.querySelector("button[type='submit']"), "Prepped");
    });
  }

  if (els.useBriefingCallPrep) {
    els.useBriefingCallPrep.addEventListener("click", () => {
      hydrateCallPrepFromBriefing();
      saveCallPrepConfig();
      syncCallPrepInputs();
      renderEarningsCallPrepRoom();
      renderPostEarningsDebriefRoom();
      renderGuidanceRevisionRoom();
      renderModelVersionControlRoom();
      renderIcApprovalRoom();
      renderPortfolioActionRoom();
      flashButtonLabel(els.useBriefingCallPrep, "Loaded");
    });
  }

  if (els.resetCallPrep) {
    els.resetCallPrep.addEventListener("click", () => {
      state.callPrepConfig = getDefaultCallPrepConfig();
      saveCallPrepConfig();
      syncCallPrepInputs();
      renderEarningsCallPrepRoom();
      renderPostEarningsDebriefRoom();
      renderGuidanceRevisionRoom();
      renderModelVersionControlRoom();
      renderIcApprovalRoom();
      renderPortfolioActionRoom();
      flashButtonLabel(els.resetCallPrep, "Reset");
    });
  }

  if (els.exportCallPrepBrief) {
    els.exportCallPrepBrief.addEventListener("click", exportEarningsCallPrep);
  }

  if (els.callPrepQuestionList) {
    els.callPrepQuestionList.addEventListener("click", (event) => {
      const button = event.target.closest("[data-callprep-question]");
      if (!button) return;
      const question = button.dataset.callprepQuestion;
      els.queryInput.value = question;
      state.lastQuestionSecurity = assessTextSecurity(question, "Question");
      renderQuestionSecurityStrip();
      renderSecurityPosture();
      syncTickerFocus(question);
      document.querySelector("#desk")?.scrollIntoView({ behavior: "smooth", block: "start" });
      submitCurrentQuestion();
    });
  }

  if (els.debriefForm) {
    els.debriefForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.debriefConfig = readDebriefConfig();
      saveDebriefConfig();
      renderPostEarningsDebriefRoom();
      renderGuidanceRevisionRoom();
      renderModelVersionControlRoom();
      renderIcApprovalRoom();
      renderPortfolioActionRoom();
      flashButtonLabel(els.debriefForm.querySelector("button[type='submit']"), "Debriefed");
    });
  }

  if (els.useCallPrepDebrief) {
    els.useCallPrepDebrief.addEventListener("click", () => {
      hydrateDebriefFromCallPrep();
      saveDebriefConfig();
      syncDebriefInputs();
      renderPostEarningsDebriefRoom();
      renderGuidanceRevisionRoom();
      renderModelVersionControlRoom();
      renderIcApprovalRoom();
      renderPortfolioActionRoom();
      flashButtonLabel(els.useCallPrepDebrief, "Loaded");
    });
  }

  if (els.resetDebrief) {
    els.resetDebrief.addEventListener("click", () => {
      state.debriefConfig = getDefaultDebriefConfig();
      saveDebriefConfig();
      syncDebriefInputs();
      renderPostEarningsDebriefRoom();
      renderGuidanceRevisionRoom();
      renderModelVersionControlRoom();
      renderIcApprovalRoom();
      renderPortfolioActionRoom();
      flashButtonLabel(els.resetDebrief, "Reset");
    });
  }

  if (els.exportDebriefBrief) {
    els.exportDebriefBrief.addEventListener("click", exportPostEarningsDebrief);
  }

  if (els.debriefActionList) {
    els.debriefActionList.addEventListener("click", (event) => {
      const button = event.target.closest("[data-debrief-question]");
      if (!button) return;
      const question = button.dataset.debriefQuestion;
      els.queryInput.value = question;
      state.lastQuestionSecurity = assessTextSecurity(question, "Question");
      renderQuestionSecurityStrip();
      renderSecurityPosture();
      syncTickerFocus(question);
      document.querySelector("#desk")?.scrollIntoView({ behavior: "smooth", block: "start" });
      submitCurrentQuestion();
    });
  }

  if (els.revisionForm) {
    els.revisionForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.revisionConfig = readRevisionConfig();
      saveRevisionConfig();
      renderGuidanceRevisionRoom();
      renderModelVersionControlRoom();
      renderIcApprovalRoom();
      renderPortfolioActionRoom();
      flashButtonLabel(els.revisionForm.querySelector("button[type='submit']"), "Revised");
    });
  }

  if (els.useDebriefRevision) {
    els.useDebriefRevision.addEventListener("click", () => {
      hydrateRevisionFromDebrief();
      saveRevisionConfig();
      syncRevisionInputs();
      renderGuidanceRevisionRoom();
      renderModelVersionControlRoom();
      renderIcApprovalRoom();
      renderPortfolioActionRoom();
      flashButtonLabel(els.useDebriefRevision, "Loaded");
    });
  }

  if (els.resetRevision) {
    els.resetRevision.addEventListener("click", () => {
      state.revisionConfig = getDefaultRevisionConfig();
      saveRevisionConfig();
      syncRevisionInputs();
      renderGuidanceRevisionRoom();
      renderModelVersionControlRoom();
      renderIcApprovalRoom();
      renderPortfolioActionRoom();
      flashButtonLabel(els.resetRevision, "Reset");
    });
  }

  if (els.exportRevisionBrief) {
    els.exportRevisionBrief.addEventListener("click", exportGuidanceRevision);
  }

  if (els.revisionActionList) {
    els.revisionActionList.addEventListener("click", (event) => {
      const button = event.target.closest("[data-revision-question]");
      if (!button) return;
      const question = button.dataset.revisionQuestion;
      els.queryInput.value = question;
      state.lastQuestionSecurity = assessTextSecurity(question, "Question");
      renderQuestionSecurityStrip();
      renderSecurityPosture();
      syncTickerFocus(question);
      document.querySelector("#desk")?.scrollIntoView({ behavior: "smooth", block: "start" });
      submitCurrentQuestion();
    });
  }

  if (els.modelControlForm) {
    els.modelControlForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.modelControlConfig = readModelControlConfig();
      saveModelControlConfig();
      renderModelVersionControlRoom();
      renderIcApprovalRoom();
      renderPortfolioActionRoom();
      flashButtonLabel(els.modelControlForm.querySelector("button[type='submit']"), "Locked");
    });
  }

  if (els.useRevisionModelControl) {
    els.useRevisionModelControl.addEventListener("click", () => {
      hydrateModelControlFromRevision();
      saveModelControlConfig();
      syncModelControlInputs();
      renderModelVersionControlRoom();
      renderIcApprovalRoom();
      renderPortfolioActionRoom();
      flashButtonLabel(els.useRevisionModelControl, "Loaded");
    });
  }

  if (els.resetModelControl) {
    els.resetModelControl.addEventListener("click", () => {
      state.modelControlConfig = getDefaultModelControlConfig();
      saveModelControlConfig();
      syncModelControlInputs();
      renderModelVersionControlRoom();
      renderIcApprovalRoom();
      renderPortfolioActionRoom();
      flashButtonLabel(els.resetModelControl, "Reset");
    });
  }

  if (els.exportModelControlBrief) {
    els.exportModelControlBrief.addEventListener("click", exportModelVersionControl);
  }

  if (els.modelControlActionList) {
    els.modelControlActionList.addEventListener("click", (event) => {
      const button = event.target.closest("[data-modelctl-question]");
      if (!button) return;
      const question = button.dataset.modelctlQuestion;
      els.queryInput.value = question;
      state.lastQuestionSecurity = assessTextSecurity(question, "Question");
      renderQuestionSecurityStrip();
      renderSecurityPosture();
      syncTickerFocus(question);
      document.querySelector("#desk")?.scrollIntoView({ behavior: "smooth", block: "start" });
      submitCurrentQuestion();
    });
  }

  if (els.approvalForm) {
    els.approvalForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.approvalConfig = readApprovalConfig();
      saveApprovalConfig();
      renderIcApprovalRoom();
      renderPortfolioActionRoom();
      flashButtonLabel(els.approvalForm.querySelector("button[type='submit']"), "Built");
    });
  }

  if (els.useModelControlApproval) {
    els.useModelControlApproval.addEventListener("click", () => {
      hydrateApprovalFromModelControl();
      saveApprovalConfig();
      syncApprovalInputs();
      renderIcApprovalRoom();
      renderPortfolioActionRoom();
      flashButtonLabel(els.useModelControlApproval, "Loaded");
    });
  }

  if (els.resetApproval) {
    els.resetApproval.addEventListener("click", () => {
      state.approvalConfig = getDefaultApprovalConfig();
      saveApprovalConfig();
      syncApprovalInputs();
      renderIcApprovalRoom();
      renderPortfolioActionRoom();
      flashButtonLabel(els.resetApproval, "Reset");
    });
  }

  if (els.exportApprovalBrief) {
    els.exportApprovalBrief.addEventListener("click", exportIcApprovalMemo);
  }

  if (els.approvalActionList) {
    els.approvalActionList.addEventListener("click", (event) => {
      const button = event.target.closest("[data-approval-question]");
      if (!button) return;
      const question = button.dataset.approvalQuestion;
      els.queryInput.value = question;
      state.lastQuestionSecurity = assessTextSecurity(question, "Question");
      renderQuestionSecurityStrip();
      renderSecurityPosture();
      syncTickerFocus(question);
      document.querySelector("#desk")?.scrollIntoView({ behavior: "smooth", block: "start" });
      submitCurrentQuestion();
    });
  }

  if (els.portfolioActionForm) {
    els.portfolioActionForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.portfolioActionConfig = readPortfolioActionConfig();
      savePortfolioActionConfig();
      renderPortfolioActionRoom();
      flashButtonLabel(els.portfolioActionForm.querySelector("button[type='submit']"), "Built");
    });
  }

  if (els.useApprovalPortfolioAction) {
    els.useApprovalPortfolioAction.addEventListener("click", () => {
      hydratePortfolioActionFromApproval();
      savePortfolioActionConfig();
      syncPortfolioActionInputs();
      renderPortfolioActionRoom();
      flashButtonLabel(els.useApprovalPortfolioAction, "Loaded");
    });
  }

  if (els.resetPortfolioAction) {
    els.resetPortfolioAction.addEventListener("click", () => {
      state.portfolioActionConfig = getDefaultPortfolioActionConfig();
      savePortfolioActionConfig();
      syncPortfolioActionInputs();
      renderPortfolioActionRoom();
      flashButtonLabel(els.resetPortfolioAction, "Reset");
    });
  }

  if (els.exportPortfolioActionBrief) {
    els.exportPortfolioActionBrief.addEventListener("click", exportPortfolioActionPlan);
  }

  if (els.portfolioActionMonitorList) {
    els.portfolioActionMonitorList.addEventListener("click", (event) => {
      const button = event.target.closest("[data-action-question]");
      if (!button) return;
      const question = button.dataset.actionQuestion;
      els.queryInput.value = question;
      state.lastQuestionSecurity = assessTextSecurity(question, "Question");
      renderQuestionSecurityStrip();
      renderSecurityPosture();
      syncTickerFocus(question);
      document.querySelector("#desk")?.scrollIntoView({ behavior: "smooth", block: "start" });
      submitCurrentQuestion();
    });
  }

  if (els.researchQueueForm) {
    els.researchQueueForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.researchQueueConfig = readResearchQueueConfig();
      saveResearchQueueConfig();
      renderAutonomousResearchQueue();
      flashButtonLabel(els.researchQueueForm.querySelector("button[type='submit']"), "Built");
    });
  }

  if (els.usePortfolioResearchQueue) {
    els.usePortfolioResearchQueue.addEventListener("click", () => {
      hydrateResearchQueueFromPortfolioAction();
      saveResearchQueueConfig();
      syncResearchQueueInputs();
      renderAutonomousResearchQueue();
      flashButtonLabel(els.usePortfolioResearchQueue, "Loaded");
    });
  }

  if (els.resetResearchQueue) {
    els.resetResearchQueue.addEventListener("click", () => {
      state.researchQueueConfig = getDefaultResearchQueueConfig();
      saveResearchQueueConfig();
      syncResearchQueueInputs();
      renderAutonomousResearchQueue();
      flashButtonLabel(els.resetResearchQueue, "Reset");
    });
  }

  if (els.exportResearchQueueBrief) {
    els.exportResearchQueueBrief.addEventListener("click", exportResearchQueueBrief);
  }

  if (els.researchQueueTaskList) {
    els.researchQueueTaskList.addEventListener("click", (event) => {
      const button = event.target.closest("[data-queue-question]");
      if (!button) return;
      const question = button.dataset.queueQuestion;
      els.queryInput.value = question;
      state.lastQuestionSecurity = assessTextSecurity(question, "Question");
      renderQuestionSecurityStrip();
      renderSecurityPosture();
      syncTickerFocus(question);
      document.querySelector("#desk")?.scrollIntoView({ behavior: "smooth", block: "start" });
      submitCurrentQuestion();
    });
  }

  if (els.researchSlaForm) {
    els.researchSlaForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.researchSlaConfig = readResearchSlaConfig();
      saveResearchSlaConfig();
      renderResearchSlaScheduler();
      flashButtonLabel(els.researchSlaForm.querySelector("button[type='submit']"), "Built");
    });
  }

  if (els.useQueueResearchSla) {
    els.useQueueResearchSla.addEventListener("click", () => {
      hydrateResearchSlaFromQueue();
      saveResearchSlaConfig();
      syncResearchSlaInputs();
      renderResearchSlaScheduler();
      flashButtonLabel(els.useQueueResearchSla, "Loaded");
    });
  }

  if (els.resetResearchSla) {
    els.resetResearchSla.addEventListener("click", () => {
      state.researchSlaConfig = getDefaultResearchSlaConfig();
      saveResearchSlaConfig();
      syncResearchSlaInputs();
      renderResearchSlaScheduler();
      flashButtonLabel(els.resetResearchSla, "Reset");
    });
  }

  if (els.exportResearchSlaBrief) {
    els.exportResearchSlaBrief.addEventListener("click", exportResearchSlaBrief);
  }

  if (els.researchSlaDueList) {
    els.researchSlaDueList.addEventListener("click", (event) => {
      const button = event.target.closest("[data-sla-question]");
      if (!button) return;
      const question = button.dataset.slaQuestion;
      els.queryInput.value = question;
      state.lastQuestionSecurity = assessTextSecurity(question, "Question");
      renderQuestionSecurityStrip();
      renderSecurityPosture();
      syncTickerFocus(question);
      document.querySelector("#desk")?.scrollIntoView({ behavior: "smooth", block: "start" });
      submitCurrentQuestion();
    });
  }

  if (els.researchOutcomeForm) {
    els.researchOutcomeForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.researchOutcomeConfig = readResearchOutcomeConfig();
      saveResearchOutcomeConfig();
      renderResearchOutcomeLoop();
      flashButtonLabel(els.researchOutcomeForm.querySelector("button[type='submit']"), "Scored");
    });
  }

  if (els.useScheduleResearchOutcome) {
    els.useScheduleResearchOutcome.addEventListener("click", () => {
      hydrateResearchOutcomeFromSchedule();
      saveResearchOutcomeConfig();
      syncResearchOutcomeInputs();
      renderResearchOutcomeLoop();
      flashButtonLabel(els.useScheduleResearchOutcome, "Loaded");
    });
  }

  if (els.resetResearchOutcome) {
    els.resetResearchOutcome.addEventListener("click", () => {
      state.researchOutcomeConfig = getDefaultResearchOutcomeConfig();
      saveResearchOutcomeConfig();
      syncResearchOutcomeInputs();
      renderResearchOutcomeLoop();
      flashButtonLabel(els.resetResearchOutcome, "Reset");
    });
  }

  if (els.exportResearchOutcomeBrief) {
    els.exportResearchOutcomeBrief.addEventListener("click", exportResearchOutcomeBrief);
  }

  if (els.researchOutcomeLearningList) {
    els.researchOutcomeLearningList.addEventListener("click", (event) => {
      const button = event.target.closest("[data-outcome-question]");
      if (!button) return;
      const question = button.dataset.outcomeQuestion;
      els.queryInput.value = question;
      state.lastQuestionSecurity = assessTextSecurity(question, "Question");
      renderQuestionSecurityStrip();
      renderSecurityPosture();
      syncTickerFocus(question);
      document.querySelector("#desk")?.scrollIntoView({ behavior: "smooth", block: "start" });
      submitCurrentQuestion();
    });
  }

  if (els.researchMemoryForm) {
    els.researchMemoryForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.researchMemoryConfig = readResearchMemoryConfig();
      saveResearchMemoryConfig();
      renderResearchMemoryVault();
      flashButtonLabel(els.researchMemoryForm.querySelector("button[type='submit']"), "Built");
    });
  }

  if (els.useOutcomeResearchMemory) {
    els.useOutcomeResearchMemory.addEventListener("click", () => {
      hydrateResearchMemoryFromOutcome();
      saveResearchMemoryConfig();
      syncResearchMemoryInputs();
      renderResearchMemoryVault();
      flashButtonLabel(els.useOutcomeResearchMemory, "Loaded");
    });
  }

  if (els.resetResearchMemory) {
    els.resetResearchMemory.addEventListener("click", () => {
      state.researchMemoryConfig = getDefaultResearchMemoryConfig();
      saveResearchMemoryConfig();
      syncResearchMemoryInputs();
      renderResearchMemoryVault();
      flashButtonLabel(els.resetResearchMemory, "Reset");
    });
  }

  if (els.exportResearchMemoryBrief) {
    els.exportResearchMemoryBrief.addEventListener("click", exportResearchMemoryBrief);
  }

  if (els.researchMemoryReuseList) {
    els.researchMemoryReuseList.addEventListener("click", (event) => {
      const button = event.target.closest("[data-memory-question]");
      if (!button) return;
      const question = button.dataset.memoryQuestion;
      els.queryInput.value = question;
      state.lastQuestionSecurity = assessTextSecurity(question, "Question");
      renderQuestionSecurityStrip();
      renderSecurityPosture();
      syncTickerFocus(question);
      document.querySelector("#desk")?.scrollIntoView({ behavior: "smooth", block: "start" });
      submitCurrentQuestion();
    });
  }

  if (els.guidedNavigatorForm) {
    els.guidedNavigatorForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.guidedNavigatorConfig = readGuidedNavigatorConfig();
      saveGuidedNavigatorConfig();
      renderGuidedResearchNavigator();
      flashButtonLabel(els.guidedNavigatorForm.querySelector("button[type='submit']"), "Built");
    });
  }

  if (els.useCurrentNavigator) {
    els.useCurrentNavigator.addEventListener("click", () => {
      hydrateGuidedNavigatorFromDesk();
      saveGuidedNavigatorConfig();
      syncGuidedNavigatorInputs();
      renderGuidedResearchNavigator();
      flashButtonLabel(els.useCurrentNavigator, "Loaded");
    });
  }

  if (els.runNavigatorQuestion) {
    els.runNavigatorQuestion.addEventListener("click", () => {
      const snapshot = state.currentNavigator || buildGuidedNavigatorSnapshot();
      runNavigatorQuestion(snapshot.questionRows[0]?.question || snapshot.firstQuestion);
      flashButtonLabel(els.runNavigatorQuestion, "Running");
    });
  }

  if (els.resetNavigator) {
    els.resetNavigator.addEventListener("click", () => {
      state.guidedNavigatorConfig = getDefaultGuidedNavigatorConfig();
      saveGuidedNavigatorConfig();
      syncGuidedNavigatorInputs();
      renderGuidedResearchNavigator();
      flashButtonLabel(els.resetNavigator, "Reset");
    });
  }

  if (els.exportNavigatorBrief) {
    els.exportNavigatorBrief.addEventListener("click", exportGuidedNavigatorBrief);
  }

  if (els.navigatorQuestionList) {
    els.navigatorQuestionList.addEventListener("click", (event) => {
      const button = event.target.closest("[data-navigator-question]");
      if (!button) return;
      runNavigatorQuestion(button.dataset.navigatorQuestion);
    });
  }

  if (els.pilotDemoForm) {
    els.pilotDemoForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.pilotDemoConfig = readPilotDemoConfig();
      savePilotDemoConfig();
      renderPilotDemoConcierge();
      flashButtonLabel(els.pilotDemoForm.querySelector("button[type='submit']"), "Built");
    });
  }

  if (els.useNavigatorPilotDemo) {
    els.useNavigatorPilotDemo.addEventListener("click", () => {
      hydratePilotDemoFromNavigator();
      savePilotDemoConfig();
      syncPilotDemoInputs();
      renderPilotDemoConcierge();
      flashButtonLabel(els.useNavigatorPilotDemo, "Loaded");
    });
  }

  if (els.runPilotDemoQuestion) {
    els.runPilotDemoQuestion.addEventListener("click", () => {
      const snapshot = state.currentPilotDemo || buildPilotDemoSnapshot();
      runNavigatorQuestion(snapshot.demoQuestion);
      flashButtonLabel(els.runPilotDemoQuestion, "Running");
    });
  }

  if (els.resetPilotDemo) {
    els.resetPilotDemo.addEventListener("click", () => {
      state.pilotDemoConfig = getDefaultPilotDemoConfig();
      savePilotDemoConfig();
      syncPilotDemoInputs();
      renderPilotDemoConcierge();
      flashButtonLabel(els.resetPilotDemo, "Reset");
    });
  }

  if (els.exportPilotDemoBrief) {
    els.exportPilotDemoBrief.addEventListener("click", exportPilotDemoBrief);
  }

  if (els.pilotDemoFlowList) {
    els.pilotDemoFlowList.addEventListener("click", (event) => {
      const button = event.target.closest("[data-demo-question]");
      if (!button) return;
      runNavigatorQuestion(button.dataset.demoQuestion);
    });
  }

  if (els.pilotDemoCloseList) {
    els.pilotDemoCloseList.addEventListener("click", (event) => {
      const button = event.target.closest("[data-demo-close-question]");
      if (!button) return;
      runNavigatorQuestion(button.dataset.demoCloseQuestion);
    });
  }

  if (els.pilotFeedbackForm) {
    els.pilotFeedbackForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.pilotFeedbackConfig = readPilotFeedbackConfig();
      savePilotFeedbackConfig();
      renderPilotFeedbackTracker();
      flashButtonLabel(els.pilotFeedbackForm.querySelector("button[type='submit']"), "Scored");
    });
  }

  if (els.savePilotFeedbackSignal) {
    els.savePilotFeedbackSignal.addEventListener("click", () => {
      state.pilotFeedbackConfig = readPilotFeedbackConfig();
      savePilotFeedbackConfig();
      savePilotFeedbackSignalFromCurrent();
      renderPilotFeedbackTracker();
      flashButtonLabel(els.savePilotFeedbackSignal, "Saved");
    });
  }

  if (els.useDemoPilotFeedback) {
    els.useDemoPilotFeedback.addEventListener("click", () => {
      hydratePilotFeedbackFromDemo();
      savePilotFeedbackConfig();
      syncPilotFeedbackInputs();
      renderPilotFeedbackTracker();
      flashButtonLabel(els.useDemoPilotFeedback, "Loaded");
    });
  }

  if (els.resetPilotFeedback) {
    els.resetPilotFeedback.addEventListener("click", () => {
      state.pilotFeedbackConfig = getDefaultPilotFeedbackConfig();
      savePilotFeedbackConfig();
      syncPilotFeedbackInputs();
      renderPilotFeedbackTracker();
      flashButtonLabel(els.resetPilotFeedback, "Reset");
    });
  }

  if (els.clearPilotFeedbackLog) {
    els.clearPilotFeedbackLog.addEventListener("click", () => {
      state.pilotFeedbackSignals = [];
      savePilotFeedbackSignals();
      renderPilotFeedbackTracker();
      flashButtonLabel(els.clearPilotFeedbackLog, "Cleared");
    });
  }

  if (els.exportPilotFeedbackBrief) {
    els.exportPilotFeedbackBrief.addEventListener("click", exportPilotFeedbackBrief);
  }

  if (els.pilotFeedbackFollowList) {
    els.pilotFeedbackFollowList.addEventListener("click", (event) => {
      const button = event.target.closest("[data-feedback-question]");
      if (!button) return;
      runNavigatorQuestion(button.dataset.feedbackQuestion);
    });
  }

  if (els.pilotCohortForm) {
    els.pilotCohortForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.pilotCohortConfig = readPilotCohortConfig();
      savePilotCohortConfig();
      renderPilotCohortCommandCenter();
      flashButtonLabel(els.pilotCohortForm.querySelector("button[type='submit']"), "Built");
    });
  }

  if (els.useFeedbackPilotCohort) {
    els.useFeedbackPilotCohort.addEventListener("click", () => {
      hydratePilotCohortFromFeedback();
      savePilotCohortConfig();
      syncPilotCohortInputs();
      renderPilotCohortCommandCenter();
      flashButtonLabel(els.useFeedbackPilotCohort, "Loaded");
    });
  }

  if (els.savePilotCohortSnapshot) {
    els.savePilotCohortSnapshot.addEventListener("click", () => {
      state.pilotCohortConfig = readPilotCohortConfig();
      savePilotCohortConfig();
      savePilotCohortSnapshotFromCurrent();
      renderPilotCohortCommandCenter();
      flashButtonLabel(els.savePilotCohortSnapshot, "Saved");
    });
  }

  if (els.resetPilotCohort) {
    els.resetPilotCohort.addEventListener("click", () => {
      state.pilotCohortConfig = getDefaultPilotCohortConfig();
      savePilotCohortConfig();
      syncPilotCohortInputs();
      renderPilotCohortCommandCenter();
      flashButtonLabel(els.resetPilotCohort, "Reset");
    });
  }

  if (els.clearPilotCohortSnapshots) {
    els.clearPilotCohortSnapshots.addEventListener("click", () => {
      state.pilotCohortSnapshots = [];
      savePilotCohortSnapshots();
      renderPilotCohortCommandCenter();
      flashButtonLabel(els.clearPilotCohortSnapshots, "Cleared");
    });
  }

  if (els.exportPilotCohortBrief) {
    els.exportPilotCohortBrief.addEventListener("click", exportPilotCohortBrief);
  }

  if (els.pilotCohortOutreachList) {
    els.pilotCohortOutreachList.addEventListener("click", (event) => {
      const button = event.target.closest("[data-cohort-question]");
      if (!button) return;
      runNavigatorQuestion(button.dataset.cohortQuestion);
    });
  }

  if (els.pilotOutreachForm) {
    els.pilotOutreachForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.pilotOutreachConfig = readPilotOutreachConfig();
      savePilotOutreachConfig();
      renderPilotOutreachReplyRoom();
      flashButtonLabel(els.pilotOutreachForm.querySelector("button[type='submit']"), "Composed");
    });
  }

  if (els.useCohortPilotOutreach) {
    els.useCohortPilotOutreach.addEventListener("click", () => {
      hydratePilotOutreachFromCohort();
      savePilotOutreachConfig();
      syncPilotOutreachInputs();
      renderPilotOutreachReplyRoom();
      flashButtonLabel(els.useCohortPilotOutreach, "Loaded");
    });
  }

  if (els.savePilotOutreachReply) {
    els.savePilotOutreachReply.addEventListener("click", () => {
      state.pilotOutreachConfig = readPilotOutreachConfig();
      savePilotOutreachConfig();
      savePilotOutreachReplyFromCurrent();
      renderPilotOutreachReplyRoom();
      flashButtonLabel(els.savePilotOutreachReply, "Saved");
    });
  }

  if (els.resetPilotOutreach) {
    els.resetPilotOutreach.addEventListener("click", () => {
      state.pilotOutreachConfig = getDefaultPilotOutreachConfig();
      savePilotOutreachConfig();
      syncPilotOutreachInputs();
      renderPilotOutreachReplyRoom();
      flashButtonLabel(els.resetPilotOutreach, "Reset");
    });
  }

  if (els.clearPilotOutreachReplies) {
    els.clearPilotOutreachReplies.addEventListener("click", () => {
      state.pilotOutreachReplies = [];
      savePilotOutreachReplies();
      renderPilotOutreachReplyRoom();
      flashButtonLabel(els.clearPilotOutreachReplies, "Cleared");
    });
  }

  if (els.exportPilotOutreachBrief) {
    els.exportPilotOutreachBrief.addEventListener("click", exportPilotOutreachBrief);
  }

  if (els.pilotOutreachMessageList) {
    els.pilotOutreachMessageList.addEventListener("click", (event) => {
      const button = event.target.closest("[data-outreach-message]");
      if (!button) return;
      copyTextToClipboard(button.dataset.outreachMessage);
    });
  }

  if (els.pilotOutreachReplyList) {
    els.pilotOutreachReplyList.addEventListener("click", (event) => {
      const button = event.target.closest("[data-outreach-question]");
      if (!button) return;
      runNavigatorQuestion(button.dataset.outreachQuestion);
    });
  }

  if (els.pilotActivationForm) {
    els.pilotActivationForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.pilotActivationConfig = readPilotActivationConfig();
      savePilotActivationConfig();
      renderPilotActivationRetentionRoom();
      flashButtonLabel(els.pilotActivationForm.querySelector("button[type='submit']"), "Built");
    });
  }

  if (els.useOutreachPilotActivation) {
    els.useOutreachPilotActivation.addEventListener("click", () => {
      hydratePilotActivationFromOutreach();
      savePilotActivationConfig();
      syncPilotActivationInputs();
      renderPilotActivationRetentionRoom();
      flashButtonLabel(els.useOutreachPilotActivation, "Loaded");
    });
  }

  if (els.savePilotActivationSession) {
    els.savePilotActivationSession.addEventListener("click", () => {
      state.pilotActivationConfig = readPilotActivationConfig();
      savePilotActivationConfig();
      savePilotActivationSessionFromCurrent();
      renderPilotActivationRetentionRoom();
      flashButtonLabel(els.savePilotActivationSession, "Saved");
    });
  }

  if (els.resetPilotActivation) {
    els.resetPilotActivation.addEventListener("click", () => {
      state.pilotActivationConfig = getDefaultPilotActivationConfig();
      savePilotActivationConfig();
      syncPilotActivationInputs();
      renderPilotActivationRetentionRoom();
      flashButtonLabel(els.resetPilotActivation, "Reset");
    });
  }

  if (els.clearPilotActivationSessions) {
    els.clearPilotActivationSessions.addEventListener("click", () => {
      state.pilotActivationSessions = [];
      savePilotActivationSessions();
      renderPilotActivationRetentionRoom();
      flashButtonLabel(els.clearPilotActivationSessions, "Cleared");
    });
  }

  if (els.exportPilotActivationBrief) {
    els.exportPilotActivationBrief.addEventListener("click", exportPilotActivationBrief);
  }

  if (els.pilotActivationStepList) {
    els.pilotActivationStepList.addEventListener("click", (event) => {
      const button = event.target.closest("[data-activation-question]");
      if (!button) return;
      runNavigatorQuestion(button.dataset.activationQuestion);
    });
  }

  if (els.peerQuestionQueue) {
    els.peerQuestionQueue.addEventListener("click", (event) => {
      const button = event.target.closest("[data-peer-question]");
      if (!button) return;
      const question = button.dataset.peerQuestion;
      els.queryInput.value = question;
      state.lastQuestionSecurity = assessTextSecurity(question, "Question");
      renderQuestionSecurityStrip();
      renderSecurityPosture();
      syncTickerFocus(question);
      document.querySelector("#desk")?.scrollIntoView({ behavior: "smooth", block: "start" });
      submitCurrentQuestion();
    });
  }

  if (els.portfolioQuestionQueue) {
    els.portfolioQuestionQueue.addEventListener("click", (event) => {
      const button = event.target.closest("[data-portfolio-question]");
      if (!button) return;
      const question = button.dataset.portfolioQuestion;
      els.queryInput.value = question;
      state.lastQuestionSecurity = assessTextSecurity(question, "Question");
      renderQuestionSecurityStrip();
      renderSecurityPosture();
      syncTickerFocus(question);
      document.querySelector("#desk")?.scrollIntoView({ behavior: "smooth", block: "start" });
      submitCurrentQuestion();
    });
  }
}

function submitCurrentQuestion() {
  if (state.isRunning) return;
  const question = els.queryInput.value.trim();
  if (!question) {
    els.queryInput.focus();
    return;
  }
  state.isRunning = true;
  showRunFeedback();
  window.setTimeout(() => {
    runAnalysis(question);
    clearRunFeedback();
  }, 180);
}

function showRunFeedback() {
  if (!els.runAnalysisButton) return;
  els.runAnalysisButton.textContent = "Analyzing...";
  els.runAnalysisButton.classList.add("is-running");
  els.answerPanel.innerHTML = `
    <div class="empty-state is-analyzing">
      <div class="empty-kicker">Analyzing</div>
      <h2>Scanning retrieved filing and call evidence.</h2>
      <p>Matching the question to source passages, ticker context, management tone, and valuation read-through.</p>
    </div>
  `;
}

function clearRunFeedback() {
  state.isRunning = false;
  if (!els.runAnalysisButton) return;
  els.runAnalysisButton.textContent = "Run analysis";
  els.runAnalysisButton.classList.remove("is-running");
}

function renderTemplates() {
  els.questionCount.textContent = String(QUESTION_TEMPLATES.length);
  els.templateStack.innerHTML = QUESTION_TEMPLATES.map((question) => {
    return `<button class="template-button" type="button" data-question="${escapeAttr(question)}">${escapeHtml(question)}</button>`;
  }).join("");

  els.templateStack.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const question = button.dataset.question;
      els.queryInput.value = question;
      runAnalysis(question);
    });
  });
}

function renderCoverage() {
  const companies = getCompanies();
  els.coverageList.innerHTML = companies.map((company) => {
    const checked = state.activeTickers.has(company.ticker) ? "checked" : "";
    const riskClass = company.risk > 65 ? "negative" : company.risk > 50 ? "mixed" : "positive";
    return `
      <label class="company-row">
        <input type="checkbox" data-ticker="${escapeAttr(company.ticker)}" ${checked} />
        <span class="company-main">
          <strong>${escapeHtml(company.ticker)} - ${escapeHtml(company.name)}</strong>
          <span>${escapeHtml(company.sector)} - ${escapeHtml(company.thesis)}</span>
        </span>
        <span class="company-score ${riskClass}">${Math.round(company.sentiment)} sig</span>
      </label>
    `;
  }).join("");

  els.coverageList.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => {
      if (input.checked) {
        state.activeTickers.add(input.dataset.ticker);
      } else {
        state.activeTickers.delete(input.dataset.ticker);
      }
      if (!state.activeTickers.size) {
        state.activeTickers.add(input.dataset.ticker);
        input.checked = true;
      }
      renderContextBand();
      renderMarketStatusRail();
      renderLaunchOps();
      drawSignalMap();
    });
  });
}

function renderLibrary() {
  const docs = getLibraryDocs();
  const trustedCount = docs.filter(isPriorityDoc).length;
  els.documentCount.textContent = trustedCount ? `${docs.length} docs | ${trustedCount} external` : `${docs.length} docs`;
  els.libraryList.innerHTML = docs.map((doc) => {
    const checked = state.enabledDocIds.has(doc.id) ? "checked" : "";
  const trustClass = getSourceClass(doc);
  const trustLabel = getDocSourceLabel(doc);
  const quality = doc.sourceQuality ? `${doc.sourceQuality.quality}/100` : "Demo";
    const security = doc.securityAudit ? `Security ${doc.securityAudit.score}` : "Security ok";
    return `
      <label class="source-toggle">
        <input type="checkbox" data-doc-id="${escapeAttr(doc.id)}" ${checked} />
        <span class="source-main">
          <strong>${escapeHtml(doc.ticker)} - ${escapeHtml(doc.period)}</strong>
          <span>${escapeHtml(doc.company)} - ${escapeHtml(doc.date)} - ${escapeHtml(quality)} - ${escapeHtml(security)}</span>
        </span>
        <span class="source-kind ${trustClass}">${escapeHtml(shortDocType(doc.type))} | ${escapeHtml(trustLabel)}</span>
      </label>
    `;
  }).join("");

  els.libraryList.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => {
      if (input.checked) {
        state.enabledDocIds.add(input.dataset.docId);
      } else {
        state.enabledDocIds.delete(input.dataset.docId);
      }
      renderSourceQuality();
      renderSecurityPosture();
      renderContextBand();
      renderMarketStatusRail();
      renderResearchDossierBuilder();
    });
  });
}

function renderSourceQuality() {
  if (!els.sourceQualityPanel) return;
  const enabledUploaded = state.uploadedDocs.filter((doc) => state.enabledDocIds.has(doc.id));
  const audit = state.lastImportAudit || (enabledUploaded.length ? summarizeImportAudit(enabledUploaded) : null);
  if (!audit) {
    els.sourceQualityPanel.innerHTML = `
      <div class="source-quality-empty">
        <strong>Source quality check</strong>
        <span>Import a filing, transcript, or note to see ticker detection, sections, citation-ready passages, and trust score.</span>
      </div>
    `;
    return;
  }
  els.sourceQualityPanel.innerHTML = `
    <div class="source-quality-top">
      <span>${escapeHtml(audit.label)}</span>
      <strong>${escapeHtml(String(audit.quality))}/100</strong>
    </div>
    <dl class="source-quality-grid">
      <div><dt>Ticker</dt><dd>${escapeHtml(audit.ticker)}</dd></div>
      <div><dt>Type</dt><dd>${escapeHtml(audit.type)}</dd></div>
      <div><dt>Sections</dt><dd>${escapeHtml(String(audit.sections))}</dd></div>
      <div><dt>Citations</dt><dd>${escapeHtml(String(audit.passages))}</dd></div>
      <div><dt>Security</dt><dd>${escapeHtml(String(audit.securityScore || 100))}/100</dd></div>
    </dl>
    <p>${escapeHtml(audit.note)} ${escapeHtml(audit.securityNote || "")}</p>
  `;
}

function renderSecurityPosture() {
  if (!els.securityPosturePanel) return;
  const posture = summarizeSecurityPosture();
  const findingsText = posture.findings.length
    ? posture.findings.slice(0, 3).map((finding) => finding.label).join(", ")
    : "No risky patterns in enabled imports";
  els.securityPosturePanel.innerHTML = `
    <div class="security-posture-top">
      <span>Security posture</span>
      <strong>${escapeHtml(String(posture.score))}/100</strong>
    </div>
    <div class="security-meter" aria-hidden="true"><i style="width:${escapeAttr(String(posture.score))}%"></i></div>
    <dl class="security-grid">
      <div><dt>RAG guard</dt><dd>${escapeHtml(posture.ragGuard)}</dd></div>
      <div><dt>Secrets</dt><dd>${escapeHtml(posture.secretPosture)}</dd></div>
      <div><dt>Imports</dt><dd>${escapeHtml(posture.importPosture)}</dd></div>
      <div><dt>Findings</dt><dd>${escapeHtml(String(posture.findings.length))}</dd></div>
    </dl>
    <p>${escapeHtml(findingsText)}</p>
    <p>${escapeHtml(SECURITY_BASELINE.slice(0, 3).join(" | "))}</p>
  `;
}

function renderQuestionSecurityStrip() {
  if (!els.questionSecurityStrip) return;
  const current = els.queryInput ? els.queryInput.value.trim() : "";
  const audit = state.lastQuestionSecurity || assessTextSecurity(current, "Question");
  if (!current) {
    els.questionSecurityStrip.innerHTML = `
      <div class="question-security is-idle">
        <span>Question guard</span>
        <strong>Ready</strong>
        <em>Questions are scanned for prompt-injection and credential leakage before analysis.</em>
      </div>
    `;
    return;
  }
  const className = audit.findings.length ? (audit.level === "high" ? "is-risky" : "is-warn") : "is-clean";
  els.questionSecurityStrip.innerHTML = `
    <div class="question-security ${className}">
      <span>Question guard</span>
      <strong>${escapeHtml(audit.summary)}</strong>
      <em>${escapeHtml(audit.findings.length ? audit.findings.map((finding) => finding.label).join(", ") : "No risky question patterns detected.")}</em>
    </div>
  `;
}

function loadMarketSettings() {
  const saved = loadJson(STORAGE_KEYS.marketSettings, {});
  const provider = MARKET_PROVIDER_LABELS[saved.provider] ? saved.provider : "demo";
  return {
    provider,
    ticker: normalizeTicker(saved.ticker || "NVDA"),
    apiKey: ""
  };
}

function saveMarketSettings() {
  saveJson(STORAGE_KEYS.marketSettings, {
    provider: state.marketSettings.provider,
    ticker: normalizeTicker(state.marketSettings.ticker || "NVDA")
  });
}

function renderLiveDataControl() {
  if (!els.liveDataForm) return;
  els.marketProvider.value = state.marketSettings.provider;
  els.marketTicker.value = state.marketSettings.ticker || "NVDA";
  const provider = state.marketSettings.provider;
  els.marketApiKey.placeholder = provider === "demo" ? "Not needed for demo quote" : "Paste key for this browser session";
  els.marketApiKey.disabled = provider === "demo";
  if (provider === "demo") {
    els.marketApiKey.value = "";
  }
  const message = state.marketStatus.message || "Demo quote ready.";
  setLiveDataStatus(message, state.marketStatus.level || "idle");
}

function renderMarketStatusRail() {
  if (!els.marketStatusRail) return;
  const enabledDocs = getEnabledDocs();
  const counts = countSourceKinds(enabledDocs);
  const filingLabel = counts["sec-live"] ? "SEC live" : counts["sec-mock"] ? "SEC mock" : counts.uploaded ? "Your data" : "Sample";
  const filingSub = counts["sec-live"]
    ? `${counts["sec-live"]} live filing source${counts["sec-live"] === 1 ? "" : "s"}`
    : counts["sec-mock"]
      ? `${counts["sec-mock"]} labeled fallback source${counts["sec-mock"] === 1 ? "" : "s"}`
      : counts.uploaded
        ? `${counts.uploaded} imported source${counts.uploaded === 1 ? "" : "s"}`
        : `${enabledDocs.length} sample docs`;
  const quote = state.marketQuote;
  const marketLabel = quote ? `${quote.ticker} ${formatQuotePrice(quote.price)}` : "Quote ready";
  const marketSub = quote ? `${quote.providerLabel} ${formatQuoteMove(quote)}` : "Demo now, API when keyed";
  const provider = state.marketSettings.provider;
  const apiSub = provider === "demo" ? "No key needed" : "Key entered only for fetch request";
  const securityPosture = summarizeSecurityPosture();
  const tiles = [
    { label: "Filing bridge", value: filingLabel, sub: filingSub, level: counts["sec-live"] || counts.uploaded ? "good" : counts["sec-mock"] ? "warn" : "idle" },
    { label: "Market bridge", value: marketLabel, sub: marketSub, level: quote ? "good" : "idle" },
    { label: "Security", value: `${securityPosture.score}/100`, sub: securityPosture.findings.length ? "Review source flags" : "Guardrails active", level: securityPosture.findings.length ? "warn" : "good" },
    { label: "Provider", value: MARKET_PROVIDER_LABELS[provider] || "Demo quote", sub: apiSub, level: provider === "demo" ? "idle" : "warn" },
    { label: "Exports", value: "PDF + MD", sub: state.lastBrief ? "Memo ready" : "Runs after first answer", level: state.lastBrief ? "good" : "idle" }
  ];
  els.marketStatusRail.innerHTML = tiles.map((tile) => `
    <div class="status-rail-item is-${escapeAttr(tile.level)}">
      <span>${escapeHtml(tile.label)}</span>
      <strong>${escapeHtml(tile.value)}</strong>
      <em>${escapeHtml(tile.sub)}</em>
    </div>
  `).join("");
}

function renderMarketQuoteCard() {
  if (!els.marketQuoteCard) return;
  const quote = state.marketQuote;
  if (!quote) {
    els.marketQuoteCard.innerHTML = `
      <div class="quote-empty">
        <span>Market bridge</span>
        <strong>No quote connected</strong>
        <em>Use demo quote or add an API key in the Import Center.</em>
      </div>
    `;
    return;
  }
  const isSelected = quote.ticker === state.selectedTicker;
  els.marketQuoteCard.innerHTML = `
    <div class="quote-topline">
      <div>
        <span>${escapeHtml(quote.providerLabel)}</span>
        <strong>${escapeHtml(quote.ticker)} ${formatQuotePrice(quote.price)}</strong>
      </div>
      <b class="${quote.changePercent >= 0 ? "is-positive" : "is-negative"}">${escapeHtml(formatQuoteMove(quote))}</b>
    </div>
    <dl class="quote-metrics">
      <div><dt>Market cap</dt><dd>${escapeHtml(formatMarketCap(quote.marketCap))}</dd></div>
      <div><dt>P/E</dt><dd>${escapeHtml(formatMetricValue(quote.pe, "x"))}</dd></div>
      <div><dt>Dividend</dt><dd>${escapeHtml(formatMetricValue(quote.dividendYield, "%"))}</dd></div>
    </dl>
    <p>${escapeHtml(isSelected ? "Connected to the active valuation lens." : `Quote loaded for ${quote.ticker}; select it in the valuation lens to use the market company profile.`)}</p>
  `;
}

function setLiveDataStatus(message, level = "idle") {
  state.marketStatus = { level, message };
  if (!els.liveDataStatus) return;
  els.liveDataStatus.className = `live-data-status is-${level}`;
  els.liveDataStatus.textContent = message;
}

function renderContextBand() {
  const enabledDocs = getEnabledDocs();
  const activeCompanies = getCompanies().filter((company) => state.activeTickers.has(company.ticker));
  const dataMode = summarizeDataMode(enabledDocs);
  const quote = state.marketQuote;
  const averageMargin = activeCompanies.length
    ? activeCompanies.reduce((sum, company) => sum + company.opMargin, 0) / activeCompanies.length
    : 0;
  const averageRisk = activeCompanies.length
    ? activeCompanies.reduce((sum, company) => sum + company.risk, 0) / activeCompanies.length
    : 0;
  const citationCount = state.currentCitations.length;
  const focusTile = state.tickerFocus
    ? {
        label: "Ticker focus",
        value: state.tickerFocus.rawTicker,
        sub: state.tickerFocus.isAlias ? `${state.tickerFocus.ticker} demo proxy` : state.tickerFocus.company.name
      }
    : { label: "Active companies", value: activeCompanies.length, sub: activeCompanies.map((company) => company.ticker).join(", ") || "None" };

  const tiles = [
    focusTile,
    { label: "Data mode", value: dataMode.label, sub: dataMode.sub },
    { label: "Market quote", value: quote ? formatQuotePrice(quote.price) : "Ready", sub: quote ? `${quote.ticker} ${formatQuoteMove(quote)}` : "Demo/API bridge" },
    { label: "Avg op margin", value: `${averageMargin.toFixed(1)}%`, sub: "Selected coverage" },
    { label: "Risk index", value: Math.round(averageRisk), sub: citationCount ? `${citationCount} current citations` : "Pre-query baseline" }
  ];

  els.contextBand.innerHTML = tiles.map((tile) => `
    <div class="metric-tile">
      <span>${escapeHtml(tile.label)}</span>
      <strong>${escapeHtml(String(tile.value))}</strong>
      <em>${escapeHtml(tile.sub)}</em>
    </div>
  `).join("");
}

async function connectMarketBridge() {
  const provider = els.marketProvider.value;
  const ticker = normalizeTicker(els.marketTicker.value || state.marketSettings.ticker || "NVDA");
  const apiKey = els.marketApiKey.value.trim();
  state.marketSettings = { provider, ticker, apiKey: "" };
  saveMarketSettings();
  if (provider !== "demo" && !apiKey) {
    setLiveDataStatus("Paste an API key for this provider, or switch to Demo quote.", "fallback");
    renderMarketStatusRail();
    renderLaunchOps();
    return;
  }

  setLiveDataStatus(`Fetching ${ticker} from ${MARKET_PROVIDER_LABELS[provider] || "selected provider"}...`, "loading");
  try {
    const quote = await fetchMarketQuote(provider, ticker, apiKey);
    state.marketQuote = quote;
    state.selectedTicker = quote.ticker;
    state.activeTickers.add(quote.ticker);
    renderCoverage();
    renderContextBand();
    renderMarketStatusRail();
    renderValuationOptions();
    updateValuationFromCompany();
    updateValuation();
    renderMarketQuoteCard();
    drawSignalMap();
    setLiveDataStatus(`Connected ${quote.ticker} quote from ${quote.providerLabel}.`, quote.isDemo ? "fallback" : "success");
    renderMarketStatusRail();
    renderLaunchOps();
  } catch (error) {
    const fallback = makeDemoMarketQuote(ticker, error);
    state.marketQuote = fallback;
    state.selectedTicker = fallback.ticker;
    state.activeTickers.add(fallback.ticker);
    renderCoverage();
    renderContextBand();
    renderMarketStatusRail();
    renderValuationOptions();
    updateValuationFromCompany();
    updateValuation();
    renderMarketQuoteCard();
    drawSignalMap();
    setLiveDataStatus(`Provider fetch failed; loaded labeled demo quote for ${fallback.ticker}.`, "fallback");
    renderMarketStatusRail();
    renderLaunchOps();
  }
}

async function fetchMarketQuote(provider, ticker, apiKey) {
  if (provider === "demo") return makeDemoMarketQuote(ticker);
  if (!window.fetch) throw new Error("Browser fetch is unavailable.");
  if (provider === "alpha-vantage") {
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${encodeURIComponent(ticker)}&apikey=${encodeURIComponent(apiKey)}`;
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error(`Alpha Vantage returned ${response.status}.`);
    return parseAlphaVantageQuote(await response.json(), ticker);
  }
  if (provider === "fmp") {
    const url = `https://financialmodelingprep.com/api/v3/quote/${encodeURIComponent(ticker)}?apikey=${encodeURIComponent(apiKey)}`;
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error(`Financial Modeling Prep returned ${response.status}.`);
    return parseFmpQuote(await response.json(), ticker);
  }
  throw new Error("Unsupported quote provider.");
}

function makeDemoMarketQuote(ticker, error = null) {
  const safeTicker = normalizeTicker(ticker || "NVDA");
  const base = DEMO_MARKET_QUOTES[safeTicker] || {
    name: `${safeTicker} demo quote`,
    price: 100 + safeTicker.length * 11,
    change: 1.4,
    changePercent: 1.1,
    marketCap: 25000000000,
    pe: 22,
    dividendYield: 0
  };
  return normalizeMarketQuote({
    ...base,
    ticker: safeTicker,
    provider: "demo",
    providerLabel: error ? "Demo fallback" : "Demo quote",
    isDemo: true,
    note: error ? String(error.message || error) : "Static demo quote"
  });
}

function parseAlphaVantageQuote(payload, ticker) {
  const quote = payload && payload["Global Quote"];
  if (!quote || !Object.keys(quote).length) throw new Error("No Alpha Vantage quote payload.");
  return normalizeMarketQuote({
    ticker,
    name: `${ticker} market quote`,
    price: quote["05. price"],
    change: quote["09. change"],
    changePercent: String(quote["10. change percent"] || "").replace("%", ""),
    marketCap: null,
    pe: null,
    dividendYield: null,
    provider: "alpha-vantage",
    providerLabel: "Alpha Vantage",
    isDemo: false
  });
}

function parseFmpQuote(payload, ticker) {
  const quote = Array.isArray(payload) ? payload[0] : payload;
  if (!quote || !quote.symbol) throw new Error("No Financial Modeling Prep quote payload.");
  return normalizeMarketQuote({
    ticker: quote.symbol || ticker,
    name: quote.name || `${ticker} market quote`,
    price: quote.price,
    change: quote.change,
    changePercent: quote.changesPercentage,
    marketCap: quote.marketCap,
    pe: quote.pe,
    dividendYield: quote.lastDiv && quote.price ? (Number(quote.lastDiv) / Number(quote.price)) * 100 : quote.dividendYield,
    provider: "fmp",
    providerLabel: "Financial Modeling Prep",
    isDemo: false
  });
}

function normalizeMarketQuote(raw) {
  const price = Number(raw.price) || 0;
  const change = Number(raw.change) || 0;
  const changePercent = Number(raw.changePercent) || 0;
  return {
    ticker: normalizeTicker(raw.ticker || "NVDA"),
    name: String(raw.name || `${raw.ticker || "NVDA"} market quote`),
    price,
    change,
    changePercent,
    marketCap: raw.marketCap === null || raw.marketCap === undefined ? null : Number(raw.marketCap) || null,
    pe: raw.pe === null || raw.pe === undefined ? null : Number(raw.pe) || null,
    dividendYield: raw.dividendYield === null || raw.dividendYield === undefined ? null : Number(raw.dividendYield) || 0,
    provider: raw.provider || "demo",
    providerLabel: raw.providerLabel || MARKET_PROVIDER_LABELS[raw.provider] || "Market quote",
    isDemo: Boolean(raw.isDemo),
    note: raw.note || "",
    fetchedAt: new Date().toISOString()
  };
}

function renderValuationOptions() {
  const companies = getCompanies();
  els.valuationTicker.innerHTML = companies.map((company) => {
    const selected = company.ticker === state.selectedTicker ? "selected" : "";
    return `<option value="${escapeAttr(company.ticker)}" ${selected}>${escapeHtml(company.ticker)} - ${escapeHtml(company.name)}</option>`;
  }).join("");
}

function scanFilingFromCurrentQuestion() {
  const current = els.queryInput.value.trim();
  const focus = syncTickerFocus(current) || state.tickerFocus || {
    rawTicker: state.selectedTicker,
    ticker: state.selectedTicker,
    company: getCompany(state.selectedTicker),
    isAlias: false,
    note: ""
  };
  const tickerToken = focus.rawTicker || focus.ticker;
  const filingPrompt = current
    ? `${current} Scan the 10-K risk factors, MD&A, liquidity, and earnings-call tone.`
    : `Scan the 10-K risk factors, MD&A, liquidity, and earnings-call tone for $${tickerToken}.`;
  els.queryInput.value = filingPrompt;
  runAnalysis(filingPrompt);
}

function syncTickerFocus(question) {
  const focus = resolveTickerFocus(question);
  if (!focus) return null;
  const key = `${focus.rawTicker}->${focus.ticker}`;
  if (key === state.lastFocusKey) return focus;

  state.lastFocusKey = key;
  state.tickerFocus = focus;
  state.selectedTicker = focus.ticker;
  state.activeTickers.add(focus.ticker);
  renderCoverage();
  renderContextBand();
  renderMarketStatusRail();
  renderValuationOptions();
  updateValuationFromCompany();
  updateValuation();
  renderMarketQuoteCard();
  renderLaunchOps();
  renderResearchDossierBuilder();
  renderThesisTimelineAuditTrail();
  renderMorningBriefingRoom();
  renderEarningsCallPrepRoom();
  renderPostEarningsDebriefRoom();
  renderGuidanceRevisionRoom();
  renderModelVersionControlRoom();
  renderIcApprovalRoom();
  renderPortfolioActionRoom();
  drawSignalMap();
  return focus;
}

function resolveTickerFocus(question) {
  const text = String(question || "");
  const companies = getCompanies();
  const tickerMatch = text.match(/\$([A-Z][A-Z0-9.]{0,7})\b/i);
  const rawTicker = tickerMatch ? normalizeTicker(tickerMatch[1]) : "";
  if (rawTicker) {
    const direct = companies.find((company) => company.ticker.toUpperCase() === rawTicker);
    if (direct) {
      return { rawTicker, ticker: direct.ticker, company: direct, isAlias: false, note: "" };
    }
    const alias = PUBLIC_TICKER_ALIASES[rawTicker];
    if (alias) {
      const company = getCompany(alias.ticker);
      return { rawTicker, ticker: company.ticker, company, isAlias: true, note: alias.note };
    }
  }

  const lower = text.toLowerCase();
  const directMention = companies.find((company) => {
    return lower.includes(company.ticker.toLowerCase()) || lower.includes(company.name.toLowerCase());
  });
  if (!directMention) return null;
  return {
    rawTicker: directMention.ticker,
    ticker: directMention.ticker,
    company: directMention,
    isAlias: false,
    note: ""
  };
}

function addTickerContext(question, focus) {
  if (!focus) return question;
  const aliasText = focus.isAlias ? `${focus.rawTicker} maps to ${focus.ticker} as a static demo proxy. ${focus.note}.` : "";
  return `${question} ${focus.ticker} ${focus.company.name} ${aliasText}`;
}

function runAnalysis(question) {
  if (!question) {
    els.queryInput.focus();
    return;
  }
  state.lastQuestionSecurity = assessTextSecurity(question, "Question");
  renderQuestionSecurityStrip();
  renderSecurityPosture();

  const tickerFocus = syncTickerFocus(question);
  const retrievalQuestion = addTickerContext(question, tickerFocus);
  recordWorkflowEvent("analysis", {
    question,
    ticker: tickerFocus ? tickerFocus.rawTicker : state.selectedTicker,
    depth: state.answerDepth
  });
  const docs = getEnabledDocs();
  if (!docs.length) {
    renderNoDocs(question);
    return;
  }

  const chunks = buildChunks(docs);
  const ranked = rankChunks(retrievalQuestion, chunks).slice(0, 8);
  if (!ranked.length) {
    renderNoHits(question);
    return;
  }

  const citations = ranked.slice(0, 6).map((chunk, index) => ({
    ...chunk,
    citationId: `C${index + 1}`
  }));
  state.currentCitations = citations;

  const intent = detectIntent(retrievalQuestion);
  const answerModel = buildAnswerModel(question, citations, intent, tickerFocus);
  state.lastBrief = answerModel.plainText;
  state.lastAnswerModel = answerModel;
  renderAnswer(answerModel);
  renderEvidence(citations);
  renderContextBand();
  renderMarketStatusRail();
  renderLaunchOps();
  renderResearchDossierBuilder();
  renderThesisTimelineAuditTrail();
  renderMorningBriefingRoom();
  renderEarningsCallPrepRoom();
  renderPostEarningsDebriefRoom();
  renderGuidanceRevisionRoom();
  renderModelVersionControlRoom();
  renderIcApprovalRoom();
  renderPortfolioActionRoom();
  drawSignalMap(citations);
}

function renderNoDocs(question) {
  state.currentCitations = [];
  state.lastBrief = `No enabled documents for: ${question}`;
  state.lastAnswerModel = null;
  els.answerPanel.innerHTML = `
    <div class="empty-state">
      <div class="empty-kicker">No corpus</div>
      <h2>No enabled documents match the selected coverage.</h2>
      <p>Enable at least one source document or select another company, then run the analysis again.</p>
    </div>
  `;
  renderEvidence([]);
  renderContextBand();
  renderMarketStatusRail();
  renderLaunchOps();
  renderResearchDossierBuilder();
  renderThesisTimelineAuditTrail();
  renderMorningBriefingRoom();
  renderEarningsCallPrepRoom();
  renderPostEarningsDebriefRoom();
  renderGuidanceRevisionRoom();
  renderModelVersionControlRoom();
  renderIcApprovalRoom();
  renderPortfolioActionRoom();
}

function renderNoHits(question) {
  state.currentCitations = [];
  state.lastBrief = `No high-confidence passages for: ${question}`;
  state.lastAnswerModel = null;
  els.answerPanel.innerHTML = `
    <div class="empty-state">
      <div class="empty-kicker">Low recall</div>
      <h2>No strong source passages were retrieved.</h2>
      <p>Try a narrower question, enable more documents, or import a filing section with the relevant disclosure.</p>
    </div>
  `;
  renderEvidence([]);
  renderContextBand();
  renderMarketStatusRail();
  renderLaunchOps();
  renderResearchDossierBuilder();
  renderThesisTimelineAuditTrail();
  renderMorningBriefingRoom();
  renderEarningsCallPrepRoom();
  renderPostEarningsDebriefRoom();
  renderGuidanceRevisionRoom();
  renderModelVersionControlRoom();
  renderIcApprovalRoom();
  renderPortfolioActionRoom();
}

function buildAnswerModel(question, citations, intent, tickerFocus = null) {
  const compareMode = isCompareQuestion(question, citations);
  const grouped = groupCitationsByTicker(citations);
  const rankedCompanies = rankCompaniesForQuestion(question, grouped, intent);
  const confidence = computeConfidence(citations, rankedCompanies);
  const headline = makeHeadline(question, compareMode, rankedCompanies, intent);
  const thesis = makeThesis(compareMode, rankedCompanies, citations, intent);
  const toneMeter = makeToneMeter(rankedCompanies, citations);
  const focusNotice = makeTickerFocusNotice(tickerFocus);
  const sourceTrust = makeSourceTrust(citations);
  const sourceAudit = makeSourceAudit(citations, rankedCompanies);
  const evidenceBullets = citations.slice(0, state.answerDepth === "brief" ? 3 : 5).map((citation, index) => {
    return `<li>${makeEvidenceSentence(citation, intent)} ${citationLink(index)}</li>`;
  }).join("");
  const riskFactorSection = intent.id === "risk" ? makeRiskFactorSection(citations, rankedCompanies) : "";
  const watchItems = makeWatchItems(citations, rankedCompanies, intent);
  const valuationRead = makeValuationRead(rankedCompanies[0], intent);
  const debate = makeDebate(citations, rankedCompanies);
  const table = makeCompanyTable(rankedCompanies);
  const copilot = makeAnalystCopilot(question, citations, rankedCompanies, intent, sourceAudit, toneMeter);

  const sections = [
    `
      <section class="answer-section">
        <h3>Bottom line</h3>
        <p>${thesis}</p>
      </section>
    `
  ];

  if (intent.id === "risk") {
    sections.push(riskFactorSection);
  } else {
    sections.push(`
      <section class="answer-section">
        <h3>Evidence</h3>
        <ul>${evidenceBullets}</ul>
      </section>
    `);
  }

  if (state.answerDepth !== "brief") {
    sections.push(`
      <section class="answer-section">
        <h3>Source-weighted ranking</h3>
        ${table}
      </section>
    `);
    sections.push(`
      <section class="answer-section">
        <h3>What the committee would debate</h3>
        <p>${debate}</p>
      </section>
    `);
  }

  sections.push(`
    <section class="answer-section">
      <h3>Valuation read-through</h3>
      <p>${valuationRead}</p>
    </section>
  `);

  if (state.answerDepth === "committee") {
    sections.push(`
      <section class="answer-section">
        <h3>What would change the answer</h3>
        <p>${watchItems}</p>
      </section>
    `);
  }

  const html = `
    <div class="answer-header">
      <div>
        <div class="answer-kicker-row">
          <span class="answer-kicker">${escapeHtml(intent.label)}</span>
          <span class="trust-pill ${escapeAttr(sourceTrust.className)}">${escapeHtml(sourceTrust.label)}</span>
        </div>
        <h2>${headline}</h2>
      </div>
      <div class="confidence-box">
        <span>Confidence</span>
        <strong>${confidence}%</strong>
      </div>
    </div>
    <div class="answer-body">
      ${focusNotice}
      ${toneMeter.html}
      ${sourceAudit.html}
      ${copilot.html}
      ${sections.join("")}
    </div>
  `;

  const plainParts = [
    `${intent.label} | ${confidence}% confidence`,
    `Management tone: ${toneMeter.label} (${toneMeter.percent}/100)`,
    tickerFocus ? `Ticker focus: ${tickerFocus.rawTicker}${tickerFocus.isAlias ? ` maps to ${tickerFocus.ticker} (${tickerFocus.note})` : ""}` : "",
    sourceTrust.plainText,
    sourceAudit.plainText,
    copilot.plainText,
    stripHtml(headline),
    stripHtml(thesis),
    intent.id === "risk" ? "3 cited risk factors:" : "Evidence:"
  ].filter(Boolean);

  if (intent.id === "risk") {
    plainParts.push(makeRiskFactorPlainText(citations, rankedCompanies));
    plainParts.push("Evidence stack:");
  }

  plainParts.push(
    ...citations.slice(0, 5).map((citation, index) => `${index + 1}. ${citation.company} ${citation.type} ${citation.section}: ${snippet(citation.text, 240)}`),
    `Valuation read-through: ${stripHtml(valuationRead)}`
  );

  const plainText = plainParts.join("\n\n");

  return {
    html,
    plainText,
    citations,
    confidence,
    headline: stripHtml(headline),
    intentId: intent.id,
    intentLabel: intent.label,
    toneLabel: toneMeter.label,
    tonePercent: toneMeter.percent,
    sourceTrust,
    sourceAudit,
    copilot,
    tickerFocus
  };
}

function makeToneMeter(rankedCompanies, citations) {
  const score = rankedCompanies[0]
    ? rankedCompanies[0].tone
    : citations.reduce((sum, citation) => sum + toneScore(citation.text), 0) / Math.max(citations.length, 1);
  const percent = Math.max(5, Math.min(95, Math.round(50 + score * 12)));
  const label = percent >= 62 ? "Bullish" : percent <= 38 ? "Bearish" : "Balanced";
  const cls = percent >= 62 ? "positive" : percent <= 38 ? "negative" : "mixed";
  const evidenceCount = citations.filter((citation) => /call|management|q&a|prepared/i.test(`${citation.type} ${citation.section}`)).length;
  const sourceText = evidenceCount
    ? `${evidenceCount} management-commentary source${evidenceCount === 1 ? "" : "s"} pulled into the read.`
    : "Tone inferred from the retrieved filing and model language.";

  return {
    label,
    percent,
    html: `
      <section class="tone-meter-card ${cls}" aria-label="Management tone meter">
        <div class="tone-meter-top">
          <span>Management tone</span>
          <strong>${escapeHtml(label)} ${percent}/100</strong>
        </div>
        <div class="tone-track" aria-hidden="true">
          <i style="left: ${percent}%"></i>
        </div>
        <div class="tone-scale">
          <span>Bearish</span>
          <span>Balanced</span>
          <span>Bullish</span>
        </div>
        <p>${escapeHtml(sourceText)}</p>
      </section>
    `
  };
}

function makeTickerFocusNotice(focus) {
  if (!focus) return "";
  const aliasText = focus.isAlias
    ? ` Static demo maps $${focus.rawTicker} to ${focus.ticker} (${focus.note}) until live market data is connected.`
    : "";
  return `
    <section class="ticker-focus-card">
      <span>Ticker focus</span>
      <strong>${escapeHtml(focus.company.ticker)} - ${escapeHtml(focus.company.name)}</strong>
      <p>${escapeHtml(focus.company.thesis || "Research context updated from the question input.")}${escapeHtml(aliasText)}</p>
    </section>
  `;
}

function makeSourceTrust(citations) {
  const sample = citations.filter((citation) => getSourceKind(citation) === "sample").length;
  const live = citations.filter((citation) => getSourceKind(citation) === "sec-live").length;
  const mock = citations.filter((citation) => getSourceKind(citation) === "sec-mock").length;
  const user = citations.filter((citation) => getSourceKind(citation) === "uploaded").length;
  const sourceParts = [
    live ? "SEC live" : "",
    mock ? "SEC mock" : "",
    user ? "Your data" : "",
    sample ? "sample" : ""
  ].filter(Boolean);
  const label = sourceParts.length ? sourceParts.join(" + ") : "Sample data";
  const prioritized = live + mock + user;
  const note = prioritized
    ? `${prioritized} non-sample citation${prioritized === 1 ? "" : "s"} prioritized in this answer.`
    : "Answer is based on the bundled sample corpus until source documents are imported or connected.";
  const className = live ? "is-sec-live" : mock ? "is-sec-mock" : user ? "is-user" : "is-sample";
  return {
    label,
    imported: user,
    live,
    mock,
    sample,
    note,
    className,
    plainText: `Data source: ${label}. ${note}`
  };
}

function makeSourceAudit(citations, rankedCompanies) {
  const docCount = new Set(citations.map((citation) => citation.docId)).size;
  const trustedCount = citations.filter(isPriorityCitation).length;
  const sampleCount = citations.length - trustedCount;
  const filingCount = citations.filter((citation) => /filing|10-k|10-q/i.test(citation.type)).length;
  const callCount = citations.filter((citation) => /call|q&a|prepared/i.test(`${citation.type} ${citation.section}`)).length;
  const modelCount = citations.filter((citation) => /model|valuation/i.test(citation.type)).length;
  const topScore = citations[0] ? citations[0].score : 0;
  const coverageLabel = docCount >= 4 ? "Broad" : docCount >= 2 ? "Focused" : "Narrow";
  const companyLabel = rankedCompanies[0] ? rankedCompanies[0].ticker : "Desk";
  const dataLabel = makeAuditDataLabel(citations);
  const balance = [
    filingCount ? `${filingCount} filing` : "",
    callCount ? `${callCount} call` : "",
    modelCount ? `${modelCount} model` : ""
  ].filter(Boolean).join(" / ") || "No retrieved sources";
  const quality = Math.max(42, Math.min(98, Math.round(42 + docCount * 7 + filingCount * 4 + callCount * 3 + trustedCount * 4 + Math.min(topScore, 18))));

  return {
    coverageLabel,
    balance,
    dataLabel,
    importedCount: trustedCount,
    sampleCount,
    quality,
    plainText: `Source audit: ${quality}/100 quality, ${coverageLabel.toLowerCase()} coverage, ${balance}. Data mode: ${dataLabel}.`,
    html: `
      <section class="source-audit-card" aria-label="Source audit">
        <div>
          <span>Source audit</span>
          <strong>${quality}/100</strong>
        </div>
        <dl>
          <div><dt>Coverage</dt><dd>${escapeHtml(coverageLabel)}</dd></div>
          <div><dt>Data</dt><dd>${escapeHtml(dataLabel)}</dd></div>
          <div><dt>Mix</dt><dd>${escapeHtml(balance)}</dd></div>
          <div><dt>Anchor</dt><dd>${escapeHtml(companyLabel)}</dd></div>
        </dl>
      </section>
    `
  };
}

function makeAnalystCopilot(question, citations, rankedCompanies, intent, sourceAudit, toneMeter) {
  const leader = rankedCompanies[0] || getCompany(state.selectedTicker);
  const companyLabel = leader ? leader.ticker : "the company";
  const followUps = makeFollowUpQuestions(question, companyLabel, intent);
  const scenarios = makeScenarioFrames(companyLabel, citations, rankedCompanies, intent);
  const redFlags = makeRedFlags(citations);
  const checklist = makeCommitteeChecklist(sourceAudit, toneMeter, citations, rankedCompanies, intent);
  const activeFlags = redFlags.filter((flag) => flag.active).length;
  const averageScore = Math.round(checklist.reduce((sum, item) => sum + item.score, 0) / Math.max(checklist.length, 1));

  return {
    followUps,
    scenarios,
    redFlags,
    checklist,
    averageScore,
    plainText: [
      `Analyst copilot: ${averageScore}/100 committee readiness.`,
      `Red flags: ${activeFlags}/${redFlags.length} active.`,
      `Follow-ups: ${followUps.join(" | ")}`
    ].join("\n"),
    html: `
      <section class="copilot-panel" aria-label="Analyst copilot">
        <div class="copilot-heading">
          <div>
            <span>Analyst Copilot</span>
            <strong>${escapeHtml(companyLabel)} committee read-through</strong>
          </div>
          <em>${averageScore}/100 ready</em>
        </div>
        <div class="scenario-switch" role="group" aria-label="Scenario framing">
          <button class="scenario-tab is-active" type="button" data-scenario="base">Base</button>
          <button class="scenario-tab" type="button" data-scenario="bull">Bull</button>
          <button class="scenario-tab" type="button" data-scenario="bear">Bear</button>
        </div>
        <p class="scenario-readout" data-scenario-readout>${escapeHtml(scenarios.base)}</p>
        <div class="red-flag-grid" aria-label="Red flag detector">
          ${redFlags.map((flag) => `
            <span class="red-flag ${flag.active ? "is-active" : ""}">
              <b>${escapeHtml(flag.label)}</b>
              <em>${escapeHtml(flag.active ? flag.reason : "Not prominent")}</em>
            </span>
          `).join("")}
        </div>
        <div class="committee-checklist">
          ${checklist.map((item) => `
            <div>
              <span>${escapeHtml(item.label)}</span>
              <strong>${item.score}</strong>
              <i><b style="width: ${item.score}%"></b></i>
            </div>
          `).join("")}
        </div>
        <div class="follow-up-row" aria-label="Suggested follow-up questions">
          ${followUps.map((item) => `<button class="copilot-question" type="button" data-question="${escapeAttr(item)}">${escapeHtml(item)}</button>`).join("")}
        </div>
      </section>
    `
  };
}

function makeFollowUpQuestions(question, ticker, intent) {
  if (intent.id === "risk") {
    return [
      `What would disprove the ${ticker} risk thesis?`,
      `Which ${ticker} risk should I model first?`,
      `What would management need to clarify next quarter?`
    ];
  }
  if (intent.id === "valuation") {
    return [
      `Which ${ticker} valuation assumption moves value most?`,
      `What is the bear-case FCF margin for ${ticker}?`,
      `What evidence would justify a higher multiple?`
    ];
  }
  if (intent.id === "rates") {
    return [
      `How does ${ticker} perform if rates stay high?`,
      `Which balance-sheet line is most rate-sensitive?`,
      `What refinancing language should I watch?`
    ];
  }
  if (/compare|which|better|rank/i.test(question)) {
    return [
      "What would change the ranking?",
      "Which company has the cleaner bear case?",
      "Which metric should I model before buying?"
    ];
  }
  return [
    `What is the strongest bear case for ${ticker}?`,
    `What source would change the answer for ${ticker}?`,
    `Which assumption should I flex first?`
  ];
}

function makeScenarioFrames(ticker, citations, rankedCompanies, intent) {
  const leader = rankedCompanies[0] || {};
  const sourceAnchor = citations[0] ? `${citations[0].type} / ${citations[0].section}` : "source stack";
  const metricText = leader.metrics || "the retrieved operating evidence";
  return {
    base: `${ticker} is underwritable if the highest-weighted ${sourceAnchor} remains consistent with ${metricText}. Keep the thesis tied to cited evidence rather than sector narrative.`,
    bull: `${ticker} bull case improves if management tone stays constructive, margins hold, and the next filing confirms that current risks are execution items rather than demand deterioration.`,
    bear: `${ticker} bear case activates if the source stack starts showing weaker demand, poorer cash conversion, refinancing pressure, or more cautious management language.`
  };
}

function makeRedFlags(citations) {
  const text = citations.map((citation) => `${citation.section} ${citation.text}`).join(" ").toLowerCase();
  const definitions = [
    { label: "Customer concentration", terms: ["customer concentration", "major customer", "top customers", "hyperscale"], reason: "Customer cadence can swing revenue." },
    { label: "Margin pressure", terms: ["gross margin", "margin pressure", "price investment", "yield", "mix"], reason: "Margins depend on execution and mix." },
    { label: "Debt/refinancing", terms: ["debt", "refinancing", "interest", "credit spread", "variable-rate"], reason: "Funding cost can change equity value." },
    { label: "Capex/cash drag", terms: ["capex", "capital expenditure", "free cash flow", "working capital", "commitments"], reason: "Cash conversion may lag earnings." },
    { label: "Guidance tone", terms: ["guidance", "expects", "acknowledged", "less confident", "procurement cadence"], reason: "Tone can lead estimate revisions." },
    { label: "Regulatory/export", terms: ["regulatory", "export", "controls", "permitting", "tax credit"], reason: "External constraints can delay value." }
  ];
  return definitions.map((definition) => ({
    ...definition,
    active: definition.terms.some((term) => text.includes(term))
  }));
}

function makeCommitteeChecklist(sourceAudit, toneMeter, citations, rankedCompanies, intent) {
  const filingCount = citations.filter((citation) => /filing|10-k|10-q/i.test(citation.type)).length;
  const callCount = citations.filter((citation) => /call|q&a|prepared|management/i.test(`${citation.type} ${citation.section}`)).length;
  const modelCount = citations.filter((citation) => /model|valuation/i.test(citation.type)).length;
  const redFlagCount = makeRedFlags(citations).filter((flag) => flag.active).length;
  const leader = rankedCompanies[0] || {};
  return [
    { label: "Evidence quality", score: Math.min(98, sourceAudit.quality || 50) },
    { label: "Management tone", score: Math.max(30, Math.min(95, toneMeter.percent || 50)) },
    { label: "Valuation sensitivity", score: Math.min(95, 50 + modelCount * 14 + (intent.id === "valuation" ? 12 : 0)) },
    { label: "Balance sheet risk", score: Math.max(35, Math.min(92, 92 - redFlagCount * 6 + (leader.netDebt < 0 ? 8 : -4))) },
    { label: "Catalyst visibility", score: Math.min(94, 46 + filingCount * 8 + callCount * 7) }
  ];
}

function renderAnswer(answerModel) {
  els.answerPanel.innerHTML = answerModel.html;
  els.answerPanel.querySelectorAll(".citation-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        document.querySelectorAll(".evidence-card").forEach((card) => card.classList.remove("is-active"));
        target.classList.add("is-active");
      }
    });
  });
  bindCopilotControls(answerModel);
}

function bindCopilotControls(answerModel) {
  const panel = els.answerPanel.querySelector(".copilot-panel");
  if (!panel || !answerModel.copilot) return;
  const readout = panel.querySelector("[data-scenario-readout]");
  panel.querySelectorAll(".scenario-tab").forEach((button) => {
    button.addEventListener("click", () => {
      panel.querySelectorAll(".scenario-tab").forEach((candidate) => candidate.classList.toggle("is-active", candidate === button));
      const key = button.dataset.scenario || "base";
      readout.textContent = answerModel.copilot.scenarios[key] || answerModel.copilot.scenarios.base;
    });
  });
  panel.querySelectorAll(".copilot-question").forEach((button) => {
    button.addEventListener("click", () => {
      els.queryInput.value = button.dataset.question || button.textContent.trim();
      els.queryInput.focus();
    });
  });
}

function renderEvidence(citations) {
  els.evidenceCount.textContent = String(citations.length);
  if (!citations.length) {
    els.evidenceList.innerHTML = `<div class="empty-list">Retrieved passages will appear here with source metadata and relevance scores.</div>`;
    return;
  }
  els.evidenceList.innerHTML = citations.map((citation) => `
    <article class="evidence-card" id="evidence-${escapeAttr(citation.citationId)}">
      <div class="evidence-meta">
        <span>${escapeHtml(citation.citationId)} - ${escapeHtml(citation.ticker)}</span>
        <span>${escapeHtml(getCitationSourceLabel(citation))} | ${citation.score.toFixed(1)}</span>
      </div>
      <strong>${escapeHtml(citation.type)} - ${escapeHtml(citation.period)} - ${escapeHtml(citation.section)}</strong>
      <p>${escapeHtml(snippet(citation.text, 280))}</p>
    </article>
  `).join("");
}

function buildChunks(docs) {
  const chunks = [];
  for (const doc of docs) {
    for (const section of doc.sections) {
      const parts = splitIntoChunks(section.text, 520);
      parts.forEach((text, index) => {
        const tokens = tokenize(`${doc.ticker} ${doc.company} ${doc.type} ${section.title} ${text}`);
        const tokenCounts = tokens.reduce((counts, token) => {
          counts[token] = (counts[token] || 0) + 1;
          return counts;
        }, {});
        chunks.push({
          id: `${doc.id}-${section.title}-${index}`,
          docId: doc.id,
          ticker: doc.ticker,
          company: doc.company,
          type: doc.type,
          period: doc.period,
          date: doc.date,
          section: section.title,
          text,
          sourceKind: getSourceKind(doc),
          sourceQuality: doc.sourceQuality || null,
          tokens,
          tokenCounts
        });
      });
    }
  }
  return chunks;
}

function rankChunks(question, chunks) {
  const queryTokens = expandTokens(question);
  const intent = detectIntent(question);
  const lowerQuestion = question.toLowerCase();
  const tickersInQuestion = getCompanies()
    .filter((company) => lowerQuestion.includes(company.ticker.toLowerCase()) || lowerQuestion.includes(company.name.toLowerCase()))
    .map((company) => company.ticker);

  return chunks
    .map((chunk) => {
      let score = 0;
      for (const token of queryTokens) {
        if (chunk.tokenCounts[token]) {
          score += 2.2 + Math.log(1 + chunk.tokenCounts[token]);
        }
      }
      for (const term of intent.terms) {
        if (chunk.tokenCounts[normalizeToken(term)]) {
          score += 1.6;
        }
      }
      if (tickersInQuestion.includes(chunk.ticker)) score += 6;
      if (/call|tone|management|confidence|guidance/.test(lowerQuestion) && /call/i.test(chunk.type)) score += 3.5;
      if (/filing|10-k|risk factor|mda|md&a/.test(lowerQuestion) && /filing/i.test(chunk.type)) score += 3.5;
      if (/valuation|model|multiple|discount/.test(lowerQuestion) && /model/i.test(chunk.type)) score += 5;
      if (/risk|headwind|pressure/.test(lowerQuestion) && /risk/i.test(chunk.section)) score += 2.5;
      if (chunk.sourceKind !== "sample" && (!tickersInQuestion.length || tickersInQuestion.includes(chunk.ticker))) {
        score += 5.5 + ((chunk.sourceQuality && chunk.sourceQuality.quality) || 70) / 100;
      }
      score += toneRelevance(question, chunk.text) * 0.55;
      return { ...chunk, score };
    })
    .filter((chunk) => chunk.score > 2)
    .sort((a, b) => b.score - a.score);
}

function expandTokens(text) {
  const base = tokenize(text);
  const expanded = new Set(base);
  for (const token of base) {
    if (SYNONYMS[token]) {
      SYNONYMS[token].forEach((item) => expanded.add(item));
    }
  }
  for (const company of getCompanies()) {
    const lower = text.toLowerCase();
    if (lower.includes(company.ticker.toLowerCase()) || lower.includes(company.name.toLowerCase())) {
      expanded.add(company.ticker.toLowerCase());
      tokenize(company.name).forEach((token) => expanded.add(token));
    }
  }
  return Array.from(expanded);
}

function tokenize(text) {
  return (text.toLowerCase().match(/[a-z0-9]+(?:\.[0-9]+)?/g) || [])
    .map(normalizeToken)
    .filter((token) => token.length > 1 && !STOP_WORDS.has(token));
}

function normalizeToken(token) {
  return String(token).toLowerCase().replace(/[^a-z0-9.]/g, "");
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function detectIntent(question) {
  const lowerQuestion = String(question || "").toLowerCase();
  if (/\b(risk|risks|risk factor|risk factors|headwind|headwinds|pressure points?)\b/.test(lowerQuestion)) {
    return INTENTS.find((intent) => intent.id === "risk");
  }
  if (/\b(rate|rates|interest|financing|refinancing|discount rate|leverage)\b/.test(lowerQuestion)) {
    return INTENTS.find((intent) => intent.id === "rates");
  }
  const tokens = new Set(expandTokens(question));
  const scored = INTENTS.map((intent) => {
    const score = intent.terms.reduce((sum, term) => sum + (tokens.has(normalizeToken(term)) ? 1 : 0), 0);
    return { ...intent, score };
  }).sort((a, b) => b.score - a.score);
  return scored[0].score ? scored[0] : INTENTS[1];
}

function groupCitationsByTicker(citations) {
  return citations.reduce((groups, citation) => {
    if (!groups[citation.ticker]) groups[citation.ticker] = [];
    groups[citation.ticker].push(citation);
    return groups;
  }, {});
}

function rankCompaniesForQuestion(question, grouped, intent) {
  const companies = getCompanies().filter((company) => grouped[company.ticker]);
  return companies.map((company) => {
    const group = grouped[company.ticker] || [];
    const relevance = group.reduce((sum, citation) => sum + citation.score, 0);
    const tone = group.reduce((sum, citation) => sum + toneScore(citation.text), 0) / Math.max(group.length, 1);
    let quality = company.growth * 0.2 + company.opMargin * 0.28 + company.fcfMargin * 0.25 + company.sentiment * 0.2 - company.risk * 0.18;
    if (intent.id === "margin") quality = company.grossMargin * 0.4 + company.opMargin * 0.38 + company.fcfMargin * 0.22 - company.risk * 0.16;
    if (intent.id === "rates") quality = company.fcfMargin * 0.32 + Math.max(-company.netDebt, 0) * 2.6 - Math.max(company.netDebt, 0) * 1.8 - company.risk * 0.22;
    if (intent.id === "cash") quality = company.fcfMargin * 0.45 - Math.max(company.netDebt, 0) * 1.6 - company.risk * 0.15;
    if (intent.id === "growth") quality = company.growth * 0.55 + company.sentiment * 0.2 - company.risk * 0.12;
    if (intent.id === "risk") quality = 100 - company.risk + company.fcfMargin * 0.2 + tone * 0.3;
    const score = relevance + quality + tone;
    return {
      ...company,
      citations: group,
      relevance,
      tone,
      score
    };
  }).sort((a, b) => b.score - a.score);
}

function computeConfidence(citations, rankedCompanies) {
  const docs = new Set(citations.map((citation) => citation.docId)).size;
  const types = new Set(citations.map((citation) => citation.type)).size;
  const companies = rankedCompanies.length;
  const topScore = citations[0] ? citations[0].score : 0;
  const confidence = 34 + docs * 6 + types * 7 + companies * 5 + Math.min(topScore * 1.5, 18);
  return Math.max(42, Math.min(94, Math.round(confidence)));
}

function makeHeadline(question, compareMode, rankedCompanies, intent) {
  if (!rankedCompanies.length) return escapeHtml(question);
  const leader = rankedCompanies[0];
  if (intent.id === "risk") {
    return `${escapeHtml(leader.ticker)} has three source-backed risk factors to underwrite.`;
  }
  if (compareMode && rankedCompanies.length > 1) {
    return `${escapeHtml(leader.ticker)} screens best on ${escapeHtml(intent.label.toLowerCase())}, but the answer is source-dependent.`;
  }
  return `${escapeHtml(leader.ticker)} has a ${toneLabel(leader.tone).toLowerCase()} setup for ${escapeHtml(intent.label.toLowerCase())}.`;
}

function makeThesis(compareMode, rankedCompanies, citations, intent) {
  if (!rankedCompanies.length) {
    return "The enabled corpus does not have enough source material to support a ranked answer.";
  }
  const leader = rankedCompanies[0];
  const runnerUp = rankedCompanies[1];
  const topCitation = citations[0];
  const leaderMetrics = `${leader.growth}% revenue growth, ${leader.opMargin}% operating margin, and ${leader.fcfMargin}% FCF margin`;
  if (intent.id === "risk") {
    return `The retrieved source stack points to underwritable risks, not a single fatal flaw. ${escapeHtml(leader.ticker)} still shows ${escapeHtml(leaderMetrics)}, but the risk work should focus on the disclosures and call language tied to customer cadence, cash conversion, financing, and execution timing. The highest-weighted passage is from ${escapeHtml(topCitation.company)} ${escapeHtml(topCitation.type)}. ${citationLink(0)}`;
  }
  if (compareMode && runnerUp) {
    return `${escapeHtml(leader.ticker)} leads because the retrieved sources combine stronger fundamentals (${escapeHtml(leaderMetrics)}) with more direct support on ${escapeHtml(intent.label.toLowerCase())}. ${escapeHtml(runnerUp.ticker)} has a credible counter-case, but its source stack carries more visible pressure points. The highest-weighted passage is from ${escapeHtml(topCitation.company)} ${escapeHtml(topCitation.type)}, which anchors the answer rather than relying on a broad sector narrative. ${citationLink(0)}`;
  }
  return `The source stack is ${toneLabel(leader.tone).toLowerCase()} rather than cleanly bullish. ${escapeHtml(leader.ticker)} shows ${escapeHtml(leaderMetrics)}, but the same documents also surface risks that should be tested in the valuation model. The best anchor is ${escapeHtml(topCitation.type)} coverage of ${escapeHtml(topCitation.section.toLowerCase())}. ${citationLink(0)}`;
}

function makeRiskFactorSection(citations, rankedCompanies) {
  const factors = buildRiskFactors(citations, rankedCompanies[0]);
  const items = factors.map((factor) => `
    <li>
      <div class="risk-factor-top">
        <span class="risk-severity ${escapeAttr(factor.severityClass)}">${escapeHtml(factor.severity)}</span>
        <strong>${escapeHtml(factor.title)}</strong>
      </div>
      <p>${escapeHtml(factor.body)} ${citationLink(factor.citationIndex)}</p>
    </li>
  `).join("");

  return `
    <section class="answer-section risk-factor-section">
      <h3>3 cited risk factors</h3>
      <ol class="risk-factor-list">${items}</ol>
    </section>
  `;
}

function makeRiskFactorPlainText(citations, rankedCompanies) {
  return buildRiskFactors(citations, rankedCompanies[0]).map((factor, index) => {
    const citation = citations[factor.citationIndex];
    const citationText = citation ? ` [${citation.citationId} ${citation.type} - ${citation.section}]` : "";
    return `${index + 1}. ${factor.title} (${factor.severity}): ${factor.body}${citationText}`;
  }).join("\n");
}

function buildRiskFactors(citations, company) {
  const fallbackCompany = company || getCompanies()[0];
  const blueprint = RISK_FACTOR_LIBRARY[fallbackCompany.ticker] || makeGenericRiskBlueprint(fallbackCompany);
  const factors = blueprint.slice(0, 3).map((factor, index) => {
    const citationIndex = findRiskCitationIndex(citations, factor.terms, index);
    return {
      ...factor,
      citationIndex,
      severityClass: factor.severity.toLowerCase()
    };
  });

  while (factors.length < 3) {
    const index = factors.length;
    factors.push({
      title: "Source coverage gap",
      severity: "Medium",
      severityClass: "medium",
      terms: [],
      body: "Import more filings or transcripts to pressure-test this risk with a broader evidence base.",
      citationIndex: Math.min(index, Math.max(citations.length - 1, 0))
    });
  }

  return factors;
}

function makeGenericRiskBlueprint(company) {
  return [
    {
      title: "Demand and revenue durability",
      severity: "High",
      terms: ["demand", "revenue", "customer", "growth"],
      body: `${company.ticker} should be tested for demand volatility, customer concentration, and the durability of its revenue growth.`
    },
    {
      title: "Margin and cash conversion",
      severity: "Medium",
      terms: ["margin", "cash", "working capital", "inventory", "capex"],
      body: `${company.ticker} risk work should connect margin pressure to working capital, capex, and free cash flow conversion.`
    },
    {
      title: "Balance sheet and execution timing",
      severity: "Medium",
      terms: ["debt", "financing", "delay", "execution", "rates"],
      body: `${company.ticker} needs a timing and balance-sheet check so execution delays do not hide in the base valuation case.`
    }
  ];
}

function findRiskCitationIndex(citations, terms, fallbackIndex) {
  if (!citations.length) return 0;
  const lowerTerms = terms.map((term) => term.toLowerCase());
  const scored = citations.map((citation, index) => {
    const haystack = `${citation.type} ${citation.section} ${citation.text}`.toLowerCase();
    const score = lowerTerms.reduce((sum, term) => sum + (haystack.includes(term) ? 1 : 0), 0)
      + (/risk|liquidity|q&a|management discussion/i.test(`${citation.section} ${citation.type}`) ? 0.5 : 0);
    return { index, score };
  }).sort((a, b) => b.score - a.score || a.index - b.index);
  if (scored[0].score > 0) return scored[0].index;
  return Math.min(fallbackIndex, citations.length - 1);
}

function makeEvidenceSentence(citation, intent) {
  const metrics = extractMetrics(citation.text);
  const metricPhrase = metrics.length ? ` Key extracted figures: ${escapeHtml(metrics.slice(0, 4).join(", "))}.` : "";
  return `${escapeHtml(citation.company)} ${escapeHtml(citation.type)} links ${escapeHtml(intent.label.toLowerCase())} to ${escapeHtml(snippet(citation.text, 170))}.${metricPhrase}`;
}

function makeWatchItems(citations, rankedCompanies, intent) {
  const negative = citations
    .map((citation) => ({ citation, score: negativeTermCount(citation.text) }))
    .sort((a, b) => b.score - a.score)
    .filter((item) => item.score > 0)
    .slice(0, 2);
  const leader = rankedCompanies[0];
  const items = negative.length
    ? negative.map((item, index) => `${escapeHtml(snippet(item.citation.text, 155))} ${citationLink(citations.indexOf(item.citation))}`)
    : [`Watch whether the next filing confirms the ${escapeHtml(intent.label.toLowerCase())} indicators that drove this retrieval result.`];
  if (leader) {
    items.push(`For ${escapeHtml(leader.ticker)}, the model answer would weaken if revenue growth decelerates without a matching improvement in FCF margin.`);
  }
  return items.join(" ");
}

function makeValuationRead(company, intent) {
  if (!company) return "Run the valuation lens against the company with the strongest retrieved evidence.";
  const onePointFcf = terminalFcfSensitivity(company, 1);
  const rateText = intent.id === "rates"
    ? "Because the question centers on rates, discount rate and net debt deserve the first sensitivity pass."
    : "Flex FCF margin before terminal multiple so the valuation stays tied to operating evidence.";
  return `${escapeHtml(company.ticker)} should be modeled from the evidence, not from a static multiple. At current base revenue of ${formatMoney(company.revenue)} and ${company.fcfMargin}% FCF margin, a one-point terminal FCF margin swing is worth roughly ${formatMoney(onePointFcf)} of annual terminal FCF before discounting. ${rateText}`;
}

function makeDebate(citations, rankedCompanies) {
  const callEvidence = citations.find((citation) => /call/i.test(citation.type));
  const filingEvidence = citations.find((citation) => /filing/i.test(citation.type));
  const leader = rankedCompanies[0];
  const debateParts = [];
  if (filingEvidence) {
    debateParts.push(`The filing is the discipline check: ${escapeHtml(snippet(filingEvidence.text, 170))} ${citationLink(citations.indexOf(filingEvidence))}`);
  }
  if (callEvidence) {
    debateParts.push(`The call tests tone: ${escapeHtml(snippet(callEvidence.text, 170))} ${citationLink(citations.indexOf(callEvidence))}`);
  }
  if (leader) {
    debateParts.push(`The committee question is whether ${escapeHtml(leader.ticker)}'s evidence quality deserves a higher multiple or simply lowers downside risk.`);
  }
  return debateParts.join(" ");
}

function makeCompanyTable(rankedCompanies) {
  if (!rankedCompanies.length) return `<p>No company ranking was available.</p>`;
  const rows = rankedCompanies.map((company, index) => {
    const tone = toneClass(company.tone);
    return `
      <tr>
        <td>${index + 1}</td>
        <td><strong>${escapeHtml(company.ticker)}</strong><br>${escapeHtml(company.name)}</td>
        <td>${company.growth}%</td>
        <td>${company.opMargin}%</td>
        <td>${company.fcfMargin}%</td>
        <td><span class="tone-chip ${tone}">${escapeHtml(toneLabel(company.tone))}</span></td>
      </tr>
    `;
  }).join("");
  return `
    <table class="rank-table">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Company</th>
          <th>Growth</th>
          <th>Op margin</th>
          <th>FCF</th>
          <th>Tone</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function citationLink(index) {
  const citation = state.currentCitations[index];
  if (!citation) return "";
  return `<a class="citation-link" href="#evidence-${escapeAttr(citation.citationId)}">${escapeHtml(citation.citationId)}</a>`;
}

function isCompareQuestion(question, citations) {
  const lower = question.toLowerCase();
  const tickers = new Set(citations.map((citation) => citation.ticker));
  return tickers.size > 1 || /compare|versus| vs |which|better|best|rank/i.test(lower);
}

function getEnabledDocs() {
  return state.documents
    .filter((doc) => state.enabledDocIds.has(doc.id) && state.activeTickers.has(doc.ticker))
    .sort((a, b) => getSourceRank(b) - getSourceRank(a));
}

function getLibraryDocs() {
  return state.documents.slice().sort((a, b) => {
    const sourceDelta = getSourceRank(b) - getSourceRank(a);
    if (sourceDelta) return sourceDelta;
    return String(a.ticker).localeCompare(String(b.ticker)) || String(a.period).localeCompare(String(b.period));
  });
}

function isUploadedDoc(doc) {
  return Boolean(doc && (doc.sourceKind === "uploaded" || String(doc.id || "").startsWith("upload-")));
}

function isUploadedCitation(citation) {
  return Boolean(citation && citation.sourceKind === "uploaded");
}

function isSecBridgeDoc(doc) {
  return Boolean(doc && /^sec-/.test(getSourceKind(doc)));
}

function isPriorityDoc(doc) {
  return getSourceKind(doc) !== "sample";
}

function isPriorityCitation(citation) {
  return getSourceKind(citation) !== "sample";
}

function getSourceKind(source) {
  const kind = String((source && source.sourceKind) || "");
  if (kind === "sec-live" || kind === "sec-mock" || kind === "uploaded") return kind;
  if (source && String(source.id || "").startsWith("upload-")) return "uploaded";
  return "sample";
}

function getSourceRank(source) {
  const kind = getSourceKind(source);
  if (kind === "sec-live") return 4;
  if (kind === "uploaded") return 3;
  if (kind === "sec-mock") return 2;
  return 1;
}

function getDocSourceLabel(doc) {
  const kind = getSourceKind(doc);
  if (kind === "sec-live") return "SEC live";
  if (kind === "sec-mock") return "SEC mock";
  if (kind === "uploaded") return "Your data";
  return "Sample";
}

function getCitationSourceLabel(citation) {
  const kind = getSourceKind(citation);
  if (kind === "sec-live") return "SEC live";
  if (kind === "sec-mock") return "SEC mock";
  if (kind === "uploaded") return "User";
  return "Sample";
}

function getSourceClass(source) {
  const kind = getSourceKind(source);
  if (kind === "uploaded") return "is-user";
  if (kind === "sample") return "is-sample";
  return `is-${kind}`;
}

function summarizeDataMode(docs) {
  const counts = docs.reduce((acc, doc) => {
    acc[getSourceKind(doc)] = (acc[getSourceKind(doc)] || 0) + 1;
    return acc;
  }, {});
  if (counts["sec-live"]) return { label: "SEC live", sub: `${counts["sec-live"]} live SEC source${counts["sec-live"] === 1 ? "" : "s"} active` };
  if (counts.uploaded) return { label: "Your data", sub: `${counts.uploaded} imported source${counts.uploaded === 1 ? "" : "s"} active` };
  if (counts["sec-mock"]) return { label: "SEC mock", sub: `${counts["sec-mock"]} bridge fallback source${counts["sec-mock"] === 1 ? "" : "s"} active` };
  return { label: "Sample", sub: `${docs.length} sample docs active` };
}

function makeAuditDataLabel(citations) {
  const kinds = new Set(citations.map(getSourceKind));
  if (kinds.has("sec-live")) return kinds.size > 1 ? "SEC live hybrid" : "SEC live";
  if (kinds.has("uploaded")) return kinds.size > 1 ? "Hybrid" : "Imported";
  if (kinds.has("sec-mock")) return kinds.size > 1 ? "SEC mock hybrid" : "SEC mock";
  return "Sample";
}

function getCompanies() {
  const byTicker = new Map(SAMPLE_COMPANIES.map((company) => [company.ticker, { ...company }]));
  for (const doc of state.uploadedDocs) {
    if (!byTicker.has(doc.ticker)) {
      byTicker.set(doc.ticker, {
        ticker: doc.ticker,
        name: doc.company || `${doc.ticker} imported corpus`,
        sector: "Imported sources",
        revenue: estimateRevenue(doc),
        growth: 8,
        grossMargin: 38,
        opMargin: 14,
        fcfMargin: 8,
        netDebt: 0,
        shares: 0.1,
        multiple: 12,
        risk: 55,
        sentiment: 52,
        thesis: "User-imported source set awaiting normalized fundamentals."
      });
    }
  }
  if (state.marketQuote && state.marketQuote.ticker) {
    const quote = state.marketQuote;
    const marketCapBillions = quote.marketCap ? quote.marketCap / 1e9 : 0;
    const shares = quote.marketCap && quote.price ? quote.marketCap / quote.price / 1e9 : 1;
    const marketProfile = {
      ticker: quote.ticker,
      name: quote.name || `${quote.ticker} market quote`,
      sector: quote.isDemo ? "Demo market bridge" : "Live market bridge",
      revenue: marketCapBillions ? Math.max(1, marketCapBillions / Math.max(Number(quote.pe) || 20, 8)) : 12,
      growth: quote.changePercent >= 0 ? 12 : 6,
      grossMargin: 52,
      opMargin: quote.changePercent >= 0 ? 24 : 16,
      fcfMargin: quote.changePercent >= 0 ? 14 : 9,
      netDebt: 0,
      shares: Math.max(shares, 0.01),
      multiple: Math.max(8, Math.min(35, Math.round(Number(quote.pe) || 18))),
      risk: Math.max(25, Math.min(85, Math.round(52 - quote.changePercent * 2))),
      sentiment: Math.max(25, Math.min(85, Math.round(52 + quote.changePercent * 3))),
      thesis: `${quote.providerLabel} quote bridge profile. Fundamentals remain scenario inputs until normalized filings are imported.`,
      marketQuote: quote
    };
    byTicker.set(quote.ticker, {
      ...(byTicker.get(quote.ticker) || {}),
      ...marketProfile
    });
  }
  return Array.from(byTicker.values());
}

function getCompany(ticker) {
  return getCompanies().find((company) => company.ticker === ticker) || getCompanies()[0];
}

function updateValuationFromCompany() {
  const company = getCompany(state.selectedTicker);
  if (!company) return;
  els.growthSlider.value = String(Math.round(company.growth));
  els.marginSlider.value = String(Math.round(company.fcfMargin));
  els.multipleSlider.value = String(Math.round(company.multiple));
}

function updateValuation() {
  const company = getCompany(state.selectedTicker);
  if (!company) return;
  const revenueGrowth = Number(els.growthSlider.value) / 100;
  const fcfMargin = Number(els.marginSlider.value) / 100;
  const terminalMultiple = Number(els.multipleSlider.value);
  const discountRate = Number(els.discountSlider.value) / 100;
  const years = 5;
  let presentValueFcf = 0;
  let revenue = company.revenue;
  for (let year = 1; year <= years; year += 1) {
    revenue *= 1 + revenueGrowth;
    const fcf = revenue * fcfMargin;
    presentValueFcf += fcf / Math.pow(1 + discountRate, year);
  }
  const terminalRevenue = revenue;
  const terminalFcf = terminalRevenue * fcfMargin;
  const terminalValue = terminalFcf * terminalMultiple;
  const discountedTerminal = terminalValue / Math.pow(1 + discountRate, years);
  const enterpriseValue = presentValueFcf + discountedTerminal;
  const equityValue = enterpriseValue - company.netDebt;
  const perShare = equityValue / Math.max(company.shares, 0.01);

  els.growthValue.textContent = `${Math.round(revenueGrowth * 100)}%`;
  els.marginValue.textContent = `${Math.round(fcfMargin * 100)}%`;
  els.multipleValue.textContent = `${terminalMultiple}x`;
  els.discountValue.textContent = `${Math.round(discountRate * 100)}%`;
  els.valuePerShare.textContent = `$${Math.max(perShare, 0).toFixed(0)}`;
  els.equityValue.textContent = `${formatMoney(Math.max(equityValue, 0))}`;
  const quoteNote = company.marketQuote
    ? ` Market bridge: ${company.marketQuote.providerLabel} at ${formatQuotePrice(company.marketQuote.price)}.`
    : "";
  els.valuationFootnote.textContent = `${company.ticker} base model: ${formatMoney(company.revenue)} revenue, ${company.fcfMargin}% FCF margin, ${company.netDebt < 0 ? "net cash" : "net debt"} of ${formatMoney(Math.abs(company.netDebt))}.${quoteNote} This is a scenario lens, not a price target.`;
}

function drawSignalMap(citations = state.currentCitations) {
  const canvas = els.signalCanvas;
  const context = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  context.clearRect(0, 0, width, height);
  context.fillStyle = "#0f1716";
  context.fillRect(0, 0, width, height);

  context.strokeStyle = "rgba(255,255,255,0.07)";
  context.lineWidth = 1;
  for (let x = 0; x < width; x += 40) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, height);
    context.stroke();
  }
  for (let y = 0; y < height; y += 40) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(width, y);
    context.stroke();
  }

  const companies = getCompanies().filter((company) => state.activeTickers.has(company.ticker)).slice(0, 6);
  const activeCitationTickers = new Set(citations.map((citation) => citation.ticker));
  const rowHeight = Math.floor((height - 56) / Math.max(companies.length, 1));
  context.font = "700 15px Inter, system-ui, sans-serif";
  context.textBaseline = "middle";

  companies.forEach((company, index) => {
    const y = 36 + index * rowHeight;
    context.fillStyle = activeCitationTickers.has(company.ticker) || company.ticker === state.selectedTicker ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.045)";
    context.fillRect(14, y - 16, width - 28, rowHeight - 8);
    context.fillStyle = "#f7fbfa";
    context.fillText(company.ticker, 28, y + 2);
    drawBar(context, 116, y - 9, 150, 12, company.growth, 35, "#3fa05a");
    drawBar(context, 284, y - 9, 150, 12, company.opMargin, 40, "#5c8ed8");
    drawBar(context, 452, y - 9, 130, 12, company.risk, 100, "#dc5d55");
    context.fillStyle = "rgba(255,255,255,0.66)";
    context.font = "700 11px Inter, system-ui, sans-serif";
    context.fillText(`${company.growth}%`, 116, y + 18);
    context.fillText(`${company.opMargin}%`, 284, y + 18);
    context.fillText(`${company.risk} risk`, 452, y + 18);
    context.font = "700 15px Inter, system-ui, sans-serif";
  });

  context.fillStyle = "rgba(255,255,255,0.68)";
  context.font = "700 12px Inter, system-ui, sans-serif";
  context.fillText("Growth", 116, 18);
  context.fillText("Margin", 284, 18);
  context.fillText("Risk", 452, 18);
  els.signalStamp.textContent = citations.length ? `${citations.length} hits` : "Baseline";
}

function drawBar(context, x, y, width, height, value, max, color) {
  context.fillStyle = "rgba(255,255,255,0.13)";
  context.fillRect(x, y, width, height);
  context.fillStyle = color;
  context.fillRect(x, y, Math.max(4, Math.min(width, (value / max) * width)), height);
}

function renderNotebook() {
  if (!state.notes.length) {
    els.notebookList.innerHTML = `<div class="empty-list">Saved answers stay in this browser for quick review.</div>`;
    return;
  }
  els.notebookList.innerHTML = state.notes.map((note) => `
    <article class="note-card">
      <span><b>${escapeHtml(note.intent)}</b><b>${escapeHtml(note.date)}</b></span>
      <strong>${escapeHtml(note.title)}</strong>
      <p>${escapeHtml(snippet(note.body, 220))}</p>
    </article>
  `).join("");
}

function renderLaunchOps() {
  if (!els.opsMetricGrid) return;
  const snapshot = buildOpsSnapshot();
  els.opsMetricGrid.innerHTML = [
    { label: "Pilot leads", value: snapshot.leadCount, sub: snapshot.leadCount ? `${snapshot.highIntentLeads} high-intent` : "Start with 10 serious testers" },
    { label: "Questions run", value: snapshot.questionRuns, sub: snapshot.topTicker ? `${snapshot.topTicker} leads ticker demand` : "Ask the desk to build signal" },
    { label: "Source library", value: snapshot.externalDocs, sub: `${state.uploadedDocs.length} imported | ${getEnabledDocs().length} active` },
    { label: "Saved briefs", value: state.notes.length, sub: state.lastBrief ? "Latest memo ready" : "Run and save first memo" },
    { label: "Security", value: `${snapshot.securityScore}/100`, sub: snapshot.securityFindings ? `${snapshot.securityFindings} finding${snapshot.securityFindings === 1 ? "" : "s"}` : "Guardrails clean" }
  ].map((metric) => `
    <div class="ops-metric">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(String(metric.value))}</strong>
      <em>${escapeHtml(metric.sub)}</em>
    </div>
  `).join("");

  els.leadQualityScore.textContent = `${snapshot.leadScore}/100`;
  els.leadQualityBoard.innerHTML = renderLeadQualityBoard(snapshot);
  els.workflowScore.textContent = `${snapshot.questionRuns} runs`;
  els.workflowHeatmap.innerHTML = renderWorkflowHeatmap(snapshot);
  els.launchReadinessScore.textContent = `${snapshot.readiness.score}%`;
  els.launchChecklist.innerHTML = renderLaunchChecklist(snapshot.readiness.items);
  els.opsPriority.textContent = snapshot.priority.label;
  els.opsSignalGrid.innerHTML = renderOpsSignals(snapshot);
  renderPortfolioLens();
}

function buildOpsSnapshot() {
  const leadScores = state.waitlistLeads.map(scoreLead);
  const leadScore = leadScores.length
    ? Math.round(leadScores.reduce((sum, lead) => sum + lead.score, 0) / leadScores.length)
    : 0;
  const workflowRows = buildWorkflowRows();
  const tickerCounts = collectTickerCounts();
  const topTicker = tickerCounts[0] ? tickerCounts[0].ticker : "";
  const readiness = buildLaunchReadiness();
  const security = summarizeSecurityPosture();
  const priority = buildOpsPriority(readiness.items, leadScores);
  return {
    leadCount: state.waitlistLeads.length,
    leadScores,
    leadScore,
    highIntentLeads: leadScores.filter((lead) => lead.score >= 75).length,
    workflowRows,
    tickerCounts,
    topTicker,
    questionRuns: state.workflowEvents.filter((event) => event.kind === "analysis").length,
    externalDocs: state.uploadedDocs.length,
    readiness,
    securityScore: security.score,
    securityFindings: security.findings.length,
    priority
  };
}

function renderLeadQualityBoard(snapshot) {
  if (!snapshot.leadScores.length) {
    return `
      <div class="ops-empty">
        <strong>No pilot leads captured yet</strong>
        <span>Submit the waitlist form or publish the page, then this board will rank early testers by plan, profile, tickers, and question quality.</span>
      </div>
    `;
  }
  return snapshot.leadScores.slice(0, 4).map((lead) => `
    <div class="lead-score-row">
      <div>
        <strong>${escapeHtml(lead.email)}</strong>
        <span>${escapeHtml(lead.profile)} | ${escapeHtml(lead.plan)}</span>
      </div>
      <b>${escapeHtml(String(lead.score))}</b>
    </div>
  `).join("");
}

function renderWorkflowHeatmap(snapshot) {
  const maxCount = Math.max(1, ...snapshot.workflowRows.map((row) => row.count));
  return snapshot.workflowRows.map((row) => `
    <div class="workflow-row">
      <span>${escapeHtml(row.label)}</span>
      <i><b style="width:${escapeAttr(String(Math.max(8, Math.round((row.count / maxCount) * 100))))}%"></b></i>
      <strong>${escapeHtml(String(row.count))}</strong>
    </div>
  `).join("");
}

function renderLaunchChecklist(items) {
  return items.map((item) => `
    <div class="launch-check ${escapeAttr(item.status)}">
      <span>${escapeHtml(item.statusLabel)}</span>
      <div>
        <strong>${escapeHtml(item.label)}</strong>
        <em>${escapeHtml(item.note)}</em>
      </div>
    </div>
  `).join("");
}

function renderOpsSignals(snapshot) {
  const topTicker = snapshot.topTicker || "NVDA";
  const topFeature = modeValue(state.waitlistLeads.map((lead) => lead.need).filter(Boolean)) || "Cited SEC filing answers";
  const rows = [
    {
      label: "Ticker demand",
      value: topTicker,
      note: snapshot.tickerCounts.length ? `${snapshot.tickerCounts[0].count} local signal${snapshot.tickerCounts[0].count === 1 ? "" : "s"}` : "Use waitlist and questions to validate ticker focus."
    },
    {
      label: "Feature demand",
      value: topFeature,
      note: state.waitlistLeads.length ? "Lead forms are shaping the product queue." : "Default pilot wedge is cited filing answers."
    },
    {
      label: "Founder move",
      value: snapshot.priority.label,
      note: snapshot.priority.note
    },
    {
      label: "Next build",
      value: "Backend vault",
      note: "Move live APIs, auth, and refresh jobs behind a production service before paid launch."
    }
  ];
  return rows.map((row) => `
    <div class="ops-signal">
      <span>${escapeHtml(row.label)}</span>
      <strong>${escapeHtml(row.value)}</strong>
      <em>${escapeHtml(row.note)}</em>
    </div>
  `).join("");
}

function scoreLead(lead) {
  let score = 42;
  if (/analyst/i.test(lead.plan)) score += 18;
  else if (/pro/i.test(lead.plan)) score += 14;
  else if (/starter/i.test(lead.plan)) score += 8;
  if (/finance|professional|founder|operator/i.test(lead.profile)) score += 12;
  else if (/active/i.test(lead.profile)) score += 9;
  if (/SEC|earnings|comparison|valuation|watchlist/i.test(lead.need)) score += 10;
  const tickerCount = extractTickers(`${lead.tickers} ${lead.question}`).length;
  score += Math.min(12, tickerCount * 4);
  if (String(lead.question || "").length > 35) score += 12;
  if (String(lead.email || "").includes("@")) score += 4;
  return {
    ...lead,
    score: Math.max(35, Math.min(100, score))
  };
}

function buildWorkflowRows() {
  const counts = state.workflowEvents.reduce((acc, event) => {
    acc[event.kind] = (acc[event.kind] || 0) + 1;
    return acc;
  }, {});
  return [
    { key: "analysis", label: "Research questions", count: counts.analysis || 0 },
    { key: "import", label: "Source imports", count: counts.import || state.uploadedDocs.length },
    { key: "lead", label: "Waitlist leads", count: counts.lead || state.waitlistLeads.length },
    { key: "save", label: "Saved briefs", count: counts.save || state.notes.length }
  ];
}

function buildLaunchReadiness() {
  const security = summarizeSecurityPosture();
  const items = [
    { label: "Research desk", status: "done", statusLabel: "Done", note: "Cited answers, evidence stack, valuation lens, copilot, and exports are functional." },
    { label: "Source workflow", status: state.uploadedDocs.length ? "done" : "next", statusLabel: state.uploadedDocs.length ? "Done" : "Next", note: state.uploadedDocs.length ? "Imports and SEC bridge sources are active." : "Load more real filings before pilot calls." },
    { label: "Security posture", status: security.score >= 90 ? "done" : "next", statusLabel: security.score >= 90 ? "Done" : "Review", note: `${security.score}/100 with ${security.findings.length} finding${security.findings.length === 1 ? "" : "s"}.` },
    { label: "Market data", status: state.marketQuote ? "done" : "next", statusLabel: state.marketQuote ? "Done" : "Next", note: state.marketQuote ? `${state.marketQuote.providerLabel} quote loaded.` : "Demo bridge ready; production provider still needs backend handling." },
    { label: "Pilot demand", status: state.waitlistLeads.length ? "done" : "next", statusLabel: state.waitlistLeads.length ? "Done" : "Next", note: state.waitlistLeads.length ? `${state.waitlistLeads.length} lead${state.waitlistLeads.length === 1 ? "" : "s"} captured locally.` : "Need first 10 serious testers." },
    { label: "Billing", status: "blocked", statusLabel: "Pending", note: "Stripe/paywall flow is planned but not wired." },
    { label: "Accounts", status: "blocked", statusLabel: "Pending", note: "User auth, API vault, and saved coverage need a backend." }
  ];
  const score = Math.round(items.reduce((sum, item) => sum + (item.status === "done" ? 100 : item.status === "next" ? 55 : 18), 0) / items.length);
  return { score, items };
}

function buildOpsPriority(items, leadScores) {
  const blocked = items.find((item) => item.status === "blocked");
  if (!state.waitlistLeads.length) return { label: "Recruit leads", note: "Share the waitlist and collect 10 real research questions." };
  if (leadScores.some((lead) => lead.score >= 80) && !state.uploadedDocs.length) return { label: "Load filings", note: "High-intent demand exists; validate with real filings and transcripts." };
  if (blocked) return { label: blocked.label, note: blocked.note };
  return { label: "Pilot calls", note: "Run 5 live user sessions and measure repeat usage." };
}

function collectTickerCounts() {
  const counts = new Map();
  const addTicker = (ticker) => {
    const clean = normalizeTicker(ticker);
    if (!clean || clean === "CUSTOM") return;
    counts.set(clean, (counts.get(clean) || 0) + 1);
  };
  state.waitlistLeads.forEach((lead) => extractTickers(`${lead.tickers} ${lead.question}`).forEach(addTicker));
  state.workflowEvents.forEach((event) => extractTickers(`${event.ticker || ""} ${event.question || ""}`).forEach(addTicker));
  state.uploadedDocs.forEach((doc) => addTicker(doc.ticker));
  state.currentCitations.forEach((citation) => addTicker(citation.ticker));
  if (!counts.size) state.activeTickers.forEach(addTicker);
  return Array.from(counts.entries())
    .map(([ticker, count]) => ({ ticker, count }))
    .sort((a, b) => b.count - a.count || a.ticker.localeCompare(b.ticker));
}

function extractTickers(text) {
  const value = String(text || "").toUpperCase();
  const dollarTickers = Array.from(value.matchAll(/\$([A-Z][A-Z0-9.]{1,7})\b/g)).map((match) => match[1]);
  const plainTickers = Array.from(value.matchAll(/\b[A-Z]{2,5}\b/g))
    .map((match) => match[0])
    .filter((ticker) => !["WHAT", "THE", "AND", "FOR", "WITH", "SEC", "API", "PDF"].includes(ticker));
  return Array.from(new Set([...dollarTickers, ...plainTickers])).slice(0, 8);
}

function inferTickerFromQuestion(question) {
  return extractTickers(question)[0] || "";
}

function modeValue(values) {
  const counts = values.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || "";
}

function recordWorkflowEvent(kind, details = {}) {
  const event = {
    id: `event-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    kind,
    date: new Date().toISOString(),
    ...details
  };
  state.workflowEvents = [event, ...state.workflowEvents].slice(0, 120);
  saveJson(STORAGE_KEYS.workflowEvents, state.workflowEvents);
}

function renderPortfolioLens() {
  if (!els.portfolioMetricGrid) return;
  if (els.portfolioInput && !els.portfolioInput.dataset.ready) {
    syncPortfolioInput();
    els.portfolioInput.dataset.ready = "true";
  }
  const snapshot = buildPortfolioSnapshot();
  els.portfolioPositionCount.textContent = `${snapshot.positions.length} name${snapshot.positions.length === 1 ? "" : "s"}`;
  els.portfolioRiskScore.textContent = `${snapshot.weightedRisk}/100`;
  els.portfolioScenarioLabel.textContent = snapshot.scenarioLabel;
  els.portfolioQueueCount.textContent = `${snapshot.questionQueue.length} ask${snapshot.questionQueue.length === 1 ? "" : "s"}`;
  els.portfolioMetricGrid.innerHTML = [
    { label: "Gross exposure", value: `${Math.round(snapshot.totalWeight)}%`, sub: snapshot.cashWeight ? `${Math.round(snapshot.cashWeight)}% cash buffer` : "Fully invested lens" },
    { label: "Top position", value: snapshot.topPosition ? snapshot.topPosition.ticker : "n/a", sub: snapshot.topPosition ? `${snapshot.topPosition.weight.toFixed(1)}% portfolio weight` : "Add holdings" },
    { label: "Weighted risk", value: `${snapshot.weightedRisk}/100`, sub: snapshot.weightedRisk >= 65 ? "Needs downside work" : "Within pilot range" },
    { label: "Source coverage", value: `${snapshot.coverageScore}%`, sub: `${snapshot.coveredNames}/${snapshot.positions.length} names with source support` }
  ].map((metric) => `
    <div class="portfolio-metric">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(metric.value)}</strong>
      <em>${escapeHtml(metric.sub)}</em>
    </div>
  `).join("");
  els.portfolioPriorityList.innerHTML = renderPortfolioPriorityList(snapshot);
  els.portfolioScenarioBoard.innerHTML = renderPortfolioScenarioBoard(snapshot);
  els.portfolioQuestionQueue.innerHTML = renderPortfolioQuestionQueue(snapshot);
  renderDecisionRoom();
}

function buildPortfolioSnapshot() {
  const positions = normalizePortfolioWeights(state.portfolioPositions.length ? state.portfolioPositions : DEFAULT_PORTFOLIO_POSITIONS);
  const rows = positions.map(enrichPortfolioPosition);
  const investedRows = rows.filter((row) => !row.isCash);
  const totalWeight = rows.reduce((sum, row) => sum + row.weight, 0);
  const cashWeight = rows.filter((row) => row.isCash).reduce((sum, row) => sum + row.weight, 0);
  const topPosition = investedRows.slice().sort((a, b) => b.weight - a.weight)[0] || rows[0] || null;
  const weightedRisk = Math.round(rows.reduce((sum, row) => sum + row.risk * (row.weight / Math.max(totalWeight, 1)), 0));
  const weightedGrowth = Math.round(investedRows.reduce((sum, row) => sum + row.growth * row.weight, 0) / Math.max(investedRows.reduce((sum, row) => sum + row.weight, 0), 1));
  const weightedMargin = Math.round(investedRows.reduce((sum, row) => sum + row.margin * row.weight, 0) / Math.max(investedRows.reduce((sum, row) => sum + row.weight, 0), 1));
  const coveredNames = rows.filter((row) => row.isCash || row.sourceCount > 0).length;
  const coverageScore = Math.round((coveredNames / Math.max(rows.length, 1)) * 100);
  const priorityRows = investedRows.slice().sort((a, b) => b.priority - a.priority || b.weight - a.weight);
  const questionQueue = priorityRows.slice(0, 4).map((row) => ({
    ticker: row.ticker,
    question: makePortfolioQuestion(row),
    reason: row.reason
  }));
  const scenarioLabel = weightedRisk >= 68 ? "Risk-off" : weightedGrowth >= 15 && weightedMargin >= 12 ? "Growth" : "Base";
  return {
    positions: rows,
    totalWeight,
    cashWeight,
    topPosition,
    weightedRisk,
    weightedGrowth,
    weightedMargin,
    coveredNames,
    coverageScore,
    priorityRows,
    questionQueue,
    scenarioLabel
  };
}

function renderPortfolioPriorityList(snapshot) {
  if (!snapshot.priorityRows.length) {
    return `<div class="ops-empty"><strong>No holdings to rank</strong><span>Add tickers and weights to build a research priority list.</span></div>`;
  }
  return snapshot.priorityRows.slice(0, 5).map((row) => `
    <div class="portfolio-priority-row ${escapeAttr(row.riskClass)}">
      <div>
        <strong>${escapeHtml(row.ticker)} - ${escapeHtml(row.name)}</strong>
        <span>${escapeHtml(row.reason)}</span>
      </div>
      <b>${escapeHtml(String(row.priority))}</b>
    </div>
  `).join("");
}

function renderPortfolioScenarioBoard(snapshot) {
  const sourceGap = Math.max(0, snapshot.positions.length - snapshot.coveredNames);
  const rows = [
    { label: "Base read", value: `${snapshot.weightedGrowth}% growth / ${snapshot.weightedMargin}% FCF`, note: "Weighted from current portfolio lens inputs." },
    { label: "Downside check", value: `${snapshot.weightedRisk}/100 risk`, note: snapshot.weightedRisk >= 65 ? "Prioritize risk-factor and liquidity questions." : "Risk is acceptable for pilot testing." },
    { label: "Source gap", value: `${sourceGap} names`, note: sourceGap ? "Import filings or transcripts for uncovered holdings." : "All holdings have source support." },
    { label: "Next session", value: snapshot.questionQueue[0]?.ticker || "NVDA", note: snapshot.questionQueue[0]?.question || "Run a fresh research question from the queue." }
  ];
  return rows.map((row) => `
    <div class="portfolio-scenario-row">
      <span>${escapeHtml(row.label)}</span>
      <strong>${escapeHtml(row.value)}</strong>
      <em>${escapeHtml(row.note)}</em>
    </div>
  `).join("");
}

function renderPortfolioQuestionQueue(snapshot) {
  if (!snapshot.questionQueue.length) {
    return `<div class="ops-empty"><strong>No questions queued</strong><span>Add holdings, then CiteAlpha will suggest what to ask next.</span></div>`;
  }
  return snapshot.questionQueue.map((item) => `
    <div class="portfolio-question-row">
      <div>
        <strong>${escapeHtml(item.ticker)}</strong>
        <span>${escapeHtml(item.question)}</span>
        <em>${escapeHtml(item.reason)}</em>
      </div>
      <button class="secondary-button small" type="button" data-portfolio-question="${escapeAttr(item.question)}">Ask</button>
    </div>
  `).join("");
}

function enrichPortfolioPosition(position) {
  const ticker = normalizeTicker(position.ticker);
  const isCash = ticker === "CASH";
  const resolved = resolvePortfolioCompany(ticker);
  const sourceCount = isCash ? 1 : countPortfolioSources(ticker, resolved.proxyTicker);
  const marketMove = getPortfolioMarketMove(ticker);
  const concentrationBoost = position.weight >= 30 ? 12 : position.weight >= 20 ? 7 : 0;
  const sourceGap = sourceCount ? 0 : 13;
  const marketRisk = marketMove < -1 ? 8 : marketMove > 2 ? 4 : 0;
  const risk = isCash ? 8 : Math.max(20, Math.min(92, Math.round(resolved.risk + concentrationBoost + sourceGap + marketRisk)));
  const priority = isCash ? 0 : Math.max(25, Math.min(99, Math.round(risk * 0.62 + position.weight * 0.8 + sourceGap)));
  const riskClass = risk >= 70 ? "is-high" : risk >= 52 ? "is-medium" : "is-low";
  return {
    ...position,
    ticker,
    isCash,
    name: isCash ? "Cash reserve" : resolved.name,
    company: resolved,
    proxyTicker: resolved.proxyTicker || ticker,
    sourceCount,
    marketMove,
    risk,
    priority,
    riskClass,
    growth: isCash ? 0 : Number(resolved.growth) || 0,
    margin: isCash ? 0 : Number(resolved.fcfMargin) || 0,
    reason: makePortfolioReason({ ticker, weight: position.weight, risk, sourceCount, marketMove, resolved, isCash })
  };
}

function makePortfolioReason(row) {
  if (row.isCash) return "Cash lowers portfolio risk and keeps dry powder for new research ideas.";
  const parts = [`${row.weight.toFixed(1)}% weight`, `${row.risk}/100 risk`];
  parts.push(row.sourceCount ? `${row.sourceCount} source${row.sourceCount === 1 ? "" : "s"}` : "source gap");
  if (Number.isFinite(row.marketMove)) parts.push(`${row.marketMove >= 0 ? "+" : ""}${row.marketMove.toFixed(1)}% quote move`);
  return parts.join(" | ");
}

function makePortfolioQuestion(row) {
  if (!row.sourceCount) return `What filings or earnings call sections should I import before underwriting $${row.ticker}?`;
  if (row.weight >= 30) return `Is my $${row.ticker} position too concentrated given filing risks, valuation, and market signal?`;
  if (row.risk >= 68) return `What are the three most material downside risks for $${row.ticker}?`;
  if (row.margin < 10) return `Is $${row.ticker} free cash flow quality improving or deteriorating?`;
  return `What changed in $${row.ticker} filings or calls that could move the thesis?`;
}

function resolvePortfolioCompany(ticker) {
  const companies = getCompanies();
  const direct = companies.find((company) => company.ticker === ticker);
  const alias = PUBLIC_TICKER_ALIASES[ticker];
  const proxyTicker = alias ? alias.ticker : ticker;
  const proxy = companies.find((company) => company.ticker === proxyTicker);
  const quote = DEMO_MARKET_QUOTES[ticker];
  if (direct && direct.ticker === ticker) return { ...direct, proxyTicker };
  if (quote) {
    return {
      ticker,
      proxyTicker,
      name: quote.name,
      sector: "Portfolio quote lens",
      growth: quote.changePercent >= 0 ? 13 : 6,
      fcfMargin: quote.changePercent >= 0 ? 14 : 9,
      risk: Math.max(34, Math.min(78, Math.round(54 - quote.changePercent * 1.8))),
      thesis: proxy ? `${ticker} market lens with ${proxyTicker} source proxy.` : `${ticker} market lens awaiting source import.`
    };
  }
  if (proxy) {
    return {
      ...proxy,
      ticker,
      proxyTicker,
      name: `${ticker} proxy - ${proxy.name}`,
      thesis: `${ticker} maps to ${proxyTicker} until direct filings are imported.`
    };
  }
  return {
    ticker,
    proxyTicker,
    name: `${ticker} watchlist name`,
    sector: "Watchlist",
    growth: 8,
    fcfMargin: 8,
    risk: 58,
    thesis: "Watchlist holding awaiting filing and market normalization."
  };
}

function countPortfolioSources(ticker, proxyTicker) {
  const keys = new Set([ticker, proxyTicker].filter(Boolean).map(normalizeTicker));
  return state.documents.filter((doc) => state.enabledDocIds.has(doc.id) && keys.has(doc.ticker)).length;
}

function getPortfolioMarketMove(ticker) {
  if (state.marketQuote && state.marketQuote.ticker === ticker) return Number(state.marketQuote.changePercent) || 0;
  if (DEMO_MARKET_QUOTES[ticker]) return Number(DEMO_MARKET_QUOTES[ticker].changePercent) || 0;
  return NaN;
}

function parsePortfolioInput(text) {
  const rows = String(text || "").split(/\r?\n|;/).map((line) => line.trim()).filter(Boolean);
  const parsed = rows.map((line) => {
    const match = line.match(/\$?([A-Z][A-Z0-9.]{0,7})\s*(?::|-|,)?\s*(\d+(?:\.\d+)?)?/i);
    if (!match) return null;
    return {
      ticker: normalizeTicker(match[1]),
      weight: Math.max(0, Math.min(100, Number(match[2]) || 0))
    };
  }).filter(Boolean);
  return normalizePortfolioWeights(parsed.length ? parsed : DEFAULT_PORTFOLIO_POSITIONS);
}

function normalizePortfolioWeights(positions) {
  const cleaned = positions
    .map((position) => ({
      ticker: normalizeTicker(position.ticker),
      weight: Math.max(0, Number(position.weight) || 0)
    }))
    .filter((position) => position.ticker)
    .slice(0, 10);
  if (!cleaned.length) return DEFAULT_PORTFOLIO_POSITIONS.map((position) => ({ ...position }));
  const total = cleaned.reduce((sum, position) => sum + position.weight, 0);
  if (total <= 0) {
    const equalWeight = 100 / cleaned.length;
    return cleaned.map((position) => ({ ...position, weight: equalWeight }));
  }
  return cleaned.map((position) => ({
    ...position,
    weight: (position.weight / total) * 100
  }));
}

function buildActiveTickerPortfolio() {
  const tickers = Array.from(state.activeTickers).filter((ticker) => ticker !== "CUSTOM").slice(0, 8);
  if (!tickers.length) return DEFAULT_PORTFOLIO_POSITIONS.map((position) => ({ ...position }));
  const equalWeight = 100 / tickers.length;
  return tickers.map((ticker) => ({ ticker, weight: equalWeight }));
}

function syncPortfolioInput() {
  if (!els.portfolioInput) return;
  els.portfolioInput.value = normalizePortfolioWeights(state.portfolioPositions).map((position) => `${position.ticker} ${position.weight.toFixed(1)}`).join("\n");
}

function loadPortfolioPositions() {
  const saved = loadJson(STORAGE_KEYS.portfolio, null);
  if (Array.isArray(saved) && saved.length) return normalizePortfolioWeights(saved);
  return DEFAULT_PORTFOLIO_POSITIONS.map((position) => ({ ...position }));
}

function savePortfolioPositions() {
  saveJson(STORAGE_KEYS.portfolio, normalizePortfolioWeights(state.portfolioPositions));
}

function exportPortfolioBrief() {
  const snapshot = buildPortfolioSnapshot();
  const date = new Date().toISOString().slice(0, 10);
  const content = [
    "# CiteAlpha Portfolio Brief",
    "",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    "## Portfolio Snapshot",
    "",
    `- Gross exposure: ${Math.round(snapshot.totalWeight)}%`,
    `- Cash buffer: ${Math.round(snapshot.cashWeight)}%`,
    `- Weighted risk: ${snapshot.weightedRisk}/100`,
    `- Source coverage: ${snapshot.coverageScore}%`,
    `- Scenario label: ${snapshot.scenarioLabel}`,
    "",
    "## Priority Holdings",
    "",
    ...snapshot.priorityRows.slice(0, 6).map((row) => `- ${row.ticker}: ${row.weight.toFixed(1)}% weight, ${row.risk}/100 risk, ${row.sourceCount} source${row.sourceCount === 1 ? "" : "s"} - ${row.reason}`),
    "",
    "## Research Queue",
    "",
    ...(snapshot.questionQueue.length ? snapshot.questionQueue.map((item) => `- ${item.question}`) : ["- No research questions queued."]),
    "",
    "## Operating Note",
    "",
    "This portfolio lens is a client-side prioritization layer. Before paid launch, connect holdings, quotes, filings, alerts, and user accounts through authenticated backend services."
  ].join("\n");
  downloadTextFile(`citealpha-portfolio-brief-${date}.md`, content, "text/markdown;charset=utf-8");
  flashButtonLabel(els.exportPortfolioBrief, "Exported");
}

function renderDecisionRoom() {
  if (!els.decisionMetricGrid) return;
  const model = buildDecisionModel(readDecisionDraft());
  state.currentDecision = model;
  els.decisionMetricGrid.innerHTML = [
    { label: "Conviction", value: `${model.conviction}/100`, sub: model.convictionLabel },
    { label: "Risk Gate", value: `${model.riskGate}/100`, sub: model.riskGate >= 70 ? "Within guardrails" : "Needs review" },
    { label: "Evidence", value: `${model.evidenceScore}/100`, sub: `${model.sourceCount} sources | ${model.citationCount} citations` },
    { label: "Size Fit", value: `${model.sizeFit}/100`, sub: `${model.weight}% target vs ${model.maxWeight}% guide` }
  ].map((metric) => `
    <div class="decision-metric">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(metric.value)}</strong>
      <em>${escapeHtml(metric.sub)}</em>
    </div>
  `).join("");
  els.decisionPreview.innerHTML = renderDecisionPreview(model);
  els.decisionGateScore.textContent = `${model.passedGates}/${model.gates.length}`;
  els.decisionGateList.innerHTML = renderDecisionGates(model.gates);
  els.decisionHistoryCount.textContent = String(state.decisions.length);
  els.decisionHistory.innerHTML = renderDecisionHistory();
  renderAlertCenter();
}

function readDecisionDraft() {
  const ticker = normalizeTicker(els.decisionTicker?.value || state.tickerFocus?.rawTicker || state.selectedTicker || "NVDA");
  return {
    ticker,
    action: String(els.decisionAction?.value || "Hold"),
    weight: Math.max(0, Math.min(100, Number(els.decisionWeight?.value) || 0)),
    horizon: String(els.decisionHorizon?.value || "12 months"),
    thesis: String(els.decisionThesis?.value || "").trim(),
    bear: String(els.decisionBear?.value || "").trim(),
    catalyst: String(els.decisionCatalyst?.value || "").trim(),
    kill: String(els.decisionKill?.value || "").trim()
  };
}

function buildDecisionModel(draft) {
  const company = resolvePortfolioCompany(draft.ticker);
  const proxyTicker = company.proxyTicker || draft.ticker;
  const sourceCount = countPortfolioSources(draft.ticker, proxyTicker);
  const citationCount = state.currentCitations.filter((citation) => citation.ticker === draft.ticker || citation.ticker === proxyTicker).length;
  const portfolio = buildPortfolioSnapshot();
  const position = portfolio.positions.find((item) => item.ticker === draft.ticker || item.proxyTicker === proxyTicker);
  const currentWeight = position ? position.weight : 0;
  const marketMove = getPortfolioMarketMove(draft.ticker);
  const security = summarizeSecurityPosture();
  const baseRisk = Number(company.risk) || 58;
  const actionRisk = /buy|add/i.test(draft.action) ? 6 : /trim|avoid/i.test(draft.action) ? -6 : 0;
  const adjustedRisk = Math.max(15, Math.min(95, Math.round(baseRisk + actionRisk + (draft.weight > 12 ? 8 : 0))));
  const maxWeight = recommendedMaxWeight(adjustedRisk, sourceCount, security.score);
  const evidenceScore = Math.max(20, Math.min(100, Math.round(sourceCount * 13 + citationCount * 9 + (state.lastBrief ? 12 : 0) + (security.score >= 90 ? 12 : 0))));
  const riskGate = Math.max(12, Math.min(100, Math.round(108 - adjustedRisk - Math.max(0, draft.weight - maxWeight) * 3)));
  const sizeFit = Math.max(10, Math.min(100, Math.round(100 - Math.max(0, draft.weight - maxWeight) * 10 - Math.max(0, draft.weight - Math.max(currentWeight, 0) - 8) * 2)));
  const textQuality = [draft.thesis, draft.bear, draft.catalyst, draft.kill].filter((value) => value.length >= 25).length * 8;
  const moveBoost = Number.isFinite(marketMove) ? Math.max(-8, Math.min(8, marketMove * 1.4)) : 0;
  const conviction = Math.max(15, Math.min(99, Math.round(evidenceScore * 0.34 + riskGate * 0.28 + sizeFit * 0.22 + textQuality + moveBoost)));
  const gates = [
    { label: "Source-backed evidence", passed: sourceCount >= 2 || citationCount >= 2, note: sourceCount >= 2 || citationCount >= 2 ? "Enough sources for a pilot memo." : "Run analysis or import sources before acting." },
    { label: "Bear case written", passed: draft.bear.length >= 30, note: draft.bear.length >= 30 ? "Downside is explicit." : "Write the failure mode in plain English." },
    { label: "Kill criteria defined", passed: draft.kill.length >= 30, note: draft.kill.length >= 30 ? "Exit rule is documented." : "Add a condition that would change your mind." },
    { label: "Sizing discipline", passed: draft.weight <= maxWeight, note: draft.weight <= maxWeight ? "Target weight fits the risk guide." : `Target is above ${maxWeight}% risk guide.` },
    { label: "Security clean", passed: security.score >= 85, note: `${security.score}/100 security posture.` },
    { label: "Catalyst identified", passed: draft.catalyst.length >= 25, note: draft.catalyst.length >= 25 ? "Review trigger is clear." : "Add the event that will refresh the thesis." }
  ];
  const passedGates = gates.filter((gate) => gate.passed).length;
  const convictionLabel = conviction >= 78 ? "Committee-ready" : conviction >= 62 ? "Watchlist-ready" : "Needs more work";
  return {
    ...draft,
    company,
    proxyTicker,
    sourceCount,
    citationCount,
    currentWeight: Math.round(currentWeight * 10) / 10,
    marketMove,
    adjustedRisk,
    maxWeight,
    evidenceScore,
    riskGate,
    sizeFit,
    conviction,
    convictionLabel,
    gates,
    passedGates,
    date: new Date().toISOString()
  };
}

function renderDecisionPreview(model) {
  const moveText = Number.isFinite(model.marketMove) ? `${model.marketMove >= 0 ? "+" : ""}${model.marketMove.toFixed(2)}% quote move` : "No quote signal";
  return `
    <div class="decision-preview-card">
      <span>${escapeHtml(model.action)} | ${escapeHtml(model.horizon)}</span>
      <h3>${escapeHtml(model.ticker)} decision: ${escapeHtml(model.convictionLabel.toLowerCase())}</h3>
      <p>${escapeHtml(model.thesis || "Add a thesis to make this decision auditable.")}</p>
      <dl>
        <div><dt>Company</dt><dd>${escapeHtml(model.company.name)}</dd></div>
        <div><dt>Target</dt><dd>${escapeHtml(String(model.weight))}%</dd></div>
        <div><dt>Current</dt><dd>${escapeHtml(String(model.currentWeight))}%</dd></div>
        <div><dt>Market</dt><dd>${escapeHtml(moveText)}</dd></div>
      </dl>
    </div>
  `;
}

function renderDecisionGates(gates) {
  return gates.map((gate) => `
    <div class="decision-gate ${gate.passed ? "is-passed" : "is-open"}">
      <span>${gate.passed ? "Pass" : "Open"}</span>
      <div>
        <strong>${escapeHtml(gate.label)}</strong>
        <em>${escapeHtml(gate.note)}</em>
      </div>
    </div>
  `).join("");
}

function renderDecisionHistory() {
  if (!state.decisions.length) {
    return `<div class="ops-empty"><strong>No saved decisions yet</strong><span>Score and save the first memo to create an audit trail.</span></div>`;
  }
  return state.decisions.slice(0, 5).map((decision) => `
    <div class="decision-history-row">
      <div>
        <strong>${escapeHtml(decision.ticker)} | ${escapeHtml(decision.action)} | ${escapeHtml(String(decision.conviction))}/100</strong>
        <span>${escapeHtml(new Date(decision.date).toLocaleString())}</span>
      </div>
      <em>${escapeHtml(decision.convictionLabel)}</em>
    </div>
  `).join("");
}

function recommendedMaxWeight(risk, sourceCount, securityScore) {
  let maxWeight = risk >= 75 ? 4 : risk >= 62 ? 7 : risk >= 48 ? 10 : 14;
  if (sourceCount < 2) maxWeight -= 2;
  if (securityScore < 85) maxWeight -= 2;
  return Math.max(2, maxWeight);
}

function saveDecisionMemo() {
  const model = buildDecisionModel(readDecisionDraft());
  state.currentDecision = model;
  state.decisions = [model, ...state.decisions].slice(0, 30);
  saveJson(STORAGE_KEYS.decisions, state.decisions);
  recordWorkflowEvent("decision", {
    ticker: model.ticker,
    action: model.action,
    conviction: model.conviction
  });
  renderDecisionRoom();
  renderLaunchOps();
  flashButtonLabel(els.saveDecision, "Saved");
}

function hydrateDecisionFromCurrentResearch() {
  const focus = state.tickerFocus || resolveTickerFocus(els.queryInput?.value || "") || { rawTicker: state.selectedTicker };
  const ticker = normalizeTicker(focus.rawTicker || focus.ticker || state.selectedTicker || "NVDA");
  const model = state.lastAnswerModel;
  const bottomLine = model?.thesis || model?.headline || state.lastBrief || "";
  els.decisionTicker.value = ticker;
  els.decisionThesis.value = snippet(stripMarkdown(bottomLine), 260) || els.decisionThesis.value;
  if (state.lastBrief && !els.decisionBear.value.trim()) {
    els.decisionBear.value = "Re-check source evidence for revenue durability, margin pressure, liquidity, and management tone before increasing exposure.";
  }
  renderDecisionRoom();
  flashButtonLabel(els.useCurrentResearch, "Loaded");
}

function exportDecisionMemo() {
  const model = state.currentDecision || buildDecisionModel(readDecisionDraft());
  const date = new Date().toISOString().slice(0, 10);
  const content = [
    "# CiteAlpha Investment Committee Memo",
    "",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    "## Decision",
    "",
    `- Ticker: ${model.ticker}`,
    `- Company: ${model.company.name}`,
    `- Action: ${model.action}`,
    `- Target weight: ${model.weight}%`,
    `- Horizon: ${model.horizon}`,
    `- Conviction: ${model.conviction}/100 (${model.convictionLabel})`,
    `- Gates passed: ${model.passedGates}/${model.gates.length}`,
    "",
    "## Thesis",
    "",
    model.thesis || "No thesis entered.",
    "",
    "## Bear Case",
    "",
    model.bear || "No bear case entered.",
    "",
    "## Catalyst",
    "",
    model.catalyst || "No catalyst entered.",
    "",
    "## Kill Criteria",
    "",
    model.kill || "No kill criteria entered.",
    "",
    "## Gates",
    "",
    ...model.gates.map((gate) => `- ${gate.passed ? "Pass" : "Open"}: ${gate.label} - ${gate.note}`),
    "",
    "## Evidence Context",
    "",
    `- Sources: ${model.sourceCount}`,
    `- Current citations: ${model.citationCount}`,
    `- Risk gate: ${model.riskGate}/100`,
    `- Position size fit: ${model.sizeFit}/100`
  ].join("\n");
  downloadTextFile(`citealpha-ic-memo-${model.ticker.toLowerCase()}-${date}.md`, content, "text/markdown;charset=utf-8");
  flashButtonLabel(els.exportDecisionMemo, "Exported");
}

function renderAlertCenter() {
  if (!els.alertMetricGrid) return;
  if (els.alertDueDate && !els.alertDueDate.value) els.alertDueDate.value = dateAfterDays(7);
  const snapshot = buildAlertSnapshot();
  els.alertCount.textContent = String(snapshot.activeAlerts.length);
  els.catalystCount.textContent = String(snapshot.calendarRows.length);
  els.alertActionCount.textContent = String(snapshot.actionRows.length);
  els.alertMetricGrid.innerHTML = [
    { label: "Open alerts", value: snapshot.activeAlerts.length, sub: snapshot.highPriority ? `${snapshot.highPriority} high priority` : "No urgent flags" },
    { label: "Due 7d", value: snapshot.dueSoon, sub: snapshot.dueSoon ? "Review this week" : "No near-term due dates" },
    { label: "Top ticker", value: snapshot.topTicker || "n/a", sub: snapshot.topTicker ? "Highest alert density" : "Build from portfolio" },
    { label: "Alert health", value: `${snapshot.health}/100`, sub: snapshot.health >= 75 ? "Operating rhythm ready" : "Needs trigger coverage" }
  ].map((metric) => `
    <div class="alert-metric">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(String(metric.value))}</strong>
      <em>${escapeHtml(metric.sub)}</em>
    </div>
  `).join("");
  els.alertList.innerHTML = renderAlertList(snapshot);
  els.catalystCalendar.innerHTML = renderCatalystCalendar(snapshot);
  els.alertActionQueue.innerHTML = renderAlertActionQueue(snapshot);
  renderRevenueConsole();
}

function buildAlertSnapshot() {
  const activeAlerts = state.alertRules.map(normalizeAlertRule).filter((rule) => rule.status !== "done");
  const scored = activeAlerts.map(scoreAlertRule).sort((a, b) => b.score - a.score || daysUntil(a.dueDate) - daysUntil(b.dueDate));
  const dueSoon = scored.filter((rule) => daysUntil(rule.dueDate) <= 7).length;
  const highPriority = scored.filter((rule) => rule.priority === "High").length;
  const tickerCounts = scored.reduce((map, rule) => {
    map.set(rule.ticker, (map.get(rule.ticker) || 0) + 1);
    return map;
  }, new Map());
  const topTicker = Array.from(tickerCounts.entries()).sort((a, b) => b[1] - a[1])[0]?.[0] || "";
  const calendarRows = buildCatalystRows(scored);
  const actionRows = scored.slice(0, 5).map((rule) => ({
    rule,
    question: makeAlertQuestion(rule),
    action: makeAlertAction(rule)
  }));
  const coverage = Math.min(100, scored.length * 14 + dueSoon * 7 + highPriority * 8);
  const health = Math.max(20, Math.min(100, Math.round(coverage - Math.max(0, scored.length - 12) * 4)));
  return { activeAlerts: scored, dueSoon, highPriority, topTicker, calendarRows, actionRows, health };
}

function renderAlertList(snapshot) {
  if (!snapshot.activeAlerts.length) {
    return `<div class="ops-empty"><strong>No active alerts</strong><span>Create a thesis trigger or build alerts from the portfolio workspace.</span></div>`;
  }
  return snapshot.activeAlerts.slice(0, 6).map((rule) => `
    <div class="alert-row ${escapeAttr(rule.urgencyClass)}">
      <div>
        <strong>${escapeHtml(rule.ticker)} | ${escapeHtml(rule.trigger)}</strong>
        <span>${escapeHtml(rule.condition)}</span>
        <em>${escapeHtml(formatDue(rule.dueDate))} | ${escapeHtml(rule.priority)} priority</em>
      </div>
      <b>${escapeHtml(String(rule.score))}</b>
    </div>
  `).join("");
}

function renderCatalystCalendar(snapshot) {
  if (!snapshot.calendarRows.length) {
    return `<div class="ops-empty"><strong>No catalysts scheduled</strong><span>Add due dates to create an operating calendar.</span></div>`;
  }
  return snapshot.calendarRows.slice(0, 7).map((row) => `
    <div class="catalyst-row">
      <span>${escapeHtml(row.dateLabel)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.note)}</em>
      </div>
    </div>
  `).join("");
}

function renderAlertActionQueue(snapshot) {
  if (!snapshot.actionRows.length) {
    return `<div class="ops-empty"><strong>No action queue</strong><span>Alert-driven research questions will appear here.</span></div>`;
  }
  return snapshot.actionRows.map((item) => `
    <div class="alert-action-row">
      <div>
        <strong>${escapeHtml(item.action)}</strong>
        <span>${escapeHtml(item.question)}</span>
      </div>
      <button class="secondary-button small" type="button" data-alert-question="${escapeAttr(item.question)}">Ask</button>
    </div>
  `).join("");
}

function createAlertFromForm() {
  const rule = normalizeAlertRule({
    ticker: els.alertTicker.value,
    trigger: els.alertTrigger.value,
    priority: els.alertPriority.value,
    condition: els.alertCondition.value,
    dueDate: els.alertDueDate.value || dateAfterDays(7),
    source: "manual"
  });
  state.alertRules = [rule, ...state.alertRules].slice(0, 40);
  saveAlertRules();
  recordWorkflowEvent("alert", { ticker: rule.ticker, trigger: rule.trigger, priority: rule.priority });
  renderAlertCenter();
  renderLaunchOps();
  flashButtonLabel(els.alertForm.querySelector("button[type='submit']"), "Created");
}

function buildAlertsFromPortfolio() {
  const portfolio = buildPortfolioSnapshot();
  const generated = portfolio.priorityRows.slice(0, 5).map((row, index) => normalizeAlertRule({
    ticker: row.ticker,
    trigger: index === 0 ? "Risk phrase" : row.sourceCount ? "Earnings call" : "SEC filing",
    priority: row.priority >= 75 ? "High" : row.priority >= 58 ? "Medium" : "Low",
    dueDate: dateAfterDays(3 + index * 4),
    condition: row.sourceCount
      ? `Refresh thesis if ${row.ticker} source language changes around ${row.reason}.`
      : `Import filings or transcript before increasing ${row.ticker} exposure.`,
    source: "portfolio"
  }));
  state.alertRules = [...generated, ...state.alertRules].slice(0, 40);
  saveAlertRules();
  recordWorkflowEvent("alert", { ticker: generated.map((rule) => rule.ticker).join(", "), trigger: "portfolio build", priority: "Mixed" });
  renderAlertCenter();
  renderLaunchOps();
  flashButtonLabel(els.buildAlertsFromPortfolio, "Built");
}

function buildCatalystRows(alerts) {
  return alerts
    .filter((rule) => rule.dueDate)
    .sort((a, b) => String(a.dueDate).localeCompare(String(b.dueDate)))
    .map((rule) => ({
      dateLabel: formatDue(rule.dueDate),
      title: `${rule.ticker} ${rule.trigger}`,
      note: rule.condition
    }));
}

function scoreAlertRule(rule) {
  const due = daysUntil(rule.dueDate);
  const priorityBoost = rule.priority === "High" ? 34 : rule.priority === "Medium" ? 20 : 10;
  const triggerBoost = /earnings|SEC/i.test(rule.trigger) ? 16 : /risk|price/i.test(rule.trigger) ? 13 : 9;
  const dueBoost = due <= 0 ? 28 : due <= 3 ? 22 : due <= 7 ? 14 : due <= 14 ? 7 : 0;
  const sourceBoost = rule.source === "portfolio" ? 5 : 0;
  const score = Math.max(10, Math.min(99, priorityBoost + triggerBoost + dueBoost + sourceBoost));
  const urgencyClass = score >= 78 ? "is-hot" : score >= 55 ? "is-watch" : "is-calm";
  return { ...rule, score, urgencyClass };
}

function normalizeAlertRule(rule) {
  return {
    id: rule.id || `alert-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    ticker: normalizeTicker(rule.ticker || "NVDA"),
    trigger: normalizeAlertTrigger(rule.trigger),
    priority: normalizeAlertPriority(rule.priority),
    condition: String(rule.condition || "Review source evidence and thesis drift.").trim(),
    dueDate: normalizeDateInput(rule.dueDate || dateAfterDays(7)),
    status: rule.status || "open",
    source: rule.source || "manual",
    createdAt: rule.createdAt || new Date().toISOString()
  };
}

function normalizeAlertTrigger(value) {
  const trigger = String(value || "Risk phrase");
  return ["Risk phrase", "Earnings call", "SEC filing", "Price move", "Valuation threshold"].includes(trigger) ? trigger : "Risk phrase";
}

function normalizeAlertPriority(value) {
  const priority = String(value || "Medium");
  return ["High", "Medium", "Low"].includes(priority) ? priority : "Medium";
}

function makeAlertQuestion(rule) {
  if (/earnings/i.test(rule.trigger)) return `What changed in the latest earnings call tone for $${rule.ticker}, and does it affect my thesis?`;
  if (/SEC/i.test(rule.trigger)) return `Scan the latest SEC filing for $${rule.ticker}: what risks or MD&A changes matter most?`;
  if (/price/i.test(rule.trigger)) return `Does the price move in $${rule.ticker} reflect fundamentals, sentiment, or valuation stretch?`;
  if (/valuation/i.test(rule.trigger)) return `Which valuation assumptions should I flex first for $${rule.ticker}?`;
  return `Which source passages confirm or contradict this $${rule.ticker} alert: ${rule.condition}`;
}

function makeAlertAction(rule) {
  const due = daysUntil(rule.dueDate);
  if (due <= 0) return `${rule.ticker}: review now`;
  if (due <= 3) return `${rule.ticker}: prepare catalyst note`;
  if (rule.priority === "High") return `${rule.ticker}: pre-wire research`;
  return `${rule.ticker}: monitor trigger`;
}

function loadAlertRules() {
  const saved = loadJson(STORAGE_KEYS.alerts, null);
  if (Array.isArray(saved) && saved.length) return saved.map(normalizeAlertRule);
  return buildDefaultAlertRules();
}

function buildDefaultAlertRules() {
  return [
    { ticker: "NVDA", trigger: "Risk phrase", priority: "High", dueDate: dateAfterDays(3), condition: "Flag customer concentration, supply commitments, export controls, or margin-protection language.", source: "default" },
    { ticker: "AAPL", trigger: "Earnings call", priority: "Medium", dueDate: dateAfterDays(8), condition: "Watch for hardware demand caution, services regulation, or regional price pressure.", source: "default" },
    { ticker: "TSLA", trigger: "SEC filing", priority: "Medium", dueDate: dateAfterDays(12), condition: "Review capex, free cash flow, rate sensitivity, and platform-transition timing.", source: "default" }
  ].map(normalizeAlertRule);
}

function saveAlertRules() {
  saveJson(STORAGE_KEYS.alerts, state.alertRules.map(normalizeAlertRule));
}

function exportAlertBrief() {
  const snapshot = buildAlertSnapshot();
  const date = new Date().toISOString().slice(0, 10);
  const content = [
    "# CiteAlpha Alert Brief",
    "",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    "## Alert Snapshot",
    "",
    `- Open alerts: ${snapshot.activeAlerts.length}`,
    `- Due in 7 days: ${snapshot.dueSoon}`,
    `- High priority: ${snapshot.highPriority}`,
    `- Top ticker: ${snapshot.topTicker || "n/a"}`,
    `- Alert health: ${snapshot.health}/100`,
    "",
    "## Active Alerts",
    "",
    ...(snapshot.activeAlerts.length ? snapshot.activeAlerts.map((rule) => `- ${rule.ticker} | ${rule.trigger} | ${rule.priority} | ${formatDue(rule.dueDate)} - ${rule.condition}`) : ["- No active alerts."]),
    "",
    "## Action Queue",
    "",
    ...(snapshot.actionRows.length ? snapshot.actionRows.map((item) => `- ${item.action}: ${item.question}`) : ["- No action queue."]),
    "",
    "## Operating Note",
    "",
    "This client-side alert center is a prototype. Production alerts should run on a backend scheduler with authenticated accounts, durable event storage, provider rate limits, and audit logs."
  ].join("\n");
  downloadTextFile(`citealpha-alert-brief-${date}.md`, content, "text/markdown;charset=utf-8");
  flashButtonLabel(els.exportAlertBrief, "Exported");
}

function dateAfterDays(days) {
  return new Date(Date.now() + days * 86400000).toISOString().slice(0, 10);
}

function normalizeDateInput(value) {
  const parsed = new Date(`${value}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return dateAfterDays(7);
  return parsed.toISOString().slice(0, 10);
}

function daysUntil(value) {
  const due = new Date(`${normalizeDateInput(value)}T00:00:00`).getTime();
  const today = new Date(new Date().toISOString().slice(0, 10)).getTime();
  return Math.ceil((due - today) / 86400000);
}

function formatDue(value) {
  const days = daysUntil(value);
  if (days < 0) return `${Math.abs(days)}d overdue`;
  if (days === 0) return "Today";
  if (days === 1) return "Tomorrow";
  return `${days}d`;
}

function renderRevenueConsole() {
  if (!els.revenueMetricGrid) return;
  if (!state.revenueModel) state.revenueModel = loadRevenueModel();
  syncRevenueInputs();
  const snapshot = buildRevenueSnapshot();
  els.revenueMetricGrid.innerHTML = [
    { label: "Paid users", value: snapshot.paidUsers, sub: `${snapshot.leads} leads at ${snapshot.model.conversion}% conversion` },
    { label: "MRR", value: formatCurrency(snapshot.mrr), sub: `${formatCurrency(snapshot.arr)} ARR run-rate` },
    { label: "Month 6 MRR", value: formatCurrency(snapshot.monthSixMrr), sub: `${snapshot.model.growth}% growth / ${snapshot.model.churn}% churn` },
    { label: "ARPU", value: formatCurrency(snapshot.arpu), sub: `${snapshot.trialDays} day trial` }
  ].map((metric) => `
    <div class="revenue-metric">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(metric.value)}</strong>
      <em>${escapeHtml(metric.sub)}</em>
    </div>
  `).join("");
  els.revenuePlanCount.textContent = `${snapshot.planRows.length} plans`;
  els.revenuePlanMix.innerHTML = renderRevenuePlanMix(snapshot);
  els.revenueEntitlementScore.textContent = `${snapshot.entitlementScore}%`;
  els.revenueEntitlements.innerHTML = renderRevenueEntitlements(snapshot);
  els.checkoutReadinessScore.textContent = `${snapshot.checkout.score}%`;
  els.checkoutReadiness.innerHTML = renderCheckoutReadiness(snapshot.checkout.items);
  renderPipelineConsole();
}

function buildRevenueSnapshot() {
  const model = normalizeRevenueModel(state.revenueModel || getDefaultRevenueModel());
  const actualLeads = state.waitlistLeads.length;
  const leads = Math.max(actualLeads, model.leadTarget);
  const paidUsers = Math.max(1, Math.round(leads * model.conversion / 100));
  const planRows = buildRevenuePlanRows(model, paidUsers);
  const mrr = planRows.reduce((sum, row) => sum + row.users * row.price, 0);
  const arpu = mrr / Math.max(1, paidUsers);
  const monthlyNetGrowth = Math.max(-0.8, (model.growth - model.churn) / 100);
  const monthSixMrr = Math.round(mrr * Math.pow(1 + monthlyNetGrowth, 5));
  const entitlementRows = buildEntitlementRows();
  const entitlementScore = Math.round(entitlementRows.reduce((sum, row) => sum + (row.status === "Ready" ? 100 : row.status === "Partial" ? 65 : 25), 0) / entitlementRows.length);
  const checkout = buildCheckoutReadiness(model, actualLeads, mrr);
  return {
    model,
    actualLeads,
    leads,
    paidUsers,
    planRows,
    mrr,
    arr: mrr * 12,
    arpu,
    monthSixMrr,
    trialDays: model.trialDays,
    entitlementRows,
    entitlementScore,
    checkout
  };
}

function renderRevenuePlanMix(snapshot) {
  const maxMrr = Math.max(1, ...snapshot.planRows.map((row) => row.mrr));
  return snapshot.planRows.map((row) => `
    <div class="revenue-plan-row">
      <div>
        <strong>${escapeHtml(row.name)} | ${escapeHtml(formatCurrency(row.price))}/mo</strong>
        <span>${escapeHtml(String(row.users))} users | ${escapeHtml(row.mix)}% mix | ${escapeHtml(formatCurrency(row.mrr))} MRR</span>
      </div>
      <i><b style="width:${escapeAttr(String(Math.max(8, Math.round((row.mrr / maxMrr) * 100))))}%"></b></i>
    </div>
  `).join("");
}

function renderRevenueEntitlements(snapshot) {
  return snapshot.entitlementRows.map((row) => `
    <div class="entitlement-row ${row.status === "Ready" ? "is-ready" : row.status === "Partial" ? "is-partial" : "is-blocked"}">
      <span>${escapeHtml(row.plan)}</span>
      <div>
        <strong>${escapeHtml(row.feature)}</strong>
        <em>${escapeHtml(row.note)}</em>
      </div>
    </div>
  `).join("");
}

function renderCheckoutReadiness(items) {
  return items.map((item) => `
    <div class="checkout-row ${item.status}">
      <span>${escapeHtml(item.label)}</span>
      <div>
        <strong>${escapeHtml(item.title)}</strong>
        <em>${escapeHtml(item.note)}</em>
      </div>
    </div>
  `).join("");
}

function buildRevenuePlanRows(model, paidUsers) {
  const mix = normalizePlanMix(model);
  const rawRows = [
    { key: "starter", name: "Starter", price: 10, mix: mix.starter },
    { key: "pro", name: "Pro", price: 29, mix: mix.pro },
    { key: "analyst", name: "Analyst", price: 49, mix: mix.analyst }
  ].map((row) => ({
    ...row,
    users: Math.max(0, Math.round(paidUsers * row.mix / 100))
  }));
  const userDelta = paidUsers - rawRows.reduce((sum, row) => sum + row.users, 0);
  rawRows[1].users += userDelta;
  return rawRows.map((row) => ({ ...row, mrr: row.users * row.price }));
}

function buildEntitlementRows() {
  const hasImports = state.uploadedDocs.length > 0;
  const hasDecisions = state.decisions.length > 0;
  const hasAlerts = state.alertRules.length > 0;
  return [
    { plan: "Free", feature: "Sample research desk", status: "Ready", note: "Static corpus, templates, and limited exports are available." },
    { plan: "Starter", feature: "Saved briefs and PDF/MD export", status: state.notes.length ? "Ready" : "Partial", note: state.notes.length ? "Saved brief workflow is proven." : "Run and save a brief to validate this entitlement." },
    { plan: "Pro", feature: "Imports, portfolio, alerts", status: hasImports && hasAlerts ? "Ready" : "Partial", note: hasImports && hasAlerts ? "Data workflow and alert layer are active." : "Import sources and build alerts before locking this tier." },
    { plan: "Analyst", feature: "IC decisions and priority workflow", status: hasDecisions ? "Ready" : "Partial", note: hasDecisions ? "Decision history exists for analyst workflows." : "Save an IC decision to prove repeatable analyst value." },
    { plan: "Paid", feature: "Stripe checkout and account limits", status: "Blocked", note: "Needs backend auth, billing, plan limits, and durable storage." }
  ];
}

function buildCheckoutReadiness(model, actualLeads, mrr) {
  const security = summarizeSecurityPosture();
  const items = [
    { label: "Ready", title: "Public pricing", note: "Starter, Pro, and Analyst pricing are visible." },
    { label: actualLeads ? "Ready" : "Next", title: "Demand capture", note: actualLeads ? `${actualLeads} waitlist lead${actualLeads === 1 ? "" : "s"} stored locally.` : "Capture early waitlist leads before checkout." },
    { label: mrr >= 250 ? "Ready" : "Next", title: "Revenue target", note: `${formatCurrency(mrr)} first-month MRR model.` },
    { label: security.score >= 90 ? "Ready" : "Next", title: "Security posture", note: `${security.score}/100 security score before payment data.` },
    { label: "Blocked", title: "Stripe integration", note: "Payment links, webhooks, plan limits, and customer portal are not wired yet." },
    { label: "Blocked", title: "Account backend", note: "Auth, team workspace, API vault, and server-side storage are required for paid launch." }
  ];
  const score = Math.round(items.reduce((sum, item) => sum + (item.label === "Ready" ? 100 : item.label === "Next" ? 55 : 20), 0) / items.length);
  return { score, items };
}

function readRevenueModel() {
  return normalizeRevenueModel({
    leadTarget: Number(els.revenueLeadTarget.value),
    conversion: Number(els.revenueConversion.value),
    churn: Number(els.revenueChurn.value),
    growth: Number(els.revenueGrowth.value),
    starterMix: Number(els.revenueStarterMix.value),
    proMix: Number(els.revenueProMix.value),
    analystMix: Number(els.revenueAnalystMix.value),
    trialDays: Number(els.revenueTrialDays.value)
  });
}

function syncRevenueInputs() {
  if (!els.revenueLeadTarget) return;
  const model = normalizeRevenueModel(state.revenueModel || getDefaultRevenueModel());
  els.revenueLeadTarget.value = String(model.leadTarget);
  els.revenueConversion.value = String(model.conversion);
  els.revenueChurn.value = String(model.churn);
  els.revenueGrowth.value = String(model.growth);
  els.revenueStarterMix.value = String(model.starterMix);
  els.revenueProMix.value = String(model.proMix);
  els.revenueAnalystMix.value = String(model.analystMix);
  els.revenueTrialDays.value = String(model.trialDays);
}

function buildRevenueModelFromWaitlist() {
  const plans = state.waitlistLeads.map((lead) => String(lead.plan || ""));
  const leadTarget = Math.max(25, state.waitlistLeads.length || getDefaultRevenueModel().leadTarget);
  const planCounts = {
    starter: plans.filter((plan) => /starter/i.test(plan)).length,
    pro: plans.filter((plan) => /pro/i.test(plan)).length,
    analyst: plans.filter((plan) => /analyst/i.test(plan)).length
  };
  const totalPlans = Math.max(1, planCounts.starter + planCounts.pro + planCounts.analyst);
  return normalizeRevenueModel({
    ...getDefaultRevenueModel(),
    leadTarget,
    conversion: state.waitlistLeads.length >= 10 ? 15 : 12,
    starterMix: Math.round((planCounts.starter / totalPlans) * 100) || 30,
    proMix: Math.round((planCounts.pro / totalPlans) * 100) || 50,
    analystMix: Math.round((planCounts.analyst / totalPlans) * 100) || 20
  });
}

function normalizeRevenueModel(model) {
  const defaults = getDefaultRevenueModel();
  const clean = {
    leadTarget: clampNumber(model.leadTarget, 1, 10000, defaults.leadTarget),
    conversion: clampNumber(model.conversion, 1, 100, defaults.conversion),
    churn: clampNumber(model.churn, 0, 50, defaults.churn),
    growth: clampNumber(model.growth, 0, 200, defaults.growth),
    starterMix: clampNumber(model.starterMix, 0, 100, defaults.starterMix),
    proMix: clampNumber(model.proMix, 0, 100, defaults.proMix),
    analystMix: clampNumber(model.analystMix, 0, 100, defaults.analystMix),
    trialDays: clampNumber(model.trialDays, 0, 60, defaults.trialDays)
  };
  const mix = normalizePlanMix(clean);
  return { ...clean, starterMix: mix.starter, proMix: mix.pro, analystMix: mix.analyst };
}

function normalizePlanMix(model) {
  const total = Math.max(1, Number(model.starterMix) + Number(model.proMix) + Number(model.analystMix));
  const starter = Math.round((Number(model.starterMix) / total) * 100);
  const analyst = Math.round((Number(model.analystMix) / total) * 100);
  const pro = Math.max(0, 100 - starter - analyst);
  return { starter, pro, analyst };
}

function getDefaultRevenueModel() {
  return {
    leadTarget: 100,
    conversion: 12,
    churn: 4,
    growth: 18,
    starterMix: 30,
    proMix: 50,
    analystMix: 20,
    trialDays: 7
  };
}

function loadRevenueModel() {
  return normalizeRevenueModel(loadJson(STORAGE_KEYS.revenue, getDefaultRevenueModel()));
}

function saveRevenueModel() {
  saveJson(STORAGE_KEYS.revenue, normalizeRevenueModel(state.revenueModel || getDefaultRevenueModel()));
}

function exportRevenueBrief() {
  const snapshot = buildRevenueSnapshot();
  const date = new Date().toISOString().slice(0, 10);
  const content = [
    "# CiteAlpha Revenue Brief",
    "",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    "## Revenue Snapshot",
    "",
    `- Leads modeled: ${snapshot.leads}`,
    `- Paid users: ${snapshot.paidUsers}`,
    `- First-month MRR: ${formatCurrency(snapshot.mrr)}`,
    `- ARR run-rate: ${formatCurrency(snapshot.arr)}`,
    `- Month-six MRR: ${formatCurrency(snapshot.monthSixMrr)}`,
    `- ARPU: ${formatCurrency(snapshot.arpu)}`,
    `- Checkout readiness: ${snapshot.checkout.score}%`,
    "",
    "## Plan Mix",
    "",
    ...snapshot.planRows.map((row) => `- ${row.name}: ${row.users} users, ${row.mix}% mix, ${formatCurrency(row.mrr)} MRR`),
    "",
    "## Entitlements",
    "",
    ...snapshot.entitlementRows.map((row) => `- ${row.plan}: ${row.feature} (${row.status}) - ${row.note}`),
    "",
    "## Checkout Readiness",
    "",
    ...snapshot.checkout.items.map((item) => `- ${item.label}: ${item.title} - ${item.note}`),
    "",
    "## Operating Note",
    "",
    "This client-side revenue console models monetization only. Production subscription launch needs Stripe checkout, customer portal, authenticated accounts, server-side plan enforcement, tax handling, and webhook-backed entitlement sync."
  ].join("\n");
  downloadTextFile(`citealpha-revenue-brief-${date}.md`, content, "text/markdown;charset=utf-8");
  flashButtonLabel(els.exportRevenueBrief, "Exported");
}

function clampNumber(value, min, max, fallback) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.max(min, Math.min(max, Math.round(number)));
}

function formatCurrency(value) {
  const number = Math.round(Number(value) || 0);
  if (number >= 1000000) return `$${(number / 1000000).toFixed(1)}M`;
  if (number >= 1000) return `$${(number / 1000).toFixed(number >= 10000 ? 0 : 1)}K`;
  return `$${number}`;
}

function renderPipelineConsole() {
  if (!els.pipelineMetricGrid) return;
  if (!state.pipelineModel) state.pipelineModel = loadPipelineModel();
  syncPipelineInputs();
  const snapshot = buildPipelineSnapshot();
  els.pipelineMetricGrid.innerHTML = [
    { label: "Monthly docs", value: formatCompact(snapshot.monthlyDocs), sub: `${snapshot.model.companies} names | ${snapshot.model.filingsPerCompany} filings/name` },
    { label: "Vector chunks", value: formatCompact(snapshot.vectorChunks), sub: `${snapshot.model.chunksPerDoc} chunks/doc` },
    { label: "Est. infra", value: formatCurrency(snapshot.monthlyCost), sub: `${snapshot.model.backend} + ${snapshot.model.vectorStore}` },
    { label: "Readiness", value: `${snapshot.readiness}%`, sub: snapshot.readiness >= 75 ? "Backend plan is credible" : "Need production wiring" }
  ].map((metric) => `
    <div class="pipeline-metric">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(metric.value)}</strong>
      <em>${escapeHtml(metric.sub)}</em>
    </div>
  `).join("");
  els.pipelineIntegrationScore.textContent = `${snapshot.integrationScore}%`;
  els.pipelineIntegrationMap.innerHTML = renderPipelineIntegrationMap(snapshot.integrationRows);
  els.pipelineEnvScore.textContent = `${snapshot.envScore}%`;
  els.pipelineEnvChecklist.innerHTML = renderPipelineEnvChecklist(snapshot.envRows);
  els.pipelineOpsCount.textContent = `${snapshot.opsRows.length} jobs`;
  els.pipelineOpsQueue.innerHTML = renderPipelineOpsQueue(snapshot.opsRows);
  renderEvalLab();
}

function buildPipelineSnapshot() {
  const model = normalizePipelineModel(state.pipelineModel || getDefaultPipelineModel());
  const monthlyDocs = model.companies * model.filingsPerCompany + model.callsPerMonth;
  const vectorChunks = monthlyDocs * model.chunksPerDoc;
  const embeddingCost = vectorChunks * 0.000018;
  const queryCost = model.queriesPerMonth * 0.0035;
  const storageCost = vectorChunks * 0.00042;
  const backendCost = model.companies > 250 || model.queriesPerMonth > 50000 ? 79 : model.companies > 75 ? 39 : 19;
  const providerCost = model.marketApi === "Demo only" ? 0 : model.marketApi === "Alpha Vantage" ? 25 : model.marketApi === "Polygon" ? 99 : 39;
  const monthlyCost = Math.round(backendCost + providerCost + embeddingCost + queryCost + storageCost);
  const integrationRows = buildPipelineIntegrationRows(model);
  const envRows = buildPipelineEnvRows(model);
  const opsRows = buildPipelineOpsRows(model, monthlyDocs, vectorChunks);
  const integrationScore = scoreRows(integrationRows);
  const envScore = scoreRows(envRows);
  const readiness = Math.round(integrationScore * 0.45 + envScore * 0.35 + Math.min(100, monthlyDocs / 8) * 0.2);
  return {
    model,
    monthlyDocs,
    vectorChunks,
    monthlyCost,
    integrationRows,
    envRows,
    opsRows,
    integrationScore,
    envScore,
    readiness
  };
}

function renderPipelineIntegrationMap(rows) {
  return rows.map((row) => `
    <div class="pipeline-row ${row.status}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.note)}</em>
      </div>
    </div>
  `).join("");
}

function renderPipelineEnvChecklist(rows) {
  return rows.map((row) => `
    <div class="pipeline-row ${row.status}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.key)}</strong>
        <em>${escapeHtml(row.note)}</em>
      </div>
    </div>
  `).join("");
}

function renderPipelineOpsQueue(rows) {
  return rows.map((row) => `
    <div class="pipeline-job-row">
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <span>${escapeHtml(row.note)}</span>
      </div>
      <b>${escapeHtml(row.cadence)}</b>
    </div>
  `).join("");
}

function buildPipelineIntegrationRows(model) {
  return [
    { label: "Ready", status: "ready", title: "Client research desk", note: "Static proof of concept is functional with source-backed answers and exports." },
    { label: "Next", status: "next", title: "SEC ingestion worker", note: `${model.backend} job should fetch submissions, normalize sections, and preserve source metadata.` },
    { label: model.marketApi === "Demo only" ? "Next" : "Ready", status: model.marketApi === "Demo only" ? "next" : "ready", title: "Market data bridge", note: `${model.marketApi} selected for quote and metric refresh.` },
    { label: "Next", status: "next", title: "Transcript loader", note: `${model.callsPerMonth} calls/month need transcript source, chunking, and citation metadata.` },
    { label: "Next", status: "next", title: "Embedding + vector search", note: `${model.vectorStore} should index ${formatCompact(model.chunksPerDoc)} chunks per source document.` },
    { label: "Blocked", status: "blocked", title: "Authenticated API vault", note: "Provider keys, user accounts, rate limits, and audit logs must move server-side." }
  ];
}

function buildPipelineEnvRows(model) {
  return [
    { label: "Ready", status: "ready", key: "APP_BASE_URL", note: "Public GitHub Pages URL is known." },
    { label: "Next", status: "next", key: "SEC_USER_AGENT", note: "Required before live SEC polling." },
    { label: model.marketApi === "Demo only" ? "Next" : "Ready", status: model.marketApi === "Demo only" ? "next" : "ready", key: "MARKET_DATA_API_KEY", note: `${model.marketApi} credential stays off the client.` },
    { label: "Next", status: "next", key: "OPENAI_API_KEY", note: "Needed for production extraction, embeddings, and answer generation." },
    { label: "Next", status: "next", key: "VECTOR_DATABASE_URL", note: `${model.vectorStore} connection string with scoped permissions.` },
    { label: "Blocked", status: "blocked", key: "STRIPE_WEBHOOK_SECRET", note: "Needed when paywall entitlements become real." }
  ];
}

function buildPipelineOpsRows(model, monthlyDocs, vectorChunks) {
  return [
    { title: "SEC refresh", cadence: "Daily", note: `Poll ${model.companies} coverage names for new 10-K, 10-Q, and 8-K filings.` },
    { title: "Transcript sweep", cadence: "Weekly", note: `Queue roughly ${model.callsPerMonth} earnings calls per month.` },
    { title: "Embedding batch", cadence: "Hourly", note: `Prepare ${formatCompact(vectorChunks)} vector chunks per month with retries.` },
    { title: "Citation QA", cadence: "Daily", note: `Sample retrieved passages for source metadata, relevance, and stale-link drift.` },
    { title: "Usage and cost monitor", cadence: "Daily", note: `Watch ${formatCompact(model.queriesPerMonth)} monthly queries, provider limits, and margin by plan.` }
  ];
}

function readPipelineModel() {
  return normalizePipelineModel({
    companies: Number(els.pipelineCompanies.value),
    filingsPerCompany: Number(els.pipelineFilings.value),
    callsPerMonth: Number(els.pipelineCalls.value),
    chunksPerDoc: Number(els.pipelineChunks.value),
    queriesPerMonth: Number(els.pipelineQueries.value),
    backend: els.pipelineBackend.value,
    vectorStore: els.pipelineVectorStore.value,
    marketApi: els.pipelineMarketApi.value
  });
}

function syncPipelineInputs() {
  if (!els.pipelineCompanies) return;
  const model = normalizePipelineModel(state.pipelineModel || getDefaultPipelineModel());
  els.pipelineCompanies.value = String(model.companies);
  els.pipelineFilings.value = String(model.filingsPerCompany);
  els.pipelineCalls.value = String(model.callsPerMonth);
  els.pipelineChunks.value = String(model.chunksPerDoc);
  els.pipelineQueries.value = String(model.queriesPerMonth);
  els.pipelineBackend.value = model.backend;
  els.pipelineVectorStore.value = model.vectorStore;
  els.pipelineMarketApi.value = model.marketApi;
}

function normalizePipelineModel(model) {
  const defaults = getDefaultPipelineModel();
  return {
    companies: clampNumber(model.companies, 1, 5000, defaults.companies),
    filingsPerCompany: clampNumber(model.filingsPerCompany, 1, 40, defaults.filingsPerCompany),
    callsPerMonth: clampNumber(model.callsPerMonth, 0, 2000, defaults.callsPerMonth),
    chunksPerDoc: clampNumber(model.chunksPerDoc, 20, 5000, defaults.chunksPerDoc),
    queriesPerMonth: clampNumber(model.queriesPerMonth, 100, 1000000, defaults.queriesPerMonth),
    backend: normalizeChoice(model.backend, ["Supabase Edge", "Vercel Functions", "AWS Lambda", "Render Worker"], defaults.backend),
    vectorStore: normalizeChoice(model.vectorStore, ["pgvector", "Pinecone", "Qdrant", "Weaviate"], defaults.vectorStore),
    marketApi: normalizeChoice(model.marketApi, ["Financial Modeling Prep", "Alpha Vantage", "Polygon", "Demo only"], defaults.marketApi)
  };
}

function getDefaultPipelineModel() {
  return {
    companies: 50,
    filingsPerCompany: 6,
    callsPerMonth: 25,
    chunksPerDoc: 180,
    queriesPerMonth: 12000,
    backend: "Supabase Edge",
    vectorStore: "pgvector",
    marketApi: "Financial Modeling Prep"
  };
}

function getPipelinePreset(name) {
  if (name === "mvp") {
    return normalizePipelineModel({
      companies: 250,
      filingsPerCompany: 8,
      callsPerMonth: 120,
      chunksPerDoc: 220,
      queriesPerMonth: 60000,
      backend: "AWS Lambda",
      vectorStore: "Pinecone",
      marketApi: "Financial Modeling Prep"
    });
  }
  return normalizePipelineModel({
    companies: 25,
    filingsPerCompany: 5,
    callsPerMonth: 10,
    chunksPerDoc: 150,
    queriesPerMonth: 5000,
    backend: "Supabase Edge",
    vectorStore: "pgvector",
    marketApi: "Alpha Vantage"
  });
}

function loadPipelineModel() {
  return normalizePipelineModel(loadJson(STORAGE_KEYS.pipeline, getDefaultPipelineModel()));
}

function savePipelineModel() {
  saveJson(STORAGE_KEYS.pipeline, normalizePipelineModel(state.pipelineModel || getDefaultPipelineModel()));
}

function exportPipelineBrief() {
  const snapshot = buildPipelineSnapshot();
  const date = new Date().toISOString().slice(0, 10);
  const content = [
    "# CiteAlpha Production Pipeline Brief",
    "",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    "## Workload",
    "",
    `- Coverage names: ${snapshot.model.companies}`,
    `- Monthly documents: ${snapshot.monthlyDocs}`,
    `- Vector chunks: ${snapshot.vectorChunks}`,
    `- Queries per month: ${snapshot.model.queriesPerMonth}`,
    `- Estimated monthly infrastructure: ${formatCurrency(snapshot.monthlyCost)}`,
    `- Readiness: ${snapshot.readiness}%`,
    "",
    "## Integration Map",
    "",
    ...snapshot.integrationRows.map((row) => `- ${row.label}: ${row.title} - ${row.note}`),
    "",
    "## Environment Checklist",
    "",
    ...snapshot.envRows.map((row) => `- ${row.label}: ${row.key} - ${row.note}`),
    "",
    "## Data Ops Queue",
    "",
    ...snapshot.opsRows.map((row) => `- ${row.cadence}: ${row.title} - ${row.note}`),
    "",
    "## Production Note",
    "",
    "This console is a launch-planning model. Production should enforce authentication, server-side secret storage, provider rate limits, durable job queues, retry/dead-letter handling, citation audit logs, and monitoring before live investment workflows."
  ].join("\n");
  downloadTextFile(`citealpha-production-pipeline-${date}.md`, content, "text/markdown;charset=utf-8");
  flashButtonLabel(els.exportPipelineBrief, "Exported");
}

function scoreRows(rows) {
  return Math.round(rows.reduce((sum, row) => sum + (row.status === "ready" ? 100 : row.status === "next" ? 55 : 20), 0) / Math.max(1, rows.length));
}

function normalizeChoice(value, choices, fallback) {
  return choices.includes(value) ? value : fallback;
}

function formatCompact(value) {
  const number = Number(value) || 0;
  if (number >= 1000000) return `${(number / 1000000).toFixed(1)}M`;
  if (number >= 1000) return `${(number / 1000).toFixed(number >= 10000 ? 0 : 1)}K`;
  return String(Math.round(number));
}

function renderEvalLab() {
  if (!els.evalMetricGrid) return;
  if (!state.evalConfig) state.evalConfig = loadEvalConfig();
  syncEvalInputs();
  const snapshot = buildEvalSnapshot();
  state.currentEval = snapshot;
  els.evalMetricGrid.innerHTML = [
    { label: "Pass rate", value: `${snapshot.passRate}%`, sub: `${snapshot.passedCases}/${snapshot.caseRows.length} regression cases` },
    { label: "Faithfulness", value: `${snapshot.faithfulness}%`, sub: `${snapshot.citationCount} citations checked` },
    { label: "Hallucination risk", value: `${snapshot.hallucinationRisk}/100`, sub: snapshot.hallucinationRisk <= 22 ? "Low risk answer" : "Needs reviewer eyes" },
    { label: "Review load", value: `${snapshot.reviewRows.length}`, sub: `${snapshot.config.reviewSample}% human sample` }
  ].map((metric) => `
    <div class="eval-metric">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(metric.value)}</strong>
      <em>${escapeHtml(metric.sub)}</em>
    </div>
  `).join("");
  els.evalCaseSummary.textContent = `${snapshot.caseRows.length} cases`;
  els.evalCaseList.innerHTML = renderEvalCaseList(snapshot.caseRows);
  els.evalGateScore.textContent = `${snapshot.gateScore}%`;
  els.evalGateList.innerHTML = renderEvalGateList(snapshot.gateRows);
  els.evalReviewCount.textContent = String(snapshot.reviewRows.length);
  els.evalReviewQueue.innerHTML = renderEvalReviewQueue(snapshot.reviewRows);
  renderComplianceCenter();
}

function buildEvalSnapshot() {
  const config = normalizeEvalConfig(state.evalConfig || getDefaultEvalConfig());
  const docs = getEnabledDocs();
  const citations = state.currentCitations || [];
  const answer = state.lastAnswerModel || null;
  const sourceAudit = answer && answer.sourceAudit ? answer.sourceAudit : makeLightSourceAudit(citations);
  const security = summarizeSecurityPosture();
  const cases = buildEvalCases(config);
  const context = { docs, citations, answer, sourceAudit, security };
  const caseRows = cases.map((test, index) => scoreEvalCase(test, index, config, context));
  const passedCases = caseRows.filter((row) => row.status === "pass").length;
  const passRate = Math.round((passedCases / Math.max(1, caseRows.length)) * 100);
  const faithfulness = scoreEvalFaithfulness(config, context);
  const hallucinationRisk = Math.max(0, Math.min(100, Math.round(100 - faithfulness + security.findings.length * 7 + (answer ? 0 : 12))));
  const gateRows = buildEvalGateRows(config, {
    ...context,
    caseRows,
    passRate,
    faithfulness,
    hallucinationRisk
  });
  const gateScore = scoreRows(gateRows);
  const reviewRows = buildEvalReviewRows(config, {
    ...context,
    caseRows,
    passRate,
    faithfulness,
    hallucinationRisk,
    gateRows
  });
  return {
    config,
    docs,
    citationCount: citations.length,
    caseRows,
    passedCases,
    passRate,
    faithfulness,
    hallucinationRisk,
    gateRows,
    gateScore,
    reviewRows
  };
}

function buildEvalCases(config) {
  const base = {
    Balanced: [
      "Which company has the better margin durability if rates stay high?",
      "What are the risks for $NVDA?",
      "Where does management sound less confident than the filing?",
      "What valuation assumptions should I flex first before buying?",
      "Compare Northstar Chips and Aurora Retail on pricing power.",
      "What would change the answer if rates stayed higher for longer?"
    ],
    "Risk factors": [
      "What are the risks for $NVDA?",
      "What are the three most material risks hidden behind revenue growth?",
      "Which risk factors have source support instead of generic language?",
      "Which risks should go into an investment committee memo?",
      "Is the risk evidence more filing-led or call-led?"
    ],
    Valuation: [
      "What valuation assumptions should I flex first before buying?",
      "Which model input changes the implied value most?",
      "How much of the answer depends on FCF margin versus revenue growth?",
      "What valuation read-through is source-backed?"
    ],
    "Earnings tone": [
      "Where does management sound less confident than the filing?",
      "What did management emphasize on margin, demand, and guidance?",
      "Does the call tone confirm or weaken the filing thesis?",
      "Which transcript passages need follow-up?"
    ],
    "Portfolio workflow": [
      "Which holding needs a research refresh first?",
      "Which portfolio risk is most under-cited?",
      "What catalyst should I monitor next?",
      "Which decision memo should be updated after this answer?"
    ]
  };
  const selected = base[config.focus] || base.Balanced;
  const currentQuestion = els.queryInput && els.queryInput.value.trim() ? els.queryInput.value.trim() : "";
  const generated = [
    currentQuestion,
    ...selected,
    ...QUESTION_TEMPLATES,
    ...buildPortfolioEvalQuestions()
  ].filter(Boolean);
  return Array.from(new Set(generated)).slice(0, config.caseCount).map((question) => ({
    question,
    target: inferEvalTarget(question),
    requirement: inferEvalRequirement(question)
  }));
}

function buildPortfolioEvalQuestions() {
  return state.portfolioPositions.slice(0, 4).map((position) => `What is the top cited risk for $${position.ticker} at ${position.weight}% portfolio weight?`);
}

function inferEvalTarget(question) {
  const text = String(question || "").toLowerCase();
  if (/risk|downside|red flag/.test(text)) return "Risk";
  if (/valuation|model|value|fcf|multiple/.test(text)) return "Valuation";
  if (/management|call|tone|confident|transcript/.test(text)) return "Tone";
  if (/portfolio|holding|weight|catalyst/.test(text)) return "Portfolio";
  return "General";
}

function inferEvalRequirement(question) {
  const target = inferEvalTarget(question);
  if (target === "Risk") return "Three specific source-backed risks with citations.";
  if (target === "Valuation") return "Scenario assumptions tied to source evidence.";
  if (target === "Tone") return "Call language reconciled with filing disclosure.";
  if (target === "Portfolio") return "Actionable next question, exposure, and trigger.";
  return "Plain-English answer with cited evidence and a bottom line.";
}

function scoreEvalCase(test, index, config, context) {
  const question = test.question.toLowerCase();
  const answerText = `${context.answer ? context.answer.plainText : ""} ${state.lastBrief || ""}`.toLowerCase();
  const citations = context.citations || [];
  const docs = context.docs || [];
  let score = 38;
  score += Math.min(24, citations.length * 4);
  score += Math.min(14, new Set(citations.map((citation) => citation.docId)).size * 4);
  score += Math.min(10, docs.length);
  score += Math.round(((context.sourceAudit && context.sourceAudit.quality) || 50) * 0.18);
  if (context.answer) score += 8;
  if (test.target === "Risk" && /risk|customer|supply|financing|capex|concentration/.test(answerText)) score += 7;
  if (test.target === "Valuation" && /valuation|fcf|margin|multiple|discount|value/.test(answerText)) score += 7;
  if (test.target === "Tone" && /management|tone|call|confident|guidance/.test(answerText)) score += 7;
  if (test.target === "Portfolio" && state.portfolioPositions.length) score += 7;
  if (question.includes("$") && context.answer && context.answer.tickerFocus) score += 5;
  if (config.regressionMode === "Strict" && citations.length < config.minCitations) score -= 14;
  if (context.security.findings.length) score -= Math.min(18, context.security.findings.length * 6);
  const finalScore = Math.max(20, Math.min(99, Math.round(score)));
  const status = finalScore >= config.passThreshold ? "pass" : finalScore >= config.passThreshold - 12 ? "review" : "fail";
  return {
    id: `E${index + 1}`,
    question: test.question,
    target: test.target,
    requirement: test.requirement,
    score: finalScore,
    status,
    note: makeEvalCaseNote(status, test, citations.length)
  };
}

function makeEvalCaseNote(status, test, citationCount) {
  if (status === "pass") return `${test.target} case has enough evidence shape for a pilot answer.`;
  if (status === "review") return `${test.target} case is close; sample it for phrasing and citation fit.`;
  return `${test.target} case needs stronger retrieval before it should reach a user. ${citationCount} citation${citationCount === 1 ? "" : "s"} available.`;
}

function scoreEvalFaithfulness(config, context) {
  const citations = context.citations || [];
  const sourceAudit = context.sourceAudit || {};
  const security = context.security || { score: 100 };
  const trusted = citations.filter(isPriorityCitation).length;
  const docDiversity = new Set(citations.map((citation) => citation.docId)).size;
  const citationCoverage = Math.min(100, Math.round((citations.length / Math.max(1, config.minCitations)) * 100));
  const trustScore = citations.length ? Math.round((trusted / citations.length) * 100) : 45;
  const diversityScore = Math.min(100, docDiversity * 24);
  return Math.max(25, Math.min(99, Math.round(
    citationCoverage * 0.24 +
    (sourceAudit.quality || 55) * 0.34 +
    trustScore * 0.16 +
    diversityScore * 0.12 +
    security.score * 0.14
  )));
}

function buildEvalGateRows(config, context) {
  const riskCaseCount = context.caseRows.filter((row) => row.target === "Risk").length;
  const callCount = context.citations.filter((citation) => /call|q&a|prepared/i.test(`${citation.type} ${citation.section}`)).length;
  const filingCount = context.citations.filter((citation) => /filing|10-k|10-q/i.test(citation.type)).length;
  const modelCount = context.citations.filter((citation) => /model|valuation/i.test(citation.type)).length;
  return [
    {
      label: context.citations.length >= config.minCitations ? "Ready" : "Blocked",
      status: context.citations.length >= config.minCitations ? "ready" : "blocked",
      title: "Citation minimum",
      note: `${context.citations.length}/${config.minCitations} citations available for the current answer.`
    },
    {
      label: context.faithfulness >= config.passThreshold ? "Ready" : "Next",
      status: context.faithfulness >= config.passThreshold ? "ready" : "next",
      title: "Faithfulness score",
      note: `${context.faithfulness}% against a ${config.passThreshold}% threshold.`
    },
    {
      label: context.security.score >= 90 ? "Ready" : "Next",
      status: context.security.score >= 90 ? "ready" : "next",
      title: "Security scan",
      note: `${context.security.score}/100 posture with ${context.security.findings.length} finding${context.security.findings.length === 1 ? "" : "s"}.`
    },
    {
      label: filingCount && (callCount || modelCount) ? "Ready" : "Next",
      status: filingCount && (callCount || modelCount) ? "ready" : "next",
      title: "Source mix",
      note: `${filingCount} filing / ${callCount} call / ${modelCount} model citation${context.citations.length === 1 ? "" : "s"}.`
    },
    {
      label: context.passRate >= config.passThreshold ? "Ready" : "Next",
      status: context.passRate >= config.passThreshold ? "ready" : "next",
      title: "Regression suite",
      note: `${context.passRate}% pass rate across ${context.caseRows.length} ${config.focus.toLowerCase()} cases.`
    },
    {
      label: riskCaseCount ? "Ready" : "Next",
      status: riskCaseCount ? "ready" : "next",
      title: "Risk disclosure",
      note: riskCaseCount ? `${riskCaseCount} risk case${riskCaseCount === 1 ? "" : "s"} included.` : "Add explicit risk-factor regressions before launch."
    }
  ];
}

function buildEvalReviewRows(config, context) {
  const rows = [];
  context.caseRows
    .filter((row) => row.status !== "pass")
    .slice(0, 5)
    .forEach((row) => rows.push({
      title: `${row.id} ${row.target} review`,
      note: row.question,
      priority: row.status === "fail" ? "High" : "Medium"
    }));
  if (!context.answer) {
    rows.unshift({ title: "Run one live analysis", note: "Quality lab has no current answer to audit yet.", priority: "High" });
  }
  if (context.hallucinationRisk > 28) {
    rows.push({ title: "Hallucination-risk sample", note: `${context.hallucinationRisk}/100 risk. Check unsupported claims against the evidence stack.`, priority: "High" });
  }
  if (context.security.findings.length) {
    rows.push({ title: "Security finding review", note: context.security.findings.slice(0, 2).map((finding) => finding.label).join(", "), priority: "High" });
  }
  const targetSample = Math.max(1, Math.round((config.caseCount * config.reviewSample) / 100));
  while (rows.length < targetSample && context.caseRows[rows.length]) {
    const row = context.caseRows[rows.length];
    rows.push({ title: `${row.id} random sample`, note: row.question, priority: "Low" });
  }
  return rows.slice(0, 8);
}

function renderEvalCaseList(rows) {
  return rows.map((row) => `
    <div class="eval-case-row ${escapeAttr(row.status)}">
      <span>${escapeHtml(row.id)}</span>
      <div>
        <strong>${escapeHtml(row.question)}</strong>
        <em>${escapeHtml(row.requirement)}</em>
      </div>
      <b>${escapeHtml(String(row.score))}</b>
    </div>
  `).join("");
}

function renderEvalGateList(rows) {
  return rows.map((row) => `
    <div class="eval-gate-row ${escapeAttr(row.status)}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.note)}</em>
      </div>
    </div>
  `).join("");
}

function renderEvalReviewQueue(rows) {
  if (!rows.length) {
    return `
      <div class="ops-empty">
        <strong>No review items queued</strong>
        <span>The current answer clears the configured evaluation gates.</span>
      </div>
    `;
  }
  return rows.map((row) => `
    <div class="eval-review-row">
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <span>${escapeHtml(row.note)}</span>
      </div>
      <b>${escapeHtml(row.priority)}</b>
    </div>
  `).join("");
}

function readEvalConfig() {
  return normalizeEvalConfig({
    caseCount: Number(els.evalCaseCount.value),
    passThreshold: Number(els.evalPassThreshold.value),
    minCitations: Number(els.evalMinCitations.value),
    reviewSample: Number(els.evalReviewSample.value),
    focus: els.evalFocus.value,
    regressionMode: els.evalRegressionMode.value
  });
}

function syncEvalInputs() {
  if (!els.evalCaseCount) return;
  const config = normalizeEvalConfig(state.evalConfig || getDefaultEvalConfig());
  els.evalCaseCount.value = String(config.caseCount);
  els.evalPassThreshold.value = String(config.passThreshold);
  els.evalMinCitations.value = String(config.minCitations);
  els.evalReviewSample.value = String(config.reviewSample);
  els.evalFocus.value = config.focus;
  els.evalRegressionMode.value = config.regressionMode;
}

function normalizeEvalConfig(config) {
  const defaults = getDefaultEvalConfig();
  return {
    caseCount: clampNumber(config.caseCount, 3, 100, defaults.caseCount),
    passThreshold: clampNumber(config.passThreshold, 50, 99, defaults.passThreshold),
    minCitations: clampNumber(config.minCitations, 1, 12, defaults.minCitations),
    reviewSample: clampNumber(config.reviewSample, 5, 100, defaults.reviewSample),
    focus: normalizeChoice(config.focus, ["Balanced", "Risk factors", "Valuation", "Earnings tone", "Portfolio workflow"], defaults.focus),
    regressionMode: normalizeChoice(config.regressionMode, ["Strict", "Standard", "Exploratory"], defaults.regressionMode)
  };
}

function getDefaultEvalConfig() {
  return {
    caseCount: 12,
    passThreshold: 82,
    minCitations: 3,
    reviewSample: 25,
    focus: "Balanced",
    regressionMode: "Strict"
  };
}

function loadEvalConfig() {
  return normalizeEvalConfig(loadJson(STORAGE_KEYS.eval, getDefaultEvalConfig()));
}

function saveEvalConfig() {
  saveJson(STORAGE_KEYS.eval, normalizeEvalConfig(state.evalConfig || getDefaultEvalConfig()));
}

function hydrateEvalFromCurrentAnswer() {
  const answer = state.lastAnswerModel || {};
  const focusByIntent = {
    risk: "Risk factors",
    valuation: "Valuation",
    rates: "Valuation",
    tone: "Earnings tone",
    compare: "Balanced"
  };
  state.evalConfig = normalizeEvalConfig({
    ...(state.evalConfig || getDefaultEvalConfig()),
    caseCount: Math.max(8, Math.min(24, (state.currentCitations.length || 3) * 2)),
    minCitations: Math.max(3, Math.min(6, state.currentCitations.length || 3)),
    focus: focusByIntent[answer.intentId] || "Balanced",
    regressionMode: "Strict"
  });
}

function makeLightSourceAudit(citations) {
  const docCount = new Set(citations.map((citation) => citation.docId)).size;
  const filingCount = citations.filter((citation) => /filing|10-k|10-q/i.test(citation.type)).length;
  const callCount = citations.filter((citation) => /call|q&a|prepared/i.test(`${citation.type} ${citation.section}`)).length;
  const quality = Math.max(40, Math.min(92, 46 + docCount * 8 + filingCount * 4 + callCount * 3));
  return {
    quality,
    coverageLabel: docCount >= 4 ? "Broad" : docCount >= 2 ? "Focused" : "Narrow",
    balance: `${filingCount} filing / ${callCount} call`
  };
}

function exportEvalBrief() {
  const snapshot = state.currentEval || buildEvalSnapshot();
  const date = new Date().toISOString().slice(0, 10);
  const content = [
    "# CiteAlpha Answer Quality Evaluation Brief",
    "",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    "## Configuration",
    "",
    `- Suite focus: ${snapshot.config.focus}`,
    `- Regression mode: ${snapshot.config.regressionMode}`,
    `- Cases: ${snapshot.config.caseCount}`,
    `- Pass threshold: ${snapshot.config.passThreshold}%`,
    `- Minimum citations: ${snapshot.config.minCitations}`,
    `- Human review sample: ${snapshot.config.reviewSample}%`,
    "",
    "## Quality Snapshot",
    "",
    `- Pass rate: ${snapshot.passRate}%`,
    `- Faithfulness: ${snapshot.faithfulness}%`,
    `- Hallucination risk: ${snapshot.hallucinationRisk}/100`,
    `- Gate score: ${snapshot.gateScore}%`,
    `- Citations checked: ${snapshot.citationCount}`,
    "",
    "## Regression Cases",
    "",
    ...snapshot.caseRows.map((row) => `- ${row.id} [${row.status.toUpperCase()} ${row.score}] ${row.question} - ${row.note}`),
    "",
    "## Quality Gates",
    "",
    ...snapshot.gateRows.map((row) => `- ${row.label}: ${row.title} - ${row.note}`),
    "",
    "## Human Review Queue",
    "",
    ...(snapshot.reviewRows.length ? snapshot.reviewRows.map((row) => `- ${row.priority}: ${row.title} - ${row.note}`) : ["- No review items queued."]),
    "",
    "## Launch Note",
    "",
    "This is a client-side product evaluation harness for pilot workflow design. Production should run deterministic evals server-side, persist run history, sample model outputs, and block paid-user answers that fail citation, security, or regression thresholds."
  ].join("\n");
  downloadTextFile(`citealpha-answer-quality-eval-${date}.md`, content, "text/markdown;charset=utf-8");
  flashButtonLabel(els.exportEvalBrief, "Exported");
}

function renderComplianceCenter() {
  if (!els.complianceMetricGrid) return;
  if (!state.complianceModel) state.complianceModel = loadComplianceModel();
  syncComplianceInputs();
  const snapshot = buildComplianceSnapshot();
  els.complianceMetricGrid.innerHTML = [
    { label: "Compliance score", value: `${snapshot.score}%`, sub: snapshot.score >= 82 ? "Publish gate looks credible" : "Needs review before launch" },
    { label: "Advice risk", value: `${snapshot.adviceRisk}/100`, sub: snapshot.adviceRisk <= 25 ? "Research-only language" : "Review wording" },
    { label: "Audit events", value: `${snapshot.auditRows.length}`, sub: `${snapshot.model.retention} policy` },
    { label: "Disclosure", value: snapshot.disclosureReady ? "Ready" : "Draft", sub: snapshot.model.disclosureVersion }
  ].map((metric) => `
    <div class="compliance-metric">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(String(metric.value))}</strong>
      <em>${escapeHtml(metric.sub)}</em>
    </div>
  `).join("");
  els.compliancePolicyScore.textContent = `${snapshot.policyScore}%`;
  els.compliancePolicyList.innerHTML = renderCompliancePolicyList(snapshot.policyRows);
  els.complianceAuditCount.textContent = String(snapshot.auditRows.length);
  els.complianceAuditTrail.innerHTML = renderComplianceAuditTrail(snapshot.auditRows);
  els.complianceDisclosureStatus.textContent = snapshot.disclosureReady ? "Ready" : "Draft";
  els.complianceDisclosurePack.innerHTML = renderComplianceDisclosurePack(snapshot.disclosureRows);
  renderTraceInspector();
}

function buildComplianceSnapshot() {
  const model = normalizeComplianceModel(state.complianceModel || getDefaultComplianceModel());
  const citations = state.currentCitations || [];
  const evalSnapshot = state.currentEval || (els.evalMetricGrid ? buildEvalSnapshot() : null);
  const security = summarizeSecurityPosture();
  const answerText = `${state.lastBrief || ""} ${state.lastAnswerModel ? state.lastAnswerModel.plainText : ""}`;
  const adviceFlags = findAdviceRiskFlags(answerText);
  const adviceRisk = scoreAdviceRisk(model, adviceFlags);
  const policyRows = buildCompliancePolicyRows(model, citations, evalSnapshot, security, adviceRisk, adviceFlags);
  const policyScore = scoreRows(policyRows);
  const auditRows = buildComplianceAuditRows(model, evalSnapshot, security);
  const disclosureRows = buildComplianceDisclosureRows(model, citations, security);
  const disclosureReady = disclosureRows.every((row) => row.status !== "blocked");
  const score = Math.round(policyScore * 0.5 + (100 - adviceRisk) * 0.25 + security.score * 0.15 + (disclosureReady ? 100 : 55) * 0.1);
  return {
    model,
    citations,
    evalSnapshot,
    security,
    adviceFlags,
    adviceRisk,
    policyRows,
    policyScore,
    auditRows,
    disclosureRows,
    disclosureReady,
    score
  };
}

function buildCompliancePolicyRows(model, citations, evalSnapshot, security, adviceRisk, adviceFlags) {
  const citationCount = citations.length;
  const evalScore = evalSnapshot ? evalSnapshot.gateScore : 0;
  const requiredCitations = model.requiredCitations;
  const hasDisclosure = Boolean(model.disclosureVersion && model.disclosureVersion.length >= 8);
  return [
    {
      label: hasDisclosure ? "Ready" : "Blocked",
      status: hasDisclosure ? "ready" : "blocked",
      title: "Disclosure version",
      note: hasDisclosure ? `${model.disclosureVersion} is attached to exports and audit packs.` : "Add a disclosure version before launch."
    },
    {
      label: citationCount >= requiredCitations ? "Ready" : "Blocked",
      status: citationCount >= requiredCitations ? "ready" : "blocked",
      title: "Citation minimum",
      note: `${citationCount}/${requiredCitations} citations available for the current answer.`
    },
    {
      label: adviceRisk <= 25 ? "Ready" : adviceRisk <= 45 ? "Next" : "Blocked",
      status: adviceRisk <= 25 ? "ready" : adviceRisk <= 45 ? "next" : "blocked",
      title: "Investment-advice wording",
      note: adviceFlags.length ? `Flagged: ${adviceFlags.slice(0, 3).join(", ")}.` : "No strong buy/sell/guarantee wording detected."
    },
    {
      label: evalScore >= 80 ? "Ready" : evalScore ? "Next" : "Blocked",
      status: evalScore >= 80 ? "ready" : evalScore ? "next" : "blocked",
      title: "Quality gate",
      note: evalSnapshot ? `Eval gate score is ${evalScore}%.` : "Run the answer quality suite before publish."
    },
    {
      label: security.score >= 90 ? "Ready" : "Next",
      status: security.score >= 90 ? "ready" : "next",
      title: "Security posture",
      note: `${security.score}/100 with ${security.findings.length} finding${security.findings.length === 1 ? "" : "s"}.`
    },
    {
      label: model.posture === "Advisor review" ? "Next" : "Ready",
      status: model.posture === "Advisor review" ? "next" : "ready",
      title: "Research posture",
      note: `${model.posture} selected. ${model.posture === "Research only" ? "Memo stays outside personalized advice." : "Add reviewer sign-off before publishing."}`
    }
  ];
}

function buildComplianceAuditRows(model, evalSnapshot, security) {
  const rows = [
    ...state.complianceEvents,
    ...state.workflowEvents.slice(-5).map((event) => normalizeComplianceEvent({
      kind: `Workflow: ${event.kind}`,
      detail: event.question || event.ticker || "Workspace event",
      timestamp: event.timestamp || new Date().toISOString()
    }))
  ];
  if (state.lastAnswerModel) {
    rows.push(normalizeComplianceEvent({
      kind: "Current answer",
      detail: `${state.lastAnswerModel.intentLabel || "Research"} answer with ${state.currentCitations.length} citation${state.currentCitations.length === 1 ? "" : "s"}.`,
      timestamp: new Date().toISOString()
    }));
  }
  if (evalSnapshot) {
    rows.push(normalizeComplianceEvent({
      kind: "Quality eval",
      detail: `${evalSnapshot.passRate}% pass rate, ${evalSnapshot.faithfulness}% faithfulness, ${evalSnapshot.hallucinationRisk}/100 hallucination risk.`,
      timestamp: new Date().toISOString()
    }));
  }
  rows.push(normalizeComplianceEvent({
    kind: "Security posture",
    detail: `${security.score}/100 security posture under ${model.retention}.`,
    timestamp: new Date().toISOString()
  }));
  return rows
    .sort((a, b) => String(b.timestamp).localeCompare(String(a.timestamp)))
    .slice(0, 9);
}

function buildComplianceDisclosureRows(model, citations, security) {
  const dataModes = Array.from(new Set(citations.map((citation) => getSourceKind(citation)))).map((kind) => kind === "sample" ? "sample" : kind).join(" + ") || "sample";
  return [
    {
      status: "ready",
      title: "Research software disclaimer",
      note: "CiteAlpha is research software, not investment advice."
    },
    {
      status: model.posture === "Research only" ? "ready" : "next",
      title: "No personalized recommendation",
      note: model.posture === "Research only" ? "Output is framed as evidence-backed research." : `${model.posture} requires sign-off controls.`
    },
    {
      status: citations.length ? "ready" : "blocked",
      title: "Source provenance",
      note: citations.length ? `${citations.length} cited passages from ${dataModes}.` : "No cited passages available."
    },
    {
      status: security.findings.length ? "next" : "ready",
      title: "Security disclosure",
      note: security.findings.length ? "Security findings should be reviewed before external sharing." : "Security scan clear for current local data."
    },
    {
      status: "ready",
      title: "Retention statement",
      note: model.retention === "Do not store" ? "Do not persist answer history after review." : `${model.retention}; browser-local prototype storage only.`
    }
  ];
}

function renderCompliancePolicyList(rows) {
  return rows.map((row) => `
    <div class="compliance-row ${escapeAttr(row.status)}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.note)}</em>
      </div>
    </div>
  `).join("");
}

function renderComplianceAuditTrail(rows) {
  return rows.map((row) => `
    <div class="compliance-audit-row">
      <div>
        <strong>${escapeHtml(row.kind)}</strong>
        <span>${escapeHtml(row.detail)}</span>
      </div>
      <b>${escapeHtml(formatShortDate(row.timestamp))}</b>
    </div>
  `).join("");
}

function renderComplianceDisclosurePack(rows) {
  return rows.map((row) => `
    <div class="compliance-disclosure-row ${escapeAttr(row.status)}">
      <span>${escapeHtml(row.status === "ready" ? "Ready" : row.status === "next" ? "Review" : "Block")}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.note)}</em>
      </div>
    </div>
  `).join("");
}

function readComplianceModel() {
  return normalizeComplianceModel({
    posture: els.compliancePosture.value,
    disclosureVersion: els.complianceDisclosure.value,
    requiredCitations: Number(els.complianceRequiredCitations.value),
    retention: els.complianceRetention.value,
    owner: els.complianceOwner.value,
    escalation: els.complianceEscalation.value
  });
}

function syncComplianceInputs() {
  if (!els.compliancePosture) return;
  const model = normalizeComplianceModel(state.complianceModel || getDefaultComplianceModel());
  els.compliancePosture.value = model.posture;
  els.complianceDisclosure.value = model.disclosureVersion;
  els.complianceRequiredCitations.value = String(model.requiredCitations);
  els.complianceRetention.value = model.retention;
  els.complianceOwner.value = model.owner;
  els.complianceEscalation.value = model.escalation;
}

function normalizeComplianceModel(model) {
  const defaults = getDefaultComplianceModel();
  return {
    posture: normalizeChoice(model.posture, ["Research only", "Advisor review", "Educational mode"], defaults.posture),
    disclosureVersion: String(model.disclosureVersion || defaults.disclosureVersion).slice(0, 60),
    requiredCitations: clampNumber(model.requiredCitations, 1, 12, defaults.requiredCitations),
    retention: normalizeChoice(model.retention, ["Local browser only", "30-day audit log", "Do not store"], defaults.retention),
    owner: String(model.owner || defaults.owner).slice(0, 80),
    escalation: normalizeChoice(model.escalation, ["Standard", "Heightened", "Block publish"], defaults.escalation)
  };
}

function getDefaultComplianceModel() {
  return {
    posture: "Research only",
    disclosureVersion: "CA-RESEARCH-2026.05",
    requiredCitations: 3,
    retention: "Local browser only",
    owner: "Founder review",
    escalation: "Standard"
  };
}

function loadComplianceModel() {
  return normalizeComplianceModel(loadJson(STORAGE_KEYS.compliance, getDefaultComplianceModel()));
}

function saveComplianceModel() {
  saveJson(STORAGE_KEYS.compliance, normalizeComplianceModel(state.complianceModel || getDefaultComplianceModel()));
}

function hydrateComplianceFromCurrentAnswer() {
  const citations = state.currentCitations || [];
  const evalSnapshot = state.currentEval || null;
  state.complianceModel = normalizeComplianceModel({
    ...(state.complianceModel || getDefaultComplianceModel()),
    requiredCitations: Math.max(3, Math.min(6, citations.length || 3)),
    escalation: evalSnapshot && evalSnapshot.hallucinationRisk > 28 ? "Heightened" : "Standard",
    posture: "Research only"
  });
}

function recordComplianceEvent(kind, detail) {
  const event = normalizeComplianceEvent({ kind, detail, timestamp: new Date().toISOString() });
  state.complianceEvents = [event, ...state.complianceEvents].slice(0, 24);
  saveJson(STORAGE_KEYS.complianceEvents, state.complianceEvents);
}

function normalizeComplianceEvent(event) {
  return {
    kind: String((event && event.kind) || "Audit event").slice(0, 80),
    detail: String((event && event.detail) || "Compliance activity recorded.").slice(0, 220),
    timestamp: String((event && event.timestamp) || new Date().toISOString())
  };
}

function findAdviceRiskFlags(text) {
  const value = String(text || "");
  const checks = [
    { label: "direct buy/sell wording", pattern: /\b(buy|sell|short|go long|go short)\b/i },
    { label: "guarantee language", pattern: /\b(guaranteed|certain|risk-free|cannot lose|sure thing)\b/i },
    { label: "personalized advice", pattern: /\b(for your portfolio|you should|you must|your financial situation)\b/i },
    { label: "price-target framing", pattern: /\b(price target|target price|will reach|must reach)\b/i }
  ];
  return checks.filter((check) => check.pattern.test(value)).map((check) => check.label);
}

function scoreAdviceRisk(model, flags) {
  let score = flags.length * 18;
  if (model.posture === "Advisor review") score += 12;
  if (model.escalation === "Heightened") score += 10;
  if (model.escalation === "Block publish") score += 28;
  return Math.max(0, Math.min(100, score));
}

function formatShortDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Now";
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

function exportComplianceBrief() {
  const snapshot = buildComplianceSnapshot();
  const date = new Date().toISOString().slice(0, 10);
  recordComplianceEvent("Audit export", `Compliance audit pack exported with ${snapshot.score}% score.`);
  const content = [
    "# CiteAlpha Compliance Audit Pack",
    "",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    "## Policy Configuration",
    "",
    `- Research posture: ${snapshot.model.posture}`,
    `- Disclosure version: ${snapshot.model.disclosureVersion}`,
    `- Required citations: ${snapshot.model.requiredCitations}`,
    `- Retention policy: ${snapshot.model.retention}`,
    `- Review owner: ${snapshot.model.owner}`,
    `- Escalation level: ${snapshot.model.escalation}`,
    "",
    "## Current Scorecard",
    "",
    `- Compliance score: ${snapshot.score}%`,
    `- Policy score: ${snapshot.policyScore}%`,
    `- Advice risk: ${snapshot.adviceRisk}/100`,
    `- Security posture: ${snapshot.security.score}/100`,
    `- Citations checked: ${snapshot.citations.length}`,
    "",
    "## Policy Checks",
    "",
    ...snapshot.policyRows.map((row) => `- ${row.label}: ${row.title} - ${row.note}`),
    "",
    "## Disclosure Pack",
    "",
    ...snapshot.disclosureRows.map((row) => `- ${row.status.toUpperCase()}: ${row.title} - ${row.note}`),
    "",
    "## Audit Trail",
    "",
    ...snapshot.auditRows.map((row) => `- ${row.timestamp}: ${row.kind} - ${row.detail}`),
    "",
    "## Compliance Note",
    "",
    "This client-side prototype is for product design and workflow testing. Before a paid launch, compliance controls should move server-side with authenticated users, immutable audit logs, legal-approved disclosures, role-based review, and jurisdiction-specific policy review."
  ].join("\n");
  downloadTextFile(`citealpha-compliance-audit-pack-${date}.md`, content, "text/markdown;charset=utf-8");
  renderComplianceCenter();
  flashButtonLabel(els.exportComplianceBrief, "Exported");
}

function renderTraceInspector() {
  if (!els.traceMetricGrid) return;
  if (!state.traceConfig) state.traceConfig = loadTraceConfig();
  syncTraceInputs();
  const snapshot = buildTraceSnapshot();
  state.currentTrace = snapshot;
  els.traceMetricGrid.innerHTML = [
    { label: "Trace score", value: `${snapshot.traceScore}%`, sub: snapshot.traceScore >= 82 ? "Claims are well anchored" : "Review support map" },
    { label: "Supported claims", value: `${snapshot.supportedClaims}/${snapshot.claimRows.length}`, sub: `${snapshot.config.mode} mode` },
    { label: "Weak claims", value: String(snapshot.weakRows.length), sub: `${snapshot.config.supportThreshold}% threshold` },
    { label: "Tension flags", value: String(snapshot.tensionRows.length), sub: snapshot.config.tensionFocus }
  ].map((metric) => `
    <div class="trace-metric">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(metric.value)}</strong>
      <em>${escapeHtml(metric.sub)}</em>
    </div>
  `).join("");
  els.traceClaimCount.textContent = `${snapshot.claimRows.length} claims`;
  els.traceClaimMap.innerHTML = renderTraceClaimMap(snapshot.claimRows);
  els.traceWeakCount.textContent = String(snapshot.weakRows.length);
  els.traceWeakClaims.innerHTML = renderTraceWeakClaims(snapshot.weakRows, snapshot.tensionRows);
  els.traceLineageCount.textContent = String(snapshot.lineageRows.length);
  els.traceSourceLineage.innerHTML = renderTraceSourceLineage(snapshot.lineageRows);
  renderPeerScreener();
}

function buildTraceSnapshot() {
  const config = normalizeTraceConfig(state.traceConfig || getDefaultTraceConfig());
  const citations = state.currentCitations || [];
  const answerText = getTraceAnswerText();
  const claimRows = extractAnswerClaims(answerText, config.claimLimit).map((claim, index) => scoreTraceClaim(claim, index, citations, config));
  const supportedClaims = claimRows.filter((row) => row.status === "supported").length;
  const weakRows = claimRows.filter((row) => row.status !== "supported");
  const tensionRows = buildTraceTensions(citations, config, claimRows);
  const lineageRows = buildTraceLineageRows(citations, claimRows);
  const avgSupport = claimRows.length
    ? Math.round(claimRows.reduce((sum, row) => sum + row.support, 0) / claimRows.length)
    : 0;
  const traceScore = Math.max(0, Math.min(100, Math.round(
    avgSupport * 0.55 +
    (claimRows.length ? (supportedClaims / claimRows.length) * 100 : 0) * 0.25 +
    Math.min(100, citations.length * 18) * 0.12 +
    Math.max(0, 100 - tensionRows.length * 18) * 0.08
  )));
  return {
    config,
    answerText,
    citations,
    claimRows,
    supportedClaims,
    weakRows,
    tensionRows,
    lineageRows,
    avgSupport,
    traceScore
  };
}

function getTraceAnswerText() {
  const model = state.lastAnswerModel || {};
  const text = model.plainText || state.lastBrief || "";
  if (text.trim()) return stripMarkdown(text);
  const question = els.queryInput && els.queryInput.value.trim() ? els.queryInput.value.trim() : "Run an analysis to create traceable answer claims.";
  return `Pending answer for: ${question}`;
}

function extractAnswerClaims(text, limit) {
  const raw = String(text || "")
    .replace(/\bC\d+\b/g, "")
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?])\s+|\n+/)
    .map(cleanTraceClaim)
    .filter(Boolean);
  const filtered = raw.filter((sentence) => {
    if (sentence.length < 34) return false;
    if (/^(generated|source audit|data source|analyst copilot|follow-ups|management tone|evidence stack|risk factors?\s*\|)/i.test(sentence)) return false;
    return /risk|margin|growth|valuation|management|filing|call|source|cash|revenue|debt|customer|supply|confidence|answer|company|rate|pricing|capex|demand/i.test(sentence);
  });
  const claims = filtered.length ? filtered : raw;
  return Array.from(new Set(claims)).slice(0, limit);
}

function cleanTraceClaim(value) {
  return String(value || "")
    .replace(/^\s*[-*\d.)]+/, "")
    .replace(/\[[^\]]+\]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function scoreTraceClaim(claim, index, citations, config) {
  const claimTokens = tokenizeTraceText(claim);
  const scored = citations.map((citation, citationIndex) => {
    const sourceTokens = tokenizeTraceText(`${citation.company} ${citation.type} ${citation.section} ${citation.text}`);
    const overlap = claimTokens.filter((token) => sourceTokens.includes(token));
    const overlapRatio = overlap.length / Math.max(1, Math.min(claimTokens.length, 16));
    const typeBonus = scoreTraceTypeBonus(claim, citation);
    const score = Math.max(0, Math.min(99, Math.round(
      overlapRatio * 72 +
      overlap.length * 4 +
      Math.min(14, (Number(citation.score) || 0) * 0.45) +
      typeBonus
    )));
    return {
      citation,
      citationIndex,
      overlap: Array.from(new Set(overlap)).slice(0, 8),
      score
    };
  }).sort((a, b) => b.score - a.score);
  const best = scored[0] || null;
  const support = best ? best.score : 0;
  const overlapCount = best ? best.overlap.length : 0;
  const status = support >= config.supportThreshold && overlapCount >= config.minOverlap
    ? "supported"
    : support >= config.supportThreshold - 18 && overlapCount >= Math.max(1, config.minOverlap - 1)
      ? "review"
      : "weak";
  return {
    id: `CL${index + 1}`,
    claim,
    type: classifyTraceClaim(claim),
    support,
    status,
    overlap: best ? best.overlap : [],
    citationId: best && best.citation ? (best.citation.citationId || `C${best.citationIndex + 1}`) : "None",
    source: best && best.citation ? `${best.citation.company} ${best.citation.type}` : "No source",
    section: best && best.citation ? best.citation.section : "No matching passage",
    sourceText: best && best.citation ? best.citation.text : ""
  };
}

function tokenizeTraceText(text) {
  return Array.from(new Set(String(text || "")
    .toLowerCase()
    .replace(/[^a-z0-9$% ]+/g, " ")
    .split(/\s+/)
    .filter((token) => token.length > 2 && !STOP_WORDS.has(token))));
}

function scoreTraceTypeBonus(claim, citation) {
  const claimType = classifyTraceClaim(claim);
  const source = `${citation.type || ""} ${citation.section || ""}`.toLowerCase();
  if (claimType === "Risk" && /risk|10-k|filing/.test(source)) return 12;
  if (claimType === "Valuation" && /model|valuation|base case/.test(source)) return 12;
  if (claimType === "Tone" && /call|q&a|prepared|management/.test(source)) return 12;
  if (claimType === "Evidence" && /filing|call|model|note/.test(source)) return 8;
  return 3;
}

function classifyTraceClaim(claim) {
  const text = String(claim || "").toLowerCase();
  if (/risk|concentration|supply|debt|financing|capex|pressure|delay/.test(text)) return "Risk";
  if (/valuation|value|multiple|fcf|margin|discount|revenue|growth/.test(text)) return "Valuation";
  if (/management|call|tone|guidance|confident|said/.test(text)) return "Tone";
  if (/source|filing|evidence|citation|passage/.test(text)) return "Evidence";
  return "Thesis";
}

function buildTraceTensions(citations, config, claimRows) {
  const rows = [];
  const filing = citations.find((citation) => /filing|10-k|10-q/i.test(citation.type));
  const call = citations.find((citation) => /call|q&a|prepared/i.test(`${citation.type} ${citation.section}`));
  const model = citations.find((citation) => /model|valuation/i.test(citation.type));
  if (config.tensionFocus === "Filing vs call" && filing && call) {
    const filingTone = scoreTracePolarity(filing.text);
    const callTone = scoreTracePolarity(call.text);
    if (Math.abs(filingTone - callTone) >= 2 || claimRows.some((row) => row.type === "Tone" && row.status !== "supported")) {
      rows.push({
        title: "Filing-call tone gap",
        note: `Filing polarity ${filingTone}, call polarity ${callTone}. Review whether management tone fully confirms disclosure language.`,
        severity: Math.abs(filingTone - callTone) >= 3 ? "High" : "Medium"
      });
    }
  }
  if (config.tensionFocus === "Risk vs valuation" && filing && model) {
    const riskWords = tokenizeTraceText(filing.text).filter((token) => /risk|debt|financ|customer|supply|delay|cost|capex|pressure/.test(token)).length;
    const valueWords = tokenizeTraceText(model.text).filter((token) => /growth|margin|multiple|value|cash|revenue|fcf/.test(token)).length;
    if (riskWords && valueWords) {
      rows.push({
        title: "Risk-value reconciliation",
        note: `Risk source has ${riskWords} pressure terms while model source has ${valueWords} value terms. IC memo should reconcile both.`,
        severity: riskWords > valueWords ? "High" : "Medium"
      });
    }
  }
  if (config.tensionFocus === "Tone drift" && call) {
    const weakToneClaims = claimRows.filter((row) => row.type === "Tone" && row.status !== "supported");
    if (weakToneClaims.length || scoreTracePolarity(call.text) < 0) {
      rows.push({
        title: "Tone drift watch",
        note: weakToneClaims.length ? `${weakToneClaims.length} tone claim${weakToneClaims.length === 1 ? "" : "s"} need stronger call support.` : "Call text leans cautious; check optimistic answer language.",
        severity: weakToneClaims.length > 1 ? "High" : "Medium"
      });
    }
  }
  if (!rows.length && claimRows.some((row) => row.status === "weak")) {
    rows.push({
      title: "Unsupported-claim tension",
      note: "At least one claim has weak source overlap; review wording before external export.",
      severity: "Medium"
    });
  }
  return rows.slice(0, 5);
}

function scoreTracePolarity(text) {
  const value = String(text || "").toLowerCase();
  const positive = (value.match(/\b(growth|expanded|strong|improved|resilient|protecting|net cash|pricing|demand|conversion)\b/g) || []).length;
  const negative = (value.match(/\b(risk|decline|pressure|delay|debt|weak|volatile|concentration|financing|cost|shrink)\b/g) || []).length;
  return Math.max(-5, Math.min(5, positive - negative));
}

function buildTraceLineageRows(citations, claimRows) {
  return citations.slice(0, 8).map((citation, index) => {
    const citationId = citation.citationId || `C${index + 1}`;
    const linkedClaims = claimRows.filter((row) => row.citationId === citationId);
    return {
      id: citationId,
      source: `${citation.company} ${citation.type}`,
      section: citation.section,
      score: Number(citation.score) || 0,
      kind: getSourceKind(citation),
      claimCount: linkedClaims.length,
      text: citation.text
    };
  });
}

function renderTraceClaimMap(rows) {
  if (!rows.length) {
    return `
      <div class="ops-empty">
        <strong>No answer claims yet</strong>
        <span>Run an analysis, then run trace to map claims back to source passages.</span>
      </div>
    `;
  }
  return rows.map((row) => `
    <div class="trace-claim-row ${escapeAttr(row.status)}">
      <span>${escapeHtml(row.id)}</span>
      <div>
        <strong>${escapeHtml(row.claim)}</strong>
        <em>${escapeHtml(row.type)} | ${escapeHtml(row.source)} | ${escapeHtml(row.citationId)} | overlap: ${escapeHtml(row.overlap.join(", ") || "none")}</em>
      </div>
      <b>${escapeHtml(String(row.support))}</b>
    </div>
  `).join("");
}

function renderTraceWeakClaims(weakRows, tensionRows) {
  const rows = [
    ...weakRows.map((row) => ({
      title: `${row.id} ${row.status === "weak" ? "weak support" : "review support"}`,
      note: `${row.claim} Best source: ${row.citationId}.`,
      severity: row.status === "weak" ? "High" : "Medium"
    })),
    ...tensionRows
  ].slice(0, 8);
  if (!rows.length) {
    return `
      <div class="ops-empty">
        <strong>No weak claims detected</strong>
        <span>Current claim map clears the configured support threshold.</span>
      </div>
    `;
  }
  return rows.map((row) => `
    <div class="trace-weak-row">
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <span>${escapeHtml(row.note)}</span>
      </div>
      <b>${escapeHtml(row.severity)}</b>
    </div>
  `).join("");
}

function renderTraceSourceLineage(rows) {
  if (!rows.length) {
    return `
      <div class="ops-empty">
        <strong>No source lineage yet</strong>
        <span>Run a cited analysis to populate source-to-claim lineage.</span>
      </div>
    `;
  }
  return rows.map((row) => `
    <div class="trace-lineage-row">
      <span>${escapeHtml(row.id)}</span>
      <div>
        <strong>${escapeHtml(row.source)}</strong>
        <em>${escapeHtml(row.section)} | ${escapeHtml(row.kind)} | ${row.claimCount} linked claim${row.claimCount === 1 ? "" : "s"} | score ${escapeHtml(String(row.score))}</em>
        <small>${escapeHtml(snippet(row.text, 140))}</small>
      </div>
    </div>
  `).join("");
}

function readTraceConfig() {
  return normalizeTraceConfig({
    claimLimit: Number(els.traceClaimLimit.value),
    supportThreshold: Number(els.traceSupportThreshold.value),
    minOverlap: Number(els.traceMinOverlap.value),
    mode: els.traceMode.value,
    tensionFocus: els.traceTensionFocus.value
  });
}

function syncTraceInputs() {
  if (!els.traceClaimLimit) return;
  const config = normalizeTraceConfig(state.traceConfig || getDefaultTraceConfig());
  els.traceClaimLimit.value = String(config.claimLimit);
  els.traceSupportThreshold.value = String(config.supportThreshold);
  els.traceMinOverlap.value = String(config.minOverlap);
  els.traceMode.value = config.mode;
  els.traceTensionFocus.value = config.tensionFocus;
}

function normalizeTraceConfig(config) {
  const defaults = getDefaultTraceConfig();
  return {
    claimLimit: clampNumber(config.claimLimit, 3, 20, defaults.claimLimit),
    supportThreshold: clampNumber(config.supportThreshold, 35, 95, defaults.supportThreshold),
    minOverlap: clampNumber(config.minOverlap, 1, 8, defaults.minOverlap),
    mode: normalizeChoice(config.mode, ["Strict", "Balanced", "Fast scan"], defaults.mode),
    tensionFocus: normalizeChoice(config.tensionFocus, ["Filing vs call", "Risk vs valuation", "Tone drift"], defaults.tensionFocus)
  };
}

function getDefaultTraceConfig() {
  return {
    claimLimit: 8,
    supportThreshold: 62,
    minOverlap: 2,
    mode: "Strict",
    tensionFocus: "Filing vs call"
  };
}

function loadTraceConfig() {
  return normalizeTraceConfig(loadJson(STORAGE_KEYS.trace, getDefaultTraceConfig()));
}

function saveTraceConfig() {
  saveJson(STORAGE_KEYS.trace, normalizeTraceConfig(state.traceConfig || getDefaultTraceConfig()));
}

function hydrateTraceFromCurrentAnswer() {
  const model = state.lastAnswerModel || {};
  state.traceConfig = normalizeTraceConfig({
    ...(state.traceConfig || getDefaultTraceConfig()),
    claimLimit: Math.max(5, Math.min(12, extractAnswerClaims(getTraceAnswerText(), 20).length || 8)),
    supportThreshold: model.intentId === "risk" ? 68 : 62,
    minOverlap: state.currentCitations.length >= 4 ? 2 : 1,
    mode: "Strict",
    tensionFocus: model.intentId === "risk" ? "Risk vs valuation" : "Filing vs call"
  });
}

function exportTracePack() {
  const snapshot = state.currentTrace || buildTraceSnapshot();
  const date = new Date().toISOString().slice(0, 10);
  const content = [
    "# CiteAlpha Evidence Trace Pack",
    "",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    "## Trace Configuration",
    "",
    `- Claim limit: ${snapshot.config.claimLimit}`,
    `- Support threshold: ${snapshot.config.supportThreshold}%`,
    `- Minimum term overlap: ${snapshot.config.minOverlap}`,
    `- Trace mode: ${snapshot.config.mode}`,
    `- Tension focus: ${snapshot.config.tensionFocus}`,
    "",
    "## Trace Scorecard",
    "",
    `- Trace score: ${snapshot.traceScore}%`,
    `- Average support: ${snapshot.avgSupport}%`,
    `- Supported claims: ${snapshot.supportedClaims}/${snapshot.claimRows.length}`,
    `- Weak claims: ${snapshot.weakRows.length}`,
    `- Tension flags: ${snapshot.tensionRows.length}`,
    "",
    "## Claim Map",
    "",
    ...snapshot.claimRows.map((row) => `- ${row.id} [${row.status.toUpperCase()} ${row.support}] ${row.claim} | ${row.citationId} ${row.source} | overlap: ${row.overlap.join(", ") || "none"}`),
    "",
    "## Tension Flags",
    "",
    ...(snapshot.tensionRows.length ? snapshot.tensionRows.map((row) => `- ${row.severity}: ${row.title} - ${row.note}`) : ["- No source tension flags detected."]),
    "",
    "## Source Lineage",
    "",
    ...snapshot.lineageRows.map((row) => `- ${row.id}: ${row.source} | ${row.section} | ${row.claimCount} linked claim${row.claimCount === 1 ? "" : "s"} | score ${row.score}`),
    "",
    "## Product Note",
    "",
    "This trace pack is a product-side explainability aid. Production should persist immutable claim-to-source mappings, model prompts, retrieval parameters, document versions, and reviewer decisions for auditability."
  ].join("\n");
  downloadTextFile(`citealpha-evidence-trace-pack-${date}.md`, content, "text/markdown;charset=utf-8");
  flashButtonLabel(els.exportTracePack, "Exported");
}

function renderPeerScreener() {
  if (!els.peerMetricGrid) return;
  if (!state.peerConfig) state.peerConfig = loadPeerConfig();
  syncPeerInputs();
  const snapshot = buildPeerSnapshot();
  state.currentPeer = snapshot;
  const benchmarkGap = snapshot.targetRow && snapshot.benchmarkRow ? snapshot.targetRow.score - snapshot.benchmarkRow.score : 0;
  els.peerMetricGrid.innerHTML = [
    { label: "Screen leader", value: snapshot.leader ? snapshot.leader.ticker : "None", sub: snapshot.leader ? `${snapshot.leader.score}/100 ${snapshot.config.factor}` : "Add peer names" },
    { label: "Target rank", value: snapshot.targetRow ? `#${snapshot.targetRow.rank}` : "-", sub: `${snapshot.rows.length} names screened` },
    { label: "Benchmark peer", value: snapshot.benchmarkRow ? snapshot.benchmarkRow.ticker : "Peer group", sub: snapshot.benchmarkRow ? `${benchmarkGap >= 0 ? "+" : ""}${benchmarkGap} target score gap` : "No peer comparison" },
    { label: "Evidence hits", value: String(snapshot.totalEvidence), sub: `${snapshot.config.evidenceMode} mode` }
  ].map((metric) => `
    <div class="peer-metric">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(String(metric.value))}</strong>
      <em>${escapeHtml(metric.sub)}</em>
    </div>
  `).join("");
  els.peerRankingCount.textContent = `${snapshot.rows.length} names`;
  els.peerRankingList.innerHTML = renderPeerRankingList(snapshot.rows, snapshot.config.target);
  els.peerGapCount.textContent = String(snapshot.gapRows.length);
  els.peerGapList.innerHTML = renderPeerGapList(snapshot.gapRows);
  els.peerQuestionCount.textContent = String(snapshot.questionRows.length);
  els.peerQuestionQueue.innerHTML = renderPeerQuestionQueue(snapshot.questionRows);
  renderStressLab();
}

function buildPeerSnapshot() {
  const config = normalizePeerConfig(state.peerConfig || getDefaultPeerConfig());
  const companies = resolvePeerCompanies(config);
  const evidenceMap = buildPeerEvidenceMap(config);
  const rows = companies.map((company) => scorePeerCompany(company, config, evidenceMap)).sort((a, b) => b.score - a.score);
  rows.forEach((row, index) => {
    row.rank = index + 1;
  });
  const targetRow = rows.find((row) => row.ticker === config.target) || rows[0] || null;
  const leader = rows[0] || null;
  const benchmarkRow = pickPeerBenchmarkRow(targetRow, rows);
  const gapRows = buildPeerGapRows(targetRow, benchmarkRow, config);
  const questionRows = buildPeerQuestionRows(targetRow, benchmarkRow, gapRows, config);
  const totalEvidence = rows.reduce((sum, row) => sum + row.evidenceHits, 0);
  return {
    config,
    companies,
    rows,
    targetRow,
    leader,
    benchmarkRow,
    gapRows,
    questionRows,
    totalEvidence
  };
}

function pickPeerBenchmarkRow(targetRow, rows) {
  if (!targetRow) return rows[0] || null;
  return rows.find((row) => row.ticker !== targetRow.ticker) || null;
}

function resolvePeerCompanies(config) {
  const tickers = Array.from(new Set([
    config.target,
    ...String(config.peerBasket || "").split(/[,;\s]+/).map(normalizeTicker).filter((ticker) => ticker && ticker !== "CUSTOM")
  ]));
  const companies = tickers.map(resolvePeerCompany).filter(Boolean);
  return companies.length ? companies : SAMPLE_COMPANIES.map((company) => normalizePeerCompany(company));
}

function resolvePeerCompany(ticker) {
  const normalized = normalizeTicker(ticker);
  const existing = getCompanies().find((company) => company.ticker === normalized);
  if (existing) return normalizePeerCompany(existing);
  return normalizePeerCompany(resolvePortfolioCompany(normalized));
}

function normalizePeerCompany(company) {
  const fallback = SAMPLE_COMPANIES[0];
  const growth = clampNumber(company.growth, -30, 80, fallback.growth);
  const grossMargin = clampNumber(company.grossMargin, 0, 90, company.fcfMargin ? company.fcfMargin * 2 : fallback.grossMargin);
  const opMargin = clampNumber(company.opMargin, -20, 60, company.fcfMargin ? company.fcfMargin * 1.6 : fallback.opMargin);
  const fcfMargin = clampNumber(company.fcfMargin, -20, 50, fallback.fcfMargin);
  const risk = clampNumber(company.risk, 1, 99, fallback.risk);
  const sentiment = clampNumber(company.sentiment, 1, 99, fallback.sentiment);
  const multiple = clampNumber(company.multiple, 1, 80, fallback.multiple);
  return {
    ...company,
    ticker: normalizeTicker(company.ticker),
    name: company.name || `${normalizeTicker(company.ticker)} coverage name`,
    sector: company.sector || "Coverage",
    revenue: Number(company.revenue) || fallback.revenue,
    growth,
    grossMargin,
    opMargin,
    fcfMargin,
    risk,
    sentiment,
    multiple,
    thesis: company.thesis || "Peer profile awaiting normalized thesis."
  };
}

function buildPeerEvidenceMap(config) {
  const map = new Map();
  const add = (ticker, count = 1) => {
    const normalized = normalizeTicker(ticker);
    map.set(normalized, (map.get(normalized) || 0) + count);
  };
  if (config.evidenceMode === "Cited answer") {
    state.currentCitations.forEach((citation) => add(citation.ticker));
  } else if (config.evidenceMode === "Enabled docs") {
    getEnabledDocs().forEach((doc) => add(doc.ticker));
  } else {
    getCompanies().forEach((company) => {
      const sourceCount = state.documents.filter((doc) => doc.ticker === company.ticker).length;
      add(company.ticker, Math.max(1, sourceCount));
    });
  }
  return map;
}

function scorePeerCompany(company, config, evidenceMap) {
  const evidenceHits = evidenceMap.get(company.ticker) || 0;
  const qualityGrowth = company.growth * 1.15 + company.opMargin * 0.75 + company.fcfMargin * 1.05 + company.sentiment * 0.22;
  const marginDurability = company.grossMargin * 0.35 + company.opMargin * 1.05 + company.fcfMargin * 1.3 + company.sentiment * 0.18;
  const riskAdjustedValue = company.growth * 0.85 + company.fcfMargin * 1.2 + company.sentiment * 0.24 - company.multiple * (config.valuationWeight / 18);
  const toneScore = company.sentiment * 0.8 + company.opMargin * 0.35 + company.growth * 0.25;
  const baseByFactor = {
    "Quality growth": qualityGrowth,
    "Margin durability": marginDurability,
    "Risk-adjusted value": riskAdjustedValue,
    "Management tone": toneScore
  };
  const base = baseByFactor[config.factor] || qualityGrowth;
  const evidenceBonus = Math.min(8, evidenceHits * 1.7);
  const riskPenalty = company.risk * (config.riskPenalty / 100);
  const score = Math.max(8, Math.min(99, Math.round(base * 0.82 - riskPenalty + evidenceBonus)));
  const valuationGap = Math.round((company.growth + company.fcfMargin) - company.multiple);
  return {
    ...company,
    score,
    evidenceHits,
    valuationGap,
    qualityGrowth: Math.round(qualityGrowth),
    marginDurability: Math.round(marginDurability),
    riskAdjustedValue: Math.round(riskAdjustedValue),
    toneScore: Math.round(toneScore),
    reason: makePeerReason(company, config, score, evidenceHits, valuationGap)
  };
}

function makePeerReason(company, config, score, evidenceHits, valuationGap) {
  if (config.factor === "Risk-adjusted value") {
    return `${company.multiple}x multiple, ${company.fcfMargin}% FCF margin, ${company.risk}/100 risk, ${valuationGap >= 0 ? "positive" : "negative"} value spread.`;
  }
  if (config.factor === "Margin durability") {
    return `${company.grossMargin}% gross margin, ${company.opMargin}% operating margin, ${company.fcfMargin}% FCF margin.`;
  }
  if (config.factor === "Management tone") {
    return `${company.sentiment}/100 sentiment with ${evidenceHits} evidence hit${evidenceHits === 1 ? "" : "s"}.`;
  }
  return `${company.growth}% growth, ${company.opMargin}% operating margin, ${score}/100 factor score.`;
}

function buildPeerGapRows(targetRow, benchmarkRow, config) {
  if (!targetRow) return [];
  if (!benchmarkRow || benchmarkRow.ticker === targetRow.ticker) return [];
  const metrics = [
    { label: "Growth", key: "growth", unit: "%", better: "higher" },
    { label: "Operating margin", key: "opMargin", unit: "%", better: "higher" },
    { label: "FCF margin", key: "fcfMargin", unit: "%", better: "higher" },
    { label: "Risk index", key: "risk", unit: "", better: "lower" },
    { label: "Sentiment", key: "sentiment", unit: "/100", better: "higher" },
    { label: "Terminal multiple", key: "multiple", unit: "x", better: "lower" }
  ];
  return metrics.map((metric) => {
    const targetValue = Number(targetRow[metric.key]) || 0;
    const benchmarkValue = Number(benchmarkRow[metric.key]) || 0;
    const rawGap = benchmarkValue - targetValue;
    const advantage = metric.better === "lower" ? -rawGap : rawGap;
    return {
      label: metric.label,
      target: `${targetValue}${metric.unit}`,
      benchmark: `${benchmarkValue}${metric.unit}`,
      gap: Math.round(rawGap),
      status: advantage > 4 ? "lag" : advantage < -4 ? "lead" : "even",
      note: makePeerGapNote(metric, targetRow, benchmarkRow, advantage, config)
    };
  }).sort((a, b) => {
    const severity = { lag: 2, even: 1, lead: 0 };
    return severity[b.status] - severity[a.status] || Math.abs(b.gap) - Math.abs(a.gap);
  }).slice(0, 5);
}

function makePeerGapNote(metric, targetRow, benchmarkRow, advantage, config) {
  if (advantage > 4) return `${targetRow.ticker} trails ${benchmarkRow.ticker} on ${metric.label.toLowerCase()} for the ${config.factor.toLowerCase()} screen.`;
  if (advantage < -4) return `${targetRow.ticker} leads ${benchmarkRow.ticker} on ${metric.label.toLowerCase()}.`;
  return `${targetRow.ticker} is broadly in line with ${benchmarkRow.ticker} on ${metric.label.toLowerCase()}.`;
}

function buildPeerQuestionRows(targetRow, benchmarkRow, gapRows, config) {
  if (!targetRow) return [];
  const benchmarkPhrase = benchmarkRow && benchmarkRow.ticker !== targetRow.ticker ? `$${benchmarkRow.ticker}` : "the peer group";
  const rows = [
    {
      topic: "Main gap",
      question: gapRows[0]
        ? makePeerGapQuestion(targetRow, benchmarkPhrase, gapRows[0])
        : `What is the strongest source-backed reason to prefer $${targetRow.ticker} over peers?`
    },
    {
      topic: "Evidence test",
      question: `Which filing or call passages best support $${targetRow.ticker}'s ${config.factor.toLowerCase()} thesis versus ${benchmarkPhrase}?`
    },
    {
      topic: "Risk check",
      question: `What risks could make $${targetRow.ticker}'s peer screen score deteriorate first?`
    },
    {
      topic: "Valuation spread",
      question: `Is $${targetRow.ticker}'s valuation spread justified by growth, margin quality, and risk versus ${benchmarkPhrase}?`
    }
  ];
  if (targetRow.evidenceHits < 2) {
    rows.unshift({
      topic: "Source gap",
      question: `What filings or earnings call sections should I import before trusting the $${targetRow.ticker} peer screen?`
    });
  }
  return rows.slice(0, 5);
}

function makePeerGapQuestion(targetRow, benchmarkPhrase, gapRow) {
  const label = gapRow.label.toLowerCase();
  if (gapRow.status === "lag") return `Why does $${targetRow.ticker} trail ${benchmarkPhrase} on ${label}?`;
  if (gapRow.status === "lead") return `Why does $${targetRow.ticker} lead ${benchmarkPhrase} on ${label}?`;
  return `What source detail explains why $${targetRow.ticker} is in line with ${benchmarkPhrase} on ${label}?`;
}

function renderPeerRankingList(rows, target) {
  if (!rows.length) {
    return `
      <div class="ops-empty">
        <strong>No peer set available</strong>
        <span>Add tickers to the peer basket, then run the screen.</span>
      </div>
    `;
  }
  return rows.map((row) => `
    <div class="peer-rank-row ${row.ticker === target ? "is-target" : ""}">
      <span>#${escapeHtml(String(row.rank))}</span>
      <div>
        <strong>${escapeHtml(row.ticker)} - ${escapeHtml(row.name)}</strong>
        <em>${escapeHtml(row.reason)}</em>
      </div>
      <b>${escapeHtml(String(row.score))}</b>
    </div>
  `).join("");
}

function renderPeerGapList(rows) {
  if (!rows.length) {
    return `
      <div class="ops-empty">
        <strong>No factor gaps yet</strong>
        <span>Run a peer screen to compare target metrics against the leader.</span>
      </div>
    `;
  }
  return rows.map((row) => `
    <div class="peer-gap-row ${escapeAttr(row.status)}">
      <span>${escapeHtml(row.status === "lag" ? "Gap" : row.status === "lead" ? "Lead" : "Even")}</span>
      <div>
        <strong>${escapeHtml(row.label)}: ${escapeHtml(row.target)} vs ${escapeHtml(row.benchmark)}</strong>
        <em>${escapeHtml(row.note)}</em>
      </div>
    </div>
  `).join("");
}

function renderPeerQuestionQueue(rows) {
  if (!rows.length) {
    return `
      <div class="ops-empty">
        <strong>No diligence questions yet</strong>
        <span>Run a peer screen to generate the next research queue.</span>
      </div>
    `;
  }
  return rows.map((row) => `
    <button class="peer-question-row" type="button" data-peer-question="${escapeAttr(row.question)}">
      <span>${escapeHtml(row.topic)}</span>
      <strong>${escapeHtml(row.question)}</strong>
    </button>
  `).join("");
}

function readPeerConfig() {
  return normalizePeerConfig({
    target: els.peerTarget.value,
    peerBasket: els.peerBasket.value,
    factor: els.peerFactor.value,
    riskPenalty: Number(els.peerRiskPenalty.value),
    valuationWeight: Number(els.peerValuationWeight.value),
    evidenceMode: els.peerEvidenceMode.value
  });
}

function syncPeerInputs() {
  if (!els.peerTarget) return;
  syncPeerTargetOptions();
  const config = normalizePeerConfig(state.peerConfig || getDefaultPeerConfig());
  els.peerTarget.value = config.target;
  els.peerBasket.value = config.peerBasket;
  els.peerFactor.value = config.factor;
  els.peerRiskPenalty.value = String(config.riskPenalty);
  els.peerValuationWeight.value = String(config.valuationWeight);
  els.peerEvidenceMode.value = config.evidenceMode;
}

function syncPeerTargetOptions() {
  if (!els.peerTarget) return;
  const companies = getCompanies();
  const selected = normalizeTicker((state.peerConfig && state.peerConfig.target) || "NSCP");
  const options = companies.map((company) => company.ticker);
  if (!options.includes(selected)) options.unshift(selected);
  els.peerTarget.innerHTML = Array.from(new Set(options)).map((ticker) => {
    const company = getCompany(ticker) || { name: ticker };
    return `<option value="${escapeAttr(ticker)}">${escapeHtml(ticker)} - ${escapeHtml(company.name)}</option>`;
  }).join("");
}

function normalizePeerConfig(config) {
  const defaults = getDefaultPeerConfig();
  return {
    target: normalizeTicker(config.target || defaults.target),
    peerBasket: String(config.peerBasket || defaults.peerBasket).slice(0, 120),
    factor: normalizeChoice(config.factor, ["Quality growth", "Margin durability", "Risk-adjusted value", "Management tone"], defaults.factor),
    riskPenalty: clampNumber(config.riskPenalty, 0, 60, defaults.riskPenalty),
    valuationWeight: clampNumber(config.valuationWeight, 0, 60, defaults.valuationWeight),
    evidenceMode: normalizeChoice(config.evidenceMode, ["Cited answer", "Enabled docs", "All coverage"], defaults.evidenceMode)
  };
}

function getDefaultPeerConfig() {
  return {
    target: "NSCP",
    peerBasket: "NSCP, AURR, HLGD",
    factor: "Quality growth",
    riskPenalty: 24,
    valuationWeight: 18,
    evidenceMode: "Cited answer"
  };
}

function loadPeerConfig() {
  return normalizePeerConfig(loadJson(STORAGE_KEYS.peer, getDefaultPeerConfig()));
}

function savePeerConfig() {
  saveJson(STORAGE_KEYS.peer, normalizePeerConfig(state.peerConfig || getDefaultPeerConfig()));
}

function hydratePeerFromCurrentFocus() {
  const focus = state.tickerFocus || resolveTickerFocus(els.queryInput?.value || "") || null;
  const target = focus ? focus.ticker : (state.currentCitations[0] ? state.currentCitations[0].ticker : state.selectedTicker);
  const citedTickers = Array.from(new Set(state.currentCitations.map((citation) => citation.ticker)));
  const basket = citedTickers.length >= 2 ? citedTickers : SAMPLE_COMPANIES.map((company) => company.ticker);
  state.peerConfig = normalizePeerConfig({
    ...(state.peerConfig || getDefaultPeerConfig()),
    target,
    peerBasket: Array.from(new Set([target, ...basket])).join(", "),
    factor: state.lastAnswerModel && state.lastAnswerModel.intentId === "risk" ? "Risk-adjusted value" : "Quality growth",
    evidenceMode: state.currentCitations.length ? "Cited answer" : "Enabled docs"
  });
}

function exportPeerBrief() {
  const snapshot = state.currentPeer || buildPeerSnapshot();
  const date = new Date().toISOString().slice(0, 10);
  const content = [
    "# CiteAlpha Peer Benchmark Brief",
    "",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    "## Screen Configuration",
    "",
    `- Target ticker: ${snapshot.config.target}`,
    `- Peer basket: ${snapshot.config.peerBasket}`,
    `- Benchmark peer: ${snapshot.benchmarkRow ? snapshot.benchmarkRow.ticker : "Peer group"}`,
    `- Primary factor: ${snapshot.config.factor}`,
    `- Risk penalty: ${snapshot.config.riskPenalty}%`,
    `- Valuation weight: ${snapshot.config.valuationWeight}%`,
    `- Evidence mode: ${snapshot.config.evidenceMode}`,
    "",
    "## Ranking",
    "",
    ...snapshot.rows.map((row) => `- #${row.rank} ${row.ticker}: ${row.score}/100 - ${row.reason}`),
    "",
    "## Factor Gaps",
    "",
    ...(snapshot.gapRows.length ? snapshot.gapRows.map((row) => `- ${row.status.toUpperCase()}: ${row.label} ${row.target} vs ${row.benchmark} - ${row.note}`) : ["- No factor gaps generated."]),
    "",
    "## Diligence Queue",
    "",
    ...snapshot.questionRows.map((row) => `- ${row.topic}: ${row.question}`),
    "",
    "## Product Note",
    "",
    "This peer screen is a static research workflow aid. Production should refresh fundamentals, market data, and filing-derived factors from audited data pipelines before relying on rankings for live investment workflows."
  ].join("\n");
  downloadTextFile(`citealpha-peer-benchmark-${date}.md`, content, "text/markdown;charset=utf-8");
  flashButtonLabel(els.exportPeerBrief, "Exported");
}

function renderStressLab() {
  if (!els.stressMetricGrid) return;
  if (!state.stressConfig) state.stressConfig = loadStressConfig();
  syncStressInputs();
  const snapshot = buildStressSnapshot();
  state.currentStress = snapshot;
  els.stressMetricGrid.innerHTML = [
    { label: "Most exposed", value: snapshot.mostExposed ? snapshot.mostExposed.ticker : "None", sub: snapshot.mostExposed ? `${snapshot.mostExposed.valueImpact}% value hit` : "Add coverage names" },
    { label: "Portfolio hit", value: `${snapshot.portfolioImpact}%`, sub: `${snapshot.config.weightMode} basis` },
    { label: "Avg resilience", value: `${snapshot.avgResilience}/100`, sub: snapshot.avgResilience >= 65 ? "Shock is absorbable" : "Pressure case" },
    { label: "Break risks", value: String(snapshot.breakRows.length), sub: snapshot.config.preset }
  ].map((metric) => `
    <div class="stress-metric">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(String(metric.value))}</strong>
      <em>${escapeHtml(metric.sub)}</em>
    </div>
  `).join("");
  els.stressRankingCount.textContent = `${snapshot.rows.length} names`;
  els.stressRankingList.innerHTML = renderStressRanking(snapshot.rows);
  els.stressPortfolioImpact.textContent = `${snapshot.portfolioImpact}%`;
  els.stressPortfolioBoard.innerHTML = renderStressPortfolioBoard(snapshot);
  els.stressActionCount.textContent = String(snapshot.actionRows.length);
  els.stressActionQueue.innerHTML = renderStressActionQueue(snapshot.actionRows);
}

function buildStressSnapshot() {
  const config = normalizeStressConfig(state.stressConfig || getDefaultStressConfig());
  const companies = resolveStressCompanies(config);
  const weightMap = buildStressWeightMap(config, companies);
  const rows = companies.map((company) => scoreStressCompany(company, config, weightMap)).sort((a, b) => b.valueImpact - a.valueImpact);
  const mostExposed = rows[0] || null;
  const breakRows = rows.filter((row) => row.status !== "resilient");
  const portfolioImpact = Math.round(rows.reduce((sum, row) => sum + row.valueImpact * (row.weight / 100), 0));
  const avgResilience = rows.length
    ? Math.round(rows.reduce((sum, row) => sum + row.resilience, 0) / rows.length)
    : 0;
  const actionRows = buildStressActions(rows, config);
  return {
    config,
    companies,
    rows,
    mostExposed,
    breakRows,
    portfolioImpact,
    avgResilience,
    actionRows
  };
}

function resolveStressCompanies(config) {
  const tickers = Array.from(new Set(String(config.tickers || "")
    .split(/[,;\s]+/)
    .map(normalizeTicker)
    .filter((ticker) => ticker && ticker !== "CUSTOM")));
  const resolved = tickers.map(resolvePeerCompany).filter(Boolean);
  return resolved.length ? resolved : SAMPLE_COMPANIES.map((company) => normalizePeerCompany(company));
}

function buildStressWeightMap(config, companies) {
  const map = new Map();
  if (config.weightMode === "Target only") {
    const first = companies[0];
    if (first) map.set(first.ticker, 100);
    companies.slice(1).forEach((company) => map.set(company.ticker, 0));
    return map;
  }
  if (config.weightMode === "Portfolio weights" && state.portfolioPositions.length) {
    const resolved = normalizePortfolioWeights(state.portfolioPositions);
    resolved.forEach((position) => {
      const company = resolvePortfolioCompany(position.ticker);
      map.set(company.proxyTicker || company.ticker, (map.get(company.proxyTicker || company.ticker) || 0) + position.weight);
      map.set(position.ticker, (map.get(position.ticker) || 0) + position.weight);
    });
    companies.forEach((company) => {
      if (!map.has(company.ticker)) map.set(company.ticker, 0);
    });
    return map;
  }
  const equal = companies.length ? 100 / companies.length : 0;
  companies.forEach((company) => map.set(company.ticker, equal));
  return map;
}

function scoreStressCompany(company, config, weightMap) {
  const netDebtRatio = Number(company.revenue) ? Math.max(0, Number(company.netDebt || 0) / Math.max(1, Number(company.revenue))) : 0;
  const ratePressure = (config.rateShock / 100) * (0.06 * company.multiple + netDebtRatio * 8 + company.risk / 160);
  const demandPressure = config.demandShock * (0.34 + company.risk / 230 + Math.max(0, company.growth) / 260);
  const marginPressure = (config.marginShock / 100) * (0.9 + Math.max(0, 18 - company.fcfMargin) / 30);
  const inflationPressure = config.inflationDrag * (0.5 + Math.max(0, 45 - company.grossMargin) / 70);
  const cashBuffer = Math.max(0, -Number(company.netDebt || 0)) * 0.55 + Math.max(0, company.fcfMargin) * 0.25;
  const valueImpact = Math.max(2, Math.min(75, Math.round(ratePressure + demandPressure + marginPressure + inflationPressure - cashBuffer)));
  const cashFlowAfterShock = Math.round((company.fcfMargin || 0) - config.marginShock / 100 - config.inflationDrag * 0.35 - netDebtRatio * (config.rateShock / 120));
  const resilience = Math.max(5, Math.min(99, Math.round(100 - valueImpact - company.risk * 0.18 + company.fcfMargin * 0.45 + (company.netDebt < 0 ? 6 : 0))));
  const status = valueImpact >= 32 || cashFlowAfterShock < 0 ? "break" : valueImpact >= 18 ? "watch" : "resilient";
  const weight = Math.max(0, Math.round((weightMap.get(company.ticker) || 0) * 10) / 10);
  return {
    ...company,
    valueImpact,
    cashFlowAfterShock,
    resilience,
    status,
    weight,
    ratePressure: Math.round(ratePressure),
    demandPressure: Math.round(demandPressure),
    marginPressure: Math.round(marginPressure),
    inflationPressure: Math.round(inflationPressure),
    reason: makeStressReason(company, valueImpact, cashFlowAfterShock, config)
  };
}

function makeStressReason(company, valueImpact, cashFlowAfterShock, config) {
  if (cashFlowAfterShock < 0) return `${company.ticker} turns FCF negative after ${config.marginShock} bps margin compression and ${config.inflationDrag}% inflation drag.`;
  if (valueImpact >= 32) return `${company.ticker} absorbs a heavy ${valueImpact}% value hit under ${config.preset.toLowerCase()}.`;
  if (valueImpact >= 18) return `${company.ticker} needs monitoring; value hit is ${valueImpact}% but FCF remains ${cashFlowAfterShock}%.`;
  return `${company.ticker} holds up with ${cashFlowAfterShock}% stressed FCF margin and ${valueImpact}% value impact.`;
}

function buildStressActions(rows, config) {
  const actions = rows.slice(0, 4).map((row) => ({
    ticker: row.ticker,
    priority: row.status === "break" ? "High" : row.status === "watch" ? "Medium" : "Low",
    question: makeStressQuestion(row, config)
  }));
  if (!actions.some((row) => row.priority === "High") && rows[0]) {
    actions.unshift({
      ticker: rows[0].ticker,
      priority: "Medium",
      question: `What evidence would prove $${rows[0].ticker} is more resilient than the ${config.preset.toLowerCase()} stress model suggests?`
    });
  }
  return actions.slice(0, 5);
}

function makeStressQuestion(row, config) {
  if (row.cashFlowAfterShock < 0) return `Which filings show whether $${row.ticker} can protect cash flow if margins compress by ${config.marginShock} bps?`;
  if (row.ratePressure >= row.demandPressure && row.ratePressure >= row.marginPressure) return `How exposed is $${row.ticker} to refinancing, discount-rate, or duration risk if rates rise ${config.rateShock} bps?`;
  if (row.demandPressure >= row.marginPressure) return `What demand indicators would confirm or refute the ${config.demandShock}% revenue shock for $${row.ticker}?`;
  return `Can $${row.ticker} offset ${config.marginShock} bps of margin pressure through pricing, mix, or cost cuts?`;
}

function renderStressRanking(rows) {
  if (!rows.length) {
    return `
      <div class="ops-empty">
        <strong>No stress set available</strong>
        <span>Add tickers, then run the scenario stress test.</span>
      </div>
    `;
  }
  return rows.map((row) => `
    <div class="stress-rank-row ${escapeAttr(row.status)}">
      <span>${escapeHtml(row.status === "break" ? "Break" : row.status === "watch" ? "Watch" : "Hold")}</span>
      <div>
        <strong>${escapeHtml(row.ticker)} - ${escapeHtml(row.name)}</strong>
        <em>${escapeHtml(row.reason)}</em>
      </div>
      <b>${escapeHtml(String(row.valueImpact))}%</b>
    </div>
  `).join("");
}

function renderStressPortfolioBoard(snapshot) {
  if (!snapshot.rows.length) {
    return `
      <div class="ops-empty">
        <strong>No portfolio impact yet</strong>
        <span>Run the stress test to see weighted exposure.</span>
      </div>
    `;
  }
  return snapshot.rows.map((row) => `
    <div class="stress-impact-row">
      <div>
        <strong>${escapeHtml(row.ticker)} | ${escapeHtml(String(row.weight))}% weight</strong>
        <span>Resilience ${escapeHtml(String(row.resilience))}/100 | stressed FCF ${escapeHtml(String(row.cashFlowAfterShock))}%</span>
      </div>
      <i><b style="width:${escapeAttr(String(Math.min(100, Math.max(6, row.valueImpact * 1.6))))}%"></b></i>
    </div>
  `).join("");
}

function renderStressActionQueue(rows) {
  if (!rows.length) {
    return `
      <div class="ops-empty">
        <strong>No stress actions yet</strong>
        <span>Run a scenario to generate follow-up research questions.</span>
      </div>
    `;
  }
  return rows.map((row) => `
    <button class="stress-action-row" type="button" data-stress-question="${escapeAttr(row.question)}">
      <span>${escapeHtml(row.priority)}</span>
      <strong>${escapeHtml(row.question)}</strong>
    </button>
  `).join("");
}

function readStressConfig() {
  return normalizeStressConfig({
    preset: els.stressPreset.value,
    tickers: els.stressTickers.value,
    rateShock: Number(els.stressRateShock.value),
    demandShock: Number(els.stressDemandShock.value),
    marginShock: Number(els.stressMarginShock.value),
    inflationDrag: Number(els.stressInflationDrag.value),
    weightMode: els.stressWeightMode.value
  });
}

function syncStressInputs() {
  if (!els.stressPreset) return;
  const config = normalizeStressConfig(state.stressConfig || getDefaultStressConfig());
  els.stressPreset.value = config.preset;
  els.stressTickers.value = config.tickers;
  els.stressRateShock.value = String(config.rateShock);
  els.stressDemandShock.value = String(config.demandShock);
  els.stressMarginShock.value = String(config.marginShock);
  els.stressInflationDrag.value = String(config.inflationDrag);
  els.stressWeightMode.value = config.weightMode;
}

function normalizeStressConfig(config) {
  const defaults = getDefaultStressConfig();
  return {
    preset: normalizeChoice(config.preset, ["Rates stay high", "Demand air pocket", "Margin squeeze", "Funding stress", "Base recession"], defaults.preset),
    tickers: String(config.tickers || defaults.tickers).slice(0, 140),
    rateShock: clampNumber(config.rateShock, 0, 800, defaults.rateShock),
    demandShock: clampNumber(config.demandShock, 0, 60, defaults.demandShock),
    marginShock: clampNumber(config.marginShock, 0, 1000, defaults.marginShock),
    inflationDrag: clampNumber(config.inflationDrag, 0, 25, defaults.inflationDrag),
    weightMode: normalizeChoice(config.weightMode, ["Equal weight", "Portfolio weights", "Target only"], defaults.weightMode)
  };
}

function getDefaultStressConfig() {
  return {
    preset: "Rates stay high",
    tickers: "NSCP, AURR, HLGD",
    rateShock: 150,
    demandShock: 12,
    marginShock: 250,
    inflationDrag: 3,
    weightMode: "Equal weight"
  };
}

function getStressPreset(name, current = getDefaultStressConfig()) {
  const base = normalizeStressConfig(current);
  const presets = {
    "Rates stay high": { rateShock: 175, demandShock: 10, marginShock: 180, inflationDrag: 3 },
    "Demand air pocket": { rateShock: 75, demandShock: 24, marginShock: 220, inflationDrag: 2 },
    "Margin squeeze": { rateShock: 75, demandShock: 10, marginShock: 425, inflationDrag: 6 },
    "Funding stress": { rateShock: 300, demandShock: 14, marginShock: 250, inflationDrag: 4 },
    "Base recession": { rateShock: 125, demandShock: 30, marginShock: 350, inflationDrag: 5 }
  };
  return normalizeStressConfig({
    ...base,
    ...(presets[name] || presets["Rates stay high"]),
    preset: name
  });
}

function loadStressConfig() {
  return normalizeStressConfig(loadJson(STORAGE_KEYS.stress, getDefaultStressConfig()));
}

function saveStressConfig() {
  saveJson(STORAGE_KEYS.stress, normalizeStressConfig(state.stressConfig || getDefaultStressConfig()));
}

function hydrateStressFromPortfolio() {
  const tickers = state.portfolioPositions.length
    ? normalizePortfolioWeights(state.portfolioPositions).map((position) => position.ticker)
    : SAMPLE_COMPANIES.map((company) => company.ticker);
  state.stressConfig = normalizeStressConfig({
    ...(state.stressConfig || getDefaultStressConfig()),
    tickers: Array.from(new Set(tickers)).join(", "),
    weightMode: state.portfolioPositions.length ? "Portfolio weights" : "Equal weight"
  });
}

function exportStressBrief() {
  const snapshot = state.currentStress || buildStressSnapshot();
  const date = new Date().toISOString().slice(0, 10);
  const content = [
    "# CiteAlpha Scenario Stress Test Memo",
    "",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    "## Scenario",
    "",
    `- Preset: ${snapshot.config.preset}`,
    `- Coverage tickers: ${snapshot.config.tickers}`,
    `- Rate shock: ${snapshot.config.rateShock} bps`,
    `- Demand shock: ${snapshot.config.demandShock}%`,
    `- Margin shock: ${snapshot.config.marginShock} bps`,
    `- Inflation drag: ${snapshot.config.inflationDrag}%`,
    `- Weight mode: ${snapshot.config.weightMode}`,
    "",
    "## Stress Scorecard",
    "",
    `- Most exposed: ${snapshot.mostExposed ? snapshot.mostExposed.ticker : "None"}`,
    `- Portfolio impact: ${snapshot.portfolioImpact}%`,
    `- Average resilience: ${snapshot.avgResilience}/100`,
    `- Break/watch names: ${snapshot.breakRows.length}`,
    "",
    "## Company Stress Ranking",
    "",
    ...snapshot.rows.map((row) => `- ${row.status.toUpperCase()} ${row.ticker}: ${row.valueImpact}% value hit, ${row.resilience}/100 resilience, stressed FCF ${row.cashFlowAfterShock}% - ${row.reason}`),
    "",
    "## Action Queue",
    "",
    ...snapshot.actionRows.map((row) => `- ${row.priority}: ${row.question}`),
    "",
    "## Product Note",
    "",
    "This stress lab is a static scenario model for product workflow design. Production should connect normalized financial statements, debt schedules, segment exposures, and live market data before using scenario outputs for live research decisions."
  ].join("\n");
  downloadTextFile(`citealpha-scenario-stress-test-${date}.md`, content, "text/markdown;charset=utf-8");
  flashButtonLabel(els.exportStressBrief, "Exported");
}

function renderFilingChangeMonitor() {
  if (!els.changeMetricGrid) return;
  if (!state.changeConfig) state.changeConfig = loadChangeConfig();
  syncChangeInputs();
  const snapshot = buildFilingChangeSnapshot();
  state.currentChange = snapshot;
  els.changeMetricGrid.innerHTML = [
    { label: "Materiality", value: `${snapshot.materialityScore}/100`, sub: snapshot.materialityLabel },
    { label: "New themes", value: String(snapshot.addedRows.length), sub: `${snapshot.config.currentPeriod} vs prior` },
    { label: "Thesis drift", value: snapshot.driftLabel, sub: snapshot.anchorTheme || "No single issue" },
    { label: "Review action", value: snapshot.reviewAction, sub: `${snapshot.questionRows.length} follow-ups` }
  ].map((metric) => `
    <div class="change-metric">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(String(metric.value))}</strong>
      <em>${escapeHtml(metric.sub)}</em>
    </div>
  `).join("");
  els.changeAddedCount.textContent = String(snapshot.addedRows.length);
  els.changeAddedList.innerHTML = renderChangeRows(snapshot.addedRows, "No expanded risks", "Paste two filing sections, then run the change scan.");
  els.changeReducedCount.textContent = String(snapshot.reducedRows.length);
  els.changeReducedList.innerHTML = renderChangeRows(snapshot.reducedRows, "No softened language", "Current language does not clearly remove prior-year risk signals.");
  els.changeQuestionCount.textContent = String(snapshot.questionRows.length);
  els.changeQuestionQueue.innerHTML = renderChangeQuestions(snapshot.questionRows);
}

function buildFilingChangeSnapshot() {
  const config = normalizeChangeConfig(state.changeConfig || getDefaultChangeConfig());
  const priorThemes = scoreChangeThemes(config.priorText);
  const currentThemes = scoreChangeThemes(config.currentText);
  const addedRows = buildChangeThemeRows(priorThemes, currentThemes, config.currentText, "added", config);
  const reducedRows = buildChangeThemeRows(currentThemes, priorThemes, config.priorText, "reduced", config);
  const currentSentenceCount = splitChangeSentences(config.currentText).length;
  const priorSentenceCount = splitChangeSentences(config.priorText).length;
  const severityPoints = addedRows.reduce((sum, row) => sum + (row.severity === "High" ? 16 : 10) + row.delta * 3, 0);
  const reductionOffset = Math.min(18, reducedRows.length * 5);
  const materialityScore = Math.max(0, Math.min(100, Math.round(32 + severityPoints + Math.max(0, currentSentenceCount - priorSentenceCount) * 2 - reductionOffset)));
  const materialityLabel = materialityScore >= 75 ? "Board review" : materialityScore >= 55 ? "Analyst review" : "Monitor";
  const anchorTheme = addedRows[0] ? addedRows[0].label : (currentThemes[0] ? currentThemes[0].label : "");
  const driftLabel = materialityScore >= 75 ? "High" : materialityScore >= 55 ? "Medium" : "Low";
  const reviewAction = materialityScore >= getChangeMaterialityThreshold(config.materiality) ? "Review" : "Watch";
  const questionRows = buildChangeQuestionRows(addedRows, reducedRows, config, materialityScore);
  return {
    config,
    priorThemes,
    currentThemes,
    addedRows,
    reducedRows,
    materialityScore,
    materialityLabel,
    driftLabel,
    anchorTheme,
    reviewAction,
    questionRows
  };
}

function scoreChangeThemes(text) {
  const lower = String(text || "").toLowerCase();
  return CHANGE_THEME_LIBRARY.map((theme) => {
    const matches = theme.terms.reduce((sum, term) => {
      const pattern = new RegExp(`\\b${escapeRegExp(term.toLowerCase()).replace(/\\s+/g, "\\s+")}\\b`, "g");
      const found = lower.match(pattern);
      return sum + (found ? found.length : 0);
    }, 0);
    return {
      ...theme,
      score: matches,
      evidence: findThemeEvidence(text, theme)
    };
  }).sort((a, b) => b.score - a.score || (a.severity === "High" ? -1 : 1));
}

function buildChangeThemeRows(baseThemes, compareThemes, evidenceText, mode, config) {
  const compareMap = new Map(compareThemes.map((theme) => [theme.id, theme]));
  return baseThemes.map((theme) => {
    const compareScore = (compareMap.get(theme.id) || { score: 0 }).score;
    const delta = theme.score - compareScore;
    return {
      id: theme.id,
      label: theme.label,
      severity: theme.severity,
      score: theme.score,
      delta,
      period: mode === "added" ? config.currentPeriod : config.priorPeriod,
      evidence: theme.evidence || findThemeEvidence(evidenceText, theme),
      note: makeChangeThemeNote(theme, delta, mode, config)
    };
  }).filter((row) => row.score > 0 && row.delta > 0)
    .sort((a, b) => (b.severity === "High" ? 1 : 0) - (a.severity === "High" ? 1 : 0) || b.delta - a.delta || b.score - a.score)
    .slice(0, 5);
}

function makeChangeThemeNote(theme, delta, mode, config) {
  const direction = mode === "added" ? "expanded" : "softened";
  const period = mode === "added" ? config.currentPeriod : config.priorPeriod;
  return `${theme.label} language ${direction} by ${delta} signal${delta === 1 ? "" : "s"} in ${period}.`;
}

function buildChangeQuestionRows(addedRows, reducedRows, config, materialityScore) {
  const rows = [];
  const anchor = addedRows[0] || reducedRows[0] || { label: "risk language", severity: "Medium" };
  if (addedRows[0]) {
    rows.push({
      topic: "Change driver",
      question: `What changed in $${config.ticker} filing language around ${addedRows[0].label.toLowerCase()} between ${config.priorPeriod} and ${config.currentPeriod}?`
    });
  }
  if (addedRows[1]) {
    rows.push({
      topic: "Second-order risk",
      question: `Which source passages show whether $${config.ticker}'s ${addedRows[1].label.toLowerCase()} risk is now more material?`
    });
  }
  rows.push({
    topic: "Management check",
    question: `Did management address $${config.ticker}'s ${anchor.label.toLowerCase()} change on the latest earnings call?`
  });
  rows.push({
    topic: "Valuation impact",
    question: `What valuation assumption should move first if $${config.ticker}'s ${anchor.label.toLowerCase()} language keeps worsening?`
  });
  if (materialityScore >= 70) {
    rows.push({
      topic: "Escalation",
      question: `Should $${config.ticker}'s new filing language trigger an investment committee review before the next position decision?`
    });
  }
  return rows.slice(0, 5);
}

function renderChangeRows(rows, emptyTitle, emptyText) {
  if (!rows.length) {
    return `
      <div class="ops-empty">
        <strong>${escapeHtml(emptyTitle)}</strong>
        <span>${escapeHtml(emptyText)}</span>
      </div>
    `;
  }
  return rows.map((row) => `
    <div class="change-row ${escapeAttr(row.severity.toLowerCase())}">
      <span>${escapeHtml(row.severity)}</span>
      <div>
        <strong>${escapeHtml(row.label)}</strong>
        <em>${escapeHtml(row.evidence || row.note)}</em>
      </div>
      <b>+${escapeHtml(String(row.delta))}</b>
    </div>
  `).join("");
}

function renderChangeQuestions(rows) {
  if (!rows.length) {
    return `
      <div class="ops-empty">
        <strong>No change questions yet</strong>
        <span>Run the filing monitor to create the next research queue.</span>
      </div>
    `;
  }
  return rows.map((row) => `
    <button class="change-question-row" type="button" data-change-question="${escapeAttr(row.question)}">
      <span>${escapeHtml(row.topic)}</span>
      <strong>${escapeHtml(row.question)}</strong>
    </button>
  `).join("");
}

function findThemeEvidence(text, theme) {
  const terms = theme.terms.map((term) => term.toLowerCase());
  return splitChangeSentences(text).find((sentence) => {
    const lower = sentence.toLowerCase();
    return terms.some((term) => lower.includes(term));
  }) || "";
}

function splitChangeSentences(text) {
  return String(text || "")
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?])\s+|[\r\n]+/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 24)
    .slice(0, 30);
}

function readChangeConfig() {
  return normalizeChangeConfig({
    ticker: els.changeTicker.value,
    priorPeriod: els.changePriorPeriod.value,
    currentPeriod: els.changeCurrentPeriod.value,
    materiality: els.changeMateriality.value,
    priorText: els.changePriorText.value,
    currentText: els.changeCurrentText.value
  });
}

function syncChangeInputs() {
  if (!els.changeTicker) return;
  const config = normalizeChangeConfig(state.changeConfig || getDefaultChangeConfig());
  els.changeTicker.value = config.ticker;
  els.changePriorPeriod.value = config.priorPeriod;
  els.changeCurrentPeriod.value = config.currentPeriod;
  els.changeMateriality.value = config.materiality;
  els.changePriorText.value = config.priorText;
  els.changeCurrentText.value = config.currentText;
}

function normalizeChangeConfig(config) {
  const defaults = getDefaultChangeConfig();
  return {
    ticker: normalizeTicker(config.ticker || defaults.ticker),
    priorPeriod: String(config.priorPeriod || defaults.priorPeriod).slice(0, 40),
    currentPeriod: String(config.currentPeriod || defaults.currentPeriod).slice(0, 40),
    materiality: normalizeChoice(config.materiality, ["Balanced", "Strict", "Early warning"], defaults.materiality),
    priorText: String(config.priorText || defaults.priorText).slice(0, 6000),
    currentText: String(config.currentText || defaults.currentText).slice(0, 6000)
  };
}

function getDefaultChangeConfig() {
  return {
    ticker: "NVDA",
    priorPeriod: "FY2024 10-K",
    currentPeriod: "FY2025 10-K",
    materiality: "Balanced",
    priorText: DEFAULT_CHANGE_PRIOR_TEXT,
    currentText: DEFAULT_CHANGE_CURRENT_TEXT
  };
}

function getChangeMaterialityThreshold(mode) {
  if (mode === "Strict") return 75;
  if (mode === "Early warning") return 45;
  return 58;
}

function loadChangeConfig() {
  return normalizeChangeConfig(loadJson(STORAGE_KEYS.filingChange, getDefaultChangeConfig()));
}

function saveChangeConfig() {
  saveJson(STORAGE_KEYS.filingChange, normalizeChangeConfig(state.changeConfig || getDefaultChangeConfig()));
}

function hydrateChangeFromImports() {
  const current = normalizeChangeConfig(state.changeConfig || getDefaultChangeConfig());
  const focusTicker = normalizeTicker((state.tickerFocus && state.tickerFocus.ticker) || current.ticker || state.selectedTicker || "NVDA");
  const docs = state.documents
    .filter((doc) => doc.ticker === focusTicker && state.enabledDocIds.has(doc.id))
    .sort((a, b) => Number(b.sourceKind === "uploaded") - Number(a.sourceKind === "uploaded"));
  const currentDoc = docs[0] || null;
  const priorDoc = docs.find((doc) => doc !== currentDoc && /risk|10-k|filing|annual/i.test(`${doc.type} ${doc.title}`)) || docs[1] || null;
  state.changeConfig = normalizeChangeConfig({
    ...current,
    ticker: focusTicker,
    priorPeriod: priorDoc ? `${priorDoc.type} prior` : "Prior filing",
    currentPeriod: currentDoc ? `${currentDoc.type} current` : "Current filing",
    priorText: priorDoc ? priorDoc.text : DEFAULT_CHANGE_PRIOR_TEXT,
    currentText: currentDoc ? currentDoc.text : DEFAULT_CHANGE_CURRENT_TEXT
  });
}

function exportChangeBrief() {
  const snapshot = state.currentChange || buildFilingChangeSnapshot();
  const date = new Date().toISOString().slice(0, 10);
  const content = [
    "# CiteAlpha Filing Change Monitor Memo",
    "",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    "## Change Setup",
    "",
    `- Ticker: ${snapshot.config.ticker}`,
    `- Prior period: ${snapshot.config.priorPeriod}`,
    `- Current period: ${snapshot.config.currentPeriod}`,
    `- Materiality bar: ${snapshot.config.materiality}`,
    "",
    "## Change Scorecard",
    "",
    `- Materiality: ${snapshot.materialityScore}/100`,
    `- Thesis drift: ${snapshot.driftLabel}`,
    `- Review action: ${snapshot.reviewAction}`,
    `- Anchor theme: ${snapshot.anchorTheme || "None"}`,
    "",
    "## New or Expanded Risks",
    "",
    ...(snapshot.addedRows.length ? snapshot.addedRows.map((row) => `- ${row.severity}: ${row.label} +${row.delta} - ${row.evidence || row.note}`) : ["- No expanded risks detected."]),
    "",
    "## Softened or Removed Language",
    "",
    ...(snapshot.reducedRows.length ? snapshot.reducedRows.map((row) => `- ${row.severity}: ${row.label} +${row.delta} - ${row.evidence || row.note}`) : ["- No softened language detected."]),
    "",
    "## Follow-Up Queue",
    "",
    ...snapshot.questionRows.map((row) => `- ${row.topic}: ${row.question}`),
    "",
    "## Product Note",
    "",
    "This filing change monitor is a client-side prototype. Production should compare normalized filing sections by accession, preserve immutable text snapshots, and route material changes through reviewer workflow before user-facing alerts."
  ].join("\n");
  downloadTextFile(`citealpha-filing-change-monitor-${date}.md`, content, "text/markdown;charset=utf-8");
  flashButtonLabel(els.exportChangeBrief, "Exported");
}

function renderValuationMatrix() {
  if (!els.matrixMetricGrid) return;
  if (!state.valuationMatrixConfig) state.valuationMatrixConfig = loadValuationMatrixConfig();
  syncValuationMatrixInputs();
  const snapshot = buildValuationMatrixSnapshot();
  state.currentValuationMatrix = snapshot;
  els.matrixMetricGrid.innerHTML = [
    { label: "Base value", value: formatPerShare(snapshot.baseCase.perShare), sub: `${formatMoney(snapshot.baseCase.equityValue)} equity value` },
    { label: "Bear / bull range", value: `${formatPerShare(snapshot.bearCase.perShare)} - ${formatPerShare(snapshot.bullCase.perShare)}`, sub: `${formatPerShare(snapshot.range)} spread` },
    { label: "Top driver", value: snapshot.topDriver ? snapshot.topDriver.shortLabel : "None", sub: snapshot.topDriver ? `${formatSignedPerShare(snapshot.topDriver.delta)} per share` : "Run matrix" },
    { label: "Evidence fit", value: `${snapshot.evidenceScore}/100`, sub: snapshot.evidenceLabel }
  ].map((metric) => `
    <div class="matrix-metric">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(String(metric.value))}</strong>
      <em>${escapeHtml(metric.sub)}</em>
    </div>
  `).join("");
  els.matrixCaseCount.textContent = `${snapshot.caseRows.length} cases`;
  els.matrixCaseList.innerHTML = renderValuationCaseRows(snapshot.caseRows);
  els.matrixDriverLabel.textContent = snapshot.topDriver ? snapshot.topDriver.shortLabel : "0";
  els.matrixDriverList.innerHTML = renderValuationDriverRows(snapshot.driverRows);
  els.matrixQuestionCount.textContent = String(snapshot.questionRows.length);
  els.matrixQuestionQueue.innerHTML = renderValuationMatrixQuestions(snapshot.questionRows);
}

function buildValuationMatrixSnapshot() {
  const config = normalizeValuationMatrixConfig(state.valuationMatrixConfig || getDefaultValuationMatrixConfig());
  const company = resolveValuationMatrixCompany(config.ticker);
  const caseRows = buildValuationCaseRows(company, config);
  const baseCase = caseRows.find((row) => row.id === "base") || caseRows[1];
  const bearCase = caseRows.find((row) => row.id === "bear") || caseRows[0];
  const bullCase = caseRows.find((row) => row.id === "bull") || caseRows[2];
  const range = Math.max(0, Math.round(bullCase.perShare - bearCase.perShare));
  const driverRows = buildValuationDriverRows(company, config, baseCase);
  const topDriver = driverRows[0] || null;
  const evidence = scoreValuationEvidence(company, config);
  const questionRows = buildValuationQuestionRows(company, config, topDriver, evidence, caseRows);
  return {
    config,
    company,
    caseRows,
    baseCase,
    bearCase,
    bullCase,
    range,
    driverRows,
    topDriver,
    evidenceScore: evidence.score,
    evidenceLabel: evidence.label,
    questionRows
  };
}

function buildValuationCaseRows(company, config) {
  const spread = getMatrixSpread(config.spread);
  const rows = [
    {
      id: "bear",
      label: "Bear",
      growth: config.growth - spread.growth,
      margin: config.margin - spread.margin,
      multiple: config.multiple - spread.multiple,
      discount: config.discount + spread.discount,
      note: "Demand, cash conversion, and multiple support all fade."
    },
    {
      id: "base",
      label: "Base",
      growth: config.growth,
      margin: config.margin,
      multiple: config.multiple,
      discount: config.discount,
      note: "Current model assumptions from the active valuation lens."
    },
    {
      id: "bull",
      label: "Bull",
      growth: config.growth + spread.growth,
      margin: config.margin + spread.margin,
      multiple: config.multiple + spread.multiple,
      discount: Math.max(4, config.discount - spread.discount),
      note: "Evidence supports stronger growth, margin, and risk premium."
    }
  ];
  return rows.map((row) => ({
    ...row,
    ...computeValuationCase(company, row, config.horizonYears)
  }));
}

function computeValuationCase(company, scenario, years) {
  const growth = scenario.growth / 100;
  const margin = scenario.margin / 100;
  const discount = scenario.discount / 100;
  let revenue = Number(company.revenue) || 0;
  let presentValueFcf = 0;
  for (let year = 1; year <= years; year += 1) {
    revenue *= 1 + growth;
    const fcf = revenue * margin;
    presentValueFcf += fcf / Math.pow(1 + discount, year);
  }
  const terminalFcf = revenue * margin;
  const discountedTerminal = terminalFcf * scenario.multiple / Math.pow(1 + discount, years);
  const enterpriseValue = presentValueFcf + discountedTerminal;
  const equityValue = Math.max(0, enterpriseValue - Number(company.netDebt || 0));
  const perShare = equityValue / Math.max(Number(company.shares || 0), 0.01);
  return {
    terminalRevenue: revenue,
    terminalFcf,
    enterpriseValue,
    equityValue,
    perShare
  };
}

function buildValuationDriverRows(company, config, baseCase) {
  const scenarios = [
    { id: "margin", shortLabel: "Margin", label: "FCF margin +2 pts", input: { ...config, margin: config.margin + 2 }, thesis: "FCF margin has the cleanest read-through from filing evidence." },
    { id: "growth", shortLabel: "Growth", label: "Revenue CAGR +3 pts", input: { ...config, growth: config.growth + 3 }, thesis: "Growth matters only if demand evidence supports the ramp." },
    { id: "multiple", shortLabel: "Multiple", label: "Terminal multiple +2x", input: { ...config, multiple: config.multiple + 2 }, thesis: "Multiple expansion needs better durability, not just excitement." },
    { id: "discount", shortLabel: "Discount", label: "Discount rate -100 bps", input: { ...config, discount: Math.max(4, config.discount - 1) }, thesis: "Lower risk premium must be earned by source quality and balance-sheet confidence." }
  ];
  return scenarios.map((item) => {
    const caseValue = computeValuationCase(company, item.input, config.horizonYears);
    const delta = Math.round(caseValue.perShare - baseCase.perShare);
    return {
      ...item,
      value: caseValue.perShare,
      delta,
      absDelta: Math.abs(delta)
    };
  }).sort((a, b) => b.absDelta - a.absDelta);
}

function scoreValuationEvidence(company, config) {
  const docs = state.documents.filter((doc) => doc.ticker === company.ticker && state.enabledDocIds.has(doc.id));
  const citations = state.currentCitations.filter((citation) => citation.ticker === company.ticker);
  const sourceAudit = makeLightSourceAudit(citations.length ? citations : []);
  const threshold = config.evidenceBar === "Strict" ? 82 : config.evidenceBar === "Exploratory" ? 45 : 64;
  const rawScore = Math.round(38 + docs.length * 9 + citations.length * 6 + (sourceAudit.quality || 45) * 0.18 - Math.max(0, company.risk - 50) * 0.25);
  const score = Math.max(25, Math.min(100, rawScore));
  return {
    score,
    label: score >= threshold ? "Model support ready" : `Needs ${threshold - score} pts support`
  };
}

function buildValuationQuestionRows(company, config, topDriver, evidence, caseRows) {
  const base = caseRows.find((row) => row.id === "base") || caseRows[0];
  const bull = caseRows.find((row) => row.id === "bull") || base;
  const rows = [
    {
      topic: "Margin proof",
      question: `Which filing or call passages support $${company.ticker} sustaining ${config.margin}% FCF margin through the forecast period?`
    },
    {
      topic: "Growth bridge",
      question: `What source evidence justifies $${company.ticker}'s ${config.growth}% revenue CAGR rather than the bear case?`
    },
    {
      topic: "Multiple guardrail",
      question: `What would need to be true for $${company.ticker} to deserve a ${config.multiple}x terminal FCF multiple?`
    },
    {
      topic: "Downside trigger",
      question: `Which risk factor would push $${company.ticker} from ${formatPerShare(base.perShare)} base value toward the bear case first?`
    }
  ];
  if (topDriver) {
    rows.unshift({
      topic: "Top sensitivity",
      question: `What evidence would confirm ${topDriver.label.toLowerCase()} for $${company.ticker}, the largest valuation driver in the matrix?`
    });
  }
  if (evidence.score < 65) {
    rows.push({
      topic: "Source gap",
      question: `Which 10-K, MD&A, or earnings call sections should I import before trusting the ${formatPerShare(bull.perShare)} bull case for $${company.ticker}?`
    });
  }
  return rows.slice(0, 5);
}

function renderValuationCaseRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No valuation cases yet</strong><span>Run the matrix to create bull/base/bear values.</span></div>`;
  }
  return rows.map((row) => `
    <div class="matrix-case-row ${escapeAttr(row.id)}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(formatPerShare(row.perShare))} per share | ${escapeHtml(formatMoney(row.equityValue))}</strong>
        <em>${escapeHtml(Math.round(row.growth))}% growth, ${escapeHtml(Math.round(row.margin))}% FCF, ${escapeHtml(String(Math.round(row.multiple)))}x, ${escapeHtml(String(roundOne(row.discount)))}% discount. ${escapeHtml(row.note)}</em>
      </div>
      <b>${escapeHtml(formatMoney(row.terminalFcf))}</b>
    </div>
  `).join("");
}

function renderValuationDriverRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No drivers yet</strong><span>Run the matrix to see what moves value most.</span></div>`;
  }
  const maxDelta = Math.max(1, ...rows.map((row) => row.absDelta));
  return rows.map((row) => `
    <div class="matrix-driver-row">
      <span>${escapeHtml(row.shortLabel)}</span>
      <div>
        <strong>${escapeHtml(row.label)} | ${escapeHtml(formatSignedPerShare(row.delta))}</strong>
        <em>${escapeHtml(row.thesis)}</em>
        <i><b style="width:${escapeAttr(String(Math.max(6, Math.round((row.absDelta / maxDelta) * 100))))}%"></b></i>
      </div>
      <b>${escapeHtml(formatPerShare(row.value))}</b>
    </div>
  `).join("");
}

function renderValuationMatrixQuestions(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No model questions yet</strong><span>Run the matrix to generate valuation diligence prompts.</span></div>`;
  }
  return rows.map((row) => `
    <button class="matrix-question-row" type="button" data-matrix-question="${escapeAttr(row.question)}">
      <span>${escapeHtml(row.topic)}</span>
      <strong>${escapeHtml(row.question)}</strong>
    </button>
  `).join("");
}

function readValuationMatrixConfig() {
  return normalizeValuationMatrixConfig({
    ticker: els.matrixTicker.value,
    growth: Number(els.matrixGrowth.value),
    margin: Number(els.matrixMargin.value),
    multiple: Number(els.matrixMultiple.value),
    discount: Number(els.matrixDiscount.value),
    spread: els.matrixSpread.value,
    evidenceBar: els.matrixEvidenceBar.value,
    horizon: els.matrixHorizon.value
  });
}

function syncValuationMatrixInputs() {
  if (!els.matrixTicker) return;
  syncValuationMatrixTickerOptions();
  const config = normalizeValuationMatrixConfig(state.valuationMatrixConfig || getDefaultValuationMatrixConfig());
  els.matrixTicker.value = config.ticker;
  els.matrixGrowth.value = String(roundOne(config.growth));
  els.matrixMargin.value = String(roundOne(config.margin));
  els.matrixMultiple.value = String(roundOne(config.multiple));
  els.matrixDiscount.value = String(roundOne(config.discount));
  els.matrixSpread.value = config.spread;
  els.matrixEvidenceBar.value = config.evidenceBar;
  els.matrixHorizon.value = config.horizon;
}

function syncValuationMatrixTickerOptions() {
  if (!els.matrixTicker) return;
  const config = normalizeValuationMatrixConfig(state.valuationMatrixConfig || getDefaultValuationMatrixConfig());
  const tickers = getCompanies().map((company) => company.ticker);
  if (!tickers.includes(config.ticker)) tickers.unshift(config.ticker);
  els.matrixTicker.innerHTML = Array.from(new Set(tickers)).map((ticker) => {
    const company = resolveValuationMatrixCompany(ticker);
    return `<option value="${escapeAttr(ticker)}">${escapeHtml(ticker)} - ${escapeHtml(company.name || ticker)}</option>`;
  }).join("");
}

function normalizeValuationMatrixConfig(config) {
  const defaults = getDefaultValuationMatrixConfig();
  const horizon = normalizeChoice(config.horizon, ["3 years", "5 years", "7 years"], defaults.horizon);
  return {
    ticker: normalizeTicker(config.ticker || defaults.ticker),
    growth: clampDecimal(config.growth, -10, 60, defaults.growth),
    margin: clampDecimal(config.margin, -10, 45, defaults.margin),
    multiple: clampDecimal(config.multiple, 4, 60, defaults.multiple),
    discount: clampDecimal(config.discount, 4, 20, defaults.discount),
    spread: normalizeChoice(config.spread, ["Balanced", "Wide", "Tight"], defaults.spread),
    evidenceBar: normalizeChoice(config.evidenceBar, ["Balanced", "Strict", "Exploratory"], defaults.evidenceBar),
    horizon,
    horizonYears: Number(horizon.match(/\d+/)?.[0] || 5)
  };
}

function getDefaultValuationMatrixConfig() {
  const company = getCompany(state.selectedTicker || "NSCP") || SAMPLE_COMPANIES[0];
  return {
    ticker: company.ticker || "NSCP",
    growth: Number(company.growth) || 12,
    margin: Number(company.fcfMargin) || 12,
    multiple: Number(company.multiple) || 18,
    discount: Number(els.discountSlider?.value) || 10,
    spread: "Balanced",
    evidenceBar: "Balanced",
    horizon: "5 years"
  };
}

function hydrateValuationMatrixFromLens() {
  const company = getCompany(state.selectedTicker || "NSCP") || SAMPLE_COMPANIES[0];
  state.valuationMatrixConfig = normalizeValuationMatrixConfig({
    ...(state.valuationMatrixConfig || getDefaultValuationMatrixConfig()),
    ticker: company.ticker,
    growth: Number(els.growthSlider?.value) || company.growth,
    margin: Number(els.marginSlider?.value) || company.fcfMargin,
    multiple: Number(els.multipleSlider?.value) || company.multiple,
    discount: Number(els.discountSlider?.value) || 10
  });
}

function loadValuationMatrixConfig() {
  return normalizeValuationMatrixConfig(loadJson(STORAGE_KEYS.valuationMatrix, getDefaultValuationMatrixConfig()));
}

function saveValuationMatrixConfig() {
  saveJson(STORAGE_KEYS.valuationMatrix, normalizeValuationMatrixConfig(state.valuationMatrixConfig || getDefaultValuationMatrixConfig()));
}

function resolveValuationMatrixCompany(ticker) {
  const normalized = normalizeTicker(ticker);
  const companies = getCompanies();
  const exact = companies.find((company) => company.ticker === normalized);
  if (exact) return exact;
  const alias = PUBLIC_TICKER_ALIASES[normalized];
  if (alias) {
    return companies.find((company) => company.ticker === alias.ticker) || getCompany(alias.ticker);
  }
  return getCompany(normalized) || SAMPLE_COMPANIES[0];
}

function getMatrixSpread(spread) {
  const spreads = {
    Tight: { growth: 2, margin: 1, multiple: 2, discount: 0.75 },
    Balanced: { growth: 4, margin: 2, multiple: 3, discount: 1.25 },
    Wide: { growth: 7, margin: 4, multiple: 5, discount: 2 }
  };
  return spreads[spread] || spreads.Balanced;
}

function clampDecimal(value, min, max, fallback) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.max(min, Math.min(max, Math.round(number * 10) / 10));
}

function roundOne(value) {
  return Math.round(Number(value || 0) * 10) / 10;
}

function formatPerShare(value) {
  return `$${Math.max(0, Math.round(Number(value) || 0))}`;
}

function formatSignedPerShare(value) {
  const rounded = Math.round(Number(value) || 0);
  if (rounded < 0) return `-$${Math.abs(rounded)}`;
  return `+$${rounded}`;
}

function exportValuationMatrixBrief() {
  const snapshot = state.currentValuationMatrix || buildValuationMatrixSnapshot();
  const date = new Date().toISOString().slice(0, 10);
  const content = [
    "# CiteAlpha Valuation Sensitivity Memo",
    "",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    "## Model Setup",
    "",
    `- Ticker: ${snapshot.company.ticker} - ${snapshot.company.name}`,
    `- Revenue CAGR: ${snapshot.config.growth}%`,
    `- FCF margin: ${snapshot.config.margin}%`,
    `- Terminal multiple: ${snapshot.config.multiple}x`,
    `- Discount rate: ${snapshot.config.discount}%`,
    `- Horizon: ${snapshot.config.horizon}`,
    `- Evidence bar: ${snapshot.config.evidenceBar}`,
    "",
    "## Case Grid",
    "",
    ...snapshot.caseRows.map((row) => `- ${row.label}: ${formatPerShare(row.perShare)} per share, ${formatMoney(row.equityValue)} equity value, ${roundOne(row.growth)}% growth, ${roundOne(row.margin)}% FCF, ${roundOne(row.multiple)}x multiple, ${roundOne(row.discount)}% discount.`),
    "",
    "## Driver Sensitivity",
    "",
    ...snapshot.driverRows.map((row) => `- ${row.label}: ${formatSignedPerShare(row.delta)} per share - ${row.thesis}`),
    "",
    "## Model Questions",
    "",
    ...snapshot.questionRows.map((row) => `- ${row.topic}: ${row.question}`),
    "",
    "## Product Note",
    "",
    "This valuation matrix is a client-side scenario tool, not a price target. Production should connect audited financial statements, normalized market data, analyst-approved assumptions, and review controls before presenting valuation outputs to paying users."
  ].join("\n");
  downloadTextFile(`citealpha-valuation-sensitivity-${date}.md`, content, "text/markdown;charset=utf-8");
  flashButtonLabel(els.exportMatrixBrief, "Exported");
}

function renderResearchTearSheet() {
  if (!els.tearMetricGrid) return;
  if (!state.tearSheetConfig) state.tearSheetConfig = loadTearSheetConfig();
  syncTearSheetInputs();
  const snapshot = buildResearchTearSheetSnapshot();
  state.currentTearSheet = snapshot;
  els.tearMetricGrid.innerHTML = [
    { label: "Stance", value: snapshot.stance, sub: `${snapshot.config.conviction} conviction` },
    { label: "Value range", value: `${formatPerShare(snapshot.bearCase.perShare)} - ${formatPerShare(snapshot.bullCase.perShare)}`, sub: `${formatPerShare(snapshot.baseCase.perShare)} base` },
    { label: "Risk score", value: `${snapshot.riskScore}/100`, sub: snapshot.riskLabel },
    { label: "Evidence cover", value: `${snapshot.evidenceScore}/100`, sub: `${snapshot.docCount} docs | ${snapshot.citationCount} cites` }
  ].map((metric) => `
    <div class="tear-metric">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(String(metric.value))}</strong>
      <em>${escapeHtml(metric.sub)}</em>
    </div>
  `).join("");
  els.tearThesisCount.textContent = `${snapshot.thesisRows.length}`;
  els.tearThesisList.innerHTML = renderTearSheetRows(snapshot.thesisRows);
  els.tearRiskLabel.textContent = snapshot.riskLabel;
  els.tearValuationList.innerHTML = renderTearSheetRows(snapshot.valuationRows);
  els.tearActionCount.textContent = String(snapshot.actionRows.length);
  els.tearActionQueue.innerHTML = renderTearSheetActions(snapshot.actionRows);
}

function buildResearchTearSheetSnapshot() {
  const config = normalizeTearSheetConfig(state.tearSheetConfig || getDefaultTearSheetConfig());
  const company = resolveValuationMatrixCompany(config.ticker);
  const docs = state.documents.filter((doc) => doc.ticker === company.ticker && state.enabledDocIds.has(doc.id));
  const citations = state.currentCitations.filter((citation) => citation.ticker === company.ticker);
  const sourceAudit = makeLightSourceAudit(citations);
  const citationBoost = citations.length * 6;
  const docBoost = docs.length * 8;
  const evidenceScore = Math.max(32, Math.min(100, Math.round(38 + docBoost + citationBoost + (sourceAudit.quality || 40) * 0.18)));
  const riskFactors = buildRiskFactors(citations, company);
  const valuation = buildTearSheetValuation(company);
  const riskScore = Math.max(1, Math.min(99, Math.round(company.risk + (riskFactors[0]?.severity === "High" ? 4 : 0) - Math.max(0, evidenceScore - 72) * 0.12)));
  const riskLabel = riskScore >= 70 ? "High" : riskScore >= 55 ? "Watch" : "Moderate";
  const stance = resolveTearSheetStance(config, company, riskScore, evidenceScore);
  const topRisk = riskFactors[0] || makeGenericRiskBlueprint(company)[0];
  const thesisRows = buildTearSheetThesisRows(company, config, stance, valuation, topRisk, evidenceScore);
  const valuationRows = buildTearSheetValuationRows(company, config, valuation, riskScore, evidenceScore);
  const actionRows = buildTearSheetActions(company, config, topRisk, valuation, evidenceScore, riskScore);
  return {
    config,
    company,
    docs,
    docCount: docs.length,
    citationCount: citations.length,
    sourceAudit,
    evidenceScore,
    riskFactors,
    riskScore,
    riskLabel,
    stance,
    ...valuation,
    thesisRows,
    valuationRows,
    actionRows
  };
}

function buildTearSheetValuation(company) {
  const activeMatrix = state.currentValuationMatrix && state.currentValuationMatrix.company && state.currentValuationMatrix.company.ticker === company.ticker
    ? state.currentValuationMatrix
    : null;
  if (activeMatrix) {
    return {
      caseRows: activeMatrix.caseRows,
      baseCase: activeMatrix.baseCase,
      bearCase: activeMatrix.bearCase,
      bullCase: activeMatrix.bullCase,
      topDriver: activeMatrix.topDriver
    };
  }
  const matrixConfig = normalizeValuationMatrixConfig({
    ticker: company.ticker,
    growth: Number(company.growth) || 10,
    margin: Number(company.fcfMargin) || 10,
    multiple: Number(company.multiple) || 16,
    discount: Number(els.discountSlider?.value) || 10,
    spread: "Balanced",
    evidenceBar: "Balanced",
    horizon: "5 years"
  });
  const caseRows = buildValuationCaseRows(company, matrixConfig);
  const baseCase = caseRows.find((row) => row.id === "base") || caseRows[1];
  const bearCase = caseRows.find((row) => row.id === "bear") || caseRows[0];
  const bullCase = caseRows.find((row) => row.id === "bull") || caseRows[2];
  const topDriver = buildValuationDriverRows(company, matrixConfig, baseCase)[0] || null;
  return { caseRows, baseCase, bearCase, bullCase, topDriver };
}

function resolveTearSheetStance(config, company, riskScore, evidenceScore) {
  if (config.stance !== "Auto") return config.stance;
  if (riskScore >= 78 && evidenceScore < 68) return "Avoid";
  if (evidenceScore >= 72 && riskScore <= 58 && company.sentiment >= 58) return "Constructive";
  return "Watch";
}

function buildTearSheetThesisRows(company, config, stance, valuation, topRisk, evidenceScore) {
  return [
    {
      label: "Company",
      title: `${company.ticker} - ${company.name}`,
      body: `${company.sector}. ${company.thesis}`,
      level: "normal"
    },
    {
      label: "Stance",
      title: `${stance} | ${config.horizon}`,
      body: `${config.decisionNote}`,
      level: stance === "Avoid" ? "danger" : stance === "Watch" ? "warning" : "normal"
    },
    {
      label: "Valuation",
      title: `${formatPerShare(valuation.baseCase.perShare)} base value`,
      body: `Bear/bull range is ${formatPerShare(valuation.bearCase.perShare)} to ${formatPerShare(valuation.bullCase.perShare)}. Top driver: ${valuation.topDriver ? valuation.topDriver.shortLabel : "n/a"}.`,
      level: "normal"
    },
    {
      label: "Evidence",
      title: `${evidenceScore}/100 source coverage`,
      body: `Tear sheet uses enabled docs, current citations, valuation matrix outputs, and risk-factor templates.`,
      level: evidenceScore < 62 ? "warning" : "normal"
    },
    {
      label: "Risk",
      title: topRisk.title,
      body: topRisk.body,
      level: topRisk.severity === "High" ? "danger" : "warning"
    }
  ];
}

function buildTearSheetValuationRows(company, config, valuation, riskScore, evidenceScore) {
  return [
    {
      label: "Range",
      title: `${formatPerShare(valuation.bearCase.perShare)} bear | ${formatPerShare(valuation.baseCase.perShare)} base | ${formatPerShare(valuation.bullCase.perShare)} bull`,
      body: `${company.revenue ? formatMoney(company.revenue) : "n/a"} revenue, ${company.fcfMargin}% FCF margin, ${company.multiple}x current model multiple.`,
      level: "normal"
    },
    {
      label: "Driver",
      title: valuation.topDriver ? `${valuation.topDriver.label} moves value ${formatSignedPerShare(valuation.topDriver.delta)}` : "No driver",
      body: valuation.topDriver ? valuation.topDriver.thesis : "Run the valuation matrix to rank model sensitivities.",
      level: "normal"
    },
    {
      label: "Risk",
      title: `${riskScore}/100 risk score`,
      body: riskScore >= 70 ? "High-risk sheet should stay in watch/review until source support improves." : "Risk is acceptable for a research workflow, subject to evidence refresh.",
      level: riskScore >= 70 ? "danger" : riskScore >= 55 ? "warning" : "normal"
    },
    {
      label: "Source",
      title: `${evidenceScore}/100 evidence cover`,
      body: evidenceScore < 65 ? "Import current 10-K, MD&A, and earnings call sections before relying on the sheet." : "Source coverage is adequate for a prototype tear sheet.",
      level: evidenceScore < 65 ? "warning" : "normal"
    }
  ];
}

function buildTearSheetActions(company, config, topRisk, valuation, evidenceScore, riskScore) {
  const rows = [
    {
      topic: "Risk proof",
      priority: topRisk.severity === "High" ? "High" : "Medium",
      question: `Which source passages best prove or disprove $${company.ticker}'s ${topRisk.title.toLowerCase()} risk?`
    },
    {
      topic: "Valuation proof",
      priority: "High",
      question: `What must be true for $${company.ticker}'s ${formatPerShare(valuation.baseCase.perShare)} base value to be defendable?`
    },
    {
      topic: "Thesis break",
      priority: riskScore >= 70 ? "High" : "Medium",
      question: `What single filing change would move $${company.ticker} from ${config.stance === "Auto" ? "the current tear-sheet stance" : config.stance} to avoid?`
    },
    {
      topic: "Source gap",
      priority: evidenceScore < 65 ? "High" : "Low",
      question: `Which filing, MD&A, or earnings call section should I import next for $${company.ticker}?`
    }
  ];
  return rows.slice(0, 5);
}

function renderTearSheetRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No tear sheet yet</strong><span>Build the sheet to create a compact company snapshot.</span></div>`;
  }
  return rows.map((row) => `
    <div class="tear-row ${escapeAttr(row.level || "normal")}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)}</em>
      </div>
    </div>
  `).join("");
}

function renderTearSheetActions(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No actions yet</strong><span>Build the tear sheet to generate next research prompts.</span></div>`;
  }
  return rows.map((row) => `
    <button class="tear-action-row" type="button" data-tear-question="${escapeAttr(row.question)}">
      <span>${escapeHtml(row.priority)} | ${escapeHtml(row.topic)}</span>
      <strong>${escapeHtml(row.question)}</strong>
    </button>
  `).join("");
}

function readTearSheetConfig() {
  return normalizeTearSheetConfig({
    ticker: els.tearTicker.value,
    stance: els.tearStance.value,
    conviction: els.tearConviction.value,
    horizon: els.tearHorizon.value,
    decisionNote: els.tearDecisionNote.value
  });
}

function syncTearSheetInputs() {
  if (!els.tearTicker) return;
  syncTearSheetTickerOptions();
  const config = normalizeTearSheetConfig(state.tearSheetConfig || getDefaultTearSheetConfig());
  els.tearTicker.value = config.ticker;
  els.tearStance.value = config.stance;
  els.tearConviction.value = config.conviction;
  els.tearHorizon.value = config.horizon;
  els.tearDecisionNote.value = config.decisionNote;
}

function syncTearSheetTickerOptions() {
  if (!els.tearTicker) return;
  const config = normalizeTearSheetConfig(state.tearSheetConfig || getDefaultTearSheetConfig());
  const tickers = getCompanies().map((company) => company.ticker);
  if (!tickers.includes(config.ticker)) tickers.unshift(config.ticker);
  els.tearTicker.innerHTML = Array.from(new Set(tickers)).map((ticker) => {
    const company = resolveValuationMatrixCompany(ticker);
    return `<option value="${escapeAttr(ticker)}">${escapeHtml(ticker)} - ${escapeHtml(company.name || ticker)}</option>`;
  }).join("");
}

function normalizeTearSheetConfig(config) {
  const defaults = getDefaultTearSheetConfig();
  return {
    ticker: normalizeTicker(config.ticker || defaults.ticker),
    stance: normalizeChoice(config.stance, ["Auto", "Constructive", "Watch", "Avoid"], defaults.stance),
    conviction: normalizeChoice(config.conviction, ["High", "Medium", "Low"], defaults.conviction),
    horizon: normalizeChoice(config.horizon, ["12 months", "3-5 years", "Next earnings"], defaults.horizon),
    decisionNote: String(config.decisionNote || defaults.decisionNote).slice(0, 180)
  };
}

function getDefaultTearSheetConfig() {
  const company = getCompany(state.selectedTicker || "NSCP") || SAMPLE_COMPANIES[0];
  return {
    ticker: company.ticker || "NSCP",
    stance: "Auto",
    conviction: "Medium",
    horizon: "12 months",
    decisionNote: "Source-backed watchlist candidate pending live filing refresh."
  };
}

function hydrateTearSheetFromCurrentResearch() {
  const focus = state.tickerFocus || resolveTickerFocus(els.queryInput?.value || "") || null;
  const target = focus ? focus.ticker : (state.currentCitations[0] ? state.currentCitations[0].ticker : state.selectedTicker);
  state.tearSheetConfig = normalizeTearSheetConfig({
    ...(state.tearSheetConfig || getDefaultTearSheetConfig()),
    ticker: target,
    stance: "Auto",
    conviction: state.currentCitations.length >= 4 ? "High" : "Medium",
    decisionNote: state.lastAnswerModel ? `Built from latest ${state.lastAnswerModel.intentId || "research"} answer and active valuation lens.` : "Built from active ticker and current valuation lens."
  });
}

function loadTearSheetConfig() {
  return normalizeTearSheetConfig(loadJson(STORAGE_KEYS.tearSheet, getDefaultTearSheetConfig()));
}

function saveTearSheetConfig() {
  saveJson(STORAGE_KEYS.tearSheet, normalizeTearSheetConfig(state.tearSheetConfig || getDefaultTearSheetConfig()));
}

function exportResearchTearSheet() {
  const snapshot = state.currentTearSheet || buildResearchTearSheetSnapshot();
  const date = new Date().toISOString().slice(0, 10);
  const content = [
    "# CiteAlpha Research Tear Sheet",
    "",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    "## Header",
    "",
    `- Company: ${snapshot.company.ticker} - ${snapshot.company.name}`,
    `- Stance: ${snapshot.stance}`,
    `- Conviction: ${snapshot.config.conviction}`,
    `- Horizon: ${snapshot.config.horizon}`,
    `- Evidence coverage: ${snapshot.evidenceScore}/100`,
    `- Risk score: ${snapshot.riskScore}/100`,
    "",
    "## Thesis Snapshot",
    "",
    ...snapshot.thesisRows.map((row) => `- ${row.label}: ${row.title} - ${row.body}`),
    "",
    "## Valuation And Risk",
    "",
    ...snapshot.valuationRows.map((row) => `- ${row.label}: ${row.title} - ${row.body}`),
    "",
    "## Next Research Actions",
    "",
    ...snapshot.actionRows.map((row) => `- ${row.priority}: ${row.question}`),
    "",
    "## Product Note",
    "",
    "This tear sheet is a client-side research artifact for product prototyping. Production should connect live filings, transcripts, market data, analyst-reviewed assumptions, and compliance review before user-facing publication."
  ].join("\n");
  downloadTextFile(`citealpha-research-tear-sheet-${snapshot.company.ticker.toLowerCase()}-${date}.md`, content, "text/markdown;charset=utf-8");
  flashButtonLabel(els.exportTearSheet, "Exported");
}

function renderThesisDebateRoom() {
  if (!els.debateMetricGrid) return;
  if (!state.thesisDebateConfig) state.thesisDebateConfig = loadThesisDebateConfig();
  syncThesisDebateInputs();
  const snapshot = buildThesisDebateSnapshot();
  state.currentThesisDebate = snapshot;
  els.debateMetricGrid.innerHTML = [
    { label: "Bull strength", value: `${snapshot.bullScore}/100`, sub: snapshot.bullLabel },
    { label: "Bear pressure", value: `${snapshot.bearScore}/100`, sub: snapshot.bearLabel },
    { label: "Debate tension", value: `${snapshot.tensionScore}/100`, sub: snapshot.tensionLabel },
    { label: "Decision cue", value: snapshot.decisionCue, sub: `${snapshot.evidenceScore}/100 evidence` }
  ].map((metric) => `
    <div class="debate-metric">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(String(metric.value))}</strong>
      <em>${escapeHtml(metric.sub)}</em>
    </div>
  `).join("");
  els.debateBullScore.textContent = `${snapshot.bullScore}/100`;
  els.debateBullList.innerHTML = renderDebateRows(snapshot.bullRows);
  els.debateBearScore.textContent = `${snapshot.bearScore}/100`;
  els.debateBearList.innerHTML = renderDebateRows(snapshot.bearRows);
  els.debateQuestionCount.textContent = String(snapshot.questionRows.length);
  els.debateQuestionQueue.innerHTML = renderDebateQuestions([...snapshot.rebuttalRows, ...snapshot.questionRows]);
}

function buildThesisDebateSnapshot() {
  const config = normalizeThesisDebateConfig(state.thesisDebateConfig || getDefaultThesisDebateConfig());
  const company = resolveValuationMatrixCompany(config.ticker);
  const citations = state.currentCitations.filter((citation) => citation.ticker === company.ticker);
  const docs = state.documents.filter((doc) => doc.ticker === company.ticker && state.enabledDocIds.has(doc.id));
  const sourceAudit = makeLightSourceAudit(citations);
  const evidenceScore = Math.max(30, Math.min(100, Math.round(40 + docs.length * 7 + citations.length * 6 + (sourceAudit.quality || 44) * 0.15)));
  const valuation = buildTearSheetValuation(company);
  const riskFactors = buildRiskFactors(citations, company);
  const riskPenalty = Math.max(0, company.risk - 50);
  const bullScore = Math.max(5, Math.min(99, Math.round(company.growth * 0.65 + company.fcfMargin * 1.2 + company.sentiment * 0.52 + evidenceScore * 0.18 - riskPenalty * 0.28)));
  const bearScore = Math.max(5, Math.min(99, Math.round(company.risk * 0.62 + Math.max(0, company.netDebt || 0) * 3.2 + (riskFactors[0]?.severity === "High" ? 12 : 5) + Math.max(0, 68 - evidenceScore) * 0.42 - company.fcfMargin * 0.25)));
  const modeTilt = config.mode === "Bear case" ? 8 : config.mode === "Bull case" ? -8 : 0;
  const adjustedBear = Math.max(5, Math.min(99, bearScore + modeTilt));
  const tensionScore = Math.max(1, Math.min(99, Math.round((bullScore + adjustedBear) / 2 - Math.abs(bullScore - adjustedBear) * 0.15)));
  const decisionCue = bullScore - adjustedBear >= 18 ? "Advance" : adjustedBear - bullScore >= 12 ? "Pause" : "Research";
  const topRisk = riskFactors[0] || makeGenericRiskBlueprint(company)[0];
  const bullRows = buildDebateBullRows(company, config, valuation, evidenceScore);
  const bearRows = buildDebateBearRows(company, topRisk, valuation, evidenceScore, adjustedBear);
  const rebuttalRows = buildDebateRebuttalRows(company, topRisk, valuation, evidenceScore);
  const questionRows = buildDebateQuestionRows(company, config, topRisk, valuation, decisionCue);
  return {
    config,
    company,
    citations,
    docs,
    evidenceScore,
    valuation,
    riskFactors,
    topRisk,
    bullScore,
    bearScore: adjustedBear,
    tensionScore,
    decisionCue,
    bullLabel: bullScore >= 72 ? "Thesis has support" : bullScore >= 55 ? "Needs proof" : "Thin upside case",
    bearLabel: adjustedBear >= 72 ? "Bear case is loud" : adjustedBear >= 55 ? "Real pressure" : "Manageable pressure",
    tensionLabel: tensionScore >= 70 ? "IC debate needed" : tensionScore >= 50 ? "Good diligence topic" : "Low conflict",
    bullRows,
    bearRows,
    rebuttalRows,
    questionRows
  };
}

function buildDebateBullRows(company, config, valuation, evidenceScore) {
  return [
    {
      label: "Growth",
      title: `${company.growth}% revenue growth with ${company.sentiment}/100 tone`,
      body: `${company.thesis} Debate horizon: ${config.horizon}.`,
      level: "bull"
    },
    {
      label: "Cash",
      title: `${company.fcfMargin}% FCF margin and ${company.netDebt < 0 ? "net cash" : "net debt"}`,
      body: company.netDebt < 0 ? "Balance sheet gives the thesis more room for timing volatility." : "Cash conversion must prove it can absorb debt and reinvestment needs.",
      level: company.netDebt < 0 ? "bull" : "watch"
    },
    {
      label: "Value",
      title: `${formatPerShare(valuation.baseCase.perShare)} base | ${formatPerShare(valuation.bullCase.perShare)} bull`,
      body: `Top valuation lever is ${valuation.topDriver ? valuation.topDriver.shortLabel : "n/a"}. Evidence support is ${evidenceScore}/100.`,
      level: evidenceScore >= 65 ? "bull" : "watch"
    }
  ];
}

function buildDebateBearRows(company, topRisk, valuation, evidenceScore, bearScore) {
  return [
    {
      label: "Risk",
      title: `${topRisk.title} (${topRisk.severity})`,
      body: topRisk.body,
      level: topRisk.severity === "High" ? "bear" : "watch"
    },
    {
      label: "Downside",
      title: `${formatPerShare(valuation.bearCase.perShare)} bear value`,
      body: `Bear pressure is ${bearScore}/100. If assumptions fade, the valuation case compresses toward the bear range.`,
      level: bearScore >= 70 ? "bear" : "watch"
    },
    {
      label: "Source",
      title: `${evidenceScore}/100 evidence cover`,
      body: evidenceScore < 65 ? "The bear team can attack source depth before attacking the numbers." : "Source cover is adequate, so the debate should focus on interpretation.",
      level: evidenceScore < 65 ? "bear" : "watch"
    }
  ];
}

function buildDebateRebuttalRows(company, topRisk, valuation, evidenceScore) {
  return [
    {
      label: "Rebuttal",
      topic: "Rebuttal",
      question: `What source evidence rebuts the bear claim that $${company.ticker}'s ${topRisk.title.toLowerCase()} risk can break the thesis?`,
      title: "Best rebuttal to the bear case",
      body: `Defend ${formatPerShare(valuation.baseCase.perShare)} base value with source-backed operating evidence, not just multiple expansion.`
    },
    {
      label: "Gap",
      topic: "Evidence gap",
      question: `Which missing filing or call passage would most change the $${company.ticker} debate?`,
      title: "Evidence gap to close",
      body: evidenceScore < 65 ? "Import more source text before treating the debate as decision-ready." : "Evidence exists; next step is testing whether it directly supports the key assumptions."
    }
  ];
}

function buildDebateQuestionRows(company, config, topRisk, valuation, decisionCue) {
  return [
    {
      topic: "Killer question",
      question: `What is the strongest reason not to buy $${company.ticker} if the bull case is wrong?`
    },
    {
      topic: "Assumption test",
      question: `Which assumption must hold for $${company.ticker} to justify ${formatPerShare(valuation.bullCase.perShare)} bull value?`
    },
    {
      topic: "Risk trigger",
      question: `What filing language would confirm that $${company.ticker}'s ${topRisk.title.toLowerCase()} risk is worsening?`
    },
    {
      topic: "Decision cue",
      question: `Given a ${decisionCue.toLowerCase()} cue, what evidence should the committee require before changing $${company.ticker}'s stance?`
    }
  ].slice(0, config.mode === "IC prep" ? 4 : 3);
}

function renderDebateRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No debate rows yet</strong><span>Run the debate to pressure-test the thesis.</span></div>`;
  }
  return rows.map((row) => `
    <div class="debate-row ${escapeAttr(row.level || "watch")}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)}</em>
      </div>
    </div>
  `).join("");
}

function renderDebateQuestions(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No questions yet</strong><span>Run the debate room to generate hard follow-ups.</span></div>`;
  }
  return rows.map((row) => `
    <button class="debate-question-row" type="button" data-debate-question="${escapeAttr(row.question)}">
      <span>${escapeHtml(row.topic || row.label || "Question")}</span>
      <strong>${escapeHtml(row.question)}</strong>
      ${row.body ? `<em>${escapeHtml(row.body)}</em>` : ""}
    </button>
  `).join("");
}

function readThesisDebateConfig() {
  return normalizeThesisDebateConfig({
    ticker: els.debateTicker.value,
    mode: els.debateMode.value,
    evidenceBar: els.debateEvidenceBar.value,
    horizon: els.debateHorizon.value,
    thesis: els.debateThesis.value
  });
}

function syncThesisDebateInputs() {
  if (!els.debateTicker) return;
  syncThesisDebateTickerOptions();
  const config = normalizeThesisDebateConfig(state.thesisDebateConfig || getDefaultThesisDebateConfig());
  els.debateTicker.value = config.ticker;
  els.debateMode.value = config.mode;
  els.debateEvidenceBar.value = config.evidenceBar;
  els.debateHorizon.value = config.horizon;
  els.debateThesis.value = config.thesis;
}

function syncThesisDebateTickerOptions() {
  if (!els.debateTicker) return;
  const config = normalizeThesisDebateConfig(state.thesisDebateConfig || getDefaultThesisDebateConfig());
  const tickers = getCompanies().map((company) => company.ticker);
  if (!tickers.includes(config.ticker)) tickers.unshift(config.ticker);
  els.debateTicker.innerHTML = Array.from(new Set(tickers)).map((ticker) => {
    const company = resolveValuationMatrixCompany(ticker);
    return `<option value="${escapeAttr(ticker)}">${escapeHtml(ticker)} - ${escapeHtml(company.name || ticker)}</option>`;
  }).join("");
}

function normalizeThesisDebateConfig(config) {
  const defaults = getDefaultThesisDebateConfig();
  return {
    ticker: normalizeTicker(config.ticker || defaults.ticker),
    mode: normalizeChoice(config.mode, ["Balanced", "Bear case", "Bull case", "IC prep"], defaults.mode),
    evidenceBar: normalizeChoice(config.evidenceBar, ["Balanced", "Strict", "Exploratory"], defaults.evidenceBar),
    horizon: normalizeChoice(config.horizon, ["12 months", "3-5 years", "Next earnings"], defaults.horizon),
    thesis: String(config.thesis || defaults.thesis).slice(0, 180)
  };
}

function getDefaultThesisDebateConfig() {
  const company = getCompany(state.selectedTicker || "NSCP") || SAMPLE_COMPANIES[0];
  return {
    ticker: company.ticker || "NSCP",
    mode: "Balanced",
    evidenceBar: "Balanced",
    horizon: "12 months",
    thesis: "The company has enough evidence-backed upside to stay on the active research list."
  };
}

function hydrateThesisDebateFromTearSheet() {
  const tear = state.currentTearSheet || buildResearchTearSheetSnapshot();
  state.thesisDebateConfig = normalizeThesisDebateConfig({
    ...(state.thesisDebateConfig || getDefaultThesisDebateConfig()),
    ticker: tear.company.ticker,
    mode: tear.stance === "Avoid" ? "Bear case" : "Balanced",
    evidenceBar: tear.evidenceScore >= 75 ? "Strict" : "Balanced",
    horizon: tear.config.horizon,
    thesis: `${tear.company.ticker} can defend a ${tear.stance.toLowerCase()} stance if the tear sheet evidence holds.`
  });
}

function loadThesisDebateConfig() {
  return normalizeThesisDebateConfig(loadJson(STORAGE_KEYS.thesisDebate, getDefaultThesisDebateConfig()));
}

function saveThesisDebateConfig() {
  saveJson(STORAGE_KEYS.thesisDebate, normalizeThesisDebateConfig(state.thesisDebateConfig || getDefaultThesisDebateConfig()));
}

function exportThesisDebateBrief() {
  const snapshot = state.currentThesisDebate || buildThesisDebateSnapshot();
  const date = new Date().toISOString().slice(0, 10);
  const content = [
    "# CiteAlpha Thesis Debate Memo",
    "",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    "## Debate Setup",
    "",
    `- Company: ${snapshot.company.ticker} - ${snapshot.company.name}`,
    `- Mode: ${snapshot.config.mode}`,
    `- Horizon: ${snapshot.config.horizon}`,
    `- Thesis: ${snapshot.config.thesis}`,
    "",
    "## Scorecard",
    "",
    `- Bull strength: ${snapshot.bullScore}/100`,
    `- Bear pressure: ${snapshot.bearScore}/100`,
    `- Debate tension: ${snapshot.tensionScore}/100`,
    `- Decision cue: ${snapshot.decisionCue}`,
    `- Evidence score: ${snapshot.evidenceScore}/100`,
    "",
    "## Bull Case",
    "",
    ...snapshot.bullRows.map((row) => `- ${row.label}: ${row.title} - ${row.body}`),
    "",
    "## Bear Case",
    "",
    ...snapshot.bearRows.map((row) => `- ${row.label}: ${row.title} - ${row.body}`),
    "",
    "## Rebuttals And Questions",
    "",
    ...[...snapshot.rebuttalRows, ...snapshot.questionRows].map((row) => `- ${row.topic || row.label}: ${row.question}`),
    "",
    "## Product Note",
    "",
    "This debate room is a client-side thesis challenge workflow. Production should connect source-grounded answers, reviewer notes, portfolio context, and compliance controls before presenting debate outcomes to paying users."
  ].join("\n");
  downloadTextFile(`citealpha-thesis-debate-${snapshot.company.ticker.toLowerCase()}-${date}.md`, content, "text/markdown;charset=utf-8");
  flashButtonLabel(els.exportDebateBrief, "Exported");
}

function renderResearchDossierBuilder() {
  if (!els.dossierMetricGrid) return;
  if (!state.dossierConfig) state.dossierConfig = loadDossierConfig();
  syncDossierInputs();
  const snapshot = buildResearchDossierSnapshot();
  state.currentDossier = snapshot;
  els.dossierMetricGrid.innerHTML = [
    { label: "Dossier score", value: `${snapshot.dossierScore}/100`, sub: snapshot.scoreLabel },
    { label: "Packet", value: snapshot.config.style, sub: snapshot.config.audience },
    { label: "Evidence", value: `${snapshot.evidenceScore}/100`, sub: `${snapshot.citationCount} cites | ${snapshot.docCount} docs` },
    { label: "Open gaps", value: snapshot.gapCount, sub: snapshot.gapLabel }
  ].map((metric) => `
    <div class="dossier-metric">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(String(metric.value))}</strong>
      <em>${escapeHtml(metric.sub)}</em>
    </div>
  `).join("");
  els.dossierSectionCount.textContent = String(snapshot.sectionRows.length);
  els.dossierSectionList.innerHTML = renderDossierRows(snapshot.sectionRows);
  els.dossierChecklistScore.textContent = `${snapshot.checklistScore}%`;
  els.dossierChecklist.innerHTML = renderDossierChecklist(snapshot.checklistRows);
  els.dossierQueueCount.textContent = String(snapshot.queueRows.length);
  els.dossierQuestionQueue.innerHTML = renderDossierQuestions(snapshot.queueRows);
}

function buildResearchDossierSnapshot() {
  const config = normalizeDossierConfig(state.dossierConfig || getDefaultDossierConfig());
  const company = resolveValuationMatrixCompany(config.ticker);
  const docs = state.documents.filter((doc) => doc.ticker === company.ticker && state.enabledDocIds.has(doc.id));
  const citations = state.currentCitations.filter((citation) => citation.ticker === company.ticker);
  const sourceAudit = makeLightSourceAudit(citations);
  const citationCount = citations.length;
  const docCount = docs.length;
  const evidenceScore = Math.max(28, Math.min(100, Math.round(34 + docCount * 8 + citationCount * 7 + (sourceAudit.quality || 42) * 0.16)));
  const security = summarizeSecurityPosture();
  const valuation = buildTearSheetValuation(company);
  const riskFactors = buildRiskFactors(citations, company);
  const topRisk = riskFactors[0] || makeGenericRiskBlueprint(company)[0];
  const activeTear = state.currentTearSheet && state.currentTearSheet.company && state.currentTearSheet.company.ticker === company.ticker ? state.currentTearSheet : null;
  const activeDebate = state.currentThesisDebate && state.currentThesisDebate.company && state.currentThesisDebate.company.ticker === company.ticker ? state.currentThesisDebate : null;
  const stance = activeTear ? activeTear.stance : resolveDossierStance(company, evidenceScore, topRisk);
  const debateCue = activeDebate ? activeDebate.decisionCue : (company.sentiment >= 70 && topRisk.severity !== "High" ? "Advance" : "Research");
  const minCitations = getDossierCitationThreshold(config.evidenceBar);
  const currentAnswerReady = Boolean(state.lastBrief && citationCount >= Math.min(2, minCitations));
  const sectionRows = buildDossierSectionRows(company, config, {
    activeTear,
    activeDebate,
    stance,
    debateCue,
    valuation,
    topRisk,
    evidenceScore,
    sourceAudit,
    citationCount,
    docCount,
    currentAnswerReady,
    security
  });
  const checklistRows = buildDossierChecklistRows(company, config, {
    activeDebate,
    evidenceScore,
    minCitations,
    citationCount,
    docCount,
    currentAnswerReady,
    security,
    sourceAudit
  });
  const readyRows = checklistRows.filter((row) => row.status === "Ready").length;
  const checklistScore = Math.round((readyRows / Math.max(1, checklistRows.length)) * 100);
  const gapCount = checklistRows.filter((row) => row.status !== "Ready").length;
  const dossierScore = Math.max(1, Math.min(100, Math.round(evidenceScore * 0.34 + checklistScore * 0.34 + security.score * 0.18 + (activeDebate ? 14 : 6))));
  const queueRows = buildDossierQueueRows(company, config, {
    activeDebate,
    valuation,
    topRisk,
    minCitations,
    citationCount,
    evidenceScore,
    currentAnswerReady,
    security,
    debateCue
  });
  return {
    config,
    company,
    docs,
    citations,
    citationCount,
    docCount,
    sourceAudit,
    security,
    valuation,
    riskFactors,
    topRisk,
    activeTear,
    activeDebate,
    stance,
    debateCue,
    minCitations,
    evidenceScore,
    checklistScore,
    dossierScore,
    scoreLabel: dossierScore >= 82 ? "Shareable draft" : dossierScore >= 65 ? "Review before sharing" : "Needs more source work",
    gapCount,
    gapLabel: gapCount ? "Close before launch" : "Ready for review",
    sectionRows,
    checklistRows,
    queueRows
  };
}

function buildDossierSectionRows(company, config, context) {
  return [
    {
      label: "Cover",
      title: `${company.ticker} research packet for ${config.audience.toLowerCase()}`,
      body: config.objective,
      level: "normal"
    },
    {
      label: "Thesis",
      title: `${context.stance} stance | ${context.debateCue} cue`,
      body: context.currentAnswerReady ? `Current answer and ${context.citationCount} citations are ready for packet assembly.` : "Run one current answer so the dossier starts from a fresh source-linked brief.",
      level: context.currentAnswerReady ? "normal" : "warning"
    },
    {
      label: "Evidence",
      title: `${context.evidenceScore}/100 source coverage`,
      body: `${context.docCount} enabled documents and ${context.citationCount} current citations. Source audit quality is ${context.sourceAudit.quality || 0}/100.`,
      level: context.evidenceScore >= 75 ? "normal" : context.evidenceScore >= 58 ? "warning" : "danger"
    },
    {
      label: "Value",
      title: `${formatPerShare(context.valuation.bearCase.perShare)} bear | ${formatPerShare(context.valuation.baseCase.perShare)} base | ${formatPerShare(context.valuation.bullCase.perShare)} bull`,
      body: `Top sensitivity is ${context.valuation.topDriver ? context.valuation.topDriver.shortLabel : "not ranked yet"}. Packet style: ${config.style}.`,
      level: "normal"
    },
    {
      label: "Debate",
      title: context.activeDebate ? `${context.activeDebate.bullScore}/100 bull vs ${context.activeDebate.bearScore}/100 bear` : "Debate not attached yet",
      body: context.activeDebate ? `${context.activeDebate.tensionLabel}. Include rebuttals before committee review.` : "Use the Thesis Debate Room to add bull, bear, rebuttal, and killer-question coverage.",
      level: context.activeDebate ? "normal" : "warning"
    },
    {
      label: "Risk",
      title: `${context.topRisk.title} (${context.topRisk.severity})`,
      body: context.topRisk.body,
      level: context.topRisk.severity === "High" ? "danger" : "warning"
    },
    {
      label: "Control",
      title: `${context.security.score}/100 security posture`,
      body: context.security.findings.length ? `${context.security.findings.length} security finding should be reviewed before distribution.` : "No risky patterns detected in enabled imports.",
      level: context.security.score >= 90 ? "normal" : "warning"
    }
  ];
}

function buildDossierChecklistRows(company, config, context) {
  return [
    {
      label: "Answer",
      title: "Current source-linked answer",
      body: context.currentAnswerReady ? "A fresh answer is available for this ticker." : `Ask a current question for $${company.ticker} before exporting the packet.`,
      status: context.currentAnswerReady ? "Ready" : "Next",
      level: context.currentAnswerReady ? "normal" : "warning"
    },
    {
      label: "Citations",
      title: `${context.citationCount}/${context.minCitations} citation minimum`,
      body: `${config.evidenceBar} evidence bar for ${config.audience.toLowerCase()}.`,
      status: context.citationCount >= context.minCitations ? "Ready" : "Next",
      level: context.citationCount >= context.minCitations ? "normal" : "warning"
    },
    {
      label: "Sources",
      title: `${context.docCount} enabled source docs`,
      body: context.docCount >= 2 ? "Filing, call, or model evidence can be packaged." : "Import or enable another source before relying on the packet.",
      status: context.docCount >= 2 ? "Ready" : "Next",
      level: context.docCount >= 2 ? "normal" : "warning"
    },
    {
      label: "Audit",
      title: `${context.sourceAudit.quality || 0}/100 source audit`,
      body: context.sourceAudit.quality >= 70 ? "Evidence trail is strong enough for a prototype packet." : "Evidence needs better coverage or higher-scoring passages.",
      status: context.sourceAudit.quality >= 70 ? "Ready" : "Next",
      level: context.sourceAudit.quality >= 70 ? "normal" : "warning"
    },
    {
      label: "Debate",
      title: context.activeDebate ? "Bull/bear debate attached" : "Debate missing",
      body: context.activeDebate ? "Packet includes rebuttal pressure before decision use." : "Run the Thesis Debate Room for this ticker.",
      status: context.activeDebate ? "Ready" : "Next",
      level: context.activeDebate ? "normal" : "warning"
    },
    {
      label: "Security",
      title: `${context.security.score}/100 security scan`,
      body: context.security.findings.length ? "Review imported text findings before export." : "Question and import guardrails are clean.",
      status: context.security.score >= 90 ? "Ready" : "Review",
      level: context.security.score >= 90 ? "normal" : "warning"
    }
  ];
}

function buildDossierQueueRows(company, config, context) {
  const rows = [];
  if (!context.currentAnswerReady) {
    rows.push({
      priority: "High",
      topic: "Fresh answer",
      question: `Build a current source-linked dossier answer for $${company.ticker}.`
    });
  }
  if (context.citationCount < context.minCitations) {
    rows.push({
      priority: "High",
      topic: "Citation gap",
      question: `Which filing or call passages should I import to reach ${context.minCitations} citations for $${company.ticker}?`
    });
  }
  if (!context.activeDebate) {
    rows.push({
      priority: "Medium",
      topic: "Debate gap",
      question: `What is the strongest bear case against the $${company.ticker} thesis, and what evidence rebuts it?`
    });
  }
  rows.push(
    {
      priority: context.topRisk.severity === "High" ? "High" : "Medium",
      topic: "Risk proof",
      question: `What source evidence proves whether $${company.ticker}'s ${context.topRisk.title.toLowerCase()} risk is getting better or worse?`
    },
    {
      priority: "Medium",
      topic: "Value bridge",
      question: `What assumptions must hold for $${company.ticker} to defend ${formatPerShare(context.valuation.baseCase.perShare)} base value?`
    },
    {
      priority: config.audience === "Compliance review" ? "High" : "Low",
      topic: "Release review",
      question: `What should be removed or caveated before sharing the $${company.ticker} dossier with ${config.audience.toLowerCase()}?`
    }
  );
  return rows.slice(0, config.style === "One-page memo" ? 4 : 6);
}

function renderDossierRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No dossier yet</strong><span>Build the packet to assemble sections.</span></div>`;
  }
  return rows.map((row) => `
    <div class="dossier-row ${escapeAttr(row.level || "normal")}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)}</em>
      </div>
    </div>
  `).join("");
}

function renderDossierChecklist(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No checklist yet</strong><span>Build the packet to score release readiness.</span></div>`;
  }
  return rows.map((row) => `
    <div class="dossier-check-row ${escapeAttr(row.level || "normal")}">
      <span>${escapeHtml(row.status)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)}</em>
      </div>
    </div>
  `).join("");
}

function renderDossierQuestions(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No open questions</strong><span>The packet is ready for review.</span></div>`;
  }
  return rows.map((row) => `
    <button class="dossier-question-row" type="button" data-dossier-question="${escapeAttr(row.question)}">
      <span>${escapeHtml(row.priority)} | ${escapeHtml(row.topic)}</span>
      <strong>${escapeHtml(row.question)}</strong>
    </button>
  `).join("");
}

function readDossierConfig() {
  return normalizeDossierConfig({
    ticker: els.dossierTicker.value,
    audience: els.dossierAudience.value,
    style: els.dossierStyle.value,
    evidenceBar: els.dossierEvidenceBar.value,
    objective: els.dossierObjective.value
  });
}

function syncDossierInputs() {
  if (!els.dossierTicker) return;
  syncDossierTickerOptions();
  const config = normalizeDossierConfig(state.dossierConfig || getDefaultDossierConfig());
  els.dossierTicker.value = config.ticker;
  els.dossierAudience.value = config.audience;
  els.dossierStyle.value = config.style;
  els.dossierEvidenceBar.value = config.evidenceBar;
  els.dossierObjective.value = config.objective;
}

function syncDossierTickerOptions() {
  if (!els.dossierTicker) return;
  const config = normalizeDossierConfig(state.dossierConfig || getDefaultDossierConfig());
  const tickers = getCompanies().map((company) => company.ticker);
  if (!tickers.includes(config.ticker)) tickers.unshift(config.ticker);
  els.dossierTicker.innerHTML = Array.from(new Set(tickers)).map((ticker) => {
    const company = resolveValuationMatrixCompany(ticker);
    return `<option value="${escapeAttr(ticker)}">${escapeHtml(ticker)} - ${escapeHtml(company.name || ticker)}</option>`;
  }).join("");
}

function normalizeDossierConfig(config) {
  const defaults = getDefaultDossierConfig();
  return {
    ticker: normalizeTicker(config.ticker || defaults.ticker),
    audience: normalizeChoice(config.audience, ["Investment committee", "Retail subscriber", "Founder demo", "Compliance review"], defaults.audience),
    style: normalizeChoice(config.style, ["Full dossier", "One-page memo", "Board pack", "Sales demo"], defaults.style),
    evidenceBar: normalizeChoice(config.evidenceBar, ["Decision-ready", "Balanced", "Fast draft"], defaults.evidenceBar),
    objective: String(config.objective || defaults.objective).slice(0, 190)
  };
}

function getDefaultDossierConfig() {
  const company = getCompany(state.selectedTicker || "NSCP") || SAMPLE_COMPANIES[0];
  return {
    ticker: company.ticker || "NSCP",
    audience: "Investment committee",
    style: "Full dossier",
    evidenceBar: "Decision-ready",
    objective: "Prepare a source-linked research packet that can be reviewed, exported, and shared without losing the evidence trail."
  };
}

function hydrateDossierFromActiveResearch() {
  const focus = state.tickerFocus || resolveTickerFocus(els.queryInput?.value || "") || null;
  const target = focus ? focus.ticker : (state.currentCitations[0] ? state.currentCitations[0].ticker : state.selectedTicker);
  const citationCount = state.currentCitations.filter((citation) => citation.ticker === target).length;
  state.dossierConfig = normalizeDossierConfig({
    ...(state.dossierConfig || getDefaultDossierConfig()),
    ticker: target,
    audience: citationCount >= 4 ? "Investment committee" : "Retail subscriber",
    style: state.currentThesisDebate ? "Board pack" : "Full dossier",
    evidenceBar: citationCount >= 4 ? "Decision-ready" : "Balanced",
    objective: state.lastAnswerModel
      ? `Package the latest ${state.lastAnswerModel.intentId || "research"} answer, evidence, valuation, and debate checks into a shareable dossier.`
      : "Package the active ticker into a source-linked research dossier."
  });
}

function resolveDossierStance(company, evidenceScore, topRisk) {
  if (topRisk.severity === "High" && evidenceScore < 70) return "Watch";
  if (company.sentiment >= 70 && company.risk <= 58 && evidenceScore >= 68) return "Constructive";
  if (company.risk >= 75 && evidenceScore < 60) return "Avoid";
  return "Research";
}

function getDossierCitationThreshold(evidenceBar) {
  if (evidenceBar === "Decision-ready") return 4;
  if (evidenceBar === "Fast draft") return 2;
  return 3;
}

function loadDossierConfig() {
  return normalizeDossierConfig(loadJson(STORAGE_KEYS.dossier, getDefaultDossierConfig()));
}

function saveDossierConfig() {
  saveJson(STORAGE_KEYS.dossier, normalizeDossierConfig(state.dossierConfig || getDefaultDossierConfig()));
}

function exportResearchDossier() {
  const snapshot = state.currentDossier || buildResearchDossierSnapshot();
  const date = new Date().toISOString().slice(0, 10);
  const content = [
    "# CiteAlpha Research Dossier",
    "",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    "## Packet Setup",
    "",
    `- Company: ${snapshot.company.ticker} - ${snapshot.company.name}`,
    `- Audience: ${snapshot.config.audience}`,
    `- Style: ${snapshot.config.style}`,
    `- Evidence bar: ${snapshot.config.evidenceBar}`,
    `- Objective: ${snapshot.config.objective}`,
    "",
    "## Scorecard",
    "",
    `- Dossier score: ${snapshot.dossierScore}/100`,
    `- Evidence score: ${snapshot.evidenceScore}/100`,
    `- Release checklist: ${snapshot.checklistScore}%`,
    `- Open gaps: ${snapshot.gapCount}`,
    `- Security posture: ${snapshot.security.score}/100`,
    "",
    "## Packet Sections",
    "",
    ...snapshot.sectionRows.map((row) => `- ${row.label}: ${row.title} - ${row.body}`),
    "",
    "## Release Checklist",
    "",
    ...snapshot.checklistRows.map((row) => `- ${row.status}: ${row.title} - ${row.body}`),
    "",
    "## Close-The-Pack Questions",
    "",
    ...snapshot.queueRows.map((row) => `- ${row.priority} | ${row.topic}: ${row.question}`),
    "",
    "## Product Note",
    "",
    "This dossier is a client-side research assembly workflow for product prototyping. Production should use authenticated users, server-side retrieval, immutable audit logs, reviewer approvals, and compliance-reviewed disclosures before sharing with paying users."
  ].join("\n");
  downloadTextFile(`citealpha-research-dossier-${snapshot.company.ticker.toLowerCase()}-${date}.md`, content, "text/markdown;charset=utf-8");
  flashButtonLabel(els.exportDossierBrief, "Exported");
}

function renderThesisTimelineAuditTrail() {
  if (!els.timelineMetricGrid) return;
  if (!state.timelineConfig) state.timelineConfig = loadTimelineConfig();
  syncTimelineInputs();
  const snapshot = buildThesisTimelineSnapshot();
  state.currentTimeline = snapshot;
  els.timelineMetricGrid.innerHTML = [
    { label: "Audit score", value: `${snapshot.auditScore}/100`, sub: snapshot.auditLabel },
    { label: "Events", value: snapshot.eventRows.length, sub: `${snapshot.config.lookback}` },
    { label: "Thesis drift", value: `${snapshot.driftScore}/100`, sub: snapshot.driftLabel },
    { label: "Latest signal", value: snapshot.latestSignal, sub: snapshot.latestDate }
  ].map((metric) => `
    <div class="timeline-metric">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(String(metric.value))}</strong>
      <em>${escapeHtml(metric.sub)}</em>
    </div>
  `).join("");
  els.timelineEventCount.textContent = String(snapshot.eventRows.length);
  els.timelineEventList.innerHTML = renderTimelineEvents(snapshot.eventRows);
  els.timelineInflectionCount.textContent = String(snapshot.inflectionRows.length);
  els.timelineInflectionList.innerHTML = renderTimelineInflections(snapshot.inflectionRows);
  els.timelineQuestionCount.textContent = String(snapshot.questionRows.length);
  els.timelineQuestionQueue.innerHTML = renderTimelineQuestions(snapshot.questionRows);
}

function buildThesisTimelineSnapshot() {
  const config = normalizeTimelineConfig(state.timelineConfig || getDefaultTimelineConfig());
  const company = resolveValuationMatrixCompany(config.ticker);
  const rawEvents = buildTimelineEventRows(company, config);
  const scopedEvents = filterTimelineRows(rawEvents, config);
  const eventRows = scopedEvents
    .sort((a, b) => b.sortDate - a.sortDate || b.score - a.score)
    .slice(0, config.scope === "Current answer only" ? 8 : 14);
  const latest = eventRows[0] || makeTimelineFallbackEvent(company);
  const scores = eventRows.map((row) => row.score);
  const driftScore = scores.length > 1 ? Math.min(100, Math.max(1, Math.round(Math.max(...scores) - Math.min(...scores)))) : 12;
  const evidenceRows = eventRows.filter((row) => row.kind === "source" || row.kind === "citation");
  const reviewRows = eventRows.filter((row) => row.level === "warning" || row.level === "danger");
  const security = summarizeSecurityPosture();
  const evidenceScore = Math.max(25, Math.min(100, Math.round(34 + evidenceRows.length * 9 + (state.currentCitations.filter((citation) => citation.ticker === company.ticker).length * 5))));
  const auditScore = Math.max(1, Math.min(100, Math.round(evidenceScore * 0.3 + security.score * 0.2 + Math.max(35, 100 - driftScore) * 0.22 + Math.min(100, eventRows.length * 12) * 0.18 + (state.currentDossier ? 10 : 4))));
  const inflectionRows = buildTimelineInflectionRows(company, config, eventRows, {
    driftScore,
    evidenceScore,
    reviewRows,
    security
  });
  const questionRows = buildTimelineQuestionRows(company, config, latest, inflectionRows, {
    driftScore,
    evidenceScore,
    reviewRows
  });
  return {
    config,
    company,
    eventRows,
    inflectionRows,
    questionRows,
    evidenceScore,
    security,
    auditScore,
    auditLabel: auditScore >= 82 ? "Narrative is review-ready" : auditScore >= 65 ? "Usable with caveats" : "Needs timeline work",
    driftScore,
    driftLabel: driftScore >= 45 ? "Thesis moved materially" : driftScore >= 22 ? "Watch the movement" : "Stable narrative",
    latestSignal: latest.label,
    latestDate: latest.dateLabel
  };
}

function buildTimelineEventRows(company, config) {
  const rows = [];
  const docs = state.documents.filter((doc) => doc.ticker === company.ticker && state.enabledDocIds.has(doc.id));
  docs.forEach((doc) => {
    const quality = (doc.sourceQuality && doc.sourceQuality.quality) || 58;
    const audit = (doc.securityAudit && doc.securityAudit.score) || 100;
    rows.push(makeTimelineRow({
      date: doc.date,
      kind: "source",
      label: doc.type || "Source",
      title: `${doc.period || doc.type} added to source stack`,
      body: `${doc.sourceKind === "uploaded" ? "Imported" : "Sample"} source with ${doc.sections ? doc.sections.length : 0} sections, ${quality}/100 source quality, and ${audit}/100 security score.`,
      level: quality >= 72 && audit >= 90 ? "normal" : quality < 55 || audit < 85 ? "warning" : "normal",
      score: Math.round(quality * 0.7 + audit * 0.3),
      source: doc.sourceKind || "sample"
    }));
  });

  state.currentCitations
    .filter((citation) => citation.ticker === company.ticker)
    .forEach((citation) => {
      rows.push(makeTimelineRow({
        date: citation.date,
        kind: "citation",
        label: citation.citationId || "Cite",
        title: `${citation.type || "Evidence"} supports current answer`,
        body: `${citation.period || "Current source"} scored ${Math.round(citation.score || 0)} relevance for the latest answer.`,
        level: Number(citation.score || 0) >= 24 ? "normal" : "warning",
        score: Math.max(35, Math.min(100, Math.round((citation.score || 18) * 3))),
        source: "current answer"
      }));
    });

  state.workflowEvents
    .filter((event) => timelineEventMatchesTicker(event, company))
    .forEach((event) => {
      rows.push(makeTimelineRow({
        date: event.date,
        kind: event.kind || "workflow",
        label: formatTimelineKind(event.kind),
        title: makeWorkflowTimelineTitle(event),
        body: makeWorkflowTimelineBody(event),
        level: event.kind === "analysis" ? "normal" : "warning",
        score: event.kind === "analysis" ? 68 : event.kind === "save" ? 74 : event.kind === "import" ? 72 : 58,
        source: "workspace"
      }));
    });

  state.notes
    .filter((note) => normalizeTicker(note.intent || "") === company.ticker || String(note.body || "").toUpperCase().includes(company.ticker))
    .forEach((note) => {
      rows.push(makeTimelineRow({
        date: note.date,
        kind: "memo",
        label: "Saved memo",
        title: note.title || "Saved research brief",
        body: "Saved brief preserved the research state for later review.",
        level: "normal",
        score: 76,
        source: "notebook"
      }));
    });

  if (state.currentValuationMatrix && state.currentValuationMatrix.company && state.currentValuationMatrix.company.ticker === company.ticker) {
    rows.push(makeTimelineRow({
      date: new Date().toISOString(),
      kind: "valuation",
      label: "Valuation",
      title: `${formatPerShare(state.currentValuationMatrix.baseCase.perShare)} base value refreshed`,
      body: `Sensitivity work found ${state.currentValuationMatrix.topDriver ? state.currentValuationMatrix.topDriver.shortLabel : "a model driver"} as the key value lever.`,
      level: "normal",
      score: 78,
      source: "valuation matrix"
    }));
  }

  if (state.currentTearSheet && state.currentTearSheet.company && state.currentTearSheet.company.ticker === company.ticker) {
    rows.push(makeTimelineRow({
      date: new Date().toISOString(),
      kind: "tear",
      label: "Tear sheet",
      title: `${state.currentTearSheet.stance} stance created`,
      body: `${state.currentTearSheet.evidenceScore}/100 evidence cover and ${state.currentTearSheet.riskScore}/100 risk score.`,
      level: state.currentTearSheet.stance === "Avoid" ? "danger" : state.currentTearSheet.stance === "Watch" ? "warning" : "normal",
      score: state.currentTearSheet.evidenceScore,
      source: "tear sheet"
    }));
  }

  if (state.currentThesisDebate && state.currentThesisDebate.company && state.currentThesisDebate.company.ticker === company.ticker) {
    rows.push(makeTimelineRow({
      date: new Date().toISOString(),
      kind: "debate",
      label: "Debate",
      title: `${state.currentThesisDebate.decisionCue} cue after bull/bear review`,
      body: `${state.currentThesisDebate.bullScore}/100 bull strength vs ${state.currentThesisDebate.bearScore}/100 bear pressure.`,
      level: state.currentThesisDebate.decisionCue === "Pause" ? "danger" : state.currentThesisDebate.tensionScore >= 70 ? "warning" : "normal",
      score: Math.max(20, 100 - Math.abs(state.currentThesisDebate.bullScore - state.currentThesisDebate.bearScore)),
      source: "debate room"
    }));
  }

  if (state.currentDossier && state.currentDossier.company && state.currentDossier.company.ticker === company.ticker) {
    rows.push(makeTimelineRow({
      date: new Date().toISOString(),
      kind: "dossier",
      label: "Dossier",
      title: `${state.currentDossier.dossierScore}/100 packet readiness`,
      body: `${state.currentDossier.gapCount} open gap${state.currentDossier.gapCount === 1 ? "" : "s"} before sharing with ${state.currentDossier.config.audience.toLowerCase()}.`,
      level: state.currentDossier.gapCount ? "warning" : "normal",
      score: state.currentDossier.dossierScore,
      source: "dossier builder"
    }));
  }

  if (!rows.length) rows.push(makeTimelineFallbackEvent(company));
  return rows;
}

function makeTimelineRow(row) {
  const date = parseTimelineDate(row.date);
  return {
    date,
    sortDate: date.getTime(),
    dateLabel: formatTimelineDate(date),
    kind: row.kind || "event",
    label: row.label || "Event",
    title: row.title || "Timeline event",
    body: row.body || "",
    level: row.level || "normal",
    score: Math.max(1, Math.min(100, Math.round(Number(row.score) || 50))),
    source: row.source || "workspace"
  };
}

function makeTimelineFallbackEvent(company) {
  return makeTimelineRow({
    date: new Date().toISOString(),
    kind: "setup",
    label: "Setup",
    title: `${company.ticker} timeline ready`,
    body: "Run an answer, import sources, build a dossier, or save a brief to populate the thesis history.",
    level: "warning",
    score: 42,
    source: "workspace"
  });
}

function filterTimelineRows(rows, config) {
  const cutoff = getTimelineCutoff(config.lookback);
  return rows.filter((row) => {
    if (cutoff && row.sortDate < cutoff.getTime()) return false;
    if (config.scope === "Filings and calls") return ["source", "citation"].includes(row.kind) || /filing|call/i.test(row.label);
    if (config.scope === "Decisions and exports") return ["memo", "save", "dossier", "debate", "tear", "valuation"].includes(row.kind);
    if (config.scope === "Current answer only") return ["citation"].includes(row.kind) || row.source === "current answer";
    return true;
  });
}

function getTimelineCutoff(lookback) {
  const now = new Date();
  if (lookback === "Last 90 days") return new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
  if (lookback === "Last 12 months") return new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
  if (lookback === "Current session") return new Date(now.toISOString().slice(0, 10));
  return null;
}

function buildTimelineInflectionRows(company, config, rows, context) {
  const latestRisk = rows.find((row) => row.level === "danger" || /risk|bear|pause/i.test(`${row.title} ${row.body}`));
  const latestEvidence = rows.find((row) => row.kind === "citation" || row.kind === "source");
  const latestDossier = rows.find((row) => row.kind === "dossier");
  const latestDebate = rows.find((row) => row.kind === "debate");
  const inflections = [
    {
      label: "Narrative",
      title: context.driftScore >= 45 ? "Thesis narrative moved materially" : "Thesis narrative is broadly stable",
      body: `${context.driftScore}/100 drift across ${rows.length} timeline events under the ${config.lens.toLowerCase()} lens.`,
      level: context.driftScore >= 45 ? "warning" : "normal"
    },
    {
      label: "Evidence",
      title: latestEvidence ? latestEvidence.title : "No evidence inflection yet",
      body: latestEvidence ? latestEvidence.body : `Run a fresh question or import source text for $${company.ticker}.`,
      level: context.evidenceScore >= 70 ? "normal" : "warning"
    },
    {
      label: "Risk",
      title: latestRisk ? latestRisk.title : "No high-risk movement detected",
      body: latestRisk ? latestRisk.body : "Risk movement is not dominating the current timeline.",
      level: latestRisk && latestRisk.level === "danger" ? "danger" : latestRisk ? "warning" : "normal"
    },
    {
      label: "Review",
      title: latestDossier ? latestDossier.title : "Dossier state not attached",
      body: latestDossier ? latestDossier.body : "Build the dossier so the timeline can show packet readiness.",
      level: latestDossier && latestDossier.level === "normal" ? "normal" : "warning"
    },
    {
      label: "Debate",
      title: latestDebate ? latestDebate.title : "No debate turn recorded",
      body: latestDebate ? latestDebate.body : "Run the Thesis Debate Room to add bull/bear pressure to the audit trail.",
      level: latestDebate && latestDebate.level === "normal" ? "normal" : "warning"
    }
  ];
  return inflections.slice(0, config.lens === "Committee narrative" ? 5 : 4);
}

function buildTimelineQuestionRows(company, config, latest, inflections, context) {
  const rows = [
    {
      priority: context.driftScore >= 45 ? "High" : "Medium",
      topic: "Thesis change",
      question: `What changed most in the $${company.ticker} thesis between the earliest and latest timeline events?`
    },
    {
      priority: context.evidenceScore < 70 ? "High" : "Medium",
      topic: "Evidence gap",
      question: `Which source would best explain the latest $${company.ticker} signal: ${latest.title}?`
    },
    {
      priority: context.reviewRows.length ? "High" : "Low",
      topic: "Risk audit",
      question: `Which risk disclosure could invalidate the current $${company.ticker} narrative first?`
    },
    {
      priority: "Medium",
      topic: "Committee story",
      question: `How should I summarize the $${company.ticker} thesis history for ${config.lens.toLowerCase()} review?`
    },
    {
      priority: "Low",
      topic: "Next event",
      question: `What should the next tracked event be for $${company.ticker}: filing, call, valuation, debate, or dossier update?`
    }
  ];
  if (config.scope === "Filings and calls") {
    rows.unshift({
      priority: "High",
      topic: "Filing trail",
      question: `Which 10-K or earnings call language shows whether $${company.ticker}'s thesis improved or deteriorated?`
    });
  }
  return rows.slice(0, 5);
}

function renderTimelineEvents(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No timeline events</strong><span>Run research or import sources to create the audit trail.</span></div>`;
  }
  return rows.map((row) => `
    <div class="timeline-event-row ${escapeAttr(row.level || "normal")}">
      <span>${escapeHtml(row.dateLabel)}</span>
      <div>
        <strong>${escapeHtml(row.label)} | ${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)}</em>
      </div>
    </div>
  `).join("");
}

function renderTimelineInflections(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No inflections yet</strong><span>Build the timeline to reveal narrative changes.</span></div>`;
  }
  return rows.map((row) => `
    <div class="timeline-inflection-row ${escapeAttr(row.level || "normal")}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)}</em>
      </div>
    </div>
  `).join("");
}

function renderTimelineQuestions(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No audit questions</strong><span>The timeline has no open follow-up.</span></div>`;
  }
  return rows.map((row) => `
    <button class="timeline-question-row" type="button" data-timeline-question="${escapeAttr(row.question)}">
      <span>${escapeHtml(row.priority)} | ${escapeHtml(row.topic)}</span>
      <strong>${escapeHtml(row.question)}</strong>
    </button>
  `).join("");
}

function readTimelineConfig() {
  return normalizeTimelineConfig({
    ticker: els.timelineTicker.value,
    lens: els.timelineLens.value,
    lookback: els.timelineLookback.value,
    scope: els.timelineScope.value,
    objective: els.timelineObjective.value
  });
}

function syncTimelineInputs() {
  if (!els.timelineTicker) return;
  syncTimelineTickerOptions();
  const config = normalizeTimelineConfig(state.timelineConfig || getDefaultTimelineConfig());
  els.timelineTicker.value = config.ticker;
  els.timelineLens.value = config.lens;
  els.timelineLookback.value = config.lookback;
  els.timelineScope.value = config.scope;
  els.timelineObjective.value = config.objective;
}

function syncTimelineTickerOptions() {
  if (!els.timelineTicker) return;
  const config = normalizeTimelineConfig(state.timelineConfig || getDefaultTimelineConfig());
  const tickers = getCompanies().map((company) => company.ticker);
  if (!tickers.includes(config.ticker)) tickers.unshift(config.ticker);
  els.timelineTicker.innerHTML = Array.from(new Set(tickers)).map((ticker) => {
    const company = resolveValuationMatrixCompany(ticker);
    return `<option value="${escapeAttr(ticker)}">${escapeHtml(ticker)} - ${escapeHtml(company.name || ticker)}</option>`;
  }).join("");
}

function normalizeTimelineConfig(config) {
  const defaults = getDefaultTimelineConfig();
  return {
    ticker: normalizeTicker(config.ticker || defaults.ticker),
    lens: normalizeChoice(config.lens, ["Thesis evolution", "Risk movement", "Evidence history", "Committee narrative"], defaults.lens),
    lookback: normalizeChoice(config.lookback, ["All available", "Last 90 days", "Last 12 months", "Current session"], defaults.lookback),
    scope: normalizeChoice(config.scope, ["All research artifacts", "Filings and calls", "Decisions and exports", "Current answer only"], defaults.scope),
    objective: String(config.objective || defaults.objective).slice(0, 190)
  };
}

function getDefaultTimelineConfig() {
  const company = getCompany(state.selectedTicker || "NSCP") || SAMPLE_COMPANIES[0];
  return {
    ticker: company.ticker || "NSCP",
    lens: "Thesis evolution",
    lookback: "All available",
    scope: "All research artifacts",
    objective: "Show the thesis path, key evidence changes, unresolved risks, and next audit questions before sharing the research packet."
  };
}

function hydrateTimelineFromDossier() {
  const dossier = state.currentDossier || buildResearchDossierSnapshot();
  state.timelineConfig = normalizeTimelineConfig({
    ...(state.timelineConfig || getDefaultTimelineConfig()),
    ticker: dossier.company.ticker,
    lens: dossier.gapCount ? "Evidence history" : "Committee narrative",
    lookback: "All available",
    scope: "All research artifacts",
    objective: `Audit the ${dossier.company.ticker} dossier path, explain ${dossier.gapCount} open gap${dossier.gapCount === 1 ? "" : "s"}, and identify the next source event to track.`
  });
}

function loadTimelineConfig() {
  return normalizeTimelineConfig(loadJson(STORAGE_KEYS.timeline, getDefaultTimelineConfig()));
}

function saveTimelineConfig() {
  saveJson(STORAGE_KEYS.timeline, normalizeTimelineConfig(state.timelineConfig || getDefaultTimelineConfig()));
}

function timelineEventMatchesTicker(event, company) {
  const text = `${event.ticker || ""} ${event.question || ""} ${event.title || ""}`.toUpperCase();
  return text.includes(company.ticker) || (PUBLIC_TICKER_ALIASES[event.ticker] && PUBLIC_TICKER_ALIASES[event.ticker].ticker === company.ticker);
}

function formatTimelineKind(kind) {
  const labels = {
    analysis: "Answer",
    import: "Import",
    save: "Saved",
    waitlist: "Waitlist"
  };
  return labels[kind] || "Workflow";
}

function makeWorkflowTimelineTitle(event) {
  if (event.kind === "analysis") return `Question run: ${String(event.question || "Research question").slice(0, 80)}`;
  if (event.kind === "import") return `${event.count || 1} source${Number(event.count || 1) === 1 ? "" : "s"} imported`;
  if (event.kind === "save") return event.title || "Brief saved";
  return `${formatTimelineKind(event.kind)} event recorded`;
}

function makeWorkflowTimelineBody(event) {
  if (event.kind === "analysis") return `Depth ${event.depth || "brief"} analysis created a new research signal.`;
  if (event.kind === "import") return `Source path: ${event.source || "manual import"}.`;
  if (event.kind === "save") return "Saved note can anchor thesis history and future review.";
  return "Workspace action became part of the audit trail.";
}

function parseTimelineDate(value) {
  if (value instanceof Date && Number.isFinite(value.getTime())) return value;
  const parsed = new Date(value || "");
  if (Number.isFinite(parsed.getTime())) return parsed;
  return new Date();
}

function formatTimelineDate(date) {
  const safe = parseTimelineDate(date);
  return safe.toISOString().slice(0, 10);
}

function exportThesisTimelineBrief() {
  const snapshot = state.currentTimeline || buildThesisTimelineSnapshot();
  const date = new Date().toISOString().slice(0, 10);
  const content = [
    "# CiteAlpha Thesis Timeline Audit",
    "",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    "## Timeline Setup",
    "",
    `- Company: ${snapshot.company.ticker} - ${snapshot.company.name}`,
    `- Lens: ${snapshot.config.lens}`,
    `- Lookback: ${snapshot.config.lookback}`,
    `- Source scope: ${snapshot.config.scope}`,
    `- Objective: ${snapshot.config.objective}`,
    "",
    "## Scorecard",
    "",
    `- Audit score: ${snapshot.auditScore}/100`,
    `- Thesis drift: ${snapshot.driftScore}/100`,
    `- Evidence score: ${snapshot.evidenceScore}/100`,
    `- Latest signal: ${snapshot.latestSignal} (${snapshot.latestDate})`,
    "",
    "## Thesis Trail",
    "",
    ...snapshot.eventRows.map((row) => `- ${row.dateLabel} | ${row.label}: ${row.title} - ${row.body}`),
    "",
    "## Inflection Map",
    "",
    ...snapshot.inflectionRows.map((row) => `- ${row.label}: ${row.title} - ${row.body}`),
    "",
    "## Audit Questions",
    "",
    ...snapshot.questionRows.map((row) => `- ${row.priority} | ${row.topic}: ${row.question}`),
    "",
    "## Product Note",
    "",
    "This thesis timeline is a client-side audit trail for product prototyping. Production should store immutable event history, source versions, reviewer approvals, and export logs server-side before relying on the timeline for regulated workflows."
  ].join("\n");
  downloadTextFile(`citealpha-thesis-timeline-${snapshot.company.ticker.toLowerCase()}-${date}.md`, content, "text/markdown;charset=utf-8");
  flashButtonLabel(els.exportTimelineBrief, "Exported");
}

function renderMorningBriefingRoom() {
  if (!els.briefingMetricGrid) return;
  if (!state.briefingConfig) state.briefingConfig = loadBriefingConfig();
  syncBriefingInputs();
  const snapshot = buildMorningBriefingSnapshot();
  state.currentBriefing = snapshot;
  els.briefingMetricGrid.innerHTML = [
    { label: "Briefing score", value: `${snapshot.briefingScore}/100`, sub: snapshot.scoreLabel },
    { label: "Top priority", value: snapshot.topTicker, sub: snapshot.topReason },
    { label: "Risk watch", value: snapshot.riskRows.length, sub: `${snapshot.highRiskCount} high risk` },
    { label: "Session load", value: snapshot.sessionLoad, sub: `${snapshot.questionRows.length} asks queued` }
  ].map((metric) => `
    <div class="briefing-metric">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(String(metric.value))}</strong>
      <em>${escapeHtml(metric.sub)}</em>
    </div>
  `).join("");
  els.briefingAgendaCount.textContent = String(snapshot.agendaRows.length);
  els.briefingAgendaList.innerHTML = renderBriefingAgenda(snapshot.agendaRows);
  els.briefingRiskCount.textContent = String(snapshot.riskRows.length);
  els.briefingRiskList.innerHTML = renderBriefingRisks(snapshot.riskRows);
  els.briefingQuestionCount.textContent = String(snapshot.questionRows.length);
  els.briefingQuestionQueue.innerHTML = renderBriefingQuestions(snapshot.questionRows);
}

function buildMorningBriefingSnapshot() {
  const config = normalizeBriefingConfig(state.briefingConfig || getDefaultBriefingConfig());
  const universe = resolveBriefingUniverse(config);
  const agendaRows = universe.map((ticker) => buildBriefingAgendaRow(ticker, config))
    .filter((row) => config.urgency !== "High-conviction only" || row.priorityScore >= 58)
    .sort((a, b) => b.priorityScore - a.priorityScore || a.ticker.localeCompare(b.ticker))
    .slice(0, config.mode === "Launch demo" ? 4 : 7);
  const riskRows = agendaRows
    .map((row) => buildBriefingRiskRow(row, config))
    .filter(Boolean)
    .sort((a, b) => b.riskScore - a.riskScore)
    .slice(0, 5);
  const questionRows = buildBriefingQuestionRows(config, agendaRows, riskRows);
  const highRiskCount = riskRows.filter((row) => row.level === "danger").length;
  const evidenceReadiness = agendaRows.length
    ? Math.round(agendaRows.reduce((sum, row) => sum + row.evidenceScore, 0) / agendaRows.length)
    : 0;
  const coveragePenalty = Math.max(0, 5 - agendaRows.length) * 4;
  const security = summarizeSecurityPosture();
  const briefingScore = Math.max(1, Math.min(100, Math.round(evidenceReadiness * 0.36 + security.score * 0.2 + Math.min(100, questionRows.length * 18) * 0.16 + Math.max(35, 100 - highRiskCount * 14) * 0.18 + (state.currentTimeline ? 10 : 4) - coveragePenalty)));
  const top = agendaRows[0] || buildBriefingAgendaRow("NSCP", config);
  return {
    config,
    universe,
    agendaRows,
    riskRows,
    questionRows,
    highRiskCount,
    evidenceReadiness,
    security,
    briefingScore,
    scoreLabel: briefingScore >= 82 ? "Ready for morning use" : briefingScore >= 65 ? "Good triage draft" : "Needs more source coverage",
    topTicker: top.ticker,
    topReason: top.reason,
    sessionLoad: questionRows.length >= 5 ? "Heavy" : questionRows.length >= 3 ? "Balanced" : "Light"
  };
}

function buildBriefingAgendaRow(ticker, config) {
  const normalized = normalizeTicker(ticker);
  const company = resolvePortfolioCompany(normalized);
  const proxyTicker = company.proxyTicker || company.ticker || normalized;
  const sourceCount = countPortfolioSources(normalized, proxyTicker);
  const citationCount = state.currentCitations.filter((citation) => {
    return citation.ticker === normalized || citation.ticker === proxyTicker;
  }).length;
  const move = getPortfolioMarketMove(normalized);
  const moveScore = Number.isFinite(move) ? Math.min(28, Math.abs(move) * 5) : 6;
  const sourceGap = sourceCount ? 0 : 20;
  const dossierGap = state.currentDossier && (state.currentDossier.company.ticker === normalized || state.currentDossier.company.ticker === proxyTicker)
    ? state.currentDossier.gapCount * 5
    : 6;
  const timelineBoost = state.currentTimeline && (state.currentTimeline.company.ticker === normalized || state.currentTimeline.company.ticker === proxyTicker) ? 8 : 0;
  const risk = Math.max(1, Math.min(99, Math.round(Number(company.risk) || 55)));
  const evidenceScore = Math.max(10, Math.min(100, Math.round(sourceCount * 16 + citationCount * 12 + (timelineBoost ? 12 : 0) + (sourceCount ? 28 : 10))));
  const priorityScore = Math.max(1, Math.min(100, Math.round(risk * 0.38 + moveScore + sourceGap + dossierGap + timelineBoost + (config.mode === "Risk watch" ? risk * 0.18 : 0))));
  const level = priorityScore >= 72 || risk >= 76 ? "danger" : priorityScore >= 55 || evidenceScore < 55 ? "warning" : "normal";
  const moveText = Number.isFinite(move) ? `${move >= 0 ? "+" : ""}${move.toFixed(1)}% quote move` : "no quote move";
  const agenda = makeBriefingAgendaTitle(company, config, { sourceCount, citationCount, moveText, risk, evidenceScore });
  return {
    ticker: normalized,
    proxyTicker,
    name: company.name || normalized,
    level,
    risk,
    evidenceScore,
    sourceCount,
    citationCount,
    move,
    priorityScore,
    agenda,
    reason: `${risk}/100 risk | ${evidenceScore}/100 evidence | ${moveText}`,
    question: makeBriefingQuestion(company, config, { sourceCount, citationCount, risk, evidenceScore })
  };
}

function makeBriefingAgendaTitle(company, config, context) {
  if (config.mode === "Portfolio morning") return `${company.ticker}: check concentration, quote move, and source gap`;
  if (config.mode === "Risk watch") return `${company.ticker}: inspect ${context.risk}/100 risk before adding conviction`;
  if (config.mode === "Launch demo") return `${company.ticker}: show a crisp source-linked research workflow`;
  if (context.evidenceScore < 55) return `${company.ticker}: close evidence gap before relying on the answer`;
  return `${company.ticker}: run the next highest-leverage research question`;
}

function buildBriefingRiskRow(row, config) {
  const riskScore = Math.max(1, Math.min(100, Math.round(row.risk + (row.sourceCount ? 0 : 12) + (row.evidenceScore < 55 ? 10 : 0) + (Number.isFinite(row.move) ? Math.abs(row.move) * 1.4 : 0))));
  const level = riskScore >= 76 ? "danger" : riskScore >= 58 ? "warning" : "normal";
  if (config.urgency === "High-conviction only" && level === "normal") return null;
  return {
    ticker: row.ticker,
    level,
    riskScore,
    title: `${row.ticker} risk watch: ${riskScore}/100`,
    body: row.sourceCount
      ? `${row.sourceCount} source${row.sourceCount === 1 ? "" : "s"} active, ${row.citationCount} current citation${row.citationCount === 1 ? "" : "s"}.`
      : "Source gap. Import a filing or call section before treating the risk view as live."
  };
}

function buildBriefingQuestionRows(config, agendaRows, riskRows) {
  const questions = [];
  agendaRows.slice(0, 4).forEach((row) => {
    questions.push({
      priority: row.level === "danger" ? "High" : "Medium",
      topic: row.ticker,
      question: row.question
    });
  });
  riskRows.slice(0, 2).forEach((row) => {
    questions.push({
      priority: row.level === "danger" ? "High" : "Medium",
      topic: "Risk watch",
      question: `What source evidence would reduce or confirm the ${row.riskScore}/100 risk watch for $${row.ticker}?`
    });
  });
  if (state.currentDossier && state.currentDossier.gapCount) {
    questions.push({
      priority: "High",
      topic: "Dossier gap",
      question: `Which open dossier gap should I close first for $${state.currentDossier.company.ticker}?`
    });
  }
  if (state.currentTimeline) {
    questions.push({
      priority: "Medium",
      topic: "Timeline",
      question: `What changed most in the $${state.currentTimeline.company.ticker} thesis timeline since the last source event?`
    });
  }
  return dedupeBriefingQuestions(questions).slice(0, config.mode === "Launch demo" ? 5 : 7);
}

function makeBriefingQuestion(company, config, context) {
  if (!context.sourceCount) return `Which filing, 10-K risk factor, or earnings call section should I import first for $${company.ticker}?`;
  if (config.mode === "Risk watch" || context.risk >= 70) return `What are the three most material risks for $${company.ticker}, and which citations support each one?`;
  if (config.mode === "Portfolio morning") return `Is $${company.ticker} still sized correctly given valuation, risk, source coverage, and quote movement?`;
  if (context.evidenceScore < 65) return `What evidence gap prevents $${company.ticker} from being decision-ready today?`;
  return `What is the highest-conviction update on $${company.ticker} for today's research briefing?`;
}

function renderBriefingAgenda(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No agenda yet</strong><span>Add tickers or use the workspace to build the morning queue.</span></div>`;
  }
  return rows.map((row) => `
    <div class="briefing-agenda-row ${escapeAttr(row.level || "normal")}">
      <span>${escapeHtml(row.ticker)}</span>
      <div>
        <strong>${escapeHtml(row.agenda)}</strong>
        <em>${escapeHtml(row.reason)}</em>
      </div>
    </div>
  `).join("");
}

function renderBriefingRisks(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No risk watch</strong><span>The selected briefing universe has no urgent risk rows.</span></div>`;
  }
  return rows.map((row) => `
    <div class="briefing-risk-row ${escapeAttr(row.level || "normal")}">
      <span>${escapeHtml(row.ticker)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)}</em>
      </div>
    </div>
  `).join("");
}

function renderBriefingQuestions(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No questions queued</strong><span>The briefing is quiet.</span></div>`;
  }
  return rows.map((row) => `
    <button class="briefing-question-row" type="button" data-briefing-question="${escapeAttr(row.question)}">
      <span>${escapeHtml(row.priority)} | ${escapeHtml(row.topic)}</span>
      <strong>${escapeHtml(row.question)}</strong>
    </button>
  `).join("");
}

function readBriefingConfig() {
  return normalizeBriefingConfig({
    universe: els.briefingUniverse.value,
    mode: els.briefingMode.value,
    urgency: els.briefingUrgency.value,
    horizon: els.briefingHorizon.value,
    objective: els.briefingObjective.value
  });
}

function syncBriefingInputs() {
  if (!els.briefingUniverse) return;
  const config = normalizeBriefingConfig(state.briefingConfig || getDefaultBriefingConfig());
  els.briefingUniverse.value = config.universe;
  els.briefingMode.value = config.mode;
  els.briefingUrgency.value = config.urgency;
  els.briefingHorizon.value = config.horizon;
  els.briefingObjective.value = config.objective;
}

function normalizeBriefingConfig(config) {
  const defaults = getDefaultBriefingConfig();
  return {
    universe: String(config.universe || defaults.universe).slice(0, 140),
    mode: normalizeChoice(config.mode, ["Research triage", "Portfolio morning", "Risk watch", "Launch demo"], defaults.mode),
    urgency: normalizeChoice(config.urgency, ["Balanced", "High-conviction only", "Catch-up"], defaults.urgency),
    horizon: normalizeChoice(config.horizon, ["Today", "This week", "Next catalyst", "Pre-market"], defaults.horizon),
    objective: String(config.objective || defaults.objective).slice(0, 190)
  };
}

function getDefaultBriefingConfig() {
  return {
    universe: "NVDA, AAPL, TSLA, MSFT, NSCP",
    mode: "Research triage",
    urgency: "Balanced",
    horizon: "Today",
    objective: "Prioritize what to read, what to ask, and which evidence gaps to close before the next investment decision."
  };
}

function hydrateBriefingFromWorkspace() {
  const portfolioTickers = state.portfolioPositions.length
    ? normalizePortfolioWeights(state.portfolioPositions).map((position) => position.ticker)
    : [];
  const active = Array.from(state.activeTickers || []).slice(0, 6);
  const focus = state.tickerFocus ? [state.tickerFocus.rawTicker || state.tickerFocus.ticker] : [];
  const timeline = state.currentTimeline ? [state.currentTimeline.company.ticker] : [];
  const dossier = state.currentDossier ? [state.currentDossier.company.ticker] : [];
  const universe = Array.from(new Set([...focus, ...portfolioTickers, ...timeline, ...dossier, ...active, "NVDA", "AAPL", "TSLA"].map(normalizeTicker).filter(Boolean))).slice(0, 8);
  state.briefingConfig = normalizeBriefingConfig({
    ...(state.briefingConfig || getDefaultBriefingConfig()),
    universe: universe.join(", "),
    mode: state.portfolioPositions.length ? "Portfolio morning" : "Research triage",
    urgency: state.currentDossier && state.currentDossier.gapCount ? "Catch-up" : "Balanced",
    horizon: "Today",
    objective: "Use the active workspace to decide which ticker, risk, source gap, or follow-up question deserves attention first."
  });
}

function resolveBriefingUniverse(config) {
  const raw = String(config.universe || "")
    .split(/[,\s;]+/)
    .map((item) => normalizeTicker(item.replace(/^\$/, "")))
    .filter(Boolean);
  const fromConfig = Array.from(new Set(raw)).slice(0, 10);
  if (fromConfig.length) return fromConfig;
  return Array.from(new Set([...Array.from(state.activeTickers || []), ...DEFAULT_PORTFOLIO_POSITIONS.map((position) => position.ticker)])).slice(0, 8);
}

function dedupeBriefingQuestions(rows) {
  const seen = new Set();
  return rows.filter((row) => {
    const key = String(row.question || "").toLowerCase();
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function loadBriefingConfig() {
  return normalizeBriefingConfig(loadJson(STORAGE_KEYS.briefing, getDefaultBriefingConfig()));
}

function saveBriefingConfig() {
  saveJson(STORAGE_KEYS.briefing, normalizeBriefingConfig(state.briefingConfig || getDefaultBriefingConfig()));
}

function exportMorningBriefing() {
  const snapshot = state.currentBriefing || buildMorningBriefingSnapshot();
  const date = new Date().toISOString().slice(0, 10);
  const content = [
    "# CiteAlpha Morning Briefing",
    "",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    "## Briefing Setup",
    "",
    `- Universe: ${snapshot.config.universe}`,
    `- Mode: ${snapshot.config.mode}`,
    `- Urgency: ${snapshot.config.urgency}`,
    `- Horizon: ${snapshot.config.horizon}`,
    `- Objective: ${snapshot.config.objective}`,
    "",
    "## Scorecard",
    "",
    `- Briefing score: ${snapshot.briefingScore}/100`,
    `- Top priority: ${snapshot.topTicker} - ${snapshot.topReason}`,
    `- Risk watch rows: ${snapshot.riskRows.length}`,
    `- Session load: ${snapshot.sessionLoad}`,
    "",
    "## Research Agenda",
    "",
    ...snapshot.agendaRows.map((row) => `- ${row.ticker}: ${row.agenda} - ${row.reason}`),
    "",
    "## Risk Watch",
    "",
    ...(snapshot.riskRows.length ? snapshot.riskRows.map((row) => `- ${row.ticker}: ${row.title} - ${row.body}`) : ["- No urgent risk watch rows."]),
    "",
    "## Questions To Run",
    "",
    ...snapshot.questionRows.map((row) => `- ${row.priority} | ${row.topic}: ${row.question}`),
    "",
    "## Product Note",
    "",
    "This morning briefing is a client-side triage workflow for product prototyping. Production should connect live market data, source refresh jobs, user portfolios, saved alerts, and server-side audit logs before using it for paid daily research workflows."
  ].join("\n");
  downloadTextFile(`citealpha-morning-briefing-${date}.md`, content, "text/markdown;charset=utf-8");
  flashButtonLabel(els.exportBriefingBrief, "Exported");
}

function renderEarningsCallPrepRoom() {
  if (!els.callPrepMetricGrid) return;
  if (!state.callPrepConfig) state.callPrepConfig = loadCallPrepConfig();
  syncCallPrepInputs();
  const snapshot = buildEarningsCallPrepSnapshot();
  state.currentCallPrep = snapshot;
  els.callPrepMetricGrid.innerHTML = [
    { label: "Prep score", value: `${snapshot.prepScore}/100`, sub: snapshot.prepLabel },
    { label: "Call focus", value: snapshot.config.focus, sub: snapshot.config.event },
    { label: "Evidence mix", value: snapshot.sourceAudit.balance, sub: `${snapshot.sourceCount} source${snapshot.sourceCount === 1 ? "" : "s"} active` },
    { label: "Opening posture", value: snapshot.openingPosture, sub: snapshot.postureNote }
  ].map((metric) => `
    <div class="callprep-metric">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(String(metric.value))}</strong>
      <em>${escapeHtml(metric.sub)}</em>
    </div>
  `).join("");
  els.callPrepQuestionCount.textContent = String(snapshot.questionRows.length);
  els.callPrepQuestionList.innerHTML = renderCallPrepQuestions(snapshot.questionRows);
  els.callPrepReadoutCount.textContent = String(snapshot.readoutRows.length);
  els.callPrepReadoutList.innerHTML = renderCallPrepReadouts(snapshot.readoutRows);
  els.callPrepScoreCount.textContent = String(snapshot.scoreRows.length);
  els.callPrepScoreList.innerHTML = renderCallPrepScoreRows(snapshot.scoreRows);
}

function buildEarningsCallPrepSnapshot() {
  const config = normalizeCallPrepConfig(state.callPrepConfig || getDefaultCallPrepConfig());
  const company = resolvePortfolioCompany(config.ticker);
  const proxyTicker = company.proxyTicker || company.ticker || config.ticker;
  const citations = getCallPrepCitations(company, config);
  const sourceAudit = makeLightSourceAudit(citations);
  const riskFactors = buildRiskFactors(citations, company);
  const valuation = buildTearSheetValuation(company);
  const sourceCount = countPortfolioSources(config.ticker, proxyTicker);
  const quoteMove = getPortfolioMarketMove(config.ticker);
  const riskScore = Math.max(1, Math.min(99, Math.round(Number(company.risk) || 58)));
  const sentiment = Math.max(1, Math.min(99, Math.round(Number(company.sentiment) || (riskScore > 68 ? 46 : 62))));
  const evidenceScore = Math.max(10, Math.min(100, Math.round(sourceAudit.quality + Math.min(12, citations.length * 2) + (sourceCount ? 8 : -8))));
  const prepScore = Math.max(1, Math.min(100, Math.round(evidenceScore * 0.42 + Math.max(30, 100 - riskScore) * 0.18 + Math.min(100, citations.length * 12) * 0.18 + sentiment * 0.12 + (state.currentBriefing ? 10 : 4))));
  const questionRows = buildCallPrepQuestionRows(config, company, riskFactors, valuation, citations);
  const readoutRows = buildCallPrepReadoutRows(config, company, riskFactors, valuation, quoteMove);
  const scoreRows = buildCallPrepScoreRows(config, company, riskFactors, citations, valuation);
  const openingPosture = config.style === "Risk-first" || riskScore >= 70 ? "Challenge" : config.style === "Portfolio action" ? "Decision" : "Probe";
  return {
    config,
    company,
    proxyTicker,
    citations,
    sourceAudit,
    riskFactors,
    valuation,
    sourceCount,
    quoteMove,
    riskScore,
    sentiment,
    evidenceScore,
    prepScore,
    prepLabel: prepScore >= 82 ? "Ready for call" : prepScore >= 65 ? "Good prep draft" : "Needs more source depth",
    questionRows,
    readoutRows,
    scoreRows,
    openingPosture,
    postureNote: makeCallPrepPostureNote(config, company, riskScore, quoteMove)
  };
}

function getCallPrepCitations(company, config) {
  const tickerKeys = new Set([config.ticker, company.ticker, company.proxyTicker].filter(Boolean).map(normalizeTicker));
  const current = state.currentCitations.filter((citation) => tickerKeys.has(citation.ticker));
  if (current.length) return current.slice(0, 8);
  return state.documents
    .filter((doc) => state.enabledDocIds.has(doc.id) && tickerKeys.has(doc.ticker))
    .flatMap((doc) => (doc.sections || []).slice(0, 2).map((section, index) => ({
      citationId: `S${index + 1}`,
      docId: doc.id,
      ticker: doc.ticker,
      company: doc.company || company.name || doc.ticker,
      type: doc.type || "Source",
      section: section.title || doc.period || "Source section",
      text: section.text || ""
    })))
    .filter((citation) => citation.text)
    .slice(0, 8);
}

function buildCallPrepQuestionRows(config, company, riskFactors, valuation, citations) {
  const citationHint = citations.length ? "Ask management to reconcile this with the cited source stack." : "Flag that this needs a direct source import after the call.";
  const rows = riskFactors.slice(0, 3).map((factor, index) => ({
    priority: index === 0 || factor.severity === "High" ? "High" : "Watch",
    className: index === 0 || factor.severity === "High" ? "high" : "watch",
    topic: factor.title,
    question: `On ${factor.title.toLowerCase()}, what specific metric or disclosure would prove $${company.ticker} is improving rather than just explaining the risk?`,
    note: `${factor.body} ${citationHint}`
  }));
  rows.push({
    priority: config.focus === "Valuation bridge" ? "High" : "Base",
    className: config.focus === "Valuation bridge" ? "high" : "normal",
    topic: "Valuation bridge",
    question: `What call commentary would make the ${valuation.baseCase.label || "base"} valuation case for $${company.ticker} too conservative or too aggressive?`,
    note: `Tie the answer to growth, margin, multiple, and discount-rate assumptions before changing position size.`
  });
  rows.push({
    priority: config.style === "Portfolio action" ? "High" : "Base",
    className: config.style === "Portfolio action" ? "high" : "normal",
    topic: "Position action",
    question: `After this ${config.event.toLowerCase()}, what would make $${company.ticker} a bigger, smaller, or unchanged position?`,
    note: config.objective
  });
  return rows.slice(0, 6);
}

function buildCallPrepReadoutRows(config, company, riskFactors, valuation, quoteMove) {
  const moveText = Number.isFinite(quoteMove) ? `${quoteMove >= 0 ? "+" : ""}${quoteMove.toFixed(1)}% quote move` : "no quote signal";
  const focusMap = {
    "Margins and demand": ["Order visibility", "Gross margin bridge", "Demand elasticity"],
    "Risk factors": ["Risk-factor escalation", "Customer concentration", "Execution timing"],
    "Cash flow": ["Working capital", "Capex cadence", "FCF conversion"],
    "Valuation bridge": ["Long-term growth", "Terminal margin", "Multiple durability"]
  };
  const topics = focusMap[config.focus] || focusMap["Margins and demand"];
  return topics.map((topic, index) => ({
    level: index === 0 ? "High" : "Watch",
    className: index === 0 ? "high" : "watch",
    title: topic,
    body: makeCallPrepReadoutBody(topic, company, riskFactors[index] || riskFactors[0], valuation, moveText)
  })).concat([{
    level: "Base",
    className: "normal",
    title: "Tone versus filing",
    body: `Listen for whether management language is more confident than the source disclosures. CiteAlpha should treat optimism as a hypothesis until filings or transcript evidence support it.`
  }]).slice(0, 5);
}

function makeCallPrepReadoutBody(topic, company, factor, valuation, moveText) {
  if (/margin|fcf|cash|working capital/i.test(topic)) {
    return `${company.ticker} needs evidence that margins and cash conversion are not being borrowed from future periods. Current source risk: ${factor.title.toLowerCase()}.`;
  }
  if (/growth|order|demand|customer/i.test(topic)) {
    return `Watch whether demand language is backed by backlog, customer cadence, or pricing proof rather than broad market commentary. Quote context: ${moveText}.`;
  }
  if (/valuation|multiple|terminal/i.test(topic)) {
    return `Map commentary to the base case at ${formatPerShare(valuation.baseCase.perShare)} and the bear/bull spread before changing the valuation lens.`;
  }
  return `Treat this as a thesis breakpoint if management gives numbers, timing, or customer examples that contradict the latest risk factor.`;
}

function buildCallPrepScoreRows(config, company, riskFactors, citations, valuation) {
  const sourceLabel = citations.length >= 4 ? "Supported" : citations.length ? "Partial" : "Open";
  return [
    {
      grade: "A",
      className: "normal",
      title: "Question answered with numbers",
      body: `Management gives specific metrics tied to ${config.focus.toLowerCase()}, not just narrative comfort.`
    },
    {
      grade: sourceLabel,
      className: sourceLabel === "Supported" ? "normal" : "watch",
      title: "Source reconciliation",
      body: `${citations.length} citation${citations.length === 1 ? "" : "s"} available before the call. Update the evidence stack with transcript passages after results.`
    },
    {
      grade: riskFactors[0]?.severity || "Risk",
      className: riskFactors[0]?.severity === "High" ? "high" : "watch",
      title: "Top risk movement",
      body: `${riskFactors[0]?.title || "Risk factor"} should move lower only if management gives measurable proof, timing, and owner accountability.`
    },
    {
      grade: formatPerShare(valuation.baseCase.perShare),
      className: "normal",
      title: "Valuation update gate",
      body: `Only flex the base case when call evidence changes revenue growth, FCF margin, or terminal multiple assumptions.`
    }
  ];
}

function makeCallPrepPostureNote(config, company, riskScore, quoteMove) {
  const moveText = Number.isFinite(quoteMove) ? `${quoteMove >= 0 ? "+" : ""}${quoteMove.toFixed(1)}% quote move` : "no live quote move";
  if (config.style === "Risk-first" || riskScore >= 70) return `${company.ticker} starts with ${riskScore}/100 risk and ${moveText}. Pressure-test management first.`;
  if (config.style === "Portfolio action") return `${company.ticker} prep should end with size, hold, or reduce decision criteria.`;
  if (config.style === "Thesis update") return `${company.ticker} prep should separate true thesis changes from routine quarter noise.`;
  return `${company.ticker} prep should ask concise questions, then score whether answers improve evidence quality.`;
}

function renderCallPrepQuestions(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No questions yet</strong><span>Build call prep to generate a management Q&A queue.</span></div>`;
  }
  return rows.map((row) => `
    <button class="callprep-question-row ${escapeAttr(row.className || "normal")}" type="button" data-callprep-question="${escapeAttr(row.question)}">
      <span>${escapeHtml(row.priority)} | ${escapeHtml(row.topic)}</span>
      <div>
        <strong>${escapeHtml(row.question)}</strong>
        <em>${escapeHtml(row.note)}</em>
      </div>
    </button>
  `).join("");
}

function renderCallPrepReadouts(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No listening cues</strong><span>Run call prep to build the call read-through map.</span></div>`;
  }
  return rows.map((row) => `
    <div class="callprep-readout-row ${escapeAttr(row.className || "normal")}">
      <span>${escapeHtml(row.level)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)}</em>
      </div>
    </div>
  `).join("");
}

function renderCallPrepScoreRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No scorecard yet</strong><span>Build call prep to define post-call grading gates.</span></div>`;
  }
  return rows.map((row) => `
    <div class="callprep-score-row ${escapeAttr(row.className || "normal")}">
      <span>${escapeHtml(row.grade)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)}</em>
      </div>
    </div>
  `).join("");
}

function readCallPrepConfig() {
  return normalizeCallPrepConfig({
    ticker: els.callPrepTicker.value,
    event: els.callPrepEvent.value,
    style: els.callPrepStyle.value,
    focus: els.callPrepFocus.value,
    objective: els.callPrepObjective.value
  });
}

function syncCallPrepInputs() {
  if (!els.callPrepTicker) return;
  const config = normalizeCallPrepConfig(state.callPrepConfig || getDefaultCallPrepConfig());
  els.callPrepTicker.value = config.ticker;
  els.callPrepEvent.value = config.event;
  els.callPrepStyle.value = config.style;
  els.callPrepFocus.value = config.focus;
  els.callPrepObjective.value = config.objective;
}

function normalizeCallPrepConfig(config) {
  const defaults = getDefaultCallPrepConfig();
  return {
    ticker: normalizeTicker(String(config.ticker || defaults.ticker).replace(/^\$/, "")) || defaults.ticker,
    event: normalizeChoice(config.event, ["Next earnings call", "Post-results review", "Investor day", "Guidance reset"], defaults.event),
    style: normalizeChoice(config.style, ["Management Q&A", "Risk-first", "Thesis update", "Portfolio action"], defaults.style),
    focus: normalizeChoice(config.focus, ["Margins and demand", "Risk factors", "Cash flow", "Valuation bridge"], defaults.focus),
    objective: String(config.objective || defaults.objective).slice(0, 190)
  };
}

function getDefaultCallPrepConfig() {
  return {
    ticker: state.tickerFocus?.rawTicker || state.tickerFocus?.ticker || state.marketSettings?.ticker || "NVDA",
    event: "Next earnings call",
    style: "Management Q&A",
    focus: "Margins and demand",
    objective: "Prepare the sharpest questions and listening cues before management commentary changes the thesis."
  };
}

function hydrateCallPrepFromBriefing() {
  const briefing = state.currentBriefing || buildMorningBriefingSnapshot();
  const topTicker = state.tickerFocus?.rawTicker || briefing.topTicker || state.marketSettings?.ticker || "NVDA";
  const riskMode = briefing.highRiskCount > 1 || briefing.riskRows.some((row) => row.ticker === topTicker && row.level === "danger");
  state.callPrepConfig = normalizeCallPrepConfig({
    ...(state.callPrepConfig || getDefaultCallPrepConfig()),
    ticker: topTicker,
    event: briefing.config.horizon === "Next catalyst" ? "Guidance reset" : "Next earnings call",
    style: briefing.config.mode === "Portfolio morning" ? "Portfolio action" : riskMode ? "Risk-first" : "Management Q&A",
    focus: riskMode ? "Risk factors" : "Margins and demand",
    objective: `Use the morning briefing to prepare call questions for $${topTicker}, focusing on evidence gaps, risk watch items, and post-call decision gates.`
  });
}

function loadCallPrepConfig() {
  return normalizeCallPrepConfig(loadJson(STORAGE_KEYS.callPrep, getDefaultCallPrepConfig()));
}

function saveCallPrepConfig() {
  saveJson(STORAGE_KEYS.callPrep, normalizeCallPrepConfig(state.callPrepConfig || getDefaultCallPrepConfig()));
}

function exportEarningsCallPrep() {
  const snapshot = state.currentCallPrep || buildEarningsCallPrepSnapshot();
  const date = new Date().toISOString().slice(0, 10);
  const content = [
    "# CiteAlpha Earnings Call Prep",
    "",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    "## Setup",
    "",
    `- Ticker: ${snapshot.config.ticker}`,
    `- Event: ${snapshot.config.event}`,
    `- Prep style: ${snapshot.config.style}`,
    `- Focus: ${snapshot.config.focus}`,
    `- Objective: ${snapshot.config.objective}`,
    "",
    "## Prep Scorecard",
    "",
    `- Prep score: ${snapshot.prepScore}/100`,
    `- Evidence score: ${snapshot.evidenceScore}/100`,
    `- Risk score: ${snapshot.riskScore}/100`,
    `- Source mix: ${snapshot.sourceAudit.balance}`,
    `- Opening posture: ${snapshot.openingPosture} - ${snapshot.postureNote}`,
    "",
    "## Management Questions",
    "",
    ...snapshot.questionRows.map((row) => `- ${row.priority} | ${row.topic}: ${row.question} (${row.note})`),
    "",
    "## Listen For",
    "",
    ...snapshot.readoutRows.map((row) => `- ${row.level} | ${row.title}: ${row.body}`),
    "",
    "## Post-Call Scorecard",
    "",
    ...snapshot.scoreRows.map((row) => `- ${row.grade} | ${row.title}: ${row.body}`),
    "",
    "## Product Note",
    "",
    "This earnings call prep room is a client-side workflow for product prototyping. Production should connect actual transcripts, event calendars, model updates, reviewer approvals, and immutable export logs before using it for live investment research."
  ].join("\n");
  downloadTextFile(`citealpha-earnings-call-prep-${snapshot.config.ticker.toLowerCase()}-${date}.md`, content, "text/markdown;charset=utf-8");
  flashButtonLabel(els.exportCallPrepBrief, "Exported");
}

function renderPostEarningsDebriefRoom() {
  if (!els.debriefMetricGrid) return;
  if (!state.debriefConfig) state.debriefConfig = loadDebriefConfig();
  syncDebriefInputs();
  const snapshot = buildPostEarningsDebriefSnapshot();
  state.currentDebrief = snapshot;
  els.debriefMetricGrid.innerHTML = [
    { label: "Thesis delta", value: `${snapshot.thesisDelta}/100`, sub: snapshot.deltaLabel },
    { label: "Tone read", value: snapshot.tone.label, sub: `${snapshot.tone.score}/100 from notes` },
    { label: "Market move", value: `${snapshot.marketMove >= 0 ? "+" : ""}${snapshot.marketMove.toFixed(1)}%`, sub: snapshot.marketLabel },
    { label: "Decision bias", value: snapshot.decisionBias, sub: snapshot.decisionNote }
  ].map((metric) => `
    <div class="debrief-metric">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(String(metric.value))}</strong>
      <em>${escapeHtml(metric.sub)}</em>
    </div>
  `).join("");
  els.debriefSurpriseCount.textContent = String(snapshot.surpriseRows.length);
  els.debriefSurpriseList.innerHTML = renderDebriefSurprises(snapshot.surpriseRows);
  els.debriefThesisCount.textContent = String(snapshot.thesisRows.length);
  els.debriefThesisList.innerHTML = renderDebriefThesisRows(snapshot.thesisRows);
  els.debriefActionCount.textContent = String(snapshot.actionRows.length);
  els.debriefActionList.innerHTML = renderDebriefActions(snapshot.actionRows);
}

function buildPostEarningsDebriefSnapshot() {
  const config = normalizeDebriefConfig(state.debriefConfig || getDefaultDebriefConfig());
  const company = resolvePortfolioCompany(config.ticker);
  const callPrep = state.currentCallPrep && state.currentCallPrep.config.ticker === config.ticker
    ? state.currentCallPrep
    : buildEarningsCallPrepSnapshotForTicker(config.ticker);
  const citations = getCallPrepCitations(company, { ticker: config.ticker });
  const sourceAudit = makeLightSourceAudit(citations);
  const transcript = getDebriefTranscriptText(config, callPrep, citations);
  const tone = scoreDebriefTone(transcript);
  const marketMove = getDebriefMarketMove(config);
  const riskFactors = buildRiskFactors(citations, company);
  const valuation = buildTearSheetValuation(company);
  const surpriseRows = buildDebriefSurpriseRows(config, company, callPrep, tone, marketMove, riskFactors, valuation);
  const thesisRows = buildDebriefThesisRows(config, company, callPrep, tone, marketMove, sourceAudit, riskFactors);
  const actionRows = buildDebriefActionRows(config, company, tone, marketMove, riskFactors, valuation);
  const sourceSupport = Math.max(20, Math.min(100, sourceAudit.quality + Math.min(12, citations.length * 2)));
  const movePressure = Math.min(28, Math.abs(marketMove) * 5);
  const surprisePressure = surpriseRows.filter((row) => row.className === "negative" || row.className === "watch").length * 8;
  const thesisDelta = Math.max(1, Math.min(100, Math.round(Math.abs(tone.score - 50) * 0.52 + movePressure + surprisePressure + Math.max(0, 72 - sourceSupport) * 0.22 + (config.mode === "Portfolio action" ? 8 : 2))));
  const decisionBias = makeDebriefDecisionBias(config, tone, marketMove, thesisDelta);
  return {
    config,
    company,
    callPrep,
    citations,
    sourceAudit,
    transcript,
    tone,
    marketMove,
    riskFactors,
    valuation,
    surpriseRows,
    thesisRows,
    actionRows,
    thesisDelta,
    deltaLabel: thesisDelta >= 70 ? "Major review" : thesisDelta >= 42 ? "Meaningful update" : "Mostly intact",
    marketLabel: Math.abs(marketMove) >= 5 ? "Large reaction" : Math.abs(marketMove) >= 2 ? "Moderate reaction" : "Quiet reaction",
    decisionBias: decisionBias.label,
    decisionNote: decisionBias.note
  };
}

function buildEarningsCallPrepSnapshotForTicker(ticker) {
  const previous = state.callPrepConfig;
  state.callPrepConfig = normalizeCallPrepConfig({ ...(previous || getDefaultCallPrepConfig()), ticker });
  const snapshot = buildEarningsCallPrepSnapshot();
  state.callPrepConfig = previous;
  return snapshot;
}

function getDebriefTranscriptText(config, callPrep, citations) {
  const typed = String(config.transcript || "").trim();
  if (typed) return typed;
  const citationText = citations.map((citation) => citation.text).join(" ");
  if (citationText.trim()) return citationText;
  return [
    callPrep.postureNote,
    ...callPrep.readoutRows.map((row) => row.body),
    ...callPrep.scoreRows.map((row) => row.body)
  ].join(" ");
}

function scoreDebriefTone(text) {
  const lower = String(text || "").toLowerCase();
  const positiveHits = POSITIVE_TERMS.reduce((sum, term) => sum + (lower.includes(term.toLowerCase()) ? 1 : 0), 0);
  const negativeHits = NEGATIVE_TERMS.reduce((sum, term) => sum + (lower.includes(term.toLowerCase()) ? 1 : 0), 0);
  const score = Math.max(1, Math.min(99, Math.round(50 + positiveHits * 7 - negativeHits * 6)));
  return {
    score,
    positiveHits,
    negativeHits,
    label: score >= 68 ? "Constructive" : score <= 42 ? "Cautious" : "Mixed"
  };
}

function getDebriefMarketMove(config) {
  const typed = Number(config.marketMove);
  if (Number.isFinite(typed)) return typed;
  const move = getPortfolioMarketMove(config.ticker);
  return Number.isFinite(move) ? move : 0;
}

function buildDebriefSurpriseRows(config, company, callPrep, tone, marketMove, riskFactors, valuation) {
  const rows = [
    {
      label: tone.score >= 68 ? "Positive" : tone.score <= 42 ? "Negative" : "Mixed",
      className: tone.score >= 68 ? "normal" : tone.score <= 42 ? "negative" : "watch",
      title: `${company.ticker} management tone versus prep`,
      body: `${tone.positiveHits} constructive marker${tone.positiveHits === 1 ? "" : "s"} and ${tone.negativeHits} caution marker${tone.negativeHits === 1 ? "" : "s"} detected in the debrief notes.`
    },
    {
      label: Math.abs(marketMove) >= 5 ? "Large" : Math.abs(marketMove) >= 2 ? "Medium" : "Small",
      className: marketMove < -2 ? "negative" : Math.abs(marketMove) >= 2 ? "watch" : "normal",
      title: "Price reaction versus evidence",
      body: `${marketMove >= 0 ? "+" : ""}${marketMove.toFixed(1)}% market move should be reconciled with source-backed call commentary before updating conviction.`
    },
    {
      label: riskFactors[0]?.severity || "Risk",
      className: riskFactors[0]?.severity === "High" ? "negative" : "watch",
      title: riskFactors[0]?.title || "Top risk check",
      body: riskFactors[0]?.body || "No direct risk factor is available yet. Import the latest transcript or filing language."
    },
    {
      label: config.mode === "Valuation update" ? "Model" : "Base",
      className: config.mode === "Valuation update" ? "watch" : "normal",
      title: "Valuation read-through",
      body: `Base case sits near ${formatPerShare(valuation.baseCase.perShare)}. Change the model only if the debrief affects growth, FCF margin, or risk premium.`
    }
  ];
  if (callPrep && callPrep.prepScore < 70) {
    rows.push({
      label: "Gap",
      className: "watch",
      title: "Prep coverage gap",
      body: `Call prep was ${callPrep.prepScore}/100, so the debrief should prioritize missing source evidence before thesis changes.`
    });
  }
  return rows.slice(0, 5);
}

function buildDebriefThesisRows(config, company, callPrep, tone, marketMove, sourceAudit, riskFactors) {
  return [
    {
      label: tone.score >= 62 ? "Confirm" : tone.score <= 42 ? "Reopen" : "Watch",
      className: tone.score <= 42 ? "negative" : tone.score < 62 ? "watch" : "normal",
      title: "Core thesis",
      body: tone.score >= 62
        ? `${company.ticker} thesis is mostly supported by the call notes, but source citations still need updating.`
        : `${company.ticker} thesis should be reopened where management language conflicts with the prior evidence stack.`
    },
    {
      label: sourceAudit.coverageLabel,
      className: sourceAudit.quality >= 70 ? "normal" : "watch",
      title: "Source support",
      body: `${sourceAudit.balance} source mix with ${sourceAudit.quality}/100 light audit quality. Add the actual transcript if this is still sample-based.`
    },
    {
      label: Math.abs(marketMove) >= 3 ? "Move" : "Stable",
      className: marketMove < -3 ? "negative" : Math.abs(marketMove) >= 3 ? "watch" : "normal",
      title: "Market versus thesis",
      body: Math.abs(marketMove) >= 3
        ? `The ${marketMove >= 0 ? "positive" : "negative"} price move is big enough to ask whether the market found a new thesis variable.`
        : "The price reaction is not large enough by itself to force a thesis reset."
    },
    {
      label: config.mode,
      className: config.mode === "Risk update" ? "negative" : "normal",
      title: "Debrief lens",
      body: `Mode is ${config.mode.toLowerCase()}; top risk to re-check is ${riskFactors[0]?.title || "source coverage"}.`
    }
  ];
}

function buildDebriefActionRows(config, company, tone, marketMove, riskFactors, valuation) {
  const rows = [
    {
      priority: tone.score <= 42 ? "High" : "Medium",
      className: tone.score <= 42 ? "high" : "watch",
      title: "Transcript verification",
      question: `Which exact transcript passages changed the $${company.ticker} thesis after the ${config.event.toLowerCase()}?`,
      body: "Run this after importing the actual earnings call transcript or press release."
    },
    {
      priority: "High",
      className: riskFactors[0]?.severity === "High" ? "high" : "watch",
      title: "Risk movement",
      question: `Did $${company.ticker}'s ${riskFactors[0]?.title || "top risk"} improve, worsen, or stay unchanged after results?`,
      body: riskFactors[0]?.body || "Use cited evidence to avoid narrative drift."
    },
    {
      priority: Math.abs(marketMove) >= 3 ? "High" : "Medium",
      className: Math.abs(marketMove) >= 3 ? "watch" : "normal",
      title: "Market reaction",
      question: `Was the ${marketMove >= 0 ? "+" : ""}${marketMove.toFixed(1)}% move in $${company.ticker} justified by source-backed changes or just sentiment?`,
      body: "Separate actual thesis change from price action."
    },
    {
      priority: config.mode === "Valuation update" ? "High" : "Medium",
      className: config.mode === "Valuation update" ? "watch" : "normal",
      title: "Model gate",
      question: `Which valuation input should change first for $${company.ticker}: growth, FCF margin, multiple, or discount rate?`,
      body: `Current base marker is ${formatPerShare(valuation.baseCase.perShare)} per share.`
    }
  ];
  if (config.mode === "Portfolio action") {
    rows.unshift({
      priority: "High",
      className: "high",
      title: "Position decision",
      question: `Should $${company.ticker} be increased, trimmed, or held after this debrief?`,
      body: "Convert the debrief into a clean sizing decision."
    });
  }
  return rows.slice(0, 5);
}

function makeDebriefDecisionBias(config, tone, marketMove, thesisDelta) {
  if (config.mode === "Portfolio action" && thesisDelta >= 60) {
    return { label: "Re-size", note: "Thesis delta is high enough to revisit position size." };
  }
  if (tone.score >= 68 && marketMove >= 0) {
    return { label: "Lean in", note: "Tone and market reaction are both constructive." };
  }
  if (tone.score <= 42 || marketMove <= -4) {
    return { label: "Review risk", note: "Debrief points to caution before adding exposure." };
  }
  return { label: "Hold thesis", note: "No major action until transcript citations are updated." };
}

function renderDebriefSurprises(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No surprises yet</strong><span>Build a debrief after results or paste transcript notes.</span></div>`;
  }
  return rows.map((row) => `
    <div class="debrief-surprise-row ${escapeAttr(row.className || "normal")}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)}</em>
      </div>
    </div>
  `).join("");
}

function renderDebriefThesisRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No thesis rows</strong><span>The debrief has not been built yet.</span></div>`;
  }
  return rows.map((row) => `
    <div class="debrief-thesis-row ${escapeAttr(row.className || "normal")}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)}</em>
      </div>
    </div>
  `).join("");
}

function renderDebriefActions(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No actions</strong><span>Debrief actions will appear after scoring the event.</span></div>`;
  }
  return rows.map((row) => `
    <button class="debrief-action-row ${escapeAttr(row.className || "normal")}" type="button" data-debrief-question="${escapeAttr(row.question)}">
      <span>${escapeHtml(row.priority)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.question)} ${escapeHtml(row.body)}</em>
      </div>
    </button>
  `).join("");
}

function readDebriefConfig() {
  return normalizeDebriefConfig({
    ticker: els.debriefTicker.value,
    event: els.debriefEvent.value,
    mode: els.debriefMode.value,
    marketMove: els.debriefMarketMove.value,
    transcript: els.debriefTranscript.value
  });
}

function syncDebriefInputs() {
  if (!els.debriefTicker) return;
  const config = normalizeDebriefConfig(state.debriefConfig || getDefaultDebriefConfig());
  els.debriefTicker.value = config.ticker;
  els.debriefEvent.value = config.event;
  els.debriefMode.value = config.mode;
  els.debriefMarketMove.value = String(config.marketMove);
  els.debriefTranscript.value = config.transcript;
}

function normalizeDebriefConfig(config) {
  const defaults = getDefaultDebriefConfig();
  const marketMove = Number(config.marketMove);
  return {
    ticker: normalizeTicker(String(config.ticker || defaults.ticker).replace(/^\$/, "")) || defaults.ticker,
    event: normalizeChoice(config.event, ["Earnings call", "Quarterly results", "Guidance update", "Investor day"], defaults.event),
    mode: normalizeChoice(config.mode, ["Thesis change", "Risk update", "Valuation update", "Portfolio action"], defaults.mode),
    marketMove: Number.isFinite(marketMove) ? Math.max(-40, Math.min(40, marketMove)) : defaults.marketMove,
    transcript: String(config.transcript || defaults.transcript).slice(0, 1200)
  };
}

function getDefaultDebriefConfig() {
  const ticker = state.callPrepConfig?.ticker || state.tickerFocus?.rawTicker || state.tickerFocus?.ticker || state.marketSettings?.ticker || "NVDA";
  const move = getPortfolioMarketMove(ticker);
  return {
    ticker,
    event: "Earnings call",
    mode: "Thesis change",
    marketMove: Number.isFinite(move) ? Number(move.toFixed(1)) : 2.1,
    transcript: "Management said demand remains durable, gross margin is stabilizing, and customer concentration is being watched closely. Guidance implies disciplined capex and continued cash conversion, but supply timing and execution risk remain open questions."
  };
}

function hydrateDebriefFromCallPrep() {
  const callPrep = state.currentCallPrep || buildEarningsCallPrepSnapshot();
  state.debriefConfig = normalizeDebriefConfig({
    ...(state.debriefConfig || getDefaultDebriefConfig()),
    ticker: callPrep.config.ticker,
    event: callPrep.config.event === "Investor day" ? "Investor day" : "Earnings call",
    mode: callPrep.config.style === "Portfolio action" ? "Portfolio action" : callPrep.config.focus === "Valuation bridge" ? "Valuation update" : "Thesis change",
    marketMove: getDebriefMarketMove({ ticker: callPrep.config.ticker, marketMove: getPortfolioMarketMove(callPrep.config.ticker) }),
    transcript: [
      `Call prep posture: ${callPrep.openingPosture}.`,
      callPrep.postureNote,
      ...callPrep.readoutRows.slice(0, 3).map((row) => row.body)
    ].join(" ")
  });
}

function loadDebriefConfig() {
  return normalizeDebriefConfig(loadJson(STORAGE_KEYS.debrief, getDefaultDebriefConfig()));
}

function saveDebriefConfig() {
  saveJson(STORAGE_KEYS.debrief, normalizeDebriefConfig(state.debriefConfig || getDefaultDebriefConfig()));
}

function exportPostEarningsDebrief() {
  const snapshot = state.currentDebrief || buildPostEarningsDebriefSnapshot();
  const date = new Date().toISOString().slice(0, 10);
  const content = [
    "# CiteAlpha Post-Earnings Debrief",
    "",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    "## Event Setup",
    "",
    `- Ticker: ${snapshot.config.ticker}`,
    `- Event: ${snapshot.config.event}`,
    `- Mode: ${snapshot.config.mode}`,
    `- Market move: ${snapshot.marketMove >= 0 ? "+" : ""}${snapshot.marketMove.toFixed(1)}%`,
    "",
    "## Debrief Scorecard",
    "",
    `- Thesis delta: ${snapshot.thesisDelta}/100 (${snapshot.deltaLabel})`,
    `- Tone read: ${snapshot.tone.label} (${snapshot.tone.score}/100)`,
    `- Source mix: ${snapshot.sourceAudit.balance}`,
    `- Decision bias: ${snapshot.decisionBias} - ${snapshot.decisionNote}`,
    "",
    "## Surprise Map",
    "",
    ...snapshot.surpriseRows.map((row) => `- ${row.label} | ${row.title}: ${row.body}`),
    "",
    "## Thesis Changes",
    "",
    ...snapshot.thesisRows.map((row) => `- ${row.label} | ${row.title}: ${row.body}`),
    "",
    "## Follow-Up Actions",
    "",
    ...snapshot.actionRows.map((row) => `- ${row.priority} | ${row.title}: ${row.question} ${row.body}`),
    "",
    "## Product Note",
    "",
    "This post-earnings debrief room is a client-side workflow for product prototyping. Production should ingest actual transcripts, press releases, price moves, source versions, and model updates before using it for live investment research."
  ].join("\n");
  downloadTextFile(`citealpha-post-earnings-debrief-${snapshot.config.ticker.toLowerCase()}-${date}.md`, content, "text/markdown;charset=utf-8");
  flashButtonLabel(els.exportDebriefBrief, "Exported");
}

function renderGuidanceRevisionRoom() {
  if (!els.revisionMetricGrid) return;
  if (!state.revisionConfig) state.revisionConfig = loadRevisionConfig();
  syncRevisionInputs();
  const snapshot = buildGuidanceRevisionSnapshot();
  state.currentRevision = snapshot;
  els.revisionMetricGrid.innerHTML = [
    { label: "Revision score", value: `${snapshot.revisionScore}/100`, sub: snapshot.revisionLabel },
    { label: "Guide spread", value: `${snapshot.revenueSpread >= 0 ? "+" : ""}${roundOne(snapshot.revenueSpread)} pts`, sub: "Revenue guide vs consensus" },
    { label: "Model impact", value: `${snapshot.modelImpact >= 0 ? "+" : ""}${roundOne(snapshot.modelImpact)}%`, sub: `${formatPerShare(snapshot.baseValue)} base marker` },
    { label: "Bias", value: snapshot.revisionBias, sub: snapshot.biasNote }
  ].map((metric) => `
    <div class="revision-metric">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(String(metric.value))}</strong>
      <em>${escapeHtml(metric.sub)}</em>
    </div>
  `).join("");
  els.revisionBridgeCount.textContent = String(snapshot.bridgeRows.length);
  els.revisionBridgeList.innerHTML = renderRevisionBridgeRows(snapshot.bridgeRows);
  els.revisionEstimateCount.textContent = String(snapshot.estimateRows.length);
  els.revisionEstimateList.innerHTML = renderRevisionEstimateRows(snapshot.estimateRows);
  els.revisionActionCount.textContent = String(snapshot.actionRows.length);
  els.revisionActionList.innerHTML = renderRevisionActions(snapshot.actionRows);
}

function buildGuidanceRevisionSnapshot() {
  const config = normalizeRevisionConfig(state.revisionConfig || getDefaultRevisionConfig());
  const company = resolvePortfolioCompany(config.ticker);
  const debrief = state.currentDebrief && state.currentDebrief.config.ticker === config.ticker
    ? state.currentDebrief
    : buildPostEarningsDebriefSnapshotForTicker(config.ticker);
  const valuation = buildTearSheetValuation(company);
  const citations = getCallPrepCitations(company, { ticker: config.ticker });
  const sourceAudit = makeLightSourceAudit(citations);
  const revenueSpread = config.revenueGuide - config.consensus;
  const marginSpread = config.marginGuide - config.priorModel;
  const toneAdjustment = debrief.tone.score >= 68 ? 1.2 : debrief.tone.score <= 42 ? -1.4 : 0;
  const evidenceDrag = sourceAudit.quality < 65 ? -1.1 : sourceAudit.quality >= 82 ? 0.8 : 0;
  const modelImpact = Math.max(-35, Math.min(35, revenueSpread * 1.1 + marginSpread * 1.7 + toneAdjustment + evidenceDrag));
  const baseValue = valuation.baseCase.perShare;
  const revisedValue = Math.max(0, baseValue * (1 + modelImpact / 100));
  const revisionScore = Math.max(1, Math.min(100, Math.round(50 + revenueSpread * 4.5 + marginSpread * 5 + toneAdjustment * 6 + evidenceDrag * 5 + (config.confidence === "High conviction" ? 8 : config.confidence === "Needs proof" ? -9 : 0))));
  const bridgeRows = buildRevisionBridgeRows(config, company, debrief, sourceAudit, revenueSpread, marginSpread);
  const estimateRows = buildRevisionEstimateRows(config, company, baseValue, revisedValue, modelImpact, debrief);
  const actionRows = buildRevisionActionRows(config, company, debrief, revenueSpread, marginSpread, sourceAudit);
  const bias = makeRevisionBias(config, revisionScore, modelImpact, debrief);
  return {
    config,
    company,
    debrief,
    valuation,
    citations,
    sourceAudit,
    revenueSpread,
    marginSpread,
    modelImpact,
    baseValue,
    revisedValue,
    revisionScore,
    revisionLabel: revisionScore >= 72 ? "Upgrade pressure" : revisionScore <= 42 ? "Cut or prove" : "Hold with watchpoints",
    bridgeRows,
    estimateRows,
    actionRows,
    revisionBias: bias.label,
    biasNote: bias.note
  };
}

function buildPostEarningsDebriefSnapshotForTicker(ticker) {
  const previous = state.debriefConfig;
  state.debriefConfig = normalizeDebriefConfig({ ...(previous || getDefaultDebriefConfig()), ticker });
  const snapshot = buildPostEarningsDebriefSnapshot();
  state.debriefConfig = previous;
  return snapshot;
}

function buildRevisionBridgeRows(config, company, debrief, sourceAudit, revenueSpread, marginSpread) {
  return [
    {
      label: revenueSpread > 1 ? "Above" : revenueSpread < -1 ? "Below" : "Inline",
      className: revenueSpread < -1 ? "negative" : revenueSpread <= 1 ? "watch" : "normal",
      title: "Revenue guide versus consensus",
      body: `${roundOne(config.revenueGuide)}% guide versus ${roundOne(config.consensus)}% consensus for ${config.period}.`
    },
    {
      label: marginSpread > 1 ? "Lift" : marginSpread < -1 ? "Cut" : "Hold",
      className: marginSpread < -1 ? "negative" : Math.abs(marginSpread) <= 1 ? "watch" : "normal",
      title: "FCF margin versus prior model",
      body: `${roundOne(config.marginGuide)}% guided FCF margin versus ${roundOne(config.priorModel)}% prior model.`
    },
    {
      label: debrief.tone.label,
      className: debrief.tone.score <= 42 ? "negative" : debrief.tone.score < 62 ? "watch" : "normal",
      title: "Debrief consistency",
      body: `Post-earnings tone is ${debrief.tone.score}/100 with thesis delta ${debrief.thesisDelta}/100.`
    },
    {
      label: sourceAudit.coverageLabel,
      className: sourceAudit.quality < 65 ? "watch" : "normal",
      title: "Source support",
      body: `${sourceAudit.balance} source mix. ${company.ticker} still needs transcript-backed guidance language before production use.`
    }
  ];
}

function buildRevisionEstimateRows(config, company, baseValue, revisedValue, modelImpact, debrief) {
  const growthDelta = config.revenueGuide - (Number(company.growth) || config.consensus);
  const marginDelta = config.marginGuide - (Number(company.fcfMargin) || config.priorModel);
  return [
    {
      label: `${growthDelta >= 0 ? "+" : ""}${roundOne(growthDelta)} pts`,
      className: growthDelta < -1 ? "negative" : Math.abs(growthDelta) <= 1 ? "watch" : "normal",
      title: "Revenue CAGR revision",
      body: `Move the growth lens from ${roundOne(Number(company.growth) || config.consensus)}% toward ${roundOne(config.revenueGuide)}% only if transcript evidence supports it.`
    },
    {
      label: `${marginDelta >= 0 ? "+" : ""}${roundOne(marginDelta)} pts`,
      className: marginDelta < -1 ? "negative" : Math.abs(marginDelta) <= 1 ? "watch" : "normal",
      title: "FCF margin revision",
      body: `Margin guide implies ${roundOne(config.marginGuide)}% versus current company lens of ${roundOne(Number(company.fcfMargin) || config.priorModel)}%.`
    },
    {
      label: `${modelImpact >= 0 ? "+" : ""}${roundOne(modelImpact)}%`,
      className: modelImpact < -3 ? "negative" : Math.abs(modelImpact) <= 3 ? "watch" : "normal",
      title: "Valuation bridge",
      body: `Indicative base marker moves from ${formatPerShare(baseValue)} to ${formatPerShare(revisedValue)} before any multiple or risk-premium change.`
    },
    {
      label: config.confidence,
      className: config.confidence === "Needs proof" ? "watch" : "normal",
      title: "Revision confidence",
      body: `${debrief.decisionBias} debrief bias. ${config.note}`
    }
  ];
}

function buildRevisionActionRows(config, company, debrief, revenueSpread, marginSpread, sourceAudit) {
  const rows = [
    {
      priority: Math.abs(revenueSpread) >= 2 ? "High" : "Medium",
      className: Math.abs(revenueSpread) >= 2 ? "watch" : "normal",
      title: "Revenue proof",
      question: `Which transcript passages support moving $${company.ticker}'s revenue growth guide to ${roundOne(config.revenueGuide)}%?`,
      body: "Tie the revision to demand, backlog, pricing, or customer cadence."
    },
    {
      priority: Math.abs(marginSpread) >= 1.5 ? "High" : "Medium",
      className: marginSpread < -1.5 ? "high" : Math.abs(marginSpread) >= 1.5 ? "watch" : "normal",
      title: "Margin proof",
      question: `What evidence supports revising $${company.ticker}'s FCF margin from ${roundOne(config.priorModel)}% to ${roundOne(config.marginGuide)}%?`,
      body: "Separate operating leverage from one-time timing benefits."
    },
    {
      priority: sourceAudit.quality < 65 ? "High" : "Medium",
      className: sourceAudit.quality < 65 ? "high" : "normal",
      title: "Source gap",
      question: `Which filing, release, or earnings call section should I import before accepting the $${company.ticker} guidance revision?`,
      body: `${sourceAudit.quality}/100 light source audit.`
    },
    {
      priority: debrief.thesisDelta >= 60 ? "High" : "Medium",
      className: debrief.thesisDelta >= 60 ? "watch" : "normal",
      title: "Thesis reset",
      question: `Does the $${company.ticker} guidance update change the thesis, or only the near-term model?`,
      body: `Debrief thesis delta is ${debrief.thesisDelta}/100.`
    }
  ];
  if (config.mode === "Portfolio sizing") {
    rows.unshift({
      priority: "High",
      className: "high",
      title: "Sizing gate",
      question: `Should the $${company.ticker} position size change after this guidance revision?`,
      body: "Convert the revision into buy, hold, trim, or wait criteria."
    });
  }
  return rows.slice(0, 5);
}

function makeRevisionBias(config, revisionScore, modelImpact, debrief) {
  if (config.confidence === "Needs proof") return { label: "Wait", note: "Management guide needs transcript proof before the model moves." };
  if (revisionScore >= 72 && modelImpact > 2) return { label: "Upgrade", note: "Guidance and debrief both point toward a higher base case." };
  if (revisionScore <= 42 || modelImpact < -3) return { label: "Downgrade", note: "Guide or tone weakens the current model." };
  if (debrief.thesisDelta >= 60) return { label: "Review", note: "Thesis changed enough to require committee review." };
  return { label: "Hold", note: "Keep the model mostly intact and watch the next source update." };
}

function renderRevisionBridgeRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No bridge yet</strong><span>Build a revision to map guidance to consensus and prior model.</span></div>`;
  }
  return rows.map((row) => `
    <div class="revision-bridge-row ${escapeAttr(row.className || "normal")}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)}</em>
      </div>
    </div>
  `).join("");
}

function renderRevisionEstimateRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No estimates yet</strong><span>Guidance revisions will appear after scoring.</span></div>`;
  }
  return rows.map((row) => `
    <div class="revision-estimate-row ${escapeAttr(row.className || "normal")}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)}</em>
      </div>
    </div>
  `).join("");
}

function renderRevisionActions(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No actions</strong><span>Build a revision to generate model follow-ups.</span></div>`;
  }
  return rows.map((row) => `
    <button class="revision-action-row ${escapeAttr(row.className || "normal")}" type="button" data-revision-question="${escapeAttr(row.question)}">
      <span>${escapeHtml(row.priority)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.question)} ${escapeHtml(row.body)}</em>
      </div>
    </button>
  `).join("");
}

function readRevisionConfig() {
  return normalizeRevisionConfig({
    ticker: els.revisionTicker.value,
    period: els.revisionPeriod.value,
    revenueGuide: els.revisionRevenueGuide.value,
    consensus: els.revisionConsensus.value,
    marginGuide: els.revisionMarginGuide.value,
    priorModel: els.revisionPriorModel.value,
    confidence: els.revisionConfidence.value,
    mode: els.revisionMode.value,
    note: els.revisionNote.value
  });
}

function syncRevisionInputs() {
  if (!els.revisionTicker) return;
  const config = normalizeRevisionConfig(state.revisionConfig || getDefaultRevisionConfig());
  els.revisionTicker.value = config.ticker;
  els.revisionPeriod.value = config.period;
  els.revisionRevenueGuide.value = String(config.revenueGuide);
  els.revisionConsensus.value = String(config.consensus);
  els.revisionMarginGuide.value = String(config.marginGuide);
  els.revisionPriorModel.value = String(config.priorModel);
  els.revisionConfidence.value = config.confidence;
  els.revisionMode.value = config.mode;
  els.revisionNote.value = config.note;
}

function normalizeRevisionConfig(config) {
  const defaults = getDefaultRevisionConfig();
  return {
    ticker: normalizeTicker(String(config.ticker || defaults.ticker).replace(/^\$/, "")) || defaults.ticker,
    period: String(config.period || defaults.period).slice(0, 32),
    revenueGuide: clampRevisionNumber(config.revenueGuide, -30, 80, defaults.revenueGuide),
    consensus: clampRevisionNumber(config.consensus, -30, 80, defaults.consensus),
    marginGuide: clampRevisionNumber(config.marginGuide, -20, 60, defaults.marginGuide),
    priorModel: clampRevisionNumber(config.priorModel, -20, 60, defaults.priorModel),
    confidence: normalizeChoice(config.confidence, ["Balanced", "High conviction", "Needs proof"], defaults.confidence),
    mode: normalizeChoice(config.mode, ["Base case update", "Bull case test", "Downside guardrail", "Portfolio sizing"], defaults.mode),
    note: String(config.note || defaults.note).slice(0, 420)
  };
}

function clampRevisionNumber(value, min, max, fallback) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return fallback;
  return Math.max(min, Math.min(max, numeric));
}

function getDefaultRevisionConfig() {
  const ticker = state.debriefConfig?.ticker || state.callPrepConfig?.ticker || state.tickerFocus?.rawTicker || state.tickerFocus?.ticker || state.marketSettings?.ticker || "NVDA";
  const company = resolvePortfolioCompany(ticker);
  const baseGrowth = Number(company.growth) || 11;
  const baseMargin = Number(company.fcfMargin) || 15;
  return {
    ticker,
    period: "FY2026",
    revenueGuide: Math.round((baseGrowth + 3) * 10) / 10,
    consensus: Math.round(baseGrowth * 10) / 10,
    marginGuide: Math.round((baseMargin + 2) * 10) / 10,
    priorModel: Math.round(baseMargin * 10) / 10,
    confidence: "Balanced",
    mode: "Base case update",
    note: "Guidance is above consensus on revenue and slightly ahead of the prior FCF margin model, but execution timing and customer concentration still need transcript support before upgrading the thesis."
  };
}

function hydrateRevisionFromDebrief() {
  const debrief = state.currentDebrief || buildPostEarningsDebriefSnapshot();
  const company = debrief.company;
  const toneLift = debrief.tone.score >= 68 ? 2 : debrief.tone.score <= 42 ? -2 : 0;
  const marketLift = Math.max(-2, Math.min(2, debrief.marketMove / 2));
  state.revisionConfig = normalizeRevisionConfig({
    ...(state.revisionConfig || getDefaultRevisionConfig()),
    ticker: debrief.config.ticker,
    revenueGuide: (Number(company.growth) || 11) + toneLift + marketLift,
    consensus: Number(company.growth) || 11,
    marginGuide: (Number(company.fcfMargin) || 15) + (debrief.tone.score >= 68 ? 1.5 : debrief.tone.score <= 42 ? -1.5 : 0),
    priorModel: Number(company.fcfMargin) || 15,
    confidence: debrief.deltaLabel === "Mostly intact" ? "Balanced" : debrief.deltaLabel === "Major review" ? "Needs proof" : "Balanced",
    mode: debrief.config.mode === "Portfolio action" ? "Portfolio sizing" : debrief.config.mode === "Valuation update" ? "Base case update" : "Base case update",
    note: `Debrief bias: ${debrief.decisionBias}. ${debrief.decisionNote} Use transcript evidence before accepting any guidance-driven model revision.`
  });
}

function loadRevisionConfig() {
  return normalizeRevisionConfig(loadJson(STORAGE_KEYS.revision, getDefaultRevisionConfig()));
}

function saveRevisionConfig() {
  saveJson(STORAGE_KEYS.revision, normalizeRevisionConfig(state.revisionConfig || getDefaultRevisionConfig()));
}

function exportGuidanceRevision() {
  const snapshot = state.currentRevision || buildGuidanceRevisionSnapshot();
  const date = new Date().toISOString().slice(0, 10);
  const content = [
    "# CiteAlpha Guidance Revision Brief",
    "",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    "## Revision Setup",
    "",
    `- Ticker: ${snapshot.config.ticker}`,
    `- Period: ${snapshot.config.period}`,
    `- Mode: ${snapshot.config.mode}`,
    `- Confidence: ${snapshot.config.confidence}`,
    `- Note: ${snapshot.config.note}`,
    "",
    "## Scorecard",
    "",
    `- Revision score: ${snapshot.revisionScore}/100 (${snapshot.revisionLabel})`,
    `- Revenue guide spread: ${snapshot.revenueSpread >= 0 ? "+" : ""}${roundOne(snapshot.revenueSpread)} pts`,
    `- Margin guide spread: ${snapshot.marginSpread >= 0 ? "+" : ""}${roundOne(snapshot.marginSpread)} pts`,
    `- Model impact: ${snapshot.modelImpact >= 0 ? "+" : ""}${roundOne(snapshot.modelImpact)}%`,
    `- Base value marker: ${formatPerShare(snapshot.baseValue)} to ${formatPerShare(snapshot.revisedValue)}`,
    `- Revision bias: ${snapshot.revisionBias} - ${snapshot.biasNote}`,
    "",
    "## Guidance Bridge",
    "",
    ...snapshot.bridgeRows.map((row) => `- ${row.label} | ${row.title}: ${row.body}`),
    "",
    "## Estimate Revisions",
    "",
    ...snapshot.estimateRows.map((row) => `- ${row.label} | ${row.title}: ${row.body}`),
    "",
    "## Model Actions",
    "",
    ...snapshot.actionRows.map((row) => `- ${row.priority} | ${row.title}: ${row.question} ${row.body}`),
    "",
    "## Product Note",
    "",
    "This guidance revision room is a client-side workflow for product prototyping. Production should connect company guidance, consensus estimates, transcript citations, model versioning, and reviewer approval logs before using it for live investment research."
  ].join("\n");
  downloadTextFile(`citealpha-guidance-revision-${snapshot.config.ticker.toLowerCase()}-${date}.md`, content, "text/markdown;charset=utf-8");
  flashButtonLabel(els.exportRevisionBrief, "Exported");
}

function renderModelVersionControlRoom() {
  if (!els.modelControlMetricGrid) return;
  if (!state.modelControlConfig) state.modelControlConfig = loadModelControlConfig();
  syncModelControlInputs();
  const snapshot = buildModelVersionControlSnapshot();
  state.currentModelControl = snapshot;
  els.modelControlMetricGrid.innerHTML = [
    { label: "Audit score", value: `${snapshot.auditScore}/100`, sub: snapshot.auditLabel },
    { label: "Value delta", value: `${snapshot.valueDeltaPct >= 0 ? "+" : ""}${roundOne(snapshot.valueDeltaPct)}%`, sub: `${formatPerShare(snapshot.priorValue)} to ${formatPerShare(snapshot.newValue)}` },
    { label: "Gate status", value: snapshot.gateStatus, sub: snapshot.gateNote },
    { label: "Version", value: snapshot.config.version, sub: snapshot.config.status }
  ].map((metric) => `
    <div class="modelctl-metric">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(String(metric.value))}</strong>
      <em>${escapeHtml(metric.sub)}</em>
    </div>
  `).join("");
  els.modelControlDeltaCount.textContent = String(snapshot.deltaRows.length);
  els.modelControlDeltaList.innerHTML = renderModelControlDeltas(snapshot.deltaRows);
  els.modelControlGateCount.textContent = String(snapshot.gateRows.length);
  els.modelControlGateList.innerHTML = renderModelControlGates(snapshot.gateRows);
  els.modelControlActionCount.textContent = String(snapshot.actionRows.length);
  els.modelControlActionList.innerHTML = renderModelControlActions(snapshot.actionRows);
}

function buildModelVersionControlSnapshot() {
  const config = normalizeModelControlConfig(state.modelControlConfig || getDefaultModelControlConfig());
  const company = resolvePortfolioCompany(config.ticker);
  const revision = state.currentRevision && state.currentRevision.config.ticker === config.ticker
    ? state.currentRevision
    : buildGuidanceRevisionSnapshotForTicker(config.ticker);
  const valuation = buildTearSheetValuation(company);
  const priorCase = valuation.baseCase || computeValuationCase(company, {
    growth: Number(company.growth) || 10,
    margin: Number(company.fcfMargin) || 10,
    multiple: Number(company.multiple) || 16,
    discount: 10
  }, 5);
  const newCase = computeValuationCase(company, {
    growth: config.growth,
    margin: config.margin,
    multiple: config.multiple,
    discount: config.discount
  }, 5);
  const priorValue = priorCase.perShare || 0;
  const newValue = newCase.perShare || 0;
  const valueDelta = newValue - priorValue;
  const valueDeltaPct = priorValue ? (valueDelta / priorValue) * 100 : 0;
  const citations = getCallPrepCitations(company, { ticker: config.ticker });
  const sourceAudit = makeLightSourceAudit(citations);
  const deltaRows = buildModelControlDeltaRows(config, company, priorCase, valueDeltaPct);
  const gateRows = buildModelControlGateRows(config, revision, sourceAudit, deltaRows, valueDeltaPct);
  const actionRows = buildModelControlActionRows(config, company, revision, deltaRows, gateRows, valueDeltaPct);
  const blockedCount = gateRows.filter((row) => row.className === "blocked").length;
  const watchCount = gateRows.filter((row) => row.className === "watch").length;
  const deltaPressure = Math.min(30, Math.abs(valueDeltaPct) * 0.8 + deltaRows.filter((row) => row.material).length * 5);
  const auditScore = Math.max(1, Math.min(100, Math.round(sourceAudit.quality * 0.32 + revision.revisionScore * 0.24 + Math.max(20, 100 - deltaPressure) * 0.22 + (config.status === "Approved" ? 12 : config.status === "Ready for review" ? 8 : config.status === "Blocked" ? -8 : 2) - blockedCount * 10 - watchCount * 3)));
  const gateStatus = blockedCount ? "Blocked" : watchCount >= 2 ? "Review" : config.status === "Approved" ? "Approved" : "Ready";
  return {
    config,
    company,
    revision,
    valuation,
    priorCase,
    newCase,
    priorValue,
    newValue,
    valueDelta,
    valueDeltaPct,
    citations,
    sourceAudit,
    deltaRows,
    gateRows,
    actionRows,
    auditScore,
    auditLabel: auditScore >= 82 ? "Clean version trail" : auditScore >= 65 ? "Reviewable model change" : "Needs audit support",
    gateStatus,
    gateNote: blockedCount ? `${blockedCount} blocked gate${blockedCount === 1 ? "" : "s"}` : watchCount ? `${watchCount} review gate${watchCount === 1 ? "" : "s"}` : "No critical blockers"
  };
}

function buildGuidanceRevisionSnapshotForTicker(ticker) {
  const previous = state.revisionConfig;
  state.revisionConfig = normalizeRevisionConfig({ ...(previous || getDefaultRevisionConfig()), ticker });
  const snapshot = buildGuidanceRevisionSnapshot();
  state.revisionConfig = previous;
  return snapshot;
}

function buildModelControlDeltaRows(config, company, priorCase, valueDeltaPct) {
  const rows = [
    {
      key: "Revenue CAGR",
      current: Number(priorCase.growth) || Number(company.growth) || 0,
      next: config.growth,
      unit: "pts",
      question: `Which source evidence supports moving $${company.ticker} revenue CAGR to ${roundOne(config.growth)}%?`
    },
    {
      key: "FCF margin",
      current: Number(priorCase.margin) || Number(company.fcfMargin) || 0,
      next: config.margin,
      unit: "pts",
      question: `What evidence supports $${company.ticker} sustaining ${roundOne(config.margin)}% FCF margin?`
    },
    {
      key: "Terminal multiple",
      current: Number(priorCase.multiple) || Number(company.multiple) || 0,
      next: config.multiple,
      unit: "x",
      question: `What durability evidence justifies a ${roundOne(config.multiple)}x terminal multiple for $${company.ticker}?`
    },
    {
      key: "Discount rate",
      current: Number(priorCase.discount) || 10,
      next: config.discount,
      unit: "pts",
      question: `Did $${company.ticker}'s risk profile change enough to justify a ${roundOne(config.discount)}% discount rate?`
    }
  ];
  return rows.map((row) => {
    const delta = row.next - row.current;
    const material = Math.abs(delta) >= (row.key === "Terminal multiple" ? 1 : 1.5);
    const valueClass = row.key === "Discount rate"
      ? delta > 0.5 ? "negative" : delta < -0.5 ? "normal" : "watch"
      : delta < -1 ? "negative" : delta > 1 ? "normal" : "watch";
    return {
      ...row,
      delta,
      material,
      className: material ? valueClass : "watch",
      label: `${delta >= 0 ? "+" : ""}${roundOne(delta)} ${row.unit}`,
      title: row.key,
      body: `${roundOne(row.current)} to ${roundOne(row.next)}. Model value delta now reads ${valueDeltaPct >= 0 ? "+" : ""}${roundOne(valueDeltaPct)}%.`
    };
  });
}

function buildModelControlGateRows(config, revision, sourceAudit, deltaRows, valueDeltaPct) {
  const materialCount = deltaRows.filter((row) => row.material).length;
  return [
    {
      label: sourceAudit.quality >= 75 ? "Pass" : "Review",
      className: sourceAudit.quality >= 75 ? "normal" : "watch",
      title: "Source evidence",
      body: `${sourceAudit.quality}/100 source audit with ${sourceAudit.balance} mix.`
    },
    {
      label: revision.revisionScore >= 65 ? "Pass" : "Watch",
      className: revision.revisionScore >= 65 ? "normal" : "watch",
      title: "Guidance revision link",
      body: `Revision score is ${revision.revisionScore}/100 with ${revision.revisionBias} bias.`
    },
    {
      label: Math.abs(valueDeltaPct) >= 15 ? "Review" : "Pass",
      className: Math.abs(valueDeltaPct) >= 25 ? "blocked" : Math.abs(valueDeltaPct) >= 15 ? "watch" : "normal",
      title: "Valuation impact",
      body: `${valueDeltaPct >= 0 ? "+" : ""}${roundOne(valueDeltaPct)}% value delta versus prior base case.`
    },
    {
      label: materialCount >= 3 ? "Review" : "Pass",
      className: materialCount >= 4 ? "blocked" : materialCount >= 3 ? "watch" : "normal",
      title: "Assumption breadth",
      body: `${materialCount} material assumption change${materialCount === 1 ? "" : "s"} in this version.`
    },
    {
      label: config.status,
      className: config.status === "Blocked" ? "blocked" : config.status === "Draft" ? "watch" : "normal",
      title: "Approval state",
      body: `${config.owner} owns ${config.version}. Rationale: ${config.rationale}`
    }
  ];
}

function buildModelControlActionRows(config, company, revision, deltaRows, gateRows, valueDeltaPct) {
  const rows = deltaRows.filter((row) => row.material).slice(0, 3).map((row) => ({
    priority: row.className === "negative" ? "High" : "Medium",
    className: row.className === "negative" ? "high" : "watch",
    title: `${row.title} support`,
    question: row.question,
    body: row.body
  }));
  const blocked = gateRows.find((row) => row.className === "blocked");
  if (blocked) {
    rows.unshift({
      priority: "High",
      className: "high",
      title: "Blocked approval gate",
      question: `What evidence is needed to clear the ${blocked.title.toLowerCase()} gate for $${company.ticker}?`,
      body: blocked.body
    });
  }
  rows.push({
    priority: Math.abs(valueDeltaPct) >= 15 ? "High" : "Medium",
    className: Math.abs(valueDeltaPct) >= 15 ? "watch" : "normal",
    title: "Committee checkpoint",
    question: `Should ${config.version} for $${company.ticker} go to committee before replacing the active model?`,
    body: `Revision bias is ${revision.revisionBias}; value delta is ${valueDeltaPct >= 0 ? "+" : ""}${roundOne(valueDeltaPct)}%.`
  });
  rows.push({
    priority: "Medium",
    className: "normal",
    title: "Version log",
    question: `What changed between the prior $${company.ticker} model and ${config.version}?`,
    body: "Use this question to produce a concise model-change audit note."
  });
  return rows.slice(0, 5);
}

function renderModelControlDeltas(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No deltas yet</strong><span>Lock a model version to compare assumptions.</span></div>`;
  }
  return rows.map((row) => `
    <div class="modelctl-delta-row ${escapeAttr(row.className || "normal")}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)}</em>
      </div>
    </div>
  `).join("");
}

function renderModelControlGates(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No gates yet</strong><span>Model approval gates will appear after the version is scored.</span></div>`;
  }
  return rows.map((row) => `
    <div class="modelctl-gate-row ${escapeAttr(row.className || "normal")}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)}</em>
      </div>
    </div>
  `).join("");
}

function renderModelControlActions(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No actions</strong><span>Audit actions will appear after version scoring.</span></div>`;
  }
  return rows.map((row) => `
    <button class="modelctl-action-row ${escapeAttr(row.className || "normal")}" type="button" data-modelctl-question="${escapeAttr(row.question)}">
      <span>${escapeHtml(row.priority)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.question)} ${escapeHtml(row.body)}</em>
      </div>
    </button>
  `).join("");
}

function readModelControlConfig() {
  return normalizeModelControlConfig({
    ticker: els.modelControlTicker.value,
    version: els.modelControlVersion.value,
    owner: els.modelControlOwner.value,
    status: els.modelControlStatus.value,
    growth: els.modelControlGrowth.value,
    margin: els.modelControlMargin.value,
    multiple: els.modelControlMultiple.value,
    discount: els.modelControlDiscount.value,
    rationale: els.modelControlRationale.value
  });
}

function syncModelControlInputs() {
  if (!els.modelControlTicker) return;
  const config = normalizeModelControlConfig(state.modelControlConfig || getDefaultModelControlConfig());
  els.modelControlTicker.value = config.ticker;
  els.modelControlVersion.value = config.version;
  els.modelControlOwner.value = config.owner;
  els.modelControlStatus.value = config.status;
  els.modelControlGrowth.value = String(config.growth);
  els.modelControlMargin.value = String(config.margin);
  els.modelControlMultiple.value = String(config.multiple);
  els.modelControlDiscount.value = String(config.discount);
  els.modelControlRationale.value = config.rationale;
}

function normalizeModelControlConfig(config) {
  const defaults = getDefaultModelControlConfig();
  return {
    ticker: normalizeTicker(String(config.ticker || defaults.ticker).replace(/^\$/, "")) || defaults.ticker,
    version: String(config.version || defaults.version).slice(0, 48),
    owner: String(config.owner || defaults.owner).slice(0, 48),
    status: normalizeChoice(config.status, ["Draft", "Ready for review", "Approved", "Blocked"], defaults.status),
    growth: clampRevisionNumber(config.growth, -30, 80, defaults.growth),
    margin: clampRevisionNumber(config.margin, -20, 60, defaults.margin),
    multiple: clampRevisionNumber(config.multiple, 2, 60, defaults.multiple),
    discount: clampRevisionNumber(config.discount, 2, 30, defaults.discount),
    rationale: String(config.rationale || defaults.rationale).slice(0, 520)
  };
}

function getDefaultModelControlConfig() {
  const ticker = state.revisionConfig?.ticker || state.debriefConfig?.ticker || state.callPrepConfig?.ticker || state.tickerFocus?.rawTicker || state.tickerFocus?.ticker || state.marketSettings?.ticker || "NVDA";
  const company = resolvePortfolioCompany(ticker);
  return {
    ticker,
    version: "v1.1 post-guide",
    owner: "Research desk",
    status: "Draft",
    growth: Math.round((Number(company.growth) || 11) * 10) / 10,
    margin: Math.round((Number(company.fcfMargin) || 15) * 10) / 10,
    multiple: Math.round((Number(company.multiple) || 18) * 10) / 10,
    discount: 10,
    rationale: "Version captures post-guidance revenue and FCF margin revisions while keeping the terminal multiple and discount rate unchanged until transcript citations are reviewed."
  };
}

function hydrateModelControlFromRevision() {
  const revision = state.currentRevision || buildGuidanceRevisionSnapshot();
  const company = revision.company;
  state.modelControlConfig = normalizeModelControlConfig({
    ...(state.modelControlConfig || getDefaultModelControlConfig()),
    ticker: revision.config.ticker,
    version: `${revision.config.period} ${revision.revisionBias.toLowerCase()} case`,
    owner: "Research desk",
    status: revision.revisionBias === "Upgrade" && revision.revisionScore >= 78 ? "Ready for review" : revision.revisionBias === "Downgrade" ? "Ready for review" : "Draft",
    growth: revision.config.revenueGuide,
    margin: revision.config.marginGuide,
    multiple: Number(company.multiple) || 18,
    discount: revision.revisionBias === "Downgrade" ? 10.5 : 10,
    rationale: `Pulled from Guidance Revision: ${revision.revisionBias}. ${revision.biasNote} ${revision.config.note}`
  });
}

function loadModelControlConfig() {
  return normalizeModelControlConfig(loadJson(STORAGE_KEYS.modelControl, getDefaultModelControlConfig()));
}

function saveModelControlConfig() {
  saveJson(STORAGE_KEYS.modelControl, normalizeModelControlConfig(state.modelControlConfig || getDefaultModelControlConfig()));
}

function exportModelVersionControl() {
  const snapshot = state.currentModelControl || buildModelVersionControlSnapshot();
  const date = new Date().toISOString().slice(0, 10);
  const content = [
    "# CiteAlpha Model Version Control Log",
    "",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    "## Version Setup",
    "",
    `- Ticker: ${snapshot.config.ticker}`,
    `- Version: ${snapshot.config.version}`,
    `- Owner: ${snapshot.config.owner}`,
    `- Status: ${snapshot.config.status}`,
    `- Rationale: ${snapshot.config.rationale}`,
    "",
    "## Audit Scorecard",
    "",
    `- Audit score: ${snapshot.auditScore}/100 (${snapshot.auditLabel})`,
    `- Gate status: ${snapshot.gateStatus} - ${snapshot.gateNote}`,
    `- Prior value: ${formatPerShare(snapshot.priorValue)}`,
    `- New value: ${formatPerShare(snapshot.newValue)}`,
    `- Value delta: ${snapshot.valueDeltaPct >= 0 ? "+" : ""}${roundOne(snapshot.valueDeltaPct)}%`,
    `- Source mix: ${snapshot.sourceAudit.balance}`,
    "",
    "## Assumption Deltas",
    "",
    ...snapshot.deltaRows.map(formatModelControlDeltaExport),
    "",
    "## Approval Gates",
    "",
    ...snapshot.gateRows.map((row) => `- ${row.label} | ${row.title}: ${row.body}`),
    "",
    "## Audit Actions",
    "",
    ...snapshot.actionRows.map((row) => `- ${row.priority} | ${row.title}: ${row.question} ${row.body}`),
    "",
    "## Product Note",
    "",
    "This model version control room is a client-side workflow for product prototyping. Production should persist immutable model versions, reviewer approvals, source references, and export logs before using it for live investment research."
  ].join("\n");
  downloadTextFile(`citealpha-model-version-control-${snapshot.config.ticker.toLowerCase()}-${date}.md`, content, "text/markdown;charset=utf-8");
  flashButtonLabel(els.exportModelControlBrief, "Exported");
}

function formatModelControlDeltaExport(row) {
  const unit = row.key === "Terminal multiple" ? "x" : "%";
  const materialText = row.material ? "material" : "immaterial";
  return `- ${row.title}: ${roundOne(row.current)}${unit} -> ${roundOne(row.next)}${unit} (${row.label}, ${materialText}). Committee question: ${row.question}`;
}

function renderIcApprovalRoom() {
  if (!els.approvalMetricGrid) return;
  if (!state.approvalConfig) state.approvalConfig = loadApprovalConfig();
  syncApprovalInputs();
  const snapshot = buildIcApprovalSnapshot();
  state.currentApproval = snapshot;
  els.approvalMetricGrid.innerHTML = [
    { label: "Approval score", value: `${snapshot.approvalScore}/100`, sub: snapshot.scoreLabel },
    { label: "Decision", value: snapshot.decisionLabel, sub: snapshot.decisionNote },
    { label: "Open conditions", value: snapshot.conditionRows.length, sub: `${snapshot.blockerCount} blocker${snapshot.blockerCount === 1 ? "" : "s"}` },
    { label: "Reviewer", value: snapshot.config.reviewer, sub: snapshot.config.window }
  ].map((metric) => `
    <div class="approval-metric">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(String(metric.value))}</strong>
      <em>${escapeHtml(metric.sub)}</em>
    </div>
  `).join("");
  els.approvalDecisionCount.textContent = String(snapshot.decisionRows.length);
  els.approvalDecisionList.innerHTML = renderApprovalDecisionRows(snapshot.decisionRows);
  els.approvalConditionCount.textContent = String(snapshot.conditionRows.length);
  els.approvalConditionList.innerHTML = renderApprovalConditionRows(snapshot.conditionRows);
  els.approvalActionCount.textContent = String(snapshot.actionRows.length);
  els.approvalActionList.innerHTML = renderApprovalActionRows(snapshot.actionRows);
}

function buildIcApprovalSnapshot() {
  const config = normalizeApprovalConfig(state.approvalConfig || getDefaultApprovalConfig());
  const model = state.currentModelControl && state.currentModelControl.config.ticker === config.ticker
    ? state.currentModelControl
    : buildModelVersionControlSnapshotForTicker(config.ticker);
  const citationCount = model.citations.length;
  const valueDeltaAbs = Math.abs(model.valueDeltaPct);
  const requiredCitations = Number(config.requiredCitations) || 0;
  const citationGap = Math.max(0, requiredCitations - citationCount);
  const valueExcess = Math.max(0, valueDeltaAbs - config.valueLimit);
  const gateBlockers = model.gateRows.filter((row) => row.className === "blocked").length;
  const gateWatch = model.gateRows.filter((row) => row.className === "watch").length;
  const strictPenalty = config.riskTolerance === "Strict" ? 8 : config.riskTolerance === "Exploratory" ? -4 : 0;
  const requestPenalty = config.request === "Block replacement" ? 18 : config.request === "Request changes" ? 10 : config.request === "Approve with conditions" ? 4 : 0;
  const approvalScore = Math.max(1, Math.min(100, Math.round(model.auditScore * 0.44 + model.revision.revisionScore * 0.18 + Math.max(0, 100 - valueExcess * 2.4) * 0.16 + Math.max(0, 100 - citationGap * 14) * 0.12 + (model.gateStatus === "Approved" ? 8 : model.gateStatus === "Ready" ? 5 : -6) - gateBlockers * 12 - gateWatch * 3 - strictPenalty - requestPenalty)));
  const conditionRows = buildApprovalConditionRows(config, model, { citationCount, citationGap, valueExcess, gateBlockers, gateWatch });
  const decision = makeApprovalDecision(config, model, approvalScore, conditionRows);
  const decisionRows = buildApprovalDecisionRows(config, model, approvalScore, decision, { citationCount, valueDeltaAbs });
  const actionRows = buildApprovalActionRows(config, model, conditionRows, decision);
  return {
    config,
    model,
    citationCount,
    citationGap,
    valueExcess,
    gateBlockers,
    gateWatch,
    conditionRows,
    decisionRows,
    actionRows,
    approvalScore,
    scoreLabel: approvalScore >= 82 ? "IC-ready" : approvalScore >= 65 ? "Conditional review" : "Needs changes",
    decisionLabel: decision.label,
    decisionNote: decision.note,
    blockerCount: conditionRows.filter((row) => row.className === "blocked").length
  };
}

function buildModelVersionControlSnapshotForTicker(ticker) {
  const previous = state.modelControlConfig;
  state.modelControlConfig = normalizeModelControlConfig({ ...(previous || getDefaultModelControlConfig()), ticker });
  const snapshot = buildModelVersionControlSnapshot();
  state.modelControlConfig = previous;
  return snapshot;
}

function buildApprovalDecisionRows(config, model, approvalScore, decision, context) {
  return [
    {
      label: decision.label,
      className: decision.className,
      title: "Recommended IC action",
      body: `${decision.note} Request: ${config.request}.`
    },
    {
      label: `${approvalScore}/100`,
      className: approvalScore >= 82 ? "normal" : approvalScore >= 65 ? "watch" : "blocked",
      title: "Approval readiness",
      body: `Model audit is ${model.auditScore}/100; guidance revision score is ${model.revision.revisionScore}/100.`
    },
    {
      label: `${context.valueDeltaAbs.toFixed(1)}%`,
      className: context.valueDeltaAbs > config.valueLimit ? "blocked" : context.valueDeltaAbs > config.valueLimit * 0.75 ? "watch" : "normal",
      title: "Value impact guardrail",
      body: `Value delta is ${model.valueDeltaPct >= 0 ? "+" : ""}${roundOne(model.valueDeltaPct)}% versus ${config.valueLimit}% approval limit.`
    },
    {
      label: `${context.citationCount}/${config.requiredCitations}`,
      className: context.citationCount >= config.requiredCitations ? "normal" : "watch",
      title: "Citation coverage",
      body: `${context.citationCount} citations available for IC review; ${config.requiredCitations} required by this approval setup.`
    }
  ];
}

function buildApprovalConditionRows(config, model, context) {
  const rows = [];
  if (context.citationGap > 0) {
    rows.push({
      label: "Source gap",
      className: "watch",
      title: "Minimum citation support",
      body: `Add ${context.citationGap} more citation${context.citationGap === 1 ? "" : "s"} before final approval.`
    });
  }
  if (context.valueExcess > 0) {
    rows.push({
      label: "Value gate",
      className: context.valueExcess > 12 ? "blocked" : "watch",
      title: "Valuation impact above limit",
      body: `Value delta exceeds the ${config.valueLimit}% limit by ${roundOne(context.valueExcess)} points.`
    });
  }
  model.gateRows.filter((row) => row.className === "blocked" || row.className === "watch").slice(0, 3).forEach((row) => {
    rows.push({
      label: row.label,
      className: row.className === "blocked" ? "blocked" : "watch",
      title: row.title,
      body: row.body
    });
  });
  if (config.request === "Approve with conditions") {
    rows.push({
      label: "Condition",
      className: "watch",
      title: "Conditional approval language",
      body: "Approval should state what must be imported, verified, or reviewed before replacing the active model."
    });
  }
  if (!rows.length) {
    rows.push({
      label: "Clear",
      className: "normal",
      title: "No material approval blockers",
      body: "Current model log clears the configured IC guardrails."
    });
  }
  return rows.slice(0, 6);
}

function buildApprovalActionRows(config, model, conditions, decision) {
  const rows = conditions.filter((row) => row.className === "blocked" || row.className === "watch").slice(0, 3).map((row) => ({
    priority: row.className === "blocked" ? "High" : "Medium",
    className: row.className === "blocked" ? "high" : "watch",
    title: `${row.title} follow-up`,
    question: `What evidence is needed to clear the ${row.title.toLowerCase()} condition for $${config.ticker}?`,
    body: row.body
  }));
  rows.push({
    priority: decision.className === "blocked" ? "High" : "Medium",
    className: decision.className === "blocked" ? "high" : "normal",
    title: "IC decision memo",
    question: `Draft the IC decision memo for $${config.ticker}: ${decision.label}.`,
    body: `Use output mode: ${config.output}.`
  });
  rows.push({
    priority: Math.abs(model.valueDeltaPct) >= config.valueLimit ? "High" : "Medium",
    className: Math.abs(model.valueDeltaPct) >= config.valueLimit ? "watch" : "normal",
    title: "Model replacement test",
    question: `Should ${model.config.version} replace the active $${config.ticker} model after IC review?`,
    body: `Value delta is ${model.valueDeltaPct >= 0 ? "+" : ""}${roundOne(model.valueDeltaPct)}%.`
  });
  return rows.slice(0, 5);
}

function makeApprovalDecision(config, model, approvalScore, conditions) {
  const blocked = conditions.some((row) => row.className === "blocked") || config.request === "Block replacement";
  if (blocked) return { label: "Block", className: "blocked", note: "Do not replace the active model until blockers are cleared." };
  if (config.request === "Request changes" || approvalScore < 65) {
    return { label: "Request changes", className: "blocked", note: "Send the model back for more evidence or tighter assumptions." };
  }
  if (config.request === "Approve with conditions" || conditions.some((row) => row.className === "watch") || approvalScore < 82) {
    return { label: "Conditional", className: "watch", note: "Approval can proceed only with listed conditions attached." };
  }
  if (model.gateStatus === "Approved" || approvalScore >= 82) {
    return { label: "Approve", className: "normal", note: "Model version is ready to replace the active case." };
  }
  return { label: "Review", className: "watch", note: "Model is reviewable but not yet a clean approval." };
}

function renderApprovalDecisionRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No decision yet</strong><span>Build approval to score the IC decision.</span></div>`;
  }
  return rows.map((row) => `
    <div class="approval-decision-row ${escapeAttr(row.className || "normal")}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)}</em>
      </div>
    </div>
  `).join("");
}

function renderApprovalConditionRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No conditions</strong><span>The approval setup has no open conditions.</span></div>`;
  }
  return rows.map((row) => `
    <div class="approval-condition-row ${escapeAttr(row.className || "normal")}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)}</em>
      </div>
    </div>
  `).join("");
}

function renderApprovalActionRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No actions</strong><span>Committee actions will appear after approval scoring.</span></div>`;
  }
  return rows.map((row) => `
    <button class="approval-action-row ${escapeAttr(row.className || "normal")}" type="button" data-approval-question="${escapeAttr(row.question)}">
      <span>${escapeHtml(row.priority)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.question)} ${escapeHtml(row.body)}</em>
      </div>
    </button>
  `).join("");
}

function readApprovalConfig() {
  return normalizeApprovalConfig({
    ticker: els.approvalTicker.value,
    request: els.approvalRequest.value,
    reviewer: els.approvalReviewer.value,
    window: els.approvalWindow.value,
    requiredCitations: els.approvalRequiredCitations.value,
    valueLimit: els.approvalValueLimit.value,
    riskTolerance: els.approvalRiskTolerance.value,
    output: els.approvalOutput.value,
    note: els.approvalNote.value
  });
}

function syncApprovalInputs() {
  if (!els.approvalTicker) return;
  const config = normalizeApprovalConfig(state.approvalConfig || getDefaultApprovalConfig());
  els.approvalTicker.value = config.ticker;
  els.approvalRequest.value = config.request;
  els.approvalReviewer.value = config.reviewer;
  els.approvalWindow.value = config.window;
  els.approvalRequiredCitations.value = String(config.requiredCitations);
  els.approvalValueLimit.value = String(config.valueLimit);
  els.approvalRiskTolerance.value = config.riskTolerance;
  els.approvalOutput.value = config.output;
  els.approvalNote.value = config.note;
}

function normalizeApprovalConfig(config) {
  const defaults = getDefaultApprovalConfig();
  return {
    ticker: normalizeTicker(String(config.ticker || defaults.ticker).replace(/^\$/, "")) || defaults.ticker,
    request: normalizeChoice(config.request, ["Approve model", "Approve with conditions", "Request changes", "Block replacement"], defaults.request),
    reviewer: String(config.reviewer || defaults.reviewer).slice(0, 48),
    window: normalizeChoice(config.window, ["Next IC", "Today", "This week", "After transcript import"], defaults.window),
    requiredCitations: Math.max(0, Math.min(12, Math.round(Number(config.requiredCitations) || defaults.requiredCitations))),
    valueLimit: Math.max(0, Math.min(100, Number(config.valueLimit) || defaults.valueLimit)),
    riskTolerance: normalizeChoice(config.riskTolerance, ["Balanced", "Strict", "Exploratory"], defaults.riskTolerance),
    output: normalizeChoice(config.output, ["Approval memo", "Committee packet", "Change request"], defaults.output),
    note: String(config.note || defaults.note).slice(0, 420)
  };
}

function getDefaultApprovalConfig() {
  const ticker = state.modelControlConfig?.ticker || state.revisionConfig?.ticker || state.debriefConfig?.ticker || state.callPrepConfig?.ticker || state.marketSettings?.ticker || "NVDA";
  return {
    ticker,
    request: "Approve with conditions",
    reviewer: "Investment committee",
    window: "Next IC",
    requiredCitations: 4,
    valueLimit: 25,
    riskTolerance: "Balanced",
    output: "Approval memo",
    note: "Review whether this model version can replace the active case, with conditions for source support, valuation impact, and unresolved risk gates."
  };
}

function hydrateApprovalFromModelControl() {
  const model = state.currentModelControl || buildModelVersionControlSnapshot();
  state.approvalConfig = normalizeApprovalConfig({
    ...(state.approvalConfig || getDefaultApprovalConfig()),
    ticker: model.config.ticker,
    request: model.gateStatus === "Blocked" ? "Request changes" : model.gateStatus === "Approved" ? "Approve model" : "Approve with conditions",
    reviewer: "Investment committee",
    window: model.gateStatus === "Blocked" ? "After transcript import" : "Next IC",
    requiredCitations: Math.max(4, Math.min(8, model.citations.length + (model.gateStatus === "Blocked" ? 2 : 0))),
    valueLimit: Math.abs(model.valueDeltaPct) >= 25 ? 25 : 30,
    riskTolerance: model.gateStatus === "Blocked" ? "Strict" : "Balanced",
    output: model.gateStatus === "Blocked" ? "Change request" : "Approval memo",
    note: `Model log says ${model.gateStatus}: ${model.gateNote}. Audit score ${model.auditScore}/100; value delta ${model.valueDeltaPct >= 0 ? "+" : ""}${roundOne(model.valueDeltaPct)}%.`
  });
}

function loadApprovalConfig() {
  return normalizeApprovalConfig(loadJson(STORAGE_KEYS.approval, getDefaultApprovalConfig()));
}

function saveApprovalConfig() {
  saveJson(STORAGE_KEYS.approval, normalizeApprovalConfig(state.approvalConfig || getDefaultApprovalConfig()));
}

function exportIcApprovalMemo() {
  const snapshot = state.currentApproval || buildIcApprovalSnapshot();
  const date = new Date().toISOString().slice(0, 10);
  const content = [
    "# CiteAlpha IC Approval Memo",
    "",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    "## Approval Setup",
    "",
    `- Ticker: ${snapshot.config.ticker}`,
    `- Request: ${snapshot.config.request}`,
    `- Reviewer: ${snapshot.config.reviewer}`,
    `- Meeting window: ${snapshot.config.window}`,
    `- Risk tolerance: ${snapshot.config.riskTolerance}`,
    `- Output mode: ${snapshot.config.output}`,
    `- Committee note: ${snapshot.config.note}`,
    "",
    "## Decision",
    "",
    `- Recommendation: ${snapshot.decisionLabel}`,
    `- Approval score: ${snapshot.approvalScore}/100 (${snapshot.scoreLabel})`,
    `- Decision note: ${snapshot.decisionNote}`,
    `- Model version: ${snapshot.model.config.version}`,
    `- Model audit score: ${snapshot.model.auditScore}/100`,
    `- Value delta: ${snapshot.model.valueDeltaPct >= 0 ? "+" : ""}${roundOne(snapshot.model.valueDeltaPct)}%`,
    `- Citation coverage: ${snapshot.citationCount}/${snapshot.config.requiredCitations}`,
    "",
    "## Decision Board",
    "",
    ...snapshot.decisionRows.map((row) => `- ${row.label} | ${row.title}: ${row.body}`),
    "",
    "## Conditions",
    "",
    ...snapshot.conditionRows.map((row) => `- ${row.label} | ${row.title}: ${row.body}`),
    "",
    "## Committee Actions",
    "",
    ...snapshot.actionRows.map((row) => `- ${row.priority} | ${row.title}: ${row.question} ${row.body}`),
    "",
    "## Product Note",
    "",
    "This IC approval room is a client-side workflow for product prototyping. Production should persist reviewer identities, sign-offs, comments, source versions, and immutable approval logs before using it for live investment research."
  ].join("\n");
  downloadTextFile(`citealpha-ic-approval-${snapshot.config.ticker.toLowerCase()}-${date}.md`, content, "text/markdown;charset=utf-8");
  flashButtonLabel(els.exportApprovalBrief, "Exported");
}

function renderPortfolioActionRoom() {
  if (!els.portfolioActionMetricGrid) return;
  if (!state.portfolioActionConfig) state.portfolioActionConfig = loadPortfolioActionConfig();
  syncPortfolioActionInputs();
  const snapshot = buildPortfolioActionSnapshot();
  state.currentPortfolioAction = snapshot;
  els.portfolioActionMetricGrid.innerHTML = [
    { label: "Action score", value: `${snapshot.actionScore}/100`, sub: snapshot.scoreLabel },
    { label: "Decision", value: snapshot.actionDecision, sub: snapshot.decisionNote },
    { label: "Weight move", value: `${snapshot.weightDelta >= 0 ? "+" : ""}${roundOne(snapshot.weightDelta)} pts`, sub: `${roundOne(snapshot.config.currentWeight)}% to ${roundOne(snapshot.config.targetWeight)}%` },
    { label: "Risk budget", value: snapshot.config.riskBudget, sub: `${snapshot.blockerCount} blocker${snapshot.blockerCount === 1 ? "" : "s"}` }
  ].map((metric) => `
    <div class="action-metric">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(String(metric.value))}</strong>
      <em>${escapeHtml(metric.sub)}</em>
    </div>
  `).join("");
  els.portfolioActionSizingCount.textContent = String(snapshot.sizingRows.length);
  els.portfolioActionSizingList.innerHTML = renderPortfolioActionSizingRows(snapshot.sizingRows);
  els.portfolioActionRiskCount.textContent = String(snapshot.riskRows.length);
  els.portfolioActionRiskList.innerHTML = renderPortfolioActionRiskRows(snapshot.riskRows);
  els.portfolioActionMonitorCount.textContent = String(snapshot.monitorRows.length);
  els.portfolioActionMonitorList.innerHTML = renderPortfolioActionMonitorRows(snapshot.monitorRows);
  renderAutonomousResearchQueue();
}

function buildPortfolioActionSnapshot() {
  const config = normalizePortfolioActionConfig(state.portfolioActionConfig || getDefaultPortfolioActionConfig());
  const company = resolvePortfolioCompany(config.ticker);
  const approval = state.currentApproval && state.currentApproval.config.ticker === config.ticker
    ? state.currentApproval
    : buildIcApprovalSnapshotForTicker(config.ticker);
  const sourceCount = countPortfolioSources(config.ticker, company.proxyTicker);
  const marketMove = getPortfolioMarketMove(config.ticker);
  const weightDelta = config.targetWeight - config.currentWeight;
  const absWeightDelta = Math.abs(weightDelta);
  const maxWeightGap = Math.max(0, config.targetWeight - config.maxWeight);
  const approvalBoost = approval.decisionLabel === "Approve" ? 12 : approval.decisionLabel === "Conditional" ? 5 : approval.decisionLabel === "Review" ? 2 : -14;
  const riskBudgetPenalty = config.riskBudget === "Strict" ? 7 : config.riskBudget === "Opportunistic" ? -3 : 0;
  const sourceScore = Math.min(100, sourceCount * 20);
  const capScore = Math.max(0, 100 - maxWeightGap * 10);
  const concentrationScore = Math.max(0, 100 - Math.max(0, config.targetWeight - 30) * 5);
  const moveScore = Number.isFinite(marketMove) ? Math.max(0, 100 - Math.abs(marketMove) * 6) : 72;
  const preliminaryScore = Math.round(approval.approvalScore * 0.34 + sourceScore * 0.16 + capScore * 0.16 + concentrationScore * 0.14 + moveScore * 0.1 + approvalBoost - riskBudgetPenalty);
  const sizingRows = buildPortfolioActionSizingRows(config, company, approval, { weightDelta, absWeightDelta, maxWeightGap, sourceCount, marketMove });
  const riskRows = buildPortfolioActionRiskRows(config, company, approval, { weightDelta, absWeightDelta, maxWeightGap, sourceCount, marketMove });
  const blockerCount = riskRows.filter((row) => row.className === "blocked").length;
  const actionScore = Math.max(1, Math.min(100, preliminaryScore - blockerCount * 9));
  const decision = makePortfolioActionDecision(config, approval, actionScore, { weightDelta, maxWeightGap, blockerCount });
  const monitorRows = buildPortfolioActionMonitorRows(config, company, approval, riskRows, decision);
  return {
    config,
    company,
    approval,
    sourceCount,
    marketMove,
    weightDelta,
    absWeightDelta,
    maxWeightGap,
    sizingRows,
    riskRows,
    monitorRows,
    blockerCount,
    actionScore,
    scoreLabel: actionScore >= 82 ? "Action-ready" : actionScore >= 65 ? "Staged review" : "Needs guardrails",
    actionDecision: decision.label,
    decisionNote: decision.note
  };
}

function buildIcApprovalSnapshotForTicker(ticker) {
  const previous = state.approvalConfig;
  state.approvalConfig = normalizeApprovalConfig({ ...(previous || getDefaultApprovalConfig()), ticker });
  const snapshot = buildIcApprovalSnapshot();
  state.approvalConfig = previous;
  return snapshot;
}

function buildPortfolioActionSizingRows(config, company, approval, context) {
  const direction = context.weightDelta > 0.2 ? "Add" : context.weightDelta < -0.2 ? "Trim" : "Hold";
  const targetClass = context.maxWeightGap > 0 ? "blocked" : config.targetWeight >= config.maxWeight * 0.9 ? "watch" : "normal";
  const stageNote = config.style === "Stage in"
    ? `Stage ${direction.toLowerCase()} over ${config.horizon.toLowerCase()} and re-check citations before finalizing.`
    : config.style === "Trim risk"
      ? "Trim risk first, then re-open only if source and IC gates improve."
      : config.style === "Block action"
        ? "No sizing change should proceed until the action blocker is cleared."
        : "Hold the current weight and monitor evidence before changing exposure.";
  return [
    {
      label: direction,
      className: direction === "Add" && approval.decisionLabel === "Block" ? "blocked" : direction === "Add" && approval.decisionLabel === "Conditional" ? "watch" : "normal",
      title: "Recommended sizing direction",
      body: `${company.name} moves from ${roundOne(config.currentWeight)}% to ${roundOne(config.targetWeight)}%, a ${context.weightDelta >= 0 ? "+" : ""}${roundOne(context.weightDelta)} point change.`
    },
    {
      label: config.style,
      className: config.style === "Block action" ? "blocked" : config.style === "Hold and monitor" ? "watch" : "normal",
      title: "Execution discipline",
      body: stageNote
    },
    {
      label: `${roundOne(config.maxWeight)}% cap`,
      className: targetClass,
      title: "Position cap",
      body: context.maxWeightGap > 0
        ? `Target exceeds max weight by ${roundOne(context.maxWeightGap)} points.`
        : `Target stays within the ${roundOne(config.maxWeight)}% configured cap.`
    },
    {
      label: approval.decisionLabel,
      className: approval.decisionLabel === "Block" || approval.decisionLabel === "Request changes" ? "blocked" : approval.decisionLabel === "Conditional" ? "watch" : "normal",
      title: "IC approval read-through",
      body: `${approval.decisionNote} Approval score is ${approval.approvalScore}/100.`
    }
  ];
}

function buildPortfolioActionRiskRows(config, company, approval, context) {
  const concentrationClass = config.targetWeight > 40 ? "blocked" : config.targetWeight > 30 ? "watch" : "normal";
  const sourceClass = context.sourceCount >= 4 ? "normal" : context.sourceCount >= 2 ? "watch" : "blocked";
  const moveAbs = Number.isFinite(context.marketMove) ? Math.abs(context.marketMove) : 0;
  const moveClass = moveAbs >= 5 ? "watch" : "normal";
  const decisionClass = approval.decisionLabel === "Block" || approval.decisionLabel === "Request changes" ? "blocked" : approval.decisionLabel === "Conditional" ? "watch" : "normal";
  return [
    {
      label: `${roundOne(config.targetWeight)}%`,
      className: concentrationClass,
      title: "Concentration limit",
      body: concentrationClass === "blocked"
        ? "Target weight is above the launch guardrail and should be capped before action."
        : concentrationClass === "watch"
          ? "Target is a concentrated holding; require a monitoring cadence and documented downside case."
          : "Target weight is within the normal concentration range."
    },
    {
      label: `${context.sourceCount} src`,
      className: sourceClass,
      title: "Source support",
      body: sourceClass === "blocked"
        ? "Not enough filing or call support for a portfolio action; import more sources first."
        : sourceClass === "watch"
          ? "Enough source support for a staged action, but not a clean full-size move."
          : "Source coverage is broad enough for action-room review."
    },
    {
      label: approval.decisionLabel,
      className: decisionClass,
      title: "Approval gate",
      body: `IC output is ${approval.decisionLabel}. Attach the approval conditions to any sizing change.`
    },
    {
      label: Number.isFinite(context.marketMove) ? `${context.marketMove >= 0 ? "+" : ""}${roundOne(context.marketMove)}%` : "n/a",
      className: moveClass,
      title: "Market move check",
      body: moveClass === "watch"
        ? "Recent quote move is large enough to require valuation and timing review before execution."
        : "No abnormal demo quote move is pressuring the action plan."
    },
    {
      label: config.riskBudget,
      className: config.riskBudget === "Strict" && context.weightDelta > 0 ? "watch" : "normal",
      title: "Risk budget",
      body: `${config.riskBudget} budget with ${config.cadence.toLowerCase()} monitoring cadence and ${config.horizon.toLowerCase()} horizon.`
    }
  ];
}

function buildPortfolioActionMonitorRows(config, company, approval, riskRows, decision) {
  const openRisks = riskRows.filter((row) => row.className === "blocked" || row.className === "watch");
  const rows = openRisks.slice(0, 3).map((row) => ({
    priority: row.className === "blocked" ? "High" : "Watch",
    className: row.className === "blocked" ? "high" : "watch",
    title: `${row.title} follow-up`,
    question: `What evidence would clear the ${row.title.toLowerCase()} issue before changing $${config.ticker} position size?`,
    body: row.body
  }));
  rows.push({
    priority: decision.className === "blocked" ? "High" : "Watch",
    className: decision.className === "blocked" ? "high" : "normal",
    title: "Action memo",
    question: `Draft a portfolio action memo for $${config.ticker}: ${decision.label}, ${roundOne(config.currentWeight)}% to ${roundOne(config.targetWeight)}%.`,
    body: `Use ${config.style.toLowerCase()} with ${config.riskBudget.toLowerCase()} risk budget.`
  });
  rows.push({
    priority: approval.decisionLabel === "Approve" ? "Low" : "Watch",
    className: approval.decisionLabel === "Approve" ? "normal" : "watch",
    title: "Approval condition check",
    question: `Which IC approval conditions still matter before sizing $${config.ticker}?`,
    body: approval.decisionNote
  });
  rows.push({
    priority: "Watch",
    className: "watch",
    title: "Next source trigger",
    question: `What filing, transcript, or model update would change the $${config.ticker} target weight from ${roundOne(config.targetWeight)}%?`,
    body: `${company.name} should stay on a ${config.cadence.toLowerCase()} evidence review cadence.`
  });
  return rows.slice(0, 5);
}

function makePortfolioActionDecision(config, approval, actionScore, context) {
  if (config.style === "Block action" || context.maxWeightGap > 0 || approval.decisionLabel === "Block" || approval.decisionLabel === "Request changes") {
    return { label: "Block action", className: "blocked", note: "Do not change position size until blockers are cleared." };
  }
  if (approval.decisionLabel === "Conditional" || actionScore < 82 || context.blockerCount > 0) {
    return { label: "Stage with guardrails", className: "watch", note: "Proceed only as a staged research action with documented limits." };
  }
  if (Math.abs(context.weightDelta) <= 0.2 || config.style === "Hold and monitor") {
    return { label: "Hold and monitor", className: "normal", note: "Keep current weight and monitor source triggers." };
  }
  if (context.weightDelta < 0) {
    return { label: "Trim with memo", className: "normal", note: "Trim is supportable if the risk memo and valuation read-through are attached." };
  }
  return { label: "Approve staged add", className: "normal", note: "Staged add clears the configured IC, source, and sizing guardrails." };
}

function renderPortfolioActionSizingRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No sizing plan</strong><span>Build an action plan to translate IC approval into sizing steps.</span></div>`;
  }
  return rows.map((row) => `
    <div class="action-sizing-row ${escapeAttr(row.className || "normal")}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)}</em>
      </div>
    </div>
  `).join("");
}

function renderPortfolioActionRiskRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No risk limits</strong><span>Risk limits will appear after scoring the action plan.</span></div>`;
  }
  return rows.map((row) => `
    <div class="action-risk-row ${escapeAttr(row.className || "normal")}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)}</em>
      </div>
    </div>
  `).join("");
}

function renderPortfolioActionMonitorRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No monitor queue</strong><span>Monitor prompts will appear after building the action plan.</span></div>`;
  }
  return rows.map((row) => `
    <button class="action-monitor-row ${escapeAttr(row.className || "normal")}" type="button" data-action-question="${escapeAttr(row.question)}">
      <span>${escapeHtml(row.priority)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.question)} ${escapeHtml(row.body)}</em>
      </div>
    </button>
  `).join("");
}

function readPortfolioActionConfig() {
  return normalizePortfolioActionConfig({
    ticker: els.portfolioActionTicker.value,
    currentWeight: els.portfolioActionCurrentWeight.value,
    targetWeight: els.portfolioActionTargetWeight.value,
    maxWeight: els.portfolioActionMaxWeight.value,
    style: els.portfolioActionStyle.value,
    horizon: els.portfolioActionHorizon.value,
    riskBudget: els.portfolioActionRiskBudget.value,
    cadence: els.portfolioActionCadence.value,
    rationale: els.portfolioActionRationale.value
  });
}

function syncPortfolioActionInputs() {
  if (!els.portfolioActionTicker) return;
  const config = normalizePortfolioActionConfig(state.portfolioActionConfig || getDefaultPortfolioActionConfig());
  els.portfolioActionTicker.value = config.ticker;
  els.portfolioActionCurrentWeight.value = String(config.currentWeight);
  els.portfolioActionTargetWeight.value = String(config.targetWeight);
  els.portfolioActionMaxWeight.value = String(config.maxWeight);
  els.portfolioActionStyle.value = config.style;
  els.portfolioActionHorizon.value = config.horizon;
  els.portfolioActionRiskBudget.value = config.riskBudget;
  els.portfolioActionCadence.value = config.cadence;
  els.portfolioActionRationale.value = config.rationale;
}

function normalizePortfolioActionConfig(config) {
  const defaults = getDefaultPortfolioActionConfig();
  const ticker = normalizeTicker(String(config.ticker || defaults.ticker).replace(/^\$/, "")) || defaults.ticker;
  const currentWeight = clampRevisionNumber(config.currentWeight, 0, 100, defaults.currentWeight);
  const targetWeight = clampRevisionNumber(config.targetWeight, 0, 100, defaults.targetWeight);
  return {
    ticker,
    currentWeight: roundOne(currentWeight),
    targetWeight: roundOne(targetWeight),
    maxWeight: roundOne(clampRevisionNumber(config.maxWeight, 0, 100, Math.max(defaults.maxWeight, targetWeight))),
    style: normalizeChoice(config.style, ["Stage in", "Hold and monitor", "Trim risk", "Block action"], defaults.style),
    horizon: normalizeChoice(config.horizon, ["Next 5 trading days", "Today", "This week", "After next source"], defaults.horizon),
    riskBudget: normalizeChoice(config.riskBudget, ["Balanced", "Strict", "Opportunistic"], defaults.riskBudget),
    cadence: normalizeChoice(config.cadence, ["Daily", "Twice weekly", "Weekly"], defaults.cadence),
    rationale: String(config.rationale || defaults.rationale).slice(0, 520)
  };
}

function getDefaultPortfolioActionConfig() {
  const ticker = state.approvalConfig?.ticker || state.modelControlConfig?.ticker || state.revisionConfig?.ticker || state.marketSettings?.ticker || "NVDA";
  const currentWeight = getPortfolioActionCurrentWeight(ticker);
  const targetWeight = Math.min(45, currentWeight + 3);
  return {
    ticker,
    currentWeight: roundOne(currentWeight),
    targetWeight: roundOne(targetWeight),
    maxWeight: Math.max(35, Math.min(50, roundOne(targetWeight + 7))),
    style: "Stage in",
    horizon: "Next 5 trading days",
    riskBudget: "Balanced",
    cadence: "Daily",
    rationale: "Use the IC decision to size the position gradually, keep risk limits visible, and monitor source-driven triggers before making the model change permanent."
  };
}

function getPortfolioActionCurrentWeight(ticker) {
  const normalized = normalizeTicker(ticker);
  const positions = normalizePortfolioWeights(state.portfolioPositions && state.portfolioPositions.length ? state.portfolioPositions : DEFAULT_PORTFOLIO_POSITIONS);
  const match = positions.find((position) => position.ticker === normalized);
  if (match) return Number(match.weight) || 0;
  const defaults = DEFAULT_PORTFOLIO_POSITIONS.find((position) => position.ticker === normalized);
  if (defaults) return Number(defaults.weight) || 0;
  return normalized === "NVDA" ? 35 : 10;
}

function hydratePortfolioActionFromApproval() {
  const approval = state.currentApproval || buildIcApprovalSnapshot();
  const ticker = approval.config.ticker;
  const currentWeight = getPortfolioActionCurrentWeight(ticker);
  const decisionTarget = approval.decisionLabel === "Approve"
    ? currentWeight + 3
    : approval.decisionLabel === "Conditional"
      ? currentWeight + 1
      : approval.decisionLabel === "Block" || approval.decisionLabel === "Request changes"
        ? currentWeight
        : currentWeight + 0.5;
  state.portfolioActionConfig = normalizePortfolioActionConfig({
    ...(state.portfolioActionConfig || getDefaultPortfolioActionConfig()),
    ticker,
    currentWeight,
    targetWeight: Math.min(45, decisionTarget),
    maxWeight: Math.max(35, Math.min(50, decisionTarget + 7)),
    style: approval.decisionLabel === "Approve" ? "Stage in" : approval.decisionLabel === "Conditional" ? "Hold and monitor" : "Block action",
    horizon: approval.decisionLabel === "Approve" ? "Next 5 trading days" : "After next source",
    riskBudget: approval.decisionLabel === "Approve" ? "Balanced" : "Strict",
    cadence: approval.decisionLabel === "Approve" ? "Daily" : "Twice weekly",
    rationale: `Hydrated from IC Approval: ${approval.decisionLabel}. ${approval.decisionNote} Approval score ${approval.approvalScore}/100; citation coverage ${approval.citationCount}/${approval.config.requiredCitations}.`
  });
}

function loadPortfolioActionConfig() {
  return normalizePortfolioActionConfig(loadJson(STORAGE_KEYS.portfolioAction, getDefaultPortfolioActionConfig()));
}

function savePortfolioActionConfig() {
  saveJson(STORAGE_KEYS.portfolioAction, normalizePortfolioActionConfig(state.portfolioActionConfig || getDefaultPortfolioActionConfig()));
}

function exportPortfolioActionPlan() {
  const snapshot = state.currentPortfolioAction || buildPortfolioActionSnapshot();
  const date = new Date().toISOString().slice(0, 10);
  const content = [
    "# CiteAlpha Portfolio Action Plan",
    "",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    "## Action Setup",
    "",
    `- Ticker: ${snapshot.config.ticker}`,
    `- Company lens: ${snapshot.company.name}`,
    `- Current weight: ${roundOne(snapshot.config.currentWeight)}%`,
    `- Target weight: ${roundOne(snapshot.config.targetWeight)}%`,
    `- Max weight: ${roundOne(snapshot.config.maxWeight)}%`,
    `- Action style: ${snapshot.config.style}`,
    `- Horizon: ${snapshot.config.horizon}`,
    `- Risk budget: ${snapshot.config.riskBudget}`,
    `- Monitor cadence: ${snapshot.config.cadence}`,
    `- Rationale: ${snapshot.config.rationale}`,
    "",
    "## Decision",
    "",
    `- Portfolio action: ${snapshot.actionDecision}`,
    `- Action score: ${snapshot.actionScore}/100 (${snapshot.scoreLabel})`,
    `- Decision note: ${snapshot.decisionNote}`,
    `- IC decision: ${snapshot.approval.decisionLabel} (${snapshot.approval.approvalScore}/100)`,
    `- Source count: ${snapshot.sourceCount}`,
    `- Demo market move: ${Number.isFinite(snapshot.marketMove) ? `${snapshot.marketMove >= 0 ? "+" : ""}${roundOne(snapshot.marketMove)}%` : "n/a"}`,
    "",
    "## Sizing Plan",
    "",
    ...snapshot.sizingRows.map((row) => `- ${row.label} | ${row.title}: ${row.body}`),
    "",
    "## Risk Limits",
    "",
    ...snapshot.riskRows.map((row) => `- ${row.label} | ${row.title}: ${row.body}`),
    "",
    "## Monitoring Queue",
    "",
    ...snapshot.monitorRows.map((row) => `- ${row.priority} | ${row.title}: ${row.question} ${row.body}`),
    "",
    "## Product Note",
    "",
    "This portfolio action room is a client-side research workflow for product prototyping. It does not place trades or provide personalized investment advice. Production should add user authentication, portfolio permissioning, audit logs, reviewer sign-offs, and broker-dealer/compliance review before any execution workflow."
  ].join("\n");
  downloadTextFile(`citealpha-portfolio-action-${snapshot.config.ticker.toLowerCase()}-${date}.md`, content, "text/markdown;charset=utf-8");
  flashButtonLabel(els.exportPortfolioActionBrief, "Exported");
}

function renderAutonomousResearchQueue() {
  if (!els.researchQueueMetricGrid) return;
  if (!state.researchQueueConfig) state.researchQueueConfig = loadResearchQueueConfig();
  syncResearchQueueInputs();
  const snapshot = buildAutonomousResearchQueueSnapshot();
  state.currentResearchQueue = snapshot;
  els.researchQueueMetricGrid.innerHTML = [
    { label: "Queue score", value: `${snapshot.queueScore}/100`, sub: snapshot.scoreLabel },
    { label: "Open tasks", value: snapshot.taskRows.length, sub: `${snapshot.highPriorityCount} high priority` },
    { label: "Next due", value: snapshot.nextDue, sub: `${snapshot.config.slaHours}h SLA` },
    { label: "Coverage", value: `${snapshot.coverageScore}%`, sub: `${snapshot.coveredTickers}/${snapshot.tickers.length} names ready` }
  ].map((metric) => `
    <div class="queue-metric">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(String(metric.value))}</strong>
      <em>${escapeHtml(metric.sub)}</em>
    </div>
  `).join("");
  els.researchQueueTaskCount.textContent = String(snapshot.taskRows.length);
  els.researchQueueTaskList.innerHTML = renderResearchQueueTasks(snapshot.taskRows);
  els.researchQueueRuleCount.textContent = String(snapshot.ruleRows.length);
  els.researchQueueRuleList.innerHTML = renderResearchQueueRules(snapshot.ruleRows);
  els.researchQueueGapCount.textContent = String(snapshot.gapRows.length);
  els.researchQueueGapList.innerHTML = renderResearchQueueGaps(snapshot.gapRows);
  renderResearchSlaScheduler();
}

function buildAutonomousResearchQueueSnapshot() {
  const config = normalizeResearchQueueConfig(state.researchQueueConfig || getDefaultResearchQueueConfig());
  const tickers = parseResearchQueueUniverse(config.universe);
  const portfolio = buildPortfolioSnapshot();
  const action = state.currentPortfolioAction || buildPortfolioActionSnapshot();
  const taskRows = buildResearchQueueTasks(config, tickers, portfolio, action);
  const ruleRows = buildResearchQueueRules(config, taskRows, action);
  const gapRows = buildResearchQueueGaps(config, tickers);
  const highPriorityCount = taskRows.filter((row) => row.className === "high").length;
  const coveredTickers = gapRows.filter((row) => row.sourceCount >= config.minSources).length;
  const coverageScore = Math.round((coveredTickers / Math.max(tickers.length, 1)) * 100);
  const queueScore = Math.max(1, Math.min(100, Math.round(coverageScore * 0.32 + Math.max(0, 100 - highPriorityCount * 16) * 0.28 + Math.max(0, 100 - taskRows.length * 2) * 0.12 + action.actionScore * 0.2 + (config.cadence === "Daily" ? 8 : 4))));
  return {
    config,
    tickers,
    portfolio,
    action,
    taskRows,
    ruleRows,
    gapRows,
    highPriorityCount,
    coveredTickers,
    coverageScore,
    queueScore,
    scoreLabel: queueScore >= 82 ? "Desk-ready" : queueScore >= 65 ? "Needs follow-up" : "Source constrained",
    nextDue: config.cadence === "Daily" ? "Today" : config.cadence === "Twice weekly" ? "Next 2 days" : "This week"
  };
}

function buildResearchQueueTasks(config, tickers, portfolio, action) {
  const portfolioRows = new Map(portfolio.positions.map((position) => [position.ticker, position]));
  const rows = tickers.map((ticker) => {
    const company = resolvePortfolioCompany(ticker);
    const sourceCount = countPortfolioSources(ticker, company.proxyTicker);
    const marketMove = getPortfolioMarketMove(ticker);
    const portfolioRow = portfolioRows.get(ticker);
    const weight = portfolioRow ? portfolioRow.weight : ticker === action.config.ticker ? action.config.targetWeight : 0;
    const sourceGap = Math.max(0, config.minSources - sourceCount);
    const concentrationBoost = weight >= 30 ? 10 : weight >= 20 ? 5 : 0;
    const marketBoost = Number.isFinite(marketMove) && Math.abs(marketMove) >= 3 ? 8 : 0;
    const actionBoost = ticker === action.config.ticker ? 12 : 0;
    const riskScore = Math.max(20, Math.min(99, Math.round((Number(company.risk) || 55) + sourceGap * 7 + concentrationBoost + marketBoost + actionBoost)));
    const className = sourceGap >= 2 || riskScore >= config.riskTrigger + 8 ? "high" : sourceGap || riskScore >= config.riskTrigger || ticker === action.config.ticker ? "watch" : "normal";
    return {
      ticker,
      company,
      sourceCount,
      sourceGap,
      marketMove,
      weight,
      riskScore,
      priority: className === "high" ? "High" : className === "watch" ? "Watch" : "Normal",
      className,
      due: className === "high" ? "Today" : config.cadence === "Weekly" ? "This week" : "Next run",
      title: makeResearchQueueTitle(config, ticker, sourceGap, riskScore, action),
      question: makeResearchQueueQuestion(config, ticker, sourceGap, riskScore, action),
      body: makeResearchQueueReason(config, sourceCount, sourceGap, riskScore, weight, marketMove)
    };
  });
  return rows
    .sort((a, b) => researchQueuePriorityRank(b) - researchQueuePriorityRank(a))
    .slice(0, 8);
}

function buildResearchQueueRules(config, taskRows, action) {
  const highCount = taskRows.filter((row) => row.className === "high").length;
  const sourceGapCount = taskRows.filter((row) => row.sourceGap > 0).length;
  const quoteWatchCount = taskRows.filter((row) => Number.isFinite(row.marketMove) && Math.abs(row.marketMove) >= 3).length;
  return [
    {
      label: config.cadence,
      className: "normal",
      title: "Daily desk rebuild",
      body: `Rebuild the queue ${config.cadence.toLowerCase()} for ${config.universe}. Owner: ${config.owner}.`
    },
    {
      label: `${sourceGapCount} gaps`,
      className: sourceGapCount ? "watch" : "normal",
      title: "Source gap trigger",
      body: sourceGapCount ? `Prioritize names below ${config.minSources} enabled sources before analysis.` : "Source thresholds are currently satisfied."
    },
    {
      label: `${quoteWatchCount} moves`,
      className: quoteWatchCount ? "watch" : "normal",
      title: "Market movement trigger",
      body: quoteWatchCount ? "Ask a valuation or thesis-change question when demo quote move exceeds 3%." : "No quote move is forcing an immediate queue escalation."
    },
    {
      label: action.actionDecision,
      className: action.actionDecision === "Block action" ? "high" : action.actionDecision === "Stage with guardrails" ? "watch" : "normal",
      title: "Portfolio action carry-over",
      body: `Carry over ${action.config.ticker} action-room decision: ${action.decisionNote}`
    },
    {
      label: `${highCount} high`,
      className: highCount ? "high" : "normal",
      title: "Human review threshold",
      body: highCount ? "High-priority tasks should be reviewed before the next user-facing memo." : "Queue can run as a normal research workflow."
    }
  ];
}

function buildResearchQueueGaps(config, tickers) {
  return tickers.map((ticker) => {
    const company = resolvePortfolioCompany(ticker);
    const sourceCount = countPortfolioSources(ticker, company.proxyTicker);
    const gap = Math.max(0, config.minSources - sourceCount);
    return {
      ticker,
      sourceCount,
      gap,
      className: gap >= 2 ? "high" : gap ? "watch" : "normal",
      title: gap ? `${ticker} needs ${gap} more source${gap === 1 ? "" : "s"}` : `${ticker} source threshold met`,
      body: gap ? `Import filings, earnings call excerpts, or model notes for ${company.name}.` : `${sourceCount} enabled source${sourceCount === 1 ? "" : "s"} available for queue work.`
    };
  }).sort((a, b) => b.gap - a.gap || a.ticker.localeCompare(b.ticker));
}

function makeResearchQueueTitle(config, ticker, sourceGap, riskScore, action) {
  if (ticker === action.config.ticker) return `${ticker} action follow-up`;
  if (sourceGap) return `${ticker} source gap`;
  if (config.mode === "Earnings prep") return `${ticker} call prep`;
  if (riskScore >= config.riskTrigger) return `${ticker} risk watch`;
  return `${ticker} thesis check`;
}

function makeResearchQueueQuestion(config, ticker, sourceGap, riskScore, action) {
  if (ticker === action.config.ticker) return `What evidence would change the portfolio action plan for $${ticker} before the next ${config.output.toLowerCase()}?`;
  if (sourceGap) return `Which SEC filing or earnings call source should I import next before underwriting $${ticker}?`;
  if (config.mode === "Earnings prep") return `What management questions should I prepare for $${ticker}'s next earnings call?`;
  if (config.mode === "Risk watch" || riskScore >= config.riskTrigger) return `What are the three risks for $${ticker} that most deserve monitoring this week?`;
  if (config.mode === "Source gap sweep") return `What source evidence is missing before CiteAlpha can answer $${ticker} with high confidence?`;
  return `What changed in $${ticker} filings, calls, or valuation signals that should move the research queue?`;
}

function makeResearchQueueReason(config, sourceCount, sourceGap, riskScore, weight, marketMove) {
  const parts = [`${sourceCount} source${sourceCount === 1 ? "" : "s"}`];
  if (sourceGap) parts.push(`${sourceGap} source gap`);
  parts.push(`${riskScore}/100 risk`);
  if (weight) parts.push(`${roundOne(weight)}% weight`);
  if (Number.isFinite(marketMove)) parts.push(`${marketMove >= 0 ? "+" : ""}${roundOne(marketMove)}% quote`);
  parts.push(`${config.slaHours}h SLA`);
  return parts.join(" | ");
}

function researchQueuePriorityRank(row) {
  const classScore = row.className === "high" ? 1000 : row.className === "watch" ? 500 : 100;
  return classScore + row.riskScore + row.sourceGap * 20 + row.weight;
}

function renderResearchQueueTasks(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No queue tasks</strong><span>Add a universe or use portfolio to build the daily worklist.</span></div>`;
  }
  return rows.map((row) => `
    <button class="queue-task-row ${escapeAttr(row.className || "normal")}" type="button" data-queue-question="${escapeAttr(row.question)}">
      <span>${escapeHtml(row.priority)}</span>
      <div>
        <strong>${escapeHtml(row.title)} · ${escapeHtml(row.due)}</strong>
        <em>${escapeHtml(row.question)} ${escapeHtml(row.body)}</em>
      </div>
    </button>
  `).join("");
}

function renderResearchQueueRules(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No rules</strong><span>Build the queue to generate automation rules.</span></div>`;
  }
  return rows.map((row) => `
    <div class="queue-rule-row ${escapeAttr(row.className || "normal")}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)}</em>
      </div>
    </div>
  `).join("");
}

function renderResearchQueueGaps(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No coverage gaps</strong><span>Coverage gaps appear after queue scoring.</span></div>`;
  }
  return rows.map((row) => `
    <div class="queue-gap-row ${escapeAttr(row.className || "normal")}">
      <span>${escapeHtml(row.ticker)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)}</em>
      </div>
    </div>
  `).join("");
}

function readResearchQueueConfig() {
  return normalizeResearchQueueConfig({
    universe: els.researchQueueUniverse.value,
    mode: els.researchQueueMode.value,
    cadence: els.researchQueueCadence.value,
    slaHours: els.researchQueueSla.value,
    minSources: els.researchQueueMinSources.value,
    riskTrigger: els.researchQueueRiskTrigger.value,
    owner: els.researchQueueOwner.value,
    output: els.researchQueueOutput.value,
    note: els.researchQueueNote.value
  });
}

function syncResearchQueueInputs() {
  if (!els.researchQueueUniverse) return;
  const config = normalizeResearchQueueConfig(state.researchQueueConfig || getDefaultResearchQueueConfig());
  els.researchQueueUniverse.value = config.universe;
  els.researchQueueMode.value = config.mode;
  els.researchQueueCadence.value = config.cadence;
  els.researchQueueSla.value = String(config.slaHours);
  els.researchQueueMinSources.value = String(config.minSources);
  els.researchQueueRiskTrigger.value = String(config.riskTrigger);
  els.researchQueueOwner.value = config.owner;
  els.researchQueueOutput.value = config.output;
  els.researchQueueNote.value = config.note;
}

function normalizeResearchQueueConfig(config) {
  const defaults = getDefaultResearchQueueConfig();
  return {
    universe: parseResearchQueueUniverse(config.universe || defaults.universe).join(", "),
    mode: normalizeChoice(config.mode, ["Portfolio action follow-up", "Source gap sweep", "Risk watch", "Earnings prep"], defaults.mode),
    cadence: normalizeChoice(config.cadence, ["Daily", "Twice weekly", "Weekly"], defaults.cadence),
    slaHours: Math.round(clampRevisionNumber(config.slaHours, 2, 168, defaults.slaHours)),
    minSources: Math.round(clampRevisionNumber(config.minSources, 1, 8, defaults.minSources)),
    riskTrigger: Math.round(clampRevisionNumber(config.riskTrigger, 20, 95, defaults.riskTrigger)),
    owner: String(config.owner || defaults.owner).slice(0, 48),
    output: normalizeChoice(config.output, ["Morning queue", "IC follow-up", "Portfolio watchlist"], defaults.output),
    note: String(config.note || defaults.note).slice(0, 520)
  };
}

function getDefaultResearchQueueConfig() {
  const tickers = normalizePortfolioWeights(state.portfolioPositions && state.portfolioPositions.length ? state.portfolioPositions : DEFAULT_PORTFOLIO_POSITIONS)
    .filter((position) => position.ticker !== "CASH")
    .map((position) => position.ticker)
    .slice(0, 6);
  return {
    universe: tickers.length ? tickers.join(", ") : "NVDA, AAPL, TSLA, MSFT",
    mode: "Portfolio action follow-up",
    cadence: "Daily",
    slaHours: 24,
    minSources: 3,
    riskTrigger: 62,
    owner: "Research desk",
    output: "Morning queue",
    note: "Prioritize questions that clear source gaps, risk blockers, and portfolio action conditions before the next research session."
  };
}

function hydrateResearchQueueFromPortfolioAction() {
  const action = state.currentPortfolioAction || buildPortfolioActionSnapshot();
  const portfolio = buildPortfolioSnapshot();
  const tickers = Array.from(new Set([
    action.config.ticker,
    ...portfolio.priorityRows.slice(0, 5).map((row) => row.ticker)
  ])).filter((ticker) => ticker && ticker !== "CASH");
  state.researchQueueConfig = normalizeResearchQueueConfig({
    ...(state.researchQueueConfig || getDefaultResearchQueueConfig()),
    universe: tickers.join(", "),
    mode: action.actionDecision === "Block action" ? "Risk watch" : "Portfolio action follow-up",
    cadence: action.blockerCount ? "Daily" : "Twice weekly",
    slaHours: action.blockerCount ? 12 : 24,
    minSources: action.sourceCount >= 4 ? 3 : 4,
    riskTrigger: action.blockerCount ? 58 : 62,
    owner: "Research desk",
    output: action.actionDecision === "Block action" ? "IC follow-up" : "Morning queue",
    note: `Hydrated from Portfolio Action Room: ${action.config.ticker} ${action.actionDecision}. ${action.decisionNote}`
  });
}

function parseResearchQueueUniverse(value) {
  const raw = String(value || "")
    .split(/[\s,;]+/)
    .map((part) => normalizeTicker(part.replace(/^\$/, "")))
    .filter((ticker) => ticker && ticker !== "CASH");
  const unique = Array.from(new Set(raw));
  if (unique.length) return unique.slice(0, 10);
  return DEFAULT_PORTFOLIO_POSITIONS.filter((position) => position.ticker !== "CASH").map((position) => position.ticker);
}

function loadResearchQueueConfig() {
  return normalizeResearchQueueConfig(loadJson(STORAGE_KEYS.researchQueue, getDefaultResearchQueueConfig()));
}

function saveResearchQueueConfig() {
  saveJson(STORAGE_KEYS.researchQueue, normalizeResearchQueueConfig(state.researchQueueConfig || getDefaultResearchQueueConfig()));
}

function exportResearchQueueBrief() {
  const snapshot = state.currentResearchQueue || buildAutonomousResearchQueueSnapshot();
  const date = new Date().toISOString().slice(0, 10);
  const content = [
    "# CiteAlpha Autonomous Research Queue",
    "",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    "## Queue Setup",
    "",
    `- Universe: ${snapshot.config.universe}`,
    `- Mode: ${snapshot.config.mode}`,
    `- Cadence: ${snapshot.config.cadence}`,
    `- SLA: ${snapshot.config.slaHours} hours`,
    `- Minimum sources: ${snapshot.config.minSources}`,
    `- Risk trigger: ${snapshot.config.riskTrigger}/100`,
    `- Owner: ${snapshot.config.owner}`,
    `- Output: ${snapshot.config.output}`,
    `- Note: ${snapshot.config.note}`,
    "",
    "## Scorecard",
    "",
    `- Queue score: ${snapshot.queueScore}/100 (${snapshot.scoreLabel})`,
    `- Open tasks: ${snapshot.taskRows.length}`,
    `- High-priority tasks: ${snapshot.highPriorityCount}`,
    `- Coverage: ${snapshot.coverageScore}% (${snapshot.coveredTickers}/${snapshot.tickers.length})`,
    `- Next due: ${snapshot.nextDue}`,
    "",
    "## Priority Worklist",
    "",
    ...snapshot.taskRows.map((row) => `- ${row.priority} | ${row.title} (${row.due}): ${row.question} ${row.body}`),
    "",
    "## Automation Rules",
    "",
    ...snapshot.ruleRows.map((row) => `- ${row.label} | ${row.title}: ${row.body}`),
    "",
    "## Coverage Gaps",
    "",
    ...snapshot.gapRows.map((row) => `- ${row.ticker}: ${row.title}. ${row.body}`),
    "",
    "## Product Note",
    "",
    "This autonomous research queue is a client-side workflow prototype. Production should run scheduled jobs on a backend, persist task state, enforce user permissions, maintain audit logs, and separate research workflow automation from trading execution."
  ].join("\n");
  downloadTextFile(`citealpha-autonomous-research-queue-${date}.md`, content, "text/markdown;charset=utf-8");
  flashButtonLabel(els.exportResearchQueueBrief, "Exported");
}

function renderResearchSlaScheduler() {
  if (!els.researchSlaMetricGrid) return;
  if (!state.researchSlaConfig) state.researchSlaConfig = loadResearchSlaConfig();
  syncResearchSlaInputs();
  const snapshot = buildResearchSlaSnapshot();
  state.currentResearchSla = snapshot;
  els.researchSlaMetricGrid.innerHTML = [
    { label: "SLA health", value: `${snapshot.slaScore}/100`, sub: snapshot.scoreLabel },
    { label: "Due today", value: snapshot.todayCount, sub: `${snapshot.capacityUsed}/${snapshot.config.dailyCapacity} capacity` },
    { label: "Escalations", value: snapshot.escalationRows.length, sub: `${snapshot.overdueRiskCount} overdue risk` },
    { label: "Freshness", value: `${snapshot.freshnessScore}%`, sub: `${snapshot.staleCount} stale source checks` }
  ].map((metric) => `
    <div class="sla-metric">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(String(metric.value))}</strong>
      <em>${escapeHtml(metric.sub)}</em>
    </div>
  `).join("");
  els.researchSlaDueCount.textContent = String(snapshot.dueRows.length);
  els.researchSlaDueList.innerHTML = renderResearchSlaDueRows(snapshot.dueRows);
  els.researchSlaEscalationCount.textContent = String(snapshot.escalationRows.length);
  els.researchSlaEscalationList.innerHTML = renderResearchSlaEscalationRows(snapshot.escalationRows);
  els.researchSlaFreshnessCount.textContent = String(snapshot.freshnessRows.length);
  els.researchSlaFreshnessList.innerHTML = renderResearchSlaFreshnessRows(snapshot.freshnessRows);
  renderResearchOutcomeLoop();
}

function buildResearchSlaSnapshot() {
  const config = normalizeResearchSlaConfig(state.researchSlaConfig || getDefaultResearchSlaConfig());
  const queue = state.currentResearchQueue || buildAutonomousResearchQueueSnapshot();
  const dueRows = buildResearchSlaDueRows(config, queue);
  const freshnessRows = buildResearchSlaFreshnessRows(config, queue);
  const escalationRows = buildResearchSlaEscalationRows(config, queue, dueRows, freshnessRows);
  const todayCount = dueRows.filter((row) => row.dayIndex === 0).length;
  const capacityUsed = Math.min(config.dailyCapacity, todayCount);
  const staleCount = freshnessRows.filter((row) => row.className === "high" || row.className === "watch").length;
  const overdueRiskCount = dueRows.filter((row) => row.className === "high" && row.dayIndex === 0).length;
  const overload = Math.max(0, todayCount - config.dailyCapacity);
  const freshnessScore = Math.max(0, Math.min(100, Math.round(100 - staleCount * 12)));
  const slaScore = Math.max(1, Math.min(100, Math.round(queue.queueScore * 0.24 + freshnessScore * 0.22 + Math.max(0, 100 - overload * 15) * 0.18 + Math.max(0, 100 - overdueRiskCount * 18) * 0.2 + Math.max(0, 100 - escalationRows.length * 7) * 0.16)));
  return {
    config,
    queue,
    dueRows,
    freshnessRows,
    escalationRows,
    todayCount,
    capacityUsed,
    staleCount,
    overdueRiskCount,
    freshnessScore,
    slaScore,
    scoreLabel: slaScore >= 82 ? "On schedule" : slaScore >= 65 ? "Watch capacity" : "Needs escalation"
  };
}

function buildResearchSlaDueRows(config, queue) {
  const sessions = getResearchSlaSessionCount(config.window);
  return queue.taskRows.slice(0, Math.max(3, sessions * config.dailyCapacity)).map((task, index) => {
    const baseDay = Math.floor(index / Math.max(config.dailyCapacity, 1));
    const urgentDay = task.className === "high" ? 0 : task.className === "watch" ? Math.min(1, baseDay) : Math.min(sessions - 1, baseDay + 1);
    const dayIndex = Math.max(0, Math.min(sessions - 1, urgentDay));
    const dueDate = addDaysToSchedulerDate(config.startDate, dayIndex);
    const className = task.className === "high" && dayIndex === 0 ? "high" : task.className === "high" || task.className === "watch" ? "watch" : "normal";
    return {
      ...task,
      dayIndex,
      dueDate,
      dueLabel: dayIndex === 0 ? "Today" : formatSchedulerDate(dueDate),
      className,
      label: dayIndex === 0 ? "Today" : `D+${dayIndex}`,
      title: `${task.title} · ${config.owner}`,
      body: `${task.body} Review lane: ${config.lane}; output: ${config.output}.`
    };
  });
}

function buildResearchSlaEscalationRows(config, queue, dueRows, freshnessRows) {
  const rows = [];
  const todayHigh = dueRows.filter((row) => row.className === "high" && row.dayIndex === 0);
  const overload = Math.max(0, dueRows.filter((row) => row.dayIndex === 0).length - config.dailyCapacity);
  const staleHigh = freshnessRows.filter((row) => row.className === "high");
  const blockedAction = queue.action && (queue.action.actionDecision === "Block action" || queue.action.actionDecision === "Stage with guardrails");
  if (todayHigh.length) {
    rows.push({
      label: "High",
      className: "high",
      title: `${todayHigh.length} urgent item${todayHigh.length === 1 ? "" : "s"} due today`,
      body: "Run or review high-priority questions before exporting any user-facing memo."
    });
  }
  if (overload > 0) {
    rows.push({
      label: "Load",
      className: "watch",
      title: "Daily desk capacity exceeded",
      body: `${overload} task${overload === 1 ? "" : "s"} exceed the ${config.dailyCapacity}/day capacity setting.`
    });
  }
  if (staleHigh.length) {
    rows.push({
      label: "Stale",
      className: config.escalation === "Quiet" ? "watch" : "high",
      title: "Source freshness risk",
      body: `${staleHigh.length} ticker${staleHigh.length === 1 ? "" : "s"} have stale source coverage versus the ${config.freshnessDays}-day freshness policy.`
    });
  }
  if (blockedAction) {
    rows.push({
      label: "Action",
      className: queue.action.actionDecision === "Block action" ? "high" : "watch",
      title: "Portfolio action carry-over",
      body: `${queue.action.config.ticker}: ${queue.action.actionDecision}. ${queue.action.decisionNote}`
    });
  }
  if (config.escalation === "Strict" && queue.highPriorityCount) {
    rows.push({
      label: "Strict",
      className: "watch",
      title: "Strict escalation mode",
      body: "High-priority queue items require explicit human review before closing the schedule."
    });
  }
  if (!rows.length) {
    rows.push({
      label: "Clear",
      className: "normal",
      title: "No SLA escalation",
      body: "The current research queue fits within the configured schedule and freshness policy."
    });
  }
  return rows.slice(0, 6);
}

function buildResearchSlaFreshnessRows(config, queue) {
  return queue.tickers.map((ticker) => {
    const company = resolvePortfolioCompany(ticker);
    const sourceAge = getResearchSlaSourceAgeDays(ticker, company.proxyTicker, config.startDate);
    const sourceCount = countPortfolioSources(ticker, company.proxyTicker);
    const className = !sourceCount ? "high" : sourceAge > config.freshnessDays * 1.5 ? "high" : sourceAge > config.freshnessDays ? "watch" : "normal";
    return {
      ticker,
      sourceCount,
      sourceAge,
      className,
      title: !sourceCount ? `${ticker} has no enabled source coverage` : `${ticker} source age ${sourceAge} day${sourceAge === 1 ? "" : "s"}`,
      body: className === "high"
        ? `Refresh ${company.name} sources before relying on the next memo.`
        : className === "watch"
          ? `Schedule a source refresh if ${ticker} remains in the active queue.`
          : `${ticker} is inside the ${config.freshnessDays}-day freshness policy.`
    };
  }).sort((a, b) => b.sourceAge - a.sourceAge || a.ticker.localeCompare(b.ticker));
}

function renderResearchSlaDueRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No due schedule</strong><span>Build a queue first, then the SLA scheduler will assign due windows.</span></div>`;
  }
  return rows.map((row) => `
    <button class="sla-due-row ${escapeAttr(row.className || "normal")}" type="button" data-sla-question="${escapeAttr(row.question)}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.title)} · ${escapeHtml(row.dueLabel)}</strong>
        <em>${escapeHtml(row.question)} ${escapeHtml(row.body)}</em>
      </div>
    </button>
  `).join("");
}

function renderResearchSlaEscalationRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No escalations</strong><span>SLA escalations appear after schedule scoring.</span></div>`;
  }
  return rows.map((row) => `
    <div class="sla-escalation-row ${escapeAttr(row.className || "normal")}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)}</em>
      </div>
    </div>
  `).join("");
}

function renderResearchSlaFreshnessRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No freshness checks</strong><span>Freshness checks appear when a universe is scheduled.</span></div>`;
  }
  return rows.map((row) => `
    <div class="sla-freshness-row ${escapeAttr(row.className || "normal")}">
      <span>${escapeHtml(row.ticker)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)}</em>
      </div>
    </div>
  `).join("");
}

function readResearchSlaConfig() {
  return normalizeResearchSlaConfig({
    startDate: els.researchSlaStart.value,
    window: els.researchSlaWindow.value,
    dailyCapacity: els.researchSlaCapacity.value,
    freshnessDays: els.researchSlaFreshness.value,
    escalation: els.researchSlaEscalation.value,
    owner: els.researchSlaOwner.value,
    lane: els.researchSlaLane.value,
    output: els.researchSlaOutput.value,
    note: els.researchSlaNote.value
  });
}

function syncResearchSlaInputs() {
  if (!els.researchSlaStart) return;
  const config = normalizeResearchSlaConfig(state.researchSlaConfig || getDefaultResearchSlaConfig());
  els.researchSlaStart.value = config.startDate;
  els.researchSlaWindow.value = config.window;
  els.researchSlaCapacity.value = String(config.dailyCapacity);
  els.researchSlaFreshness.value = String(config.freshnessDays);
  els.researchSlaEscalation.value = config.escalation;
  els.researchSlaOwner.value = config.owner;
  els.researchSlaLane.value = config.lane;
  els.researchSlaOutput.value = config.output;
  els.researchSlaNote.value = config.note;
}

function normalizeResearchSlaConfig(config) {
  const defaults = getDefaultResearchSlaConfig();
  return {
    startDate: normalizeSchedulerDate(config.startDate || defaults.startDate),
    window: normalizeChoice(config.window, ["Next 3 sessions", "This week", "Next 10 trading days"], defaults.window),
    dailyCapacity: Math.round(clampRevisionNumber(config.dailyCapacity, 1, 20, defaults.dailyCapacity)),
    freshnessDays: Math.round(clampRevisionNumber(config.freshnessDays, 1, 45, defaults.freshnessDays)),
    escalation: normalizeChoice(config.escalation, ["Balanced", "Strict", "Quiet"], defaults.escalation),
    owner: String(config.owner || defaults.owner).slice(0, 48),
    lane: normalizeChoice(config.lane, ["Analyst desk", "IC review", "Founder review"], defaults.lane),
    output: normalizeChoice(config.output, ["Desk schedule", "Ops memo", "Review queue"], defaults.output),
    note: String(config.note || defaults.note).slice(0, 520)
  };
}

function getDefaultResearchSlaConfig() {
  return {
    startDate: new Date().toISOString().slice(0, 10),
    window: "Next 3 sessions",
    dailyCapacity: 6,
    freshnessDays: 21,
    escalation: "Balanced",
    owner: "Research desk",
    lane: "Analyst desk",
    output: "Desk schedule",
    note: "Keep high-priority research questions inside SLA, refresh stale source work, and escalate blocked items before they reach user-facing memos."
  };
}

function hydrateResearchSlaFromQueue() {
  const queue = state.currentResearchQueue || buildAutonomousResearchQueueSnapshot();
  state.researchSlaConfig = normalizeResearchSlaConfig({
    ...(state.researchSlaConfig || getDefaultResearchSlaConfig()),
    window: queue.taskRows.length > 8 ? "This week" : "Next 3 sessions",
    dailyCapacity: Math.max(4, Math.min(10, queue.highPriorityCount + 4)),
    freshnessDays: queue.coverageScore < 80 ? 14 : 21,
    escalation: queue.highPriorityCount ? "Strict" : "Balanced",
    owner: queue.config.owner,
    lane: queue.config.output === "IC follow-up" ? "IC review" : "Analyst desk",
    output: queue.config.output === "IC follow-up" ? "Review queue" : "Desk schedule",
    note: `Hydrated from Autonomous Research Queue: ${queue.taskRows.length} open tasks, ${queue.highPriorityCount} high priority, ${queue.coverageScore}% coverage.`
  });
}

function getResearchSlaSessionCount(windowLabel) {
  if (windowLabel === "Next 10 trading days") return 10;
  if (windowLabel === "This week") return 5;
  return 3;
}

function getResearchSlaSourceAgeDays(ticker, proxyTicker, startDate) {
  const keys = new Set([ticker, proxyTicker].filter(Boolean).map(normalizeTicker));
  const docs = state.documents.filter((doc) => state.enabledDocIds.has(doc.id) && keys.has(doc.ticker));
  if (!docs.length) return 999;
  const start = parseSchedulerDate(startDate);
  const latest = docs
    .map((doc) => parseSchedulerDate(doc.date))
    .sort((a, b) => b.getTime() - a.getTime())[0];
  return Math.max(0, Math.round((start.getTime() - latest.getTime()) / 86400000));
}

function normalizeSchedulerDate(value) {
  return parseSchedulerDate(value).toISOString().slice(0, 10);
}

function parseSchedulerDate(value) {
  const match = String(value || "").slice(0, 10).match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (match) {
    const date = new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])));
    if (Number.isFinite(date.getTime())) return date;
  }
  const today = new Date().toISOString().slice(0, 10).match(/^(\d{4})-(\d{2})-(\d{2})$/);
  return new Date(Date.UTC(Number(today[1]), Number(today[2]) - 1, Number(today[3])));
}

function addDaysToSchedulerDate(value, days) {
  const date = parseSchedulerDate(value);
  date.setDate(date.getDate() + Number(days || 0));
  return date.toISOString().slice(0, 10);
}

function formatSchedulerDate(value) {
  return parseSchedulerDate(value).toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

function loadResearchSlaConfig() {
  return normalizeResearchSlaConfig(loadJson(STORAGE_KEYS.researchSla, getDefaultResearchSlaConfig()));
}

function saveResearchSlaConfig() {
  saveJson(STORAGE_KEYS.researchSla, normalizeResearchSlaConfig(state.researchSlaConfig || getDefaultResearchSlaConfig()));
}

function exportResearchSlaBrief() {
  const snapshot = state.currentResearchSla || buildResearchSlaSnapshot();
  const date = new Date().toISOString().slice(0, 10);
  const content = [
    "# CiteAlpha Research SLA Schedule",
    "",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    "## Scheduler Setup",
    "",
    `- Start date: ${snapshot.config.startDate}`,
    `- Planning window: ${snapshot.config.window}`,
    `- Daily capacity: ${snapshot.config.dailyCapacity}`,
    `- Freshness policy: ${snapshot.config.freshnessDays} days`,
    `- Escalation mode: ${snapshot.config.escalation}`,
    `- Owner: ${snapshot.config.owner}`,
    `- Review lane: ${snapshot.config.lane}`,
    `- Export mode: ${snapshot.config.output}`,
    `- Note: ${snapshot.config.note}`,
    "",
    "## Scorecard",
    "",
    `- SLA health: ${snapshot.slaScore}/100 (${snapshot.scoreLabel})`,
    `- Due today: ${snapshot.todayCount}`,
    `- Capacity used: ${snapshot.capacityUsed}/${snapshot.config.dailyCapacity}`,
    `- Escalations: ${snapshot.escalationRows.length}`,
    `- Freshness score: ${snapshot.freshnessScore}%`,
    "",
    "## Due Schedule",
    "",
    ...snapshot.dueRows.map((row) => `- ${row.dueLabel} | ${row.title}: ${row.question} ${row.body}`),
    "",
    "## Escalations",
    "",
    ...snapshot.escalationRows.map((row) => `- ${row.label} | ${row.title}: ${row.body}`),
    "",
    "## Freshness Checks",
    "",
    ...snapshot.freshnessRows.map((row) => `- ${row.ticker}: ${row.title}. ${row.body}`),
    "",
    "## Product Note",
    "",
    "This research SLA scheduler is a client-side workflow prototype. Production should use backend scheduled jobs, durable task state, notifications, permissions, audit trails, and reviewer sign-off before relying on it for live paid research operations."
  ].join("\n");
  downloadTextFile(`citealpha-research-sla-schedule-${date}.md`, content, "text/markdown;charset=utf-8");
  flashButtonLabel(els.exportResearchSlaBrief, "Exported");
}

function renderResearchOutcomeLoop() {
  if (!els.researchOutcomeMetricGrid) return;
  if (!state.researchOutcomeConfig) state.researchOutcomeConfig = loadResearchOutcomeConfig();
  syncResearchOutcomeInputs();
  const snapshot = buildResearchOutcomeSnapshot();
  state.currentResearchOutcome = snapshot;
  els.researchOutcomeMetricGrid.innerHTML = [
    { label: "Outcome score", value: `${snapshot.outcomeScore}/100`, sub: snapshot.scoreLabel },
    { label: "Thesis result", value: snapshot.verdict.label, sub: snapshot.verdict.note },
    { label: "Drift", value: `${roundOne(snapshot.driftMagnitude)} pts`, sub: snapshot.driftLabel },
    { label: "Calibration", value: `${snapshot.calibrationScore}%`, sub: `${snapshot.config.confidence}% confidence` }
  ].map((metric) => `
    <div class="outcome-metric">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(String(metric.value))}</strong>
      <em>${escapeHtml(metric.sub)}</em>
    </div>
  `).join("");
  els.researchOutcomeReadCount.textContent = String(snapshot.readRows.length);
  els.researchOutcomeReadList.innerHTML = renderResearchOutcomeReadRows(snapshot.readRows);
  els.researchOutcomeDriftCount.textContent = String(snapshot.driftRows.length);
  els.researchOutcomeDriftList.innerHTML = renderResearchOutcomeDriftRows(snapshot.driftRows);
  els.researchOutcomeLearningCount.textContent = String(snapshot.learningRows.length);
  els.researchOutcomeLearningList.innerHTML = renderResearchOutcomeLearningRows(snapshot.learningRows);
  renderResearchMemoryVault();
}

function buildResearchOutcomeSnapshot() {
  const config = normalizeResearchOutcomeConfig(state.researchOutcomeConfig || getDefaultResearchOutcomeConfig());
  const company = resolvePortfolioCompany(config.ticker);
  const queue = state.currentResearchQueue || buildAutonomousResearchQueueSnapshot();
  const sla = state.currentResearchSla || buildResearchSlaSnapshot();
  const action = state.currentPortfolioAction || buildPortfolioActionSnapshot();
  const sourceCount = countPortfolioSources(config.ticker, company.proxyTicker);
  const sourceAge = getResearchSlaSourceAgeDays(config.ticker, company.proxyTicker, config.thesisDate);
  const directionalResult = scoreResearchOutcomeDirection(config.direction, config.expectedMove, config.actualMove);
  const driftMagnitude = calculateResearchOutcomeDrift(config.direction, config.expectedMove, config.actualMove);
  const sourceScore = Math.min(100, sourceCount * 22);
  const freshnessScore = Math.max(0, Math.min(100, 100 - Math.max(0, sourceAge - 21) * 3));
  const calibrationScore = calculateResearchOutcomeCalibration(config.confidence, directionalResult.hit, driftMagnitude);
  const standardPenalty = config.standard === "Strict" ? 6 : config.standard === "Exploratory" ? -4 : 0;
  const outcomeScore = Math.max(1, Math.min(100, Math.round(directionalResult.score * 0.36 + sourceScore * 0.16 + freshnessScore * 0.12 + calibrationScore * 0.18 + Math.max(0, 100 - driftMagnitude * 5) * 0.18 - standardPenalty)));
  const verdict = makeResearchOutcomeVerdict(config, outcomeScore, directionalResult, driftMagnitude);
  const readRows = buildResearchOutcomeReadRows(config, company, verdict, directionalResult, { sourceCount, sourceAge, queue, sla, action });
  const driftRows = buildResearchOutcomeDriftRows(config, company, verdict, driftMagnitude, { sourceCount, sourceAge, queue, sla, action });
  const learningRows = buildResearchOutcomeLearningRows(config, company, verdict, driftRows, { sourceCount, sourceAge, queue, sla, action });
  return {
    config,
    company,
    queue,
    sla,
    action,
    sourceCount,
    sourceAge,
    directionalResult,
    driftMagnitude,
    calibrationScore,
    outcomeScore,
    scoreLabel: outcomeScore >= 82 ? "Learning loop clean" : outcomeScore >= 65 ? "Review learning" : "Model drift watch",
    driftLabel: driftMagnitude <= 2 ? "Low thesis drift" : driftMagnitude <= 6 ? "Moderate drift" : "High drift",
    verdict,
    readRows,
    driftRows,
    learningRows
  };
}

function scoreResearchOutcomeDirection(direction, expectedMove, actualMove) {
  const expected = Math.max(0, Number(expectedMove) || 0);
  const actual = Number(actualMove) || 0;
  if (direction === "Bullish") {
    const hit = actual >= expected * 0.35;
    return { hit, score: hit ? Math.min(100, 70 + actual * 4) : Math.max(10, 50 + actual * 6), note: actual >= 0 ? "Positive follow-through" : "Moved against bullish thesis" };
  }
  if (direction === "Bearish") {
    const hit = actual <= expected * -0.35;
    return { hit, score: hit ? Math.min(100, 70 + Math.abs(actual) * 4) : Math.max(10, 50 - actual * 6), note: actual <= 0 ? "Downside follow-through" : "Moved against bearish thesis" };
  }
  const hit = Math.abs(actual) <= Math.max(2, expected);
  return { hit, score: hit ? 82 : Math.max(20, 80 - Math.abs(actual - expected) * 5), note: hit ? "Stayed near base-case range" : "Moved outside base-case range" };
}

function calculateResearchOutcomeDrift(direction, expectedMove, actualMove) {
  const expected = Math.max(0, Number(expectedMove) || 0);
  const actual = Number(actualMove) || 0;
  if (direction === "Bullish") return Math.abs(expected - actual);
  if (direction === "Bearish") return Math.abs(-expected - actual);
  return Math.max(0, Math.abs(actual) - expected);
}

function calculateResearchOutcomeCalibration(confidence, hit, driftMagnitude) {
  const targetConfidence = hit ? 78 : 38;
  const gap = Math.abs((Number(confidence) || 50) - targetConfidence);
  return Math.max(1, Math.min(100, Math.round(100 - gap - driftMagnitude * 3)));
}

function makeResearchOutcomeVerdict(config, outcomeScore, directionalResult, driftMagnitude) {
  if (outcomeScore >= 82 && directionalResult.hit && driftMagnitude <= 4) {
    return { label: "Confirmed", className: "normal", note: "The research call is holding up within the configured review window." };
  }
  if (outcomeScore >= 65 || directionalResult.hit) {
    return { label: "Mixed", className: "watch", note: "The call has usable signal, but drift or evidence gaps deserve review." };
  }
  if (config.standard === "Exploratory") {
    return { label: "Re-test", className: "watch", note: "Exploratory thesis needs another evidence pass before becoming a model input." };
  }
  return { label: "Revise", className: "high", note: "Outcome moved far enough away from the thesis to require a revised memo." };
}

function buildResearchOutcomeReadRows(config, company, verdict, directionalResult, context) {
  return [
    {
      label: verdict.label,
      className: verdict.className,
      title: "Outcome verdict",
      body: `${company.name}: ${verdict.note} Direction: ${config.direction}; horizon: ${config.horizon}.`
    },
    {
      label: `${config.actualMove >= 0 ? "+" : ""}${roundOne(config.actualMove)}%`,
      className: directionalResult.hit ? "normal" : "watch",
      title: "Price move versus thesis",
      body: `${directionalResult.note}. Expected move was ${roundOne(config.expectedMove)}%.`
    },
    {
      label: `${context.sourceCount} src`,
      className: context.sourceCount >= 3 ? "normal" : context.sourceCount ? "watch" : "high",
      title: "Evidence base",
      body: context.sourceCount ? `${context.sourceCount} enabled source${context.sourceCount === 1 ? "" : "s"} support the review.` : "No enabled source coverage for this outcome review."
    },
    {
      label: `${config.confidence}%`,
      className: config.confidence >= 80 && !directionalResult.hit ? "high" : config.confidence >= 70 ? "normal" : "watch",
      title: "Confidence calibration",
      body: `${config.confidence}% starting confidence against the observed outcome and ${context.sla.slaScore}/100 SLA health.`
    }
  ];
}

function buildResearchOutcomeDriftRows(config, company, verdict, driftMagnitude, context) {
  const quoteMove = getPortfolioMarketMove(config.ticker);
  return [
    {
      label: `${roundOne(driftMagnitude)} pts`,
      className: driftMagnitude > 6 ? "high" : driftMagnitude > 2 ? "watch" : "normal",
      title: "Model drift",
      body: `Observed move has ${roundOne(driftMagnitude)} points of drift versus the ${config.direction.toLowerCase()} thesis setup.`
    },
    {
      label: `${context.sourceAge}d`,
      className: context.sourceAge > 45 ? "high" : context.sourceAge > 21 ? "watch" : "normal",
      title: "Source freshness",
      body: context.sourceAge >= 999 ? "No source date available; import or refresh documents." : `${company.name} latest enabled source is ${context.sourceAge} day${context.sourceAge === 1 ? "" : "s"} old.`
    },
    {
      label: Number.isFinite(quoteMove) ? `${quoteMove >= 0 ? "+" : ""}${roundOne(quoteMove)}%` : "n/a",
      className: Number.isFinite(quoteMove) && Math.abs(quoteMove - config.actualMove) > 3 ? "watch" : "normal",
      title: "Demo quote bridge",
      body: Number.isFinite(quoteMove) ? `Current demo quote move is ${quoteMove >= 0 ? "+" : ""}${roundOne(quoteMove)}%.` : "No demo quote move is available for this ticker."
    },
    {
      label: context.action.actionDecision,
      className: context.action.actionDecision === "Block action" ? "high" : context.action.actionDecision === "Stage with guardrails" ? "watch" : "normal",
      title: "Action-room linkage",
      body: `${context.action.config.ticker} action decision: ${context.action.decisionNote}`
    }
  ];
}

function buildResearchOutcomeLearningRows(config, company, verdict, driftRows, context) {
  const highDrift = driftRows.some((row) => row.className === "high");
  return [
    {
      priority: highDrift ? "High" : "Watch",
      className: highDrift ? "high" : "watch",
      title: "Thesis post-mortem",
      question: `What did the $${config.ticker} thesis get right or wrong after a ${config.actualMove >= 0 ? "+" : ""}${roundOne(config.actualMove)}% move?`,
      body: verdict.note
    },
    {
      priority: context.sourceCount < 3 ? "High" : "Watch",
      className: context.sourceCount < 3 ? "high" : "normal",
      title: "Evidence refresh",
      question: `Which filing or call source would most improve the $${config.ticker} outcome review?`,
      body: `${company.name} has ${context.sourceCount} enabled source${context.sourceCount === 1 ? "" : "s"}.`
    },
    {
      priority: "Watch",
      className: "watch",
      title: "Model update question",
      question: `Should the $${config.ticker} model assumptions change after this outcome review?`,
      body: `Outcome score is tied to ${context.queue.taskRows.length} queued task${context.queue.taskRows.length === 1 ? "" : "s"} and SLA score ${context.sla.slaScore}/100.`
    },
    {
      priority: config.standard === "Strict" && verdict.label !== "Confirmed" ? "High" : "Watch",
      className: config.standard === "Strict" && verdict.label !== "Confirmed" ? "high" : "normal",
      title: "Next user memo guardrail",
      question: `What disclosure should be added before reusing the $${config.ticker} thesis in a user-facing memo?`,
      body: `Review standard: ${config.standard}.`
    }
  ];
}

function renderResearchOutcomeReadRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No outcome read</strong><span>Score an outcome to review thesis performance.</span></div>`;
  }
  return rows.map((row) => `
    <div class="outcome-read-row ${escapeAttr(row.className || "normal")}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)}</em>
      </div>
    </div>
  `).join("");
}

function renderResearchOutcomeDriftRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No drift signals</strong><span>Drift signals appear after outcome scoring.</span></div>`;
  }
  return rows.map((row) => `
    <div class="outcome-drift-row ${escapeAttr(row.className || "normal")}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)}</em>
      </div>
    </div>
  `).join("");
}

function renderResearchOutcomeLearningRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No learning queue</strong><span>Learning prompts appear after outcome scoring.</span></div>`;
  }
  return rows.map((row) => `
    <button class="outcome-learning-row ${escapeAttr(row.className || "normal")}" type="button" data-outcome-question="${escapeAttr(row.question)}">
      <span>${escapeHtml(row.priority)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.question)} ${escapeHtml(row.body)}</em>
      </div>
    </button>
  `).join("");
}

function readResearchOutcomeConfig() {
  return normalizeResearchOutcomeConfig({
    ticker: els.researchOutcomeTicker.value,
    thesisDate: els.researchOutcomeDate.value,
    horizon: els.researchOutcomeHorizon.value,
    direction: els.researchOutcomeDirection.value,
    expectedMove: els.researchOutcomeExpectedMove.value,
    actualMove: els.researchOutcomeActualMove.value,
    confidence: els.researchOutcomeConfidence.value,
    standard: els.researchOutcomeStandard.value,
    note: els.researchOutcomeNote.value
  });
}

function syncResearchOutcomeInputs() {
  if (!els.researchOutcomeTicker) return;
  const config = normalizeResearchOutcomeConfig(state.researchOutcomeConfig || getDefaultResearchOutcomeConfig());
  els.researchOutcomeTicker.value = config.ticker;
  els.researchOutcomeDate.value = config.thesisDate;
  els.researchOutcomeHorizon.value = config.horizon;
  els.researchOutcomeDirection.value = config.direction;
  els.researchOutcomeExpectedMove.value = String(config.expectedMove);
  els.researchOutcomeActualMove.value = String(config.actualMove);
  els.researchOutcomeConfidence.value = String(config.confidence);
  els.researchOutcomeStandard.value = config.standard;
  els.researchOutcomeNote.value = config.note;
}

function normalizeResearchOutcomeConfig(config) {
  const defaults = getDefaultResearchOutcomeConfig();
  const ticker = normalizeTicker(String(config.ticker || defaults.ticker).replace(/^\$/, "")) || defaults.ticker;
  return {
    ticker,
    thesisDate: normalizeSchedulerDate(config.thesisDate || defaults.thesisDate),
    horizon: normalizeChoice(config.horizon, ["7 days", "30 days", "90 days"], defaults.horizon),
    direction: normalizeChoice(config.direction, ["Bullish", "Base", "Bearish"], defaults.direction),
    expectedMove: roundOne(clampRevisionNumber(config.expectedMove, 0, 80, defaults.expectedMove)),
    actualMove: roundOne(clampRevisionNumber(config.actualMove, -80, 80, defaults.actualMove)),
    confidence: Math.round(clampRevisionNumber(config.confidence, 1, 99, defaults.confidence)),
    standard: normalizeChoice(config.standard, ["Balanced", "Strict", "Exploratory"], defaults.standard),
    note: String(config.note || defaults.note).slice(0, 520)
  };
}

function getDefaultResearchOutcomeConfig() {
  const ticker = state.researchQueueConfig ? parseResearchQueueUniverse(state.researchQueueConfig.universe)[0] : state.portfolioActionConfig?.ticker || "NVDA";
  const quoteMove = getPortfolioMarketMove(ticker);
  return {
    ticker,
    thesisDate: new Date().toISOString().slice(0, 10),
    horizon: "30 days",
    direction: Number.isFinite(quoteMove) && quoteMove < -1 ? "Bearish" : "Bullish",
    expectedMove: 4,
    actualMove: Number.isFinite(quoteMove) ? roundOne(quoteMove) : 0,
    confidence: 72,
    standard: "Balanced",
    note: "Review whether the cited thesis held up, whether price action or new source work changed the answer, and which follow-up question should improve the next memo."
  };
}

function hydrateResearchOutcomeFromSchedule() {
  const sla = state.currentResearchSla || buildResearchSlaSnapshot();
  const firstDue = sla.dueRows[0] || null;
  const ticker = firstDue?.ticker || parseResearchQueueUniverse(sla.queue.config.universe)[0] || "NVDA";
  const quoteMove = getPortfolioMarketMove(ticker);
  state.researchOutcomeConfig = normalizeResearchOutcomeConfig({
    ...(state.researchOutcomeConfig || getDefaultResearchOutcomeConfig()),
    ticker,
    thesisDate: sla.config.startDate,
    horizon: sla.config.window === "Next 10 trading days" ? "30 days" : "7 days",
    direction: Number.isFinite(quoteMove) && quoteMove < -1 ? "Bearish" : "Bullish",
    expectedMove: Math.max(3, Math.abs(Number(quoteMove) || 4)),
    actualMove: Number.isFinite(quoteMove) ? quoteMove : 0,
    confidence: sla.slaScore >= 82 ? 78 : sla.slaScore >= 65 ? 68 : 55,
    standard: sla.config.escalation === "Strict" ? "Strict" : "Balanced",
    note: `Hydrated from Research SLA Scheduler: ${sla.dueRows.length} due items, ${sla.escalationRows.length} escalations, ${sla.slaScore}/100 SLA health.`
  });
}

function loadResearchOutcomeConfig() {
  return normalizeResearchOutcomeConfig(loadJson(STORAGE_KEYS.researchOutcome, getDefaultResearchOutcomeConfig()));
}

function saveResearchOutcomeConfig() {
  saveJson(STORAGE_KEYS.researchOutcome, normalizeResearchOutcomeConfig(state.researchOutcomeConfig || getDefaultResearchOutcomeConfig()));
}

function exportResearchOutcomeBrief() {
  const snapshot = state.currentResearchOutcome || buildResearchOutcomeSnapshot();
  const date = new Date().toISOString().slice(0, 10);
  const content = [
    "# CiteAlpha Research Outcome Review",
    "",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    "## Outcome Setup",
    "",
    `- Ticker: ${snapshot.config.ticker}`,
    `- Company: ${snapshot.company.name}`,
    `- Thesis date: ${snapshot.config.thesisDate}`,
    `- Horizon: ${snapshot.config.horizon}`,
    `- Direction: ${snapshot.config.direction}`,
    `- Expected move: ${roundOne(snapshot.config.expectedMove)}%`,
    `- Actual move: ${snapshot.config.actualMove >= 0 ? "+" : ""}${roundOne(snapshot.config.actualMove)}%`,
    `- Confidence: ${snapshot.config.confidence}%`,
    `- Review standard: ${snapshot.config.standard}`,
    `- Note: ${snapshot.config.note}`,
    "",
    "## Scorecard",
    "",
    `- Outcome score: ${snapshot.outcomeScore}/100 (${snapshot.scoreLabel})`,
    `- Verdict: ${snapshot.verdict.label} - ${snapshot.verdict.note}`,
    `- Drift: ${roundOne(snapshot.driftMagnitude)} points (${snapshot.driftLabel})`,
    `- Calibration score: ${snapshot.calibrationScore}%`,
    `- Source count: ${snapshot.sourceCount}`,
    `- Source age: ${snapshot.sourceAge} days`,
    "",
    "## Outcome Read",
    "",
    ...snapshot.readRows.map((row) => `- ${row.label} | ${row.title}: ${row.body}`),
    "",
    "## Drift Signals",
    "",
    ...snapshot.driftRows.map((row) => `- ${row.label} | ${row.title}: ${row.body}`),
    "",
    "## Learning Queue",
    "",
    ...snapshot.learningRows.map((row) => `- ${row.priority} | ${row.title}: ${row.question} ${row.body}`),
    "",
    "## Product Note",
    "",
    "This research outcome loop is a client-side workflow prototype. Production should persist dated thesis records, source versions, market data snapshots, reviewer notes, and immutable audit logs before using it for live paid research evaluation."
  ].join("\n");
  downloadTextFile(`citealpha-research-outcome-${snapshot.config.ticker.toLowerCase()}-${date}.md`, content, "text/markdown;charset=utf-8");
  flashButtonLabel(els.exportResearchOutcomeBrief, "Exported");
}

function renderResearchMemoryVault() {
  if (!els.researchMemoryMetricGrid) return;
  if (!state.researchMemoryConfig) state.researchMemoryConfig = loadResearchMemoryConfig();
  syncResearchMemoryInputs();
  const snapshot = buildResearchMemorySnapshot();
  state.currentResearchMemory = snapshot;
  els.researchMemoryMetricGrid.innerHTML = [
    { label: "Memory score", value: `${snapshot.memoryScore}/100`, sub: snapshot.scoreLabel },
    { label: "Reusable patterns", value: snapshot.reusableCount, sub: `${snapshot.patternRows.length} detected` },
    { label: "Evidence reuse", value: `${snapshot.evidenceReuse}%`, sub: `${snapshot.sourceBackedCount}/${snapshot.tickers.length} names source-backed` },
    { label: "Next reuse", value: snapshot.nextReuseTicker, sub: snapshot.config.reuseTarget }
  ].map((metric) => `
    <div class="memory-metric">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(String(metric.value))}</strong>
      <em>${escapeHtml(metric.sub)}</em>
    </div>
  `).join("");
  els.researchMemoryPatternCount.textContent = String(snapshot.patternRows.length);
  els.researchMemoryPatternList.innerHTML = renderResearchMemoryPatternRows(snapshot.patternRows);
  els.researchMemoryRuleCount.textContent = String(snapshot.ruleRows.length);
  els.researchMemoryRuleList.innerHTML = renderResearchMemoryRuleRows(snapshot.ruleRows);
  els.researchMemoryReuseCount.textContent = String(snapshot.reuseRows.length);
  els.researchMemoryReuseList.innerHTML = renderResearchMemoryReuseRows(snapshot.reuseRows);
  renderGuidedResearchNavigator();
}

function buildResearchMemorySnapshot() {
  const config = normalizeResearchMemoryConfig(state.researchMemoryConfig || getDefaultResearchMemoryConfig());
  const tickers = parseResearchQueueUniverse(config.universe);
  const outcome = state.currentResearchOutcome || buildResearchOutcomeSnapshot();
  const queue = state.currentResearchQueue || buildAutonomousResearchQueueSnapshot();
  const portfolio = buildPortfolioSnapshot();
  const patternRows = buildResearchMemoryPatterns(config, tickers, outcome, queue, portfolio);
  const ruleRows = buildResearchMemoryRules(config, patternRows, outcome, queue, portfolio);
  const reuseRows = buildResearchMemoryReuseRows(config, patternRows, outcome, queue);
  const reusableCount = patternRows.filter((row) => row.score >= config.minScore && row.sourceCount >= 2).length;
  const sourceBackedCount = patternRows.filter((row) => row.sourceCount >= 2).length;
  const staleCount = patternRows.filter((row) => row.sourceAge > getResearchMemoryLookbackDays(config.lookback)).length;
  const evidenceReuse = Math.round((sourceBackedCount / Math.max(tickers.length, 1)) * 100);
  const sensitivityPenalty = config.sensitivity === "Strict" ? 7 : config.sensitivity === "Exploratory" ? -5 : 0;
  const memoryScore = Math.max(1, Math.min(100, Math.round(
    outcome.outcomeScore * 0.22 +
    queue.queueScore * 0.16 +
    evidenceReuse * 0.22 +
    Math.min(100, reusableCount * 25) * 0.18 +
    Math.max(0, 100 - staleCount * 14) * 0.14 +
    Math.max(0, 100 - ruleRows.filter((row) => row.className === "high").length * 20) * 0.08 -
    sensitivityPenalty
  )));
  return {
    config,
    tickers,
    outcome,
    queue,
    portfolio,
    patternRows,
    ruleRows,
    reuseRows,
    reusableCount,
    sourceBackedCount,
    staleCount,
    evidenceReuse,
    memoryScore,
    nextReuseTicker: reuseRows[0]?.ticker || tickers[0] || "NVDA",
    scoreLabel: memoryScore >= 82 ? "Compounding desk memory" : memoryScore >= 65 ? "Reusable with review" : "Needs analyst curation"
  };
}

function buildResearchMemoryPatterns(config, tickers, outcome, queue, portfolio) {
  const portfolioRows = new Map(portfolio.positions.map((position) => [position.ticker, position]));
  const taskRows = new Map(queue.taskRows.map((row) => [row.ticker, row]));
  const lookbackDays = getResearchMemoryLookbackDays(config.lookback);
  return tickers.map((ticker) => {
    const company = resolvePortfolioCompany(ticker);
    const sourceCount = countPortfolioSources(ticker, company.proxyTicker);
    const sourceAge = getResearchSlaSourceAgeDays(ticker, company.proxyTicker, outcome.config.thesisDate);
    const portfolioRow = portfolioRows.get(ticker);
    const task = taskRows.get(ticker);
    const marketMove = getPortfolioMarketMove(ticker);
    const outcomeMatch = ticker === outcome.config.ticker;
    const ageScore = sourceAge >= 999 ? 0 : Math.max(0, 100 - Math.max(0, sourceAge - lookbackDays) * 3);
    const sourceScore = Math.min(38, sourceCount * 11);
    const queueScore = task ? (task.className === "high" ? 18 : task.className === "watch" ? 12 : 8) : 4;
    const outcomeScore = outcomeMatch ? Math.round(outcome.outcomeScore * 0.22) : config.mode === "Outcome learning" ? 7 : 4;
    const portfolioScore = portfolioRow ? Math.min(14, Math.round(portfolioRow.weight * 0.42)) : 2;
    const quoteScore = Number.isFinite(marketMove) && Math.abs(marketMove) >= 3 ? 7 : 3;
    const riskPenalty = (Number(company.risk) || 55) >= 70 && sourceCount < 3 ? 8 : 0;
    const strictPenalty = config.sensitivity === "Strict" && sourceCount < 3 ? 6 : 0;
    const score = Math.max(1, Math.min(100, Math.round(sourceScore + ageScore * 0.16 + queueScore + outcomeScore + portfolioScore + quoteScore - riskPenalty - strictPenalty)));
    const className = sourceCount === 0 || score < config.minScore - 14 ? "high" : score < config.minScore ? "watch" : "normal";
    const status = className === "high" ? "Gap" : className === "watch" ? "Review" : "Reuse";
    return {
      ticker,
      company,
      sourceCount,
      sourceAge,
      sourceAgeLabel: sourceAge >= 999 ? "no dated source" : `${sourceAge}d source age`,
      weight: portfolioRow ? roundOne(portfolioRow.weight) : 0,
      marketMove,
      risk: Number(company.risk) || 55,
      task,
      outcomeMatch,
      score,
      className,
      status,
      title: makeResearchMemoryPatternTitle(config, ticker, company, sourceCount, outcomeMatch, task),
      body: makeResearchMemoryPatternBody(config, ticker, company, sourceCount, sourceAge, portfolioRow, task, outcome, marketMove)
    };
  }).sort((a, b) => b.score - a.score || b.sourceCount - a.sourceCount || a.ticker.localeCompare(b.ticker));
}

function makeResearchMemoryPatternTitle(config, ticker, company, sourceCount, outcomeMatch, task) {
  if (outcomeMatch) return `${ticker} outcome learning pattern`;
  if (!sourceCount) return `${ticker} source gap pattern`;
  if (task?.className === "high") return `${ticker} unresolved queue pattern`;
  if (config.mode === "Risk patterning" || company.risk >= 68) return `${ticker} risk recurrence pattern`;
  if (config.mode === "Portfolio playbook") return `${ticker} portfolio playbook pattern`;
  return `${ticker} reusable evidence pattern`;
}

function makeResearchMemoryPatternBody(config, ticker, company, sourceCount, sourceAge, portfolioRow, task, outcome, marketMove) {
  const parts = [
    `${company.name} has ${sourceCount} enabled source${sourceCount === 1 ? "" : "s"}`,
    sourceAge >= 999 ? "no dated source freshness" : `${sourceAge} day source age`
  ];
  if (portfolioRow) parts.push(`${roundOne(portfolioRow.weight)}% portfolio weight`);
  if (task) parts.push(`${task.priority.toLowerCase()} queue carry-over`);
  if (ticker === outcome.config.ticker) parts.push(`${outcome.verdict.label.toLowerCase()} outcome review`);
  if (Number.isFinite(marketMove)) parts.push(`${marketMove >= 0 ? "+" : ""}${roundOne(marketMove)}% demo quote move`);
  parts.push(`mode: ${config.mode.toLowerCase()}`);
  return `${parts.join("; ")}.`;
}

function buildResearchMemoryRules(config, patternRows, outcome, queue, portfolio) {
  const lookbackDays = getResearchMemoryLookbackDays(config.lookback);
  const reusableCount = patternRows.filter((row) => row.score >= config.minScore && row.sourceCount >= 2).length;
  const staleCount = patternRows.filter((row) => row.sourceAge > lookbackDays).length;
  const sourceGaps = patternRows.filter((row) => row.sourceCount < 2).length;
  const highQueue = queue.taskRows.filter((row) => row.className === "high").length;
  const topPosition = portfolio.topPosition?.ticker || "n/a";
  return [
    {
      label: outcome.verdict.label,
      className: outcome.verdict.className === "high" ? "high" : outcome.verdict.className === "watch" ? "watch" : "normal",
      title: "Outcome reuse gate",
      body: `${outcome.config.ticker} can be reused only with the outcome note attached: ${outcome.verdict.note}`
    },
    {
      label: `${reusableCount} pass`,
      className: reusableCount ? "normal" : "high",
      title: "Pattern score threshold",
      body: `Reuse only patterns above ${config.minScore}/100 with at least two enabled sources. Current mode: ${config.mode}.`
    },
    {
      label: `${sourceGaps} gaps`,
      className: sourceGaps ? "watch" : "normal",
      title: "Source minimum rule",
      body: sourceGaps ? "Do not turn source-gap patterns into paid memos until filings, calls, or model notes are imported." : "Every memory pattern has minimum source support."
    },
    {
      label: `${staleCount} stale`,
      className: staleCount ? "watch" : "normal",
      title: "Lookback freshness rule",
      body: `Patterns older than ${config.lookback.toLowerCase()} should be refreshed before reuse.`
    },
    {
      label: `${highQueue} high`,
      className: highQueue ? "high" : "normal",
      title: "Queue carry-over rule",
      body: highQueue ? "High-priority queue items should stay visible in the memory pack until cleared." : "No high-priority queue item is blocking reuse."
    },
    {
      label: topPosition,
      className: portfolio.weightedRisk >= 68 ? "watch" : "normal",
      title: "Portfolio playbook rule",
      body: `Top position and weighted risk are included so reused research patterns stay tied to portfolio context. Owner: ${config.owner}.`
    }
  ];
}

function buildResearchMemoryReuseRows(config, patternRows, outcome, queue) {
  const priorityRank = { high: 3, watch: 2, normal: 1 };
  return patternRows
    .slice()
    .sort((a, b) => priorityRank[b.className] - priorityRank[a.className] || b.score - a.score)
    .slice(0, 6)
    .map((row) => {
      const question = makeResearchMemoryReuseQuestion(config, row, outcome, queue);
      return {
        ticker: row.ticker,
        priority: row.className === "high" ? "High" : row.className === "watch" ? "Watch" : "Reuse",
        className: row.className,
        title: `${row.ticker} - ${config.reuseTarget}`,
        question,
        body: `${row.score}/100 pattern score; ${row.sourceCount} source${row.sourceCount === 1 ? "" : "s"}; ${row.sourceAgeLabel}.`
      };
    });
}

function makeResearchMemoryReuseQuestion(config, row, outcome, queue) {
  if (row.sourceCount < 2) {
    return `Which filing or earnings call source should I import next to make the $${row.ticker} memory pattern reusable?`;
  }
  if (row.outcomeMatch) {
    return `What should CiteAlpha reuse from the $${row.ticker} outcome review before the next ${config.reuseTarget.toLowerCase()}?`;
  }
  if (config.mode === "Risk patterning" || row.risk >= 68) {
    return `What repeated risk pattern for $${row.ticker} should I compare against the last outcome review?`;
  }
  if (config.mode === "Portfolio playbook" || row.weight >= 20) {
    return `Which source-backed $${row.ticker} playbook rule should guide the next portfolio research memo?`;
  }
  if (queue.highPriorityCount) {
    return `Which reusable evidence pattern for $${row.ticker} can clear the current research queue fastest?`;
  }
  return `What reusable research pattern for $${row.ticker} should I apply to the next cited memo?`;
}

function renderResearchMemoryPatternRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No memory patterns</strong><span>Build memory from an outcome or queue to detect reusable research behavior.</span></div>`;
  }
  return rows.map((row) => `
    <div class="memory-pattern-row ${escapeAttr(row.className || "normal")}">
      <span>${escapeHtml(row.status)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)} Score ${escapeHtml(String(row.score))}/100.</em>
      </div>
    </div>
  `).join("");
}

function renderResearchMemoryRuleRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No playbook rules</strong><span>Rules appear after memory scoring.</span></div>`;
  }
  return rows.map((row) => `
    <div class="memory-rule-row ${escapeAttr(row.className || "normal")}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)}</em>
      </div>
    </div>
  `).join("");
}

function renderResearchMemoryReuseRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No reuse queue</strong><span>Reusable prompts appear after memory scoring.</span></div>`;
  }
  return rows.map((row) => `
    <button class="memory-reuse-row ${escapeAttr(row.className || "normal")}" type="button" data-memory-question="${escapeAttr(row.question)}">
      <span>${escapeHtml(row.priority)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.question)} ${escapeHtml(row.body)}</em>
      </div>
    </button>
  `).join("");
}

function readResearchMemoryConfig() {
  return normalizeResearchMemoryConfig({
    universe: els.researchMemoryUniverse.value,
    mode: els.researchMemoryMode.value,
    lookback: els.researchMemoryLookback.value,
    minScore: els.researchMemoryMinScore.value,
    sensitivity: els.researchMemorySensitivity.value,
    owner: els.researchMemoryOwner.value,
    output: els.researchMemoryOutput.value,
    reuseTarget: els.researchMemoryReuse.value,
    note: els.researchMemoryNote.value
  });
}

function syncResearchMemoryInputs() {
  if (!els.researchMemoryUniverse) return;
  const config = normalizeResearchMemoryConfig(state.researchMemoryConfig || getDefaultResearchMemoryConfig());
  els.researchMemoryUniverse.value = config.universe;
  els.researchMemoryMode.value = config.mode;
  els.researchMemoryLookback.value = config.lookback;
  els.researchMemoryMinScore.value = String(config.minScore);
  els.researchMemorySensitivity.value = config.sensitivity;
  els.researchMemoryOwner.value = config.owner;
  els.researchMemoryOutput.value = config.output;
  els.researchMemoryReuse.value = config.reuseTarget;
  els.researchMemoryNote.value = config.note;
}

function normalizeResearchMemoryConfig(config) {
  const defaults = getDefaultResearchMemoryConfig();
  const tickers = parseResearchQueueUniverse(config.universe || defaults.universe);
  return {
    universe: tickers.join(", "),
    mode: normalizeChoice(config.mode, ["Outcome learning", "Source reuse", "Risk patterning", "Portfolio playbook"], defaults.mode),
    lookback: normalizeChoice(config.lookback, ["30 days", "90 days", "All pilot history"], defaults.lookback),
    minScore: Math.round(clampRevisionNumber(config.minScore, 1, 99, defaults.minScore)),
    sensitivity: normalizeChoice(config.sensitivity, ["Balanced", "Strict", "Exploratory"], defaults.sensitivity),
    owner: String(config.owner || defaults.owner).slice(0, 48),
    output: normalizeChoice(config.output, ["Memory pack", "Playbook memo", "Training notes"], defaults.output),
    reuseTarget: normalizeChoice(config.reuseTarget, ["Next memo", "IC review", "Quality lab"], defaults.reuseTarget),
    note: String(config.note || defaults.note).slice(0, 560)
  };
}

function getDefaultResearchMemoryConfig() {
  const queueUniverse = state.researchQueueConfig?.universe || getDefaultResearchQueueConfig().universe;
  const tickers = parseResearchQueueUniverse(queueUniverse);
  const outcomeTicker = state.researchOutcomeConfig?.ticker || state.currentResearchOutcome?.config?.ticker || tickers[0] || "NVDA";
  const universe = Array.from(new Set([outcomeTicker, ...tickers])).slice(0, 8).join(", ");
  return {
    universe,
    mode: "Outcome learning",
    lookback: "90 days",
    minScore: 65,
    sensitivity: "Balanced",
    owner: "Research desk",
    output: "Memory pack",
    reuseTarget: "Next memo",
    note: "Capture what repeatable research behavior worked, where evidence was thin, and what the next analyst should reuse before drafting another memo."
  };
}

function hydrateResearchMemoryFromOutcome() {
  const outcome = state.currentResearchOutcome || buildResearchOutcomeSnapshot();
  const queue = state.currentResearchQueue || buildAutonomousResearchQueueSnapshot();
  const tickers = Array.from(new Set([outcome.config.ticker, ...queue.tickers])).filter(Boolean).slice(0, 8);
  state.researchMemoryConfig = normalizeResearchMemoryConfig({
    ...(state.researchMemoryConfig || getDefaultResearchMemoryConfig()),
    universe: tickers.join(", "),
    mode: outcome.sourceCount < 3 ? "Source reuse" : outcome.driftMagnitude > 4 ? "Risk patterning" : outcome.verdict.label === "Confirmed" ? "Outcome learning" : "Portfolio playbook",
    lookback: outcome.sourceAge > 45 ? "30 days" : "90 days",
    minScore: outcome.verdict.label === "Confirmed" ? 62 : outcome.verdict.label === "Revise" ? 72 : 68,
    sensitivity: outcome.verdict.label === "Confirmed" ? "Balanced" : "Strict",
    owner: outcome.config.standard === "Strict" ? "IC reviewer" : "Research desk",
    output: outcome.verdict.label === "Confirmed" ? "Memory pack" : "Playbook memo",
    reuseTarget: outcome.verdict.label === "Confirmed" ? "Next memo" : outcome.verdict.label === "Revise" ? "Quality lab" : "IC review",
    note: `Hydrated from Research Outcome Loop: ${outcome.config.ticker} ${outcome.verdict.label.toLowerCase()}, ${roundOne(outcome.driftMagnitude)} points drift, ${outcome.sourceCount} source${outcome.sourceCount === 1 ? "" : "s"}, ${outcome.calibrationScore}% calibration.`
  });
}

function getResearchMemoryLookbackDays(lookback) {
  if (lookback === "30 days") return 30;
  if (lookback === "All pilot history") return 3650;
  return 90;
}

function loadResearchMemoryConfig() {
  return normalizeResearchMemoryConfig(loadJson(STORAGE_KEYS.researchMemory, getDefaultResearchMemoryConfig()));
}

function saveResearchMemoryConfig() {
  saveJson(STORAGE_KEYS.researchMemory, normalizeResearchMemoryConfig(state.researchMemoryConfig || getDefaultResearchMemoryConfig()));
}

function exportResearchMemoryBrief() {
  const snapshot = state.currentResearchMemory || buildResearchMemorySnapshot();
  const date = new Date().toISOString().slice(0, 10);
  const content = [
    "# CiteAlpha Research Memory Vault",
    "",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    "## Memory Setup",
    "",
    `- Universe: ${snapshot.config.universe}`,
    `- Mode: ${snapshot.config.mode}`,
    `- Lookback: ${snapshot.config.lookback}`,
    `- Minimum pattern score: ${snapshot.config.minScore}/100`,
    `- Sensitivity: ${snapshot.config.sensitivity}`,
    `- Owner: ${snapshot.config.owner}`,
    `- Export mode: ${snapshot.config.output}`,
    `- Reuse target: ${snapshot.config.reuseTarget}`,
    `- Vault note: ${snapshot.config.note}`,
    "",
    "## Scorecard",
    "",
    `- Memory score: ${snapshot.memoryScore}/100 (${snapshot.scoreLabel})`,
    `- Reusable patterns: ${snapshot.reusableCount}`,
    `- Evidence reuse: ${snapshot.evidenceReuse}%`,
    `- Source-backed names: ${snapshot.sourceBackedCount}/${snapshot.tickers.length}`,
    `- Stale patterns: ${snapshot.staleCount}`,
    `- Next reuse ticker: ${snapshot.nextReuseTicker}`,
    "",
    "## Pattern Library",
    "",
    ...snapshot.patternRows.map((row) => `- ${row.status} | ${row.ticker} | ${row.score}/100: ${row.title}. ${row.body}`),
    "",
    "## Playbook Rules",
    "",
    ...snapshot.ruleRows.map((row) => `- ${row.label} | ${row.title}: ${row.body}`),
    "",
    "## Reuse Queue",
    "",
    ...snapshot.reuseRows.map((row) => `- ${row.priority} | ${row.ticker}: ${row.question} ${row.body}`),
    "",
    "## Product Note",
    "",
    "This research memory vault is a client-side workflow prototype. Production should persist versioned source packs, thesis outcomes, human review decisions, and model-training exclusions before using repeated patterns for paid research answers."
  ].join("\n");
  downloadTextFile(`citealpha-research-memory-${date}.md`, content, "text/markdown;charset=utf-8");
  flashButtonLabel(els.exportResearchMemoryBrief, "Exported");
}

function renderGuidedResearchNavigator() {
  if (!els.navigatorMetricGrid) return;
  if (!state.guidedNavigatorConfig) state.guidedNavigatorConfig = loadGuidedNavigatorConfig();
  syncGuidedNavigatorInputs();
  const snapshot = buildGuidedNavigatorSnapshot();
  state.currentNavigator = snapshot;
  els.navigatorMetricGrid.innerHTML = [
    { label: "Route score", value: `${snapshot.routeScore}/100`, sub: snapshot.scoreLabel },
    { label: "First ask", value: snapshot.config.ticker, sub: snapshot.config.objective },
    { label: "Data ready", value: `${snapshot.dataReadiness}%`, sub: snapshot.dataLabel },
    { label: "Friction", value: snapshot.frictionCount, sub: snapshot.frictionLabel }
  ].map((metric) => `
    <div class="navigator-metric">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(String(metric.value))}</strong>
      <em>${escapeHtml(metric.sub)}</em>
    </div>
  `).join("");
  els.navigatorStepCount.textContent = String(snapshot.stepRows.length);
  els.navigatorStepList.innerHTML = renderNavigatorStepRows(snapshot.stepRows);
  els.navigatorQuestionCount.textContent = String(snapshot.questionRows.length);
  els.navigatorQuestionList.innerHTML = renderNavigatorQuestionRows(snapshot.questionRows);
  els.navigatorScriptCount.textContent = String(snapshot.scriptRows.length);
  els.navigatorScriptList.innerHTML = renderNavigatorScriptRows(snapshot.scriptRows);
  renderPilotDemoConcierge();
}

function buildGuidedNavigatorSnapshot() {
  const config = normalizeGuidedNavigatorConfig(state.guidedNavigatorConfig || getDefaultGuidedNavigatorConfig());
  const company = resolvePortfolioCompany(config.ticker);
  const sourceCount = countPortfolioSources(config.ticker, company.proxyTicker);
  const importedSourceCount = state.uploadedDocs.filter((doc) => doc.ticker === config.ticker || doc.ticker === company.proxyTicker).length;
  const marketMove = getPortfolioMarketMove(config.ticker);
  const queue = state.currentResearchQueue || buildAutonomousResearchQueueSnapshot();
  const outcome = state.currentResearchOutcome || buildResearchOutcomeSnapshot();
  const memory = state.currentResearchMemory || buildResearchMemorySnapshot();
  const portfolio = buildPortfolioSnapshot();
  const dataReadiness = calculateNavigatorDataReadiness(config, sourceCount, importedSourceCount);
  const objectiveFit = calculateNavigatorObjectiveFit(config, { sourceCount, marketMove, queue, outcome, memory, portfolio });
  const frictionRows = buildNavigatorFrictionRows(config, { sourceCount, importedSourceCount, marketMove, queue, memory });
  const frictionCount = frictionRows.filter((row) => row.className === "high" || row.className === "watch").length;
  const routeScore = Math.max(1, Math.min(100, Math.round(
    dataReadiness * 0.24 +
    objectiveFit * 0.2 +
    memory.memoryScore * 0.16 +
    queue.queueScore * 0.14 +
    outcome.outcomeScore * 0.12 +
    Math.max(0, 100 - frictionCount * 14) * 0.14
  )));
  const questionRows = buildNavigatorQuestionRows(config, company, { sourceCount, marketMove, queue, outcome, memory, portfolio });
  const stepRows = buildNavigatorStepRows(config, company, questionRows[0], frictionRows, { sourceCount, importedSourceCount, marketMove, dataReadiness });
  const scriptRows = buildNavigatorScriptRows(config, questionRows[0], stepRows, { sourceCount, importedSourceCount, routeScore });
  return {
    config,
    company,
    sourceCount,
    importedSourceCount,
    marketMove,
    queue,
    outcome,
    memory,
    portfolio,
    dataReadiness,
    objectiveFit,
    routeScore,
    scoreLabel: routeScore >= 82 ? "Demo-ready route" : routeScore >= 65 ? "Usable route" : "Needs source setup",
    dataLabel: makeNavigatorDataLabel(config, sourceCount, importedSourceCount),
    frictionRows,
    frictionCount,
    frictionLabel: frictionCount ? `${frictionCount} setup item${frictionCount === 1 ? "" : "s"}` : "Smooth first run",
    firstQuestion: questionRows[0]?.question || `What are the risks for $${config.ticker}?`,
    stepRows,
    questionRows,
    scriptRows
  };
}

function calculateNavigatorDataReadiness(config, sourceCount, importedSourceCount) {
  if (config.dataPath === "Your data") {
    return Math.max(20, Math.min(100, 32 + importedSourceCount * 26 + sourceCount * 8));
  }
  if (config.dataPath === "SEC bridge") {
    return Math.max(54, Math.min(92, 62 + sourceCount * 8));
  }
  return Math.max(65, Math.min(98, 76 + sourceCount * 6));
}

function calculateNavigatorObjectiveFit(config, context) {
  const objective = config.objective;
  if (objective === "Find risk quickly") return Math.max(55, Math.min(100, 62 + context.sourceCount * 8 + (context.queue.highPriorityCount ? 8 : 0)));
  if (objective === "Compare companies") return Math.max(58, Math.min(100, 66 + Math.min(context.queue.tickers.length, 5) * 5));
  if (objective === "Check valuation") return Math.max(52, Math.min(100, 64 + (Number.isFinite(context.marketMove) ? 8 : 0) + context.sourceCount * 5));
  if (objective === "Prep earnings call") return Math.max(50, Math.min(100, 60 + context.sourceCount * 7 + (context.outcome.verdict.label === "Mixed" ? 7 : 0)));
  return Math.max(50, Math.min(100, 58 + context.portfolio.coverageScore * 0.2 + context.memory.memoryScore * 0.22));
}

function buildNavigatorFrictionRows(config, context) {
  return [
    {
      className: config.dataPath === "Your data" && !context.importedSourceCount ? "watch" : "normal",
      title: "User data setup",
      body: config.dataPath === "Your data" && !context.importedSourceCount
        ? "No imported source is active for this ticker yet; load a demo pack or paste one document first."
        : "Data path is ready for a guided run."
    },
    {
      className: context.sourceCount < 2 ? "watch" : "normal",
      title: "Evidence depth",
      body: context.sourceCount < 2
        ? `${config.ticker} has ${context.sourceCount} enabled source${context.sourceCount === 1 ? "" : "s"}; keep the first answer framed as a pilot read.`
        : `${config.ticker} has enough enabled evidence for a first cited answer.`
    },
    {
      className: Number.isFinite(context.marketMove) ? "normal" : "watch",
      title: "Market signal",
      body: Number.isFinite(context.marketMove)
        ? `Demo quote signal is available at ${context.marketMove >= 0 ? "+" : ""}${roundOne(context.marketMove)}%.`
        : "No quote signal is connected; use filing and call evidence first."
    },
    {
      className: context.memory.memoryScore < 65 ? "watch" : "normal",
      title: "Memory reuse",
      body: `Research memory score is ${context.memory.memoryScore}/100; ${context.memory.scoreLabel.toLowerCase()}.`
    }
  ];
}

function buildNavigatorStepRows(config, company, firstQuestion, frictionRows, context) {
  const sourceGap = context.sourceCount < 2;
  return [
    {
      label: "1",
      className: sourceGap && config.dataPath === "Your data" ? "watch" : "normal",
      title: config.dataPath === "Your data" ? "Load or confirm source pack" : "Confirm sample evidence",
      body: sourceGap
        ? `Start with a demo pack or pasted document for ${company.name}, then keep citations visible.`
        : `${context.sourceCount} enabled source${context.sourceCount === 1 ? "" : "s"} are ready for the first answer.`
    },
    {
      label: "2",
      className: "normal",
      title: "Run the first question",
      body: firstQuestion?.question || `Ask the desk about $${config.ticker}.`
    },
    {
      label: "3",
      className: frictionRows.some((row) => row.className === "watch") ? "watch" : "normal",
      title: "Verify evidence and quality",
      body: `Check citation cards, source audit, and answer quality before exporting a ${config.output.toLowerCase()}.`
    },
    {
      label: "4",
      className: config.output === "Portfolio queue" ? "watch" : "normal",
      title: "Save the next action",
      body: config.output === "Portfolio queue"
        ? "Route the answer into portfolio action, autonomous queue, and memory vault."
        : "Export PDF or MD, then store the reusable learning in the memory vault."
    }
  ];
}

function buildNavigatorQuestionRows(config, company, context) {
  const ticker = config.ticker;
  const objectiveQuestion = makeNavigatorObjectiveQuestion(config, company, context);
  const rows = [
    {
      priority: "First",
      className: context.sourceCount < 1 ? "watch" : "normal",
      title: `${ticker} starter ask`,
      question: objectiveQuestion,
      body: `${config.objective}; ${config.timeBudget}; ${config.output.toLowerCase()}.`
    },
    {
      priority: "Verify",
      className: "normal",
      title: "Evidence check",
      question: `Which source passages best support the answer for $${ticker}, and where is the evidence thin?`,
      body: "Use this after the first cited answer to keep trust high."
    },
    {
      priority: "Model",
      className: config.objective === "Check valuation" ? "normal" : "watch",
      title: "Valuation read-through",
      question: `What valuation assumptions would most change the $${ticker} thesis after reading the evidence?`,
      body: "Routes the user from answer into scenario lens."
    },
    {
      priority: "Next",
      className: context.memory.reusableCount ? "normal" : "watch",
      title: "Memory reuse",
      question: `What reusable research pattern should CiteAlpha remember from this $${ticker} workflow?`,
      body: `${context.memory.reusableCount} reusable pattern${context.memory.reusableCount === 1 ? "" : "s"} currently detected.`
    }
  ];
  if (config.objective === "Compare companies") {
    rows.splice(1, 0, {
      priority: "Peer",
      className: "normal",
      title: "Peer comparison",
      question: `Compare $${ticker} with the closest covered peer on margin durability, risk, and valuation evidence.`,
      body: "Keeps comparative work inside cited source support."
    });
  }
  if (config.objective === "Portfolio action") {
    rows.splice(1, 0, {
      priority: "Action",
      className: "watch",
      title: "Sizing guardrail",
      question: `Is my $${ticker} position too concentrated given filing risks, valuation, and market signal?`,
      body: "Routes into portfolio action without becoming trading advice."
    });
  }
  return rows.slice(0, 5);
}

function makeNavigatorObjectiveQuestion(config, company, context) {
  const ticker = config.ticker;
  if (config.objective === "Compare companies") {
    return `Which company has the better margin durability if rates stay high: $${ticker} or the strongest covered peer?`;
  }
  if (config.objective === "Check valuation") {
    return `What valuation assumptions should I flex first before buying $${ticker}?`;
  }
  if (config.objective === "Prep earnings call") {
    return `What management questions should I prepare for $${ticker}'s next earnings call based on filings and recent thesis risk?`;
  }
  if (config.objective === "Portfolio action") {
    return `What evidence would change the portfolio action plan for $${ticker} before the next review?`;
  }
  if (context.sourceCount < 1) {
    return `What are the risks for $${ticker}, and which source should I import next to support the answer?`;
  }
  return `What are the risks for $${ticker}?`;
}

function buildNavigatorScriptRows(config, firstQuestion, stepRows, context) {
  const dataPhrase = config.dataPath === "Your data" && !context.importedSourceCount
    ? "start by loading a demo pack or pasted source"
    : `start from ${config.dataPath.toLowerCase()}`;
  return [
    {
      label: "Open",
      className: "normal",
      title: "Set the scene",
      body: `Tell the user this route is for ${config.audience.toLowerCase()} and will ${dataPhrase}.`
    },
    {
      label: "Ask",
      className: "normal",
      title: "Run one question",
      body: firstQuestion?.question || `Run the first question for $${config.ticker}.`
    },
    {
      label: "Trust",
      className: context.routeScore < 65 ? "watch" : "normal",
      title: "Show why it is credible",
      body: "Point to citations, source audit, question guard, and the evidence stack before discussing conclusions."
    },
    {
      label: "Close",
      className: "normal",
      title: "Export or remember",
      body: `Close with ${config.output.toLowerCase()}, then store the learning in the memory vault.`
    }
  ];
}

function makeNavigatorDataLabel(config, sourceCount, importedSourceCount) {
  if (config.dataPath === "Your data") return importedSourceCount ? `${importedSourceCount} imported source${importedSourceCount === 1 ? "" : "s"}` : "import source first";
  if (config.dataPath === "SEC bridge") return sourceCount ? `${sourceCount} source proxy` : "metadata fallback";
  return `${sourceCount} sample source${sourceCount === 1 ? "" : "s"}`;
}

function renderNavigatorStepRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No route yet</strong><span>Build a route to see the guided path.</span></div>`;
  }
  return rows.map((row) => `
    <div class="navigator-step-row ${escapeAttr(row.className || "normal")}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)}</em>
      </div>
    </div>
  `).join("");
}

function renderNavigatorQuestionRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No questions yet</strong><span>Build a route to generate first asks.</span></div>`;
  }
  return rows.map((row) => `
    <button class="navigator-question-row ${escapeAttr(row.className || "normal")}" type="button" data-navigator-question="${escapeAttr(row.question)}">
      <span>${escapeHtml(row.priority)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.question)} ${escapeHtml(row.body)}</em>
      </div>
    </button>
  `).join("");
}

function renderNavigatorScriptRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No demo script yet</strong><span>Build a route to generate a demo script.</span></div>`;
  }
  return rows.map((row) => `
    <div class="navigator-script-row ${escapeAttr(row.className || "normal")}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)}</em>
      </div>
    </div>
  `).join("");
}

function readGuidedNavigatorConfig() {
  return normalizeGuidedNavigatorConfig({
    objective: els.guidedNavigatorObjective.value,
    ticker: els.guidedNavigatorTicker.value,
    dataPath: els.guidedNavigatorDataPath.value,
    timeBudget: els.guidedNavigatorTimeBudget.value,
    output: els.guidedNavigatorOutput.value,
    audience: els.guidedNavigatorAudience.value,
    note: els.guidedNavigatorNote.value
  });
}

function syncGuidedNavigatorInputs() {
  if (!els.guidedNavigatorObjective) return;
  const config = normalizeGuidedNavigatorConfig(state.guidedNavigatorConfig || getDefaultGuidedNavigatorConfig());
  els.guidedNavigatorObjective.value = config.objective;
  els.guidedNavigatorTicker.value = config.ticker;
  els.guidedNavigatorDataPath.value = config.dataPath;
  els.guidedNavigatorTimeBudget.value = config.timeBudget;
  els.guidedNavigatorOutput.value = config.output;
  els.guidedNavigatorAudience.value = config.audience;
  els.guidedNavigatorNote.value = config.note;
}

function normalizeGuidedNavigatorConfig(config) {
  const defaults = getDefaultGuidedNavigatorConfig();
  const ticker = normalizeTicker(String(config.ticker || defaults.ticker).replace(/^\$/, "")) || defaults.ticker;
  return {
    objective: normalizeChoice(config.objective, ["Find risk quickly", "Compare companies", "Check valuation", "Prep earnings call", "Portfolio action"], defaults.objective),
    ticker,
    dataPath: normalizeChoice(config.dataPath, ["Sample data", "Your data", "SEC bridge"], defaults.dataPath),
    timeBudget: normalizeChoice(config.timeBudget, ["2 minutes", "10 minutes", "Full research pass"], defaults.timeBudget),
    output: normalizeChoice(config.output, ["Cited brief", "IC memo", "Portfolio queue"], defaults.output),
    audience: normalizeChoice(config.audience, ["Retail investor", "Power user", "Pilot customer"], defaults.audience),
    note: String(config.note || defaults.note).slice(0, 420)
  };
}

function getDefaultGuidedNavigatorConfig() {
  const ticker = state.tickerFocus?.rawTicker || state.researchOutcomeConfig?.ticker || state.portfolioActionConfig?.ticker || state.marketSettings?.ticker || "NVDA";
  return {
    objective: "Find risk quickly",
    ticker: normalizeTicker(ticker) || "NVDA",
    dataPath: state.uploadedDocs.length ? "Your data" : "Sample data",
    timeBudget: "2 minutes",
    output: "Cited brief",
    audience: "Retail investor",
    note: "Guide a first-time user from objective to first cited answer, then show the next verification or export step."
  };
}

function hydrateGuidedNavigatorFromDesk() {
  const ticker = state.tickerFocus?.rawTicker || state.selectedTicker || state.marketSettings?.ticker || state.researchOutcomeConfig?.ticker || "NVDA";
  const lastQuestion = String(els.queryInput?.value || state.lastAnswerModel?.question || "").toLowerCase();
  let objective = "Find risk quickly";
  if (lastQuestion.includes("compare") || lastQuestion.includes("better")) objective = "Compare companies";
  else if (lastQuestion.includes("valuation") || lastQuestion.includes("assumption")) objective = "Check valuation";
  else if (lastQuestion.includes("earnings") || lastQuestion.includes("call") || lastQuestion.includes("management")) objective = "Prep earnings call";
  else if (lastQuestion.includes("portfolio") || lastQuestion.includes("position") || lastQuestion.includes("weight")) objective = "Portfolio action";
  const sourceCount = countPortfolioSources(ticker, resolvePortfolioCompany(ticker).proxyTicker);
  state.guidedNavigatorConfig = normalizeGuidedNavigatorConfig({
    ...(state.guidedNavigatorConfig || getDefaultGuidedNavigatorConfig()),
    objective,
    ticker,
    dataPath: state.uploadedDocs.length ? "Your data" : sourceCount ? "Sample data" : "SEC bridge",
    timeBudget: objective === "Portfolio action" || objective === "Compare companies" ? "10 minutes" : "2 minutes",
    output: objective === "Portfolio action" ? "Portfolio queue" : objective === "Compare companies" ? "IC memo" : "Cited brief",
    audience: objective === "Find risk quickly" ? "Retail investor" : "Power user",
    note: `Hydrated from current desk state for ${ticker}: ${sourceCount} enabled source${sourceCount === 1 ? "" : "s"}, objective ${objective.toLowerCase()}.`
  });
}

function runNavigatorQuestion(question) {
  if (!question || !els.queryInput) return;
  els.queryInput.value = question;
  state.lastQuestionSecurity = assessTextSecurity(question, "Question");
  renderQuestionSecurityStrip();
  renderSecurityPosture();
  syncTickerFocus(question);
  document.querySelector("#desk")?.scrollIntoView({ behavior: "smooth", block: "start" });
  submitCurrentQuestion();
}

function loadGuidedNavigatorConfig() {
  return normalizeGuidedNavigatorConfig(loadJson(STORAGE_KEYS.guidedNavigator, getDefaultGuidedNavigatorConfig()));
}

function saveGuidedNavigatorConfig() {
  saveJson(STORAGE_KEYS.guidedNavigator, normalizeGuidedNavigatorConfig(state.guidedNavigatorConfig || getDefaultGuidedNavigatorConfig()));
}

function exportGuidedNavigatorBrief() {
  const snapshot = state.currentNavigator || buildGuidedNavigatorSnapshot();
  const date = new Date().toISOString().slice(0, 10);
  const content = [
    "# CiteAlpha Guided Research Navigator",
    "",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    "## Route Setup",
    "",
    `- Objective: ${snapshot.config.objective}`,
    `- Ticker: ${snapshot.config.ticker}`,
    `- Company lens: ${snapshot.company.name}`,
    `- Data path: ${snapshot.config.dataPath}`,
    `- Time budget: ${snapshot.config.timeBudget}`,
    `- Output: ${snapshot.config.output}`,
    `- Audience: ${snapshot.config.audience}`,
    `- Note: ${snapshot.config.note}`,
    "",
    "## Scorecard",
    "",
    `- Route score: ${snapshot.routeScore}/100 (${snapshot.scoreLabel})`,
    `- Data readiness: ${snapshot.dataReadiness}% (${snapshot.dataLabel})`,
    `- Evidence sources: ${snapshot.sourceCount}`,
    `- Imported sources: ${snapshot.importedSourceCount}`,
    `- Friction items: ${snapshot.frictionCount}`,
    `- First question: ${snapshot.firstQuestion}`,
    "",
    "## Suggested Path",
    "",
    ...snapshot.stepRows.map((row) => `- ${row.label}. ${row.title}: ${row.body}`),
    "",
    "## First Questions",
    "",
    ...snapshot.questionRows.map((row) => `- ${row.priority} | ${row.title}: ${row.question} ${row.body}`),
    "",
    "## Demo Script",
    "",
    ...snapshot.scriptRows.map((row) => `- ${row.label} | ${row.title}: ${row.body}`),
    "",
    "## Product Note",
    "",
    "This guided navigator is a client-side onboarding workflow. Production should connect it to user roles, source permissions, backend account state, and analytics so each first-run path can be measured and improved safely."
  ].join("\n");
  downloadTextFile(`citealpha-guided-navigator-${snapshot.config.ticker.toLowerCase()}-${date}.md`, content, "text/markdown;charset=utf-8");
  flashButtonLabel(els.exportNavigatorBrief, "Exported");
}

function renderPilotDemoConcierge() {
  if (!els.pilotDemoMetricGrid) return;
  if (!state.pilotDemoConfig) state.pilotDemoConfig = loadPilotDemoConfig();
  syncPilotDemoInputs();
  const snapshot = buildPilotDemoSnapshot();
  state.currentPilotDemo = snapshot;
  els.pilotDemoMetricGrid.innerHTML = [
    { label: "Demo score", value: `${snapshot.demoScore}/100`, sub: snapshot.scoreLabel },
    { label: "Proof moment", value: snapshot.config.moment, sub: snapshot.config.proof },
    { label: "Objection risk", value: `${snapshot.objectionRisk}/100`, sub: snapshot.config.objection },
    { label: "Close", value: snapshot.config.nextStep, sub: snapshot.closeLabel }
  ].map((metric) => `
    <div class="demo-metric">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(String(metric.value))}</strong>
      <em>${escapeHtml(metric.sub)}</em>
    </div>
  `).join("");
  els.pilotDemoFlowCount.textContent = String(snapshot.flowRows.length);
  els.pilotDemoFlowList.innerHTML = renderPilotDemoFlowRows(snapshot.flowRows);
  els.pilotDemoObjectionCount.textContent = String(snapshot.objectionRows.length);
  els.pilotDemoObjectionList.innerHTML = renderPilotDemoObjectionRows(snapshot.objectionRows);
  els.pilotDemoCloseCount.textContent = String(snapshot.closeRows.length);
  els.pilotDemoCloseList.innerHTML = renderPilotDemoCloseRows(snapshot.closeRows);
  renderPilotFeedbackTracker();
}

function buildPilotDemoSnapshot() {
  const config = normalizePilotDemoConfig(state.pilotDemoConfig || getDefaultPilotDemoConfig());
  const navigator = state.currentNavigator || buildGuidedNavigatorSnapshot();
  const company = resolvePortfolioCompany(config.ticker);
  const sourceCount = countPortfolioSources(config.ticker, company.proxyTicker);
  const importedSourceCount = state.uploadedDocs.filter((doc) => doc.ticker === config.ticker || doc.ticker === company.proxyTicker).length;
  const demoQuestion = makePilotDemoQuestion(config, navigator, { sourceCount });
  const proofFit = calculatePilotDemoProofFit(config, navigator, { sourceCount, importedSourceCount });
  const objectionRisk = calculatePilotDemoObjectionRisk(config, navigator, { sourceCount, importedSourceCount });
  const lengthFit = config.length === "5 minutes" ? 86 : config.length === "15 minutes" ? 78 : 68;
  const conversionFit = config.nextStep === "Start paid plan" ? Math.max(45, navigator.routeScore - 10) : config.nextStep === "Join pilot" ? 88 : 76;
  const demoScore = Math.max(1, Math.min(100, Math.round(
    navigator.routeScore * 0.28 +
    navigator.dataReadiness * 0.16 +
    proofFit * 0.22 +
    Math.max(0, 100 - objectionRisk) * 0.14 +
    lengthFit * 0.1 +
    conversionFit * 0.1
  )));
  const flowRows = buildPilotDemoFlowRows(config, navigator, demoQuestion, { sourceCount, importedSourceCount, proofFit });
  const objectionRows = buildPilotDemoObjectionRows(config, navigator, { sourceCount, importedSourceCount, objectionRisk });
  const closeRows = buildPilotDemoCloseRows(config, navigator, demoQuestion, { demoScore, sourceCount, importedSourceCount });
  return {
    config,
    navigator,
    company,
    sourceCount,
    importedSourceCount,
    demoQuestion,
    proofFit,
    objectionRisk,
    demoScore,
    scoreLabel: demoScore >= 82 ? "Pilot-ready demo" : demoScore >= 65 ? "Good with setup" : "Needs proof prep",
    closeLabel: config.nextStep === "Start paid plan" ? "subscription test" : config.nextStep === "Upload source pack" ? "data commitment" : config.nextStep === "Book follow-up" ? "next meeting" : "pilot conversion",
    flowRows,
    objectionRows,
    closeRows
  };
}

function calculatePilotDemoProofFit(config, navigator, context) {
  let score = 62 + Math.min(context.sourceCount, 4) * 7;
  if (config.proof === "Citations first") score += navigator.sourceCount >= 2 ? 12 : 2;
  if (config.proof === "Workflow speed") score += config.length === "5 minutes" ? 14 : 8;
  if (config.proof === "Trust controls") score += 12;
  if (config.proof === "Exportable memo") score += config.nextStep === "Start paid plan" ? 8 : 12;
  if (config.moment === "Quality guardrails") score += 8;
  if (config.moment === "Portfolio workflow" && navigator.config.output === "Portfolio queue") score += 8;
  if (context.importedSourceCount) score += 6;
  return Math.max(1, Math.min(100, Math.round(score)));
}

function calculatePilotDemoObjectionRisk(config, navigator, context) {
  let risk = 38;
  if (config.objection === "Can I trust the answer?") risk += context.sourceCount < 2 ? 24 : 8;
  if (config.objection === "Where does data come from?") risk += context.importedSourceCount ? 4 : 18;
  if (config.objection === "Why pay for this?") risk += config.nextStep === "Start paid plan" ? 18 : 9;
  if (config.objection === "Is this investment advice?") risk += config.proof === "Trust controls" ? 3 : 14;
  if (navigator.frictionCount) risk += navigator.frictionCount * 5;
  if (config.length === "5 minutes") risk -= 6;
  return Math.max(1, Math.min(100, Math.round(risk)));
}

function buildPilotDemoFlowRows(config, navigator, demoQuestion, context) {
  return [
    {
      label: "Open",
      className: "normal",
      title: `Frame for ${config.persona.toLowerCase()}`,
      body: `Lead with the Bloomberg gap: fast cited research without terminal pricing. Keep the promise tied to ${config.moment.toLowerCase()}.`
    },
    {
      label: "Run",
      className: context.sourceCount ? "normal" : "watch",
      title: "Run the proof question",
      question: demoQuestion,
      body: `${demoQuestion} Use the ${navigator.config.dataPath.toLowerCase()} path and keep citations visible.`
    },
    {
      label: "Prove",
      className: config.proof === "Trust controls" || context.sourceCount >= 2 ? "normal" : "watch",
      title: `Show ${config.proof.toLowerCase()}`,
      body: makePilotDemoProofLine(config, navigator, context)
    },
    {
      label: "Export",
      className: "normal",
      title: "Turn answer into artifact",
      body: config.nextStep === "Start paid plan"
        ? "Export PDF or MD, then point to saved briefs and repeatable workflows as the paid habit."
        : "Export the brief, then ask for the pilot commitment while the evidence is on screen."
    }
  ];
}

function makePilotDemoProofLine(config, navigator, context) {
  if (config.proof === "Citations first") return `${context.sourceCount} enabled source${context.sourceCount === 1 ? "" : "s"} and the evidence stack make the answer auditable.`;
  if (config.proof === "Workflow speed") return `${config.length} demo: route score ${navigator.routeScore}/100, first question ready, answer/export in one pass.`;
  if (config.proof === "Trust controls") return "Show question guard, source audit, research-only disclaimer, and citation cards before the conclusion.";
  return "Export the memo and explain that the artifact is the habit users pay for: repeatable, cited, and reviewable.";
}

function buildPilotDemoObjectionRows(config, navigator, context) {
  const selected = makePilotDemoObjectionResponse(config, navigator, context);
  return [
    {
      label: "Main",
      className: context.objectionRisk >= 70 ? "high" : context.objectionRisk >= 52 ? "watch" : "normal",
      title: config.objection,
      body: selected
    },
    {
      label: "Trust",
      className: navigator.frictionCount ? "watch" : "normal",
      title: "Show evidence before opinion",
      body: "Keep the flow anchored in citations, source freshness, data mode, and exportable memo output."
    },
    {
      label: "Scope",
      className: config.objection === "Is this investment advice?" ? "normal" : "watch",
      title: "Research software boundary",
      body: "Say clearly that CiteAlpha supports research workflows and scenario analysis, not personalized investment advice."
    },
    {
      label: "Data",
      className: context.importedSourceCount || config.proof === "Trust controls" ? "normal" : "watch",
      title: "Data path explanation",
      body: context.importedSourceCount
        ? `${context.importedSourceCount} imported source${context.importedSourceCount === 1 ? "" : "s"} prove the user's own-data workflow.`
        : "Use demo packs for the product tour, then ask the pilot user to upload one real source pack."
    }
  ];
}

function makePilotDemoObjectionResponse(config, navigator, context) {
  if (config.objection === "Can I trust the answer?") {
    return `Trust comes from cited passages, source audit, question guard, and visible limitations. Route score: ${navigator.routeScore}/100.`;
  }
  if (config.objection === "Where does data come from?") {
    return context.importedSourceCount
      ? "The demo is already using imported user data plus sample fallback where needed."
      : "The prototype uses sample data and demo packs; the paid version connects SEC filings, transcripts, and user uploads behind a backend.";
  }
  if (config.objection === "Why pay for this?") {
    return "The paid habit is not one answer; it is faster cited research, saved briefs, exports, valuation read-throughs, and repeatable workflows.";
  }
  return "CiteAlpha is research software: it cites evidence, frames scenarios, and avoids trade execution or personalized advice.";
}

function buildPilotDemoCloseRows(config, navigator, demoQuestion, context) {
  return [
    {
      label: "Ask",
      className: "normal",
      title: `Close toward ${config.nextStep.toLowerCase()}`,
      body: makePilotDemoCloseAsk(config, context)
    },
    {
      label: "Signal",
      className: context.demoScore >= 82 ? "normal" : "watch",
      title: "Measure pilot signal",
      body: `${context.demoScore}/100 demo score. Track if the user runs a second question, exports a brief, or uploads a source pack.`
    },
    {
      label: "Next Q",
      className: "normal",
      title: "Keep the conversation moving",
      question: makePilotDemoCloseQuestion(config, navigator, demoQuestion),
      body: "Use this as the follow-up question if the pilot user wants a second proof moment."
    },
    {
      label: "Owner",
      className: config.persona === "Founder demo" ? "watch" : "normal",
      title: "Founder follow-up",
      body: "Send the exported demo pack, ask for one real filing/call source, and schedule the next test around their preferred ticker."
    }
  ];
}

function makePilotDemoCloseAsk(config, context) {
  if (config.nextStep === "Upload source pack") return `Ask for one ${config.ticker} filing, transcript, or model note to prove the Your Data path.`;
  if (config.nextStep === "Book follow-up") return "Ask for a second session with a real ticker and one decision the user is researching this week.";
  if (config.nextStep === "Start paid plan") return "Ask whether the exported memo and repeatable workflow justify a Starter or Pro plan test.";
  return `Ask the user to join the pilot and bring one real question about $${config.ticker}.`;
}

function makePilotDemoCloseQuestion(config, navigator, demoQuestion) {
  if (config.moment === "Evidence trace") return `Which source passage would a skeptical user challenge first in the $${config.ticker} answer?`;
  if (config.moment === "Valuation lens") return `Which valuation assumption should I flex first after the $${config.ticker} evidence read?`;
  if (config.moment === "Portfolio workflow") return `What would change the portfolio action plan for $${config.ticker} after this demo answer?`;
  if (config.moment === "Quality guardrails") return `What unsupported claim risk should I check before exporting the $${config.ticker} memo?`;
  return demoQuestion || navigator.firstQuestion || `What are the risks for $${config.ticker}?`;
}

function makePilotDemoQuestion(config, navigator, context) {
  const ticker = config.ticker;
  if (config.moment === "Evidence trace") return `Which source passages best support the answer for $${ticker}, and where is the evidence thin?`;
  if (config.moment === "Valuation lens") return `What valuation assumptions should I flex first before buying $${ticker}?`;
  if (config.moment === "Portfolio workflow") return `Is my $${ticker} position too concentrated given filing risks, valuation, and market signal?`;
  if (config.moment === "Quality guardrails") return `What claims in the $${ticker} answer need stronger citation support before export?`;
  if (context.sourceCount < 1) return `What are the risks for $${ticker}, and which source should I import next to support the answer?`;
  return `What are the risks for $${ticker}?`;
}

function renderPilotDemoFlowRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No demo flow</strong><span>Build a demo to generate the launch call flow.</span></div>`;
  }
  return rows.map((row) => {
    const tag = row.question ? "button" : "div";
    const attr = row.question ? ` type="button" data-demo-question="${escapeAttr(row.question)}"` : "";
    return `
      <${tag} class="demo-flow-row ${escapeAttr(row.className || "normal")}"${attr}>
        <span>${escapeHtml(row.label)}</span>
        <div>
          <strong>${escapeHtml(row.title)}</strong>
          <em>${escapeHtml(row.body)}</em>
        </div>
      </${tag}>
    `;
  }).join("");
}

function renderPilotDemoObjectionRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No objections</strong><span>Build a demo to prepare response cards.</span></div>`;
  }
  return rows.map((row) => `
    <div class="demo-objection-row ${escapeAttr(row.className || "normal")}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)}</em>
      </div>
    </div>
  `).join("");
}

function renderPilotDemoCloseRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No close plan</strong><span>Build a demo to generate next-step asks.</span></div>`;
  }
  return rows.map((row) => {
    const tag = row.question ? "button" : "div";
    const attr = row.question ? ` type="button" data-demo-close-question="${escapeAttr(row.question)}"` : "";
    return `
      <${tag} class="demo-close-row ${escapeAttr(row.className || "normal")}"${attr}>
        <span>${escapeHtml(row.label)}</span>
        <div>
          <strong>${escapeHtml(row.title)}</strong>
          <em>${escapeHtml(row.question ? `${row.question} ${row.body}` : row.body)}</em>
        </div>
      </${tag}>
    `;
  }).join("");
}

function readPilotDemoConfig() {
  return normalizePilotDemoConfig({
    persona: els.pilotDemoPersona.value,
    moment: els.pilotDemoMoment.value,
    ticker: els.pilotDemoTicker.value,
    proof: els.pilotDemoProof.value,
    length: els.pilotDemoLength.value,
    objection: els.pilotDemoObjection.value,
    nextStep: els.pilotDemoNextStep.value,
    note: els.pilotDemoNote.value
  });
}

function syncPilotDemoInputs() {
  if (!els.pilotDemoPersona) return;
  const config = normalizePilotDemoConfig(state.pilotDemoConfig || getDefaultPilotDemoConfig());
  els.pilotDemoPersona.value = config.persona;
  els.pilotDemoMoment.value = config.moment;
  els.pilotDemoTicker.value = config.ticker;
  els.pilotDemoProof.value = config.proof;
  els.pilotDemoLength.value = config.length;
  els.pilotDemoObjection.value = config.objection;
  els.pilotDemoNextStep.value = config.nextStep;
  els.pilotDemoNote.value = config.note;
}

function normalizePilotDemoConfig(config) {
  const defaults = getDefaultPilotDemoConfig();
  const ticker = normalizeTicker(String(config.ticker || defaults.ticker).replace(/^\$/, "")) || defaults.ticker;
  return {
    persona: normalizeChoice(config.persona, ["Retail investor", "Power user", "Angel investor", "RIA advisor", "Founder demo"], defaults.persona),
    moment: normalizeChoice(config.moment, ["Risk answer", "Evidence trace", "Valuation lens", "Portfolio workflow", "Quality guardrails"], defaults.moment),
    ticker,
    proof: normalizeChoice(config.proof, ["Citations first", "Workflow speed", "Trust controls", "Exportable memo"], defaults.proof),
    length: normalizeChoice(config.length, ["5 minutes", "15 minutes", "30 minutes"], defaults.length),
    objection: normalizeChoice(config.objection, ["Can I trust the answer?", "Where does data come from?", "Why pay for this?", "Is this investment advice?"], defaults.objection),
    nextStep: normalizeChoice(config.nextStep, ["Join pilot", "Upload source pack", "Book follow-up", "Start paid plan"], defaults.nextStep),
    note: String(config.note || defaults.note).slice(0, 420)
  };
}

function getDefaultPilotDemoConfig() {
  const nav = state.guidedNavigatorConfig || getDefaultGuidedNavigatorConfig();
  return {
    persona: nav.audience === "Power user" ? "Power user" : "Retail investor",
    moment: nav.objective === "Check valuation" ? "Valuation lens" : nav.objective === "Portfolio action" ? "Portfolio workflow" : nav.objective === "Compare companies" ? "Evidence trace" : "Risk answer",
    ticker: normalizeTicker(nav.ticker) || "NVDA",
    proof: nav.output === "IC memo" ? "Exportable memo" : nav.dataPath === "Your data" ? "Citations first" : "Trust controls",
    length: nav.timeBudget === "2 minutes" ? "5 minutes" : nav.timeBudget === "10 minutes" ? "15 minutes" : "30 minutes",
    objection: "Can I trust the answer?",
    nextStep: "Join pilot",
    note: "Keep the demo fast: ask one question, show citations, show guardrails, export a brief, then ask for the next pilot commitment."
  };
}

function hydratePilotDemoFromNavigator() {
  const nav = state.currentNavigator || buildGuidedNavigatorSnapshot();
  state.pilotDemoConfig = normalizePilotDemoConfig({
    ...(state.pilotDemoConfig || getDefaultPilotDemoConfig()),
    persona: nav.config.audience === "Pilot customer" ? "Founder demo" : nav.config.audience,
    moment: nav.config.objective === "Check valuation" ? "Valuation lens" : nav.config.objective === "Portfolio action" ? "Portfolio workflow" : nav.config.objective === "Compare companies" ? "Evidence trace" : nav.config.objective === "Prep earnings call" ? "Evidence trace" : "Risk answer",
    ticker: nav.config.ticker,
    proof: nav.config.output === "IC memo" ? "Exportable memo" : nav.dataReadiness < 70 ? "Trust controls" : "Citations first",
    length: nav.config.timeBudget === "2 minutes" ? "5 minutes" : nav.config.timeBudget === "10 minutes" ? "15 minutes" : "30 minutes",
    objection: nav.frictionCount ? "Where does data come from?" : "Can I trust the answer?",
    nextStep: nav.config.dataPath === "Your data" ? "Book follow-up" : "Upload source pack",
    note: `Hydrated from Research Navigator: ${nav.config.objective}, ${nav.routeScore}/100 route, ${nav.dataReadiness}% data readiness.`
  });
}

function loadPilotDemoConfig() {
  return normalizePilotDemoConfig(loadJson(STORAGE_KEYS.pilotDemo, getDefaultPilotDemoConfig()));
}

function savePilotDemoConfig() {
  saveJson(STORAGE_KEYS.pilotDemo, normalizePilotDemoConfig(state.pilotDemoConfig || getDefaultPilotDemoConfig()));
}

function exportPilotDemoBrief() {
  const snapshot = state.currentPilotDemo || buildPilotDemoSnapshot();
  const date = new Date().toISOString().slice(0, 10);
  const content = [
    "# CiteAlpha Pilot Demo Concierge",
    "",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    "## Demo Setup",
    "",
    `- Persona: ${snapshot.config.persona}`,
    `- Demo moment: ${snapshot.config.moment}`,
    `- Ticker: ${snapshot.config.ticker}`,
    `- Company lens: ${snapshot.company.name}`,
    `- Proof style: ${snapshot.config.proof}`,
    `- Call length: ${snapshot.config.length}`,
    `- Likely objection: ${snapshot.config.objection}`,
    `- Next step: ${snapshot.config.nextStep}`,
    `- Note: ${snapshot.config.note}`,
    "",
    "## Scorecard",
    "",
    `- Demo score: ${snapshot.demoScore}/100 (${snapshot.scoreLabel})`,
    `- Proof fit: ${snapshot.proofFit}/100`,
    `- Objection risk: ${snapshot.objectionRisk}/100`,
    `- Source count: ${snapshot.sourceCount}`,
    `- Imported sources: ${snapshot.importedSourceCount}`,
    `- Demo question: ${snapshot.demoQuestion}`,
    "",
    "## Demo Flow",
    "",
    ...snapshot.flowRows.map((row) => `- ${row.label} | ${row.title}: ${row.question ? `${row.question} ` : ""}${row.body}`),
    "",
    "## Objection Handling",
    "",
    ...snapshot.objectionRows.map((row) => `- ${row.label} | ${row.title}: ${row.body}`),
    "",
    "## Close Plan",
    "",
    ...snapshot.closeRows.map((row) => `- ${row.label} | ${row.title}: ${row.question ? `${row.question} ` : ""}${row.body}`),
    "",
    "## Product Note",
    "",
    "This pilot demo concierge is a client-side launch workflow. Production should pair demos with consented analytics, account state, source permissions, CRM records, and billing/subscription status before using it for live sales operations."
  ].join("\n");
  downloadTextFile(`citealpha-pilot-demo-${snapshot.config.ticker.toLowerCase()}-${date}.md`, content, "text/markdown;charset=utf-8");
  flashButtonLabel(els.exportPilotDemoBrief, "Exported");
}

function renderPilotFeedbackTracker() {
  if (!els.pilotFeedbackMetricGrid) return;
  if (!state.pilotFeedbackConfig) state.pilotFeedbackConfig = loadPilotFeedbackConfig();
  syncPilotFeedbackInputs();
  const snapshot = buildPilotFeedbackSnapshot();
  state.currentPilotFeedback = snapshot;
  els.pilotFeedbackMetricGrid.innerHTML = [
    { label: "Conversion", value: `${snapshot.conversionScore}/100`, sub: snapshot.scoreLabel },
    { label: "Stage", value: snapshot.stage, sub: snapshot.stageNote },
    { label: "Top ask", value: snapshot.config.feature, sub: snapshot.config.budget },
    { label: "Signals", value: snapshot.savedSignals.length, sub: `${snapshot.hotSignals} hot / ${snapshot.warmSignals} warm` }
  ].map((metric) => `
    <div class="feedback-metric">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(String(metric.value))}</strong>
      <em>${escapeHtml(metric.sub)}</em>
    </div>
  `).join("");
  els.pilotFeedbackFollowCount.textContent = String(snapshot.followRows.length);
  els.pilotFeedbackFollowList.innerHTML = renderPilotFeedbackFollowRows(snapshot.followRows);
  els.pilotFeedbackLearningCount.textContent = String(snapshot.learningRows.length);
  els.pilotFeedbackLearningList.innerHTML = renderPilotFeedbackLearningRows(snapshot.learningRows);
  els.pilotFeedbackSignalCount.textContent = String(snapshot.savedSignals.length);
  els.pilotFeedbackSignalList.innerHTML = renderPilotFeedbackSignalRows(snapshot.savedSignals);
  renderPilotCohortCommandCenter();
}

function buildPilotFeedbackSnapshot() {
  const config = normalizePilotFeedbackConfig(state.pilotFeedbackConfig || getDefaultPilotFeedbackConfig());
  const demo = state.currentPilotDemo || buildPilotDemoSnapshot();
  const resultScore = scorePilotFeedbackResult(config.result);
  const budgetScore = scorePilotFeedbackBudget(config.budget);
  const urgencyScore = scorePilotFeedbackUrgency(config.urgency);
  const trustScore = scorePilotFeedbackTrust(config.trust);
  const nextStepScore = scorePilotFeedbackNextStep(config.nextStep);
  const conversionScore = Math.max(1, Math.min(100, Math.round(
    resultScore * 0.24 +
    budgetScore * 0.2 +
    urgencyScore * 0.14 +
    trustScore * 0.14 +
    nextStepScore * 0.1 +
    demo.demoScore * 0.18
  )));
  const stage = conversionScore >= 82 ? "Hot" : conversionScore >= 64 ? "Warm" : conversionScore >= 42 ? "Nurture" : "Archive";
  const followRows = buildPilotFeedbackFollowRows(config, demo, conversionScore, stage);
  const learningRows = buildPilotFeedbackLearningRows(config, demo, conversionScore, stage);
  const savedSignals = normalizePilotFeedbackSignals(state.pilotFeedbackSignals || []);
  const hotSignals = savedSignals.filter((signal) => signal.score >= 82).length;
  const warmSignals = savedSignals.filter((signal) => signal.score >= 64 && signal.score < 82).length;
  return {
    config,
    demo,
    resultScore,
    budgetScore,
    urgencyScore,
    trustScore,
    nextStepScore,
    conversionScore,
    stage,
    scoreLabel: conversionScore >= 82 ? "Ask for commitment" : conversionScore >= 64 ? "Follow up soon" : conversionScore >= 42 ? "Needs more proof" : "Low near-term intent",
    stageNote: makePilotFeedbackStageNote(stage, config),
    followRows,
    learningRows,
    savedSignals,
    hotSignals,
    warmSignals
  };
}

function scorePilotFeedbackResult(result) {
  if (result === "Very interested") return 96;
  if (result === "Interested") return 76;
  if (result === "Needs proof") return 52;
  return 24;
}

function scorePilotFeedbackBudget(budget) {
  if (budget === "$49/mo") return 96;
  if (budget === "$29/mo") return 84;
  if (budget === "$10/mo") return 68;
  return 38;
}

function scorePilotFeedbackUrgency(urgency) {
  if (urgency === "This week") return 94;
  if (urgency === "This month") return 72;
  return 38;
}

function scorePilotFeedbackTrust(trust) {
  if (trust === "Trusts citations") return 92;
  if (trust === "Wants real filings") return 68;
  if (trust === "Needs compliance clarity") return 58;
  return 48;
}

function scorePilotFeedbackNextStep(nextStep) {
  if (nextStep === "Offer paid pilot") return 94;
  if (nextStep === "Book second demo") return 78;
  if (nextStep === "Ask for source pack") return 72;
  return 64;
}

function makePilotFeedbackStageNote(stage, config) {
  if (stage === "Hot") return `${config.nextStep} within 24 hours`;
  if (stage === "Warm") return `follow up with ${config.feature.toLowerCase()}`;
  if (stage === "Nurture") return "send proof before asking for payment";
  return "save learning, avoid heavy follow-up";
}

function buildPilotFeedbackFollowRows(config, demo, conversionScore, stage) {
  return [
    {
      label: stage,
      className: stage === "Hot" ? "normal" : stage === "Warm" ? "watch" : "high",
      title: "Next conversion move",
      question: makePilotFeedbackFollowQuestion(config, demo, stage),
      body: makePilotFeedbackFollowBody(config, conversionScore, stage)
    },
    {
      label: "Proof",
      className: config.trust === "Trusts citations" ? "normal" : "watch",
      title: "Trust follow-up",
      question: `Which $${demo.config.ticker} source passage should I show next to address: ${config.trust}?`,
      body: `${config.trust}. Use the evidence stack before asking for commitment.`
    },
    {
      label: "Feature",
      className: config.feature === "Real SEC data" || config.feature === "Earnings call transcripts" ? "watch" : "normal",
      title: "Requested feature response",
      question: `What should CiteAlpha show next to prove ${config.feature.toLowerCase()} for $${demo.config.ticker}?`,
      body: `${config.feature} is the top requested capability from this lead.`
    },
    {
      label: "Memo",
      className: config.nextStep === "Send memo" ? "normal" : "watch",
      title: "Artifact follow-up",
      question: `Draft the follow-up memo outline for $${demo.config.ticker} after this pilot feedback.`,
      body: "Send a concise artifact while the demo memory is fresh."
    }
  ];
}

function makePilotFeedbackFollowQuestion(config, demo, stage) {
  if (config.nextStep === "Ask for source pack") return `Which ${demo.config.ticker} filing or call transcript should I ask this lead to upload for the next proof?`;
  if (config.nextStep === "Offer paid pilot") return `What paid-pilot scope should I offer after a ${stage.toLowerCase()} $${demo.config.ticker} demo signal?`;
  if (config.nextStep === "Book second demo") return `What second-demo question should I prepare for $${demo.config.ticker} based on ${config.feature.toLowerCase()} demand?`;
  return `What one-page memo should I send after this $${demo.config.ticker} pilot demo?`;
}

function makePilotFeedbackFollowBody(config, conversionScore, stage) {
  if (stage === "Hot") return `${conversionScore}/100 conversion signal. Ask for ${config.nextStep.toLowerCase()} now.`;
  if (stage === "Warm") return `${conversionScore}/100 signal. Send proof tied to ${config.feature.toLowerCase()} before the next ask.`;
  if (stage === "Nurture") return `${conversionScore}/100 signal. Capture learning and follow up when real data is available.`;
  return `${conversionScore}/100 signal. Store the objection and avoid aggressive conversion steps.`;
}

function buildPilotFeedbackLearningRows(config, demo, conversionScore, stage) {
  const pricingLesson = config.budget === "Undecided"
    ? "Pricing needs a clearer value anchor before asking for payment."
    : `${config.budget} is the observed willingness-to-pay anchor.`;
  return [
    {
      label: "Persona",
      className: stage === "Hot" ? "normal" : "watch",
      title: `${config.segment} signal`,
      body: `${config.lead} is a ${config.segment.toLowerCase()} with ${config.result.toLowerCase()} reaction.`
    },
    {
      label: "Price",
      className: config.budget === "Undecided" ? "watch" : "normal",
      title: "Willingness to pay",
      body: pricingLesson
    },
    {
      label: "Trust",
      className: config.trust === "Concerned about hallucination" || config.trust === "Needs compliance clarity" ? "high" : "normal",
      title: "Trust blocker",
      body: `${config.trust}. Tie next build/demo to citations, source audit, compliance copy, or real filings.`
    },
    {
      label: "Build",
      className: config.feature === "Real SEC data" || config.feature === "Earnings call transcripts" ? "high" : "watch",
      title: "Product priority",
      body: `${config.feature} should influence the next product sprint if repeated across saved signals. Demo score was ${demo.demoScore}/100.`
    }
  ];
}

function renderPilotFeedbackFollowRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No follow-up queue</strong><span>Score feedback to generate follow-up actions.</span></div>`;
  }
  return rows.map((row) => `
    <button class="feedback-follow-row ${escapeAttr(row.className || "normal")}" type="button" data-feedback-question="${escapeAttr(row.question)}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.question)} ${escapeHtml(row.body)}</em>
      </div>
    </button>
  `).join("");
}

function renderPilotFeedbackLearningRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No product learning</strong><span>Product learning appears after feedback scoring.</span></div>`;
  }
  return rows.map((row) => `
    <div class="feedback-learning-row ${escapeAttr(row.className || "normal")}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)}</em>
      </div>
    </div>
  `).join("");
}

function renderPilotFeedbackSignalRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No saved signals</strong><span>Save a signal after a pilot call to build your launch evidence log.</span></div>`;
  }
  return rows.slice(0, 8).map((row) => `
    <div class="feedback-signal-row ${escapeAttr(row.score >= 82 ? "normal" : row.score >= 64 ? "watch" : "high")}">
      <span>${escapeHtml(String(row.score))}</span>
      <div>
        <strong>${escapeHtml(row.lead)} - ${escapeHtml(row.stage)}</strong>
        <em>${escapeHtml(row.segment)} | ${escapeHtml(row.result)} | ${escapeHtml(row.budget)} | ${escapeHtml(row.feature)} | ${escapeHtml(row.date)}</em>
      </div>
    </div>
  `).join("");
}

function readPilotFeedbackConfig() {
  return normalizePilotFeedbackConfig({
    lead: els.pilotFeedbackLead.value,
    segment: els.pilotFeedbackSegment.value,
    result: els.pilotFeedbackResult.value,
    budget: els.pilotFeedbackBudget.value,
    urgency: els.pilotFeedbackUrgency.value,
    trust: els.pilotFeedbackTrust.value,
    feature: els.pilotFeedbackFeature.value,
    nextStep: els.pilotFeedbackNextStep.value,
    note: els.pilotFeedbackNote.value
  });
}

function syncPilotFeedbackInputs() {
  if (!els.pilotFeedbackLead) return;
  const config = normalizePilotFeedbackConfig(state.pilotFeedbackConfig || getDefaultPilotFeedbackConfig());
  els.pilotFeedbackLead.value = config.lead;
  els.pilotFeedbackSegment.value = config.segment;
  els.pilotFeedbackResult.value = config.result;
  els.pilotFeedbackBudget.value = config.budget;
  els.pilotFeedbackUrgency.value = config.urgency;
  els.pilotFeedbackTrust.value = config.trust;
  els.pilotFeedbackFeature.value = config.feature;
  els.pilotFeedbackNextStep.value = config.nextStep;
  els.pilotFeedbackNote.value = config.note;
}

function normalizePilotFeedbackConfig(config) {
  const defaults = getDefaultPilotFeedbackConfig();
  return {
    lead: String(config.lead || defaults.lead).slice(0, 64),
    segment: normalizeChoice(config.segment, ["Retail investor", "Active trader", "Advisor", "Angel investor", "Creator / community"], defaults.segment),
    result: normalizeChoice(config.result, ["Interested", "Very interested", "Needs proof", "Not now"], defaults.result),
    budget: normalizeChoice(config.budget, ["$10/mo", "$29/mo", "$49/mo", "Undecided"], defaults.budget),
    urgency: normalizeChoice(config.urgency, ["This week", "This month", "Later"], defaults.urgency),
    trust: normalizeChoice(config.trust, ["Trusts citations", "Wants real filings", "Concerned about hallucination", "Needs compliance clarity"], defaults.trust),
    feature: normalizeChoice(config.feature, ["Real SEC data", "Earnings call transcripts", "Portfolio alerts", "PDF memo exports", "Watchlist workflow"], defaults.feature),
    nextStep: normalizeChoice(config.nextStep, ["Send memo", "Ask for source pack", "Book second demo", "Offer paid pilot"], defaults.nextStep),
    note: String(config.note || defaults.note).slice(0, 520)
  };
}

function getDefaultPilotFeedbackConfig() {
  const demo = state.pilotDemoConfig || getDefaultPilotDemoConfig();
  return {
    lead: `${demo.persona || "Pilot"} lead`,
    segment: demo.persona === "RIA advisor" ? "Advisor" : demo.persona === "Angel investor" ? "Angel investor" : demo.persona === "Power user" ? "Active trader" : "Retail investor",
    result: "Interested",
    budget: demo.nextStep === "Start paid plan" ? "$29/mo" : "$10/mo",
    urgency: demo.length === "5 minutes" ? "This week" : "This month",
    trust: demo.proof === "Trust controls" ? "Needs compliance clarity" : demo.proof === "Citations first" ? "Trusts citations" : "Wants real filings",
    feature: demo.moment === "Valuation lens" ? "PDF memo exports" : demo.moment === "Portfolio workflow" ? "Portfolio alerts" : demo.moment === "Evidence trace" ? "Earnings call transcripts" : "Real SEC data",
    nextStep: demo.nextStep === "Start paid plan" ? "Offer paid pilot" : demo.nextStep === "Upload source pack" ? "Ask for source pack" : demo.nextStep === "Book follow-up" ? "Book second demo" : "Send memo",
    note: "Capture the exact objection, the feature they asked for, and the next promise you made after the demo."
  };
}

function hydratePilotFeedbackFromDemo() {
  const demo = state.currentPilotDemo || buildPilotDemoSnapshot();
  state.pilotFeedbackConfig = normalizePilotFeedbackConfig({
    ...(state.pilotFeedbackConfig || getDefaultPilotFeedbackConfig()),
    lead: `${demo.config.persona} - ${demo.config.ticker}`,
    segment: demo.config.persona === "RIA advisor" ? "Advisor" : demo.config.persona === "Angel investor" ? "Angel investor" : demo.config.persona === "Power user" ? "Active trader" : "Retail investor",
    result: demo.demoScore >= 82 ? "Very interested" : demo.demoScore >= 65 ? "Interested" : "Needs proof",
    budget: demo.config.nextStep === "Start paid plan" ? "$29/mo" : demo.demoScore >= 82 ? "$29/mo" : "$10/mo",
    urgency: demo.demoScore >= 82 ? "This week" : "This month",
    trust: demo.config.objection === "Can I trust the answer?" ? "Trusts citations" : demo.config.objection === "Is this investment advice?" ? "Needs compliance clarity" : "Wants real filings",
    feature: demo.config.moment === "Portfolio workflow" ? "Portfolio alerts" : demo.config.moment === "Valuation lens" ? "PDF memo exports" : demo.config.moment === "Evidence trace" ? "Earnings call transcripts" : "Real SEC data",
    nextStep: demo.config.nextStep === "Start paid plan" ? "Offer paid pilot" : demo.config.nextStep === "Upload source pack" ? "Ask for source pack" : demo.config.nextStep === "Book follow-up" ? "Book second demo" : "Send memo",
    note: `Hydrated from Pilot Demo Concierge: ${demo.config.persona}, ${demo.config.moment}, ${demo.demoScore}/100 demo score, objection ${demo.config.objection}.`
  });
}

function savePilotFeedbackSignalFromCurrent() {
  const snapshot = buildPilotFeedbackSnapshot();
  const signal = {
    id: `signal-${Date.now()}`,
    date: new Date().toISOString().slice(0, 10),
    lead: snapshot.config.lead,
    segment: snapshot.config.segment,
    result: snapshot.config.result,
    budget: snapshot.config.budget,
    urgency: snapshot.config.urgency,
    trust: snapshot.config.trust,
    feature: snapshot.config.feature,
    nextStep: snapshot.config.nextStep,
    note: snapshot.config.note,
    score: snapshot.conversionScore,
    stage: snapshot.stage
  };
  state.pilotFeedbackSignals = normalizePilotFeedbackSignals([signal, ...(state.pilotFeedbackSignals || [])]);
  savePilotFeedbackSignals();
}

function normalizePilotFeedbackSignals(signals) {
  return (Array.isArray(signals) ? signals : []).map((signal, index) => ({
    id: String(signal.id || `signal-${index}`),
    date: String(signal.date || new Date().toISOString().slice(0, 10)).slice(0, 10),
    lead: String(signal.lead || "Pilot lead").slice(0, 64),
    segment: normalizeChoice(signal.segment, ["Retail investor", "Active trader", "Advisor", "Angel investor", "Creator / community"], "Retail investor"),
    result: normalizeChoice(signal.result, ["Interested", "Very interested", "Needs proof", "Not now"], "Interested"),
    budget: normalizeChoice(signal.budget, ["$10/mo", "$29/mo", "$49/mo", "Undecided"], "Undecided"),
    urgency: normalizeChoice(signal.urgency, ["This week", "This month", "Later"], "This month"),
    trust: normalizeChoice(signal.trust, ["Trusts citations", "Wants real filings", "Concerned about hallucination", "Needs compliance clarity"], "Wants real filings"),
    feature: normalizeChoice(signal.feature, ["Real SEC data", "Earnings call transcripts", "Portfolio alerts", "PDF memo exports", "Watchlist workflow"], "Real SEC data"),
    nextStep: normalizeChoice(signal.nextStep, ["Send memo", "Ask for source pack", "Book second demo", "Offer paid pilot"], "Send memo"),
    note: String(signal.note || "").slice(0, 520),
    score: Math.round(clampRevisionNumber(signal.score, 1, 100, 50)),
    stage: normalizeChoice(signal.stage, ["Hot", "Warm", "Nurture", "Archive"], "Warm")
  })).slice(0, 30);
}

function loadPilotFeedbackConfig() {
  return normalizePilotFeedbackConfig(loadJson(STORAGE_KEYS.pilotFeedback, getDefaultPilotFeedbackConfig()));
}

function savePilotFeedbackConfig() {
  saveJson(STORAGE_KEYS.pilotFeedback, normalizePilotFeedbackConfig(state.pilotFeedbackConfig || getDefaultPilotFeedbackConfig()));
}

function loadPilotFeedbackSignals() {
  return normalizePilotFeedbackSignals(loadJson(STORAGE_KEYS.pilotFeedbackSignals, []));
}

function savePilotFeedbackSignals() {
  saveJson(STORAGE_KEYS.pilotFeedbackSignals, normalizePilotFeedbackSignals(state.pilotFeedbackSignals || []));
}

function exportPilotFeedbackBrief() {
  const snapshot = state.currentPilotFeedback || buildPilotFeedbackSnapshot();
  const date = new Date().toISOString().slice(0, 10);
  const content = [
    "# CiteAlpha Pilot Feedback & Conversion Tracker",
    "",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    "## Current Feedback",
    "",
    `- Lead: ${snapshot.config.lead}`,
    `- Segment: ${snapshot.config.segment}`,
    `- Demo result: ${snapshot.config.result}`,
    `- Willingness to pay: ${snapshot.config.budget}`,
    `- Urgency: ${snapshot.config.urgency}`,
    `- Trust reaction: ${snapshot.config.trust}`,
    `- Requested feature: ${snapshot.config.feature}`,
    `- Next follow-up: ${snapshot.config.nextStep}`,
    `- Note: ${snapshot.config.note}`,
    "",
    "## Scorecard",
    "",
    `- Conversion score: ${snapshot.conversionScore}/100 (${snapshot.scoreLabel})`,
    `- Stage: ${snapshot.stage} - ${snapshot.stageNote}`,
    `- Result score: ${snapshot.resultScore}/100`,
    `- Budget score: ${snapshot.budgetScore}/100`,
    `- Trust score: ${snapshot.trustScore}/100`,
    `- Saved signals: ${snapshot.savedSignals.length}`,
    `- Hot signals: ${snapshot.hotSignals}`,
    `- Warm signals: ${snapshot.warmSignals}`,
    "",
    "## Follow-up Queue",
    "",
    ...snapshot.followRows.map((row) => `- ${row.label} | ${row.title}: ${row.question} ${row.body}`),
    "",
    "## Product Learning",
    "",
    ...snapshot.learningRows.map((row) => `- ${row.label} | ${row.title}: ${row.body}`),
    "",
    "## Saved Signal Log",
    "",
    ...(snapshot.savedSignals.length ? snapshot.savedSignals.map((row) => `- ${row.date} | ${row.score}/100 | ${row.lead} | ${row.segment} | ${row.result} | ${row.budget} | ${row.feature}`) : ["- No saved feedback signals yet."]),
    "",
    "## Product Note",
    "",
    "This pilot feedback tracker is a client-side launch workflow. Production should store feedback in authenticated CRM/account tables, preserve consent, separate research data from sales notes, and avoid storing sensitive personal information in browser-only storage."
  ].join("\n");
  downloadTextFile(`citealpha-pilot-feedback-${date}.md`, content, "text/markdown;charset=utf-8");
  flashButtonLabel(els.exportPilotFeedbackBrief, "Exported");
}

function renderPilotCohortCommandCenter() {
  if (!els.pilotCohortMetricGrid) return;
  if (!state.pilotCohortConfig) state.pilotCohortConfig = loadPilotCohortConfig();
  syncPilotCohortInputs();
  const snapshot = buildPilotCohortSnapshot();
  state.currentPilotCohort = snapshot;
  els.pilotCohortMetricGrid.innerHTML = [
    { label: "Cohort score", value: `${snapshot.cohortScore}/100`, sub: snapshot.scoreLabel },
    { label: "Target invites", value: snapshot.config.size, sub: `${snapshot.expectedDemos} expected demos` },
    { label: "Signal base", value: snapshot.signalBase, sub: `${snapshot.hotSignals} hot / ${snapshot.warmSignals} warm` },
    { label: "Primary KPI", value: snapshot.primaryKpi, sub: snapshot.stage }
  ].map((metric) => `
    <div class="cohort-metric ${escapeAttr(snapshot.cohortScore >= 82 ? "normal" : snapshot.cohortScore >= 64 ? "watch" : "high")}">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(String(metric.value))}</strong>
      <em>${escapeHtml(metric.sub)}</em>
    </div>
  `).join("");
  els.pilotCohortOutreachCount.textContent = String(snapshot.outreachRows.length);
  els.pilotCohortOutreachList.innerHTML = renderPilotCohortOutreachRows(snapshot.outreachRows);
  els.pilotCohortExperimentCount.textContent = String(snapshot.experimentRows.length);
  els.pilotCohortExperimentList.innerHTML = renderPilotCohortExperimentRows(snapshot.experimentRows);
  els.pilotCohortSnapshotCount.textContent = String(snapshot.savedSnapshots.length);
  els.pilotCohortSnapshotList.innerHTML = renderPilotCohortSnapshotRows(snapshot.savedSnapshots);
  renderPilotOutreachReplyRoom();
}

function buildPilotCohortSnapshot() {
  const config = normalizePilotCohortConfig(state.pilotCohortConfig || getDefaultPilotCohortConfig());
  const feedback = state.currentPilotFeedback || buildPilotFeedbackSnapshot();
  const demo = state.currentPilotDemo || buildPilotDemoSnapshot();
  const signals = normalizePilotFeedbackSignals(state.pilotFeedbackSignals || []);
  const hotSignals = signals.filter((signal) => signal.score >= 82).length;
  const warmSignals = signals.filter((signal) => signal.score >= 64 && signal.score < 82).length;
  const leadBase = Array.isArray(state.waitlistLeads) ? state.waitlistLeads.length : 0;
  const signalBase = signals.length || Math.max(1, leadBase || (feedback.conversionScore >= 64 ? 1 : 0));
  const channelScore = scorePilotCohortChannel(config.channel);
  const offerScore = scorePilotCohortOffer(config.offer, config.goal);
  const cadenceScore = scorePilotCohortCadence(config.cadence);
  const proofScore = scorePilotCohortProof(config.proof, feedback.config.feature, feedback.config.trust);
  const baseSignalScore = Math.min(100, Math.round(feedback.conversionScore * 0.56 + demo.demoScore * 0.24 + Math.min(20, signalBase * 4)));
  const expectedDemos = Math.max(1, Math.round(config.size * (config.channel === "WhatsApp" ? 0.48 : config.channel === "Email" ? 0.34 : config.channel === "LinkedIn DM" ? 0.28 : 0.2)));
  const expectedConversions = Math.max(1, Math.round(expectedDemos * (config.offer === "Free 7-day trial" ? 0.42 : config.offer === "Founding member $10" ? 0.34 : config.offer === "Pro pilot $29" ? 0.28 : 0.18)));
  const cohortScore = Math.max(1, Math.min(100, Math.round(
    baseSignalScore * 0.34 +
    offerScore * 0.2 +
    proofScore * 0.18 +
    channelScore * 0.14 +
    cadenceScore * 0.1 +
    Math.min(100, signalBase * 12 + leadBase * 2) * 0.04
  )));
  const stage = makePilotCohortStage(cohortScore);
  const scoreLabel = cohortScore >= 82 ? "Launch-ready" : cohortScore >= 64 ? "Run small cohort" : cohortScore >= 45 ? "Warm first" : "Needs more proof";
  const primaryKpi = config.goal === "First paid pilots" ? "Paid pilots" : config.goal === "Source-pack collection" ? "Source packs" : config.goal === "Advisor validation" ? "Advisor calls" : config.goal === "Pricing test" ? "WTP signal" : "Qualified replies";
  const outreachRows = buildPilotCohortOutreachRows(config, feedback, demo, { expectedDemos, expectedConversions, cohortScore, stage, primaryKpi });
  const experimentRows = buildPilotCohortExperimentRows(config, feedback, demo, { expectedDemos, expectedConversions, cohortScore, stage, primaryKpi });
  const savedSnapshots = normalizePilotCohortSnapshots(state.pilotCohortSnapshots || []);
  return {
    config,
    feedback,
    demo,
    signals,
    savedSnapshots,
    hotSignals,
    warmSignals,
    signalBase,
    leadBase,
    channelScore,
    offerScore,
    cadenceScore,
    proofScore,
    baseSignalScore,
    expectedDemos,
    expectedConversions,
    cohortScore,
    scoreLabel,
    stage,
    primaryKpi,
    outreachRows,
    experimentRows
  };
}

function scorePilotCohortOffer(offer, goal) {
  if (goal === "Pricing test") {
    if (offer === "Analyst preview $49") return 90;
    if (offer === "Pro pilot $29") return 86;
  }
  if (offer === "Founding member $10") return 88;
  if (offer === "Pro pilot $29") return 82;
  if (offer === "Free 7-day trial") return 78;
  return 68;
}

function scorePilotCohortChannel(channel) {
  if (channel === "WhatsApp") return 88;
  if (channel === "Email") return 80;
  if (channel === "LinkedIn DM") return 72;
  return 64;
}

function scorePilotCohortCadence(cadence) {
  if (cadence === "48-hour sprint") return 86;
  if (cadence === "7-day sprint") return 80;
  return 68;
}

function scorePilotCohortProof(proof, feature, trust) {
  const featureMap = {
    "Real SEC data": "Your data upload",
    "Earnings call transcripts": "Evidence trace",
    "Portfolio alerts": "Portfolio workflow",
    "PDF memo exports": "NVDA risk memo",
    "Watchlist workflow": "Quality guardrails"
  };
  const trustBonus = trust === "Trusts citations" || trust === "Wants real filings" ? 8 : 0;
  const aligned = featureMap[feature] === proof;
  if (aligned) return Math.min(100, 86 + trustBonus);
  if (proof === "Quality guardrails" && trust === "Concerned about hallucination") return 92;
  if (proof === "Your data upload" && trust === "Wants real filings") return 90;
  return 72 + Math.round(trustBonus / 2);
}

function makePilotCohortStage(score) {
  if (score >= 82) return "Launch this sprint";
  if (score >= 64) return "Run controlled cohort";
  if (score >= 45) return "Warm up first";
  return "Collect more signal";
}

function buildPilotCohortOutreachRows(config, feedback, demo, context) {
  const ticker = demo.config.ticker || "NVDA";
  const segment = config.segment.toLowerCase();
  return [
    {
      label: "Invite",
      className: context.cohortScore >= 82 ? "normal" : "watch",
      title: `${config.channel} invite to ${config.size} ${segment}s`,
      question: `What source-backed $${ticker} proof should I show ${segment} users before asking them to try CiteAlpha?`,
      body: `Lead with ${config.proof.toLowerCase()} and the ${config.offer.toLowerCase()} offer.`
    },
    {
      label: "Proof",
      className: config.proof === "Quality guardrails" ? "watch" : "normal",
      title: "Trust asset",
      question: `Which $${ticker} citation, source audit, or exported memo best proves ${config.proof.toLowerCase()}?`,
      body: `${feedback.config.trust} is the active trust signal, so show proof before pricing.`
    },
    {
      label: "Ask",
      className: config.goal === "First paid pilots" || config.goal === "Pricing test" ? "normal" : "watch",
      title: context.primaryKpi || "Conversion ask",
      question: `What exact ask should close a ${config.goal.toLowerCase()} cohort for $${ticker}?`,
      body: `Expected outcome: ${context.expectedDemos} demos and ${context.expectedConversions} conversion signals.`
    },
    {
      label: "Follow-up",
      className: config.cadence === "48-hour sprint" ? "high" : "watch",
      title: `${config.cadence} response loop`,
      question: `What follow-up question should I send if ${segment} users hesitate after seeing the ${config.proof.toLowerCase()}?`,
      body: "Convert objections into the next product sprint, not just sales notes."
    }
  ];
}

function buildPilotCohortExperimentRows(config, feedback, demo, context) {
  const ticker = demo.config.ticker || "NVDA";
  return [
    {
      label: "KPI",
      className: "normal",
      title: `${context.primaryKpi} target`,
      body: `Success means ${context.expectedConversions}+ ${context.primaryKpi.toLowerCase()} from ${context.expectedDemos} expected demos.`
    },
    {
      label: "Stop",
      className: context.cohortScore < 64 ? "high" : "watch",
      title: "Stop rule",
      body: `Pause the cohort if fewer than ${Math.max(1, Math.floor(context.expectedDemos / 3))} users engage or if trust objections repeat without source proof.`
    },
    {
      label: "Feature",
      className: feedback.config.feature === "Real SEC data" || feedback.config.feature === "Earnings call transcripts" ? "high" : "watch",
      title: "Build trigger",
      body: `Escalate ${feedback.config.feature.toLowerCase()} if it appears in two more saved signals.`
    },
    {
      label: "Price",
      className: config.offer.includes("$") ? "normal" : "watch",
      title: "Offer read",
      body: `${config.offer} should be tested against the exported $${ticker} memo and a second-question workflow.`
    },
    {
      label: "Trust",
      className: feedback.config.trust === "Concerned about hallucination" ? "high" : "normal",
      title: "Trust read",
      body: `Track whether ${config.proof.toLowerCase()} reduces the ${feedback.config.trust.toLowerCase()} objection.`
    }
  ];
}

function renderPilotCohortOutreachRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No outreach sequence</strong><span>Build a cohort plan to generate invite actions.</span></div>`;
  }
  return rows.map((row) => `
    <button class="cohort-outreach-row ${escapeAttr(row.className || "normal")}" type="button" data-cohort-question="${escapeAttr(row.question)}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.question)} ${escapeHtml(row.body)}</em>
      </div>
    </button>
  `).join("");
}

function renderPilotCohortExperimentRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No experiment rules</strong><span>Build a cohort plan to set launch rules.</span></div>`;
  }
  return rows.map((row) => `
    <div class="cohort-experiment-row ${escapeAttr(row.className || "normal")}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)}</em>
      </div>
    </div>
  `).join("");
}

function renderPilotCohortSnapshotRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No cohort snapshots</strong><span>Save a snapshot after choosing a launch cohort.</span></div>`;
  }
  return rows.slice(0, 8).map((row) => `
    <div class="cohort-snapshot-row ${escapeAttr(row.score >= 82 ? "normal" : row.score >= 64 ? "watch" : "high")}">
      <span>${escapeHtml(String(row.score))}</span>
      <div>
        <strong>${escapeHtml(row.goal)} - ${escapeHtml(row.segment)}</strong>
        <em>${escapeHtml(row.date)} | ${escapeHtml(String(row.size))} invites | ${escapeHtml(row.offer)} | ${escapeHtml(row.stage)} | ${escapeHtml(String(row.expectedConversions))} conversions</em>
      </div>
    </div>
  `).join("");
}

function readPilotCohortConfig() {
  return normalizePilotCohortConfig({
    goal: els.pilotCohortGoal.value,
    segment: els.pilotCohortSegment.value,
    size: els.pilotCohortSize.value,
    channel: els.pilotCohortChannel.value,
    offer: els.pilotCohortOffer.value,
    proof: els.pilotCohortProof.value,
    cadence: els.pilotCohortCadence.value,
    owner: els.pilotCohortOwner.value,
    note: els.pilotCohortNote.value
  });
}

function syncPilotCohortInputs() {
  if (!els.pilotCohortGoal) return;
  const config = normalizePilotCohortConfig(state.pilotCohortConfig || getDefaultPilotCohortConfig());
  els.pilotCohortGoal.value = config.goal;
  els.pilotCohortSegment.value = config.segment;
  els.pilotCohortSize.value = String(config.size);
  els.pilotCohortChannel.value = config.channel;
  els.pilotCohortOffer.value = config.offer;
  els.pilotCohortProof.value = config.proof;
  els.pilotCohortCadence.value = config.cadence;
  els.pilotCohortOwner.value = config.owner;
  els.pilotCohortNote.value = config.note;
}

function normalizePilotCohortConfig(config) {
  const defaults = getDefaultPilotCohortConfig();
  const source = config || {};
  return {
    goal: normalizeChoice(source.goal, ["First paid pilots", "Source-pack collection", "Advisor validation", "Community launch", "Pricing test"], defaults.goal),
    segment: normalizeChoice(source.segment, ["Retail investor", "Active trader", "Advisor", "Angel investor", "Creator / community"], defaults.segment),
    size: Math.round(clampRevisionNumber(source.size, 1, 100, defaults.size)),
    channel: normalizeChoice(source.channel, ["Email", "WhatsApp", "LinkedIn DM", "Community post"], defaults.channel),
    offer: normalizeChoice(source.offer, ["Free 7-day trial", "Founding member $10", "Pro pilot $29", "Analyst preview $49"], defaults.offer),
    proof: normalizeChoice(source.proof, ["NVDA risk memo", "Your data upload", "Evidence trace", "Portfolio workflow", "Quality guardrails"], defaults.proof),
    cadence: normalizeChoice(source.cadence, ["48-hour sprint", "7-day sprint", "14-day sprint"], defaults.cadence),
    owner: String(source.owner || defaults.owner).slice(0, 48),
    note: String(source.note || defaults.note).slice(0, 520)
  };
}

function getDefaultPilotCohortConfig() {
  return {
    goal: "First paid pilots",
    segment: "Retail investor",
    size: 12,
    channel: "Email",
    offer: "Founding member $10",
    proof: "NVDA risk memo",
    cadence: "7-day sprint",
    owner: "Founder",
    note: "Invite a small cohort, show one proof asset, measure one conversion action, and carry objections into the next build sprint."
  };
}

function hydratePilotCohortFromFeedback() {
  const feedback = state.currentPilotFeedback || buildPilotFeedbackSnapshot();
  const signals = normalizePilotFeedbackSignals(state.pilotFeedbackSignals || []);
  const hotSignals = signals.filter((signal) => signal.score >= 82).length;
  const warmSignals = signals.filter((signal) => signal.score >= 64 && signal.score < 82).length;
  const size = Math.max(6, Math.min(30, Math.round((hotSignals || 1) * 4 + warmSignals * 2 + feedback.conversionScore / 8)));
  const goal = feedback.config.nextStep === "Offer paid pilot"
    ? "First paid pilots"
    : feedback.config.nextStep === "Ask for source pack"
      ? "Source-pack collection"
      : feedback.config.nextStep === "Book second demo"
        ? "Advisor validation"
        : "Community launch";
  const offer = feedback.config.budget === "$49/mo"
    ? "Analyst preview $49"
    : feedback.config.budget === "$29/mo"
      ? "Pro pilot $29"
      : feedback.config.budget === "$10/mo"
        ? "Founding member $10"
        : "Free 7-day trial";
  const channel = feedback.config.segment === "Advisor" || feedback.config.segment === "Angel investor"
    ? "LinkedIn DM"
    : feedback.config.segment === "Creator / community"
      ? "Community post"
      : feedback.config.urgency === "This week"
        ? "WhatsApp"
        : "Email";
  const proof = feedback.config.feature === "Real SEC data"
    ? "Your data upload"
    : feedback.config.feature === "Earnings call transcripts"
      ? "Evidence trace"
      : feedback.config.feature === "Portfolio alerts"
        ? "Portfolio workflow"
        : feedback.config.trust === "Concerned about hallucination"
          ? "Quality guardrails"
          : "NVDA risk memo";
  state.pilotCohortConfig = normalizePilotCohortConfig({
    ...(state.pilotCohortConfig || getDefaultPilotCohortConfig()),
    goal,
    segment: feedback.config.segment,
    size,
    channel,
    offer,
    proof,
    cadence: feedback.config.urgency === "This week" ? "48-hour sprint" : feedback.config.urgency === "This month" ? "7-day sprint" : "14-day sprint",
    owner: "Founder",
    note: `Hydrated from ${feedback.config.lead}: ${feedback.conversionScore}/100 conversion score, ${feedback.config.feature} demand, ${feedback.config.trust.toLowerCase()} trust reaction.`
  });
}

function savePilotCohortSnapshotFromCurrent() {
  const snapshot = buildPilotCohortSnapshot();
  const row = {
    id: `cohort-${Date.now()}`,
    date: new Date().toISOString().slice(0, 10),
    goal: snapshot.config.goal,
    segment: snapshot.config.segment,
    size: snapshot.config.size,
    channel: snapshot.config.channel,
    offer: snapshot.config.offer,
    proof: snapshot.config.proof,
    cadence: snapshot.config.cadence,
    owner: snapshot.config.owner,
    note: snapshot.config.note,
    score: snapshot.cohortScore,
    stage: snapshot.stage,
    expectedDemos: snapshot.expectedDemos,
    expectedConversions: snapshot.expectedConversions,
    primaryKpi: snapshot.primaryKpi
  };
  state.pilotCohortSnapshots = normalizePilotCohortSnapshots([row, ...(state.pilotCohortSnapshots || [])]);
  savePilotCohortSnapshots();
}

function normalizePilotCohortSnapshots(snapshots) {
  return (Array.isArray(snapshots) ? snapshots : []).map((snapshot, index) => ({
    id: String(snapshot.id || `cohort-${index}`),
    date: String(snapshot.date || new Date().toISOString().slice(0, 10)).slice(0, 10),
    goal: normalizeChoice(snapshot.goal, ["First paid pilots", "Source-pack collection", "Advisor validation", "Community launch", "Pricing test"], "First paid pilots"),
    segment: normalizeChoice(snapshot.segment, ["Retail investor", "Active trader", "Advisor", "Angel investor", "Creator / community"], "Retail investor"),
    size: Math.round(clampRevisionNumber(snapshot.size, 1, 100, 12)),
    channel: normalizeChoice(snapshot.channel, ["Email", "WhatsApp", "LinkedIn DM", "Community post"], "Email"),
    offer: normalizeChoice(snapshot.offer, ["Free 7-day trial", "Founding member $10", "Pro pilot $29", "Analyst preview $49"], "Founding member $10"),
    proof: normalizeChoice(snapshot.proof, ["NVDA risk memo", "Your data upload", "Evidence trace", "Portfolio workflow", "Quality guardrails"], "NVDA risk memo"),
    cadence: normalizeChoice(snapshot.cadence, ["48-hour sprint", "7-day sprint", "14-day sprint"], "7-day sprint"),
    owner: String(snapshot.owner || "Founder").slice(0, 48),
    note: String(snapshot.note || "").slice(0, 520),
    score: Math.round(clampRevisionNumber(snapshot.score, 1, 100, 50)),
    stage: normalizeChoice(snapshot.stage, ["Launch this sprint", "Run controlled cohort", "Warm up first", "Collect more signal"], "Run controlled cohort"),
    expectedDemos: Math.round(clampRevisionNumber(snapshot.expectedDemos, 0, 100, 4)),
    expectedConversions: Math.round(clampRevisionNumber(snapshot.expectedConversions, 0, 100, 1)),
    primaryKpi: String(snapshot.primaryKpi || "Qualified replies").slice(0, 40)
  })).slice(0, 30);
}

function loadPilotCohortConfig() {
  return normalizePilotCohortConfig(loadJson(STORAGE_KEYS.pilotCohort, getDefaultPilotCohortConfig()));
}

function savePilotCohortConfig() {
  saveJson(STORAGE_KEYS.pilotCohort, normalizePilotCohortConfig(state.pilotCohortConfig || getDefaultPilotCohortConfig()));
}

function loadPilotCohortSnapshots() {
  return normalizePilotCohortSnapshots(loadJson(STORAGE_KEYS.pilotCohortSnapshots, []));
}

function savePilotCohortSnapshots() {
  saveJson(STORAGE_KEYS.pilotCohortSnapshots, normalizePilotCohortSnapshots(state.pilotCohortSnapshots || []));
}

function exportPilotCohortBrief() {
  const snapshot = state.currentPilotCohort || buildPilotCohortSnapshot();
  const date = new Date().toISOString().slice(0, 10);
  const content = [
    "# CiteAlpha Pilot Cohort Command Center",
    "",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    "## Cohort Plan",
    "",
    `- Goal: ${snapshot.config.goal}`,
    `- Segment: ${snapshot.config.segment}`,
    `- Cohort size: ${snapshot.config.size}`,
    `- Channel: ${snapshot.config.channel}`,
    `- Offer: ${snapshot.config.offer}`,
    `- Proof asset: ${snapshot.config.proof}`,
    `- Cadence: ${snapshot.config.cadence}`,
    `- Owner: ${snapshot.config.owner}`,
    `- Note: ${snapshot.config.note}`,
    "",
    "## Scorecard",
    "",
    `- Cohort score: ${snapshot.cohortScore}/100 (${snapshot.scoreLabel})`,
    `- Stage: ${snapshot.stage}`,
    `- Primary KPI: ${snapshot.primaryKpi}`,
    `- Signal base: ${snapshot.signalBase} (${snapshot.hotSignals} hot / ${snapshot.warmSignals} warm)`,
    `- Expected demos: ${snapshot.expectedDemos}`,
    `- Expected conversions: ${snapshot.expectedConversions}`,
    `- Channel score: ${snapshot.channelScore}/100`,
    `- Offer score: ${snapshot.offerScore}/100`,
    `- Proof score: ${snapshot.proofScore}/100`,
    "",
    "## Outreach Sequence",
    "",
    ...snapshot.outreachRows.map((row) => `- ${row.label} | ${row.title}: ${row.question} ${row.body}`),
    "",
    "## Experiment Rules",
    "",
    ...snapshot.experimentRows.map((row) => `- ${row.label} | ${row.title}: ${row.body}`),
    "",
    "## Saved Cohort Snapshots",
    "",
    ...(snapshot.savedSnapshots.length ? snapshot.savedSnapshots.map((row) => `- ${row.date} | ${row.score}/100 | ${row.goal} | ${row.segment} | ${row.size} invites | ${row.offer} | ${row.stage}`) : ["- No saved cohort snapshots yet."]),
    "",
    "## Product Note",
    "",
    "This pilot cohort command center is a client-side launch workflow. Production should use authenticated CRM records, consented outreach, unsubscribe controls, rate limits, and analytics events before running real commercial campaigns."
  ].join("\n");
  downloadTextFile(`citealpha-pilot-cohort-${date}.md`, content, "text/markdown;charset=utf-8");
  flashButtonLabel(els.exportPilotCohortBrief, "Exported");
}

function renderPilotOutreachReplyRoom() {
  if (!els.pilotOutreachMetricGrid) return;
  if (!state.pilotOutreachConfig) state.pilotOutreachConfig = loadPilotOutreachConfig();
  syncPilotOutreachInputs();
  const snapshot = buildPilotOutreachSnapshot();
  state.currentPilotOutreach = snapshot;
  els.pilotOutreachMetricGrid.innerHTML = [
    { label: "Outreach score", value: `${snapshot.outreachScore}/100`, sub: snapshot.scoreLabel },
    { label: "Channel", value: snapshot.config.channel, sub: `${snapshot.channelScore}/100 fit` },
    { label: "Reply intent", value: snapshot.reply.intent, sub: `${snapshot.reply.score}/100 reply` },
    { label: "Next move", value: snapshot.nextMove, sub: snapshot.config.followup }
  ].map((metric) => `
    <div class="outreach-metric ${escapeAttr(snapshot.outreachScore >= 82 ? "normal" : snapshot.outreachScore >= 64 ? "watch" : "high")}">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(String(metric.value))}</strong>
      <em>${escapeHtml(metric.sub)}</em>
    </div>
  `).join("");
  els.pilotOutreachMessageCount.textContent = String(snapshot.messageRows.length);
  els.pilotOutreachMessageList.innerHTML = renderPilotOutreachMessageRows(snapshot.messageRows);
  els.pilotOutreachReplyCount.textContent = String(snapshot.replyRows.length);
  els.pilotOutreachReplyList.innerHTML = renderPilotOutreachReplyRows(snapshot.replyRows);
  els.pilotOutreachSavedCount.textContent = String(snapshot.savedReplies.length);
  els.pilotOutreachSavedList.innerHTML = renderPilotOutreachSavedRows(snapshot.savedReplies);
  renderPilotActivationRetentionRoom();
}

function buildPilotOutreachSnapshot() {
  const config = normalizePilotOutreachConfig(state.pilotOutreachConfig || getDefaultPilotOutreachConfig());
  const cohort = state.currentPilotCohort || buildPilotCohortSnapshot();
  const reply = analyzePilotOutreachReply(config.replyText);
  const channelScore = scorePilotOutreachChannel(config.channel, cohort.config.channel);
  const toneScore = scorePilotOutreachTone(config.tone, cohort.config.segment);
  const ctaScore = scorePilotOutreachCta(config.cta, cohort.config.goal);
  const proofScore = scorePilotCohortProof(config.proof, cohort.feedback.config.feature, cohort.feedback.config.trust);
  const outreachScore = Math.max(1, Math.min(100, Math.round(
    cohort.cohortScore * 0.26 +
    channelScore * 0.16 +
    toneScore * 0.12 +
    ctaScore * 0.16 +
    proofScore * 0.1 +
    reply.score * 0.2
  )));
  const nextMove = makePilotOutreachNextMove(config, reply, cohort);
  const messageRows = buildPilotOutreachMessageRows(config, cohort, reply);
  const replyRows = buildPilotOutreachReplyRows(config, cohort, reply, nextMove);
  const savedReplies = normalizePilotOutreachReplies(state.pilotOutreachReplies || []);
  return {
    config,
    cohort,
    reply,
    channelScore,
    toneScore,
    ctaScore,
    proofScore,
    outreachScore,
    scoreLabel: outreachScore >= 82 ? "Ready to send" : outreachScore >= 64 ? "Send small batch" : outreachScore >= 45 ? "Tighten proof" : "Hold and learn",
    nextMove,
    messageRows,
    replyRows,
    savedReplies
  };
}

function analyzePilotOutreachReply(replyText) {
  const text = String(replyText || "").toLowerCase();
  const positiveWords = ["interested", "yes", "demo", "call", "trial", "send", "try", "useful", "pay", "start", "pilot"];
  const trustWords = ["trust", "citation", "cited", "source", "hallucination", "accurate", "prove"];
  const dataWords = ["real filing", "sec", "transcript", "actual", "upload", "data"];
  const priceWords = ["price", "cost", "pay", "$", "expensive", "free"];
  const timingWords = ["later", "busy", "next week", "not now", "after", "time"];
  const positiveHits = positiveWords.filter((word) => text.includes(word)).length;
  const trustHits = trustWords.filter((word) => text.includes(word)).length;
  const dataHits = dataWords.filter((word) => text.includes(word)).length;
  const priceHits = priceWords.filter((word) => text.includes(word)).length;
  const timingHits = timingWords.filter((word) => text.includes(word)).length;
  const negativeHit = text.includes("not interested") || text.includes("unsubscribe") || text.includes("stop");
  const objectionCount = trustHits + dataHits + priceHits + timingHits + (negativeHit ? 3 : 0);
  const score = Math.max(1, Math.min(100, Math.round(44 + positiveHits * 11 + dataHits * 3 + trustHits * 2 - timingHits * 8 - (negativeHit ? 34 : 0))));
  const intent = score >= 80 ? "Hot" : score >= 60 ? "Warm" : score >= 40 ? "Nurture" : "Cold";
  const objection = negativeHit
    ? "Do not contact"
    : trustHits
      ? "Trust proof"
      : dataHits
        ? "Real data"
        : priceHits
          ? "Pricing"
          : timingHits
            ? "Timing"
            : "None";
  return {
    text: String(replyText || "").slice(0, 600),
    score,
    intent,
    objection,
    positiveHits,
    objectionCount,
    trustHits,
    dataHits,
    priceHits,
    timingHits,
    negativeHit
  };
}

function scorePilotOutreachChannel(channel, cohortChannel) {
  if (channel === cohortChannel) return 94;
  if ((channel === "WhatsApp" && cohortChannel === "Email") || (channel === "Email" && cohortChannel === "WhatsApp")) return 82;
  if ((channel === "LinkedIn DM" && cohortChannel === "Advisor") || channel === "LinkedIn DM") return 76;
  if (channel === "Community post") return 68;
  return 72;
}

function scorePilotOutreachTone(tone, segment) {
  if (segment === "Advisor" && tone === "Advisor formal") return 94;
  if (segment === "Creator / community" && tone === "Friendly beta") return 90;
  if (segment === "Active trader" && tone === "Analyst crisp") return 88;
  if (tone === "Founder direct") return 84;
  return 74;
}

function scorePilotOutreachCta(cta, goal) {
  if (goal === "First paid pilots" && cta === "Start paid pilot") return 94;
  if (goal === "Source-pack collection" && cta === "Upload source pack") return 94;
  if (goal === "Advisor validation" && cta === "Book pilot call") return 90;
  if (goal === "Community launch" && cta === "Reply with ticker") return 88;
  if (goal === "Pricing test" && (cta === "Start paid pilot" || cta === "Book pilot call")) return 86;
  return 72;
}

function makePilotOutreachNextMove(config, reply, cohort) {
  if (reply.negativeHit) return "Respect opt-out";
  if (reply.intent === "Hot" && config.cta === "Start paid pilot") return "Send pilot link";
  if (reply.intent === "Hot") return config.cta;
  if (reply.objection === "Trust proof" || reply.objection === "Real data") return "Send cited proof";
  if (reply.objection === "Pricing") return `Offer ${cohort.config.offer}`;
  if (reply.objection === "Timing") return `Follow up in ${config.followup}`;
  return "Ask one ticker";
}

function buildPilotOutreachMessageRows(config, cohort, reply) {
  return [
    {
      label: "Open",
      className: "normal",
      title: `${config.channel} opener`,
      body: composePilotOutreachMessage(config, cohort, reply, "open")
    },
    {
      label: "Proof",
      className: config.proof === "Quality guardrails" ? "watch" : "normal",
      title: "Proof follow-up",
      body: composePilotOutreachMessage(config, cohort, reply, "proof")
    },
    {
      label: "Ask",
      className: config.cta === "Start paid pilot" ? "normal" : "watch",
      title: "Conversion ask",
      body: composePilotOutreachMessage(config, cohort, reply, "ask")
    },
    {
      label: "Nudge",
      className: reply.intent === "Cold" ? "high" : "watch",
      title: `${config.followup} follow-up`,
      body: composePilotOutreachMessage(config, cohort, reply, "followup")
    }
  ];
}

function composePilotOutreachMessage(config, cohort, reply, kind) {
  const ticker = cohort.demo.config.ticker || "NVDA";
  const segment = config.lead || `${cohort.config.segment} pilot`;
  const proof = config.proof.toLowerCase();
  const offer = config.offer;
  const ctaLine = config.cta === "Book pilot call"
    ? "Would you be open to a short pilot call this week?"
    : config.cta === "Upload source pack"
      ? `Could you upload one ${ticker} filing, transcript, or note so I can test it on your data?`
      : config.cta === "Start paid pilot"
        ? `Would you test the ${offer} pilot if the cited memo is useful?`
        : `Reply with one ticker or research question you want CiteAlpha to test.`;
  const footer = "CiteAlpha is research software, not investment advice.";
  if (config.channel === "WhatsApp") {
    if (kind === "open") return `Hi ${segment}. I am opening a small CiteAlpha pilot for cited equity research. The first proof is ${proof} around $${ticker}. ${ctaLine} ${footer}`;
    if (kind === "proof") return `Quick proof note: CiteAlpha shows the answer, cited sources, source audit, and memo export for $${ticker}. The goal is to make research easier to verify.`;
    if (kind === "ask") return `${ctaLine} I am keeping this cohort small so I can improve the workflow from real replies.`;
    return `Following up on CiteAlpha. If now is not the right time, one objection would still help: data, trust, price, or workflow?`;
  }
  if (config.channel === "LinkedIn DM") {
    if (kind === "open") return `Hi ${segment}. I am testing CiteAlpha, a cited research desk for filings, calls, and valuation notes. I am inviting a small ${cohort.config.segment.toLowerCase()} cohort with ${proof} as the first proof point. ${ctaLine}`;
    if (kind === "proof") return `The useful part is not just the answer. It shows the source trail, confidence, and exportable memo so a user can challenge the read.`;
    if (kind === "ask") return `${ctaLine} I can send the $${ticker} sample first.`;
    return `Gentle follow-up. Is the blocker more about source trust, live data, price, or time?`;
  }
  if (config.channel === "Community post") {
    if (kind === "open") return `I am opening a tiny CiteAlpha pilot for people who want plain-English, cited answers across SEC filings, earnings calls, and valuation notes. First test: ${proof} for $${ticker}. ${ctaLine}`;
    if (kind === "proof") return `The workflow returns the answer, source passages, a source audit, and an exportable memo. I am looking for real research questions, not generic prompts.`;
    if (kind === "ask") return `${ctaLine} Early users get ${offer}.`;
    return `Follow-up: what would make this worth paying for: real filing import, call transcripts, portfolio workflow, or better PDF memos?`;
  }
  if (kind === "open") {
    return [
      `Subject: Small CiteAlpha pilot for cited $${ticker} research`,
      "",
      `Hi ${segment},`,
      "",
      `I am opening a small CiteAlpha pilot for ${cohort.config.segment.toLowerCase()} users who want plain-English, cited answers across SEC filings, earnings calls, and valuation notes.`,
      "",
      `The first proof asset is ${proof}. The pilot offer is ${offer}.`,
      "",
      ctaLine,
      "",
      footer
    ].join("\n");
  }
  if (kind === "proof") {
    return [
      `Subject: The proof trail behind the CiteAlpha pilot`,
      "",
      `The part I want you to judge is the evidence trail: answer, cited passages, source audit, management-tone read, and exportable memo.`,
      "",
      `For this cohort I am anchoring the demo on ${proof} and the $${ticker} workflow.`
    ].join("\n");
  }
  if (kind === "ask") {
    return [
      `Subject: Worth testing as a pilot?`,
      "",
      ctaLine,
      "",
      `I am measuring whether ${cohort.config.primaryKpi || cohort.primaryKpi || "qualified replies"} is strong enough to justify the next build sprint.`
    ].join("\n");
  }
  return [
    `Subject: Quick follow-up on CiteAlpha`,
    "",
    `Checking once more. If CiteAlpha is not useful yet, which blocker matters most: source trust, real filings, price, or workflow fit?`,
    "",
    `Your reply will shape the next version. ${footer}`
  ].join("\n");
}

function buildPilotOutreachReplyRows(config, cohort, reply, nextMove) {
  const ticker = cohort.demo.config.ticker || "NVDA";
  return [
    {
      label: reply.intent,
      className: reply.intent === "Hot" ? "normal" : reply.intent === "Warm" ? "watch" : "high",
      title: "Reply intent",
      question: `What proof should I send next to convert a ${reply.intent.toLowerCase()} reply for $${ticker}?`,
      body: `${reply.score}/100 reply score with ${reply.positiveHits} positive signal${reply.positiveHits === 1 ? "" : "s"}.`
    },
    {
      label: reply.objection,
      className: reply.objection === "None" ? "normal" : reply.objection === "Do not contact" ? "high" : "watch",
      title: "Objection read",
      question: `Which $${ticker} source passage or product proof best addresses this objection: ${reply.objection}?`,
      body: `${reply.objectionCount} objection marker${reply.objectionCount === 1 ? "" : "s"} found in the latest reply.`
    },
    {
      label: "Move",
      className: nextMove === "Respect opt-out" ? "high" : "normal",
      title: nextMove,
      question: `Draft the next safe follow-up for a ${config.channel.toLowerCase()} lead after: ${reply.text || "no reply yet"}`,
      body: `Recommended next action: ${nextMove}.`
    },
    {
      label: "Learn",
      className: "watch",
      title: "Product learning",
      question: `What should CiteAlpha improve if pilot replies keep mentioning ${reply.objection.toLowerCase()}?`,
      body: `Track whether ${config.proof.toLowerCase()} and ${config.offer.toLowerCase()} reduce the same objection in the next replies.`
    }
  ];
}

function renderPilotOutreachMessageRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No messages yet</strong><span>Compose outreach to generate copy-ready messages.</span></div>`;
  }
  return rows.map((row) => `
    <button class="outreach-message-row ${escapeAttr(row.className || "normal")}" type="button" data-outreach-message="${escapeAttr(row.body)}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)}</em>
      </div>
    </button>
  `).join("");
}

function renderPilotOutreachReplyRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No reply triage</strong><span>Paste the latest reply to score intent and objections.</span></div>`;
  }
  return rows.map((row) => `
    <button class="outreach-reply-row ${escapeAttr(row.className || "normal")}" type="button" data-outreach-question="${escapeAttr(row.question)}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)}</em>
      </div>
    </button>
  `).join("");
}

function renderPilotOutreachSavedRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No saved replies</strong><span>Save replies after outreach calls or messages.</span></div>`;
  }
  return rows.slice(0, 8).map((row) => `
    <div class="outreach-saved-row ${escapeAttr(row.score >= 80 ? "normal" : row.score >= 60 ? "watch" : "high")}">
      <span>${escapeHtml(String(row.score))}</span>
      <div>
        <strong>${escapeHtml(row.lead)} - ${escapeHtml(row.intent)}</strong>
        <em>${escapeHtml(row.date)} | ${escapeHtml(row.channel)} | ${escapeHtml(row.objection)} | ${escapeHtml(row.nextMove)}</em>
      </div>
    </div>
  `).join("");
}

function readPilotOutreachConfig() {
  return normalizePilotOutreachConfig({
    lead: els.pilotOutreachLead.value,
    channel: els.pilotOutreachChannel.value,
    tone: els.pilotOutreachTone.value,
    offer: els.pilotOutreachOffer.value,
    proof: els.pilotOutreachProof.value,
    cta: els.pilotOutreachCta.value,
    followup: els.pilotOutreachFollowup.value,
    owner: els.pilotOutreachOwner.value,
    replyText: els.pilotOutreachReplyText.value
  });
}

function syncPilotOutreachInputs() {
  if (!els.pilotOutreachLead) return;
  const config = normalizePilotOutreachConfig(state.pilotOutreachConfig || getDefaultPilotOutreachConfig());
  els.pilotOutreachLead.value = config.lead;
  els.pilotOutreachChannel.value = config.channel;
  els.pilotOutreachTone.value = config.tone;
  els.pilotOutreachOffer.value = config.offer;
  els.pilotOutreachProof.value = config.proof;
  els.pilotOutreachCta.value = config.cta;
  els.pilotOutreachFollowup.value = config.followup;
  els.pilotOutreachOwner.value = config.owner;
  els.pilotOutreachReplyText.value = config.replyText;
}

function normalizePilotOutreachConfig(config) {
  const defaults = getDefaultPilotOutreachConfig();
  const source = config || {};
  return {
    lead: String(source.lead || defaults.lead).slice(0, 80),
    channel: normalizeChoice(source.channel, ["Email", "WhatsApp", "LinkedIn DM", "Community post"], defaults.channel),
    tone: normalizeChoice(source.tone, ["Founder direct", "Analyst crisp", "Friendly beta", "Advisor formal"], defaults.tone),
    offer: normalizeChoice(source.offer, ["Founding member $10", "Free 7-day trial", "Pro pilot $29", "Analyst preview $49"], defaults.offer),
    proof: normalizeChoice(source.proof, ["NVDA risk memo", "Your data upload", "Evidence trace", "Portfolio workflow", "Quality guardrails"], defaults.proof),
    cta: normalizeChoice(source.cta, ["Book pilot call", "Upload source pack", "Reply with ticker", "Start paid pilot"], defaults.cta),
    followup: normalizeChoice(source.followup, ["24 hours", "48 hours", "7 days", "Next market event"], defaults.followup),
    owner: String(source.owner || defaults.owner).slice(0, 48),
    replyText: String(source.replyText || defaults.replyText).slice(0, 600)
  };
}

function getDefaultPilotOutreachConfig() {
  const cohort = state.pilotCohortConfig || getDefaultPilotCohortConfig();
  return {
    lead: `${cohort.segment || "Retail investor"} pilot cohort`,
    channel: cohort.channel || "Email",
    tone: cohort.segment === "Advisor" ? "Advisor formal" : cohort.segment === "Creator / community" ? "Friendly beta" : "Founder direct",
    offer: cohort.offer || "Founding member $10",
    proof: cohort.proof || "NVDA risk memo",
    cta: cohort.goal === "Source-pack collection" ? "Upload source pack" : cohort.goal === "First paid pilots" || cohort.goal === "Pricing test" ? "Start paid pilot" : cohort.goal === "Community launch" ? "Reply with ticker" : "Book pilot call",
    followup: cohort.cadence === "48-hour sprint" ? "24 hours" : cohort.cadence === "14-day sprint" ? "7 days" : "48 hours",
    owner: cohort.owner || "Founder",
    replyText: "Interested, but I want to see real SEC filings and understand whether the answer is cited enough before paying."
  };
}

function hydratePilotOutreachFromCohort() {
  const cohort = state.currentPilotCohort || buildPilotCohortSnapshot();
  state.pilotOutreachConfig = normalizePilotOutreachConfig({
    ...(state.pilotOutreachConfig || getDefaultPilotOutreachConfig()),
    lead: `${cohort.config.segment} ${cohort.config.goal.toLowerCase()} cohort`,
    channel: cohort.config.channel,
    tone: cohort.config.segment === "Advisor" ? "Advisor formal" : cohort.config.segment === "Creator / community" ? "Friendly beta" : cohort.config.segment === "Active trader" ? "Analyst crisp" : "Founder direct",
    offer: cohort.config.offer,
    proof: cohort.config.proof,
    cta: cohort.config.goal === "Source-pack collection" ? "Upload source pack" : cohort.config.goal === "First paid pilots" || cohort.config.goal === "Pricing test" ? "Start paid pilot" : cohort.config.goal === "Community launch" ? "Reply with ticker" : "Book pilot call",
    followup: cohort.config.cadence === "48-hour sprint" ? "24 hours" : cohort.config.cadence === "14-day sprint" ? "7 days" : "48 hours",
    owner: cohort.config.owner,
    replyText: `Interested in ${cohort.config.proof.toLowerCase()}, but wants to see a source-backed ${cohort.demo.config.ticker} example before ${cohort.config.offer.toLowerCase()}.`
  });
}

function savePilotOutreachReplyFromCurrent() {
  const snapshot = buildPilotOutreachSnapshot();
  const row = {
    id: `outreach-${Date.now()}`,
    date: new Date().toISOString().slice(0, 10),
    lead: snapshot.config.lead,
    channel: snapshot.config.channel,
    tone: snapshot.config.tone,
    offer: snapshot.config.offer,
    proof: snapshot.config.proof,
    cta: snapshot.config.cta,
    followup: snapshot.config.followup,
    owner: snapshot.config.owner,
    replyText: snapshot.config.replyText,
    score: snapshot.reply.score,
    intent: snapshot.reply.intent,
    objection: snapshot.reply.objection,
    nextMove: snapshot.nextMove
  };
  state.pilotOutreachReplies = normalizePilotOutreachReplies([row, ...(state.pilotOutreachReplies || [])]);
  savePilotOutreachReplies();
}

function normalizePilotOutreachReplies(replies) {
  return (Array.isArray(replies) ? replies : []).map((reply, index) => ({
    id: String(reply.id || `outreach-${index}`),
    date: String(reply.date || new Date().toISOString().slice(0, 10)).slice(0, 10),
    lead: String(reply.lead || "Pilot lead").slice(0, 80),
    channel: normalizeChoice(reply.channel, ["Email", "WhatsApp", "LinkedIn DM", "Community post"], "Email"),
    tone: normalizeChoice(reply.tone, ["Founder direct", "Analyst crisp", "Friendly beta", "Advisor formal"], "Founder direct"),
    offer: normalizeChoice(reply.offer, ["Founding member $10", "Free 7-day trial", "Pro pilot $29", "Analyst preview $49"], "Founding member $10"),
    proof: normalizeChoice(reply.proof, ["NVDA risk memo", "Your data upload", "Evidence trace", "Portfolio workflow", "Quality guardrails"], "NVDA risk memo"),
    cta: normalizeChoice(reply.cta, ["Book pilot call", "Upload source pack", "Reply with ticker", "Start paid pilot"], "Book pilot call"),
    followup: normalizeChoice(reply.followup, ["24 hours", "48 hours", "7 days", "Next market event"], "48 hours"),
    owner: String(reply.owner || "Founder").slice(0, 48),
    replyText: String(reply.replyText || "").slice(0, 600),
    score: Math.round(clampRevisionNumber(reply.score, 1, 100, 50)),
    intent: normalizeChoice(reply.intent, ["Hot", "Warm", "Nurture", "Cold"], "Warm"),
    objection: normalizeChoice(reply.objection, ["None", "Trust proof", "Real data", "Pricing", "Timing", "Do not contact"], "None"),
    nextMove: String(reply.nextMove || "Ask one ticker").slice(0, 60)
  })).slice(0, 30);
}

function loadPilotOutreachConfig() {
  return normalizePilotOutreachConfig(loadJson(STORAGE_KEYS.pilotOutreach, getDefaultPilotOutreachConfig()));
}

function savePilotOutreachConfig() {
  saveJson(STORAGE_KEYS.pilotOutreach, normalizePilotOutreachConfig(state.pilotOutreachConfig || getDefaultPilotOutreachConfig()));
}

function loadPilotOutreachReplies() {
  return normalizePilotOutreachReplies(loadJson(STORAGE_KEYS.pilotOutreachReplies, []));
}

function savePilotOutreachReplies() {
  saveJson(STORAGE_KEYS.pilotOutreachReplies, normalizePilotOutreachReplies(state.pilotOutreachReplies || []));
}

function exportPilotOutreachBrief() {
  const snapshot = state.currentPilotOutreach || buildPilotOutreachSnapshot();
  const date = new Date().toISOString().slice(0, 10);
  const content = [
    "# CiteAlpha Pilot Outreach & Reply Room",
    "",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    "## Outreach Setup",
    "",
    `- Lead/cohort: ${snapshot.config.lead}`,
    `- Channel: ${snapshot.config.channel}`,
    `- Tone: ${snapshot.config.tone}`,
    `- Offer: ${snapshot.config.offer}`,
    `- Proof asset: ${snapshot.config.proof}`,
    `- CTA: ${snapshot.config.cta}`,
    `- Follow-up window: ${snapshot.config.followup}`,
    `- Owner: ${snapshot.config.owner}`,
    "",
    "## Scorecard",
    "",
    `- Outreach score: ${snapshot.outreachScore}/100 (${snapshot.scoreLabel})`,
    `- Channel score: ${snapshot.channelScore}/100`,
    `- Tone score: ${snapshot.toneScore}/100`,
    `- CTA score: ${snapshot.ctaScore}/100`,
    `- Proof score: ${snapshot.proofScore}/100`,
    `- Reply intent: ${snapshot.reply.intent} (${snapshot.reply.score}/100)`,
    `- Reply objection: ${snapshot.reply.objection}`,
    `- Next move: ${snapshot.nextMove}`,
    "",
    "## Message Sequence",
    "",
    ...snapshot.messageRows.map((row) => `### ${row.label} - ${row.title}\n\n${row.body}`),
    "",
    "## Reply Triage",
    "",
    ...snapshot.replyRows.map((row) => `- ${row.label} | ${row.title}: ${row.body}`),
    "",
    "## Saved Reply Log",
    "",
    ...(snapshot.savedReplies.length ? snapshot.savedReplies.map((row) => `- ${row.date} | ${row.score}/100 | ${row.lead} | ${row.intent} | ${row.objection} | ${row.nextMove}`) : ["- No saved outreach replies yet."]),
    "",
    "## Product Note",
    "",
    "This outreach room is a client-side pilot workflow. Production should send messages through compliant tools with consent, unsubscribe handling, suppression lists, CRM audit trails, and no sensitive personal data in browser-only storage."
  ].join("\n");
  downloadTextFile(`citealpha-pilot-outreach-${date}.md`, content, "text/markdown;charset=utf-8");
  flashButtonLabel(els.exportPilotOutreachBrief, "Exported");
}

function renderPilotActivationRetentionRoom() {
  if (!els.pilotActivationMetricGrid) return;
  if (!state.pilotActivationConfig) state.pilotActivationConfig = loadPilotActivationConfig();
  syncPilotActivationInputs();
  const snapshot = buildPilotActivationSnapshot();
  state.currentPilotActivation = snapshot;
  els.pilotActivationMetricGrid.innerHTML = [
    { label: "Activation", value: `${snapshot.activationScore}/100`, sub: snapshot.scoreLabel },
    { label: "Retention risk", value: `${snapshot.retentionRisk}/100`, sub: snapshot.riskLabel },
    { label: "Aha moment", value: snapshot.config.aha, sub: snapshot.config.workflow },
    { label: "Next action", value: snapshot.nextAction, sub: snapshot.config.cadence }
  ].map((metric) => `
    <div class="activation-metric ${escapeAttr(snapshot.activationScore >= 82 ? "normal" : snapshot.activationScore >= 64 ? "watch" : "high")}">
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(String(metric.value))}</strong>
      <em>${escapeHtml(metric.sub)}</em>
    </div>
  `).join("");
  els.pilotActivationStepCount.textContent = String(snapshot.stepRows.length);
  els.pilotActivationStepList.innerHTML = renderPilotActivationStepRows(snapshot.stepRows);
  els.pilotActivationRiskCount.textContent = String(snapshot.riskRows.length);
  els.pilotActivationRiskList.innerHTML = renderPilotActivationRiskRows(snapshot.riskRows);
  els.pilotActivationSessionCount.textContent = String(snapshot.savedSessions.length);
  els.pilotActivationSessionList.innerHTML = renderPilotActivationSessionRows(snapshot.savedSessions);
}

function buildPilotActivationSnapshot() {
  const config = normalizePilotActivationConfig(state.pilotActivationConfig || getDefaultPilotActivationConfig());
  const outreach = state.currentPilotOutreach || buildPilotOutreachSnapshot();
  const sourceScore = scorePilotActivationSource(config.source);
  const workflowScore = scorePilotActivationWorkflow(config.workflow, config.aha);
  const ahaScore = scorePilotActivationAha(config.aha, outreach.config.proof);
  const paymentScore = scorePilotActivationPayment(config.payment, outreach.reply.intent);
  const cadenceScore = scorePilotActivationCadence(config.cadence, outreach.reply.intent);
  const activationScore = Math.max(1, Math.min(100, Math.round(
    outreach.outreachScore * 0.24 +
    sourceScore * 0.2 +
    workflowScore * 0.16 +
    ahaScore * 0.18 +
    paymentScore * 0.12 +
    cadenceScore * 0.1
  )));
  const retentionRisk = Math.max(1, Math.min(100, Math.round(100 - activationScore + (config.source === "Live API needed" ? 12 : 0) + (outreach.reply.objection === "Trust proof" ? 8 : 0))));
  const nextAction = makePilotActivationNextAction(config, outreach, activationScore, retentionRisk);
  const stepRows = buildPilotActivationStepRows(config, outreach, { activationScore, retentionRisk, nextAction });
  const riskRows = buildPilotActivationRiskRows(config, outreach, { activationScore, retentionRisk });
  const savedSessions = normalizePilotActivationSessions(state.pilotActivationSessions || []);
  return {
    config,
    outreach,
    sourceScore,
    workflowScore,
    ahaScore,
    paymentScore,
    cadenceScore,
    activationScore,
    retentionRisk,
    scoreLabel: activationScore >= 82 ? "Ready for paid pilot" : activationScore >= 64 ? "Strong first session" : activationScore >= 45 ? "Needs guided setup" : "High friction",
    riskLabel: retentionRisk >= 70 ? "High churn risk" : retentionRisk >= 45 ? "Watch closely" : "Healthy pilot path",
    nextAction,
    stepRows,
    riskRows,
    savedSessions
  };
}

function scorePilotActivationSource(source) {
  if (source === "Uploaded") return 96;
  if (source === "Upload promised") return 78;
  if (source === "Sample data") return 66;
  return 44;
}

function scorePilotActivationWorkflow(workflow, aha) {
  if (workflow === "Export memo" && aha === "PDF memo") return 94;
  if (workflow === "Import filing" && aha === "Your data") return 94;
  if (workflow === "Portfolio review" && aha === "Portfolio queue") return 90;
  if (workflow === "Ask risk question" && (aha === "Cited answer" || aha === "Evidence trace")) return 88;
  return 72;
}

function scorePilotActivationAha(aha, proof) {
  if (aha === "Your data" && proof === "Your data upload") return 96;
  if (aha === "Evidence trace" && proof === "Evidence trace") return 94;
  if (aha === "PDF memo" && proof === "NVDA risk memo") return 90;
  if (aha === "Portfolio queue" && proof === "Portfolio workflow") return 90;
  if (aha === "Cited answer") return 84;
  return 74;
}

function scorePilotActivationPayment(payment, intent) {
  if (intent === "Hot" && payment === "Analyst $49") return 88;
  if (intent === "Hot" && payment === "Pro $29") return 94;
  if (payment === "Founding $10") return 86;
  if (payment === "Free trial") return 76;
  return 70;
}

function scorePilotActivationCadence(cadence, intent) {
  if (intent === "Hot" && cadence === "Same day") return 96;
  if (cadence === "48 hours") return 86;
  if (cadence === "Same day") return 84;
  if (cadence === "Weekly") return 68;
  return 56;
}

function makePilotActivationNextAction(config, outreach, activationScore, retentionRisk) {
  if (config.source === "Live API needed") return "Resolve data path";
  if (retentionRisk >= 70) return "Founder-guided session";
  if (activationScore >= 82 && config.payment !== "Free trial") return "Ask for paid pilot";
  if (config.source === "Upload promised") return "Collect source pack";
  if (outreach.reply.objection === "Trust proof") return "Show source audit";
  return "Run first question";
}

function buildPilotActivationStepRows(config, outreach, context) {
  const ticker = outreach.cohort.demo.config.ticker || "NVDA";
  return [
    {
      label: "Setup",
      className: config.source === "Live API needed" ? "high" : config.source === "Sample data" ? "watch" : "normal",
      title: `${config.source} source path`,
      question: `What source setup should I require before onboarding a ${config.persona.toLowerCase()} pilot for $${ticker}?`,
      body: `Make the first session concrete before the user arrives.`
    },
    {
      label: "Run",
      className: "normal",
      title: config.workflow,
      question: makePilotActivationWorkflowQuestion(config, ticker),
      body: `The first workflow should create a visible ${config.aha.toLowerCase()} moment.`
    },
    {
      label: "Aha",
      className: context.activationScore >= 82 ? "normal" : "watch",
      title: config.aha,
      question: `Which $${ticker} evidence or memo output best demonstrates ${config.aha.toLowerCase()} in the first session?`,
      body: `Success means the user can repeat the workflow without founder narration.`
    },
    {
      label: "Commit",
      className: config.payment === "Free trial" ? "watch" : "normal",
      title: config.payment,
      question: `What is the right next commitment after the ${config.aha.toLowerCase()} moment for $${ticker}?`,
      body: `${context.nextAction}. Tie the ask to one completed action, not general excitement.`
    }
  ];
}

function makePilotActivationWorkflowQuestion(config, ticker) {
  if (config.workflow === "Import filing") return `What should the first imported $${ticker} filing prove during onboarding?`;
  if (config.workflow === "Export memo") return `What should the first $${ticker} exported memo include so the user sees value quickly?`;
  if (config.workflow === "Portfolio review") return `What portfolio question should a new pilot ask first after adding $${ticker}?`;
  return `What are the risks for $${ticker}, and which citations should a new pilot inspect first?`;
}

function buildPilotActivationRiskRows(config, outreach, context) {
  return [
    {
      label: config.source === "Live API needed" ? "High" : "Watch",
      className: config.source === "Live API needed" ? "high" : "watch",
      title: "Data friction",
      body: `${config.source}. A weak data path can block activation even when outreach intent is ${outreach.reply.intent.toLowerCase()}.`
    },
    {
      label: outreach.reply.objection === "Trust proof" ? "High" : "Ready",
      className: outreach.reply.objection === "Trust proof" ? "high" : "normal",
      title: "Trust gap",
      body: `${outreach.reply.objection}. Use source audit, citations, and compliance copy before asking for payment.`
    },
    {
      label: config.payment === "Free trial" ? "Watch" : "Ready",
      className: config.payment === "Free trial" ? "watch" : "normal",
      title: "Payment drift",
      body: `${config.payment}. Keep the next commitment explicit so the pilot does not become endless free support.`
    },
    {
      label: context.retentionRisk >= 70 ? "High" : "Ready",
      className: context.retentionRisk >= 70 ? "high" : context.retentionRisk >= 45 ? "watch" : "normal",
      title: "Retention loop",
      body: `${context.retentionRisk}/100 retention risk. Schedule a follow-up around the next research question or source upload.`
    }
  ];
}

function renderPilotActivationStepRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No activation steps</strong><span>Build activation to generate first-session actions.</span></div>`;
  }
  return rows.map((row) => `
    <button class="activation-step-row ${escapeAttr(row.className || "normal")}" type="button" data-activation-question="${escapeAttr(row.question)}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)}</em>
      </div>
    </button>
  `).join("");
}

function renderPilotActivationRiskRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No activation risks</strong><span>Risks appear after activation scoring.</span></div>`;
  }
  return rows.map((row) => `
    <div class="activation-risk-row ${escapeAttr(row.className || "normal")}">
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <em>${escapeHtml(row.body)}</em>
      </div>
    </div>
  `).join("");
}

function renderPilotActivationSessionRows(rows) {
  if (!rows.length) {
    return `<div class="ops-empty"><strong>No saved sessions</strong><span>Save first-session plans after onboarding calls.</span></div>`;
  }
  return rows.slice(0, 8).map((row) => `
    <div class="activation-session-row ${escapeAttr(row.score >= 82 ? "normal" : row.score >= 64 ? "watch" : "high")}">
      <span>${escapeHtml(String(row.score))}</span>
      <div>
        <strong>${escapeHtml(row.user)} - ${escapeHtml(row.nextAction)}</strong>
        <em>${escapeHtml(row.date)} | ${escapeHtml(row.persona)} | ${escapeHtml(row.source)} | ${escapeHtml(row.workflow)} | risk ${escapeHtml(String(row.retentionRisk))}/100</em>
      </div>
    </div>
  `).join("");
}

function readPilotActivationConfig() {
  return normalizePilotActivationConfig({
    user: els.pilotActivationUser.value,
    persona: els.pilotActivationPersona.value,
    source: els.pilotActivationSource.value,
    workflow: els.pilotActivationWorkflow.value,
    aha: els.pilotActivationAha.value,
    payment: els.pilotActivationPayment.value,
    cadence: els.pilotActivationCadence.value,
    owner: els.pilotActivationOwner.value,
    note: els.pilotActivationNote.value
  });
}

function syncPilotActivationInputs() {
  if (!els.pilotActivationUser) return;
  const config = normalizePilotActivationConfig(state.pilotActivationConfig || getDefaultPilotActivationConfig());
  els.pilotActivationUser.value = config.user;
  els.pilotActivationPersona.value = config.persona;
  els.pilotActivationSource.value = config.source;
  els.pilotActivationWorkflow.value = config.workflow;
  els.pilotActivationAha.value = config.aha;
  els.pilotActivationPayment.value = config.payment;
  els.pilotActivationCadence.value = config.cadence;
  els.pilotActivationOwner.value = config.owner;
  els.pilotActivationNote.value = config.note;
}

function normalizePilotActivationConfig(config) {
  const defaults = getDefaultPilotActivationConfig();
  const source = config || {};
  return {
    user: String(source.user || defaults.user).slice(0, 80),
    persona: normalizeChoice(source.persona, ["Retail investor", "Active trader", "Advisor", "Angel investor", "Creator / community"], defaults.persona),
    source: normalizeChoice(source.source, ["Sample data", "Upload promised", "Uploaded", "Live API needed"], defaults.source),
    workflow: normalizeChoice(source.workflow, ["Ask risk question", "Import filing", "Export memo", "Portfolio review"], defaults.workflow),
    aha: normalizeChoice(source.aha, ["Cited answer", "Evidence trace", "PDF memo", "Your data", "Portfolio queue"], defaults.aha),
    payment: normalizeChoice(source.payment, ["Free trial", "Founding $10", "Pro $29", "Analyst $49"], defaults.payment),
    cadence: normalizeChoice(source.cadence, ["Same day", "48 hours", "Weekly", "Self-serve"], defaults.cadence),
    owner: String(source.owner || defaults.owner).slice(0, 48),
    note: String(source.note || defaults.note).slice(0, 560)
  };
}

function getDefaultPilotActivationConfig() {
  return {
    user: "NVDA pilot user",
    persona: "Retail investor",
    source: "Sample data",
    workflow: "Ask risk question",
    aha: "Cited answer",
    payment: "Founding $10",
    cadence: "48 hours",
    owner: "Founder",
    note: "Pilot succeeds when the user runs one real question, sees a cited answer, exports or saves the output, and agrees to the next paid or source-data step."
  };
}

function hydratePilotActivationFromOutreach() {
  const outreach = state.currentPilotOutreach || buildPilotOutreachSnapshot();
  const offer = outreach.config.offer === "Analyst preview $49"
    ? "Analyst $49"
    : outreach.config.offer === "Pro pilot $29"
      ? "Pro $29"
      : outreach.config.offer === "Free 7-day trial"
        ? "Free trial"
        : "Founding $10";
  state.pilotActivationConfig = normalizePilotActivationConfig({
    ...(state.pilotActivationConfig || getDefaultPilotActivationConfig()),
    user: outreach.config.lead,
    persona: outreach.cohort.config.segment,
    source: outreach.reply.objection === "Real data" || outreach.config.cta === "Upload source pack" ? "Upload promised" : "Sample data",
    workflow: outreach.config.proof === "Your data upload" ? "Import filing" : outreach.config.proof === "Portfolio workflow" ? "Portfolio review" : outreach.config.cta === "Start paid pilot" ? "Export memo" : "Ask risk question",
    aha: outreach.config.proof === "Evidence trace" ? "Evidence trace" : outreach.config.proof === "Your data upload" ? "Your data" : outreach.config.proof === "Portfolio workflow" ? "Portfolio queue" : outreach.config.proof === "NVDA risk memo" ? "PDF memo" : "Cited answer",
    payment: offer,
    cadence: outreach.reply.intent === "Hot" ? "Same day" : outreach.config.followup === "7 days" ? "Weekly" : "48 hours",
    owner: outreach.config.owner,
    note: `Hydrated from outreach: ${outreach.reply.intent} reply, ${outreach.reply.objection} objection, next move ${outreach.nextMove}.`
  });
}

function savePilotActivationSessionFromCurrent() {
  const snapshot = buildPilotActivationSnapshot();
  const row = {
    id: `activation-${Date.now()}`,
    date: new Date().toISOString().slice(0, 10),
    user: snapshot.config.user,
    persona: snapshot.config.persona,
    source: snapshot.config.source,
    workflow: snapshot.config.workflow,
    aha: snapshot.config.aha,
    payment: snapshot.config.payment,
    cadence: snapshot.config.cadence,
    owner: snapshot.config.owner,
    note: snapshot.config.note,
    score: snapshot.activationScore,
    retentionRisk: snapshot.retentionRisk,
    nextAction: snapshot.nextAction
  };
  state.pilotActivationSessions = normalizePilotActivationSessions([row, ...(state.pilotActivationSessions || [])]);
  savePilotActivationSessions();
}

function normalizePilotActivationSessions(sessions) {
  return (Array.isArray(sessions) ? sessions : []).map((session, index) => ({
    id: String(session.id || `activation-${index}`),
    date: String(session.date || new Date().toISOString().slice(0, 10)).slice(0, 10),
    user: String(session.user || "Pilot user").slice(0, 80),
    persona: normalizeChoice(session.persona, ["Retail investor", "Active trader", "Advisor", "Angel investor", "Creator / community"], "Retail investor"),
    source: normalizeChoice(session.source, ["Sample data", "Upload promised", "Uploaded", "Live API needed"], "Sample data"),
    workflow: normalizeChoice(session.workflow, ["Ask risk question", "Import filing", "Export memo", "Portfolio review"], "Ask risk question"),
    aha: normalizeChoice(session.aha, ["Cited answer", "Evidence trace", "PDF memo", "Your data", "Portfolio queue"], "Cited answer"),
    payment: normalizeChoice(session.payment, ["Free trial", "Founding $10", "Pro $29", "Analyst $49"], "Founding $10"),
    cadence: normalizeChoice(session.cadence, ["Same day", "48 hours", "Weekly", "Self-serve"], "48 hours"),
    owner: String(session.owner || "Founder").slice(0, 48),
    note: String(session.note || "").slice(0, 560),
    score: Math.round(clampRevisionNumber(session.score, 1, 100, 50)),
    retentionRisk: Math.round(clampRevisionNumber(session.retentionRisk, 1, 100, 50)),
    nextAction: String(session.nextAction || "Run first question").slice(0, 60)
  })).slice(0, 30);
}

function loadPilotActivationConfig() {
  return normalizePilotActivationConfig(loadJson(STORAGE_KEYS.pilotActivation, getDefaultPilotActivationConfig()));
}

function savePilotActivationConfig() {
  saveJson(STORAGE_KEYS.pilotActivation, normalizePilotActivationConfig(state.pilotActivationConfig || getDefaultPilotActivationConfig()));
}

function loadPilotActivationSessions() {
  return normalizePilotActivationSessions(loadJson(STORAGE_KEYS.pilotActivationSessions, []));
}

function savePilotActivationSessions() {
  saveJson(STORAGE_KEYS.pilotActivationSessions, normalizePilotActivationSessions(state.pilotActivationSessions || []));
}

function exportPilotActivationBrief() {
  const snapshot = state.currentPilotActivation || buildPilotActivationSnapshot();
  const date = new Date().toISOString().slice(0, 10);
  const content = [
    "# CiteAlpha Pilot Activation & Retention Room",
    "",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    "## Activation Setup",
    "",
    `- Pilot user: ${snapshot.config.user}`,
    `- Persona: ${snapshot.config.persona}`,
    `- Source setup: ${snapshot.config.source}`,
    `- First workflow: ${snapshot.config.workflow}`,
    `- Aha moment: ${snapshot.config.aha}`,
    `- Payment path: ${snapshot.config.payment}`,
    `- Support cadence: ${snapshot.config.cadence}`,
    `- Owner: ${snapshot.config.owner}`,
    `- Success note: ${snapshot.config.note}`,
    "",
    "## Scorecard",
    "",
    `- Activation score: ${snapshot.activationScore}/100 (${snapshot.scoreLabel})`,
    `- Retention risk: ${snapshot.retentionRisk}/100 (${snapshot.riskLabel})`,
    `- Source score: ${snapshot.sourceScore}/100`,
    `- Workflow score: ${snapshot.workflowScore}/100`,
    `- Aha score: ${snapshot.ahaScore}/100`,
    `- Payment score: ${snapshot.paymentScore}/100`,
    `- Next action: ${snapshot.nextAction}`,
    "",
    "## First-Session Plan",
    "",
    ...snapshot.stepRows.map((row) => `- ${row.label} | ${row.title}: ${row.question} ${row.body}`),
    "",
    "## Retention Risks",
    "",
    ...snapshot.riskRows.map((row) => `- ${row.label} | ${row.title}: ${row.body}`),
    "",
    "## Saved Session Log",
    "",
    ...(snapshot.savedSessions.length ? snapshot.savedSessions.map((row) => `- ${row.date} | ${row.score}/100 | ${row.user} | ${row.workflow} | ${row.aha} | risk ${row.retentionRisk}/100 | ${row.nextAction}`) : ["- No saved activation sessions yet."]),
    "",
    "## Product Note",
    "",
    "This activation room is a client-side pilot workflow. Production should connect onboarding to authenticated accounts, source permissions, billing status, support tickets, analytics events, and consented CRM records."
  ].join("\n");
  downloadTextFile(`citealpha-pilot-activation-${date}.md`, content, "text/markdown;charset=utf-8");
  flashButtonLabel(els.exportPilotActivationBrief, "Exported");
}

function exportFounderBrief() {
  const snapshot = buildOpsSnapshot();
  const date = new Date().toISOString().slice(0, 10);
  const content = [
    "# CiteAlpha Founder Brief",
    "",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    "## Operating Snapshot",
    "",
    `- Pilot leads: ${snapshot.leadCount}`,
    `- Lead quality: ${snapshot.leadScore}/100`,
    `- Research questions run: ${snapshot.questionRuns}`,
    `- Imported sources: ${state.uploadedDocs.length}`,
    `- Saved briefs: ${state.notes.length}`,
    `- Security posture: ${snapshot.securityScore}/100`,
    `- Launch readiness: ${snapshot.readiness.score}%`,
    "",
    "## Demand Signals",
    "",
    ...(snapshot.tickerCounts.length ? snapshot.tickerCounts.slice(0, 6).map((item) => `- ${item.ticker}: ${item.count} signal${item.count === 1 ? "" : "s"}`) : ["- No ticker demand captured yet."]),
    "",
    "## Launch Readiness",
    "",
    ...snapshot.readiness.items.map((item) => `- ${item.statusLabel}: ${item.label} - ${item.note}`),
    "",
    "## Next Move",
    "",
    `- ${snapshot.priority.label}: ${snapshot.priority.note}`,
    "",
    "## Product Note",
    "",
    "CiteAlpha is still a prototype. Before paid launch, move API fetching, key storage, user accounts, billing, and scheduled SEC refresh jobs behind a backend with authentication, rate limits, audit logs, and secret management."
  ].join("\n");
  downloadTextFile(`citealpha-founder-brief-${date}.md`, content, "text/markdown;charset=utf-8");
  flashButtonLabel(els.exportFounderBrief, "Exported");
}

function copyCurrentBrief() {
  if (!state.lastBrief) return;
  copyTextToClipboard(state.lastBrief);
}

function copyTextToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

function saveCurrentBrief() {
  if (!state.lastBrief) return;
  const title = state.lastBrief.split("\n").find(Boolean) || "Saved research brief";
  const note = {
    id: `note-${Date.now()}`,
    title: stripHtml(title).slice(0, 120),
    body: state.lastBrief,
    intent: state.currentCitations[0] ? state.currentCitations[0].ticker : "Desk",
    date: new Date().toLocaleDateString()
  };
  state.notes = [note, ...state.notes].slice(0, 10);
  saveJson(STORAGE_KEYS.notes, state.notes);
  recordWorkflowEvent("save", {
    ticker: note.intent,
    title: note.title
  });
  renderNotebook();
  renderLaunchOps();
}

function exportMarkdownBrief() {
  if (!state.lastBrief) return;
  const ticker = state.currentCitations[0] ? state.currentCitations[0].ticker : state.selectedTicker;
  const date = new Date().toISOString().slice(0, 10);
  const filename = `citealpha-${String(ticker || "desk").toLowerCase()}-brief-${date}.md`;
  const content = [
    "# CiteAlpha Research Brief",
    "",
    cleanBriefTextForExport(),
    "",
    "## Evidence Stack",
    "",
    makeMarkdownEvidenceStack(),
    "",
    "_Synthetic demo corpus for product prototyping. Import source documents before using the workflow for live investment research._"
  ].join("\n");

  downloadTextFile(filename, content, "text/markdown;charset=utf-8");
  flashButtonLabel(els.exportMarkdownBrief, "Saved");
}

function exportPdfBrief() {
  if (!state.lastBrief) {
    flashButtonLabel(els.exportPdfBrief, "Run first");
    return;
  }
  const ticker = state.currentCitations[0] ? state.currentCitations[0].ticker : state.selectedTicker;
  const date = new Date().toISOString().slice(0, 10);
  const filename = `citealpha-${String(ticker || "desk").toLowerCase()}-memo-${date}.pdf`;
  const pdfBytes = buildDirectPdfBrief();
  downloadBinaryFile(filename, pdfBytes, "application/pdf");
  flashButtonLabel(els.exportPdfBrief, "Saved");
}

function downloadTextFile(filename, content, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}

function downloadBinaryFile(filename, bytes, mimeType) {
  const blob = new Blob([bytes], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}

function cleanBriefTextForExport() {
  const text = String(state.lastBrief || "").trim();
  const lines = text.split(/\n/);
  const evidenceStart = lines.findIndex((line) => /^Evidence stack:/i.test(line.trim()));
  const valuationStart = lines.findIndex((line, index) => evidenceStart >= 0 && index > evidenceStart && /^Valuation read-through:/i.test(line.trim()));
  if (evidenceStart >= 0 && valuationStart > evidenceStart) {
    return [...lines.slice(0, evidenceStart), ...lines.slice(valuationStart)].join("\n").replace(/\n{3,}/g, "\n\n").trim();
  }
  return text;
}

function makeMarkdownEvidenceStack() {
  if (!state.currentCitations.length) {
    return "No evidence stack available. Run an analysis first.";
  }
  return state.currentCitations.map((citation) => {
    return `### ${citation.citationId} - ${citation.company} ${citation.type} (${citation.period})\n\n${citation.section}: ${citation.text}`;
  }).join("\n\n");
}

function buildDirectPdfBrief() {
  return createSimplePdf(buildPdfMemoBlocks());
}

function buildPdfMemoBlocks() {
  const model = state.lastAnswerModel || {};
  const company = getExportCompany();
  const tickerDisplay = makePrintTickerDisplay(model, company);
  const sourceTrust = model.sourceTrust || makeSourceTrust(state.currentCitations);
  const generatedAt = new Date().toLocaleString();
  const blocks = [
    {
      type: "cover",
      eyebrow: "CiteAlpha investment memo",
      title: model.headline || "Research brief",
      subtitle: "Evidence-backed equity research generated from filings, earnings calls, and valuation notes.",
      generatedAt
    },
    {
      type: "snapshot",
      items: [
        { label: "Focus", value: tickerDisplay },
        { label: "Confidence", value: `${model.confidence || 0}%` },
        { label: "Tone", value: `${model.toneLabel || "Balanced"} ${model.tonePercent || 0}/100` },
        { label: "Data", value: sourceTrust.label || "Sample data" }
      ]
    },
    { type: "audit", text: makePdfSourceAuditLine(model) },
    { type: "audit", text: makePdfSecurityLine() },
    { type: "heading", text: "Bottom line" },
    { type: "callout", text: getMemoThesis(model) }
  ];

  if (model.intentId === "risk") {
    blocks.push({ type: "heading", text: "Three cited risk factors" });
    buildRiskFactors(state.currentCitations, company).forEach((factor, index) => {
      const citation = state.currentCitations[factor.citationIndex];
      const citationText = citation ? `${citation.citationId} ${citation.type} - ${citation.section}` : "Evidence stack";
      blocks.push({
        type: "riskCard",
        number: index + 1,
        title: factor.title,
        severity: factor.severity,
        body: factor.body,
        citation: citationText
      });
    });
  } else {
    blocks.push({ type: "heading", text: "Evidence highlights" });
    state.currentCitations.slice(0, 3).forEach((citation, index) => {
      blocks.push({
        type: "evidenceCard",
        label: `${index + 1}. ${citation.citationId} ${citation.type}`,
        title: citation.section,
        text: snippet(citation.text, 280)
      });
    });
  }

  if (model.copilot && model.copilot.checklist) {
    blocks.push({ type: "heading", text: "Committee checklist" });
    blocks.push({ type: "checklist", items: model.copilot.checklist, score: model.copilot.averageScore });
  } else {
    blocks.push({ type: "heading", text: "Committee cues" });
    blocks.push({ type: "cueGrid", items: makeDecisionCues(model, company) });
  }

  blocks.push({ type: "heading", text: "Valuation read-through" });
  blocks.push({ type: "callout", text: getMemoValuation() });

  blocks.push({ type: "heading", text: "Evidence pack" });
  blocks.push({
    type: "sourceTable",
    rows: state.currentCitations.slice(0, 6).map((citation) => ({
      id: citation.citationId,
      source: `${getCitationSourceLabel(citation)} | ${citation.company} | ${citation.type} | ${citation.period}`,
      section: citation.section,
      score: citation.score.toFixed(1),
      text: citation.text
    }))
  });

  blocks.push({
    type: "footnote",
    text: `${sourceTrust.plainText} CiteAlpha is research software, not investment advice.`
  });

  return blocks;
}

function makePdfSourceAuditLine(model) {
  const audit = model && model.sourceAudit;
  if (!audit) return "Source audit: Evidence quality pending.";
  return `Source audit: ${audit.quality}/100 quality | ${audit.coverageLabel} coverage | Data: ${audit.dataLabel || "Sample"} | Mix: ${audit.balance}`;
}

function makePdfSecurityLine() {
  const posture = summarizeSecurityPosture();
  const findingText = posture.findings.length
    ? `${posture.findings.length} source/security finding${posture.findings.length === 1 ? "" : "s"} flagged`
    : "no risky patterns detected";
  return `Security posture: ${posture.score}/100 | ${posture.secretPosture} | ${posture.ragGuard} | ${findingText}`;
}

function createSimplePdf(blocks) {
  const pageWidth = 612;
  const pageHeight = 792;
  const margin = 54;
  const bottom = 54;
  const maxWidth = pageWidth - margin * 2;
  const pages = [[]];
  let y = pageHeight - margin;

  const currentPage = () => pages[pages.length - 1];
  const newPage = () => {
    pages.push([]);
    y = pageHeight - margin;
  };
  const ensureSpace = (height) => {
    if (y - height < bottom) newPage();
  };
  const addFillRect = (x, rectY, width, height, color = "0.97 0.98 0.98") => {
    currentPage().push(`q ${color} rg ${x} ${rectY} ${width} ${height} re f Q`);
  };
  const addStrokeRect = (x, rectY, width, height, color = "0.84 0.87 0.86", lineWidth = 0.6) => {
    currentPage().push(`q ${color} RG ${lineWidth} w ${x} ${rectY} ${width} ${height} re S Q`);
  };
  const addTextLine = (text, x, textY, options = {}) => {
    const size = options.size || 10;
    const font = options.font || "F1";
    const color = options.color || "0.07 0.09 0.09";
    currentPage().push(`q ${color} rg BT /${font} ${size} Tf 0 Tw ${x} ${textY} Td (${pdfEscape(text)}) Tj ET Q`);
  };
  const addWrappedAt = (text, x, startY, width, options = {}) => {
    const size = options.size || 10;
    const font = options.font || "F1";
    const leading = options.leading || Math.ceil(size * 1.35);
    const color = options.color || "0.15 0.2 0.19";
    const chars = Math.max(18, Math.floor(width / (size * 0.52)));
    const lines = wrapPdfText(text, chars).slice(0, options.maxLines || 20);
    let localY = startY;
    lines.forEach((line, index) => {
      const justify = Boolean(options.justify && index < lines.length - 1 && line.split(" ").length > 4);
      const wordSpacing = justify ? computePdfWordSpacing(line, size, width) : 0;
      currentPage().push(`q ${color} rg BT /${font} ${size} Tf ${wordSpacing.toFixed(3)} Tw ${x} ${localY} Td (${pdfEscape(line)}) Tj ET Q`);
      localY -= leading;
    });
    return localY;
  };
  const addCover = (block) => {
    ensureSpace(112);
    addFillRect(margin, y - 84, maxWidth, 88, "0.93 0.97 0.96");
    addStrokeRect(margin, y - 84, maxWidth, 88, "0.55 0.76 0.73", 0.8);
    addFillRect(margin + 16, y - 50, 34, 34, "0.07 0.09 0.09");
    addTextLine("CA", margin + 23, y - 37, { size: 11, font: "F2", color: "0.90 0.56 0.17" });
    addTextLine(block.eyebrow, margin + 62, y - 18, { size: 9, font: "F2", color: "0.09 0.46 0.43" });
    const afterTitle = addWrappedAt(block.title, margin + 62, y - 36, maxWidth - 84, { size: 18, font: "F2", leading: 21, color: "0.07 0.09 0.09", maxLines: 2 });
    addWrappedAt(block.subtitle, margin + 62, afterTitle - 3, maxWidth - 84, { size: 9.5, leading: 12, color: "0.39 0.44 0.43", maxLines: 2 });
    addTextLine(`Generated ${block.generatedAt}`, pageWidth - margin - 154, y - 70, { size: 8, color: "0.39 0.44 0.43" });
    y -= 104;
  };
  const addSnapshot = (block) => {
    ensureSpace(76);
    const gap = 8;
    const cardWidth = (maxWidth - gap * 3) / 4;
    const cardHeight = 56;
    block.items.forEach((item, index) => {
      const x = margin + index * (cardWidth + gap);
      addFillRect(x, y - cardHeight, cardWidth, cardHeight, "0.98 0.99 0.99");
      addStrokeRect(x, y - cardHeight, cardWidth, cardHeight, "0.84 0.87 0.86", 0.6);
      addTextLine(item.label, x + 9, y - 16, { size: 7.5, font: "F2", color: "0.39 0.44 0.43" });
      addWrappedAt(item.value, x + 9, y - 31, cardWidth - 18, { size: 11, font: "F2", leading: 12, maxLines: 2, color: "0.07 0.09 0.09" });
    });
    y -= cardHeight + 12;
  };
  const addAuditBand = (text) => {
    ensureSpace(38);
    addFillRect(margin, y - 28, maxWidth, 30, "0.89 0.95 0.94");
    addStrokeRect(margin, y - 28, maxWidth, 30, "0.56 0.76 0.73", 0.6);
    addTextLine("SOURCE AUDIT", margin + 10, y - 11, { size: 7.5, font: "F2", color: "0.09 0.46 0.43" });
    addWrappedAt(text.replace(/^Source audit:\s*/i, ""), margin + 88, y - 11, maxWidth - 100, { size: 9, font: "F2", leading: 11, maxLines: 2, color: "0.07 0.09 0.09" });
    y -= 42;
  };
  const addCallout = (text) => {
    const size = 10.25;
    const chars = Math.max(24, Math.floor((maxWidth - 24) / (size * 0.52)));
    const lines = wrapPdfText(text, chars);
    const height = Math.max(48, 22 + lines.length * 14);
    ensureSpace(height + 4);
    addFillRect(margin, y - height, maxWidth, height, "0.98 0.99 0.99");
    addStrokeRect(margin, y - height, maxWidth, height, "0.84 0.87 0.86", 0.6);
    addWrappedAt(text, margin + 12, y - 18, maxWidth - 24, { size, leading: 14, justify: true, maxLines: 14 });
    y -= height + 5;
  };
  const addRiskCard = (block) => {
    const body = `${block.body} [${block.citation}]`;
    const severityColor = block.severity === "High" ? "0.70 0.15 0.12" : "0.67 0.39 0.00";
    const severityBg = block.severity === "High" ? "0.99 0.92 0.92" : "1 0.95 0.86";
    const titleLines = wrapPdfText(block.title, Math.floor((maxWidth - 98) / (10.4 * 0.52))).slice(0, 2);
    const lines = wrapPdfText(body, Math.floor((maxWidth - 36) / (9.1 * 0.52))).slice(0, 4);
    const bodyStart = y - 44 - titleLines.length * 6;
    const height = Math.max(78, 48 + titleLines.length * 7 + lines.length * 10.8);
    ensureSpace(height + 6);
    addFillRect(margin, y - height, maxWidth, height, "1 1 1");
    addStrokeRect(margin, y - height, maxWidth, height, block.severity === "High" ? "0.70 0.15 0.12" : "0.70 0.41 0.00", 0.7);
    addFillRect(margin + 10, y - 25, 28, 18, severityBg);
    addTextLine(`R${block.number}`, margin + 16, y - 19, { size: 8, font: "F2", color: severityColor });
    addFillRect(margin + 10, y - 48, 56, 17, severityBg);
    addTextLine(block.severity.toUpperCase(), margin + 19, y - 42, { size: 7.2, font: "F2", color: severityColor });
    addWrappedAt(block.title, margin + 76, y - 18, maxWidth - 96, { size: 10.4, font: "F2", leading: 12, maxLines: 2, color: "0.07 0.09 0.09" });
    addWrappedAt(body, margin + 18, bodyStart, maxWidth - 36, { size: 9.1, leading: 10.8, justify: true, maxLines: 4 });
    y -= height + 8;
  };
  const addCueGrid = (block) => {
    ensureSpace(124);
    const gap = 8;
    const cardWidth = (maxWidth - gap * 2) / 3;
    const cardHeight = 112;
    block.items.forEach((cue, index) => {
      const x = margin + index * (cardWidth + gap);
      addFillRect(x, y - cardHeight, cardWidth, cardHeight, "0.98 0.99 0.99");
      addStrokeRect(x, y - cardHeight, cardWidth, cardHeight, "0.84 0.87 0.86", 0.6);
      addTextLine(cue.label.toUpperCase(), x + 9, y - 15, { size: 7.3, font: "F2", color: "0.09 0.46 0.43" });
      const afterTitle = addWrappedAt(cue.title, x + 9, y - 31, cardWidth - 18, { size: 9.8, font: "F2", leading: 11.8, maxLines: 2 });
      addWrappedAt(cue.body, x + 9, afterTitle - 4, cardWidth - 18, { size: 8.1, leading: 10.2, maxLines: 5 });
    });
    y -= cardHeight + 12;
  };
  const addChecklist = (block) => {
    const items = block.items || [];
    if (!items.length) return;
    const columns = items.length > 3 ? 2 : 1;
    const rowHeight = 23;
    const rowCount = Math.ceil(items.length / columns);
    const gap = 14;
    const colWidth = (maxWidth - gap * (columns - 1)) / columns;
    const height = 34 + rowCount * rowHeight;
    ensureSpace(height + 8);
    addFillRect(margin, y - height, maxWidth, height, "0.98 0.99 0.99");
    addStrokeRect(margin, y - height, maxWidth, height, "0.84 0.87 0.86", 0.6);
    addTextLine("COMMITTEE READINESS", margin + 12, y - 16, { size: 7.5, font: "F2", color: "0.09 0.46 0.43" });
    addTextLine(`${block.score || 0}/100`, pageWidth - margin - 54, y - 16, { size: 11, font: "F2", color: "0.07 0.09 0.09" });
    items.forEach((item, index) => {
      const column = index % columns;
      const rowIndex = Math.floor(index / columns);
      const x = margin + column * (colWidth + gap);
      const rowY = y - 40 - rowIndex * rowHeight;
      const score = Math.max(0, Math.min(100, Number(item.score) || 0));
      const barX = x + 116;
      const barWidth = Math.max(72, colWidth - 150);
      addTextLine(snippet(item.label, 22), x + 12, rowY + 2, { size: 8.1, font: "F2", color: "0.15 0.2 0.19" });
      addFillRect(barX, rowY - 4, barWidth, 7, "0.89 0.92 0.91");
      addFillRect(barX, rowY - 4, barWidth * (score / 100), 7, score >= 72 ? "0.25 0.63 0.35" : score >= 55 ? "0.70 0.41 0.00" : "0.70 0.15 0.12");
      addTextLine(String(score), x + colWidth - 24, rowY, { size: 8.2, font: "F2", color: "0.07 0.09 0.09" });
    });
    y -= height + 10;
  };
  const addEvidenceCard = (block) => {
    ensureSpace(70);
    addFillRect(margin, y - 60, maxWidth, 60, "1 1 1");
    addStrokeRect(margin, y - 60, maxWidth, 60, "0.84 0.87 0.86", 0.6);
    addTextLine(block.label, margin + 10, y - 15, { size: 8, font: "F2", color: "0.09 0.46 0.43" });
    addTextLine(block.title, margin + 10, y - 29, { size: 10, font: "F2" });
    addWrappedAt(block.text, margin + 10, y - 43, maxWidth - 20, { size: 8.8, leading: 10.5, maxLines: 2 });
    y -= 68;
  };
  const addSourceTable = (block) => {
    if (!block.rows.length) return;
    const rows = block.rows.slice(0, 6);
    const columns = rows.length > 4 ? 3 : 2;
    const gap = 7;
    const cardWidth = (maxWidth - gap * (columns - 1)) / columns;
    const cardHeight = 52;
    const rowCount = Math.ceil(rows.length / columns);
    const totalHeight = 28 + rowCount * cardHeight + Math.max(0, rowCount - 1) * gap + 4;
    ensureSpace(totalHeight);
    addFillRect(margin, y - 22, maxWidth, 22, "0.07 0.09 0.09");
    addTextLine("SOURCE STACK", margin + 9, y - 14, { size: 7.5, font: "F2", color: "1 1 1" });
    addTextLine(`${rows.length} passages sorted by relevance`, pageWidth - margin - 142, y - 14, { size: 7.2, font: "F2", color: "1 1 1" });
    y -= 30;
    rows.forEach((row, index) => {
      const column = index % columns;
      const rowIndex = Math.floor(index / columns);
      const x = margin + column * (cardWidth + gap);
      const top = y - rowIndex * (cardHeight + gap);
      addFillRect(x, top - cardHeight, cardWidth, cardHeight, "1 1 1");
      addStrokeRect(x, top - cardHeight, cardWidth, cardHeight, "0.84 0.87 0.86", 0.45);
      addFillRect(x + 8, top - 22, 26, 15, "0.89 0.95 0.94");
      addTextLine(row.id, x + 14, top - 17, { size: 7.5, font: "F2", color: "0.09 0.46 0.43" });
      addWrappedAt(`${row.score} | ${snippet(row.source, 26)}`, x + 42, top - 14, cardWidth - 52, { size: 7.1, font: "F2", leading: 8.6, maxLines: 1 });
      addWrappedAt(snippet(row.section, 42), x + 9, top - 32, cardWidth - 18, { size: 7.4, leading: 8.4, maxLines: 1, color: "0.15 0.2 0.19" });
      addWrappedAt(snippet(row.text, 76), x + 9, top - 44, cardWidth - 18, { size: 6.8, leading: 7.8, maxLines: 1, color: "0.39 0.44 0.43" });
    });
    y -= rowCount * cardHeight + Math.max(0, rowCount - 1) * gap + 8;
  };
  const addText = (text, options = {}) => {
    const size = options.size || 11;
    const font = options.font || "F1";
    const leading = options.leading || Math.ceil(size * 1.35);
    const indent = options.indent || 0;
    const gapBefore = options.gapBefore || 0;
    const gapAfter = options.gapAfter || 0;
    const chars = Math.max(24, Math.floor((maxWidth - indent) / (size * 0.52)));
    const lines = wrapPdfText(text, chars);
    ensureSpace(gapBefore + lines.length * leading + gapAfter);
    y -= gapBefore;
    lines.forEach((line, lineIndex) => {
      const justify = Boolean(options.justify && lineIndex < lines.length - 1 && line.split(" ").length > 4);
      const wordSpacing = justify ? computePdfWordSpacing(line, size, maxWidth - indent) : 0;
      currentPage().push(`BT /${font} ${size} Tf ${wordSpacing.toFixed(3)} Tw ${margin + indent} ${y} Td (${pdfEscape(line)}) Tj ET`);
      y -= leading;
    });
    y -= gapAfter;
  };
  const addRule = () => {
    ensureSpace(12);
    currentPage().push(`0.09 0.46 0.43 RG 1.2 w ${margin} ${y} m ${pageWidth - margin} ${y} l S`);
    y -= 12;
  };

  blocks.forEach((block, index) => {
    if (block.type === "cover") addCover(block);
    else if (block.type === "snapshot") addSnapshot(block);
    else if (block.type === "callout") addCallout(block.text);
    else if (block.type === "riskCard") addRiskCard(block);
    else if (block.type === "cueGrid") addCueGrid(block);
    else if (block.type === "checklist") addChecklist(block);
    else if (block.type === "evidenceCard") addEvidenceCard(block);
    else if (block.type === "sourceTable") addSourceTable(block);
    else if (block.type === "eyebrow") addText(block.text, { size: 10, font: "F2", leading: 13, gapAfter: 4 });
    else if (block.type === "title") {
      addText(block.text, { size: 19, font: "F2", leading: 23, gapAfter: 6 });
      addRule();
    } else if (block.type === "meta") addText(block.text, { size: 9, font: "F1", leading: 12, gapAfter: 8 });
    else if (block.type === "audit") addAuditBand(block.text);
    else if (block.type === "heading") {
      addText(block.text, { size: 13, font: "F2", leading: 16, gapBefore: index ? 9 : 0, gapAfter: 2 });
      currentPage().push(`0.84 0.87 0.86 RG 0.5 w ${margin} ${y + 4} m ${pageWidth - margin} ${y + 4} l S`);
    } else if (block.type === "bullet") addText(block.text, { size: 10.25, font: "F1", leading: 14, indent: 12, gapAfter: 3, justify: true });
    else if (block.type === "footnote") addText(block.text, { size: 8.1, font: "F1", leading: 10, gapBefore: 6, justify: true });
    else addText(block.text, { size: 10.5, font: "F1", leading: 14, gapAfter: 3, justify: true });
  });

  decoratePdfPages(pages, pageWidth, pageHeight, margin);
  return encodePdf(pages, pageWidth, pageHeight);
}

function decoratePdfPages(pages, pageWidth, pageHeight, margin) {
  pages.forEach((commands, index) => {
    commands.unshift(
      `0.09 0.46 0.43 RG 0.8 w ${margin} ${pageHeight - 36} m ${pageWidth - margin} ${pageHeight - 36} l S`,
      `BT /F2 8 Tf 0 Tw ${margin} ${pageHeight - 27} Td (CiteAlpha Research Memo) Tj ET`
    );
    commands.push(
      `0.84 0.87 0.86 RG 0.5 w ${margin} 36 m ${pageWidth - margin} 36 l S`,
      `BT /F1 8 Tf 0 Tw ${margin} 24 Td (Synthetic research software - not investment advice) Tj ET`,
      `BT /F1 8 Tf 0 Tw ${pageWidth - margin - 42} 24 Td (Page ${index + 1}/${pages.length}) Tj ET`
    );
  });
}

function encodePdf(pages, pageWidth, pageHeight) {
  const objects = [];
  const pageObjectNumbers = [];
  objects.push("<< /Type /Catalog /Pages 2 0 R >>");
  objects.push("");
  objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");

  pages.forEach((commands) => {
    const pageNumber = objects.length + 1;
    const contentNumber = pageNumber + 1;
    pageObjectNumbers.push(pageNumber);
    const content = commands.join("\n");
    objects.push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${contentNumber} 0 R >>`);
    objects.push(`<< /Length ${content.length} >>\nstream\n${content}\nendstream`);
  });

  objects[1] = `<< /Type /Pages /Kids [${pageObjectNumbers.map((number) => `${number} 0 R`).join(" ")}] /Count ${pageObjectNumbers.length} >>`;

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });
  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  const bytes = new Uint8Array(pdf.length);
  for (let index = 0; index < pdf.length; index += 1) {
    bytes[index] = pdf.charCodeAt(index);
  }
  return bytes;
}

function wrapPdfText(text, maxChars) {
  const words = pdfPlainText(text).split(/\s+/).filter(Boolean);
  const lines = [];
  let line = "";
  words.forEach((word) => {
    if (word.length > maxChars) {
      if (line) {
        lines.push(line);
        line = "";
      }
      for (let index = 0; index < word.length; index += maxChars) {
        lines.push(word.slice(index, index + maxChars));
      }
      return;
    }
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  });
  if (line) lines.push(line);
  return lines.length ? lines : [""];
}

function computePdfWordSpacing(line, size, width) {
  const spaces = (line.match(/ /g) || []).length;
  if (!spaces) return 0;
  const estimatedWidth = estimatePdfTextWidth(line, size);
  const extra = width - estimatedWidth;
  if (extra <= 0 || extra > 48) return 0;
  return Math.min(5.5, extra / spaces);
}

function estimatePdfTextWidth(text, size) {
  return pdfPlainText(text).split("").reduce((sum, char) => {
    if (char === " ") return sum + size * 0.27;
    if (/[il.,:;|'`]/.test(char)) return sum + size * 0.23;
    if (/[mwMW]/.test(char)) return sum + size * 0.78;
    if (/[A-Z]/.test(char)) return sum + size * 0.58;
    if (/[0-9$%]/.test(char)) return sum + size * 0.52;
    return sum + size * 0.48;
  }, 0);
}

function pdfPlainText(value) {
  return String(value || "")
    .replace(/[\u2010-\u2015]/g, "-")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[^\x20-\x7E]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function pdfEscape(value) {
  return pdfPlainText(value)
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function buildPrintableBriefHtml() {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>CiteAlpha PDF Memo</title>
    <style>${buildPrintableStyles()}</style>
  </head>
  <body>${buildPrintableBriefBody()}</body>
</html>`;
}

function buildPrintableBriefBody() {
  const model = state.lastAnswerModel || {};
  const company = getExportCompany();
  const tickerDisplay = makePrintTickerDisplay(model, company);
  const generatedAt = new Date().toLocaleString();
  const thesis = getMemoThesis(model);
  const valuation = getMemoValuation();
  const cues = makeDecisionCues(model, company);
  const evidenceCards = state.currentCitations.slice(0, 6).map((citation) => `
    <article class="print-evidence">
      <div><strong>${escapeHtml(citation.citationId)}</strong><span>${escapeHtml(citation.score.toFixed(1))}</span></div>
      <h3>${escapeHtml(citation.company)} - ${escapeHtml(citation.type)}</h3>
      <p><b>${escapeHtml(citation.section)}:</b> ${escapeHtml(citation.text)}</p>
    </article>
  `).join("");

  return `
    <main class="print-memo">
      <header class="print-hero">
        <div>
          <span class="print-brand">CiteAlpha</span>
          <h1>Investment Committee Memo</h1>
          <p>Evidence-backed equity research generated from filings, earnings calls, and valuation notes.</p>
        </div>
        <aside>
          <strong>${escapeHtml(tickerDisplay)}</strong>
          <span>${escapeHtml(generatedAt)}</span>
        </aside>
      </header>

      <section class="print-snapshot">
        <div><span>Focus</span><strong>${escapeHtml(tickerDisplay)}</strong></div>
        <div><span>Question type</span><strong>${escapeHtml(model.intentLabel || "Research brief")}</strong></div>
        <div><span>Confidence</span><strong>${escapeHtml(String(model.confidence || 0))}%</strong></div>
        <div><span>Management tone</span><strong>${escapeHtml(model.toneLabel || "Balanced")} ${escapeHtml(String(model.tonePercent || 0))}/100</strong></div>
      </section>

      <section class="print-section">
        <p class="print-kicker">Bottom line</p>
        <h2>${escapeHtml(model.headline || "Run an analysis to generate a brief.")}</h2>
        <p>${escapeHtml(thesis)}</p>
      </section>

      ${model.intentId === "risk" ? makePrintableRiskSection(company) : makePrintableEvidenceHighlights()}

      <section class="print-section">
        <p class="print-kicker">Committee cues</p>
        <div class="print-cues">
          ${cues.map((cue) => `<article><span>${escapeHtml(cue.label)}</span><strong>${escapeHtml(cue.title)}</strong><p>${escapeHtml(cue.body)}</p></article>`).join("")}
        </div>
      </section>

      <section class="print-section">
        <p class="print-kicker">Valuation read-through</p>
        <p>${escapeHtml(valuation)}</p>
      </section>

      <section class="print-section">
        <p class="print-kicker">Evidence pack</p>
        <div class="print-evidence-grid">${evidenceCards || "<p>No evidence stack available.</p>"}</div>
      </section>

      <footer class="print-disclosure">
        Synthetic demo corpus for product prototyping. Import source documents before using the workflow for live investment research. CiteAlpha is research software, not investment advice.
      </footer>
    </main>
  `;
}

function buildPrintableStyles() {
  return `
    * { box-sizing: border-box; }
    body { margin: 0; color: #121817; background: #ffffff; font-family: Inter, Arial, sans-serif; }
    .print-memo { width: min(100%, 980px); margin: 0 auto; padding: 28px; }
    .print-hero { display: grid; grid-template-columns: 1fr auto; gap: 18px; padding-bottom: 18px; border-bottom: 3px solid #121817; }
    .print-brand, .print-kicker { color: #14766f; font-size: 11px; font-weight: 900; letter-spacing: 0; text-transform: uppercase; }
    .print-hero h1 { margin: 8px 0 0; font-size: 34px; line-height: 1.02; }
    .print-hero p { max-width: 620px; margin: 8px 0 0; color: #64716d; font-size: 13px; line-height: 1.45; }
    .print-hero aside { min-width: 170px; align-self: start; padding: 12px; border: 1px solid #d8dfdc; border-radius: 8px; text-align: right; }
    .print-hero aside strong { display: block; font-size: 19px; }
    .print-hero aside span { display: block; margin-top: 5px; color: #64716d; font-size: 11px; }
    .print-snapshot { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8px; margin-top: 14px; }
    .print-snapshot div, .print-section, .print-evidence, .print-cues article, .print-risk-list li { border: 1px solid #d8dfdc; border-radius: 8px; background: #f7f9f8; }
    .print-snapshot div { padding: 10px; }
    .print-snapshot span, .print-cues span { display: block; color: #64716d; font-size: 10px; font-weight: 900; text-transform: uppercase; }
    .print-snapshot strong { display: block; margin-top: 5px; font-size: 16px; line-height: 1.15; }
    .print-section { margin-top: 12px; padding: 14px; background: #ffffff; break-inside: avoid; }
    .print-section h2 { margin: 6px 0 0; font-size: 23px; line-height: 1.13; }
    .print-section p { margin: 8px 0 0; color: #263230; font-size: 13px; line-height: 1.5; }
    .print-risk-list { display: grid; gap: 8px; margin: 10px 0 0; padding: 0; list-style: none; }
    .print-risk-list li { padding: 11px; background: #ffffff; }
    .print-risk-list strong { display: block; font-size: 14px; }
    .print-risk-list small { display: inline-flex; margin-bottom: 6px; padding: 3px 7px; border-radius: 999px; color: #b3261e; background: #fdebea; font-size: 10px; font-weight: 900; text-transform: uppercase; }
    .print-cues { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; margin-top: 10px; }
    .print-cues article { padding: 10px; background: #f7f9f8; }
    .print-cues strong { display: block; margin-top: 5px; font-size: 13px; }
    .print-cues p { font-size: 12px; }
    .print-evidence-grid { display: grid; gap: 8px; margin-top: 10px; }
    .print-evidence { padding: 10px; background: #ffffff; break-inside: avoid; }
    .print-evidence div { display: flex; justify-content: space-between; gap: 10px; color: #64716d; font-size: 10px; font-weight: 900; text-transform: uppercase; }
    .print-evidence h3 { margin: 6px 0 0; font-size: 13px; }
    .print-evidence p { margin-top: 5px; font-size: 11px; line-height: 1.42; }
    .print-disclosure { margin-top: 14px; padding-top: 10px; border-top: 1px solid #d8dfdc; color: #64716d; font-size: 10px; line-height: 1.4; }
    @page { margin: 12mm; }
    @media print {
      .print-memo { padding: 0; }
      .print-hero h1 { font-size: 30px; }
      .print-section { margin-top: 10px; }
    }
  `;
}

function printCurrentPageFallback() {
  document.querySelector("#printBriefRoot")?.remove();
  document.querySelector("#printBriefStyles")?.remove();

  const style = document.createElement("style");
  style.id = "printBriefStyles";
  style.textContent = `
    @media screen { #printBriefRoot { display: none; } }
    @media print {
      body > *:not(#printBriefRoot):not(#printBriefStyles) { display: none !important; }
      #printBriefRoot { display: block !important; }
    }
    ${buildPrintableStyles()}
  `;
  const root = document.createElement("section");
  root.id = "printBriefRoot";
  root.innerHTML = buildPrintableBriefBody();
  document.body.appendChild(style);
  document.body.appendChild(root);

  let cleanupTimer = null;
  const cleanup = () => {
    window.clearTimeout(cleanupTimer);
    window.removeEventListener("afterprint", cleanup);
    root.remove();
    style.remove();
  };

  window.addEventListener("afterprint", cleanup);
  cleanupTimer = window.setTimeout(cleanup, 120000);

  window.setTimeout(() => {
    window.requestAnimationFrame(() => {
      flashButtonLabel(els.exportPdfBrief, "Print");
      window.print();
    });
  }, 60);
}

function getExportCompany() {
  const ticker = state.currentCitations[0] ? state.currentCitations[0].ticker : state.selectedTicker;
  return getCompanies().find((company) => company.ticker === ticker) || getCompanies()[0] || SAMPLE_COMPANIES[0];
}

function makePrintTickerDisplay(model, company) {
  const focus = model && model.tickerFocus;
  if (focus && focus.isAlias) return `$${focus.rawTicker} -> ${focus.ticker}`;
  return company ? company.ticker : "Desk";
}

function getMemoThesis(model) {
  const blocks = cleanBriefTextForExport().split(/\n{2,}/).map((block) => block.trim()).filter(Boolean);
  const headline = model && model.headline;
  const headlineIndex = blocks.findIndex((block) => block === headline);
  if (headlineIndex >= 0 && blocks[headlineIndex + 1]) return blocks[headlineIndex + 1];
  return blocks.find((block) => !/confidence|management tone|ticker focus/i.test(block)) || "Run an analysis to generate a cited memo.";
}

function getMemoValuation() {
  const block = cleanBriefTextForExport().split(/\n{2,}/).find((item) => /^Valuation read-through:/i.test(item.trim()));
  return block ? block.replace(/^Valuation read-through:\s*/i, "") : "Use the valuation lens to flex FCF margin, terminal multiple, and discount rate against the source evidence.";
}

function makePrintableRiskSection(company) {
  const factors = buildRiskFactors(state.currentCitations, company);
  return `
    <section class="print-section">
      <p class="print-kicker">Three cited risk factors</p>
      <ol class="print-risk-list">
        ${factors.map((factor) => {
          const citation = state.currentCitations[factor.citationIndex];
          const citationText = citation ? `${citation.citationId} - ${citation.type}, ${citation.section}` : "Evidence stack";
          return `<li><small>${escapeHtml(factor.severity)}</small><strong>${escapeHtml(factor.title)}</strong><p>${escapeHtml(factor.body)} <b>${escapeHtml(citationText)}</b></p></li>`;
        }).join("")}
      </ol>
    </section>
  `;
}

function makePrintableEvidenceHighlights() {
  const items = state.currentCitations.slice(0, 3).map((citation) => `
    <li>
      <small>${escapeHtml(citation.citationId)}</small>
      <strong>${escapeHtml(citation.type)} - ${escapeHtml(citation.section)}</strong>
      <p>${escapeHtml(snippet(citation.text, 220))}</p>
    </li>
  `).join("");
  return `
    <section class="print-section">
      <p class="print-kicker">Evidence highlights</p>
      <ol class="print-risk-list">${items || "<li><strong>No retrieved evidence.</strong></li>"}</ol>
    </section>
  `;
}

function makeDecisionCues(model, company) {
  if (model && model.intentId === "risk") {
    return [
      {
        label: "Underwrite",
        title: "Risk is concentrated, not fatal",
        body: "The memo frames the key downside drivers so the investor can model them instead of reacting to the headline."
      },
      {
        label: "Model first",
        title: "Flex FCF margin",
        body: "Cash conversion is the first valuation sensitivity because several risk factors flow through working capital or capex."
      },
      {
        label: "Watch",
        title: "Next filing language",
        body: "Look for changes in customer cadence, commitments, platform timing, and management wording in the next update."
      }
    ];
  }
  if (model && model.intentId === "rates") {
    return [
      {
        label: "Underwrite",
        title: "Balance sheet first",
        body: "Rate sensitivity should be tested through debt, discount rate, and cash conversion before changing the multiple."
      },
      {
        label: "Compare",
        title: "Quality of funding",
        body: "Companies with stronger FCF and lower net debt deserve more credit when financing conditions tighten."
      },
      {
        label: "Watch",
        title: "Refinancing window",
        body: "Track comments on credit spreads, variable-rate exposure, and project funding availability."
      }
    ];
  }
  return [
    {
      label: "Underwrite",
      title: "Source quality",
      body: `${company.ticker} should be judged by retrieved source evidence, not a static sector narrative.`
    },
    {
      label: "Model first",
      title: "Operating driver",
      body: "Flex the operating variable most directly supported by the filing before moving terminal multiple."
    },
    {
      label: "Watch",
      title: "Management tone",
      body: "Compare call confidence with filing language to catch gaps between narrative and disclosure."
    }
  ];
}

function flashButtonLabel(button, label) {
  if (!button) return;
  const original = button.textContent;
  button.textContent = label;
  window.setTimeout(() => {
    button.textContent = original;
  }, 1200);
}

async function submitWaitlistLead() {
  const email = els.waitlistEmail.value.trim();
  if (!email) {
    els.waitlistEmail.focus();
    return;
  }
  const lead = {
    id: `lead-${Date.now()}`,
    email,
    profile: els.waitlistProfile.value,
    plan: els.waitlistPlan.value,
    need: els.waitlistNeed.value,
    tickers: els.waitlistTickers.value.trim(),
    question: els.waitlistQuestion.value.trim(),
    date: new Date().toISOString()
  };
  state.waitlistLeads = [lead, ...state.waitlistLeads].slice(0, 50);
  saveJson(STORAGE_KEYS.waitlist, state.waitlistLeads);
  recordWorkflowEvent("lead", {
    ticker: lead.tickers || inferTickerFromQuestion(lead.question) || "",
    plan: lead.plan,
    need: lead.need
  });
  renderLaunchOps();

  const summary = [
    "CiteAlpha waitlist lead",
    `Email: ${lead.email}`,
    `Profile: ${lead.profile}`,
    `Plan: ${lead.plan}`,
    `Need: ${lead.need}`,
    `Tickers: ${lead.tickers || "Not provided"}`,
    `Question: ${lead.question || "Not provided"}`,
    `Date: ${new Date(lead.date).toLocaleString()}`
  ].join("\n");

  els.waitlistResult.classList.remove("is-success");
  els.waitlistResult.textContent = "Joining the pilot list...";

  try {
    const payload = {
      name: "CiteAlpha waitlist",
      email: lead.email,
      _replyto: lead.email,
      profile: lead.profile,
      plan: lead.plan,
      need: lead.need,
      tickers: lead.tickers || "Not provided",
      question: lead.question || "Not provided",
      source: window.location.href,
      _subject: "New CiteAlpha waitlist lead",
      _template: "table",
      _captcha: "false"
    };
    const response = await fetch(WAITLIST_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      throw new Error(`Waitlist endpoint returned ${response.status}`);
    }
    els.waitlistResult.classList.add("is-success");
    els.waitlistResult.textContent = "You are on the CiteAlpha pilot list. Check your inbox if this is the first activation email.";
    els.waitlistEmail.value = "";
    els.waitlistTickers.value = "";
    els.waitlistQuestion.value = "";
  } catch (error) {
    copyLeadSummary(summary);
    els.waitlistResult.textContent = `Saved locally and copied for follow-up. If this is the first live submission, confirm the FormSubmit activation email and submit once more.`;
  }
}

function copyLeadSummary(summary) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(summary).catch(() => fallbackCopy(summary));
  } else {
    fallbackCopy(summary);
  }
}

async function processFiles(files) {
  const usableFiles = files.filter((file) => /\.(txt|md|csv|html|json)$/i.test(file.name));
  if (!usableFiles.length) return;
  const docs = await Promise.all(usableFiles.map(readUploadedFile));
  addUploadedDocs(docs);
}

function readUploadedFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(makeUploadedDoc({
        ticker: inferTickerFromName(file.name) || "CUSTOM",
        title: file.name.replace(/\.[^.]+$/, ""),
        type: inferTypeFromName(file.name),
        text: String(reader.result || "")
      }));
    };
    reader.onerror = reject;
    reader.readAsText(file);
  });
}

function loadDemoImportPack(packKey) {
  const pack = DEMO_IMPORT_PACKS[String(packKey || "").toUpperCase()];
  if (!pack) return;
  const docs = pack.docs.map((doc) => makeUploadedDoc({
    ticker: pack.ticker,
    title: doc.title,
    type: doc.type,
    text: doc.text
  }));
  addUploadedDocs(docs, { replaceTicker: pack.ticker, sourceLabel: `${pack.ticker} demo import pack` });
  els.queryInput.value = pack.question;
  syncTickerFocus(pack.question);
  els.queryInput.focus();
}

async function connectSecFilingBridge() {
  const ticker = normalizeTicker(els.secBridgeTicker.value || state.selectedTicker);
  const formType = String(els.secBridgeType.value || "10-K").toUpperCase();
  setSecBridgeStatus(`Checking SEC submissions for ${ticker}...`, "loading");
  try {
    const docs = await fetchSecBridgeDocs(ticker, formType);
    addUploadedDocs(docs, { replaceTicker: ticker, sourceLabel: `${ticker} SEC live bridge` });
    els.queryInput.value = makeSecBridgeQuestion(ticker, formType);
    syncTickerFocus(els.queryInput.value);
    setSecBridgeStatus(`Connected ${docs.length} live SEC ${formType} metadata source${docs.length === 1 ? "" : "s"} for ${ticker}. Run analysis to use them.`, "success");
  } catch (error) {
    const docs = makeSecBridgeFallbackDocs(ticker, formType, error);
    addUploadedDocs(docs, { replaceTicker: ticker, sourceLabel: `${ticker} SEC mock bridge` });
    els.queryInput.value = makeSecBridgeQuestion(ticker, formType);
    syncTickerFocus(els.queryInput.value);
    setSecBridgeStatus(`SEC browser fetch fell back to labeled mock bridge data for ${ticker}. Production should use a backend User-Agent bridge.`, "fallback");
  }
  els.queryInput.focus();
}

async function fetchSecBridgeDocs(ticker, formType) {
  if (!window.fetch) throw new Error("Browser fetch is unavailable.");
  const tickerResponse = await fetch(SEC_COMPANY_TICKERS_URL, { cache: "no-store" });
  if (!tickerResponse.ok) throw new Error(`Ticker lookup failed with ${tickerResponse.status}.`);
  const tickerJson = await tickerResponse.json();
  const companies = Object.values(tickerJson || {});
  const match = companies.find((entry) => normalizeTicker(entry.ticker) === ticker);
  if (!match) throw new Error(`No SEC ticker match for ${ticker}.`);
  const cik = String(match.cik_str || "").padStart(10, "0");
  const submissionResponse = await fetch(`${SEC_SUBMISSIONS_URL}${cik}.json`, { cache: "no-store" });
  if (!submissionResponse.ok) throw new Error(`SEC submissions failed with ${submissionResponse.status}.`);
  const submission = await submissionResponse.json();
  return makeSecLiveDocs(ticker, formType, submission, match, cik);
}

function makeSecLiveDocs(ticker, formType, submission, tickerMatch, cik) {
  const recent = submission && submission.filings && submission.filings.recent;
  if (!recent || !Array.isArray(recent.form)) throw new Error("SEC submissions response did not include recent filings.");
  const wanted = recent.form
    .map((form, index) => ({ form, index }))
    .filter((item) => String(item.form || "").toUpperCase() === formType)
    .slice(0, 3);
  if (!wanted.length) throw new Error(`No recent ${formType} filing metadata found for ${ticker}.`);
  const companyName = submission.name || tickerMatch.title || `${ticker} SEC filer`;
  return wanted.map(({ form, index }) => {
    const accession = recent.accessionNumber[index] || "accession pending";
    const filingDate = recent.filingDate[index] || new Date().toISOString().slice(0, 10);
    const reportDate = recent.reportDate[index] || filingDate;
    const primaryDoc = recent.primaryDocument[index] || "primary document pending";
    const description = recent.primaryDocDescription[index] || `${form} filing`;
    const filingUrl = makeSecArchiveUrl(cik, accession, primaryDoc);
    const text = [
      `SEC live filing bridge metadata for ${companyName} (${ticker}).`,
      `Form ${form} was filed on ${filingDate} for report date ${reportDate}.`,
      `Primary document: ${primaryDoc}. Description: ${description}.`,
      `Accession number: ${accession}. Filing URL: ${filingUrl}.`,
      "This browser bridge imports SEC submissions metadata now; full filing text ingestion should be routed through a backend connector with declared SEC User-Agent compliance.",
      `${form} research workflow should inspect risk factors, management discussion, liquidity, capital resources, revenue durability, margin pressure, and management tone before producing a live investment memo.`
    ].join(" ");
    return makeBridgeDoc({
      ticker,
      company: `${ticker} SEC live bridge`,
      title: `SEC ${form} metadata ${filingDate}`,
      type: `${form} metadata`,
      text,
      sourceKind: "sec-live",
      date: filingDate
    });
  });
}

function makeSecBridgeFallbackDocs(ticker, formType, error) {
  const pack = DEMO_IMPORT_PACKS[ticker];
  const baseText = pack && pack.docs.length
    ? pack.docs.map((doc) => `${doc.title}. ${doc.text}`).join(" ")
    : [
        `SEC mock bridge fallback for ${ticker}.`,
        `${formType} filing analysis should inspect risk factors, management discussion, liquidity, capital resources, customer concentration, margin durability, debt exposure, and execution timing.`,
        "The live browser request may be blocked by CORS, fair-access controls, or a missing backend User-Agent bridge. This mock source is labeled separately so it cannot be confused with live SEC data."
      ].join(" ");
  return [
    makeBridgeDoc({
      ticker,
      company: `${ticker} SEC mock bridge`,
      title: `SEC bridge mock ${formType}`,
      type: `${formType} bridge mock`,
      text: `${baseText} Mock bridge note: ${String(error && error.message ? error.message : "Live SEC fetch unavailable")}.`,
      sourceKind: "sec-mock",
      date: new Date().toISOString().slice(0, 10)
    })
  ];
}

function makeBridgeDoc({ ticker, company, title, type, text, sourceKind, date }) {
  const doc = {
    id: `${sourceKind}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    ticker: normalizeTicker(ticker),
    company,
    type,
    period: title,
    date,
    sourceKind,
    sections: splitImportedText(String(text || "").replace(/\s+/g, " ").trim())
  };
  doc.sourceQuality = assessSourceQuality(doc);
  doc.securityAudit = assessDocumentSecurity(doc);
  return doc;
}

function makeSecBridgeQuestion(ticker, formType) {
  if (formType === "8-K") return `What new risks or signals appear in the latest SEC filing for $${ticker}?`;
  if (formType === "10-Q") return `What changed in the latest 10-Q risk and liquidity discussion for $${ticker}?`;
  return `What are the risks for $${ticker}?`;
}

function makeSecArchiveUrl(cik, accession, primaryDoc) {
  const compactAccession = String(accession || "").replace(/-/g, "");
  return `https://www.sec.gov/Archives/edgar/data/${Number(cik)}/${compactAccession}/${primaryDoc}`;
}

function setSecBridgeStatus(message, status = "") {
  if (!els.secBridgeStatus) return;
  els.secBridgeStatus.className = `sec-bridge-status ${status ? `is-${status}` : ""}`;
  els.secBridgeStatus.textContent = message;
}

function makeUploadedDoc({ ticker, title, type, text }) {
  const safeTicker = normalizeTicker(ticker);
  const cleanTitle = String(title || "Imported document").trim().slice(0, 90);
  const cleanText = String(text || "").replace(/\s+/g, " ").trim();
  const doc = {
    id: `upload-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    ticker: safeTicker,
    company: `${safeTicker} imported corpus`,
    type: String(type || "Research note"),
    period: cleanTitle,
    date: new Date().toISOString().slice(0, 10),
    sourceKind: "uploaded",
    sections: splitImportedText(cleanText)
  };
  doc.sourceQuality = assessSourceQuality(doc);
  doc.securityAudit = assessDocumentSecurity(doc);
  return doc;
}

function addUploadedDocs(docs, options = {}) {
  const filtered = docs.map(normalizeUploadedDoc).filter((doc) => doc.sections.some((section) => section.text.length > 30));
  if (!filtered.length) return;
  const existing = options.replaceTicker
    ? state.uploadedDocs.filter((doc) => doc.ticker !== normalizeTicker(options.replaceTicker))
    : state.uploadedDocs;
  state.uploadedDocs = [...filtered, ...existing].slice(0, 18);
  state.documents = [...state.uploadedDocs, ...SAMPLE_DOCS];
  state.lastImportAudit = summarizeImportAudit(filtered, options.sourceLabel);
  filtered.forEach((doc) => {
    state.enabledDocIds.add(doc.id);
    state.activeTickers.add(doc.ticker);
  });
  saveJson(STORAGE_KEYS.uploads, state.uploadedDocs);
  recordWorkflowEvent("import", {
    ticker: Array.from(new Set(filtered.map((doc) => doc.ticker))).join(", "),
    count: filtered.length,
    source: options.sourceLabel || "manual import"
  });
  renderCoverage();
  renderLibrary();
  renderSourceQuality();
  renderSecurityPosture();
  renderContextBand();
  renderMarketStatusRail();
  renderValuationOptions();
  renderLaunchOps();
  renderFilingChangeMonitor();
  renderValuationMatrix();
  renderResearchTearSheet();
  renderThesisDebateRoom();
  renderResearchDossierBuilder();
  renderThesisTimelineAuditTrail();
  renderMorningBriefingRoom();
  renderEarningsCallPrepRoom();
  renderPostEarningsDebriefRoom();
  renderGuidanceRevisionRoom();
  renderModelVersionControlRoom();
  renderIcApprovalRoom();
  renderPortfolioActionRoom();
  drawSignalMap();
}

function normalizeUploadedDoc(doc) {
  const source = doc || {};
  const sourceKind = ["sec-live", "sec-mock", "uploaded"].includes(source.sourceKind) ? source.sourceKind : "uploaded";
  const normalized = {
    ...source,
    ticker: normalizeTicker(source.ticker),
    type: String(source.type || "Research note"),
    period: String(source.period || source.title || "Imported document"),
    date: String(source.date || new Date().toISOString().slice(0, 10)),
    sourceKind,
    sections: Array.isArray(source.sections) ? source.sections : []
  };
  normalized.company = normalized.company || `${normalized.ticker} imported corpus`;
  normalized.sourceQuality = assessSourceQuality(normalized);
  normalized.securityAudit = assessDocumentSecurity(normalized);
  return normalized;
}

function assessSourceQuality(doc) {
  const text = doc.sections.map((section) => section.text).join(" ");
  const sections = doc.sections.length;
  const passages = doc.sections.reduce((sum, section) => sum + splitIntoChunks(section.text, 520).length, 0);
  const hasFilingSignal = /risk factors|management discussion|md&a|liquidity|capital resources|10-k|10-q/i.test(text);
  const hasCallSignal = /prepared remarks|analyst q&a|question-and-answer|operator|guidance|management/i.test(text);
  const metrics = extractMetrics(text).length;
  const lengthScore = Math.min(24, Math.floor(text.length / 260));
  const structureScore = Math.min(20, sections * 5 + passages * 2);
  const sourceScore = (hasFilingSignal ? 12 : 0) + (hasCallSignal ? 10 : 0) + (/model|valuation/i.test(doc.type) ? 8 : 0);
  const metricScore = Math.min(12, metrics * 2);
  const quality = Math.max(35, Math.min(98, 36 + lengthScore + structureScore + sourceScore + metricScore));
  return {
    quality,
    sections,
    passages,
    metrics,
    hasFilingSignal,
    hasCallSignal
  };
}

function assessDocumentSecurity(doc) {
  const text = [
    doc.ticker,
    doc.company,
    doc.type,
    doc.period,
    ...(doc.sections || []).map((section) => `${section.title} ${section.text}`)
  ].join(" ");
  return assessTextSecurity(text, getDocSourceLabel(doc));
}

function assessTextSecurity(text, label = "Text") {
  const value = String(text || "");
  const findings = SECURITY_PATTERNS
    .filter((rule) => rule.pattern.test(value))
    .map((rule) => ({
      id: rule.id,
      label: rule.label,
      severity: rule.severity,
      advice: rule.advice
    }));
  const highCount = findings.filter((finding) => finding.severity === "high").length;
  const mediumCount = findings.filter((finding) => finding.severity === "medium").length;
  const score = Math.max(30, 100 - highCount * 28 - mediumCount * 14);
  const level = highCount ? "high" : mediumCount ? "medium" : "low";
  const summary = findings.length
    ? `${label} flagged ${findings.length} pattern${findings.length === 1 ? "" : "s"}`
    : `${label} clear`;
  return {
    score,
    level,
    findings,
    summary
  };
}

function summarizeSecurityPosture() {
  const enabledDocs = state.uploadedDocs.filter((doc) => state.enabledDocIds.has(doc.id));
  const docs = enabledDocs.length ? enabledDocs : state.uploadedDocs;
  const audits = docs.map((doc) => doc.securityAudit || assessDocumentSecurity(doc));
  const findings = audits.flatMap((audit) => audit.findings || []);
  const sourceScore = audits.length
    ? Math.round(audits.reduce((sum, audit) => sum + (audit.score || 100), 0) / audits.length)
    : 100;
  const questionScore = state.lastQuestionSecurity ? state.lastQuestionSecurity.score : 100;
  const providerPenalty = state.marketSettings.provider !== "demo" ? 3 : 0;
  const score = Math.max(40, Math.min(100, Math.round((sourceScore * 0.65 + questionScore * 0.35) - providerPenalty)));
  return {
    score,
    findings,
    sourceScore,
    questionScore,
    ragGuard: findings.some((finding) => finding.id === "prompt-injection") ? "Flagged source text" : "Evidence-only mode",
    secretPosture: findings.some((finding) => finding.id === "secret-leak") ? "Credential warning" : "No stored API keys",
    importPosture: docs.length ? `${docs.length} checked` : "Sample only"
  };
}

function summarizeImportAudit(docs, sourceLabel = "") {
  const first = docs[0];
  const sections = docs.reduce((sum, doc) => sum + ((doc.sourceQuality && doc.sourceQuality.sections) || doc.sections.length), 0);
  const passages = docs.reduce((sum, doc) => sum + ((doc.sourceQuality && doc.sourceQuality.passages) || 0), 0);
  const quality = Math.round(docs.reduce((sum, doc) => sum + ((doc.sourceQuality && doc.sourceQuality.quality) || 50), 0) / docs.length);
  const securityScore = Math.round(docs.reduce((sum, doc) => sum + ((doc.securityAudit && doc.securityAudit.score) || 100), 0) / docs.length);
  const securityFindings = docs.flatMap((doc) => (doc.securityAudit && doc.securityAudit.findings) || []);
  const tickerList = Array.from(new Set(docs.map((doc) => doc.ticker))).join(", ");
  const typeList = Array.from(new Set(docs.map((doc) => shortDocType(doc.type)))).join(", ");
  return {
    label: docs.length === 1 ? "Source quality check" : "Import batch quality",
    ticker: tickerList,
    type: typeList,
    sections,
    passages,
    quality,
    securityScore,
    securityNote: securityFindings.length
      ? `Security review flagged: ${securityFindings.slice(0, 2).map((finding) => finding.label).join(", ")}.`
      : "Security scan clear.",
    note: `${sourceLabel ? `${sourceLabel}: ` : ""}${docs.length} imported source${docs.length === 1 ? "" : "s"} added and prioritized ahead of the sample corpus when enabled.${first ? ` Latest: ${first.period}.` : ""}`
  };
}

function splitImportedText(text) {
  if (!text) return [];
  const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text];
  const sections = [];
  let buffer = [];
  let index = 1;
  for (const sentence of sentences) {
    buffer.push(sentence.trim());
    if (buffer.join(" ").length > 850) {
      sections.push({ title: `Imported section ${index}`, text: buffer.join(" ") });
      buffer = [];
      index += 1;
    }
  }
  if (buffer.length) sections.push({ title: `Imported section ${index}`, text: buffer.join(" ") });
  return sections;
}

function splitIntoChunks(text, targetLength) {
  if (text.length <= targetLength) return [text];
  const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text];
  const chunks = [];
  let buffer = "";
  for (const sentence of sentences) {
    if ((buffer + " " + sentence).trim().length > targetLength && buffer) {
      chunks.push(buffer.trim());
      buffer = sentence;
    } else {
      buffer = `${buffer} ${sentence}`.trim();
    }
  }
  if (buffer) chunks.push(buffer.trim());
  return chunks;
}

function inferTickerFromName(name) {
  const match = String(name).toUpperCase().match(/\b[A-Z]{2,5}\b/);
  return match ? match[0] : "";
}

function inferTypeFromName(name) {
  const lower = String(name).toLowerCase();
  if (lower.includes("10-k") || lower.includes("10k")) return "10-K filing";
  if (lower.includes("10-q") || lower.includes("10q")) return "10-Q filing";
  if (lower.includes("call") || lower.includes("transcript")) return "Earnings call";
  if (lower.includes("model")) return "Valuation model";
  return "Research note";
}

function normalizeTicker(value) {
  const ticker = String(value || "CUSTOM").toUpperCase().replace(/[^A-Z0-9.]/g, "").slice(0, 8);
  return ticker || "CUSTOM";
}

function estimateRevenue(doc) {
  const text = doc.sections.map((section) => section.text).join(" ");
  const match = text.match(/\$?(\d+(?:\.\d+)?)\s*(billion|bn|b)\b/i);
  return match ? Number(match[1]) : 2;
}

function extractMetrics(text) {
  const matches = text.match(/\$?\d+(?:\.\d+)?\s?(?:billion|million|bn|m|x|%)|\d+(?:\.\d+)?\s?basis points/gi) || [];
  return Array.from(new Set(matches.map((item) => item.replace(/\s+/g, " ").trim()))).slice(0, 8);
}

function toneScore(text) {
  const lower = text.toLowerCase();
  const positive = POSITIVE_TERMS.reduce((sum, term) => sum + (lower.includes(term) ? 1 : 0), 0);
  const negative = NEGATIVE_TERMS.reduce((sum, term) => sum + (lower.includes(term) ? 1 : 0), 0);
  return positive - negative;
}

function toneRelevance(question, text) {
  const lowerQuestion = question.toLowerCase();
  const score = toneScore(text);
  if (/risk|pressure|headwind|weaken|negative|concern/.test(lowerQuestion)) return Math.max(-score, score * 0.3);
  if (/confidence|tone|management/.test(lowerQuestion)) return Math.abs(score);
  return score;
}

function negativeTermCount(text) {
  const lower = text.toLowerCase();
  return NEGATIVE_TERMS.reduce((sum, term) => sum + (lower.includes(term) ? 1 : 0), 0);
}

function toneClass(score) {
  if (score >= 1.1) return "positive";
  if (score <= -1.1) return "negative";
  return "mixed";
}

function toneLabel(score) {
  const cls = toneClass(score);
  if (cls === "positive") return "Positive";
  if (cls === "negative") return "Cautious";
  return "Mixed";
}

function shortDocType(type) {
  if (/10-k/i.test(type)) return "10-K";
  if (/10-q/i.test(type)) return "10-Q";
  if (/call/i.test(type)) return "Call";
  if (/model/i.test(type)) return "Model";
  return "Note";
}

function terminalFcfSensitivity(company, marginPoints) {
  const revenue = company.revenue * Math.pow(1 + company.growth / 100, 5);
  return revenue * (marginPoints / 100);
}

function formatMoney(value) {
  const absolute = Math.abs(Number(value) || 0);
  if (absolute >= 1) return `$${absolute.toFixed(1)}B`;
  return `$${(absolute * 1000).toFixed(0)}M`;
}

function formatMarketCap(value) {
  const number = Number(value);
  if (!Number.isFinite(number) || number <= 0) return "n/a";
  if (number >= 1e12) return `$${(number / 1e12).toFixed(2)}T`;
  if (number >= 1e9) return `$${(number / 1e9).toFixed(1)}B`;
  if (number >= 1e6) return `$${(number / 1e6).toFixed(0)}M`;
  return `$${number.toFixed(0)}`;
}

function formatQuotePrice(value) {
  const number = Number(value);
  if (!Number.isFinite(number) || number <= 0) return "n/a";
  return `$${number.toFixed(number >= 100 ? 2 : 3)}`;
}

function formatQuoteMove(quote) {
  const change = Number(quote && quote.change) || 0;
  const percent = Number(quote && quote.changePercent) || 0;
  const sign = change >= 0 ? "+" : "";
  return `${sign}${change.toFixed(2)} (${sign}${percent.toFixed(2)}%)`;
}

function formatMetricValue(value, suffix = "") {
  const number = Number(value);
  if (!Number.isFinite(number) || number <= 0) return "n/a";
  return `${number.toFixed(number >= 10 ? 1 : 2)}${suffix}`;
}

function countSourceKinds(docs) {
  return docs.reduce((acc, doc) => {
    const kind = getSourceKind(doc);
    acc[kind] = (acc[kind] || 0) + 1;
    return acc;
  }, {});
}

function snippet(text, maxLength) {
  const clean = String(text || "").replace(/\s+/g, " ").trim();
  if (clean.length <= maxLength) return clean;
  return `${clean.slice(0, maxLength - 1).trim()}...`;
}

function stripHtml(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}

function stripMarkdown(text) {
  return String(text || "")
    .replace(/`{1,3}/g, "")
    .replace(/[#*_>\[\]()]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}

function loadJson(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}

function saveJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // Local storage can be blocked under some browser privacy settings.
  }
}
