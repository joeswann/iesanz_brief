# Analytics

## Summary
- Measures Success Metrics (systems, usability, memberships) plus marketing KPIs, delivering both real-time and historical visibility.
- Defines data sources, dashboards, architecture, and risk/compliance requirements to support admins, chapters, board, and BOT handover.

## Objectives & Governance
  - Measure success pillars defined in context.md (systems flexibility/reliability/speed/automation, usability, memberships) plus marketing KPIs from the Purple Giraffe plan.
  - Provide both real-time visibility (site status, payments, automation queues) and historical reporting (month-end membership counts, CPD progress, education uptake).
  - Support role-specific insights for admin teams, chapters, board/super-admin, and future community managers to uphold BOT expectations.

## Data Sources & Pipelines
  - Web/app telemetry: GA4, server logs, Core Web Vitals instrumentation, search analytics.
  - CMS + headless frontend events (content publishing, approvals), membership CRM, awards platform, education enrollment system, knowledgebase usage.
  - Commerce/finance feeds: Shopify/storefront, Eventbrite, Stripe, Xero (invoices, contact cards, tracking categories), multiple bank/payment services referenced in Spec v3.
  - Marketing stack: Mailchimp/Campaign Monitor, Buffer, social platforms, PR outputs, SEO tooling; incorporate manual chapter reports where automation is unavailable.
  - Future data: CPD tracker, corporate account dashboards, community space engagement metrics.

## Dashboards & KPIs
  - Systems: uptime, deployment success, automation latency, integration health, storage/CDN usage.
  - Usability: clicks-to-task, search success, content update turnaround, accessibility/ESG compliance indicators.
  - Memberships: signups, renewals, upgrades/downgrades, lapsed members, corporate vs individual mix, segments (age, market, location) per Success Metrics.
  - Feedback loops: instrument member surveys, NPS, qualitative feedback collection, and community-space sentiment tracking (Next Steps > Future).
  - Awards/Education: entry volumes, payment status, judging progress, event attendance, CPD completion, sponsorship revenue.
  - Marketing/SEO: awareness, reach, social engagement, email open/CTR/unsubscribes, campaign attribution, organic rankings/traffic.

## Architecture & Delivery
  - Establish a datalake/warehouse consolidating CMS, CRM, finance, marketing, and analytics feeds; align schemas with CMS models to avoid data drift.
  - Provide dashboard tooling (e.g., Looker/Power BI/Metabase) with export options for board packs and chapter summaries; include historical snapshotting (Spec v3 requirement for month-end reports).
  - Implement alerting for anomalies (failed imports, payment sync issues, unusual churn spikes, API outages) and integrate with admin issue queues.

## Risk, Compliance & Maintenance
  - Enforce privacy/consent tracking, respect opt-outs, anonymize data where required (Spam Act/GDPR).
  - Carefully map multiple bank accounts/payment gateways to analytics dimensions to prevent double counting.
  - Budget for tool licenses, pipeline maintenance, and periodic audits post-release; document data ownership for BOT handover and vendor oversight.
