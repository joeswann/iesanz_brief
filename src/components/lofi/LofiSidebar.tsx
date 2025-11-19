import { DCI } from "@/types/dci";
import { css, cx } from "@linaria/core";
import LofiHeading from "./LofiHeading";

const sidebarBase = css`
  display: flex;
  flex-direction: column;
  gap: 24rem;
  width: 250rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

interface LofiSidebarProps {
  title?: string;
}

export const LofiSidebar: DCI<LofiSidebarProps> = ({ title, children, className }) => {
  return (
    <aside className={cx(sidebarBase, className)}>
      {title && <LofiHeading level={3}>{title}</LofiHeading>}
      {children}
    </aside>
  );
};
