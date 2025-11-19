import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import { TypeHeading } from "@/components/type/TypeHeading";
import { TypeBody } from "@/components/type/TypeBody";
import { spacing } from "@/styles/styling";
import { LofiCard } from "@/components/lofi/LofiLayouts";

const grid = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${spacing(4)};
  margin-top: ${spacing(4)};
`;

const newsImage = css`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: ${spacing(2)};
  background-color: #eee;
`;

interface ChapterEventsProps {
    events: any[];
}

const ChapterEvents: DCI<ChapterEventsProps> = ({ events }) => {
    return (
        <div>
            <TypeHeading level={2}>Upcoming Events</TypeHeading>
            {events && events.length > 0 ? (
                <div className={grid}>
                    {events.map((event: any) => (
                        <LofiCard key={event.id}>
                            <img src={event.image} alt={event.title} className={newsImage} />
                            <TypeBody variant="small" color="muted">{event.date} • {event.location}</TypeBody>
                            <TypeHeading level={4}>{event.title}</TypeHeading>
                            <div style={{ marginTop: spacing(2) }}>
                                <TypeBody weight="bold">Register &rarr;</TypeBody>
                            </div>
                        </LofiCard>
                    ))}
                </div>
            ) : (
                <TypeBody color="muted">No upcoming events.</TypeBody>
            )}
        </div>
    );
};

export default ChapterEvents;
