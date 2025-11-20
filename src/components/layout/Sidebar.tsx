import { DCI } from "@/types/dci";
import { css, cx } from "@linaria/core";
import { Link } from "@tanstack/react-router";
import { fontSize, spacing } from "@/styles/styling";
import { TypeHeading } from "@/components/type/TypeHeading";

const container = css`
  display: flex;
  flex-direction: column;
  gap: ${spacing(6)};

  @media (max-width: 768px) {
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: ${spacing(2)};
    border-bottom: 1px solid #eee;
    margin-bottom: ${spacing(4)};
  }
`;

const section = css`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;

const linkStyles = css`
  ${fontSize(1)}
  text-decoration: none;
  color: var(--foreground);
  padding: ${spacing(2)} 0;
  border-bottom: 1px solid var(--light-grey);
  background: none;
  border-left: none;
  border-right: none;
  border-top: none;
  text-align: left;
  cursor: pointer;
  display: block;
  width: 100%;

  &:hover {
    opacity: 0.7;
  }
`;

const activeLink = css`
  opacity: 0.7;
  font-weight: bold;
`;

export const SidebarContainer: DCI = ({ children }) => {
    return <nav className={container}>{children}</nav>;
};

interface SidebarSectionProps {
    title?: string;
}

export const SidebarSection: DCI<SidebarSectionProps> = ({ title, children }) => {
    return (
        <div className={section}>
            {title && <TypeHeading level={4}>{title}</TypeHeading>}
            <div className={section}>{children}</div>
        </div>
    );
};

interface SidebarLinkProps {
    to?: string;
    href?: string;
    onClick?: () => void;
    isActive?: boolean;
    children: React.ReactNode;
    exact?: boolean;
    target?: string;
    search?: Record<string, any>;
}

export const SidebarLink: DCI<SidebarLinkProps> = ({ to, href, onClick, isActive, children, exact, target, search }) => {
    if (to) {
        return (
            <Link
                to={to}
                search={search}
                className={cx(linkStyles, isActive && activeLink)}
                activeProps={{ className: activeLink }}
                activeOptions={exact ? { exact: true } : undefined}
                target={target}
            >
                {children}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} className={cx(linkStyles, isActive && activeLink)} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined}>
                {children}
            </a>
        )
    }

    return (
        <button
            onClick={onClick}
            className={cx(linkStyles, isActive && activeLink)}
        >
            {children}
        </button>
    );
};
