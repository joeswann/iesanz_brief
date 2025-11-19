import { DCI } from "@/types/dci";
import { css, cx } from "@linaria/core";
import LofiImage from "@/components/lofi/LofiImage";
import LofiHeading from "@/components/lofi/LofiHeading";
import LofiText from "@/components/lofi/LofiText";
import { LofiButton } from "@/components/lofi/LofiButton";
import LofiGrid from "@/components/lofi/LofiGrid";
import LofiBox from "@/components/lofi/LofiBox";
import { awardsEvents } from "@/data/data.awards";
import AwardCard from "@/components/awards/AwardCard";
import { useState } from "react";
import { fontSize } from "@/styles/styling";

const layoutContainer = css`
  display: grid;
  grid-template-columns: 250rem 1fr;
  gap: 48rem;
  padding-bottom: 48rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const sidebar = css`
  display: flex;
  flex-direction: column;
  gap: 24rem;
`;

const eventsList = css`
  display: flex;
  flex-direction: column;
  gap: 12rem;
`;

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

const content = css`
  display: flex;
  flex-direction: column;
  gap: 48rem;
`;

const headerControls = css`
  display: flex;
  align-items: center;
  padding-bottom: 24rem;
  border-bottom: 1px solid var(--foreground);
`;

const categorySection = css`
  margin-bottom: 64rem;
`;

const categoryHeader = css`
  margin-bottom: 32rem;
  border-bottom: 1px solid var(--light-grey);
  padding-bottom: 16rem;
`;

const winnerShowcase = css`
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
`;

const winnerLabel = css`
  margin-bottom: 16rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: bold;
  color: #d4af37;
`;

const winnerDesigner = css`
  margin-bottom: 16rem;
  font-style: italic;
`;

const viewProjectButton = css`
  margin-top: 16rem;
`;

const AwardsLayout: DCI = () => {
  const [selectedEventId, setSelectedEventId] = useState(awardsEvents[0].id);
  const selectedEvent = awardsEvents.find(e => e.id === selectedEventId) || awardsEvents[0];

  return (
    <div className={layoutContainer}>
      <aside className={sidebar}>
        <LofiHeading level={3}>Awards Archive</LofiHeading>
        <nav className={eventsList}>
          {awardsEvents.map((evt) => (
            <button
              key={evt.id}
              onClick={() => setSelectedEventId(evt.id)}
              className={cx(eventButton, selectedEventId === evt.id && activeEventButton)}
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

      <main className={content}>
        <div className={headerControls}>
          <LofiHeading level={1}>{selectedEvent.title}</LofiHeading>
        </div>

        {selectedEvent.categories.map(category => {
          const winner = category.entries.find(e => e.status === "Winner");
          const others = category.entries.filter(e => e.status !== "Winner");

          return (
            <section key={category.id} className={categorySection}>
              <div className={categoryHeader}>
                <LofiHeading level={2}>{category.title}</LofiHeading>
              </div>

              {winner && (
                <div className={winnerShowcase}>
                  <LofiImage ratio={16 / 9} label="Winner" />
                  <div>
                    <div className={winnerLabel}>
                      Category Winner
                    </div>
                    <LofiHeading level={3}>{winner.projectName}</LofiHeading>
                    <div className={winnerDesigner}>
                      Designed by {winner.designer} ({winner.chapter})
                    </div>
                    <LofiText lines={3} />
                    <div className={viewProjectButton}>
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
