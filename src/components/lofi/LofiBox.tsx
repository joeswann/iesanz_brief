import { DCI } from "@/types/dci";
import { css } from "@linaria/core";

const styles = css`
  padding: 16px;
  border: 1px solid var(--foreground);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const LofiBox: DCI = ({ children, className }) => {
  return <div className={styles + " " + className}>{children}</div>;
};

export default LofiBox;
