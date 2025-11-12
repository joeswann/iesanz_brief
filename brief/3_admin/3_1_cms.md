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
- Day-to-day operational usage lives in [[03_admin/03_03_admin_console|Admin Console & Operations]] so this chapter can stay architecture-focused.
