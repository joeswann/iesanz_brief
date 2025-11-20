import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import LofiHeading from '@/components/lofi/LofiHeading'
import LofiBox from '@/components/lofi/LofiBox'

export const Route = createFileRoute('/docs/admin')({
  component: DocsAdmin,
})

function DocsAdmin() {
  return (
    <LayoutDocs>
      <LofiHeading level={1} style={{ marginBottom: '24rem' }}>4. Admin</LofiHeading>

      <LofiBox style={{ marginBottom: '32rem', flexDirection: 'column' }}>
        <LofiHeading level={2}>4.1 Admin Governance</LofiHeading>
        <LofiHeading level={3}>Mandate & Governance</LofiHeading>
        <p>Own global configuration for branding, navigation, integrations, automation rules, and compliance commitments. Approve environment changes and schema updates.</p>

        <LofiHeading level={3}>Identity & Security</LofiHeading>
        <ul>
          <li>Define RBAC tiers, enforce MFA/SSO.</li>
          <li>Oversee incident response including backups and disaster recovery.</li>
        </ul>

        <LofiHeading level={3}>Data & Compliance</LofiHeading>
        <ul>
          <li>Govern datalake/content-lake roadmaps and retention policies.</li>
          <li>Validate new integrations and track ESG commitments.</li>
        </ul>

        <LofiHeading level={3}>Membership Operations Oversight</LofiHeading>
        <ul>
          <li><strong>Catalog & Pricing:</strong> Define membership grades, benefits, and pricing tables.</li>
          <li><strong>Lifecycle & Upgrade:</strong> Oversee onboarding, renewal, and upgrade workflows.</li>
          <li><strong>Automation & Reporting:</strong> Direct admin tooling and govern automations.</li>
          <li><strong>Risk & Compliance:</strong> Guard against pricing errors and fraud.</li>
        </ul>
      </LofiBox>

      <LofiBox style={{ flexDirection: 'column' }}>
        <LofiHeading level={2}>6.1 Memberships</LofiHeading>
        <LofiHeading level={3}>Goals & Context</LofiHeading>
        <p>Support ~1,000 members with a productive and value-driven platform. Grow/retain membership by simplifying onboarding and enabling upgrades.</p>

        <LofiHeading level={3}>Reference Map</LofiHeading>
        <ul>
          <li><strong>Frontend experience:</strong> Membership self-service journeys.</li>
          <li><strong>Backend/governance:</strong> Catalog, lifecycle, upgrade controls.</li>
          <li><strong>Programs & entitlements:</strong> Education, CPD, awards dependencies.</li>
        </ul>

        <LofiHeading level={3}>Lifecycle Swimlane</LofiHeading>
        <ul>
          <li>Discover & Convert: Marketing / Frontend</li>
          <li>Join & Onboard: Admin Console</li>
          <li>Nurture & Engage: Chapters / Programs</li>
          <li>Renew / Upgrade: Super Admin / Finance</li>
          <li>Reactivate / Retain: Admin / Marketing</li>
        </ul>
      </LofiBox>
    </LayoutDocs>
  )
}
