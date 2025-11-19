import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LofiBox from "@/components/lofi/LofiBox";

import LofiHeading from "@/components/lofi/LofiHeading";
import LofiText from "@/components/lofi/LofiText";
import LofiButton from "@/components/lofi/LofiButton";
import LofiGrid from "@/components/lofi/LofiGrid";
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

  .categories {
    display: flex;
    flex-direction: column;
    gap: 12rem;

    a {
      ${fontSize(1)}
      text-decoration: none;
      color: var(--foreground);
      padding: 8rem 0;
      border-bottom: 1px solid var(--light-grey);

      &:hover {
        opacity: 0.7;
      }
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 32rem;
  }

  .filters {
    display: flex;
    gap: 16rem;
    padding-bottom: 16rem;
    border-bottom: 1px solid var(--foreground);
    flex-wrap: wrap;
  }
`;

import { newsData, categories } from "@/data/data.news";
import NewsCard from "@/components/news/NewsCard";

const NewsLayout: DCI = () => {
    return (
        <div className={styles}>
            <aside className="sidebar">
                <LofiHeading level={3}>News & Updates</LofiHeading>
                <nav className="categories">
                    {categories.map((cat) => (
                        <a key={cat} href="#">
                            {cat}
                        </a>
                    ))}
                </nav>

            </aside>

            <main className="content">
                <div className="filters">
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
