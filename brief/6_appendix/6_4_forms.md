## Purpose
  - Provide consistent, member-friendly forms that power onboarding, upgrades, awards, CPD logging, and chapter workflows while reducing admin rekeying (context Planning > Form Pages + Upgrade Workflow notes).
  - Support BOT handover by standardising how data is captured, stored, and surfaced across CMS, CRM, finance, and analytics systems.

## Experience Standards
  - Save & Resume: every multi-step form (e.g., membership upgrade, awards entry) offers authenticated save/resume, autosaves progress, and emails a secure resume link.
  - Draft & History: members can view past submissions, current drafts, and status updates in their hub, with ability to clone a prior submission for new cycles.
  - Validation & Guidance: inline validation, contextual tooltips, and dynamic help text tailored per membership grade or program; highlight missing compliance docs before submission.
  - Accessibility: WCAG-compliant controls, keyboard navigation, and responsive layouts that mirror the broader site’s typography and spacing guidelines.

## Form Types & Data Flows
  - Membership Lifecycle: join, renew, reactivate, upgrade/downgrade, add-ons (RLP, CPD packages) with conditional logic for corporate vs individual applicants.
  - Awards & Programs: entry forms, juror empanelment, adjudication sheets with OneDrive asset capture and adjudication export hooks.
  - Events & Commerce: ticket bundles, sponsorship requests, expression-of-interest forms linked to Eventbrite/Shopify workflows.
  - Support & Compliance: profile updates, chapter meeting minutes, governance attestations, and feedback surveys feeding analytics/reporting.
  - Each submission writes to canonical records, triggers automations (emails, approvals, tasks), and syncs status to finance (invoices), marketing (segments), and analytics dashboards.

### Shared Field Dictionary (Excerpt)
| Field | Type | Description | Reuse Notes |
| --- | --- | --- | --- |
| `member_grade` | Enum | Student, Emerging, Member, Fellow, Corporate | Drives pricing, eligibility |
| `chapter_affiliation` | Reference | Chapter ID(s) | Powers comms targeting |
| `sponsorship_level` | Enum | Bronze–Platinum | Sync with store catalogues |
| `cpd_points` | Decimal | Claimed CPD units | Feeds education tracker |

## Technical Implementation
  - Prefer proven form builders (Gravity Forms, WS Form, advanced Gutenberg blocks) with custom fields mapped to the data model; use APIs/webhooks to push structured payloads into middleware (n8n/Make) or custom integration services.
  - Implement file handling via secure uploads to OneDrive/Azure storage with virus scanning and permissioned access for reviewers.
  - Support multi-stage approval chains by combining form states with workflow engines (e.g., upgrade → chapter review → national committee → board), including audit logs and timestamps.

## Governance & Maintenance
  - Version every form (schema + logic) and store documentation on purpose, owners, triggers, and downstream dependencies.
  - Provide staging environments for testing new questions, calculations, or integrations before production release; bundle regression checklists with each update.
  - Monitor submission success rates, drop-off points, and error logs; surface insights to UX and automation teams for continuous improvement.

## Risks & Mitigations
  - Large/complex forms risk abandonment—use progressive disclosure, autosave, and summary steps to reassure users.
  - Inconsistent field mappings create reporting gaps—enforce canonical field libraries and shared ID systems.
  - Chapter-level edits could break compliance—lock critical forms, require change approval, and supply chapter-specific templates instead.

## Operational Checklist
- **Before launch**: Validate field mappings, run accessibility test, confirm automations.
- **During cycles**: Monitor completion rates, error logs, SLA for approvals.
- **Post-cycle**: Version bump documentation, archive responses per retention policy.
