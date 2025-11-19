import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LofiBox from "../lofi/LofiBox";
import LofiMenu from "../lofi/LofiMenu";
import { links } from "@/data/data.header";
import { user } from "@/data/data.user";
import { cart } from "@/data/data.cart";
import { fontSize } from "@/styles/styling";

const styles = css`
  .logo {
    font-size: 32px;
    line-height: 1em;
  }

  .account-menu {
    display: flex;
    gap: 16rem;
    align-items: center;
    margin-left: auto;
    ${fontSize(0.9)}

    a {
      text-decoration: none;
      color: var(--foreground);
      font-weight: bold;
      
      &:hover {
        text-decoration: underline;
      }
    }

    .separator {
      width: 1px;
      height: 1em;
      background: var(--foreground);
      opacity: 0.3;
    }
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

        <div className="account-menu">
          <a href="/account">{user.isLoggedIn ? "My Account" : "Login / Register"}</a>
          <div className="separator" />
          <a href="/chapter">{user.chapter.name}</a>
          <div className="separator" />
          <a href="/cart">Cart ({cart.count})</a>
        </div>

        <LofiMenu className="menu" links={links} />
      </LofiBox>
    </div>
  );
};

export default LayoutHeader;
