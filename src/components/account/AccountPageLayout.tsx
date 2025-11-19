import { DCI } from "@/types/dci";
import { css, cx } from "@linaria/core";
import { TypeBody } from "../type/TypeBody";
import { TypeHeading } from "../type/TypeHeading";

const layoutContainer = css`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const pageHeader = css`
  margin-bottom: 48rem;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 24rem;
`;

const headerTitle = css`
  margin-bottom: 8rem;
`;

interface AccountPageLayoutProps {
  title?: string;
  description?: string;
}

const AccountPageLayout: DCI<AccountPageLayoutProps> = ({ title, description, children, className }) => {
  return (
    <div className={cx(layoutContainer, className)}>
      {(title || description) && (
        <div className={pageHeader}>
          {title && <TypeHeading level={1} className={headerTitle}>{title}</TypeHeading>}
          {description && <TypeBody variant="large" color="muted">{description}</TypeBody>}
        </div>
      )}
      {children}
    </div>
  );
};

export default AccountPageLayout;
