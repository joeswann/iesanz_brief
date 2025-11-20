import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import LofiHeading from '@/components/lofi/LofiHeading'
import LofiBox from '@/components/lofi/LofiBox'

export const Route = createFileRoute('/docs/studio')({
    component: DocsStudio,
})

function DocsStudio() {
    return (
        <LayoutDocs>
            <LofiHeading level={1} style={{ marginBottom: '24rem' }}>3. Studio</LofiHeading>

            <LofiBox style={{ marginBottom: '32rem', flexDirection: 'column' }}>
                <LofiHeading level={2}>3.1 CMS Architecture</LofiHeading>
                <LofiHeading level={3}>Purpose & Architecture</LofiHeading>
                <p>Adopt a headless, API-first CMS (Sanity) to separate presentation from services. Support BOT handover expectations with minimal backend customization.</p>

                <LofiHeading level={3}>Content Model & Taxonomy</LofiHeading>
                <ul>
                    <li>Core content families: general pages, help articles, events, awards, bulletins, case studies.</li>
                    <li>Portfolio/Board collections and chapter-specific clusters.</li>
                    <li>Knowledgebase groupings and store collections.</li>
                </ul>

                <LofiHeading level={3}>Access, Roles & Workflows</LofiHeading>
                <ul>
                    <li>Hierarchical permissions: public, regional chapter, member-only, admin, board/super-admin.</li>
                    <li>Chapter-managed areas with central override.</li>
                    <li>Live preview, draft/approval workflows.</li>
                </ul>
            </LofiBox>

            <LofiBox style={{ marginBottom: '32rem', flexDirection: 'column' }}>
                <LofiHeading level={2}>3.2 Chapter Operations</LofiHeading>
                <LofiHeading level={3}>Mission & Structure</LofiHeading>
                <p>Provide localized experiences for each regional chapter while balancing autonomy with national oversight. Enable chapters to surface their contributions within board portfolios.</p>

                <LofiHeading level={3}>Key Roles</LofiHeading>
                <ul>
                    <li>Chapter Coordinator: Publish events/news, manage contacts.</li>
                    <li>Volunteer Treasurer: Track payments, invoices.</li>
                    <li>Marketing Lead: Run newsletters/social.</li>
                    <li>Committee Chair: Approve content, escalate risks.</li>
                </ul>

                <LofiHeading level={3}>Events & Calendars</LofiHeading>
                <ul>
                    <li>Allow chapters to create upcoming/past events.</li>
                    <li>Sync chapter calendars with national feeds.</li>
                </ul>
            </LofiBox>

            <LofiBox style={{ marginBottom: '32rem', flexDirection: 'column' }}>
                <LofiHeading level={2}>3.3 Studio Operations</LofiHeading>
                <LofiHeading level={3}>Roles & Permissions</LofiHeading>
                <p>Personas include secretariat/admin, finance/accounts, chapter coordinators, volunteer coordinators, and board observers.</p>

                <LofiHeading level={3}>Operational Views</LofiHeading>
                <ul>
                    <li>Manage product catalogues (memberships, upgrades, tickets, sponsorships).</li>
                    <li>Surface alerts for failed payments, orphaned invoices.</li>
                    <li>Provide chapter dashboards.</li>
                </ul>

                <LofiHeading level={3}>Workflow Orchestration</LofiHeading>
                <ul>
                    <li>Configure award/event forms, juror processes.</li>
                    <li>Mirror legacy Monday.com/Approval Max checklists.</li>
                </ul>
            </LofiBox>

            <LofiBox style={{ marginBottom: '32rem', flexDirection: 'column' }}>
                <LofiHeading level={2}>3.4 Awards Operations</LofiHeading>
                <LofiHeading level={3}>Juror & Judging Management</LofiHeading>
                <p>Manage juror empanelment workflows. Provide adjudication tooling with stage-based scoring.</p>

                <LofiHeading level={3}>Admin Consoles & Workflows</LofiHeading>
                <ul>
                    <li>Review/approve submissions, track payment state.</li>
                    <li>Coordinate file routing to OneDrive.</li>
                    <li>Surface sponsorship deliverables.</li>
                </ul>
            </LofiBox>

            <LofiBox style={{ flexDirection: 'column' }}>
                <LofiHeading level={2}>3.5 Events & Conferences Operations</LofiHeading>
                <LofiHeading level={3}>Attendee & Venue Operations</LofiHeading>
                <p>Maintain admin dashboards for attendee management. Coordinate venue logistics, catering, AV.</p>

                <LofiHeading level={3}>Hybrid Delivery & Technology</LofiHeading>
                <ul>
                    <li>Support livestream scheduling, virtual networking.</li>
                    <li>Monitor platform health.</li>
                </ul>

                <LofiHeading level={3}>Chapter & Vendor Coordination</LofiHeading>
                <ul>
                    <li>Provide templates and toolkits for chapters.</li>
                    <li>Track vendor contracts.</li>
                </ul>
            </LofiBox>
        </LayoutDocs>
    )
}
