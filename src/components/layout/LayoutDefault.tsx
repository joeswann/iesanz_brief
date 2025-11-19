import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LayoutHeader from "./LayoutHeader";
import LayoutFooter from "./LayoutFooter";
import { useLocation } from "@tanstack/react-router";
import AccountHeader from "../account/AccountHeader";

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
  const location = useLocation();
  const isAccount = location.pathname.startsWith("/account");

  return (
    <div className={styles}>
      {isAccount ? <AccountHeader /> : <LayoutHeader />}
      <div className="content">{children}</div>
      <LayoutFooter />
    </div>
  );
};

export default LayoutDefault;
