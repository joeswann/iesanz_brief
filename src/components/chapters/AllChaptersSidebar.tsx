import { DCI } from "@/types/dci";
import { SidebarContainer, SidebarLink, SidebarSection } from "@/components/layout/Sidebar";

const AllChaptersSidebar: DCI = () => {
  return (
    <SidebarContainer>
      <SidebarSection title="All Chapters">
        <SidebarLink
          to="/chapters"
          exact={true}
        >
          Overview
        </SidebarLink>
        <SidebarLink
          to="/chapters/news"
        >
          News
        </SidebarLink>
        <SidebarLink
          to="/chapters/events"
        >
          Events
        </SidebarLink>
      </SidebarSection>
    </SidebarContainer>
  );
};

export default AllChaptersSidebar;
