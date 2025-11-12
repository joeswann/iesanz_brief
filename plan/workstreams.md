# Workstreams & Execution Steps

## 1. Platform & Infrastructure
- **Scope**: Frontend, CMS configuration, security, hosting, performance baselines (brief/14_frontend.md, brief/15_cms.md, brief/21_security.md).
- **Key Steps**
  1. Confirm tech stack (WordPress + modern frontend) and hosting architecture; provision environments.
  2. Implement design system (layout, typography, components) and responsive templates.
  3. Configure access controls (public/member/chapter/super admin), SSO, and backup/monitoring routines.
  4. Run penetration/performance tests, document SLAs, and bake outputs into the BOT runbooks.

## 2. Membership & Accounts
- **Scope**: Membership catalog, flows, automations, admin tooling (brief/06_memberships.md, brief/07_members.md, brief/15_cms.md, brief/15_cms.md).
- **Key Steps**
  1. Finalise membership grades, pricing, tax logic, and add-on catalogues.
  2. Build self-service hub modules (join, renew, upgrade/downgrade, reactivation, corporate management).
  3. Stand up approval workflows for upgrades, chapter governance, and exception handling.
  4. Connect automation triggers (onboarding, renewals, lapsed recovery) and expose dashboards for admins/chapters.

## 3. Finance & Commerce
- **Scope**: Payments, invoicing, store, sponsorships (brief/19_finance_payments.md, brief/13_store.md, brief/05_marketing.md).
- **Key Steps**
  1. Integrate Stripe/Eventbrite/Shopify with Xero, ensuring multi-currency taxes and reconciliation flows.
  2. Implement invoice/receipt templates, refund workflows, and financial reporting snapshots.
  3. Launch store offerings (ads, sponsorships, merchandise) with entitlement links back to memberships.
  4. Automate finance alerts (failed payments, compliance flags) and document runbooks for finance teams.

## 4. Programs & Content
- **Scope**: Awards, education, knowledge base, conferences, chapters (brief/09_awards.md, brief/10_education.md, brief/23_knowledgebase.md, brief/11_conferences.md, brief/12_chapters.md).
- **Key Steps**
  1. Build modular content types (awards entries, CPD courses, events, knowledge articles) with shared taxonomy/search.
  2. Configure awards lifecycle (entry → adjudication → showcase) including OneDrive asset sync and juror tools.
  3. Launch education hub (courses, CPD tracking, downloads) tied to membership entitlements.
  4. Provide chapter spaces with governance guardrails and workflow approvals for regional content.

## 5. Communications & Engagement
- **Scope**: Marketing, communications, SEO, social automation (brief/08_communications.md, brief/05_marketing.md, brief/22_seo.md, brief/21_analytics.md).
- **Key Steps**
  1. Implement email marketing integrations (Mailchimp/Campaign Monitor) and segmentation synced with membership data.
  2. Deploy content scheduling (Buffer) and social feeds/widgets; align metadata for SEO/analytics.
  3. Configure analytics stack (GA, server-side tagging, dashboards) with KPI definitions from context.
  4. Launch engagement campaigns (newsletters, bulletins, event promos) and track conversion funnels.

## 6. Automation & Integrations
- **Scope**: Workflow engines, data pipelines, forms, integrations (brief/17_automation.md, brief/18_integrations.md, brief/16_forms.md).
- **Key Steps**
  1. Stand up iPaaS/middleware layer (n8n/Make) with credential vaulting, logging, and monitoring.
  2. Map canonical data models (member, event, transaction, award entry) and implement sync jobs across CMS, CRM, finance, analytics.
  3. Convert critical forms to save/resume-enabled templates with history tracking and approval hooks.
  4. Define regression tests/heartbeats for each integration and document playbooks for retries/failure handling.

## 7. Governance, Training & BOT Handover
- **Scope**: Documentation, training, change management (brief/15_cms.md, brief/15_cms.md, brief/02_priorities.md).
- **Key Steps**
  1. Produce admin and chapter runbooks (user management, content publishing, approvals, incident response).
  2. Schedule training sessions (national + chapters) covering CMS, workflows, and automation dashboards.
  3. Establish change control processes (request intake, prioritisation, release notes) ahead of BOT transition.
  4. Finalise maintenance contracts (content vs backend) and success metrics for post-launch reviews.
