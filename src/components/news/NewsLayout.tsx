import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import { LofiButton } from "@/components/lofi/LofiButton";
import LofiGrid from "@/components/lofi/LofiGrid";
import { newsData, categories } from "@/data/data.news";
import NewsCard from "@/components/news/NewsCard";
import SidebarLayout from "@/components/layout/SidebarLayout";
import { SidebarContainer, SidebarLink, SidebarSection } from "@/components/layout/Sidebar";

const content = css`
  display: flex;
  flex-direction: column;
  gap: 32rem;
`;

const filters = css`
  display: flex;
  gap: 16rem;
  padding-bottom: 16rem;
  border-bottom: 1px solid var(--foreground);
  flex-wrap: wrap;
`;

const NewsLayout: DCI = () => {
  return (
    <SidebarLayout
      sidebar={
        <SidebarContainer>
          <SidebarSection title="News & Updates">
            {categories.map((cat) => (
              <SidebarLink key={cat} href="#">
                {cat}
              </SidebarLink>
            ))}
          </SidebarSection>
        </SidebarContainer>
      }
    >
      <div className={content}>
        <div className={filters}>
          <LofiButton variant="primary">Latest</LofiButton>
          <LofiButton variant="secondary">Popular</LofiButton>
          <LofiButton variant="secondary">Archived</LofiButton>
        </div>

        <LofiGrid columns={3}>
          {newsData.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </LofiGrid>
      </div>
    </SidebarLayout>
  );
};

export default NewsLayout;
