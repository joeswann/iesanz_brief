import { DCI } from "@/types/dci";
import { css } from "@linaria/core";

import LofiImage from "@/components/lofi/LofiImage";
import LofiHeading from "@/components/lofi/LofiHeading";
import LofiText from "@/components/lofi/LofiText";
import { LofiButton } from "@/components/lofi/LofiButton";
import LofiGrid from "@/components/lofi/LofiGrid";
import { newsData } from "@/data/data.news";
import NewsCard from "@/components/news/NewsCard";


const layoutContainer = css`
  display: flex;
  flex-direction: column;
  gap: 120rem;
  padding-bottom: 120rem;
`;

const introSection = css`
  max-width: 800rem;
  margin: 0 auto;
  text-align: center;
  padding-top: 120rem;
`;

const ctaSection = css`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const contentSection = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const HomeLayout: DCI = () => {
    return (
        <div className={layoutContainer}>


            {/* Introduction */}
            <section className={introSection}>
                <LofiHeading level={1}>Illuminating the Future</LofiHeading>
                <LofiText lines={4} />
            </section>

            {/* Key CTAs */}
            <section className={ctaSection}>
                <LofiButton variant="primary">Join IESANZ</LofiButton>
                <LofiButton variant="secondary">Member Login</LofiButton>
                <LofiButton variant="secondary">Enter Awards</LofiButton>
            </section>

            {/* News / Blog Feed */}
            <section className={contentSection}>
                <LofiHeading level={2}>Latest News</LofiHeading>
                <LofiGrid columns={3}>
                    {newsData.slice(0, 3).map((item) => (
                        <NewsCard key={item.id} item={item} />
                    ))}
                </LofiGrid>
            </section>

            {/* Gallery / Showcase */}
            <section className={contentSection}>
                <LofiHeading level={2}>Awards Showcase</LofiHeading>
                <LofiGrid columns={4} gap={16}>
                    <LofiImage ratio={1} label="Award 1" />
                    <LofiImage ratio={1} label="Award 2" />
                    <LofiImage ratio={1} label="Award 3" />
                    <LofiImage ratio={1} label="Award 4" />
                </LofiGrid>
            </section>
        </div>
    );
};

export default HomeLayout;
