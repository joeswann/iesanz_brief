import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LofiHeading from "@/components/lofi/LofiHeading";
import { LofiButton } from "@/components/lofi/LofiButton";
import LofiGrid from "@/components/lofi/LofiGrid";
import { fontSize } from "@/styles/styling";
import { newsData, categories } from "@/data/data.news";
import NewsCard from "@/components/news/NewsCard";

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

const categoryList = css`
  display: flex;
  flex-direction: column;
  gap: 12rem;
`;

const categoryLink = css`
  ${fontSize(1)}
  text-decoration: none;
  color: var(--foreground);
  padding: 8rem 0;
  border-bottom: 1px solid var(--light-grey);

  &:hover {
    opacity: 0.7;
  }
`;

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
    <div className={layoutContainer}>
      <aside className={sidebar}>
        <LofiHeading level={3}>News & Updates</LofiHeading>
        <nav className={categoryList}>
          {categories.map((cat) => (
            <a key={cat} href="#" className={categoryLink}>
              {cat}
            </a>
          ))}
        </nav>

      </aside>

      <main className={content}>
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
      </main>
    </div>
  );
};

export default NewsLayout;
