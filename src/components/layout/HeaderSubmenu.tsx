import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import { submenus } from "@/data/data.header";
import { useLocation, Link } from "@tanstack/react-router";
import { fontSize } from "@/styles/styling";

const submenuContainer = css`
  width: 100%;
  border-top: 1px solid #eee;
  background: #fafafa;
`;

const submenuNav = css`
  max-width: 1400rem;
  margin: 0 auto;
  padding: 12rem 16rem;
  display: flex;
  gap: 24rem;
  align-items: center;
  ${fontSize(0.9)}
`;

const submenuLink = css`
  text-decoration: none;
  color: #666;
  font-weight: 500;
  
  &:hover {
    color: var(--foreground);
    text-decoration: underline;
  }
  
  &.active {
    color: var(--foreground);
    font-weight: bold;
  }
`;

const HeaderSubmenu: DCI = () => {
    const location = useLocation();
    const path = location.pathname;

    // Find the matching submenu key
    // We look for keys that are prefixes of the current path
    // e.g. "/news" matches "/news", "/news/press", etc.
    const activeKey = Object.keys(submenus).find(key =>
        path.startsWith(key) && (path === key || path.startsWith(`${key}/`))
    );

    if (!activeKey) {
        return null;
    }

    const links = submenus[activeKey];

    return (
        <div className={submenuContainer}>
            <nav className={submenuNav}>
                {links.map(([label, url]) => (
                    <Link
                        key={url}
                        to={url}
                        className={submenuLink}
                        activeProps={{ className: 'active' }}
                    >
                        {label}
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default HeaderSubmenu;
