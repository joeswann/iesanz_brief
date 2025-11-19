import { DCI } from "@/types/dci";
import { css, cx } from "@linaria/core";

const boxBase = css`
  padding: 16rem;
  border: 1px solid var(--foreground);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const LofiBox: DCI = ({ children, className }) => {
  return <div className={cx(boxBase, className)}>{children}</div>;
};

export default LofiBox;
