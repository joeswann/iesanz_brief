import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LofiImage from "@/components/lofi/LofiImage";
import LofiHeading from "@/components/lofi/LofiHeading";
import LofiText from "@/components/lofi/LofiText";
import LofiButton from "@/components/lofi/LofiButton";
import LofiGrid from "@/components/lofi/LofiGrid";
import { eventsData, eventTypes } from "@/data/data.events";
import EventCard from "@/components/events/EventCard";

const styles = css`
  display: flex;
  flex-direction: column;
  gap: 48rem;
  padding-bottom: 48rem;

  .hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32rem;
    align-items: center;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .filters {
    display: flex;
    gap: 16rem;
    flex-wrap: wrap;
    padding-bottom: 24rem;
    border-bottom: 1px solid var(--foreground);
  }
`;

const EventsLayout: DCI = () => {
    const featuredEvent = eventsData.find((e) => e.isFeatured) || eventsData[0];
    const otherEvents = eventsData.filter((e) => e.id !== featuredEvent.id);

    return (
        <div className={styles}>
            {/* Featured Event */}
            <section className="hero">
                <LofiImage ratio={16 / 9} label="Featured Event" />
                <div>
                    <div style={{ marginBottom: "16rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        Featured Event
                    </div>
                    <LofiHeading level={1}>{featuredEvent.title}</LofiHeading>
                    <div style={{ marginBottom: "16rem", opacity: 0.7 }}>
                        {featuredEvent.date} • {featuredEvent.location}
                    </div>
                    <LofiText lines={4} />
                    <div style={{ marginTop: "24rem" }}>
                        <LofiButton variant="primary">Register Now</LofiButton>
                    </div>
                </div>
            </section>

            {/* Events List */}
            <section>
                <div className="filters">
                    {eventTypes.map((type, i) => (
                        <LofiButton key={type} variant={i === 0 ? "primary" : "secondary"}>
                            {type}
                        </LofiButton>
                    ))}
                </div>

                <div style={{ marginTop: "32rem" }}>
                    <LofiGrid columns={3}>
                        {otherEvents.map((event) => (
                            <EventCard key={event.id} item={event} />
                        ))}
                    </LofiGrid>
                </div>
            </section>
        </div>
    );
};

export default EventsLayout;
