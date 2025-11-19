import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import { fontSize } from "@/styles/styling";

const styles = css`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  .page-header {
    margin-bottom: 48rem;
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 24rem;

    h1 {
      ${fontSize(2.5)}
      font-weight: 800;
      letter-spacing: -0.03em;
      margin-bottom: 8rem;
      line-height: 1.1;
    }

    p {
      ${fontSize(1.1)}
      color: #666;
      max-width: 600px;
      line-height: 1.5;
    }
  }
`;

interface AccountPageLayoutProps {
  title?: string;
  description?: string;
}

const AccountPageLayout: DCI<AccountPageLayoutProps> = ({ title, description, children, className }) => {
  return (
    <div className={styles + " " + (className || "")}>
      {(title || description) && (
        <div className="page-header">
          {title && <h1>{title}</h1>}
          {description && <p>{description}</p>}
        </div>
      )}
      {children}
    </div>
  );
};

export default AccountPageLayout;
