import { DCI } from "@/types/dci";
import { css } from "@linaria/core";

import LofiImage from "@/components/lofi/LofiImage";
import LofiHeading from "@/components/lofi/LofiHeading";
import { TypeBody } from "@/components/type/TypeBody";
import { LofiButton } from "@/components/lofi/LofiButton";
import LofiGrid from "@/components/lofi/LofiGrid";
import { newsData } from "@/data/data.news";
import { homeData } from "@/data/data.home";
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
                <LofiHeading level={1}>{homeData.intro.title}</LofiHeading>
                <TypeBody variant="large">
                    {homeData.intro.description}
                </TypeBody>
            </section>

            {/* Key CTAs */}
            <section className={ctaSection}>
                <LofiButton variant="primary">{homeData.cta.primary.label}</LofiButton>
                {homeData.cta.secondary.map((cta) => (
                    <LofiButton key={cta.label} variant="secondary">{cta.label}</LofiButton>
                ))}
            </section>

            {/* News / Blog Feed */}
            <section className={contentSection}>
                <LofiHeading level={2}>{homeData.sections.news.title}</LofiHeading>
                <LofiGrid columns={3}>
                    {newsData.slice(0, 3).map((item) => (
                        <NewsCard key={item.id} item={item} />
                    ))}
                </LofiGrid>
            </section>

            {/* Gallery / Showcase */}
            <section className={contentSection}>
                <LofiHeading level={2}>{homeData.sections.awards.title}</LofiHeading>
                <LofiGrid columns={4} gap={16}>
                    {homeData.sections.awards.images.map((img, i) => (
                        <LofiImage key={i} ratio={img.ratio} label={img.label} />
                    ))}
                </LofiGrid>
            </section>
        </div>
    );
};

export default HomeLayout;
