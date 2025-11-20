import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import { LofiButton } from "@/components/lofi/LofiButton";
import LofiGrid from "@/components/lofi/LofiGrid";
import { newsData } from "@/data/data.news";
import { chapters } from "@/data/data.chapters";
import NewsCard from "@/components/news/NewsCard";
import SidebarLayout from "@/components/layout/SidebarLayout";
import NewsSidebar from "./NewsSidebar";

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
    <SidebarLayout sidebar={<NewsSidebar />}>
      <div className={content}>
        <div className={filters}>
          <LofiButton variant="primary">All Chapters</LofiButton>
          {chapters.map((chapter) => (
            <LofiButton key={chapter.slug} variant="secondary">
              {chapter.name}
            </LofiButton>
          ))}
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
