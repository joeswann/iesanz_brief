# Reverse Brief Priorities (Priority-First View)

Initiatives are grouped by priority tier (High → Mid → Low). Each row references the source brief file and includes qualitative scores for **Value (V)**, **Effort (E)**, **Difficulty (D)**, **Urgency (U)** plus key dependencies.

## Priority Snapshot (What Must Happen First)

1. **Headless CMS & Admin Fabric** – Finalise schemas, workflows, RBAC, monitoring, and the unified operations console spanning memberships, awards, events, and finance ([brief/3_admin/3_1_cms.md](../brief/3_admin/3_1_cms.md)).
2. **Member Hub & Account UX** – Ship the personalised dashboard, catalog rebuild, upgrade automation, and support tooling that unlock self-service for individuals and corporates ([brief/2_frontend/2_1_experience.md](../brief/2_frontend/2_1_experience.md), [brief/6_membership/6_1_memberships.md](6_1_memberships.md), [brief/6_membership/6_2_members.md](2_6_members.md)).
3. **Payments, Store & Revenue Flows** – Stand up multi-currency Stripe/Xero stack, mixed-cart checkout, and reconciliation automation so awards, education, and sponsorship sales can scale ([brief/7_appendix/7_3_payments.md](6_3_payments.md), [brief/2_frontend/2_5_store.md](../brief/2_frontend/2_5_store.md)).
4. **Awards & Education Program Delivery** – Rebuild entry, judging, catalog/enrollment, CPD tracking, and marketing hooks to protect the FY25 revenue plan ([brief/2_frontend/2_2_awards.md](../brief/2_frontend/2_2_awards.md), [brief/6_membership/6_5_education.md](2_7_education.md)).
5. **Analytics & Automation Backbone** – Launch the data lake, KPI dashboards, and lifecycle automations so HQ and chapters can see performance and act on it ([brief/7_appendix/7_1_analytics.md](6_1_analytics.md), [brief/5_integrations/5_1_automation.md](../brief/5_integrations/5_1_automation.md)).
6. **Marketing, SEO & Communications Reset** – Deliver the rebrand assets, navigation refresh, bulletins/preference center, and SEO baseline to stabilise engagement ahead of launches ([brief/7_appendix/7_5_marketing.md](6_5_marketing.md), [brief/7_appendix/7_2_communications.md](6_2_communications.md), [brief/7_appendix/7_6_seo.md](6_7_seo.md)).
7. **Security, Identity & Governance** – Enforce SSO/MFA, access governance, fraud controls, and documentation to satisfy BOT and compliance obligations ([brief/7_appendix/7_6_security.md](6_6_security.md)).

Use this short list for executive status updates, then drill into the matrix below for scoring details and dependency mapping.

## High Priority

| File | Initiative | V | E | D | U | Key Dependencies |
| --- | --- | --- | --- | --- | --- | --- |
| [CMS Architecture](../brief/3_admin/3_1_cms.md) | Define headless schemas (pages, knowledgebase, events, awards) | H | M | M | H | [Frontend Experience](../brief/2_frontend/2_1_experience.md), [Knowledgebase & Resources](../brief/2_frontend/2_4_knowledgebase.md), [Awards Program](../brief/2_frontend/2_2_awards.md) |
| [CMS Architecture](../brief/3_admin/3_1_cms.md) | Role-based editorial workflows (public/chapter/member/admin) | H | M | H | H | [Security & Compliance](6_6_security.md), [Chapters](../brief/3_admin/3_2_chapters.md), [CMS Architecture](../brief/3_admin/3_1_cms.md) |
| [Frontend Experience](../brief/2_frontend/2_1_experience.md) | Member hub/dashboard UX with personalized actions | H | H | H | H | [Members Hub](2_6_members.md), [Memberships](6_1_memberships.md), [Analytics](6_1_analytics.md) |
| [Frontend Experience](../brief/2_frontend/2_1_experience.md) | Navigation/IA redesign (portfolios, chapters, store) | H | M | M | H | [CMS Architecture](../brief/3_admin/3_1_cms.md), [Chapters](../brief/3_admin/3_2_chapters.md) |
| [CMS Architecture](../brief/3_admin/3_1_cms.md) | Unified admin console (memberships, awards, payments) | H | H | H | H | [Memberships](6_1_memberships.md), [Awards Program](../brief/2_frontend/2_2_awards.md), [Finance & Payments](6_3_payments.md) |
| [CMS Architecture](../brief/3_admin/3_1_cms.md) | Monday.com & Approval Max migration plan | H | M | M | H | legacy systems |
| [CMS Architecture](../brief/3_admin/3_1_cms.md) | Identity & access governance (SSO/MFA, RBAC) | H | M | M | H | [Security & Compliance](6_6_security.md), [CMS Architecture](../brief/3_admin/3_1_cms.md) |
| [CMS Architecture](../brief/3_admin/3_1_cms.md) | Integration/observability dashboards | H | M | M | H | [Analytics](6_1_analytics.md), [Automation](../brief/5_integrations/5_1_automation.md) |
| [Education & CPD](2_7_education.md) | Education catalog + enrollment (courses, webinars) | H | M | M | H | [Store & Sponsorships](../brief/2_frontend/2_5_store.md), [Memberships](6_1_memberships.md) |
| [Education & CPD](2_7_education.md) | CPD tracking roadmap | H | M | M | H | [Analytics](6_1_analytics.md), [Members Hub](2_6_members.md) |
| [Awards Program](../brief/2_frontend/2_2_awards.md) | Entry & payment workflow overhaul (cart, OneDrive) | H | H | M | H | [Store & Sponsorships](../brief/2_frontend/2_5_store.md), [Finance & Payments](6_3_payments.md) |
| [Awards Program](../brief/2_frontend/2_2_awards.md) | Judging/empanelment system with exports | H | M | H | H | [Security & Compliance](6_6_security.md), [Analytics](6_1_analytics.md) |
| [Marketing Strategy](6_5_marketing.md) | Rebrand delivery (logo, copy, imagery, print) | H | M | M | H | design partners |
| [Marketing Strategy](6_5_marketing.md) | Chapter marketing guidelines & asset library | H | M | M | H | [Chapters](../brief/3_admin/3_2_chapters.md), [Communications](6_2_communications.md) |
| [SEO](6_7_seo.md) | Technical SEO baseline (schema, CWV, hreflang) | H | M | M | H | [Frontend Experience](../brief/2_frontend/2_1_experience.md), [Analytics](6_1_analytics.md) |
| [SEO](6_7_seo.md) | Content governance for key verticals | H | M | M | H | [CMS Architecture](../brief/3_admin/3_1_cms.md), [Knowledgebase & Resources](../brief/2_frontend/2_4_knowledgebase.md) |
| [Analytics](6_1_analytics.md) | Data lake/warehouse foundation | H | H | H | H | [Memberships](6_1_memberships.md), [Finance & Payments](6_3_payments.md), [Store & Sponsorships](../brief/2_frontend/2_5_store.md) |
| [Analytics](6_1_analytics.md) | KPI dashboards (systems/usability/membership) | H | M | M | H | [Frontend Experience](../brief/2_frontend/2_1_experience.md), [CMS Architecture](../brief/3_admin/3_1_cms.md) |
| [Automation](../brief/5_integrations/5_1_automation.md) | Membership lifecycle automations | H | M | M | H | [Memberships](6_1_memberships.md), [Communications](6_2_communications.md) |
| [Automation](../brief/5_integrations/5_1_automation.md) | Payment/finance alerting | H | M | M | H | [Finance & Payments](6_3_payments.md) |
| [Communications](6_2_communications.md) | Bulletin board + preference center rebuild | H | M | M | H | [Members Hub](2_6_members.md), [CMS Architecture](../brief/3_admin/3_1_cms.md) |
| [Communications](6_2_communications.md) | Transactional messaging framework | H | M | M | H | [Automation](../brief/5_integrations/5_1_automation.md), [Finance & Payments](6_3_payments.md) |
| [Store & Sponsorships](../brief/2_frontend/2_5_store.md) | Unified ecommerce catalog (sponsorships, ads, publications) | H | H | M | H | [Finance & Payments](6_3_payments.md), [Marketing Strategy](6_5_marketing.md) |
| [Store & Sponsorships](../brief/2_frontend/2_5_store.md) | Mixed-cart checkout with invoice option | H | M | M | H | [Memberships](6_1_memberships.md), [Awards Program](../brief/2_frontend/2_2_awards.md) |
| [Finance & Payments](6_3_payments.md) | Multi-currency/multi-tax payment stack | H | H | H | H | [Store & Sponsorships](../brief/2_frontend/2_5_store.md), [Memberships](6_1_memberships.md) |
| [Finance & Payments](6_3_payments.md) | Reconciliation automation & reporting | H | M | M | H | [Analytics](6_1_analytics.md), [Automation](../brief/5_integrations/5_1_automation.md) |
| [Conferences](../brief/2_frontend/2_3_conferences.md) | Merge legacy conference microsite | H | M | M | H | [Frontend Experience](../brief/2_frontend/2_1_experience.md), [Marketing Strategy](6_5_marketing.md) |
| [Conferences](../brief/2_frontend/2_3_conferences.md) | Ticketing/sponsorship bundles | H | M | M | H | [Store & Sponsorships](../brief/2_frontend/2_5_store.md), [Finance & Payments](6_3_payments.md) |
| [Chapters](../brief/3_admin/3_2_chapters.md) | Consolidated diary / all-events calendar | H | M | M | H | [Frontend Experience](../brief/2_frontend/2_1_experience.md), [Communications](6_2_communications.md) |
| [Chapters](../brief/3_admin/3_2_chapters.md) | RBAC + self-service tooling for chapter admins | H | M | M | H | [CMS Architecture](../brief/3_admin/3_1_cms.md), [Security & Compliance](6_6_security.md) |
| [Knowledgebase & Resources](../brief/2_frontend/2_4_knowledgebase.md) | Taxonomy & search implementation | H | M | M | H | [CMS Architecture](../brief/3_admin/3_1_cms.md), [Frontend Experience](../brief/2_frontend/2_1_experience.md) |
| [Knowledgebase & Resources](../brief/2_frontend/2_4_knowledgebase.md) | Controlled download portal | H | M | M | H | [Store & Sponsorships](../brief/2_frontend/2_5_store.md), [Security & Compliance](6_6_security.md) |
| [Security & Compliance](6_6_security.md) | MFA/SSO rollout & access audits | H | M | M | H | [CMS Architecture](../brief/3_admin/3_1_cms.md), [CMS Architecture](../brief/3_admin/3_1_cms.md) |
| [Security & Compliance](6_6_security.md) | Payment/data protection controls | H | M | M | H | [Finance & Payments](6_3_payments.md), [CMS Architecture](../brief/3_admin/3_1_cms.md) |
| [Members Hub](2_6_members.md) | Unified member portal (profiles, invoices, CPD, awards) | H | H | H | H | [Frontend Experience](../brief/2_frontend/2_1_experience.md), [Memberships](6_1_memberships.md), [Awards Program](../brief/2_frontend/2_2_awards.md) |
| [Members Hub](2_6_members.md) | Member directory with chapter filters/privacy | H | M | M | H | [Chapters](../brief/3_admin/3_2_chapters.md), [Security & Compliance](6_6_security.md) |
| [Memberships](6_1_memberships.md) | Catalog rebuild incl. special statuses & pro-rata | H | M | M | H | [Finance & Payments](6_3_payments.md) |
| [Memberships](6_1_memberships.md) | Upgrade workflow overhaul (9-step process) | H | M | H | H | [Automation](../brief/5_integrations/5_1_automation.md), [Analytics](6_1_analytics.md) |
| [Memberships](6_1_memberships.md) | Monday.com migration & approval replication | H | M | M | H | [CMS Architecture](../brief/3_admin/3_1_cms.md), legacy systems |

## Mid Priority

| File | Initiative | V | E | D | U | Key Dependencies |
| --- | --- | --- | --- | --- | --- | --- |
| [CMS Architecture](../brief/3_admin/3_1_cms.md) | Integration layer (CRM, Shopify, Stripe, analytics) | M | H | H | M | [Memberships](6_1_memberships.md), [Store & Sponsorships](../brief/2_frontend/2_5_store.md), [Analytics](6_1_analytics.md) |
| [CMS Architecture](../brief/3_admin/3_1_cms.md) | Training/BOT documentation | M | M | M | M | [Communications](6_2_communications.md), [Knowledgebase & Resources](../brief/2_frontend/2_4_knowledgebase.md) |
| [Frontend Experience](../brief/2_frontend/2_1_experience.md) | Performance & accessibility baseline | M | M | M | M | [SEO](6_7_seo.md), [Security & Compliance](6_6_security.md) |
| [Frontend Experience](../brief/2_frontend/2_1_experience.md) | Localization hooks (AU/NZ) | M | M | M | M | [Marketing Strategy](6_5_marketing.md), [Finance & Payments](6_3_payments.md) |
| [CMS Architecture](../brief/3_admin/3_1_cms.md) | Automation of communications & notifications | M | M | M | M | [Communications](6_2_communications.md), [Automation](../brief/5_integrations/5_1_automation.md) |
| [CMS Architecture](../brief/3_admin/3_1_cms.md) | Chapter management tooling & overrides | M | M | M | M | [Chapters](../brief/3_admin/3_2_chapters.md), [Security & Compliance](6_6_security.md) |
| [CMS Architecture](../brief/3_admin/3_1_cms.md) | BOT/maintenance governance | M | L | M | M | [Marketing Strategy](6_5_marketing.md), [Chapters](../brief/3_admin/3_2_chapters.md) |
| [CMS Architecture](../brief/3_admin/3_1_cms.md) | Incident response & DR runbooks | M | M | M | M | [Security & Compliance](6_6_security.md) |
| [Education & CPD](2_7_education.md) | Personalized recommendations | M | M | M | M | [Frontend Experience](../brief/2_frontend/2_1_experience.md), [Analytics](6_1_analytics.md) |
| [Education & CPD](2_7_education.md) | Download portal for materials & DRM | M | M | M | M | [Knowledgebase & Resources](../brief/2_frontend/2_4_knowledgebase.md), [Store & Sponsorships](../brief/2_frontend/2_5_store.md) |
| [Awards Program](../brief/2_frontend/2_2_awards.md) | Gallery/showcase rebuild | M | M | M | M | [Frontend Experience](../brief/2_frontend/2_1_experience.md), [SEO](6_7_seo.md) |
| [Awards Program](../brief/2_frontend/2_2_awards.md) | Automated reminders/communications | M | M | M | M | [Automation](../brief/5_integrations/5_1_automation.md), [Communications](6_2_communications.md) |
| [Marketing Strategy](6_5_marketing.md) | Campaign calendar (awards, education, conferences) | M | M | M | M | [Conferences](../brief/2_frontend/2_3_conferences.md), [Education & CPD](2_7_education.md), [Awards Program](../brief/2_frontend/2_2_awards.md) |
| [Marketing Strategy](6_5_marketing.md) | Automation/segmentation setup | M | M | M | M | [Automation](../brief/5_integrations/5_1_automation.md), [Analytics](6_1_analytics.md) |
| [SEO](6_7_seo.md) | Chapter landing SEO templates | M | M | M | M | [Chapters](../brief/3_admin/3_2_chapters.md) |
| [SEO](6_7_seo.md) | Monitoring toolchain (Search Console, rank tracking) | M | L | L | M | [Analytics](6_1_analytics.md) |
| [Analytics](6_1_analytics.md) | Feedback loop instrumentation | M | M | M | M | [Members Hub](2_6_members.md), [Communications](6_2_communications.md) |
| [Analytics](6_1_analytics.md) | Alerting/observability for integrations & payments | M | M | M | M | [Automation](../brief/5_integrations/5_1_automation.md), [Finance & Payments](6_3_payments.md) |
| [Automation](../brief/5_integrations/5_1_automation.md) | Awards/events reminders & juror comms | M | M | M | M | [Awards Program](../brief/2_frontend/2_2_awards.md), [Conferences](../brief/2_frontend/2_3_conferences.md) |
| [Automation](../brief/5_integrations/5_1_automation.md) | Analytics anomaly detection | M | M | M | M | [Analytics](6_1_analytics.md) |
| [Communications](6_2_communications.md) | Chapter/localized comms w/ approvals | M | M | M | M | [Chapters](../brief/3_admin/3_2_chapters.md), [Marketing Strategy](6_5_marketing.md) |
| [Communications](6_2_communications.md) | Engagement analytics/reporting | M | L | M | M | [Analytics](6_1_analytics.md) |
| [Store & Sponsorships](../brief/2_frontend/2_5_store.md) | Chapter storefront enablement/reporting | M | M | M | M | [Chapters](../brief/3_admin/3_2_chapters.md), [CMS Architecture](../brief/3_admin/3_1_cms.md) |
| [Store & Sponsorships](../brief/2_frontend/2_5_store.md) | Inventory/sponsorship availability tracking | M | M | M | M | [Conferences](../brief/2_frontend/2_3_conferences.md), [Awards Program](../brief/2_frontend/2_2_awards.md) |
| [Finance & Payments](6_3_payments.md) | Fraud prevention & compliance | M | M | M | M | [Security & Compliance](6_6_security.md), [Memberships](6_1_memberships.md) |
| [Finance & Payments](6_3_payments.md) | Refund/partial/offline processes | M | M | M | M | [CMS Architecture](../brief/3_admin/3_1_cms.md) |
| [Conferences](../brief/2_frontend/2_3_conferences.md) | Hybrid event tooling | M | M | M | M | vendors |
| [Conferences](../brief/2_frontend/2_3_conferences.md) | Post-event content capture | M | L | L | M | [Knowledgebase & Resources](../brief/2_frontend/2_4_knowledgebase.md), [Marketing Strategy](6_5_marketing.md) |
| [Chapters](../brief/3_admin/3_2_chapters.md) | Chapter storefront operations | M | M | M | M | [Store & Sponsorships](../brief/2_frontend/2_5_store.md), [Finance & Payments](6_3_payments.md) |
| [Chapters](../brief/3_admin/3_2_chapters.md) | Localized comms/templates | M | L | L | M | [Marketing Strategy](6_5_marketing.md), [Communications](6_2_communications.md) |
| [Knowledgebase & Resources](../brief/2_frontend/2_4_knowledgebase.md) | Contribution workflow for chapters/SMEs | M | M | M | M | [Chapters](../brief/3_admin/3_2_chapters.md), [Education & CPD](2_7_education.md) |
| [Knowledgebase & Resources](../brief/2_frontend/2_4_knowledgebase.md) | BOT training/SOP publishing | M | L | L | M | [CMS Architecture](../brief/3_admin/3_1_cms.md) |
| [Security & Compliance](6_6_security.md) | Fraud detection (memberships/store) | M | M | M | M | [Memberships](6_1_memberships.md), [Store & Sponsorships](../brief/2_frontend/2_5_store.md) |
| [Security & Compliance](6_6_security.md) | Incident monitoring tooling | M | M | M | M | [Automation](../brief/5_integrations/5_1_automation.md) |
| [Members Hub](2_6_members.md) | Preference center & consent management | M | M | M | M | [Communications](6_2_communications.md) |
| [Members Hub](2_6_members.md) | Support/knowledgebase integration | M | L | L | M | [Knowledgebase & Resources](../brief/2_frontend/2_4_knowledgebase.md) |
| [Memberships](6_1_memberships.md) | Automations/reporting for membership admin | M | M | M | M | [Analytics](6_1_analytics.md), [Automation](../brief/5_integrations/5_1_automation.md) |

## Low Priority

| File | Initiative | V | E | D | U | Key Dependencies |
| --- | --- | --- | --- | --- | --- | --- |
| [CMS Architecture](../brief/3_admin/3_1_cms.md) | Localization/multi-region enhancements | L | M | M | L | [Marketing Strategy](6_5_marketing.md) |
| [Frontend Experience](../brief/2_frontend/2_1_experience.md) | Future community/forum components | L | M | M | L | [Members Hub](2_6_members.md) |
| [CMS Architecture](../brief/3_admin/3_1_cms.md) | Training/runbooks for BOT handover | L | M | L | L | [Knowledgebase & Resources](../brief/2_frontend/2_4_knowledgebase.md) |
| [CMS Architecture](../brief/3_admin/3_1_cms.md) | ESG/brand compliance reporting | L | L | L | L | [Marketing Strategy](6_5_marketing.md), [Analytics](6_1_analytics.md) |
| [Education & CPD](2_7_education.md) | Legal/accreditation review workflows | L | L | M | L | external advisors |
| [Awards Program](../brief/2_frontend/2_2_awards.md) | Sponsorship tie-ins & PR packages | L | L | M | L | [Marketing Strategy](6_5_marketing.md), [Store & Sponsorships](../brief/2_frontend/2_5_store.md) |
| [Marketing Strategy](6_5_marketing.md) | APAC expansion targeting | L | L | M | L | leadership approval |
| [SEO](6_7_seo.md) | International expansion research | L | L | M | L | [Marketing Strategy](6_5_marketing.md) |
| [Analytics](6_1_analytics.md) | Predictive insights (churn propensity) | L | H | H | L | data maturity |
| [Automation](../brief/5_integrations/5_1_automation.md) | Chapter-specific automation templates | L | L | M | L | [Chapters](../brief/3_admin/3_2_chapters.md) |
| [Communications](6_2_communications.md) | Digest/archive UX enhancements | L | L | L | L | [Frontend Experience](../brief/2_frontend/2_1_experience.md) |
| [Store & Sponsorships](../brief/2_frontend/2_5_store.md) | Digital fulfillment automation | L | L | M | L | [Knowledgebase & Resources](../brief/2_frontend/2_4_knowledgebase.md) |
| [Finance & Payments](6_3_payments.md) | Future payment provider expansion | L | L | M | L | vendors |
| [Conferences](../brief/2_frontend/2_3_conferences.md) | Advanced sponsor analytics packages | L | L | M | L | [Analytics](6_1_analytics.md) |
| [Chapters](../brief/3_admin/3_2_chapters.md) | Volunteer onboarding & SOP library | L | L | L | L | [Knowledgebase & Resources](../brief/2_frontend/2_4_knowledgebase.md) |
| [Knowledgebase & Resources](../brief/2_frontend/2_4_knowledgebase.md) | Personalized resource recommendations | L | L | M | L | [Analytics](6_1_analytics.md) |
| [Security & Compliance](6_6_security.md) | Penetration testing program | L | M | H | L | vendors |
| [Members Hub](2_6_members.md) | Community features (mentorship/forum matching) | L | M | M | L | [Automation](../brief/5_integrations/5_1_automation.md) |
