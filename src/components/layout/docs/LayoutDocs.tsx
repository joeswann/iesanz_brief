import { Link, Outlet } from '@tanstack/react-router'
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
  padding-top: 80rem; /* Height of header */
`

const SidebarContainer = styled.aside`
  width: 280rem;
  background-color: var(--surface);
  border-right: 1px solid var(--foreground);
  padding: ${spacing(4)};
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
`

const ContentContainer = styled.main`
  flex: 1;
  padding: ${spacing(4)};
  max-width: 1200rem;
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
  return (
    <LayoutContainer>
      <LayoutAdminHeader title="IESANZ Documentation" />
      <MainContent>
        <SidebarContainer>
          <SidebarSection title="Documentation">
            <SidebarLink to="/docs">Introduction</SidebarLink>
            <SidebarLink to="/docs/structure">1. Structure</SidebarLink>
            <SidebarLink to="/docs/frontend">2. Frontend</SidebarLink>
            <SidebarLink to="/docs/studio">3. Studio</SidebarLink>
            <SidebarLink to="/docs/admin">4. Admin</SidebarLink>
            <SidebarLink to="/docs/integrations">5. Integrations</SidebarLink>
            <SidebarLink to="/docs/appendix">6. Appendix</SidebarLink>
          </SidebarSection>
        </SidebarContainer>
        <ContentContainer>
          {children || <Outlet />}
        </ContentContainer>
      </MainContent>
      <LayoutAdminFooter />
    </LayoutContainer>
  )
}
