import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LayoutHeader from "./LayoutHeader";
import LayoutFooter from "./LayoutFooter";

const styles = css`
  min-height: 100svh;
  display: flex;
  flex-direction: column;

  .content {
    flex-grow: 1;
    padding: 16px;
  }
`;

const LayoutDefault: DCI = ({ children }) => {
  return (
    <div className={styles}>
      <LayoutHeader />
      <div className="content">{children}</div>
      <LayoutFooter />
    </div>
  );
};

export default LayoutDefault;
