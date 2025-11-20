import { useLocation, Link } from "@tanstack/react-router";
import { css } from "@linaria/core";
import LofiImage from "@/components/lofi/LofiImage";
import LofiHeading from "@/components/lofi/LofiHeading";
import { LofiButton } from "@/components/lofi/LofiButton";
import LofiGrid from "@/components/lofi/LofiGrid";
import { awardsEvents } from "@/data/data.awards";
import AwardCard from "@/components/awards/AwardCard";
import SidebarLayout from "@/components/layout/SidebarLayout";
import AwardsSidebar from "./AwardsSidebar";
import { TypeBody } from "@/components/type/TypeBody";

const content = css`
  display: flex;
  flex-direction: column;
  gap: 48rem;
`;

const headerControls = css`
  display: flex;
  flex-direction: column;
  gap: 24rem;
  padding-bottom: 24rem;
  border-bottom: 1px solid var(--foreground);
`;

const eventDescription = css`
  max-width: 800rem;
`;

const categorySection = css`
  margin-bottom: 64rem;
`;

const categoryHeader = css`
  margin-bottom: 32rem;
  border-bottom: 1px solid var(--light-grey);
  padding-bottom: 16rem;
  display: flex;
  flex-direction: column;
  gap: 16rem;
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

const emptyCategory = css`
  padding: 32rem;
  background: #fafafa;
  border: 1px dashed #ccc;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16rem;
`;

const overviewGrid = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300rem, 1fr));
  gap: 24rem;
`;

const overviewCard = css`
  padding: 24rem;
  border: 1px solid var(--light-grey);
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: 12rem;
  transition: border-color 0.2s;

  &:hover {
    border-color: var(--foreground);
  }
`;

interface AwardsLayoutProps {
  year?: string;
  category?: string;
}

const AwardsLayout: React.FC<AwardsLayoutProps> = ({ year, category }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const yearParam = year || searchParams.get("year");
  const categoryParam = category || searchParams.get("category");

  const selectedEvent = yearParam
    ? awardsEvents.find(e => e.year.toString() === yearParam) || awardsEvents[0]
    : awardsEvents[0];

  const selectedCategory = categoryParam
    ? selectedEvent.categories.find(c => c.id === categoryParam)
    : null;

  return (
    <SidebarLayout
      sidebar={
        <AwardsSidebar
          selectedEvent={selectedEvent}
        />
      }
    >
      <div className={content}>
        {!selectedCategory ? (
          // Overview View
          <>
            <div className={headerControls}>
              <LofiHeading level={1}>{selectedEvent.title}</LofiHeading>
              {selectedEvent.description && (
                <div className={eventDescription}>
                  <TypeBody variant="large">{selectedEvent.description}</TypeBody>
                </div>
              )}
            </div>

            <div className={overviewGrid}>
              {selectedEvent.categories.map(category => (
                <Link
                  key={category.id}
                  to="/awards/$year"
                  params={{ year: selectedEvent.year.toString() }}
                  search={{ category: category.id }}
                  className={overviewCard}
                >
                  <LofiHeading level={3}>{category.title}</LofiHeading>
                  {category.description && (
                    <TypeBody variant="small" color="muted">
                      {category.description}
                    </TypeBody>
                  )}
                </Link>
              ))}
            </div>
          </>
        ) : (
          // Single Category View
          <section className={categorySection}>
            <div className={categoryHeader}>
              <LofiHeading level={2}>{selectedCategory.title}</LofiHeading>
              {selectedCategory.description && (
                <TypeBody variant="large">{selectedCategory.description}</TypeBody>
              )}
            </div>

            {(() => {
              const winner = selectedCategory.entries.find(e => e.status === "Winner");
              const others = selectedCategory.entries.filter(e => e.status !== "Winner");
              const isEmpty = selectedCategory.entries.length === 0;

              return (
                <>
                  {isEmpty && (
                    <div className={emptyCategory}>
                      <TypeBody>Nominations for this category are currently open.</TypeBody>
                      <LofiButton variant="secondary">Submit Entry</LofiButton>
                    </div>
                  )}

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
                        <TypeBody>{winner.description}</TypeBody>
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
                </>
              );
            })()}
          </section>
        )}
      </div>
    </SidebarLayout>
  );
};

export default AwardsLayout;
