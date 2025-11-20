import { DCI } from "@/types/dci";
import { SidebarContainer, SidebarLink, SidebarSection } from "@/components/layout/Sidebar";


import { AwardsEvent } from "@/data/data.awards";

interface AwardsSidebarProps {
    selectedEvent: AwardsEvent;
}

const AwardsSidebar: DCI<AwardsSidebarProps> = ({ selectedEvent }) => {
    const hasWinners = selectedEvent.categories.some(c => c.entries.some(e => e.status === "Winner"));
    const winners = selectedEvent.categories.flatMap(c => c.entries.filter(e => e.status === "Winner"));

    return (
        <SidebarContainer>
            <SidebarSection title="Categories">
                {selectedEvent.categories.map((category) => (
                    <SidebarLink key={category.id} href={`#${category.id}`}>
                        {category.title}
                    </SidebarLink>
                ))}
            </SidebarSection>

            {hasWinners && (
                <SidebarSection title="Winners">
                    {winners.map((winner) => (
                        <SidebarLink key={winner.id} href={`#${winner.id}`}>
                            {winner.projectName}
                        </SidebarLink>
                    ))}
                </SidebarSection>
            )}

            {!hasWinners && (
                <SidebarSection title="Actions">
                    <SidebarLink to="/awards/enter">Enter Awards</SidebarLink>
                    <SidebarLink to="/awards/tickets">Buy Tickets</SidebarLink>
                </SidebarSection>
            )}
        </SidebarContainer>
    );
};

export default AwardsSidebar;
