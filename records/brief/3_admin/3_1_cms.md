## Purpose & Architecture
  - Adopt a headless, API-first CMS (Sanity or similar) to separate presentation (Next.js frontend) from services, ensuring faster experiences than plugin-heavy WordPress builds referenced in the July 2024 brief.
  - Support BOT handover expectations: agency builds initial system, then chapters/teams assume content operations with minimal backend customization.
  - Maintain staging/production spaces plus content lake concepts for reporting, with clear schema versioning to avoid rework when new services (forums, community space) are added.

## Content Model & Taxonomy
  - Core content families from context.md Planning > Architecture: general pages, help articles, events, awards, bulletins, case studies, testimonials, white papers, interviews, blog/news, static pages (Objectives, FAQ, Conditions of Entry).
  - Portfolio/Board collections (Conferences, Awards, Education, Marketing, Memberships) plus chapter-specific clusters (events, awards, news, committee, calendar, gallery, store).
  - Knowledgebase groupings (membership assistance, education assistance, mentorship programs) and store collections (advertisements, sponsorships, products, bundles).
  - Support tag-based galleries for awards showcases/events and social embeds (tagged tweets, FB posts, Insta posts) with reusable blocks.

| Content Type | Owner | Workflow | Notes |
| --- | --- | --- | --- |
| General pages / static info | Marketing / HQ | Draft → Review → Schedule | Tie to SEO schema requirements |
| Help / Knowledgebase articles | Support / Chapters | SME draft → HQ approve | Reference `2_4_knowledgebase.md` |
| Events / Conferences | Chapters / HQ | Create → Finance sign-off | Pricing metadata feeds Eventbrite |
| Awards entries / galleries | Awards team | Intake → Ops QA → Publish | Media routed to OneDrive |
| Store listings | Admin console | Finance approval required | Pricing via `2_5_store.md` |
| Communications / Bulletins | Chapters / Comms | Template use enforced | Consent flags per `7_2_communications.md` |

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
- Day-to-day operational usage lives in [Admin Console & Operations](3_3_admin_console.md) so this chapter can stay architecture-focused.

## Dependencies & Next Steps
- Coordinate schema changes with [Super Admin Governance](../4_super_admin/4_1_super_admin.md) approval cycles.
- Ensure data contracts stay aligned with [Analytics](../6_appendix/6_1_analytics.md) and [Integrations](../5_integrations/5_2_integrations.md).
