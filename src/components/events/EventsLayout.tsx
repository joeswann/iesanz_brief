import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LofiImage from "@/components/lofi/LofiImage";
import LofiHeading from "@/components/lofi/LofiHeading";
import LofiText from "@/components/lofi/LofiText";
import { LofiButton } from "@/components/lofi/LofiButton";
import LofiGrid from "@/components/lofi/LofiGrid";
import { eventsData } from "@/data/data.events";
import { chapters } from "@/data/data.chapters";
import EventCard from "@/components/events/EventCard";
import SidebarLayout from "@/components/layout/SidebarLayout";
import EventsSidebar from "./EventsSidebar";

const layoutContainer = css`
  display: flex;
  flex-direction: column;
  gap: 48rem;
  padding-bottom: 48rem;
`;

const heroSection = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const featuredLabel = css`
  margin-bottom: 16rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const featuredMeta = css`
  margin-bottom: 16rem;
  opacity: 0.7;
`;

const registerButton = css`
  margin-top: 24rem;
`;

const filters = css`
  display: flex;
  gap: 16rem;
  flex-wrap: wrap;
  padding-bottom: 24rem;
  border-bottom: 1px solid var(--foreground);
`;

const eventsGrid = css`
  margin-top: 32rem;
`;

const EventsLayout: DCI = () => {
  const featuredEvent = eventsData.find((e) => e.isFeatured) || eventsData[0];
  const otherEvents = eventsData.filter((e) => e.id !== featuredEvent.id);

  return (
    <SidebarLayout sidebar={<EventsSidebar />}>
      <div className={layoutContainer}>
        <div className={filters}>
          <LofiButton variant="primary">All Chapters</LofiButton>
          {chapters.map((chapter) => (
            <LofiButton key={chapter.slug} variant="secondary">
              {chapter.name}
            </LofiButton>
          ))}
        </div>

        {/* Featured Event */}
        <section className={heroSection}>
          <LofiImage ratio={16 / 9} label="Featured Event" />
          <div>
            <div className={featuredLabel}>
              Featured Event
            </div>
            <LofiHeading level={1}>{featuredEvent.title}</LofiHeading>
            <div className={featuredMeta}>
              {featuredEvent.date} • {featuredEvent.location}
            </div>
            <LofiText lines={4} />
            <div className={registerButton}>
              <LofiButton variant="primary">Register Now</LofiButton>
            </div>
          </div>
        </section>

        {/* Events List */}
        <section>
          <div className={eventsGrid}>
            <LofiGrid columns={3}>
              {otherEvents.map((event) => (
                <EventCard key={event.id} item={event} />
              ))}
            </LofiGrid>
          </div>
        </section>
      </div>
    </SidebarLayout>
  );
};

export default EventsLayout;
