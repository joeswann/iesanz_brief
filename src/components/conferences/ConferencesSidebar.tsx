import { DCI } from "@/types/dci";
import { SidebarContainer, SidebarLink, SidebarSection } from "@/components/layout/Sidebar";
import { submenus } from "@/data/data.header";
import { conferences } from "@/data/data.conferences";

interface ConferencesSidebarProps {
    selectedConfId: number;
    onSelectConf: (id: number) => void;
}

const ConferencesSidebar: DCI<ConferencesSidebarProps> = ({ selectedConfId, onSelectConf }) => {
    const links = submenus["/conferences"] || [];
    const upcoming = conferences.filter(c => c.status === "Upcoming");
    const past = conferences.filter(c => c.status === "Past");

    return (
        <SidebarContainer>
            <SidebarSection title="Conferences">
                {links.map(([label, url]) => (
                    <SidebarLink key={url} to={url}>
                        {label}
                    </SidebarLink>
                ))}
            </SidebarSection>

            {upcoming.length > 0 && (
                <SidebarSection title="Upcoming Events">
                    {upcoming.map((c) => (
                        <SidebarLink
                            key={c.id}
                            onClick={() => onSelectConf(c.id)}
                            isActive={selectedConfId === c.id}
                        >
                            {c.year}: {c.location.split(',')[0]}
                        </SidebarLink>
                    ))}
                </SidebarSection>
            )}

            <SidebarSection title="Past Conferences">
                {past.map((c) => (
                    <SidebarLink
                        key={c.id}
                        onClick={() => onSelectConf(c.id)}
                        isActive={selectedConfId === c.id}
                    >
                        {c.year}: {c.location.split(',')[0]}
                    </SidebarLink>
                ))}
            </SidebarSection>
        </SidebarContainer>
    );
};

export default ConferencesSidebar;
