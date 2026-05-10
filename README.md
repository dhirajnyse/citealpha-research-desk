# CiteAlpha

Evidence-backed equity research for retail investors. CiteAlpha lets users ask complex questions across SEC-style filings, earnings call transcripts, and valuation scenarios, then returns plain-English answers with cited source passages.

## What is included

- Client-side retrieval over a synthetic filing and earnings-call corpus.
- Source-ranked answers with citation cards and confidence scoring.
- Risk questions return exactly three cited risk factors with severity labels.
- Company filters, document toggles, text/file import, saved briefs, and copy-to-clipboard.
- Export current briefs as PDF-style investment committee memos, with Markdown retained for editable notes.
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

## Export workflow

Use `PDF` after running an analysis to download a clean investment committee memo as a real PDF file. Use `MD` when you want an editable Markdown version of the same brief.

V21 uses the current page print flow for PDF export and includes an inline loading-safe shell so GitHub Pages cache/deploy timing cannot leave visitors on a blank screen. V22 keeps the printable memo mounted until the browser `afterprint` event so saved PDFs do not come out blank.
V23 replaces browser print with a direct JavaScript PDF generator so the exported PDF has page text streams even when Chrome print preview is unreliable.
V24 improves memo formatting with justified PDF body text, page headers/footers, section rules, and a source-audit score shown in both the app and exported memo.
V25 upgrades the PDF into a visual executive report with a branded cover band, KPI cards, source-audit band, boxed risk cards, committee cue cards, and an evidence source table.
V26 polishes PDF spacing so risk severity labels, risk titles, and committee cue cards read cleanly in the exported report.
V27 compacts the PDF evidence pack into a two-column source grid so standard risk memos fit into a cleaner executive-report layout.
V28 adds a source trust layer: imported documents receive quality diagnostics, uploaded sources are prioritized during retrieval, answers show sample-vs-user data badges, and PDF memos disclose the data source.
V29 adds one-click NVDA, AAPL, and TSLA demo import packs so users can test the `Your data` workflow without finding source files first.
V30 adds an SEC filing bridge that looks up recent SEC submissions metadata when browser access allows it, then falls back to a clearly labeled SEC mock source when live access is blocked.
V31 adds Analyst Copilot Mode with follow-up questions, bull/base/bear framing, a red-flag detector, committee checklist scores, and PDF checklist export.
V32 adds a live market bridge control center with demo quotes, optional Alpha Vantage/FMP provider fields, status rails, and a quote card in the valuation lens without committing API keys.
V33 adds a Security & Trust Foundation: imported sources and questions are scanned for script markers, prompt-injection language, and credential-like strings; the app shows a security posture score and includes the security line in PDF memos.
V34 adds a Launch Operations Console with pilot metrics, waitlist lead scoring, local workflow analytics, launch readiness checks, and a founder brief export for operating the first user pilot.
V35 adds a Portfolio Intelligence Workspace: holdings parsing, exposure/risk ranking, scenario board, next-question queue, and portfolio brief export for daily research prioritization.
V36 adds an Investment Committee Room with decision scoring, risk gates, sizing discipline, saved decision history, current-research hydration, and IC memo export.
V37 adds a Catalyst & Alert Command Center with saved thesis triggers, due-date urgency, portfolio-built alert rules, catalyst calendar, alert-driven research questions, and alert brief export.
V38 adds a Revenue & Subscription Console with MRR/ARR forecasting, plan-mix modeling, paywall entitlement design, checkout readiness scoring, and revenue brief export.
V39 adds a Production Data Pipeline Console with SEC/transcript workload sizing, vector chunk and query estimates, provider choices, backend readiness, environment checklist, data-ops queue, and production brief export.
V40 adds an Answer Quality & Evaluation Lab with regression cases, citation faithfulness scoring, hallucination-risk checks, quality gates, a human review queue, and eval brief export.
V41 adds a Compliance & Audit Center with research-only policy controls, advice-risk language checks, disclosure versioning, retention posture, audit trail rows, and compliance audit pack export.
V42 adds an Evidence Trace & Claim Inspector with claim-level support scoring, weak-claim review, filing-call tension flags, source lineage mapping, and trace pack export.
V43 adds a Peer Benchmark & Thesis Screener with target-vs-peer factor ranking, margin/risk/value gaps, evidence-hit counts, diligence question generation, and peer brief export.
V44 adds a Scenario Stress Test Lab with rate, demand, margin, and inflation shocks, company break-risk ranking, weighted portfolio impact, action questions, and stress memo export.
V45 tightens peer benchmark integrity by removing target-vs-self comparisons, showing the active benchmark peer, and generating diligence questions against a real peer or peer group fallback.
V46 adds a Filing Change Monitor that compares prior and current filing language, scores materiality, surfaces expanded or softened risk themes, and exports a change memo.
V47 adds a Valuation Sensitivity Matrix with bull/base/bear cases, driver sensitivity, evidence-fit scoring, model question generation, and valuation memo export.
V48 adds a Research Tear Sheet Studio that turns a company into a compact stance, valuation range, risk, evidence, thesis, and next-action snapshot with export.
V49 adds a Thesis Debate Room with bull and bear scoring, rebuttals, hard follow-up questions, tear-sheet hydration, and debate memo export.
V50 adds a Research Dossier Builder that assembles the active answer, tear sheet, thesis debate, valuation, risk, evidence checks, release checklist, and close-the-pack questions into an exportable packet.
V51 adds a Thesis Timeline & Audit Trail that turns sources, answers, saved notes, valuation work, debate outcomes, and dossier gaps into a chronological thesis history with inflection points, audit questions, and export.
V52 adds a Morning Briefing Room that ranks the daily research agenda, risk watch, evidence gaps, and first questions to run across a ticker universe, portfolio, timeline, and dossier context.
V53 adds an Earnings Call Prep Room that converts the research stack into management questions, expected read-throughs, red-flag listens, a post-call scorecard, and an exportable call prep memo.
V54 adds a Post-Earnings Debrief Room that scores thesis delta, tone, market reaction, surprise drivers, thesis changes, follow-up actions, and an exportable debrief memo after results or transcript notes.
V55 adds a Guidance Revision Room that converts management guidance and consensus gaps into estimate revisions, indicative model impact, diligence questions, and an exportable revision brief.
V56 adds a Model Version Control Room that locks forecast changes with assumption deltas, valuation impact, approval gates, audit actions, and an exportable model change log.
V57 adds an IC Approval Room that converts the model-control log into approve/request-change/block decisions, reviewer conditions, committee actions, and an exportable approval memo. It also tightens model change-log wording so assumption deltas no longer repeat.
V58 adds a Portfolio Action Room that translates IC approval into position sizing, exposure movement, risk limits, monitor questions, and an exportable action plan without crossing into trade execution.
V59 adds an Autonomous Research Queue that converts portfolio exposure, source gaps, risk triggers, market moves, and action-room status into a ranked daily analyst worklist with rules, SLAs, clickable questions, and queue export.
V60 adds a Research SLA Scheduler that turns the autonomous queue into due windows, freshness checks, owner capacity, escalations, clickable scheduled questions, and an exportable desk schedule.
V61 adds a Research Outcome Loop that scores whether a thesis held up, flags model drift and stale evidence, calibrates confidence, creates learning questions, and exports an outcome review.
V62 adds a Research Memory Vault that turns outcomes, queue work, portfolio context, and evidence coverage into reusable research patterns, playbook rules, clickable reuse prompts, and an exportable memory pack.
V63 adds a Guided Research Navigator that turns a user objective into a compact first-run route, source-aware readiness score, clickable first questions, demo script, and exportable onboarding brief.
V64 adds a Pilot Demo Concierge that converts the navigator into a launch-call playbook with persona targeting, proof moments, objection handling, clickable demo questions, close plans, and demo-pack export.
V65 adds a Pilot Feedback & Conversion Tracker that scores post-demo buying intent, logs saved pilot signals, turns objections into follow-up work, surfaces product learning, and exports a founder feedback brief.
V66 adds a Pilot Cohort Command Center that turns feedback signals into launch cohorts, invite metrics, outreach prompts, experiment rules, saved cohort snapshots, and an exportable cohort plan.
V67 adds a Pilot Outreach & Reply Room that turns cohorts into copy-ready email, WhatsApp, LinkedIn, or community scripts, scores replies, triages objections, saves reply logs, and exports an outreach brief.
V68 adds a Pilot Activation & Retention Room that converts interested replies into first-session plans, aha moments, retention-risk checks, saved onboarding sessions, and exportable activation plans.
V69 adds a Deployment Doctor that scans the live GitHub Pages build for file-shift uploads, wrong content types, cache-busting readiness, repair actions, and an exportable deployment checklist before the next release goes public.
V70 adds Navigation Comfort with a floating bottom-right back-to-top arrow, smooth scrolling, automatic show/hide behavior, mobile sizing, and print-safe hiding for the now-large product workspace.
V71 adds a Workspace Command Palette with a floating search button, Ctrl/Command + K shortcut, searchable room list, smooth section jumps, and mobile-friendly quick navigation across the full product workspace.
V72 adds a First-Run Product Tour with a top-bar Guide button, step-by-step product walkthrough, highlighted workspace targets, progress tracking, keyboard navigation, and mobile-friendly onboarding for new pilot users.
V73 adds an Evidence Reader Drawer so every citation chip and evidence card can open a full source passage with relevance score, metadata, tone read, risk tags, copy citation, and follow-up question controls.
V74 adds an Evidence Gap Radar inside each answer, scoring missing filings, call transcripts, valuation support, data posture, source depth, and risk specificity, with next-source guidance and one-click follow-up questions.
V75 adds an Answer Delta Monitor that compares each new analysis with the prior answer, showing confidence shifts, source-audit movement, evidence-gap changes, citation churn, thesis shifts, and one-click follow-up questions.
V76 adds a Counter-Evidence Challenge inside each answer, surfacing bear-case or mitigating passages, contradiction pressure, top challenge citations, and one-click disconfirming follow-up questions before export.
V77 adds an Export Readiness Gate inside each answer, combining confidence, citations, source quality, evidence gaps, counter-evidence pressure, security posture, and answer stability into a pass/watch/block export decision.
V78 adds a Claim Ledger inside each answer, breaking the brief into auditable claims with support/review/challenge status, citation links, claim-level questions, and export-gate scoring tied to unresolved claims.
V79 adds a Citation Reliability Matrix inside each answer, scoring every retrieved citation by source type, specificity, thesis relevance, sample/live posture, and replacement need, with export readiness tied to the reliability floor.
V80 adds a Source Upgrade Planner inside each answer, converting weak citation scores and evidence gaps into a ranked action queue for replacement sources, source mix upgrades, real-data posture, and export readiness.
V81 adds a Reviewer Handoff Queue inside each answer, turning weak citations, source gaps, claim issues, and counter-evidence into reviewer lanes with priorities, SLAs, citation links, and export-gate impact.
V82 adds a Decision Memo Composer inside each answer, converting the research controls into a committee-style memo with decision stance, thesis, evidence, risks, review status, next action, and export-gate scoring.
V83 adds a Board Pack Builder inside each answer, turning the current research answer into a board or investment-committee packet with cover read, decision slide, thesis, risk watch, evidence appendix, reviewer page, and export-gate scoring.
V84 adds a Committee Q&A Simulator inside each answer, anticipating skeptical IC questions, preparing source-linked answer angles, assigning reviewer ownership, scoring Q&A readiness, and feeding that score into export readiness.
V85 adds a Briefing Script Coach inside each answer, converting the research output into a timed spoken briefing with opener, thesis, evidence, risk response, close, rehearsal checks, follow-up prompts, and export-gate scoring.
V86 adds a Follow-Up Pack Composer inside each answer, turning the briefing into a shareable follow-up with subject line, key point, evidence, caveat, next ask, delivery checks, follow-up prompts, and export-gate scoring.
V87 adds a Reply Objection Handler inside each answer, anticipating follow-up replies and objections, drafting source-aware responses, preserving caveats, suggesting next asks, and feeding reply readiness into export-gate scoring.
V88 adds a Research Action Plan Builder inside each answer, turning reply handling into concrete next research work with verification, source, monitor, reply, delivery, and learning actions, owner/due metadata, clickable next questions, and export-gate scoring.
V89 adds a Research Ticket Queue inside each answer, converting action-plan rows into execution tickets with owners, due timing, acceptance criteria, citation links, one-click prompts, and export-gate scoring.
V90 adds a Launch Readiness Room inside each answer, scoring pilot-demo readiness with proof strength, objection pressure, buyer pushback replies, demo checklist gates, one-click prompts, and export-gate integration.
V91 adds a Pilot Conversion Room inside each answer, mapping the current research workflow to a buyer segment, SaaS plan, trial success metric, close ask, objections, one-click sales prompts, and export-gate scoring.
V92 adds a Pilot Activation Room inside each answer, turning conversion into a 7-day onboarding plan with activation score, retention-risk signal, source setup, repeat-workflow milestones, health signals, one-click prompts, and export-gate scoring.
V93 adds a Pilot Feedback Loop Room inside each answer, capturing pilot learning with renewal-risk scoring, feedback questions, product-request triage, backlog signals, advocacy prompts, and export-gate scoring.
V94 adds a Pilot Renewal & Expansion Room inside each answer, converting pilot learning into renewal score, expansion signal, churn-save play, payment proof, upgrade route, revenue prompts, and export-gate scoring.
V95 adds a Customer Proof & ROI Room inside each answer, translating research quality into time saved, terminal-cost avoided, payback multiple, proof asset, customer ask prompts, and export-gate scoring.

## Notes

The bundled companies and documents are synthetic so the prototype is safe to evaluate offline. Import real filing text or call transcripts before using the workflow for live research. CiteAlpha is research software, not investment advice. The valuation panel is a scenario lens, not a price target.

Demo ticker mapping is included for product testing: `$NVDA` maps to `NSCP`, `$AAPL` maps to `AURR`, and `$TSLA` or `$BTC` maps to `HLGD` until live market and SEC filing APIs are connected.
