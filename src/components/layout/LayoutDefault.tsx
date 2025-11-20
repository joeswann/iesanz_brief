import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LayoutHeader from "./LayoutHeader";
import LayoutFooter from "./LayoutFooter";
import { useLocation } from "@tanstack/react-router";
import AccountHeader from "../account/AccountHeader";

const layoutContainer = css`
  min-height: 100svh;
  display: flex;
  flex-direction: column;
`;

const content = css`
  flex-grow: 1;
  padding: var(--content-padding-top) 16rem;
  width: 100%;
  max-width: 1400rem;
  margin: 0 auto;
`;

const LayoutDefault: DCI = ({ children }) => {
  const location = useLocation();
  const isAccount = location.pathname.startsWith("/account");
  const isAdmin = location.pathname.startsWith("/admin");
  const isStudio = location.pathname.startsWith("/studio");

  if (isAdmin || isStudio) {
    return <>{children}</>;
  }

  return (
    <div className={layoutContainer}>
      {isAccount ? <AccountHeader /> : <LayoutHeader />}
      <div className={content}>{children}</div>
      <LayoutFooter />
    </div>
  );
};

export default LayoutDefault;
