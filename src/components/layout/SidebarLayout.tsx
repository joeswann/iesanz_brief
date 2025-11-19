import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import { spacing } from "@/styles/styling";

const layoutContainer = css`
  display: grid;
  grid-template-columns: 250rem 1fr;
  gap: ${spacing(12)};
  padding-bottom: ${spacing(12)};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${spacing(6)};
  }
`;

interface SidebarLayoutProps {
    sidebar: React.ReactNode;
    children: React.ReactNode;
}

const SidebarLayout: DCI<SidebarLayoutProps> = ({ sidebar, children }) => {
    return (
        <div className={layoutContainer}>
            <aside>{sidebar}</aside>
            <main style={{ minWidth: 0 }}>{children}</main>
        </div>
    );
};

export default SidebarLayout;
