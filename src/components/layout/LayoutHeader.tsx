import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LofiBox from "../lofi/LofiBox";
import HeaderSubmenu from "./HeaderSubmenu";
import { links } from "@/data/data.header";
import { user } from "@/data/data.user";
import { cart } from "@/data/data.cart";
import { fontSize } from "@/styles/styling";

const logo = css`
  font-size: 32px;
  line-height: 1em;
`;

const accountMenu = css`
  display: flex;
  gap: 16rem;
  align-items: center;
  margin-left: auto;
  ${fontSize(0.9)}
`;

const accountLink = css`
  text-decoration: none;
  color: var(--foreground);
  font-weight: bold;
  
  &:hover {
    text-decoration: underline;
  }
`;

const separator = css`
  width: 1px;
  height: 1em;
  background: var(--foreground);
  opacity: 0.3;
`;

const mainMenu = css`
  width: 100%;
  margin-top: 16rem;
  display: flex;
  gap: 16rem;
  align-items: center;
  ${fontSize(1)}
  border-top: 1px solid var(--foreground);
  padding-top: 16rem;
`;

const mainLink = css`
  text-decoration: none;
  color: var(--foreground);
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  
  &:hover {
    text-decoration: underline;
  }
`;

const LayoutHeader: DCI = ({ children }) => {
  return (
    <div>
      <LofiBox>
        <a href="/" className={logo} style={{ textDecoration: 'none', color: 'inherit' }}>IESANZ</a>

        <div className={accountMenu}>
          <a href={`/chapters/${user.chapter.slug}`} className={accountLink}>{user.chapter.name}</a>
          <div className={separator} />
          <a href="/account" className={accountLink}>{user.isLoggedIn ? "My Account" : "Login / Register"}</a>
          <div className={separator} />
          <a href="/cart" className={accountLink}>Cart ({cart.items.length})</a>
        </div>

        <nav className={mainMenu}>
          {links.map(([label, url], i) => (
            <div key={url} style={{ display: "contents" }}>
              <a href={url} className={mainLink}>{label}</a>
              {i < links.length - 1 && <div className={separator} />}
            </div>
          ))}
        </nav>
      </LofiBox>
      <HeaderSubmenu />
    </div>
  );
};

export default LayoutHeader;
