import { DCI } from "@/types/dci";
import { SidebarContainer, SidebarLink, SidebarSection } from "@/components/layout/Sidebar";
import { submenus } from "@/data/data.header";
import { css, cx } from "@linaria/core";
import { fontSize } from "@/styles/styling";
import LofiBox from "@/components/lofi/LofiBox";
import LofiHeading from "@/components/lofi/LofiHeading";
import LofiText from "@/components/lofi/LofiText";
import { LofiButton } from "@/components/lofi/LofiButton";
import { awardsEvents } from "@/data/data.awards";

const eventButton = css`
  ${fontSize(1)}
  text-decoration: none;
  color: var(--foreground);
  padding: 8rem 0;
  border-bottom: 1px solid var(--light-grey);
  background: none;
  border-left: none;
  border-right: none;
  border-top: none;
  text-align: left;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    font-weight: bold;
  }
`;

const activeEventButton = css`
  opacity: 0.7;
  font-weight: bold;
`;

interface AwardsSidebarProps {
    selectedEventId: number;
    onSelectEvent: (id: number) => void;
}

const AwardsSidebar: DCI<AwardsSidebarProps> = ({ selectedEventId, onSelectEvent }) => {
    const links = submenus["/awards"] || [];

    return (
        <SidebarContainer>
            <SidebarSection title="Awards">
                {links.map(([label, url]) => (
                    <SidebarLink key={url} to={url}>
                        {label}
                    </SidebarLink>
                ))}
            </SidebarSection>

            <SidebarSection title="Awards Archive">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12rem' }}>
                    {awardsEvents.map((evt) => (
                        <button
                            key={evt.id}
                            onClick={() => onSelectEvent(evt.id)}
                            className={cx(eventButton, selectedEventId === evt.id && activeEventButton)}
                        >
                            {evt.year} Awards
                        </button>
                    ))}
                </div>
            </SidebarSection>

            <LofiBox>
                <LofiHeading level={4}>Enter Awards</LofiHeading>
                <LofiText lines={2} />
                <LofiButton variant="secondary">Submit Entry</LofiButton>
            </LofiBox>
        </SidebarContainer>
    );
};

export default AwardsSidebar;
