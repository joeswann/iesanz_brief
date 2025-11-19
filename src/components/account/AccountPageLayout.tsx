import { DCI } from "@/types/dci";
import { css } from "@linaria/core";

const styles = css`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const AccountPageLayout: DCI = ({ children, className }) => {
    return <div className={styles + " " + (className || "")}>{children}</div>;
};

export default AccountPageLayout;
