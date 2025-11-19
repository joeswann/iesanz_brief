import { createFileRoute } from '@tanstack/react-router'
import { user } from "@/data/data.user";
import { LofiCard } from "@/components/lofi/LofiLayouts";
import { LofiButton } from "@/components/lofi/LofiButton";
import { TypeBody } from "@/components/type/TypeBody";
import { css } from "@linaria/core";

export const Route = createFileRoute('/account/education/')({
  component: AccountEducationIndex,
})

const educationGrid = css`
  margin-top: 32rem;
  display: grid;
  gap: 24rem;
`;

const learningItem = css`
  display: flex;
  gap: 16rem;
  align-items: center;
  margin-top: 8rem;
`;

const itemImage = css`
  width: 60px;
  height: 60px;
  border: 2px solid #000;
`;

const resumeButton = css`
  margin-left: auto;
`;

const resourceList = css`
  padding-left: 24rem;
  margin-top: 8rem;
`;

const resourceLink = css`
  color: inherit;
`;

function AccountEducationIndex() {
  return (
    <div>
      <LofiCard title="Education Overview">
        <p>Access your education resources and track your professional development.</p>
      </LofiCard>

      <div className={educationGrid}>
        <LofiCard title="Continue Learning">
          {user.education.continueLearning.map((item) => (
            <div key={item.id} className={learningItem}>
              <div className={itemImage} style={{ background: item.image }} />
              <div>
                <TypeBody weight="bold">{item.title}</TypeBody>
                <TypeBody variant="small" color="muted">{item.module}</TypeBody>
              </div>
              <div className={resumeButton}>
                <LofiButton variant="secondary">Resume</LofiButton>
              </div>
            </div>
          ))}
        </LofiCard>

        <LofiCard title="Recent Resources">
          <ul className={resourceList}>
            {user.education.resources.map((resource, index) => (
              <li key={index}><a href={resource.link} className={resourceLink}>{resource.title}</a></li>
            ))}
          </ul>
        </LofiCard>
      </div>
    </div>
  );
}
