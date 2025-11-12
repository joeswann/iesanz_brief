# Store & Sponsorships

## Summary
- Centralises ecommerce for national and chapter offerings, aligning catalogues with marketing, conferences, and awards revenue goals.
- Covers catalog/pricing controls, checkout experience, integrations with finance/CRM/CMS, and governance for chapter-operated storefronts.
- Highlights key risks: tax complexity, refunds, deliverable tracking, and PCI/compliance.

## Scope & Objectives
  - Centralize ecommerce for publications, job advertisements, sponsorships, advertising, membership add-ons, and chapter merchandise.
  - Support both national storefront offerings and chapter-specific products while sharing infrastructure (Shopify/Eventbrite/Stripe/Xero).
  - Monetize digital assets aligned with marketing and conference/awards programs, providing clear ROI reporting.

## Catalog & Pricing
  - Product types: sponsorship packages (events, awards, conferences), advertisements, publications/downloads, merchandise, chapter-specific items, membership add-ons, bundles.
  - Pricing controls: multi-currency (AUD/NZD), GST variations, member vs non-member rates, tiered sponsorship levels, bulk discounts for corporate accounts under guardrails from [Finance & Payments](../7_appendix/7_3_payments.md).
  - Ability to clone catalogs per financial year and preview upcoming offerings.

## Commerce Experience
  - Shopping cart that allows mixed items (entries, tickets, sponsorships) and consolidated checkout with invoice request option.
  - Support purchasing on behalf of others, corporate invoicing, PO numbers, and installment plans for high-value sponsorships, while handoff to [Finance & Payments](../7_appendix/7_3_payments.md) covers reconciliation rules.
  - Deliver digital goods (download links, job ad placement details) via automated fulfillment and track license/usage terms.

## Integrations & Finance
  - Storefront APIs connect to CMS for storytelling, CRM for eligibility, analytics for performance, and defer all ledger/tax logic to [Finance & Payments](../7_appendix/7_3_payments.md) to avoid duplicate documentation.
  - Inventory/availability tracking for limited sponsorships or merchandise remains surfaced here, but payout mapping and reconciliation cadences are handled in that finance chapter.

## Chapter Operations
  - Provide chapter-level storefront dashboards showing sales, fulfillment states, and remittance schedules.
  - Ensure approvals for new products, brand consistency (templates), and alignment with national sponsorship tiers.

## Risks & Controls
  - Prevent hard-coded tax/pricing rules; maintain configurable engines to adapt to regional changes and align with [Finance & Payments](../7_appendix/7_3_payments.md).
  - Document workflows for refunds, failed payments, sponsor deliverables, and compliance (advertising standards) while pointing staff to finance SOPs for escalation paths.
  - Monitor storefront performance (speed, conversion) and security (PCI compliance, anti-fraud) as part of ongoing maintenance.
