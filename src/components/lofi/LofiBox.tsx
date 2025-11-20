import { DCI } from "@/types/dci";
import { css, cx } from "@linaria/core";

const boxBase = css`
  padding: 16rem;
  border: 1px solid var(--foreground);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

interface LofiBoxProps {
  style?: React.CSSProperties;
}

const LofiBox: DCI<LofiBoxProps> = ({ children, className, style }) => {
  return <div className={cx(boxBase, className)} style={style}>{children}</div>;
};

export default LofiBox;
