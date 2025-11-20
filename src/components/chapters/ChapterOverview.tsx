import { css } from '@linaria/core';
import { spacing } from '@/styles/styling';
import { DCI } from '@/types/dci';
import { TypeHeading } from '@/components/type/TypeHeading';
import { TypeBody } from '@/components/type/TypeBody';
import ChapterCommittee from "./ChapterCommittee";

import LofiBox from '@/components/lofi/LofiBox';

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
            {/* President's Message */}
            {content.presidentMessage && (
                <div className={section}>
                    <LofiBox style={{ flexDirection: 'column', alignItems: 'flex-start', gap: spacing(2) }}>
                        <TypeHeading level={2} style={{ marginBottom: spacing(1) }}>
                            {content.presidentMessage.title}
                        </TypeHeading>
                        <TypeBody variant="large" style={{ fontStyle: 'italic' }}>
                            "{content.presidentMessage.text}"
                        </TypeBody>
                        <div>
                            <TypeBody style={{ fontWeight: 'bold' }}>{content.presidentMessage.author}</TypeBody>
                            <TypeBody style={{ fontSize: '0.9em', color: '#666' }}>{content.presidentMessage.role}</TypeBody>
                        </div>
                    </LofiBox>
                </div>
            )}

            {/* About / Description */}
            <div className={section}>
                <TypeBody variant="large" style={{ maxWidth: '800px', lineHeight: '1.6' }}>
                    {content.description}
                </TypeBody>
            </div>

            {/* Meeting Info */}
            {content.meetingInfo && (
                <div className={section}>
                    <TypeHeading level={3} style={{ marginBottom: spacing(3) }}>Regular Meetings</TypeHeading>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: spacing(4) }}>
                        <div>
                            <TypeBody style={{ fontWeight: 'bold', color: '#666', marginBottom: spacing(1) }}>Frequency</TypeBody>
                            <TypeBody>{content.meetingInfo.frequency}</TypeBody>
                        </div>
                        <div>
                            <TypeBody style={{ fontWeight: 'bold', color: '#666', marginBottom: spacing(1) }}>When</TypeBody>
                            <TypeBody>{content.meetingInfo.time}</TypeBody>
                        </div>
                        <div>
                            <TypeBody style={{ fontWeight: 'bold', color: '#666', marginBottom: spacing(1) }}>Where</TypeBody>
                            <TypeBody>{content.meetingInfo.location}</TypeBody>
                        </div>
                    </div>
                </div>
            )}

            {/* Committee */}
            {content.committee && content.committee.length > 0 && (
                <div className={section}>
                    <TypeHeading level={2} style={{ marginBottom: spacing(4) }}>Committee</TypeHeading>
                    <ChapterCommittee members={content.committee} />
                </div>
            )}

            {/* Contact */}
            <div className={section} style={{
                borderTop: "1px solid #eee",
                paddingTop: spacing(6),
                marginTop: spacing(6)
            }}>
                <div style={{
                    background: '#f8f9fa',
                    padding: spacing(6),
                    borderRadius: '8px',
                    border: '1px solid #e9ecef'
                }}>
                    <TypeHeading level={3} style={{ marginBottom: spacing(2) }}>Contact Us</TypeHeading>
                    <TypeBody style={{ marginBottom: spacing(2) }}>
                        Do you have questions about the {chapter.name} chapter? We'd love to hear from you.
                    </TypeBody>
                    <a
                        href={`mailto:${chapter.slug}@iesanz.org`}
                        style={{
                            display: 'inline-block',
                            color: 'var(--primary)',
                            fontWeight: 'bold',
                            textDecoration: 'none',
                            fontSize: '1.1em'
                        }}
                    >
                        {chapter.slug}@iesanz.org
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ChapterOverview;
