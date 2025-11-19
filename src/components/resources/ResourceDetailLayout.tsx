import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import { Resource } from "@/data/data.resources";
import { TypeHeading } from "@/components/type/TypeHeading";
import { TypeBody } from "@/components/type/TypeBody";
import { spacing } from "@/styles/styling";
import { Link } from "@tanstack/react-router";
import ReactMarkdown from 'react-markdown';

const container = css`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: ${spacing(8)};
  padding-bottom: ${spacing(12)};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const sidebar = css`
  position: sticky;
  top: ${spacing(4)};
  align-self: start;
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
  border-right: 1px solid #eee;
  padding-right: ${spacing(4)};

  @media (max-width: 768px) {
    position: static;
    border-right: none;
    border-bottom: 1px solid #eee;
    padding-right: 0;
    padding-bottom: ${spacing(4)};
  }
`;

const sidebarLink = css`
  text-decoration: none;
  color: #666;
  font-size: 14px;
  padding: ${spacing(1)} 0;
  
  &:hover {
    color: var(--foreground);
    font-weight: 600;
  }
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
            <div className={sidebar}>
                <Link to="/resources" style={{ marginBottom: spacing(2), fontWeight: 'bold', textDecoration: 'none', color: 'inherit' }}>
                    ← Back to Resources
                </Link>
                <TypeBody weight="bold" variant="small" style={{ textTransform: 'uppercase', opacity: 0.5 }}>
                    Contents
                </TypeBody>
                {resource.sections.map((section, index) => (
                    <a key={index} href={`#section-${index}`} className={sidebarLink}>
                        {section.title}
                    </a>
                ))}
            </div>

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
