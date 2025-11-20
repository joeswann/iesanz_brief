import { DCI } from "@/types/dci";
import { SidebarContainer, SidebarLink, SidebarSection } from "@/components/layout/Sidebar";

const eventTypes = [
    "All Events",
    "Conference",
    "Chapter Event",
    "Webinar",
    "Award",
    "Workshop"
];

const EventsSidebar: DCI = () => {
    return (
        <SidebarContainer>
            <SidebarSection title="Event Types">
                {eventTypes.map((type) => (
                    <SidebarLink key={type} to={`/events?type=${type.toLowerCase().replace(' ', '-')}`}>
                        {type}
                    </SidebarLink>
                ))}
            </SidebarSection>
        </SidebarContainer>
    );
};

export default EventsSidebar;
