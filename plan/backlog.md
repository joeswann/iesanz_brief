# Detailed Backlog (Reverse Brief → Execution)

Each section translates a reverse brief into tangible delivery actions. Use alongside `plan/workstreams.md` for sequencing.

## Admin (`brief/15_cms.md`)
- Map admin personas/roles and configure RBAC, audit logging, and dashboards spanning memberships, awards, events, store, finance, and communications.
- Build the unified admin workspace with widgets for KPIs (failed payments, lapsed members, import errors) and quick links into each operational area.
- Execute migration away from Monday.com/Approval Max, including data cleansing, dual-run coexistence, and retirement runbooks.
- Implement product/purchase management (multi-currency catalogs, GST logic, invoice issuance) plus reconciliation tooling tied to finance.
- Deliver award/event administration consoles, gallery builders, and chapter-capable content management with approval flows.
- Document SOPs, onboarding guides, and incident response procedures to satisfy BOT expectations for HQ and chapters.

## Analytics (`brief/22_analytics.md`)
- Define KPI taxonomy linked to systems, usability, and membership success metrics; align with marketing/board reporting needs.
- Stand up the datalake/warehouse ingesting CMS, CRM, awards, education, finance, marketing, and automation feeds with historical snapshots.
- Build dashboards (Looker/Power BI/Metabase) segmented by audience (admin, chapters, board) and wire alerts for anomalies or outages.
- Implement data governance: privacy/consent handling, opt-out logic, tool licensing, maintenance budgets, and documentation for BOT handover.

## Automation (`brief/18_automation.md`)
- Select/implement the workflow platform (n8n/Make/Zapier/serverless) with credential vaulting, logging, and sandbox environments.
- Configure domain automations: membership lifecycle, upgrade approvals, payment alerts, awards/event reminders, communications scheduling, analytics anomaly detection.
- Create monitoring dashboards, failure alerting, and escalation runbooks for automation queues.
- Provide template libraries and training for chapters/Admins, including change management and periodic review cadences.

## Awards (`brief/09_awards.md`)
- Design save/resume entry forms with eligibility logic tied to membership status, OneDrive asset routing, and structured exports.
- Build commerce flows for multi-entry carts, dinner tickets, sponsorship add-ons, AUD/NZD taxes, and Stripe/Xero syncing.
- Deliver juror empanelment, adjudication tooling (stage-based scoring, comments, exports), and secure role-based portals.
- Publish showcase galleries, archives, storytelling blocks, and marketing hooks for winners/sponsors.
- Automate reminders (entries, juror tasks, sponsorship deliverables) and integrate data with CMS, CRM, analytics, and communications.

## Chapters (`brief/13_chapters.md`)
- Produce chapter site templates (news, events, awards, committee bios, galleries, store) with enforced branding controls.
- Implement granular RBAC so chapters manage local content while HQ oversees approvals and global elements.
- Build chapter event/calendar tooling with member vs non-member pricing, sponsorship tiers, consolidated diary, and attendee reporting.
- Enable chapter storefront items within the national commerce stack, handling tax routing and finance reporting.
- Provide training, SOPs, and analytics views for chapter performance, plus support workflows for volunteer turnover.

## CMS (`brief/15_cms.md`)
- Select the headless CMS and configure environments (dev/stage/prod) with schema versioning and content lake alignment.
- Model all required content types (general pages, knowledgebase, events, awards, bulletins, case studies, testimonials, white papers, interviews, store collections).
- Set up editorial workflows (drafts, approvals, scheduled publishing), live preview, localization, and role-based access.
- Integrate CMS APIs with CRM/membership gating, store/commerce metadata, analytics pipelines, and external services (Eventbrite, Buffer, OneDrive).
- Produce governance tooling: backups, monitoring, SSO/MFA protection, and documentation/playbooks for chapters.

## Communications (`brief/08_communications.md`)
- Rebuild the bulletin board, system notification framework, and chapter feeds with rich formatting, scheduling, and targeting.
- Launch a preference center with consent tracking, suppression lists, GDPR/Spam Act compliance, and audit trails.
- Integrate transactional and marketing tooling (Mailchimp/Campaign Monitor, SMS, automation engine) with reusable templates.
- Embed communication feeds/digests within the member hub and provide analytics (opens, clicks, engagement) per audience.
- Train admins/chapters on approval workflows, frequency caps, and contingency messaging for incidents.

## Conferences (`brief/12_conferences.md`)
- Migrate the legacy conference microsite content, URLs, and branding into the new platform with redirects.
- Build program/agenda modules covering tracks, speakers, ESG themes, awards tie-ins, and on-demand resources.
- Implement registration/ticketing bundles (member/non-member/student/corporate/sponsor), Stripe/Xero/Eventbrite integrations, and sponsorship deliverable tracking.
- Create admin operations tools for attendee management, seating, hybrid streaming, logistics, and post-event analytics.
- Align marketing campaigns (early bird, speaker reveals, social) with CRM/automation journeys and feedback surveys.

## Education (`brief/10_education.md`)
- Define education taxonomy (courses, webinars, mentorship, policy resources) and surface within CMS/knowledgebase.
- Build enrollment/commerce flows with tiered pricing, sponsorship bundles, waitlists, capacity controls, and reporting.
- Design CPD tracking roadmap: capture activities, verification, expiry alerts, and analytics integrations.
- Enable personalization of education recommendations within member hub dashboards and search/filter UX.
- Establish governance for chapter-led education content, compliance reviews, and brand templates.

## Finance & Payments (`brief/20_finance_payments.md`)
- Configure payment gateways (Stripe, Eventbrite, Shopify) for multi-currency, GST logic, purchasing on behalf, refunds, and offline invoices.
- Integrate invoicing/reconciliation with Xero, mapping account codes, tracking categories, and multi-bank support.
- Deliver finance dashboards/reports (month-end counts, revenue by segment, outstanding invoices) and automate alerts for failures.
- Enforce PCI/security controls, MFA, segregation of duties, and document change processes for pricing/tax/gateway updates.

## Forms (`brief/16_forms.md`)
- Standardize on form tooling (Gravity/WS Form/etc.) with save/resume, autosave, draft history, and cloning of past submissions.
- Implement authenticated history views within the member hub so users manage drafts, submissions, and status.
- Integrate form submissions with middleware (n8n/Make) to route payloads to CRM, OneDrive, finance, and analytics systems.
- Create governance: schema/version documentation, staging environments for changes, regression test scripts, and monitoring of drop-off/error rates.

## Frontend (`brief/03_frontend.md`)
- Redesign IA/navigation (membership, awards, chapters, education, conference, store, knowledgebase, downloads) and member hub dashboards.
- Build the component library/design system honoring typography, accessibility, personalization, and chapter templates.
- Implement Next.js (or similar) front-end patterns (SSG/ISR/SSR) for performance, localization, and secure API routing.
- Optimize Core Web Vitals, galleries, tag filters, and observability dashboards aligned with analytics KPIs.

## Integrations (`brief/19_integrations.md`)
- Stand up middleware/iPaaS with retry logic, logging, alerting, and sandbox support.
- Define canonical data models (member, organisation, event, award entry, transaction) plus versioned schemas.
- Implement pillar-specific integrations: Stripe↔Xero, CMS↔CRM, OneDrive↔forms, Eventbrite↔CMS, Shopify/store↔finance, marketing/analytics syncs.
- Produce runbooks per integration (owner, endpoints, throttles, fallback) and automated regression tests/heartbeats.

## Knowledgebase (`brief/11_knowledgebase.md`)
- Architect categories (membership assistance, education, mentorship, policy, CPD, toolkits, marketing templates) and tagging strategy.
- Build gating for member-only or paid downloads, corporate entitlements, and change-log/versioning notices.
- Establish editorial workflows with SMEs, chapter contribution paths, and integration with CMS templates.
- Deliver search/browse UX, download portal features, accessibility support, and analytics on content usage.

## Marketing (`brief/17_marketing.md`)
- Execute the rebrand (logo, copy, imagery, print) and roll out chapter-specific marketing guidelines/templates.
- Build the marketing calendar covering awards, education, conferences, membership campaigns, advocacy, and sponsorship pushes.
- Implement automation across channels (email, social via Buffer, PR) with audience segmentation synced to CRM.
- Produce storytelling content (case studies, testimonials, ESG spotlights) and ensure analytics/UTM tracking for campaign KPIs.
- Train chapters/volunteers on brand standards, approvals, and compliance (Spam Act/GDPR, accessibility).

## Members (`brief/07_members.md`)
- Design persona-based member hub dashboards with widgets for status, invoices, CPD, awards, education, events, communications, and chapter alerts.
- Build self-service flows (profile edits, preferences, payments, certificate downloads, store access) with low-click UX.
- Launch member directory with opt-in privacy, filters (grade, specialty, chapter), and recognition features.
- Prepare future community hooks (mentorship matching, discussion groups) while maintaining compliance and accessibility.
- Implement data validation and syncing across CRM, finance, awards, education to keep profiles accurate.

## Memberships (`brief/06_memberships.md`)
- Rebuild the membership catalog (grades, pricing, tax logic, add-ons, special statuses) for each financial year.
- Implement lifecycle flows: onboarding, renewal/reminders, upgrade/downgrade, reactivation, add-on purchases, corporate management.
- Replicate approval workflows from Monday.com/Approval Max with transparency, save/resume, and SLA tracking.
- Provide admin reporting on membership history, segment breakdowns, upgrade funnels, and error checks.

## Priorities (`brief/02_priorities.md`)
- Apply the Value/Effort/Difficulty/Urgency framework during planning cycles and document scoring rationale.
- Review priority themes (platform/data integrity, membership/revenue, brand/engagement, governance/security) each phase and adjust sequencing accordingly.

## Security (`brief/21_security.md`)
- Implement SSO/MFA across admin portals, RBAC enforcement, WAF/firewall/malware protection, and secure integrations.
- Establish compliance programs (privacy, Spam Act/GDPR, PCI), backup/restore, incident response drills, and audit trails.
- Monitor integrations for credential drift or anomalies and configure automated lockdown/escalation workflows.
- Deliver training for staff/volunteers on security hygiene and coordinate periodic reviews with super-admin governance.

## SEO (`brief/23_seo.md`)
- Embed technical SEO in the frontend build: structured data, schema coverage, CWV optimization, hreflang, clean URLs, redirect/canonical strategy.
- Develop keyword/content plans across memberships, awards, education, advocacy, downloads, chapters, and directories; sync with marketing calendar.
- Implement tooling (Search Console, rank trackers, site audit pipelines) and fold KPIs into analytics dashboards.
- Create editorial guardrails for metadata, internal linking, chapter templates, and update cadences to keep content fresh.

## Store & Sponsorships (`brief/14_store.md`)
- Configure catalog structures for sponsorships, ads, publications, merchandise, membership add-ons, and chapter products with cloning per FY.
- Build mixed-cart checkout with invoice requests, purchasing on behalf, installment options, and digital fulfillment workflows.
- Integrate orders with Xero/finance, CRM (eligibility/discounts), CMS storytelling, inventory/availability tracking, and analytics reporting.
- Provide chapter storefront dashboards, approval workflows, refund/compliance processes, and performance monitoring.

## Super Admin (`brief/15_cms.md`)
- Define governance policies for branding, navigation, integrations, automation, and compliance; document decision logs.
- Implement centralized identity/access controls, service account registry, incident response, and DR/backup strategies.
- Maintain executive dashboards for KPIs, automation logs, integration health, and align with board reporting cadence.
- Oversee vendor/BOT operations: training completion, maintenance windows, plugin evaluations, and escalation protocols.
