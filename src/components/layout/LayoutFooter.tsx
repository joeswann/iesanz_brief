import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LofiBox from "../lofi/LofiBox";
import LofiMenu from "../lofi/LofiMenu";
import { links } from "@/data/data.footer";

const styles = css`
  width: 100%;
  margin-top: 10px;
`;

const LayoutFooter: DCI = ({ children }) => {
  return (
    <div className={styles}>
      <LofiBox className="menu">
        <LofiMenu links={links} />
        <div>&copy; 2025</div>
      </LofiBox>
    </div>
  );
};

export default LayoutFooter;
