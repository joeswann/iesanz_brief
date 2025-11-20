import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import LofiHeading from '@/components/lofi/LofiHeading'
import LofiBox from '@/components/lofi/LofiBox'

export const Route = createFileRoute('/docs/integrations')({
    component: DocsIntegrations,
})

function DocsIntegrations() {
    return (
        <LayoutDocs>
            <LofiHeading level={1} style={{ marginBottom: '24rem' }}>5. Integrations</LofiHeading>

            <LofiBox style={{ marginBottom: '32rem', flexDirection: 'column' }}>
                <LofiHeading level={2}>5.1 Automation</LofiHeading>
                <LofiHeading level={3}>Purpose</LofiHeading>
                <p>Coordinate automation across memberships, payments, awards, education, communications, and analytics to reduce manual work and improve reliability.</p>

                <LofiHeading level={3}>Automation Domains</LofiHeading>
                <ul>
                    <li><strong>Members:</strong> Onboarding, renewal reminders, CPD tracking.</li>
                    <li><strong>Memberships:</strong> Add-ons, corporate account management.</li>
                    <li><strong>Awards & Events:</strong> Deadline reminders, ticket confirmations.</li>
                    <li><strong>Payments/Finance:</strong> Failed payment alerts, invoice generation.</li>
                    <li><strong>Communications:</strong> Transactional emails, social media auto-posting.</li>
                    <li><strong>Analytics:</strong> Anomaly detection, report scheduling.</li>
                </ul>

                <LofiHeading level={3}>Priority Sequence</LofiHeading>
                <ol>
                    <li>Phase 1: Membership onboarding/renewal, payment failure notifications.</li>
                    <li>Phase 2: Awards/event journeys, sponsorship fulfilment.</li>
                    <li>Phase 3: CPD tracking, corporate account automations.</li>
                </ol>
            </LofiBox>

            <LofiBox style={{ flexDirection: 'column' }}>
                <LofiHeading level={2}>5.2 Integrations</LofiHeading>
                <LofiHeading level={3}>Purpose</LofiHeading>
                <p>Deliver a cohesive integration layer connecting CMS, membership data, finance, awards, events and marketing tools.</p>

                <LofiHeading level={3}>Integration Pillars</LofiHeading>
                <ul>
                    <li><strong>Finance & Payments:</strong> Stripe ↔ Xero.</li>
                    <li><strong>Membership & CRM:</strong> CMS membership tables ↔ External CRM.</li>
                    <li><strong>Awards & Content Intake:</strong> Form engines ↔ OneDrive ↔ CMS.</li>
                    <li><strong>Events & Commerce:</strong> Eventbrite ↔ CMS ↔ Shopify.</li>
                    <li><strong>Marketing & Communications:</strong> Mailchimp ↔ Buffer ↔ Analytics.</li>
                </ul>

                <LofiHeading level={3}>Implementation Approach</LofiHeading>
                <ul>
                    <li>Prioritise integrations that unblock revenue/membership workflows first.</li>
                    <li>Document runbooks per integration.</li>
                    <li>Build regression tests/smoke checks.</li>
                </ul>
            </LofiBox>
        </LayoutDocs>
    )
}
