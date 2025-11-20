import { Link, Outlet, useLocation } from '@tanstack/react-router'
import { styled } from '@linaria/react'
import { spacing } from '@/styles/styling'
import LayoutAdminHeader from '@/components/layout/admin/LayoutAdminHeader'
import LayoutAdminFooter from '@/components/layout/admin/LayoutAdminFooter'

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--background);
`

const MainContent = styled.div`
  display: flex;
  flex: 1;
  padding-top: 120rem; /* Height of header + subheader */
`

const FixedHeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`

const SubHeader = styled.div`
  height: 40rem;
  background-color: var(--surface);
  border-bottom: 1px solid var(--foreground-muted);
  display: flex;
  align-items: center;
  padding: 0 ${spacing(4)};
  gap: ${spacing(4)};
`

const SubHeaderLink = styled(Link)`
  text-decoration: none;
  color: var(--foreground-muted);
  font-size: 14rem;
  font-weight: 500;

  &:hover {
    color: var(--foreground);
  }

  &.active {
    color: var(--foreground);
    font-weight: bold;
  }
`

const SidebarContainer = styled.aside`
  width: 280rem;
  background-color: var(--surface);
  border-right: 1px solid var(--foreground);
  padding: ${spacing(4)};
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
  position: fixed;
  top: 120rem;
  bottom: 0;
  overflow-y: auto;
`

const ContentContainer = styled.main`
  flex: 1;
  padding: ${spacing(4)};
  max-width: 1200rem;
  margin-left: 280rem; /* Width of sidebar */
`

const SectionTitle = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12rem;
  color: var(--foreground-muted);
  margin-bottom: ${spacing(1)};
`

const StyledSidebarLink = styled(Link)`
  display: block;
  padding: ${spacing(1)} 0;
  color: var(--foreground);
  text-decoration: none;
  font-size: 14rem;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    font-weight: bold;
  }
`

function SidebarSection({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </div>
  )
}

function SidebarLink({ to, children }: { to: string, children: React.ReactNode }) {
  return (
    <StyledSidebarLink to={to} activeProps={{ className: 'active' }}>
      {children}
    </StyledSidebarLink>
  )
}

export default function LayoutDocs({ children }: { children?: React.ReactNode }) {
  const location = useLocation()
  const pathname = location.pathname

  const isAppendix = pathname.includes('/docs/appendix')
  const isAdmin = pathname.includes('/docs/admin')
  const isStudio = pathname.includes('/docs/studio')
  const isArchitecture = pathname.includes('/docs/architecture')
  const isOverview = !isAppendix && !isAdmin && !isStudio && !isArchitecture

  return (
    <LayoutContainer>
      <FixedHeaderWrapper>
        <LayoutAdminHeader
          title="IESANZ Documentation"
          subMenu={
            <SubHeader>
              <SubHeaderLink to="/docs" activeProps={{ className: 'active' }} activeOptions={{ exact: true }}>Overview</SubHeaderLink>
              <SubHeaderLink to="/docs/architecture" activeProps={{ className: 'active' }}>Architecture</SubHeaderLink>
              <SubHeaderLink to="/docs/admin" activeProps={{ className: 'active' }}>Admin</SubHeaderLink>
              <SubHeaderLink to="/docs/studio" activeProps={{ className: 'active' }}>Studio</SubHeaderLink>
              <SubHeaderLink to="/docs/appendix" activeProps={{ className: 'active' }}>Appendix</SubHeaderLink>
            </SubHeader>
          }
        />
      </FixedHeaderWrapper>
      <MainContent>
        <SidebarContainer>
          {isOverview && (
            <SidebarSection title="Overview">
              <SidebarLink to="/docs">Introduction</SidebarLink>
              <SidebarLink to="/docs/process">Process</SidebarLink>
            </SidebarSection>
          )}
          {isArchitecture && (
            <>
              <SidebarSection title="Architecture">
                <SidebarLink to="/docs/architecture">Overview</SidebarLink>
                <SidebarLink to="/docs/architecture/sitemap">Sitemap</SidebarLink>
              </SidebarSection>
              <SidebarSection title="Services">
                <SidebarLink to="/docs/architecture/services">Overview</SidebarLink>
                <SidebarLink to="/docs/architecture/services/sanity">Sanity</SidebarLink>
                <SidebarLink to="/docs/architecture/services/shopify">Shopify</SidebarLink>
                <SidebarLink to="/docs/architecture/services/auth0">Auth0</SidebarLink>
                <SidebarLink to="/docs/architecture/services/klaviyo">Klaviyo</SidebarLink>
                <SidebarLink to="/docs/architecture/services/algolia">Algolia</SidebarLink>
              </SidebarSection>
            </>
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
              <SidebarLink to="/docs/studio/news">News</SidebarLink>
              <SidebarLink to="/docs/studio/events">Events</SidebarLink>
              <SidebarLink to="/docs/studio/products">Products</SidebarLink>
              <SidebarLink to="/docs/studio/orders">Orders</SidebarLink>
              <SidebarLink to="/docs/studio/customers">Customers</SidebarLink>
              <SidebarLink to="/docs/studio/collections">Collections</SidebarLink>
              <SidebarLink to="/docs/studio/awards">Awards</SidebarLink>
              <SidebarLink to="/docs/studio/pages">Pages</SidebarLink>
            </SidebarSection>
          )}
          {isAppendix && (
            <SidebarSection title="Appendix">
              <SidebarLink to="/docs/appendix">Overview</SidebarLink>
            </SidebarSection>
          )}
        </SidebarContainer>
        <ContentContainer>
          {children || <Outlet />}
        </ContentContainer>
      </MainContent>
      <LayoutAdminFooter />
    </LayoutContainer>
  )
}
