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
  stress: "citealpha-stress-v1"
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
  els.peerMetricGrid.innerHTML = [
    { label: "Screen leader", value: snapshot.leader ? snapshot.leader.ticker : "None", sub: snapshot.leader ? `${snapshot.leader.score}/100 ${snapshot.config.factor}` : "Add peer names" },
    { label: "Target rank", value: snapshot.targetRow ? `#${snapshot.targetRow.rank}` : "-", sub: `${snapshot.rows.length} names screened` },
    { label: "Score gap", value: snapshot.targetRow && snapshot.leader ? `${Math.max(0, snapshot.leader.score - snapshot.targetRow.score)}` : "0", sub: "Leader minus target" },
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
  const gapRows = buildPeerGapRows(targetRow, rows, config);
  const questionRows = buildPeerQuestionRows(targetRow, leader, gapRows, config);
  const totalEvidence = rows.reduce((sum, row) => sum + row.evidenceHits, 0);
  return {
    config,
    companies,
    rows,
    targetRow,
    leader,
    gapRows,
    questionRows,
    totalEvidence
  };
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

function buildPeerGapRows(targetRow, rows, config) {
  if (!targetRow) return [];
  const leader = rows[0] || targetRow;
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
    const leaderValue = Number(leader[metric.key]) || 0;
    const rawGap = leaderValue - targetValue;
    const advantage = metric.better === "lower" ? -rawGap : rawGap;
    return {
      label: metric.label,
      target: `${targetValue}${metric.unit}`,
      benchmark: `${leaderValue}${metric.unit}`,
      gap: Math.round(rawGap),
      status: advantage > 4 ? "lag" : advantage < -4 ? "lead" : "even",
      note: makePeerGapNote(metric, targetRow, leader, advantage, config)
    };
  }).sort((a, b) => {
    const severity = { lag: 2, even: 1, lead: 0 };
    return severity[b.status] - severity[a.status] || Math.abs(b.gap) - Math.abs(a.gap);
  }).slice(0, 5);
}

function makePeerGapNote(metric, targetRow, leader, advantage, config) {
  if (advantage > 4) return `${targetRow.ticker} trails ${leader.ticker} on ${metric.label.toLowerCase()} for the ${config.factor.toLowerCase()} screen.`;
  if (advantage < -4) return `${targetRow.ticker} leads ${leader.ticker} on ${metric.label.toLowerCase()}.`;
  return `${targetRow.ticker} is broadly in line with ${leader.ticker} on ${metric.label.toLowerCase()}.`;
}

function buildPeerQuestionRows(targetRow, leader, gapRows, config) {
  if (!targetRow) return [];
  const leadTicker = leader ? leader.ticker : targetRow.ticker;
  const rows = [
    {
      topic: "Main gap",
      question: gapRows[0]
        ? `Why does $${targetRow.ticker} ${gapRows[0].status === "lag" ? "trail" : "lead"} $${leadTicker} on ${gapRows[0].label.toLowerCase()}?`
        : `What is the strongest source-backed reason to prefer $${targetRow.ticker} over peers?`
    },
    {
      topic: "Evidence test",
      question: `Which filing or call passages best support $${targetRow.ticker}'s ${config.factor.toLowerCase()} thesis versus $${leadTicker}?`
    },
    {
      topic: "Risk check",
      question: `What risks could make $${targetRow.ticker}'s peer screen score deteriorate first?`
    },
    {
      topic: "Valuation spread",
      question: `Is $${targetRow.ticker}'s valuation spread justified by growth, margin quality, and risk versus $${leadTicker}?`
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
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(state.lastBrief).catch(() => fallbackCopy(state.lastBrief));
  } else {
    fallbackCopy(state.lastBrief);
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
