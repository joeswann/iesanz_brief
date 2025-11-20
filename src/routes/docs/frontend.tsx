import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import LofiHeading from '@/components/lofi/LofiHeading'
import LofiBox from '@/components/lofi/LofiBox'

export const Route = createFileRoute('/docs/frontend')({
    component: DocsFrontend,
})

function DocsFrontend() {
    return (
        <LayoutDocs>
            <LofiHeading level={1} style={{ marginBottom: '24rem' }}>2. Frontend Experience</LofiHeading>

            <LofiBox style={{ marginBottom: '32rem', flexDirection: 'column' }}>
                <LofiHeading level={2}>2.1 Experience & Navigation</LofiHeading>
                <LofiHeading level={3}>Objectives</LofiHeading>
                <p>Improvements in branding, typography, layout, responsiveness, and storytelling. Integrate the informative public experience with the member/admin CRM side, ensuring users transition smoothly between marketing and membership flows.</p>

                <LofiHeading level={3}>Information Architecture</LofiHeading>
                <ul>
                    <li><strong>Public Content:</strong> News, Member Directory, Information. Portfolio hubs (Conferences, Awards, Education, Marketing, Memberships).</li>
                    <li><strong>Chapter Content:</strong> News, events (upcoming & past), committee contacts.</li>
                    <li><strong>Member Hub:</strong> Membership, Chapter Hub, Education, Tickets, Forms.</li>
                </ul>

                <LofiHeading level={3}>Technical Approach</LofiHeading>
                <ul>
                    <li>Headless frontend</li>
                    <li>API Integrations: Membership, CMS (Sanity), Store (Shopify), Payments (Stripe), Finance (Xero), Events (Eventbrite), Analytics (GA4), Marketing (Klaviyo).</li>
                    <li>Localisation: AU / NZ currency, GST messaging.</li>
                </ul>
            </LofiBox>

            <LofiBox style={{ marginBottom: '32rem', flexDirection: 'column' }}>
                <LofiHeading level={2}>2.2 Awards Program</LofiHeading>
                <LofiHeading level={3}>Objectives</LofiHeading>
                <p>Deliver an end-to-end awards experience with superior visuals, responsiveness, and storytelling. Align awards with board portfolios, marketing goals, and membership value propositions.</p>

                <LofiHeading level={3}>Entries & Payments</LofiHeading>
                <ul>
                    <li>Multi-step/tabbed entry forms with save/resume.</li>
                    <li>Secure upload pipelines.</li>
                    <li>Shopping-cart checkout for multiple entries, tickets, sponsorships.</li>
                    <li>Handle AUD/NZD currencies and GST logic.</li>
                </ul>

                <LofiHeading level={3}>Public Experience</LofiHeading>
                <ul>
                    <li>CMS-driven gallery pages with carousels and tag filtering.</li>
                    <li>Storytelling blocks for case studies and testimonials.</li>
                    <li>Archive management for past winners.</li>
                </ul>
            </LofiBox>

            <LofiBox style={{ marginBottom: '32rem', flexDirection: 'column' }}>
                <LofiHeading level={2}>2.3 Conferences</LofiHeading>
                <LofiHeading level={3}>Objectives</LofiHeading>
                <p>Support the biennial IESANZ conference plus chapter-led symposia. Tie conference outcomes to board portfolios and sponsorship revenue goals.</p>

                <LofiHeading level={3}>Registration & Commerce</LofiHeading>
                <ul>
                    <li>Tiered ticketing (member, non-member, student, corporate).</li>
                    <li>Integrate with Stripe/Xero for invoicing.</li>
                    <li>Manage sponsorship packages.</li>
                </ul>
            </LofiBox>

            <LofiBox style={{ marginBottom: '32rem', flexDirection: 'column' }}>
                <LofiHeading level={2}>2.4 Knowledgebase & Resources</LofiHeading>
                <LofiHeading level={3}>Objectives</LofiHeading>
                <p>Provide a centralized knowledgebase covering membership assistance, education, mentorship, policy, and FAQs. Host controlled downloads with gated access.</p>

                <LofiHeading level={3}>Content Structure</LofiHeading>
                <ul>
                    <li>Categories: Membership Assistance, Education, Mentorship, Policy, Standards, CPD, Toolkits.</li>
                    <li>Content types: articles, checklists, videos, PDFs.</li>
                </ul>
            </LofiBox>

            <LofiBox style={{ marginBottom: '32rem', flexDirection: 'column' }}>
                <LofiHeading level={2}>2.5 Store & Sponsorships</LofiHeading>
                <LofiHeading level={3}>Objectives</LofiHeading>
                <p>Centralise ecommerce for publications, job ads, sponsorships, membership add-ons, and merchandise. Support national and chapter-specific offerings.</p>

                <LofiHeading level={3}>Catalog & Pricing</LofiHeading>
                <ul>
                    <li>Product types: sponsorships, ads, publications, merchandise, membership add-ons.</li>
                    <li>Pricing controls: multi-currency, GST variations, member vs non-member rates.</li>
                </ul>
            </LofiBox>

            <LofiBox style={{ marginBottom: '32rem', flexDirection: 'column' }}>
                <LofiHeading level={2}>2.6 Members Hub</LofiHeading>
                <LofiHeading level={3}>Member Hub Experience</LofiHeading>
                <p>Unified dashboard surface: membership status, invoices, payment methods, CPD tracker, awards entries, education enrollments, event tickets.</p>

                <LofiHeading level={3}>Self-Service & Support</LofiHeading>
                <ul>
                    <li>Profile management: contact info, privacy preferences.</li>
                    <li>Account recovery flows.</li>
                    <li>Help center coverage.</li>
                </ul>
            </LofiBox>

            <LofiBox style={{ flexDirection: 'column' }}>
                <LofiHeading level={2}>2.7 Education & CPD</LofiHeading>
                <LofiHeading level={3}>Mission & Audience</LofiHeading>
                <p>Showcase national + chapter-led education pathways. Serve multiple cohorts: students, emerging professionals, accredited members.</p>

                <LofiHeading level={3}>CPD Roadmap</LofiHeading>
                <ul>
                    <li>Future-state CPD tracker.</li>
                    <li>Feed CPD data into analytics dashboards.</li>
                </ul>
            </LofiBox>
        </LayoutDocs>
    )
}
