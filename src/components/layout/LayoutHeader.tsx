import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LofiBox from "../lofi/LofiBox";
import LofiMenu from "../lofi/LofiMenu";
import { account, links } from "@/data/data.header";
import { chapters } from "@/data/data.chapters";

const styles = css`
  .logo {
    font-size: 32px;
    line-height: 1em;
  }

  .account {
    text-align: right;
    margin-left: auto;
  }

  .menu {
    width: 100%;
    margin-top: 16px;
  }
`;

const LayoutHeader: DCI = ({ children }) => {
  return (
    <div className={styles}>
      <LofiBox>
        <div className="logo">IESANZ</div>

        <LofiMenu className="account" links={account} />
        <LofiMenu className="menu" links={links} />
      </LofiBox>
    </div>
  );
};

export default LayoutHeader;
