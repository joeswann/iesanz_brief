# Integrations

## Summary
- Outlines the integration layer linking CMS, CRM, finance, awards, events, and marketing to keep workflows automated and auditable.
- Emphasises middleware approach, canonical data models, security/compliance, and prioritised rollout aligned with BOT handover.

## Purpose
  - Deliver a cohesive integration layer connecting CMS, membership data, finance, awards, events and marketing tools so workflows stay automated, auditable and low-maintenance (context Planning > Technical > Integrations).
  - Support the BOT model by minimising bespoke code, using proven plugins/connectors, and documenting how data flows for handover to chapters and HQ.

## Integration Pillars
  - Finance & Payments: bi-directional sync between Stripe (or preferred PSP) and Xero for invoices, multicurrency/tax handling, batch reconciliation, refunds, and audit exports; surface payment states back into member profiles and award submissions.
  - Membership & CRM: unify CMS membership tables, chapter permissions, and any external CRM in a shared profile graph with webhooks for status changes (join, renew, lapse, upgrade) plus SSO/session sharing across microsites or portals.
  - Awards & Content Intake: connect form engines (Gravity/WS Form etc.) to OneDrive for asset storage, tie submission metadata into adjudication dashboards, and feed outcomes into the CMS, analytics and communications platforms.
  - Events & Commerce: push event data between Eventbrite (tickets, attendance, badge scans) and the CMS, and sync Shopify-style storefront orders (ads, sponsorships, merchandise) into finance, inventory, and member benefit records.
  - Marketing & Communications: integrate Mailchimp/Campaign Monitor audiences, Buffer-managed social queues, and analytics (GA, Meta, LinkedIn) so segments, campaigns and performance metrics stay in lockstep with memberships, CPD activities and events.

## Data Architecture & Middleware
  - Use an iPaaS/workflow layer (e.g., Make, n8n, Zapier, Azure Logic Apps) or lightweight custom middleware to orchestrate API/webhook traffic, enforce retries, log payloads, and transform data into the shared data lake/reporting warehouse.
  - Define canonical data models (member, organisation, event, award entry, transaction) and versioned schemas so integrations remain stable even if upstream plugins change.
  - Provide monitoring hooks (health checks, alerting) and sandbox environments for testing new connectors before production rollout.

## Security & Compliance
  - Centralise credential storage (Vault/Secrets Manager), rotate keys per integration, and enforce principle of least privilege/OAuth scopes.
  - Encrypt data in transit, map data residency (AU/EU) requirements, and log all sync actions for governance and incident response.
  - Align with PCI obligations for payments, and ensure integrations respect member privacy/consent flags collected in the CMS.

## Implementation Approach
  - Prioritise integrations that unblock revenue/membership workflows first (Stripe↔Xero, CMS↔CRM), then layer in awards/events and marketing connectors.
  - Document runbooks per integration (owner, endpoints, throttling rules, fallback steps) and bundle them into handover materials for chapters/admins.
  - Build regression tests/smoke checks (e.g., heartbeat jobs validating sample records) to catch silent failures before they affect members or finance.

## Success Metrics
  - Transaction sync accuracy (invoices vs. gateway totals) within agreed tolerances.
  - Time-to-update for member status changes reflected across systems (<15 min target).
  - Reduction in manual reconciliation/CSV uploads for awards, events and campaigns.
  - Uptime and alert-response SLAs for the integration layer, with tracked MTTR.
