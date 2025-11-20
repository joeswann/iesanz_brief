import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LayoutHeader from "./LayoutHeader";
import LayoutFooter from "./LayoutFooter";
import { Outlet, useLocation } from "@tanstack/react-router";
import AccountHeader from "../account/AccountHeader";

import { submenus } from "@/data/data.header";

const layoutContainer = css`
  min-height: 100svh;
  display: flex;
  flex-direction: column;
`;

const content = css`
  flex-grow: 1;
  padding: 140rem 16rem 32rem;
  width: 100%;
  max-width: 1400rem;
  margin: 0 auto;
`;

const contentWithSubmenu = css`
  flex-grow: 1;
  padding: 190rem 16rem 32rem; /* Extra 50rem for submenu */
  width: 100%;
  max-width: 1400rem;
  margin: 0 auto;
`;

const LayoutDefault: DCI = ({ children }) => {
  const location = useLocation();
  const isAccount = location.pathname.startsWith("/account"); // Kept original isAccount definition
  // Check if the current path is an admin, studio, or docs route
  const isAdminRoute = location.pathname.startsWith('/admin')
  const isStudioRoute = location.pathname.startsWith('/studio')
  const isDocsRoute = location.pathname.startsWith('/docs')

  if (isAdminRoute || isStudioRoute || isDocsRoute) {
    return <Outlet />
  }

  // Check if current path has a submenu
  const path = location.pathname;
  const hasSubmenu = Object.keys(submenus).some(key =>
    path.startsWith(key) && (path === key || path.startsWith(`${key}/`))
  );

  return (
    <div className={layoutContainer}>
      {isAccount ? <AccountHeader /> : <LayoutHeader />}
      <div className={hasSubmenu ? contentWithSubmenu : content}>{children}</div>
      <LayoutFooter />
    </div>
  );
};

export default LayoutDefault;
