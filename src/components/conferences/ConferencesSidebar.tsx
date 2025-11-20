import { DCI } from "@/types/dci";
import { SidebarContainer, SidebarLink, SidebarSection } from "@/components/layout/Sidebar";
import { Conference } from "@/data/data.conferences";

interface ConferencesSidebarProps {
    selectedConf: Conference;
}

const ConferencesSidebar: DCI<ConferencesSidebarProps> = ({ selectedConf }) => {
    const isUpcoming = selectedConf.status === "Upcoming";

    return (
        <SidebarContainer>
            <SidebarSection title={selectedConf.year.toString()}>
                <SidebarLink to={`/conferences/${selectedConf.id}`} exact>Overview</SidebarLink>
                {selectedConf.program.length > 0 && (
                    <SidebarLink to={`/conferences/${selectedConf.id}/program`}>Program</SidebarLink>
                )}
                {selectedConf.speakers.length > 0 && (
                    <SidebarLink to={`/conferences/${selectedConf.id}/speakers`}>Speakers</SidebarLink>
                )}
                {selectedConf.sponsors.length > 0 && (
                    <SidebarLink to={`/conferences/${selectedConf.id}/sponsors`}>Sponsors</SidebarLink>
                )}
            </SidebarSection>

            {isUpcoming ? (
                <SidebarSection title="Registration">
                    <SidebarLink to={`/conferences/${selectedConf.id}/tickets`}>Buy Tickets</SidebarLink>
                </SidebarSection>
            ) : (
                <SidebarSection title="Media">
                    <SidebarLink to={`/conferences/${selectedConf.id}/gallery`}>Photo Gallery</SidebarLink>
                </SidebarSection>
            )}
        </SidebarContainer>
    );
};

export default ConferencesSidebar;
