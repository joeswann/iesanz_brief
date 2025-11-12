# Approach Guidance (3 Delivery Patterns)

Use this note to pick an execution pattern that matches funding, vendor capacity, and FY deadlines. Each approach assumes the same priority set captured in `plan/priorities.md`, but sequences them differently.

| # | Approach | When It Fits | Headline Recommendation |
| --- | --- | --- | --- |
| 1 | **Platform-First Rebuild** | When leadership can fund a concentrated 4–6 month build with one prime vendor and needs to retire legacy systems quickly. | Prioritise CMS, identity, payments, and automation foundations before any program work exits discovery. |
| 2 | **Program-Led Quick Wins** | When awards/education revenue is at immediate risk and business teams need visible wins while procurement for the full rebuild completes. | Timebox 8–10 week bursts focused on awards, member hub skinning, and marketing refresh, backed by temporary integrations or manual runbooks. |
| 3 | **Hybrid Parallel Streams** | When there is enough budget to start foundations now, but stakeholders also need near-term program uplift for FY25 targets. | Run two coordinated streams: Platform (CMS, payments, member data) + Programs (awards/education/marketing), with strict dependency checkpoints. |

---

## 1. Platform-First Rebuild
- **What happens**: Deliver the headless CMS, unified admin console, identity governance, Stripe↔Xero stack, automation layer, and analytics lake before moving onto awards/education features.
- **Why pick it**: Minimises rework, enforces architectural integrity, and gives BOT confidence that the hard problems (RBAC, payments, migrations) are solved once.
- **Guardrails**:
  - Lock scope to platform objectives listed in `plan/priorities.md#priority-snapshot`.
  - Maintain a moratorium on large content/program builds until schemas, workflows, and SSO are accepted.
  - Fund a parallel change-management squad to document SOPs as the platform lands.
- **Risks & mitigations**:
  - *Perceived slow progress*: Offset with fortnightly demos of admin tooling and dashboards.
  - *Revenue lag*: Communicate interim manual processes for awards/education to avoid missed cycles.

## 2. Program-Led Quick Wins
- **What happens**: Stand up tactical fixes (e.g., refreshed awards entry forms, limited member hub, marketing assets, SEO baseline) on existing tooling or lightweight middleware while the main rebuild is still scoping.
- **Why pick it**: Keeps public momentum, hits near-term revenue KPIs, and generates validated journeys that inform the eventual rebuild.
- **Guardrails**:
  - Constrain effort to reversible work (front-end facelifts, no new large plugins) and document every manual workaround.
  - Tie each quick win to a measurable KPI (awards conversion %, CPD enrollments, marketing leads).
  - Schedule hard sunsets so tactical components are replaced, not entrenched.
- **Risks & mitigations**:
  - *Tech debt explosion*: Use shared design tokens and API-friendly contracts so assets can migrate.
  - *Split focus*: Assign a dedicated "stability captain" to watch production while the core team prototypes.

## 3. Hybrid Parallel Streams (Recommended Default)
- **What happens**: A platform squad executes the headless build, payments stack, and automation backlog, while a programs squad delivers awards, education, marketing, and chapter tooling on top of the emerging platform.
- **Why pick it**: Balances architectural discipline with visible value, keeps FY25 commercial targets intact, and de-risks migrations by dogfooding the new platform early.
- **Guardrails**:
  - Define dependency checkpoints (e.g., CMS schemas V1 complete before awards templates move to QA).
  - Share a single backlog/PMO rhythm so sequencing and resourcing stay aligned.
  - Enforce integration contracts (GraphQL/REST specs, event schemas) before either squad starts build.
- **Risks & mitigations**:
  - *Cross-team collisions*: Adopt weekly architecture reviews and shared release calendar.
  - *Scope creep*: Keep a rolling 90-day roadmap and hold board sign-off on any net-new initiatives.

## Recommended Next Step
Unless funding or procurement constraints dictate otherwise, pursue **Approach 3 – Hybrid Parallel Streams**. It delivers the priority snapshot (CMS + member hub + payments + programs + marketing + governance) within the same fiscal window, keeps stakeholders engaged with tangible releases, and still protects the long-term architecture. Use Approaches 1 or 2 as temporary modes: Platform-First if immediate risk tolerance is low, or Program-Led if board pressure demands customer-facing wins before the core rebuild contract is finalised.
