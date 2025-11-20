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
  const isServices = pathname.includes('/docs/services')
  const isStudio = pathname.includes('/docs/studio')
  const isOverview = !isAppendix && !isAdmin && !isServices && !isStudio

  return (
    <LayoutContainer>
      <FixedHeaderWrapper>
        <LayoutAdminHeader
          title="IESANZ Documentation"
          subMenu={
            <SubHeader>
              <SubHeaderLink to="/docs" activeProps={{ className: 'active' }} activeOptions={{ exact: true }}>Overview</SubHeaderLink>
              <SubHeaderLink to="/docs/services" activeProps={{ className: 'active' }}>Services</SubHeaderLink>
              <SubHeaderLink to="/docs/admin" activeProps={{ className: 'active' }}>Admin</SubHeaderLink>
              <SubHeaderLink to="/docs/appendix" activeProps={{ className: 'active' }}>Appendix</SubHeaderLink>
              <SubHeaderLink to="/docs/studio" activeProps={{ className: 'active' }}>Studio</SubHeaderLink>
            </SubHeader>
          }
        />
      </FixedHeaderWrapper>
      <MainContent>
        <SidebarContainer>
          {isOverview && (
            <SidebarSection title="Overview">
              <SidebarLink to="/docs">Introduction</SidebarLink>
              <SidebarLink to="/docs/brief">Reverse Brief</SidebarLink>
              <SidebarLink to="/docs/architecture">Architecture</SidebarLink>
              <SidebarLink to="/docs/process">Process</SidebarLink>
              <SidebarLink to="/docs/sitemap">Sitemap</SidebarLink>
            </SidebarSection>
          )}
          {isServices && (
            <SidebarSection title="Services">
              <SidebarLink to="/docs/services">Integrations List</SidebarLink>
            </SidebarSection>
          )}
          {isAdmin && (
            <SidebarSection title="Admin">
              <SidebarLink to="/docs/admin">Roles & Permissions</SidebarLink>
            </SidebarSection>
          )}
          {isAppendix && (
            <SidebarSection title="Appendix">
              <SidebarLink to="/docs/appendix">Overview</SidebarLink>
              <SidebarLink to="/docs/appendix/wordpress">Wordpress vs Headless</SidebarLink>
            </SidebarSection>
          )}
          {isStudio && (
            <SidebarSection title="Studio">
              <SidebarLink to="/docs/studio">Dashboard Guide</SidebarLink>
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
