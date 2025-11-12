
## Objectives
  - Centralise ecommerce for publications, job advertisements, sponsorships, advertising, membership add-ons, and chapter merchandise.
  - Support both national storefront offerings and chapter-specific products while sharing infrastructure (Shopify/Eventbrite/Stripe/Xero).
  - Monetize digital assets aligned with marketing and conference/awards programs, providing clear ROI reporting.

## Catalog & Pricing
  - Product types: sponsorship packages (events, awards, conferences), advertisements, publications/downloads, merchandise, chapter-specific items, membership add-ons, bundles.
  - Pricing controls: multi-currency (AUD/NZD), GST variations, member vs non-member rates, tiered sponsorship levels, bulk discounts for corporate accounts under guardrails from [Finance & Payments](../6_appendix/6_3_payments.md).
  - Ability to clone catalogs per financial year and preview upcoming offerings.

| Product Type | Primary System | Notes |
| --- | --- | --- |
| Sponsorship packages | Shopify/Eventbrite + Stripe/Xero | Deliverables tracked in [Awards/Events Ops](../3_admin/3_4_awards.md) / (../3_admin/3_5_events.md) |
| Advertisements & Job ads | Shopify + CMS | Requires templated intake forms per [Forms Framework](../6_appendix/6_4_forms.md) |
| Publications/downloads | CMS + Shopify digital delivery | Paid downloads link to knowledgebase access control |
| Merchandise | Shopify (chapter catalogues) | Inventory + fulfillment per chapter dashboards |
| Membership add-ons / RLP | Admin console + Stripe/Xero | Governance lives in [Super Admin](../4_super_admin/4_1_super_admin.md#membership-operations-oversight) |
| Tickets (awards, conferences) | Eventbrite + Shopify bundles | Pricing logic references [Finance & Payments](../6_appendix/6_3_payments.md) |

## Commerce Experience
  - Shopping cart that allows mixed items (entries, tickets, sponsorships) and consolidated checkout with invoice request option.
  - Support purchasing on behalf of others, corporate invoicing, PO numbers, and installment plans for high-value sponsorships, while handoff to [Finance & Payments](../6_appendix/6_3_payments.md) covers reconciliation rules.
  - Deliver digital goods (download links, job ad placement details) via automated fulfillment and track license/usage terms.

## Integrations & Finance
  - Storefront APIs connect to CMS for storytelling, CRM for eligibility, analytics for performance, and defer all ledger/tax logic to [Finance & Payments](../6_appendix/6_3_payments.md) to avoid duplicate documentation.
  - Inventory/availability tracking for limited sponsorships or merchandise remains surfaced here, but payout mapping and reconciliation cadences are handled in that finance chapter.

## Chapter Operations
  - Provide chapter-level storefront dashboards showing sales, fulfillment states, and remittance schedules.
  - Ensure approvals for new products, brand consistency (templates), and alignment with national sponsorship tiers.

## Considerations
  - Prevent hard-coded tax/pricing rules; maintain configurable engines to adapt to regional changes and align with [Finance & Payments](../6_appendix/6_3_payments.md).
  - Document workflows for refunds, failed payments, sponsor deliverables, and compliance (advertising standards) while pointing staff to finance SOPs for escalation paths.
  - Monitor storefront performance (speed, conversion) and security (PCI compliance, anti-fraud) as part of ongoing maintenance.