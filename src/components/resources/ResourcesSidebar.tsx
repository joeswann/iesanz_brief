import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import { Link, useParams } from "@tanstack/react-router";
import { resources } from "@/data/data.resources";
import { spacing } from "@/styles/styling";
import { TypeBody } from "@/components/type/TypeBody";

const sidebar = css`
  width: 250px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: ${spacing(6)};
  border-right: 1px solid #eee;
  padding-right: ${spacing(4)};

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #eee;
    padding-right: 0;
    padding-bottom: ${spacing(4)};
  }
`;

const group = css`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
`;

const link = css`
  text-decoration: none;
  color: var(--foreground-muted);
  font-size: 14px;
  padding: ${spacing(1)} 0;
  transition: color 0.2s;

  &:hover {
    color: var(--foreground);
  }

  &.active {
    color: var(--foreground);
    font-weight: 600;
  }
`;

const subLink = css`
  text-decoration: none;
  color: var(--foreground-muted);
  font-size: 13px;
  padding: ${spacing(0.5)} 0;
  padding-left: ${spacing(3)};
  transition: color 0.2s;
  opacity: 0.8;

  &:hover {
    color: var(--foreground);
    opacity: 1;
  }
`;

const ResourcesSidebar: DCI = () => {
  // We use strict: false to access params that might be defined in child routes
  const params = useParams({ strict: false });
  // @ts-ignore - resourceId might not be in the type definition for this route but it is in the URL
  const activeResourceId = params.resourceId;

  return (
    <div className={sidebar}>
      <div className={group}>
        <TypeBody weight="bold" variant="small" style={{ textTransform: 'uppercase', opacity: 0.5 }}>
          Resources
        </TypeBody>
        {resources.map((resource) => (
          <div key={resource.id} style={{ display: 'flex', flexDirection: 'column' }}>
            <Link
              to="/resources/$resourceId"
              params={{ resourceId: resource.id }}
              className={link}
              activeProps={{ className: 'active' }}
            >
              {resource.title}
            </Link>
            {activeResourceId === resource.id && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
                {resource.sections.map((section, index) => (
                  <a
                    key={index}
                    href={`#section-${index}`}
                    className={subLink}
                  >
                    {section.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesSidebar;
