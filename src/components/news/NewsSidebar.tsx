import { DCI } from "@/types/dci";
import { SidebarContainer, SidebarLink, SidebarSection } from "@/components/layout/Sidebar";
import { submenus } from "@/data/data.header";

const NewsSidebar: DCI = () => {
    const links = submenus["/news"] || [];

    return (
        <SidebarContainer>
            <SidebarSection title="News">
                {links.map(([label, url]) => (
                    <SidebarLink key={url} to={url}>
                        {label}
                    </SidebarLink>
                ))}
            </SidebarSection>
        </SidebarContainer>
    );
};

export default NewsSidebar;
