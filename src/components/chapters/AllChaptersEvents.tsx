import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import { TypeHeading } from "@/components/type/TypeHeading";
import { TypeBody } from "@/components/type/TypeBody";
import { spacing } from "@/styles/styling";
import { chapterContent } from "@/data/data.chapters.content";
import { chapters } from "@/data/data.chapters";
import { Link } from "@tanstack/react-router";

const grid = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${spacing(4)};
`;

const card = css`
  border: 1px solid #eee;
  padding: ${spacing(4)};
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  }
`;

const chapterTag = css`
  background: #f5f5f5;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  align-self: flex-start;
  margin-bottom: ${spacing(1)};
`;

const AllChaptersEvents: DCI = () => {
    const allEvents = Object.entries(chapterContent).flatMap(([slug, content]) =>
        content.events.map(item => ({ ...item, chapterSlug: slug, chapterName: chapters.find(c => c.slug === slug)?.name }))
    );

    return (
        <div>
            <TypeHeading level={2} style={{ marginBottom: spacing(4) }}>Upcoming Chapter Events</TypeHeading>
            <div className={grid}>
                {allEvents.map((item, i) => (
                    <Link key={i} to={`/chapters/${item.chapterSlug}/events`} className={card}>
                        <div className={chapterTag}>{item.chapterName}</div>
                        <TypeHeading level={4}>{item.title}</TypeHeading>
                        <TypeBody variant="small" color="muted">{item.date} • {item.location}</TypeBody>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default AllChaptersEvents;
