# CiteAlpha

Evidence-backed equity research for retail investors. CiteAlpha lets users ask complex questions across SEC-style filings, earnings call transcripts, and valuation scenarios, then returns plain-English answers with cited source passages.

## What is included

- Client-side retrieval over a synthetic filing and earnings-call corpus.
- Source-ranked answers with citation cards and confidence scoring.
- Risk questions return exactly three cited risk factors with severity labels.
- Company filters, document toggles, text/file import, saved briefs, and copy-to-clipboard.
- Export current briefs as Markdown for sharing or review.
- A valuation lens that flexes revenue CAGR, FCF margin, terminal multiple, and discount rate.
- A signal map for growth, margin, and risk across the selected coverage universe.
- Launch hero, pricing plans, and static waitlist capture for early feedback.
- A 3D-style SVG brand mark in `assets/citealpha-logo.svg`.
- Launch-ready metadata with favicon, web app manifest, and social preview artwork.
- Versioned CSS/JS asset links to avoid stale GitHub Pages browser cache.

## Product positioning

Tagline: Ask filings. See the evidence.

Audience: self-directed retail investors who want institutional-style research workflows without terminal pricing.

Suggested SaaS packaging:

- Starter: $10/month for saved briefs and limited imports.
- Pro: $29/month for larger document libraries and model exports.
- Analyst: $49/month for multi-company comparison, alerts, and priority data refresh.

## Open the app

Open `index.html` in a browser:

```text
index.html
```

No build step or server is required.

## Waitlist capture

The waitlist form posts to FormSubmit at `dhirajnyse@gmail.com` and also stores a local browser fallback. On the first live submission, FormSubmit sends an activation email to the destination address. Confirm that email once, then future waitlist submissions will arrive by email.

The form captures email, investor style, plan interest, top tickers, most valuable feature, and the first research question. Use these fields to prioritize the first real-data MVP workflow.

## Notes

The bundled companies and documents are synthetic so the prototype is safe to evaluate offline. Import real filing text or call transcripts before using the workflow for live research. CiteAlpha is research software, not investment advice. The valuation panel is a scenario lens, not a price target.

Demo ticker mapping is included for product testing: `$NVDA` maps to `NSCP`, `$AAPL` maps to `AURR`, and `$TSLA` or `$BTC` maps to `HLGD` until live market and SEC filing APIs are connected.
