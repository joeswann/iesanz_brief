# Super Admin Governance

## Summary
- Defines platform-wide policy, architecture, and compliance guardrails that enable Admin Operations to function safely.
- Covers identity/security oversight, integration approvals, observability, and vendor/BOT management expectations.

## Mandate & Governance
- Own global configuration for branding, navigation, integrations, automation rules, and compliance commitments outlined in context/Spec v3.
- Approve environment changes, schema updates, vendor selections, and BOT-model outsourcing decisions while coordinating with board portfolio leads.

## Identity & Security
- Define RBAC tiers, enforce MFA/SSO/device policies, and maintain the service-account registry across CMS, CRM, Shopify, Stripe, Xero, Eventbrite, Mailchimp/Campaign Monitor, analytics, Buffer, OneDrive.
- Oversee incident response including backups, malware/firewall stack, penetration testing, and disaster recovery playbooks.

## Data & Compliance
- Govern datalake/content-lake roadmaps, retention policies, privacy controls, and region-specific requirements (AU/NZ GST).
- Validate new integrations (e.g., Stripe↔Xero, CPD tracker) before activation, prevent plugin sprawl, and track ESG commitments (accessibility, sustainability, inclusion).

## Observability & Vendor Oversight
- Maintain executive dashboards for KPIs, monitor API status/logs, and escalate anomalies to admin/engineering teams.
- Clarify ownership among agencies, HQ, and chapters; evaluate third-party proposals; approve maintenance windows, hotfixes, and escalation paths.

## Membership Operations Oversight

### Catalog & Pricing Governance
- Define membership grades (corporate, non-corporate, student, emerging professional, chapter tiers) with benefits, pricing tables, annual cloning rules, and add-ons (e.g., RLP) tied to financial-year planning.
- Approve multi-currency (AUD/NZD) and tax logic (GST AU/NZ, GST-free), bundles for education/events/sponsorships, and purchasing-on-behalf scenarios, ensuring finance alignment.
- Maintain special status rules (terminated, resigned, lifetime, honorary) plus pro-rata/missed-payment remediation so finance and membership admin stay consistent.

### Lifecycle & Upgrade Controls
- Oversee onboarding, renewal, upgrade/downgrade, reactivation, add-on, and corporate/group management workflows, ensuring SLAs, audit trails, and chapter notifications remain compliant.
- Mandate save/resume upgrade forms capturing credentials, referees, CPD logs, and supplementary docs before routing to chapter audit → national review → board approval.
- Track lifecycle states (active, grace, lapsed) with automated reminders (T-60/30/7) and reinstatement logic, escalating exceptions to the appropriate admin queues.
- Require corporate account tooling to support seat allocation, delegate swaps, split billing, and utilization reporting without duplicating member records.

### Automation, Integrations & Reporting
- Direct admin tooling for catalog updates, eligibility rules, and approval routing while replicating Monday.com/Approval Max controls inside the workflow engine.
- Govern automations for onboarding, renewal reminders, failed payment alerts, and transactional communications; enforce monitoring and rollback playbooks.
- Ensure membership data syncs with CMS gating, awards eligibility, education pricing, store discounts, analytics segments, and marketing automation audiences.
- Validate finance integrations (invoice generation, account codes, reconciliation triggers across Stripe/Xero/Eventbrite/Shopify) plus data exports to analytics and CPD/community modules.

### Risk & Compliance Considerations
- Guard against region-based pricing errors by keeping configuration-driven rules and documenting governance for expansions.
- Bake in fraud prevention (duplicate detection, identity verification), plus workflows for special statuses and disciplinary cases referenced in context.
- Provide training for volunteers/chapters, maintain audit logs, and coordinate privacy/GDPR/Spam Act compliance for directories and communications consent.
