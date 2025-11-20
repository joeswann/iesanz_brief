import { Link } from '@tanstack/react-router'
import { styled } from '@linaria/react'
import { spacing } from '@/styles/styling'

const HeaderContainer = styled.header`
  background-color: var(--foreground);
  color: var(--background);
  padding: ${spacing(4)} ${spacing(8)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 73px; /* Match the height used in padding-top */
`

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
`

const SubMenuHeader = styled.div`
  border-bottom: 1px solid var(--border);
  background-color: var(--surface-subtle);
  position: sticky;
  top: 0; /* Sticky at the top of the viewport */
  z-index: 40;
`

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${spacing(4)};
  width: 100%;
`

const SubMenuScrollArea = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(8)};
  height: 48px;
  font-size: 14px;
  font-weight: 500;
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */

  &::-webkit-scrollbar {
    display: none; /* Chrome/Safari */
  }
`

const SubMenuLink = styled(Link)`
  text-decoration: none;
  color: var(--foreground-muted);
  white-space: nowrap;
  transition: color 0.2s ease;

  &:hover {
    color: var(--foreground);
  }

  &.active {
    color: var(--foreground);
    font-weight: 600;
  }
`

const FixedWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`

export default function LayoutDocsHeader() {
  return (
    <FixedWrapper>
      <HeaderContainer>
        <Logo to="/docs">IESANZ Docs</Logo>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none', fontSize: '14px' }}>Back to Site</Link>
      </HeaderContainer>

      <SubMenuHeader>
        <Container>
          <SubMenuScrollArea>
            <SubMenuLink to="/docs" activeOptions={{ exact: true }} activeProps={{ className: 'active' }}>
              Overview
            </SubMenuLink>
            <SubMenuLink to="/docs/architecture" activeProps={{ className: 'active' }}>
              Architecture
            </SubMenuLink>
            <SubMenuLink to="/docs/guidance" activeProps={{ className: 'active' }}>
              Guidance
            </SubMenuLink>
            <SubMenuLink to="/docs/vendor" activeProps={{ className: 'active' }}>
              Vendor
            </SubMenuLink>
            <SubMenuLink to="/docs/admin" activeProps={{ className: 'active' }}>
              Admin
            </SubMenuLink>
            <SubMenuLink to="/docs/studio" activeProps={{ className: 'active' }}>
              Studio
            </SubMenuLink>
            <SubMenuLink to="/docs/appendix" activeProps={{ className: 'active' }}>
              Appendix
            </SubMenuLink>
          </SubMenuScrollArea>
        </Container>
      </SubMenuHeader>
    </FixedWrapper>
  )
}
