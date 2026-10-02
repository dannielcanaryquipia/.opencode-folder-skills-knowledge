# Website compliance checklist (20 items)

A practical pre-launch and ongoing checklist to reduce legal and platform risk (complaints, takedowns, app-store/ad-network rejections, regulator attention). It lowers risk; it does not guarantee you won't be sued, and it is not legal advice. Have a lawyer review the legal texts, especially if you take payments, collect sensitive data, serve kids, or sell in the EU/US/UK.

Scope the checklist first: apply only the items that fit the site (a static portfolio needs far fewer than a store with accounts and payments).

## A. Legal pages

| # | Item | Done means | Applies when |
|---|------|-----------|--------------|
| 1 | **Privacy policy** | Plain-language page linked from the footer of every page and from every signup/checkout form. Lists: what data is collected, why, legal basis where required, who it is shared with (processors, analytics, ads), retention, user rights, how to contact you. Matches what the site really does. | Any site that collects any personal data (forms, analytics, accounts, cookies) |
| 2 | **Terms of service** | Page covering acceptable use, accounts, IP ownership, disclaimers/limits of liability, termination, governing law, how to contact you. Acceptance by clickwrap (checkbox or "By continuing…" at signup), not buried. | Accounts, user content, paid services, apps |
| 3 | **Refund / return policy** | States eligibility, time window, process, who pays shipping, digital-goods rules, how long refunds take. Shown before payment and linked at checkout. | Anything sold |
| 4 | **Cookie policy** | Lists each cookie/storage type, purpose, provider, duration; says how to change choices. | Any non-essential cookie, analytics, ads, embeds |

## B. Consent and data handling

| # | Item | Done means |
|---|------|-----------|
| 5 | **Cookie consent banner** | Non-essential scripts (analytics, ads, pixels, some embeds) do **not load before consent** where consent law applies. Accept and Reject are equally easy; no pre-ticked boxes; choice can be changed later; choice stored. |
| 6 | **Check form consents** | Every form that collects personal data states the purpose and links to the privacy policy. Marketing opt-in is a separate, unticked checkbox. Required consents are not bundled together. Record timestamp + policy version where feasible. |
| 7 | **No unnecessary data** | Each form field/data point has a stated purpose. Remove fields you don't need (birthdate, phone, address "just in case"). Set retention limits and delete on schedule. |
| 8 | **Audit third-party SDKs** | Inventory every script, SDK, pixel, font CDN, chat widget, embed, payment/analytics tool: what data it receives, where, whether it sets cookies, its own terms/DPA. Remove what is unused; disclose what remains in the privacy/cookie policy. |
| 17 | **Age consent for kids' data** | If kids may use it: age gate or no collection from under-age users; verifiable parental consent where required (US COPPA under 13; GDPR-K 13–16 by country); no behavioral ads to kids; extra-clear child-friendly notices. If not for kids: say so and don't target them. |
| 20 | **Data deletion request** | Working, documented way for users to access, correct, export and delete their data (in-account button or a monitored email/form). Defined response time (often 30 days). Verify identity before acting. Deletion reaches backups/processors on schedule. |

## C. Honest design and commerce

| # | Item | Done means |
|---|------|-----------|
| 9 | **Remove dark patterns** | No fake countdowns/scarcity, confirm-shaming, hidden or hard-to-find cancel, pre-checked add-ons or subscriptions, forced account creation to buy, misleading buttons, nagging after "no". Cancel is as easy as signup. |
| 10 | **Remove hidden fees** | Total price, taxes, shipping and recurring charges shown before the final step. Free-trial → paid conversion, renewal dates and price changes are stated clearly with reminders where required. |
| 11 | **Remove fake reviews** | Only real reviews from real customers; no invented testimonials, stock-photo "customers", purchased or self-written ratings, or selectively deleted negatives. Label incentivized reviews. Placeholders/demo text removed before launch. |
| 12 | **Remove unsupported claims** | Every "best", "#1", "guaranteed", "clinically proven", "100% secure", savings or results claim has evidence on file or is deleted. Health/finance/earnings claims get extra scrutiny. Testimonial results marked "not typical" when applicable. |

## D. Accessibility

| # | Item | Done means |
|---|------|-----------|
| 13 | **Accessibility alt text** | Every meaningful image has descriptive `alt`; decorative images use `alt=""`; icon buttons have accessible names; video has captions, audio has transcripts. |
| 14 | **Fix color contrast** | Text contrast at least 4.5:1 (3:1 for large text and UI components) in both light and dark themes, including over images/gradients and WebGL/video backgrounds. Info not conveyed by color alone. |
| 15 | **Keyboard navigation** | Everything works with keyboard only: logical tab order, visible focus ring, skip-to-content link, no keyboard traps, modals trap/restore focus and close on Esc. Motion respects `prefers-reduced-motion`. Target: WCAG 2.2 AA. |

## E. Identity, email and assets

| # | Item | Done means |
|---|------|-----------|
| 16 | **Add business details** | Footer/contact/about shows legal or trading name, registration number where applicable, physical or mailing address, contact email/phone, tax ID/VAT if applicable. Who is responsible for the data (and DPO/contact if required). |
| 18 | **Unsubscribe link in emails** | Every marketing email: working one-click unsubscribe, sender identity and physical address, honest subject lines, opt-outs honored promptly (within days, not weeks). Transactional emails stay transactional. Suppression list maintained. |
| 19 | **License fonts/images** | Every font, image, icon, video, audio, 3D model, template and code snippet has a license or ownership proof that covers your use (commercial, web embedding, modification). Keep a record. Attribution shown when required. AI-generated assets: check the generator's commercial terms. |

## Jurisdiction notes (verify current law; these change)

- **Philippines (user base/operator)**: Data Privacy Act of 2012 (RA 10173) and National Privacy Commission rules: lawful basis/consent, transparency, data subject rights incl. erasure/blocking, security measures, breach notification; NPC registration/DPO obligations depend on size and data sensitivity. E-Commerce Act (RA 8792) and Consumer Act (RA 7394) affect online sales, pricing and claims; DTI enforces advertising/consumer rules. Intellectual Property Code (RA 8293) covers copyright.
- **EU/UK visitors**: GDPR/UK GDPR + ePrivacy (prior consent for non-essential cookies), consumer-rights directive (14-day withdrawal for most distance sales), EAA/WCAG accessibility for many commercial services.
- **US visitors**: state privacy laws (e.g. CCPA/CPRA: "Do Not Sell/Share" and opt-out), COPPA (under 13), CAN-SPAM (unsubscribe + address), FTC rules on reviews/endorsements/fees/negative-option subscriptions, ADA claims over inaccessible sites.
- Selling or targeting a region usually brings its rules, wherever you are based.

## Common automated red flags (what scanners and reviewers catch)
Missing privacy/terms links, trackers firing before consent, missing business/contact info, no HTTPS or mixed content, broken refund page, `alt` missing, contrast failures, unlicensed fonts via CDN, pre-checked marketing boxes, fake "X people viewing this" widgets, lorem-ipsum/placeholder reviews.
