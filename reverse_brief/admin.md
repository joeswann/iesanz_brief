# Admin Reverse Brief

- **Mandate & Scope**
  - Central operations workspace spanning memberships, awards, events, payments, store, communications, reporting, and chapter oversight (context.md Reverse Brief + Spec v3 “Management CRM”).
  - Enforce BOT-ready governance so HQ can delegate day-to-day tasks to chapters while maintaining compliance, finance integrity, and brand standards.
  - Surface dashboards highlighting KPIs and issues (failed payments, lapsed members, import errors) with drill-down history per Success Metrics.

- **User Roles & Permissions**
  - Roles: secretariat/admin, finance/accounts, chapter coordinators, volunteer coordinators, board observers; align with Spec v3 user list (members, non-members, admin, chapters, board).
  - Provide configurable permission sets for configuring purchases, approving content, managing communications, and running reports; include audit logs and change history.
  - Support chapter-specific landing page management (news, calendars, committee, gallery, store) while allowing central overrides and approvals.

- **Legacy Systems & Migration**
  - Plan migration from Monday.com (current membership source of truth) into the new CRM stack while maintaining data integrity and historical references.
  - Map existing Approval Max workflows (budget approvals, membership approvals) to new automation/approval tooling or integrate via API where required.
  - Document interim coexistence strategy (e.g., dual updates, sync scripts) until Monday.com/Approval Max dependencies are fully retired.

- **Purchases, Store & Finance Management**
  - Product catalog: memberships (per financial year), upgrades, event tickets, sponsorship tiers, publications, job ads, corporate bundles; allow purchases on behalf of others.
  - Commerce rules: handle AUD/NZD currencies, AU/NZ GST + GST-free items, routing to payment services (Stripe/Eventbrite/Shopify) per location or product type; auto-generate invoices via Xero and map account codes.
  - Reconciliation: update member status when Xero confirms payments, manage multiple bank accounts/payment services, and provide tools for failed import recovery.

- **Awards & Event Administration**
  - Configure award entry forms, juror empanelment, adjudication rounds, and result publishing; store files in OneDrive and export judging data to spreadsheets.
  - Event management views for chapters to monitor attendees, sponsorship commitments, invoice/payment state, and reporting for current/past events.
  - Gallery builder for award showcases/events with tag filters and chapter-specific assets.

- **Communications & Member Engagement**
  - Bulletin board with rich formatting, scheduling, and targeting (member grade, chapter, corporate vs individual).
  - Centralized calendar feeds populated by chapters or admin; respect member-selected communication preferences and consent flags.
  - Automation hooks for transactional emails (welcome, renewal notices, payment confirmations, award notifications) plus marketing integrations (Mailchimp/Campaign Monitor, Buffer).

- **Reporting & Analytics**
  - Historical membership reporting (e.g., run in February to see January month-end counts) plus error detection for manual updates (Spec v3).
  - Dashboards by membership segments (age, markets, locations), chapter performance, education uptake, awards pipeline, store revenue.
  - Export bridges into data lake/analytics stack, enabling board-ready summaries and compliance documentation.

- **Operations & Support**
  - Provide onboarding/training materials, quick guides, and support escalation paths to honor BOT commitments.
  - Track SOPs for finance changes (e.g., payment methods, bank accounts) and maintain library of marketing-approved chapter templates (per Purple Giraffe plan).
  - Monitor security (MFA, RBAC), backups, and maintenance schedules; log incidents and remediation for governance reporting.
