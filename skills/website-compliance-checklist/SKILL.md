---
name: website-compliance-checklist
description: Audit and fix a website or app against a 20-item legal/compliance checklist (privacy, terms, refunds, cookies and consent, dark patterns, hidden fees, fake reviews, claims, accessibility, business details, unsubscribe, asset licenses, data deletion). Use before launching or delivering a client site, when asked to make a site compliant or "not get flagged/sued", or when adding forms, analytics, checkout, email capture, or third-party scripts.
---

# Website compliance checklist

Reduces the chance a site is flagged, rejected (ad networks, app stores, payment processors, hosts) or complained about. The full 20-item checklist, with "done means" criteria, is in `CHECKLIST.md`. Read it before auditing.

## Ground rules

- **Not legal advice, no guarantees.** Never tell the user the site is "legally safe" or "can't be sued". Say which items pass, which fail, and which need a lawyer.
- **Never invent facts** for legal pages: company name, address, registration numbers, contact emails, data retention periods, processors, refund terms. Ask the owner, or leave an obvious `{{PLACEHOLDER}}` and list it under "needs from owner". Do not publish drafts with unfilled placeholders.
- **Policies must match reality.** Generate the privacy/cookie policy *from* what the code actually does (forms, analytics, SDK inventory), not from a generic template.
- Generated legal text is a **draft for lawyer review**; mark it as such in the report, not necessarily on the public page.
- Do not add fake trust signals (invented reviews, "as seen on", counters, security badges) to "fix" a failing item.

## Workflow

1. **Scope.** Determine site type, regions served (default: ask; user is based in the Philippines), whether it collects personal data, takes payments, sends email, may be used by kids, uses analytics/ads/embeds. Mark items N/A with a reason.
2. **Inventory** (read-only): list pages and routes, every `<form>`/input collecting data, every `<script>`, `<iframe>`, SDK in `package.json`, font/CDN link, tracking pixel, cookie/localStorage write, image/font/model source, email templates, checkout flow. Use `PROJECT-MAP.md`/graphify output if present. Record in `templates/audit-report.md`.
3. **Audit** items 1–20 against `CHECKLIST.md`. Evidence per finding (file:line or URL). Run real checks where possible:
   - Accessibility: run axe-core / Lighthouse / `pa11y` against the running site; manually tab through key flows; check contrast in both themes and over animated/WebGL backgrounds.
   - Consent: load the page in a browser with a clean profile and inspect the network panel — do trackers fire before consent?
   - Links: privacy/terms/refund/cookie links exist in the footer and at forms, and are not 404.
   - Licenses: inspect `@font-face`/Google Fonts/CDN use, image and model provenance, third-party templates.
4. **Report** to the user: scorecard, prioritized findings, third-party inventory, asset license log, questions for the owner, and an honest "not verified" section.
5. **Fix** (after the user agrees to scope): add pages/components, consent banner that actually blocks scripts until consent, form checkboxes/links, alt text, focus styles, contrast fixes, unsubscribe handling, deletion-request route/form, footer business details. Keep changes small and reviewable.
6. **Re-verify** with the same checks and update the report. Do not mark an item passed on the basis of having written the code; pass means observed working.

## Implementation notes

- **Consent banner**: gate scripts (don't just hide them). Load analytics/pixels only after opt-in where consent is required; persist choice; "Reject all" same prominence as "Accept"; "Manage" link in the footer. Prefer an established open-source/CMP library over hand-rolling; confirm it truly blocks.
- **Cookies/storage**: essential only by default. Self-host fonts and avoid CDN trackers when possible (also helps license and privacy items).
- **Forms**: label every field, unticked marketing checkbox, link to privacy policy, server-side validation, no sensitive data in query strings, minimal fields.
- **Accessibility**: semantic HTML first, `alt` on images, visible `:focus-visible`, skip link, `prefers-reduced-motion` support for animated/3D effects (relevant if the site uses ThreeUI or other WebGL backgrounds: provide a static fallback and keep text contrast over the effect).
- **Deletion/access requests**: route + monitored email, logged requests, response-time target, identity check.
- **Pricing**: show the total and recurring terms before payment; cancellation path as short as signup.
- **Email**: unsubscribe header + link, sender address in footer, suppression list.
- **Licenses**: keep a log; prefer OFL/MIT/CC0 or purchased licenses; note AI-generated asset terms.

## Related skills
`threeui-integration` (if adding animated/WebGL effects: apply items 13–15 to them), `ui-ux-pro-max`, `design-taste-frontend` for the visual side of the legal pages.
