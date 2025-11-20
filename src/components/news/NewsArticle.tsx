import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import { Link } from "@tanstack/react-router";
import SidebarLayout from "@/components/layout/SidebarLayout";
import NewsSidebar from "./NewsSidebar";
import LofiImage from "@/components/lofi/LofiImage";
import LofiHeading from "@/components/lofi/LofiHeading";
import { TypeBody } from "@/components/type/TypeBody";
import { LofiButton } from "@/components/lofi/LofiButton";
import { newsData } from "@/data/data.news";

const container = css`
  display: flex;
  flex-direction: column;
  gap: 32rem;
  max-width: 800rem;
  margin: 0 auto;
`;

const header = css`
  display: flex;
  flex-direction: column;
  gap: 16rem;
`;

const meta = css`
  display: flex;
  gap: 16rem;
  color: var(--foreground-muted);
  font-size: 14rem;
  align-items: center;
`;

const content = css`
  display: flex;
  flex-direction: column;
  gap: 16rem;
  line-height: 1.6;
  font-size: 18rem;
`;

const backLink = css`
  align-self: flex-start;
  margin-bottom: 16rem;
`;

const NewsArticle: DCI<{ slug: string }> = ({ slug }) => {
  // For wireframe purposes, try to find by ID or just default to the first one
  const article = newsData.find((item) => item.id === slug) || newsData[0];

  if (!article) {
    return (
      <SidebarLayout sidebar={<NewsSidebar />}>
        <div>Article not found</div>
      </SidebarLayout>
    );
  }

  return (
    <SidebarLayout sidebar={<NewsSidebar />}>
      <div className={container}>
        <Link to="/news" className={backLink}>
          <LofiButton variant="secondary">← Back to News</LofiButton>
        </Link>

        <div className={header}>
          <LofiHeading level={1}>{article.title}</LofiHeading>
          <div className={meta}>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.category}</span>
            {article.chapter && (
              <>
                <span>•</span>
                <span>{article.chapter} Chapter</span>
              </>
            )}
          </div>
        </div>

        <LofiImage ratio={21 / 9} label={article.imageLabel} />

        <div className={content}>
          <TypeBody>
            <strong>{article.summary}</strong>
          </TypeBody>
          <TypeBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </TypeBody>
          <TypeBody>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </TypeBody>
          <TypeBody>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit.
          </TypeBody>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default NewsArticle;
