import { DCI } from "@/types/dci";
import { SidebarContainer, SidebarLink, SidebarSection } from "@/components/layout/Sidebar";
import { submenus } from "@/data/data.header";

const EventsSidebar: DCI = () => {
    const links = submenus["/events"] || [];

    return (
        <SidebarContainer>
            <SidebarSection title="Events">
                {links.map(([label, url]) => (
                    <SidebarLink key={url} to={url}>
                        {label}
                    </SidebarLink>
                ))}
            </SidebarSection>
        </SidebarContainer>
    );
};

export default EventsSidebar;
