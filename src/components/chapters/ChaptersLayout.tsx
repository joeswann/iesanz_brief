import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import { chapters } from "@/data/data.chapters";
import { TypeHeading } from "@/components/type/TypeHeading";
import { TypeBody } from "@/components/type/TypeBody";
import { spacing } from "@/styles/styling";

const container = css`
  padding: ${spacing(4)};
  max-width: 1200px;
  margin: 0 auto;
`;

const grid = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${spacing(4)};
  margin-top: ${spacing(4)};
`;

const card = css`
  border: 1px solid var(--foreground);
  padding: ${spacing(4)};
  text-decoration: none;
  color: inherit;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const ChaptersLayout: DCI = () => {
  return (
    <div className={container}>
      <TypeHeading level={1}>Chapters</TypeHeading>
      <TypeBody>Select a chapter to view local news, events, and information.</TypeBody>

      <div className={grid}>
        {chapters.map((chapter) => (
          <a key={chapter.slug} href={`/chapters/${chapter.slug}`} className={card}>
            <TypeHeading level={3}>{chapter.name}</TypeHeading>
            <TypeBody>View Chapter Hub &rarr;</TypeBody>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ChaptersLayout;
