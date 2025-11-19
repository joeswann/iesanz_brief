## Mandate
  - Ensure accurate, auditable financial flows for memberships, events, awards, store purchases, sponsorships, and donations.
  - Integrate online payments with accounting (Xero) and support multi-bank, multi-gateway operations across AU/NZ.
  - Provide transparency for finance team, treasurer, and board, meeting compliance expectations in Spec v3 and context interviews.

## Payment Processing
- Gateways: Stripe (primary), Eventbrite/Shopify for specific products, potential legacy processors; allow expansion as needs evolve.
- Features: multi-currency (AUD/NZD), multiple tax treatments (GST AU, GST NZ, GST-free), ability to charge location-based rates surfaced through [Store & Sponsorships](../2_frontend/2_5_store.md).
- Support purchasing on behalf, partial payments, refunds, and offline invoice requests, with day-to-day handling inside [Admin Console & Operations](../3_admin/3_3_admin_console.md).

## Invoicing & Accounting
  - Auto-generate invoices (within platform or via Xero), attach account codes, tracking categories, and link to contacts.
  - Update member status once payments reconcile; log failed imports and provide reprocessing tools.
  - Handle multiple bank accounts/payment services with the ability to update mappings without code changes.

## Reporting & Compliance
  - Provide historical reporting (month-end membership counts, revenue by segment, outstanding invoices) and audit trails.
  - Align with treasurer requirements (Steve) and ensure SOC-style controls for financial data.
  - Support GST/BAS preparation across jurisdictions and produce sponsorship/advertising revenue summaries.

## Risk & Security
  - Enforce PCI compliance, secure storage of payment tokens, and monitoring for fraud/chargebacks.
  - Maintain segregation of duties (admin vs finance), MFA for financial consoles, and incident response plans.
  - Document processes for changes to pricing, tax rules, or payment providers and schedule penetration tests.

## Dependencies
- Requires tight coupling with memberships, store, awards, education, and analytics to avoid double entry; see [Awards Program](../2_frontend/2_2_awards.md), [Awards Operations](../3_admin/3_4_awards.md), [Conferences](../2_frontend/2_3_conferences.md), and [Events & Conferences Operations](../3_admin/3_5_events.md).
- Relies on automation platform for transactional emails (receipts, failed payment alerts, renewal reminders).
- Needs training/runbooks for volunteers handling chapter finances under BOT model.

## Operational Checklist
- **Daily**: Reconciliation exceptions, failed payment alerts, suspicious activity review.
- **Weekly**: Gateway settlement checks (Stripe/Eventbrite/Shopify), sponsorship deliverable confirmation with Ops teams.
- **Monthly**: GST/BAS prep per region, membership revenue vs analytics match, access audit for financial consoles.
