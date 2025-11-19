import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import { TypeHeading } from "@/components/type/TypeHeading";
import { TypeBody } from "@/components/type/TypeBody";
import { spacing } from "@/styles/styling";
import ChapterCommittee from "./ChapterCommittee";
import { LofiCard } from "@/components/lofi/LofiLayouts";

const container = css`
  padding: ${spacing(4)};
  max-width: 1200px;
  margin: 0 auto;
`;

const hero = css`
  margin-bottom: ${spacing(8)};
  padding-bottom: ${spacing(4)};
  border-bottom: 1px solid #eee;
`;

const section = css`
  margin-bottom: ${spacing(8)};
`;

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

interface ChapterHubProps {
    chapter: {
        name: string;
        slug: string;
    };
    content: any; // TODO: Define proper type
}

const ChapterHubLayout: DCI<ChapterHubProps> = ({ chapter, content }) => {
    return (
        <div className={container}>
            <div className={hero}>
                <TypeHeading level={1}>{chapter.name} Chapter</TypeHeading>
                <TypeBody>{content.description}</TypeBody>
            </div>

            {/* News Section */}
            <div className={section}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <TypeHeading level={2}>Latest News</TypeHeading>
                    <a href={`/news?chapter=${chapter.slug}`}><TypeBody>View All &rarr;</TypeBody></a>
                </div>

                {content.news.length > 0 ? (
                    <div className={grid}>
                        {content.news.map((item: any) => (
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

            {/* Events Section */}
            <div className={section}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <TypeHeading level={2}>Upcoming Events</TypeHeading>
                    <a href={`/events?chapter=${chapter.slug}`}><TypeBody>View Calendar &rarr;</TypeBody></a>
                </div>

                {content.events.length > 0 ? (
                    <div className={grid}>
                        {content.events.map((event: any) => (
                            <LofiCard key={event.id}>
                                <img src={event.image} alt={event.title} className={newsImage} />
                                <TypeBody variant="small" color="muted">{event.date} • {event.location}</TypeBody>
                                <TypeHeading level={4}>{event.title}</TypeHeading>
                                <div style={{ marginTop: spacing(2) }}>
                                    <TypeBody weight="bold">Register &rarr;</TypeBody>
                                </div>
                            </LofiCard>
                        ))}
                    </div>
                ) : (
                    <TypeBody color="muted">No upcoming events.</TypeBody>
                )}
            </div>

            {/* Committee Section */}
            <div className={section}>
                <TypeHeading level={2}>Committee</TypeHeading>
                <TypeBody style={{ marginBottom: spacing(4) }}>Meet the dedicated volunteers running the {chapter.name} chapter.</TypeBody>
                <ChapterCommittee members={content.committee} />
            </div>

            {/* Awards Section */}
            {content.awards && content.awards.length > 0 && (
                <div className={section}>
                    <TypeHeading level={2}>Awards</TypeHeading>
                    <div className={grid}>
                        {content.awards.map((award: any) => (
                            <LofiCard key={award.id}>
                                <TypeHeading level={4}>{award.title}</TypeHeading>
                                <TypeBody color="muted">{award.status}</TypeBody>
                                <a href={award.link}><TypeBody>View Details &rarr;</TypeBody></a>
                            </LofiCard>
                        ))}
                    </div>
                </div>
            )}

            {/* Gallery Section */}
            {content.gallery && content.gallery.length > 0 && (
                <div className={section}>
                    <TypeHeading level={2}>Gallery</TypeHeading>
                    <div className={grid}>
                        {content.gallery.map((album: any) => (
                            <LofiCard key={album.id}>
                                <img src={album.image} alt={album.title} className={newsImage} />
                                <TypeHeading level={4}>{album.title}</TypeHeading>
                                <TypeBody color="muted">{album.count} Photos</TypeBody>
                            </LofiCard>
                        ))}
                    </div>
                </div>
            )}

            {/* Store Section */}
            {content.store && content.store.length > 0 && (
                <div className={section}>
                    <TypeHeading level={2}>Store</TypeHeading>
                    <div className={grid}>
                        {content.store.map((item: any) => (
                            <LofiCard key={item.id}>
                                <img src={item.image} alt={item.title} className={newsImage} />
                                <TypeHeading level={4}>{item.title}</TypeHeading>
                                <TypeBody weight="bold">{item.price}</TypeBody>
                                <TypeBody>Add to Cart</TypeBody>
                            </LofiCard>
                        ))}
                    </div>
                </div>
            )}

            {/* Contact/Footer Section */}
            <div className={section} style={{ borderTop: "1px solid #eee", paddingTop: spacing(4) }}>
                <TypeHeading level={3}>Contact Us</TypeHeading>
                <TypeBody>
                    Have questions? Email us at <a href={`mailto:${chapter.slug}@iesanz.org`}>{chapter.slug}@iesanz.org</a>
                </TypeBody>
            </div>
        </div>
    );
};

export default ChapterHubLayout;
