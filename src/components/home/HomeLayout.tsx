import { DCI } from "@/types/dci";
import { css } from "@linaria/core";

import LofiImage from "@/components/lofi/LofiImage";
import LofiHeading from "@/components/lofi/LofiHeading";
import { TypeBody } from "@/components/type/TypeBody";
import { LofiButton } from "@/components/lofi/LofiButton";
import LofiGrid from "@/components/lofi/LofiGrid";
import { newsData } from "@/data/data.news";
import { homeData } from "@/data/data.home";
import { eventsData } from "@/data/data.events";
import { awardsEvents } from "@/data/data.awards";
import NewsCard from "@/components/news/NewsCard";
import EventCard from "@/components/events/EventCard";


const layoutContainer = css`
  display: flex;
  flex-direction: column;
  gap: 160rem;
  padding-bottom: 160rem;
`;

const heroSection = css`
  max-width: 1200rem;
  margin: 0 auto;
  text-align: center;
  padding-top: 160rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40rem;
`;

const heroContent = css`
  max-width: 800rem;
  display: flex;
  flex-direction: column;
  gap: 24rem;
`;

const ctaGroup = css`
  display: flex;
  justify-content: center;
  gap: 16rem;
  margin-top: 16rem;
`;

const sectionHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 40rem;
`;

const contentSection = css`
  display: flex;
  flex-direction: column;
  max-width: 1400rem;
  margin: 0 auto;
  width: 100%;
  padding: 0 40rem;
`;

const awardCard = css`
  display: flex;
  flex-direction: column;
  gap: 16rem;
`;

const awardMeta = css`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const awardsCtaSection = css`
  background-color: var(--light-grey);
  padding: 120rem 40rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32rem;
`;

const HomeLayout: DCI = () => {
    // Get latest awards (2025)
    // Get latest awards (2025)
    const latestAwards = awardsEvents[0];

    return (
        <div className={layoutContainer}>

            {/* Hero Section */}
            <section className={heroSection}>
                <div className={heroContent}>
                    <LofiHeading level={1}>{homeData.intro.title}</LofiHeading>
                    <TypeBody variant="large">
                        {homeData.intro.description}
                    </TypeBody>
                </div>

                <div className={ctaGroup}>
                    <LofiButton variant="primary">{homeData.cta.primary.label}</LofiButton>
                    {homeData.cta.secondary.map((cta) => (
                        <LofiButton key={cta.label} variant="secondary">{cta.label}</LofiButton>
                    ))}
                </div>
            </section>

            {/* Latest News */}
            <section className={contentSection}>
                <div className={sectionHeader}>
                    <LofiHeading level={2}>{homeData.sections.news.title}</LofiHeading>
                    <LofiButton variant="secondary">View All News</LofiButton>
                </div>
                <LofiGrid columns={3}>
                    {newsData.slice(0, 3).map((item) => (
                        <NewsCard key={item.id} item={item} />
                    ))}
                </LofiGrid>
            </section>

            {/* Awards CTA */}
            <section className={awardsCtaSection}>
                <div className={heroContent}>
                    <LofiHeading level={2}>{latestAwards.title}</LofiHeading>
                    <TypeBody variant="large">
                        The region's most prestigious lighting design awards. <br />
                        Join us for the gala night or submit your project for consideration.
                    </TypeBody>
                </div>
                <div className={ctaGroup}>
                    <LofiButton variant="primary">Buy Tickets</LofiButton>
                    <LofiButton variant="secondary">Enter Submission</LofiButton>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className={contentSection}>
                <div className={sectionHeader}>
                    <LofiHeading level={2}>Upcoming Events</LofiHeading>
                    <LofiButton variant="secondary">View All Events</LofiButton>
                </div>
                <LofiGrid columns={3}>
                    {eventsData.slice(0, 3).map((item) => (
                        <EventCard key={item.id} item={item} />
                    ))}
                </LofiGrid>
            </section>
        </div>
    );
};

export default HomeLayout;
