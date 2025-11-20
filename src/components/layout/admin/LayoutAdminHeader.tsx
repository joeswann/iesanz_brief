import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import { fontSize } from "@/styles/styling";
import { user } from "@/data/data.user";

const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16rem 32rem;
  background-color: var(--foreground);
  color: var(--background);
`;

const logo = css`
  font-size: 24rem;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
`;

const userSection = css`
  display: flex;
  gap: 16rem;
  align-items: center;
  ${fontSize(0.9)}
`;

const LayoutAdminHeader: DCI<{ title?: string }> = ({ title = "IESANZ Admin" }) => {
  return (
    <header className={header}>
      <a href="/admin" className={logo}>{title}</a>
      <div className={userSection}>
        <span>{user.name}</span>
        <span>|</span>
        <a href="/" style={{ color: 'inherit' }}>Back to Site</a>
      </div>
    </header>
  );
};

export default LayoutAdminHeader;
