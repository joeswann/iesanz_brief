# CMS Architecture

## Summary
- Establishes a headless CMS approach with clear environments, schema versioning, and BOT-ready governance.
- Details content models, permissions/workflows, integration touchpoints, and operational safeguards.

## Purpose & Architecture
  - Adopt a headless, API-first CMS (Sanity or similar) to separate presentation (Next.js frontend) from services, ensuring faster experiences than plugin-heavy WordPress builds referenced in the July 2024 brief.
  - Support BOT handover expectations: agency builds initial system, then chapters/teams assume content operations with minimal backend customization.
  - Maintain staging/production spaces plus content lake concepts for reporting, with clear schema versioning to avoid rework when new services (forums, community space) are added.

## Content Model & Taxonomy
  - Core content families from context.md Planning > Architecture: general pages, help articles, events, awards, bulletins, case studies, testimonials, white papers, interviews, blog/news, static pages (Objectives, FAQ, Conditions of Entry).
  - Portfolio/Board collections (Conferences, Awards, Education, Marketing, Memberships) plus chapter-specific clusters (events, awards, news, committee, calendar, gallery, store).
  - Knowledgebase groupings (membership assistance, education assistance, mentorship programs) and store collections (advertisements, sponsorships, products, bundles).
  - Support tag-based galleries for awards showcases/events and social embeds (tagged tweets, FB posts, Insta posts) with reusable blocks.

## Access, Roles & Workflows
  - Hierarchical permissions: public, regional chapter, member-only, admin (secretariat/finance), board/super-admin; map to CMS roles with granular scopes for editing vs publishing.
  - Provide chapter-managed areas (news, calendars, event rosters) with central override plus audit trails for compliance (per context.md Reverse Brief backend requirements).
  - Enable live preview, draft/approval workflows, scheduled publishing, localization-ready fields (AU/NZ copy, currency callouts).

## Integrations & Data Flow
  - Sync with CRM/membership platform for gated content, membership hub actions, and corporate account privileges.
  - Connect to Shopify/storefront, Stripe/Xero (for product metadata & tax display), Eventbrite, Buffer, Google/Facebook/LinkedIn analytics (from Planning > Integrations list).
  - Surface awards submissions stored in OneDrive, and feed structured data to analytics/datalake pipelines for success metrics (systems, usability, membership KPIs).

## Governance, Training & Ops
- Provide onboarding documentation, quick video guides, and chapter-specific playbooks to satisfy BOT expectations and marketing-guideline consistency.
- Enforce backups, malware/firewall tooling, monitoring, and regular technical/SEO audits to catch regressions when plugins/integrations change.
- Keep backend non-public, apply SSO/MFA, least-privilege API keys, and document export procedures to mitigate vendor lock-in concerns noted in context.md.

## Admin Operations
- Define the day-to-day operational cockpit spanning memberships, awards, events, store, communications, reporting, and chapter oversight (Spec v3 “Management CRM”).
- Enforce BOT-ready processes so HQ can delegate execution to chapters while maintaining compliance, financial integrity, and brand standards.
- Surface live KPIs (failed payments, lapsed members, import errors) with drill-down history aligned to Success Metrics.
- **Roles & Permissions**: support personas such as secretariat/admin, finance/accounts, chapter coordinators, volunteer coordinators, and board observers with configurable permission sets and audit logs. Allow chapter-managed landing pages while retaining central overrides and approvals.
- **Legacy Transition**: migrate Monday.com/Approval Max workflows into the new system with data validation, dual-run strategies, and documented cutovers.
- **Commerce & Finance Ops**: manage product catalogues (memberships, upgrades, tickets, sponsorships, publications) with purchasing-on-behalf, GST routing, and reconciliation tooling tied to Xero.
- **Program Administration**: configure award/event forms, juror processes, attendee tracking, sponsorship commitments, refunds, and galleries.
- **Communications & Engagement**: operate bulletin boards, calendars, and transactional messaging in partnership with the Communications stack.
- **Reporting & Support**: deliver historical snapshots, chapter dashboards, SOPs, training, template libraries, and incident logs for Super Admin review.

## Super Admin Governance
- Own global configuration for branding, navigation, integrations, automation rules, and compliance commitments outlined in context/Spec v3.
- Approve environment changes, schema updates, vendor selections, and BOT-model outsourcing decisions while coordinating with board portfolio leads.
- **Identity & Security**: define RBAC tiers, enforce MFA/SSO/device policies, maintain the service-account registry, and oversee incident response (backups, malware/firewall stack, penetration testing, DR playbooks).
- **Data & Compliance**: govern datalake/content-lake roadmaps, retention policies, privacy controls, and region-specific requirements (AU/NZ GST). Validate new integrations (e.g., Stripe↔Xero, CPD tracker) before activation and track ESG commitments.
- **Observability & Vendor Oversight**: maintain executive dashboards for KPIs, monitor API status/logs, escalate anomalies, clarify ownership between agencies/HQ/chapters, evaluate third-party proposals, and approve maintenance windows and escalation paths.
