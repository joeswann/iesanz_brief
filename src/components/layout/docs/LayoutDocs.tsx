import { Link, Outlet, useLocation } from '@tanstack/react-router'
import { styled } from '@linaria/react'
import { spacing } from '@/styles/styling'
import LayoutDocsHeader from './LayoutDocsHeader'
import LayoutAdminFooter from '@/components/layout/admin/LayoutAdminFooter'

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--background);
  padding-top: 121px; /* Height of fixed header (73px) + submenu (48px) */
`

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${spacing(4)};
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`

const PageContent = styled.div`
  flex: 1;
  display: flex;
  gap: ${spacing(12)};
  padding: ${spacing(8)} 0;
`

const SidebarWrapper = styled.aside`
  width: 260px;
  flex-shrink: 0;
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`

const SidebarSticky = styled.div`
  position: sticky;
  top: 140px; /* Adjusted for fixed header */
  display: flex;
  flex-direction: column;
  gap: ${spacing(8)};
`

const SidebarGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(4)};
`

const SidebarGroupTitle = styled.h3`
  font-weight: 600;
  font-size: 12px;
  color: var(--foreground);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
`

const SidebarGroupLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
`

const SidebarLinkItem = styled(Link)`
  font-size: 14px;
  color: var(--foreground-muted);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--foreground);
  }

  &.active {
    color: var(--foreground);
    font-weight: 500;
  }
`

const MainContentWrapper = styled.main`
  flex: 1;
  min-width: 0;
  max-width: 800px; /* Centered content max-width */
  margin: 0 auto; /* Center the content */
`

function SidebarSection({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <SidebarGroup>
      <SidebarGroupTitle>{title}</SidebarGroupTitle>
      <SidebarGroupLinks>
        {children}
      </SidebarGroupLinks>
    </SidebarGroup>
  )
}

function SidebarLink({ to, children }: { to: string, children: React.ReactNode }) {
  return (
    <SidebarLinkItem to={to} activeProps={{ className: 'active' }}>
      {children}
    </SidebarLinkItem>
  )
}

export default function LayoutDocs({ children }: { children?: React.ReactNode }) {
  const location = useLocation()
  const pathname = location.pathname

  const isOverview = pathname === '/docs' || pathname.startsWith('/docs/overview') || pathname === '/docs/process' || pathname === '/docs/contents'
  const isArchitecture = pathname.startsWith('/docs/architecture')
  const isVendor = pathname.startsWith('/docs/vendor')
  const isAdmin = pathname.startsWith('/docs/admin')
  const isStudio = pathname.startsWith('/docs/studio')
  const isAppendix = pathname.startsWith('/docs/appendix')
  const isGuidance = pathname.startsWith('/docs/guidance')

  return (
    <LayoutContainer>
      <LayoutDocsHeader />

      <Container>
        <PageContent>
          <SidebarWrapper>
            <SidebarSticky>

              {isOverview && (
                <SidebarSection title="Overview">
                  <SidebarLink to="/docs">Project Overview</SidebarLink>
                  <SidebarLink to="/docs/contents">Contents</SidebarLink>
                  <SidebarLink to="/docs/overview/reverse-brief">Reverse Brief</SidebarLink>
                  <SidebarLink to="/docs/process">Process</SidebarLink>
                </SidebarSection>
              )}

              {isArchitecture && (
                <SidebarSection title="Architecture">
                  <SidebarLink to="/docs/architecture/sitemap">Sitemap</SidebarLink>
                  <SidebarLink to="/docs/architecture">Systems</SidebarLink>
                  <SidebarLink to="/docs/architecture/memberships">Memberships</SidebarLink>
                  <SidebarLink to="/docs/architecture/services">Services</SidebarLink>
                  <div style={{ paddingLeft: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <SidebarLink to="/docs/architecture/services/sanity">Sanity CMS</SidebarLink>
                    <SidebarLink to="/docs/architecture/services/shopify">Shopify</SidebarLink>
                    <SidebarLink to="/docs/architecture/services/klaviyo">Klaviyo</SidebarLink>
                  </div>
                </SidebarSection>
              )}

              {isVendor && (
                <SidebarSection title="Vendor">
                  <SidebarLink to="/docs/vendor">Information</SidebarLink>
                  <SidebarLink to="/docs/vendor/brief">Project Brief</SidebarLink>
                </SidebarSection>
              )}

              {isAdmin && (
                <SidebarSection title="Admin">
                  <SidebarLink to="/docs/admin">Dashboard</SidebarLink>
                  <SidebarLink to="/docs/admin/members">Members</SidebarLink>
                  <SidebarLink to="/docs/admin/content">Content</SidebarLink>
                  <SidebarLink to="/docs/admin/settings">Settings</SidebarLink>
                  <SidebarLink to="/docs/admin/payments">Payments</SidebarLink>
                  <SidebarLink to="/docs/admin/reports">Reports</SidebarLink>
                  <SidebarLink to="/docs/admin/awards">Awards</SidebarLink>
                  <SidebarLink to="/docs/admin/events">Events</SidebarLink>
                  <SidebarLink to="/docs/admin/memberships">Memberships</SidebarLink>
                  <SidebarLink to="/docs/admin/submissions">Submissions</SidebarLink>
                  <SidebarLink to="/docs/admin/support">Support</SidebarLink>
                </SidebarSection>
              )}

              {isStudio && (
                <SidebarSection title="Studio">
                  <SidebarLink to="/docs/studio">Dashboard</SidebarLink>
                  <SidebarLink to="/docs/studio/pages">Pages</SidebarLink>
                  <SidebarLink to="/docs/studio/events">Events</SidebarLink>
                  <SidebarLink to="/docs/studio/products">Products</SidebarLink>
                  <SidebarLink to="/docs/studio/orders">Orders</SidebarLink>
                  <SidebarLink to="/docs/studio/customers">Customers</SidebarLink>
                  <SidebarLink to="/docs/studio/collections">Collections</SidebarLink>
                  <SidebarLink to="/docs/studio/awards">Awards</SidebarLink>
                </SidebarSection>
              )}

              {isAppendix && (
                <SidebarSection title="Appendix">
                  <SidebarLink to="/docs/appendix">Overview</SidebarLink>
                  <SidebarLink to="/docs/appendix/glossary">Glossary</SidebarLink>
                  <SidebarLink to="/docs/appendix/platform-comparison">Platform Comparison</SidebarLink>
                </SidebarSection>
              )}

              {isGuidance && (
                <SidebarSection title="Guidance">
                  <SidebarLink to="/docs/guidance/priorities">Priorities</SidebarLink>
                  <SidebarLink to="/docs/guidance/phases">Phases</SidebarLink>
                </SidebarSection>
              )}

            </SidebarSticky>
          </SidebarWrapper>

          <MainContentWrapper>
            {children || <Outlet />}
          </MainContentWrapper>
        </PageContent>
      </Container>

      <LayoutAdminFooter />
    </LayoutContainer>
  )
}
