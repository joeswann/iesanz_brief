import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LayoutAdminHeader from "../admin/LayoutAdminHeader";
import LayoutAdminFooter from "../admin/LayoutAdminFooter";
import SidebarLayout from "@/components/layout/SidebarLayout";
import { SidebarContainer, SidebarLink, SidebarSection } from "@/components/layout/Sidebar";

const studioContainer = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const contentContainer = css`
  flex-grow: 1;
  width: 100%;
  max-width: 1400rem;
  margin: 0 auto;
  padding: 32rem 16rem;
`;

const StudioSidebar: DCI = () => {
    return (
        <SidebarContainer>
            <SidebarSection title="Studio Menu">
                <SidebarLink to="/studio">Overview</SidebarLink>
            </SidebarSection>

            <SidebarSection title="Content (CMS)">
                <SidebarLink to="/studio/news">News</SidebarLink>
                <SidebarLink to="/studio/events">Events</SidebarLink>
                <SidebarLink to="/studio/awards">Awards</SidebarLink>
                <SidebarLink to="/studio/pages">Pages</SidebarLink>
            </SidebarSection>

            <SidebarSection title="Store (Shopify)">
                <SidebarLink to="/studio/products">Products</SidebarLink>
                <SidebarLink to="/studio/collections">Collections</SidebarLink>
                <SidebarLink to="/studio/orders">Orders</SidebarLink>
                <SidebarLink to="/studio/customers">Customers</SidebarLink>
            </SidebarSection>

            <SidebarSection title="External Tools">
                <SidebarLink href="https://sanity.io" target="_blank">Sanity Dashboard</SidebarLink>
                <SidebarLink href="https://shopify.com" target="_blank">Shopify Admin</SidebarLink>
            </SidebarSection>
        </SidebarContainer>
    );
};

const LayoutStudio: DCI<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className={studioContainer}>
            <LayoutAdminHeader title="IESANZ Studio" />
            <div className={contentContainer}>
                <SidebarLayout sidebar={<StudioSidebar />}>
                    {children}
                </SidebarLayout>
            </div>
            <LayoutAdminFooter />
        </div>
    );
};

export default LayoutStudio;
