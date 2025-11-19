import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LofiBox from "../lofi/LofiBox";
import { user } from "@/data/data.user";
import { fontSize } from "@/styles/styling";

const styles = css`
  background-color: #f5f5f5;
  border-bottom: 1px solid #e0e0e0;

  .logo {
    font-size: 32px;
    line-height: 1em;
    color: var(--foreground);
    text-decoration: none;
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

  .main-menu {
    width: 100%;
    margin-top: 16rem;
    display: flex;
    gap: 16rem;
    align-items: center;
    ${fontSize(1)}
    border-top: 1px solid #d0d0d0;
    padding-top: 16rem;

    a {
      text-decoration: none;
      color: var(--foreground);
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      
      &:hover {
        text-decoration: underline;
      }
      
      &.active {
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
`;

const links = [
  ["Dashboard", "/account"],
  ["Profile", "/account/profile"],
  ["Education", "/account/education/"],
  ["Events", "/account/events"],
  ["Awards", "/account/awards"],
  ["Invoices", "/account/invoices"],
  ["Subscription", "/account/subscription"],
];

const AccountHeader: DCI = () => {
  return (
    <div className={styles}>
      <LofiBox>
        <a href="/" className="logo">IESANZ</a>

        <div className="account-menu">
          <span>Welcome, {user.name}</span>
          <div className="separator" />
          <a href="/chapter">{user.chapter.name}</a>
          <div className="separator" />
          <a href="/">Return to Site</a>
        </div>

        <nav className="main-menu">
          {links.map(([label, url], i) => (
            <div key={url} style={{ display: "contents" }}>
              <a href={url}>{label}</a>
              {i < links.length - 1 && <div className="separator" />}
            </div>
          ))}
        </nav>
      </LofiBox>
    </div>
  );
};

export default AccountHeader;
