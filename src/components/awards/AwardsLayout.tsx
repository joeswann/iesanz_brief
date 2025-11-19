import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LofiImage from "@/components/lofi/LofiImage";
import LofiHeading from "@/components/lofi/LofiHeading";
import LofiText from "@/components/lofi/LofiText";
import LofiButton from "@/components/lofi/LofiButton";
import LofiGrid from "@/components/lofi/LofiGrid";
import LofiBox from "@/components/lofi/LofiBox";
import { awardsEvents } from "@/data/data.awards";
import AwardCard from "@/components/awards/AwardCard";
import { useState } from "react";
import { fontSize } from "@/styles/styling";

const styles = css`
  display: grid;
  grid-template-columns: 250rem 1fr;
  gap: 48rem;
  padding-bottom: 48rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    gap: 24rem;
  }

  .events-list {
    display: flex;
    flex-direction: column;
    gap: 12rem;

    button {
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

      &:hover, &.active {
        opacity: 0.7;
        font-weight: bold;
      }
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 48rem;
  }

  .header-controls {
    display: flex;
    /* justify-content: space-between; */ /* Removed as dropdown is gone */
    align-items: center;
    padding-bottom: 24rem;
    border-bottom: 1px solid var(--foreground);
  }

  .category-section {
    margin-bottom: 64rem;
  }

  .category-header {
    margin-bottom: 32rem;
    border-bottom: 1px solid var(--light-grey);
    padding-bottom: 16rem;
  }

  .winner-showcase {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32rem;
    align-items: center;
    margin-bottom: 32rem;
    background: rgba(0,0,0,0.03);
    padding: 32rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;

const AwardsLayout: DCI = () => {
    const [selectedEventId, setSelectedEventId] = useState(awardsEvents[0].id);
    const selectedEvent = awardsEvents.find(e => e.id === selectedEventId) || awardsEvents[0];

    return (
        <div className={styles}>
            <aside className="sidebar">
                <LofiHeading level={3}>Awards Archive</LofiHeading>
                <nav className="events-list">
                    {awardsEvents.map((evt) => (
                        <button
                            key={evt.id}
                            onClick={() => setSelectedEventId(evt.id)}
                            className={selectedEventId === evt.id ? "active" : ""}
                        >
                            {evt.year} Awards
                        </button>
                    ))}
                </nav>

                <LofiBox>
                    <LofiHeading level={4}>Enter Awards</LofiHeading>
                    <LofiText lines={2} />
                    <LofiButton variant="secondary">Submit Entry</LofiButton>
                </LofiBox>
            </aside>

            <main className="content">
                <div className="header-controls">
                    <LofiHeading level={1}>{selectedEvent.title}</LofiHeading>
                </div>

                {selectedEvent.categories.map(category => {
                    const winner = category.entries.find(e => e.status === "Winner");
                    const others = category.entries.filter(e => e.status !== "Winner");

                    return (
                        <section key={category.id} className="category-section">
                            <div className="category-header">
                                <LofiHeading level={2}>{category.title}</LofiHeading>
                            </div>

                            {winner && (
                                <div className="winner-showcase">
                                    <LofiImage ratio={16 / 9} label="Winner" />
                                    <div>
                                        <div style={{ marginBottom: "16rem", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: "bold", color: "#d4af37" }}>
                                            Category Winner
                                        </div>
                                        <LofiHeading level={3}>{winner.projectName}</LofiHeading>
                                        <div style={{ marginBottom: "16rem", fontStyle: "italic" }}>
                                            Designed by {winner.designer} ({winner.chapter})
                                        </div>
                                        <LofiText lines={3} />
                                        <div style={{ marginTop: "16rem" }}>
                                            <LofiButton variant="primary">View Project</LofiButton>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {others.length > 0 && (
                                <LofiGrid columns={3}>
                                    {others.map(entry => (
                                        <AwardCard key={entry.id} item={entry} />
                                    ))}
                                </LofiGrid>
                            )}
                        </section>
                    );
                })}
            </main>
        </div>
    );
};

export default AwardsLayout;
