import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import { Resource } from "@/data/data.resources";
import { TypeHeading } from "@/components/type/TypeHeading";
import { TypeBody } from "@/components/type/TypeBody";
import { spacing } from "@/styles/styling";
import ReactMarkdown from 'react-markdown';

const container = css`
  max-width: 800px;
  padding-bottom: ${spacing(12)};
`;

const content = css`
  display: flex;
  flex-direction: column;
  gap: ${spacing(6)};
`;

const header = css`
  margin-bottom: ${spacing(4)};
  border-bottom: 1px solid #eee;
  padding-bottom: ${spacing(4)};
`;

const section = css`
  scroll-margin-top: ${spacing(4)};
`;

interface ResourceDetailLayoutProps {
  resource: Resource;
}

const ResourceDetailLayout: DCI<ResourceDetailLayoutProps> = ({ resource }) => {
  return (
    <div className={container}>
      <div className={content}>
        <div className={header}>
          <TypeHeading level={1}>{resource.title}</TypeHeading>
          <TypeBody variant="large" style={{ marginTop: spacing(2) }}>{resource.description}</TypeBody>
          <TypeBody variant="small" color="muted" style={{ marginTop: spacing(2) }}>
            Last updated: {resource.lastUpdated}
          </TypeBody>
        </div>

        {resource.sections.map((sec, index) => (
          <div key={index} id={`section-${index}`} className={section}>
            <TypeHeading level={2} style={{ marginBottom: spacing(2) }}>{sec.title}</TypeHeading>
            <TypeBody>
              <ReactMarkdown>{sec.content}</ReactMarkdown>
            </TypeBody>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceDetailLayout;
