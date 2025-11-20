import { useLocation } from "@tanstack/react-router";
import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LofiImage from "@/components/lofi/LofiImage";
import LofiHeading from "@/components/lofi/LofiHeading";
import LofiText from "@/components/lofi/LofiText";
import { LofiButton } from "@/components/lofi/LofiButton";
import LofiGrid from "@/components/lofi/LofiGrid";
import { awardsEvents } from "@/data/data.awards";
import AwardCard from "@/components/awards/AwardCard";
import SidebarLayout from "@/components/layout/SidebarLayout";
import AwardsSidebar from "./AwardsSidebar";

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
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const yearParam = searchParams.get("year");

  const selectedEvent = yearParam
    ? awardsEvents.find(e => e.year.toString() === yearParam) || awardsEvents[0]
    : awardsEvents[0];

  return (
    <SidebarLayout
      sidebar={
        <AwardsSidebar
          selectedEvent={selectedEvent}
        />
      }
    >
      <div className={content}>
        <div className={headerControls}>
          <LofiHeading level={1}>{selectedEvent.title}</LofiHeading>
        </div>

        {selectedEvent.categories.map(category => {
          const winner = category.entries.find(e => e.status === "Winner");
          const others = category.entries.filter(e => e.status !== "Winner");

          return (
            <section key={category.id} id={category.id} className={categorySection}>
              <div className={categoryHeader}>
                <LofiHeading level={2}>{category.title}</LofiHeading>
              </div>

              {winner && (
                <div id={winner.id} className={winnerShowcase}>
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
      </div>
    </SidebarLayout>
  );
};

export default AwardsLayout;
