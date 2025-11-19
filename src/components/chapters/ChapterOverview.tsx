import { css } from '@linaria/core';
import { spacing } from '@/styles/styling';
import { DCI } from '@/types/dci';
import { TypeHeading } from '@/components/type/TypeHeading';
import { TypeBody } from '@/components/type/TypeBody';
import ChapterCommittee from "./ChapterCommittee";

const section = css`
  margin-bottom: ${spacing(8)};
`;

interface ChapterOverviewProps {
    chapter: {
        name: string;
        slug: string;
    };
    content: any;
}

const ChapterOverview: DCI<ChapterOverviewProps> = ({ chapter, content }) => {
    return (
        <div>
            <div className={section}>
                <TypeHeading level={2}>Overview</TypeHeading>
                <TypeBody>{content.description}</TypeBody>
            </div>

            {content.committee && content.committee.length > 0 && (
                <div className={section}>
                    <TypeHeading level={2}>Committee</TypeHeading>
                    <ChapterCommittee members={content.committee} />
                </div>
            )}

            <div className={section} style={{ borderTop: "1px solid #eee", paddingTop: spacing(4) }}>
                <TypeHeading level={3}>Contact Us</TypeHeading>
                <TypeBody>
                    Have questions? Email us at <a href={`mailto:${chapter.slug}@iesanz.org`}>{chapter.slug}@iesanz.org</a>
                </TypeBody>
            </div>
        </div>
    );
};

export default ChapterOverview;
