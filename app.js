"use strict";

const STORAGE_KEYS = {
  uploads: "citealpha-uploads-v1",
  notes: "citealpha-notes-v1",
  waitlist: "citealpha-waitlist-v1"
};

const WAITLIST_ENDPOINT = "https://formsubmit.co/ajax/dhirajnyse@gmail.com";

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
  state.documents = [...state.uploadedDocs, ...SAMPLE_DOCS];
  state.documents.forEach((doc) => state.enabledDocIds.add(doc.id));
  for (const doc of state.uploadedDocs) {
    state.activeTickers.add(doc.ticker);
  }

  renderTemplates();
  renderCoverage();
  renderLibrary();
  renderSourceQuality();
  renderContextBand();
  renderValuationOptions();
  renderNotebook();
  bindEvents();
  updateValuationFromCompany();
  updateValuation();
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
  els.sourceQualityPanel = document.querySelector("#sourceQualityPanel");
  els.pasteForm = document.querySelector("#pasteForm");
  els.pasteTicker = document.querySelector("#pasteTicker");
  els.pasteType = document.querySelector("#pasteType");
  els.pasteTitle = document.querySelector("#pasteTitle");
  els.pasteText = document.querySelector("#pasteText");
  els.clearUploads = document.querySelector("#clearUploads");
  els.queryForm = document.querySelector("#queryForm");
  els.queryInput = document.querySelector("#queryInput");
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
}

function bindEvents() {
  els.queryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submitCurrentQuestion();
  });

  els.queryInput.addEventListener("input", () => {
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
    saveJson(STORAGE_KEYS.uploads, []);
    renderCoverage();
    renderLibrary();
    renderSourceQuality();
    renderContextBand();
    renderValuationOptions();
    updateValuationFromCompany();
    updateValuation();
    drawSignalMap();
  });

  els.valuationTicker.addEventListener("change", () => {
    state.selectedTicker = els.valuationTicker.value;
    updateValuationFromCompany();
    updateValuation();
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
  });

  els.waitlistForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    await submitWaitlistLead();
  });
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
      drawSignalMap();
    });
  });
}

function renderLibrary() {
  const docs = getLibraryDocs();
  const uploadedCount = docs.filter(isUploadedDoc).length;
  els.documentCount.textContent = uploadedCount ? `${docs.length} docs | ${uploadedCount} yours` : `${docs.length} docs`;
  els.libraryList.innerHTML = docs.map((doc) => {
    const checked = state.enabledDocIds.has(doc.id) ? "checked" : "";
    const trustClass = isUploadedDoc(doc) ? "is-user" : "is-sample";
    const trustLabel = isUploadedDoc(doc) ? "Your data" : "Sample";
    const quality = doc.sourceQuality ? `${doc.sourceQuality.quality}/100` : "Demo";
    return `
      <label class="source-toggle">
        <input type="checkbox" data-doc-id="${escapeAttr(doc.id)}" ${checked} />
        <span class="source-main">
          <strong>${escapeHtml(doc.ticker)} - ${escapeHtml(doc.period)}</strong>
          <span>${escapeHtml(doc.company)} - ${escapeHtml(doc.date)} - ${escapeHtml(quality)}</span>
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
      renderContextBand();
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
    </dl>
    <p>${escapeHtml(audit.note)}</p>
  `;
}

function renderContextBand() {
  const enabledDocs = getEnabledDocs();
  const activeCompanies = getCompanies().filter((company) => state.activeTickers.has(company.ticker));
  const enabledUploaded = enabledDocs.filter(isUploadedDoc).length;
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
    { label: "Data mode", value: enabledUploaded ? "Your data" : "Sample", sub: enabledUploaded ? `${enabledUploaded} imported source${enabledUploaded === 1 ? "" : "s"} active` : `${enabledDocs.length} sample docs active` },
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
  renderValuationOptions();
  updateValuationFromCompany();
  updateValuation();
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

  const tickerFocus = syncTickerFocus(question);
  const retrievalQuestion = addTickerContext(question, tickerFocus);
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
      ${sections.join("")}
    </div>
  `;

  const plainParts = [
    `${intent.label} | ${confidence}% confidence`,
    `Management tone: ${toneMeter.label} (${toneMeter.percent}/100)`,
    tickerFocus ? `Ticker focus: ${tickerFocus.rawTicker}${tickerFocus.isAlias ? ` maps to ${tickerFocus.ticker} (${tickerFocus.note})` : ""}` : "",
    sourceTrust.plainText,
    sourceAudit.plainText,
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
  const imported = citations.filter(isUploadedCitation).length;
  const sample = Math.max(0, citations.length - imported);
  const label = imported ? (sample ? "Your data + sample" : "Your data") : "Sample data";
  const note = imported
    ? `${imported} imported citation${imported === 1 ? "" : "s"} prioritized in this answer.`
    : "Answer is based on the bundled sample corpus until source documents are imported.";
  return {
    label,
    imported,
    sample,
    note,
    className: imported ? "is-user" : "is-sample",
    plainText: `Data source: ${label}. ${note}`
  };
}

function makeSourceAudit(citations, rankedCompanies) {
  const docCount = new Set(citations.map((citation) => citation.docId)).size;
  const importedCount = citations.filter(isUploadedCitation).length;
  const sampleCount = Math.max(0, citations.length - importedCount);
  const filingCount = citations.filter((citation) => /filing|10-k|10-q/i.test(citation.type)).length;
  const callCount = citations.filter((citation) => /call|q&a|prepared/i.test(`${citation.type} ${citation.section}`)).length;
  const modelCount = citations.filter((citation) => /model|valuation/i.test(citation.type)).length;
  const topScore = citations[0] ? citations[0].score : 0;
  const coverageLabel = docCount >= 4 ? "Broad" : docCount >= 2 ? "Focused" : "Narrow";
  const companyLabel = rankedCompanies[0] ? rankedCompanies[0].ticker : "Desk";
  const dataLabel = importedCount ? (sampleCount ? "Hybrid" : "Imported") : "Sample";
  const balance = [
    filingCount ? `${filingCount} filing` : "",
    callCount ? `${callCount} call` : "",
    modelCount ? `${modelCount} model` : ""
  ].filter(Boolean).join(" / ") || "No retrieved sources";
  const quality = Math.max(42, Math.min(98, Math.round(42 + docCount * 7 + filingCount * 4 + callCount * 3 + importedCount * 4 + Math.min(topScore, 18))));

  return {
    coverageLabel,
    balance,
    dataLabel,
    importedCount,
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
        <span>${escapeHtml(isUploadedCitation(citation) ? "Your data" : "Sample")} | ${citation.score.toFixed(1)}</span>
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
          sourceKind: isUploadedDoc(doc) ? "uploaded" : "sample",
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
      if (chunk.sourceKind === "uploaded" && (!tickersInQuestion.length || tickersInQuestion.includes(chunk.ticker))) {
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
    .sort((a, b) => Number(isUploadedDoc(b)) - Number(isUploadedDoc(a)));
}

function getLibraryDocs() {
  return state.documents.slice().sort((a, b) => {
    const sourceDelta = Number(isUploadedDoc(b)) - Number(isUploadedDoc(a));
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
  els.valuationFootnote.textContent = `${company.ticker} base model: ${formatMoney(company.revenue)} revenue, ${company.fcfMargin}% FCF margin, ${company.netDebt < 0 ? "net cash" : "net debt"} of ${formatMoney(Math.abs(company.netDebt))}. This is a scenario lens, not a price target.`;
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
  renderNotebook();
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

  blocks.push({ type: "heading", text: "Committee cues" });
  blocks.push({ type: "cueGrid", items: makeDecisionCues(model, company) });

  blocks.push({ type: "heading", text: "Valuation read-through" });
  blocks.push({ type: "callout", text: getMemoValuation() });

  blocks.push({ type: "heading", text: "Evidence pack" });
  blocks.push({
    type: "sourceTable",
    rows: state.currentCitations.slice(0, 6).map((citation) => ({
      id: citation.citationId,
      source: `${isUploadedCitation(citation) ? "User" : "Sample"} | ${citation.company} | ${citation.type} | ${citation.period}`,
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
    const titleLines = wrapPdfText(block.title, Math.floor((maxWidth - 98) / (10.8 * 0.52))).slice(0, 2);
    const lines = wrapPdfText(body, Math.floor((maxWidth - 36) / (9.8 * 0.52)));
    const bodyStart = y - 50 - titleLines.length * 7;
    const height = Math.max(96, 56 + titleLines.length * 8 + lines.length * 12.5);
    ensureSpace(height + 6);
    addFillRect(margin, y - height, maxWidth, height, "1 1 1");
    addStrokeRect(margin, y - height, maxWidth, height, block.severity === "High" ? "0.70 0.15 0.12" : "0.70 0.41 0.00", 0.7);
    addFillRect(margin + 10, y - 25, 28, 18, severityBg);
    addTextLine(`R${block.number}`, margin + 16, y - 19, { size: 8, font: "F2", color: severityColor });
    addFillRect(margin + 10, y - 48, 56, 17, severityBg);
    addTextLine(block.severity.toUpperCase(), margin + 19, y - 42, { size: 7.2, font: "F2", color: severityColor });
    addWrappedAt(block.title, margin + 76, y - 18, maxWidth - 96, { size: 10.8, font: "F2", leading: 13, maxLines: 2, color: "0.07 0.09 0.09" });
    addWrappedAt(body, margin + 18, bodyStart, maxWidth - 36, { size: 9.8, leading: 12.5, justify: true, maxLines: 8 });
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
    const gap = 8;
    const cardWidth = (maxWidth - gap) / 2;
    const cardHeight = 58;
    const rowCount = Math.ceil(rows.length / 2);
    const totalHeight = 28 + rowCount * cardHeight + Math.max(0, rowCount - 1) * gap + 4;
    ensureSpace(totalHeight);
    addFillRect(margin, y - 22, maxWidth, 22, "0.07 0.09 0.09");
    addTextLine("SOURCE STACK", margin + 9, y - 14, { size: 7.5, font: "F2", color: "1 1 1" });
    addTextLine(`${rows.length} passages sorted by relevance`, pageWidth - margin - 142, y - 14, { size: 7.2, font: "F2", color: "1 1 1" });
    y -= 30;
    rows.forEach((row, index) => {
      const column = index % 2;
      const rowIndex = Math.floor(index / 2);
      const x = margin + column * (cardWidth + gap);
      const top = y - rowIndex * (cardHeight + gap);
      addFillRect(x, top - cardHeight, cardWidth, cardHeight, "1 1 1");
      addStrokeRect(x, top - cardHeight, cardWidth, cardHeight, "0.84 0.87 0.86", 0.45);
      addFillRect(x + 8, top - 22, 26, 15, "0.89 0.95 0.94");
      addTextLine(row.id, x + 14, top - 17, { size: 7.5, font: "F2", color: "0.09 0.46 0.43" });
      addWrappedAt(`${row.score} | ${snippet(row.source, 38)}`, x + 42, top - 14, cardWidth - 52, { size: 7.4, font: "F2", leading: 9, maxLines: 1 });
      addWrappedAt(snippet(row.section, 58), x + 9, top - 33, cardWidth - 18, { size: 7.8, leading: 9, maxLines: 1, color: "0.15 0.2 0.19" });
      addWrappedAt(snippet(row.text, 115), x + 9, top - 46, cardWidth - 18, { size: 7.1, leading: 8.3, maxLines: 1, color: "0.39 0.44 0.43" });
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
  return doc;
}

function addUploadedDocs(docs) {
  const filtered = docs.map(normalizeUploadedDoc).filter((doc) => doc.sections.some((section) => section.text.length > 30));
  if (!filtered.length) return;
  state.uploadedDocs = [...filtered, ...state.uploadedDocs].slice(0, 18);
  state.documents = [...state.uploadedDocs, ...SAMPLE_DOCS];
  state.lastImportAudit = summarizeImportAudit(filtered);
  filtered.forEach((doc) => {
    state.enabledDocIds.add(doc.id);
    state.activeTickers.add(doc.ticker);
  });
  saveJson(STORAGE_KEYS.uploads, state.uploadedDocs);
  renderCoverage();
  renderLibrary();
  renderSourceQuality();
  renderContextBand();
  renderValuationOptions();
  drawSignalMap();
}

function normalizeUploadedDoc(doc) {
  const source = doc || {};
  const normalized = {
    ...source,
    ticker: normalizeTicker(source.ticker),
    type: String(source.type || "Research note"),
    period: String(source.period || source.title || "Imported document"),
    date: String(source.date || new Date().toISOString().slice(0, 10)),
    sourceKind: "uploaded",
    sections: Array.isArray(source.sections) ? source.sections : []
  };
  normalized.company = normalized.company || `${normalized.ticker} imported corpus`;
  normalized.sourceQuality = assessSourceQuality(normalized);
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

function summarizeImportAudit(docs) {
  const first = docs[0];
  const sections = docs.reduce((sum, doc) => sum + ((doc.sourceQuality && doc.sourceQuality.sections) || doc.sections.length), 0);
  const passages = docs.reduce((sum, doc) => sum + ((doc.sourceQuality && doc.sourceQuality.passages) || 0), 0);
  const quality = Math.round(docs.reduce((sum, doc) => sum + ((doc.sourceQuality && doc.sourceQuality.quality) || 50), 0) / docs.length);
  const tickerList = Array.from(new Set(docs.map((doc) => doc.ticker))).join(", ");
  const typeList = Array.from(new Set(docs.map((doc) => shortDocType(doc.type)))).join(", ");
  return {
    label: docs.length === 1 ? "Source quality check" : "Import batch quality",
    ticker: tickerList,
    type: typeList,
    sections,
    passages,
    quality,
    note: `${docs.length} imported source${docs.length === 1 ? "" : "s"} added and prioritized ahead of the sample corpus when enabled.${first ? ` Latest: ${first.period}.` : ""}`
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
