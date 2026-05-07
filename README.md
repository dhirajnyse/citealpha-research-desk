# CiteAlpha

Evidence-backed equity research for retail investors. CiteAlpha lets users ask complex questions across SEC-style filings, earnings call transcripts, and valuation scenarios, then returns plain-English answers with cited source passages.

## What is included

- Client-side retrieval over a synthetic filing and earnings-call corpus.
- Source-ranked answers with citation cards and confidence scoring.
- Company filters, document toggles, text/file import, saved briefs, and copy-to-clipboard.
- A valuation lens that flexes revenue CAGR, FCF margin, terminal multiple, and discount rate.
- A signal map for growth, margin, and risk across the selected coverage universe.
- A 3D-style SVG brand mark in `assets/citealpha-logo.svg`.
- Launch-ready metadata with favicon, web app manifest, and social preview artwork.

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

## Notes

The bundled companies and documents are synthetic so the prototype is safe to evaluate offline. Import real filing text or call transcripts before using the workflow for live research. CiteAlpha is research software, not investment advice. The valuation panel is a scenario lens, not a price target.
