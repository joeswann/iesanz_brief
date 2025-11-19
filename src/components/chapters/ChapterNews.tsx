import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import { TypeHeading } from "@/components/type/TypeHeading";
import { TypeBody } from "@/components/type/TypeBody";
import { spacing } from "@/styles/styling";
import { LofiCard } from "@/components/lofi/LofiLayouts";

const grid = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${spacing(4)};
  margin-top: ${spacing(4)};
`;

const newsImage = css`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: ${spacing(2)};
  background-color: #eee;
`;

interface ChapterNewsProps {
    news: any[];
}

const ChapterNews: DCI<ChapterNewsProps> = ({ news }) => {
    return (
        <div>
            <TypeHeading level={2}>Latest News</TypeHeading>
            {news && news.length > 0 ? (
                <div className={grid}>
                    {news.map((item: any) => (
                        <LofiCard key={item.id}>
                            <img src={item.image} alt={item.title} className={newsImage} />
                            <TypeBody variant="small" color="muted">{item.date}</TypeBody>
                            <TypeHeading level={4}>{item.title}</TypeHeading>
                            <TypeBody>{item.summary}</TypeBody>
                        </LofiCard>
                    ))}
                </div>
            ) : (
                <TypeBody color="muted">No recent news.</TypeBody>
            )}
        </div>
    );
};

export default ChapterNews;
