# Memberships

## Summary
- Defines the catalogue, pricing, and lifecycle flows required to support ~1,000 members while enabling chapters and BOT handover.
- Details self-service experiences, upgrade workflows, and automation/reporting dependencies across finance, marketing, and analytics.
- Highlights regional pricing complexity, corporate account roadmap, and risk controls for fraud prevention.

## Goals & Context
  - Support ~1,000 members (engineers, architects, educators, manufacturers, etc.) with a platform that is “more productive and value-driven” for admin, members, and chapters (Spec v3 Who We Are + Objective).
  - Grow/retain membership by clarifying value propositions, simplifying onboarding, and enabling upgrades/renewals as highlighted in context Success Metrics & Marketing plan.
  - Balance national governance with chapter autonomy and BOT-style handover expectations.

## Catalogue & Pricing Model
  - Define membership grades (corporate, non-corporate, student, emerging professional, chapter-specific tiers) with benefits, pricing tables, comparison charts, and add-ons (e.g., RLP).
  - Configure offerings per financial year with ability to clone/update, including bundles for education, events, sponsorships, and publications.
  - Handle multi-currency (AUD/NZD), variable tax (GST AU, GST NZ, GST-free), and purchasing on behalf of others, routing to appropriate payment services (Stripe/Eventbrite/Shopify) per Spec v3 Purchases.
  - Model special statuses (terminated, resigned, lifetime, honorary) and pro-rata/missed-payment remediation rules noted in Planning so finance and membership admin stay aligned.

## Self-Service Experience
  - Public flows: join, learn benefits, register interest, schedule consults; Member Hub flows: renew, upgrade/downgrade, cancel, manage preferences, buy add-ons, download invoices/certificates.
  - Corporate accounts (future) to manage sub-members, event tickets, sponsorships, reporting, and toggling between IESANZ-managed vs self-managed modes.
  - Enable members to view history (payments, CPD once available, awards participation) and manage communication/channel preferences.

## Lifecycle Flows
  - New Member Onboarding: guided form (personal, professional, chapter, membership type), instant payment, auto-provisioned hub access, welcome sequence, and chapter notification per Automation Planning.
  - Renewal & Retention: rolling reminders (T-60/30/7 days), one-click renewals using stored payment mandates, grace-period handling, and automatic status changes (active → grace → lapsed) with reinstatement buttons.
  - Upgrade/Downgrade: triggered from Member Hub, captures additional evidence (CPD logs, referees), provides save/resume, and routes through chapter/national approvals with transparent status tracking as outlined in Upgrade Workflow.
  - Reactivation & Recovery: flows for lapsed/terminated members to settle arrears, update compliance documents, and regain access; includes automated validation and manual escalation when required.
  - Add-ons & Programs: purchase/attach RLP and future CPD or mentorship packages to an existing membership with prorating, invoice updates, and entitlement flags pushed to CMS/store.
  - Corporate / Group Management: account owners invite or swap delegates, allocate seats, and approve invoice-based renewals; supports split billing and reporting on utilisation.
  - Support & Exception Handling: self-serve ticketing for profile corrections, transfers, or refunds, with admin dashboards to override statuses, document decisions, and trigger communications.

## Upgrade Workflow (Spec Detail)
  - Streamline the current 6–12 month upgrade process into a transparent, trackable workflow with save/resume forms (per Andrew’s notes).
  - Capture required inputs: member credentials, academic data, project portfolio, referees, two-year CPD log, plus any supplementary documents.
  - Route submissions through chapter audit, national committee review, and board approval, showing applicants status/progress and required actions.
  - Target defined SLAs (e.g., 10-day turnaround) with accountability reminders and dashboards for chapters/admins.

## Administration & Automation
  - Admin tools to create/update membership products, set eligibility rules, and monitor catalogs; integrate approvals for corporate accounts and chapter-managed members.
  - Automations for onboarding (welcome, verification, chapter assignment), renewal reminders, failed payment alerts, and transactional emails.
  - Reporting: historical membership snapshots (e.g., “who was active at month-end”), error checks for manual updates, lapsed lists, upgrade funnels, chapter/segment breakdowns (age, market, location).

## Integrations & Data Flow
  - Sync membership status with CMS for gated content, awards eligibility, education pricing, store discounts, and analytics segments.
  - Finance integration: generate invoices (system or Xero), map account codes, update statuses upon reconciliation, support multiple bank accounts/payment services.
  - Link to marketing automation for segmentation, analytics dashboards for KPI tracking, and future CPD tracker/community modules.
  - Plan phased migration off Monday.com as the membership source of truth and replicate Approval Max-style approvals/controls in the new workflow engine, ensuring historical data remains accessible.

## Risks & Considerations
  - Complex region-based pricing and tax logic must remain configurable to avoid hard-coded rules; document governance for future expansions.
  - Volunteer turnover and chapter-level administration demand robust training, audit logs, and access controls.
  - Corporate accounts and CPD tracking are future features; design data model and UX hooks now to prevent rework.
  - Incorporate fraud-prevention checks (duplicate emails, identity verification) and workflows for special cases (terminated, resigned, lifetime/honorary) noted in context.
