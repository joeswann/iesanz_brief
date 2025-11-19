import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import { resources } from "@/data/data.resources";
import { TypeHeading } from "@/components/type/TypeHeading";
import { TypeBody } from "@/components/type/TypeBody";
import { spacing } from "@/styles/styling";
import { Link } from "@tanstack/react-router";

const container = css`
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: ${spacing(8)};
`;

const header = css`
  margin-bottom: ${spacing(6)};
  padding-bottom: ${spacing(4)};
  border-bottom: 1px solid #eee;
`;

const grid = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${spacing(4)};
`;

const card = css`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: ${spacing(4)};
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
  transition: box-shadow 0.2s;
  text-decoration: none;
  color: inherit;

  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    border-color: #ccc;
  }
`;

const cardTitle = css`
  color: var(--foreground);
`;

const ResourcesLayout: DCI = () => {
    return (
        <div className={container}>
            <div className={header}>
                <TypeHeading level={1}>Resources</TypeHeading>
                <TypeBody>Knowledgebase, guides, and technical documentation.</TypeBody>
            </div>

            <div className={grid}>
                {resources.map((resource) => (
                    <Link
                        key={resource.id}
                        to="/resources/$resourceId"
                        params={{ resourceId: resource.id }}
                        className={card}
                    >
                        <TypeHeading level={3} className={cardTitle}>{resource.title}</TypeHeading>
                        <TypeBody>{resource.description}</TypeBody>
                        <TypeBody variant="small" color="muted" style={{ marginTop: 'auto' }}>
                            Last updated: {resource.lastUpdated}
                        </TypeBody>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ResourcesLayout;
