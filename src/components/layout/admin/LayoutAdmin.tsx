import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LayoutAdminHeader from "./LayoutAdminHeader";
import LayoutAdminFooter from "./LayoutAdminFooter";
import { SidebarContainer, SidebarLink, SidebarSection } from "@/components/layout/Sidebar";
import SidebarLayout from "@/components/layout/SidebarLayout";

const adminContainer = css`
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

const AdminSidebar: DCI = () => {
    return (
        <SidebarContainer>
            <SidebarSection title="Admin Menu">
                <SidebarLink to="/admin">Dashboard</SidebarLink>
                <SidebarLink to="/admin/members">Members</SidebarLink>
                <SidebarLink to="/admin/memberships">Memberships</SidebarLink>
                <SidebarLink to="/admin/submissions">Submissions</SidebarLink>
                <SidebarLink to="/admin/payments">Payments</SidebarLink>
                <SidebarLink to="/admin/reports">Reports</SidebarLink>
            </SidebarSection>
        </SidebarContainer>
    );
};

const LayoutAdmin: DCI<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className={adminContainer}>
            <LayoutAdminHeader />
            <div className={contentContainer}>
                <SidebarLayout sidebar={<AdminSidebar />}>
                    {children}
                </SidebarLayout>
            </div>
            <LayoutAdminFooter />
        </div>
    );
};

export default LayoutAdmin;
