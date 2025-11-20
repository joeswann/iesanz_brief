import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import LofiHeading from '@/components/lofi/LofiHeading'
import LofiBox from '@/components/lofi/LofiBox'

export const Route = createFileRoute('/docs/appendix')({
    component: DocsAppendix,
})

function DocsAppendix() {
    return (
        <LayoutDocs>
            <LofiHeading level={1} style={{ marginBottom: '24rem' }}>6. Appendix</LofiHeading>

            <LofiBox style={{ marginBottom: '32rem', flexDirection: 'column' }}>
                <LofiHeading level={2}>6.1 Analytics</LofiHeading>
                <LofiHeading level={3}>Objectives & Governance</LofiHeading>
                <p>Measure success pillars: systems flexibility, usability, and memberships. Provide real-time visibility and historical reporting.</p>

                <LofiHeading level={3}>Data Sources</LofiHeading>
                <ul>
                    <li>Web/app telemetry (GA4).</li>
                    <li>CMS + headless frontend events.</li>
                    <li>Commerce/finance feeds (Stripe, Xero).</li>
                    <li>Marketing stack (Mailchimp, Buffer).</li>
                </ul>
            </LofiBox>

            <LofiBox style={{ marginBottom: '32rem', flexDirection: 'column' }}>
                <LofiHeading level={2}>6.2 Communications</LofiHeading>
                <LofiHeading level={3}>Purpose</LofiHeading>
                <p>Coordinate internal/member communications distinct from external marketing. Improve usability with structured feeds and preference management.</p>

                <LofiHeading level={3}>Channels</LofiHeading>
                <ul>
                    <li>Bulletin board with rich formatting.</li>
                    <li>System notifications (transactional emails/SMS).</li>
                    <li>Internal announcements.</li>
                </ul>
            </LofiBox>

            <LofiBox style={{ marginBottom: '32rem', flexDirection: 'column' }}>
                <LofiHeading level={2}>6.3 Payments</LofiHeading>
                <LofiHeading level={3}>Mandate</LofiHeading>
                <p>Ensure accurate, auditable financial flows. Integrate online payments with accounting (Xero) and support multi-bank operations.</p>

                <LofiHeading level={3}>Payment Processing</LofiHeading>
                <ul>
                    <li>Gateways: Stripe, Eventbrite/Shopify.</li>
                    <li>Features: Multi-currency, GST handling.</li>
                </ul>
            </LofiBox>

            <LofiBox style={{ marginBottom: '32rem', flexDirection: 'column' }}>
                <LofiHeading level={2}>6.4 Forms</LofiHeading>
                <LofiHeading level={3}>Purpose</LofiHeading>
                <p>Provide consistent, member-friendly forms that power onboarding, upgrades, awards, and CPD logging.</p>

                <LofiHeading level={3}>Experience Standards</LofiHeading>
                <ul>
                    <li>Save & Resume.</li>
                    <li>Draft & History.</li>
                    <li>Validation & Guidance.</li>
                </ul>
            </LofiBox>

            <LofiBox style={{ marginBottom: '32rem', flexDirection: 'column' }}>
                <LofiHeading level={2}>6.5 Marketing</LofiHeading>
                <LofiHeading level={3}>Strategic Objectives</LofiHeading>
                <p>Increase awareness among lighting professionals. Translate marketing into tangible KPIs.</p>

                <LofiHeading level={3}>Channels</LofiHeading>
                <ul>
                    <li>Owned: Headless site, blog, newsletters.</li>
                    <li>Shared/Social: LinkedIn, Facebook, Instagram.</li>
                    <li>Events/Community: Webinars, conferences.</li>
                </ul>
            </LofiBox>

            <LofiBox style={{ marginBottom: '32rem', flexDirection: 'column' }}>
                <LofiHeading level={2}>6.6 Security</LofiHeading>
                <LofiHeading level={3}>Objectives</LofiHeading>
                <p>Protect member data and financial transactions. Reduce attack surface via headless architecture.</p>

                <LofiHeading level={3}>Security Posture</LofiHeading>
                <ul>
                    <li>MFA/SSO across admin portals.</li>
                    <li>WAF/firewall, malware protection.</li>
                    <li>Secure integration patterns.</li>
                </ul>
            </LofiBox>

            <LofiBox style={{ flexDirection: 'column' }}>
                <LofiHeading level={2}>6.7 SEO</LofiHeading>
                <LofiHeading level={3}>Technical Foundations</LofiHeading>
                <p>Headless frontend for semantic markup and fast delivery. Core Web Vitals emphasis.</p>

                <LofiHeading level={3}>Content Strategy</LofiHeading>
                <ul>
                    <li>Cover CMS content families.</li>
                    <li>Highlight marketing storytelling pillars.</li>
                    <li>Create structured directories.</li>
                </ul>
            </LofiBox>
        </LayoutDocs>
    )
}
