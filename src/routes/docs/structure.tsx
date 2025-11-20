import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import LofiHeading from '@/components/lofi/LofiHeading'
import LofiBox from '@/components/lofi/LofiBox'

export const Route = createFileRoute('/docs/structure')({
    component: DocsStructure,
})

function DocsStructure() {
    return (
        <LayoutDocs>
            <LofiHeading level={1} style={{ marginBottom: '24rem' }}>1. Structure & Navigation</LofiHeading>

            <LofiBox style={{ marginBottom: '32rem', flexDirection: 'column' }}>
                <LofiHeading level={2}>1.1 Table of Contents</LofiHeading>
                <ul>
                    <li><strong>Structure</strong> – Sits above the stack, pointing to plan artefacts and priorities.</li>
                    <li><strong>Experience</strong> – Public journeys, member hub UX, ecommerce storytelling.</li>
                    <li><strong>Studio</strong> – CMS, admin console</li>
                    <li><strong>Admin</strong> – Super admin structure and purpose</li>
                    <li><strong>Operations</strong> – Integrations and automations</li>
                    <li><strong>Appendix</strong> – Security, marketing, SEO, analytics, finance</li>
                </ul>
            </LofiBox>

            <LofiBox style={{ flexDirection: 'column' }}>
                <LofiHeading level={2}>1.2 Priorities Framework</LofiHeading>
                <LofiHeading level={3}>Purpose</LofiHeading>
                <p>To provide a consistent decision lens for phase planning, ensuring delivery stays aligned with board expectations. Maintain visibility for handover partners — chapters, contractors, new vendors — so they understand why priorities are ordered the way they are.</p>

                <LofiHeading level={3}>Evaluation Criteria</LofiHeading>
                <ul>
                    <li><strong>Value:</strong> Measures contribution to membership growth/retention, revenue, advocacy influence, and user experience improvements.</li>
                    <li><strong>Effort:</strong> Considers relative size spanning design, engineering, content, change management, and cross-vendor coordination.</li>
                    <li><strong>Difficulty:</strong> Captures technical complexity, dependencies on legacy systems, and regulatory exposure.</li>
                    <li><strong>Urgency:</strong> Reflects time pressures such as award cycles, conference deadlines, financial year renewals, or compliance mandates.</li>
                </ul>

                <LofiHeading level={3}>Phase 1: Core Foundation (Launch)</LofiHeading>
                <ul>
                    <li>Membership Engine: Join, renew, upgrade, profile management.</li>
                    <li>Public Face: Brand refresh, news, events calendar, chapter hubs.</li>
                    <li>Admin Console: Member management, basic reporting, content publishing.</li>
                </ul>

                <LofiHeading level={3}>Phase 2: Commerce & Community</LofiHeading>
                <ul>
                    <li>Awards Program: Entries, judging, galleries.</li>
                    <li>Store & Payments: Merchandise, sponsorships, complex invoicing.</li>
                    <li>Knowledgebase: Gated resources, policy documents.</li>
                </ul>

                <LofiHeading level={3}>Phase 3: Advanced Features</LofiHeading>
                <ul>
                    <li>CPD Tracker: Self-logging, audit workflows.</li>
                    <li>Corporate Portals: Bulk management for firms.</li>
                    <li>Deep Analytics: Custom dashboards, predictive churn.</li>
                </ul>
            </LofiBox>
        </LayoutDocs>
    )
}
