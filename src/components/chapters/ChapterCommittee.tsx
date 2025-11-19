import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import { TypeHeading, TypeBody } from "@/components/type/TypeHeading"; // Correct import will be checked
import { spacing } from "@/styles/styling";

// Fixing imports based on previous context
import { TypeHeading as Heading } from "@/components/type/TypeHeading";
import { TypeBody as Body } from "@/components/type/TypeBody";

const grid = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${spacing(4)};
`;

const card = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${spacing(3)};
  border: 1px solid #eee;
  border-radius: 8px;
`;

const image = css`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: ${spacing(2)};
  background-color: #ddd;
`;

interface CommitteeMember {
    name: string;
    role: string;
    image?: string;
}

interface ChapterCommitteeProps {
    members: CommitteeMember[];
}

const ChapterCommittee: DCI<ChapterCommitteeProps> = ({ members }) => {
    if (!members || members.length === 0) {
        return <Body>No committee members listed.</Body>;
    }

    return (
        <div className={grid}>
            {members.map((member, index) => (
                <div key={index} className={card}>
                    <img src={member.image} alt={member.name} className={image} />
                    <Heading level={4}>{member.name}</Heading>
                    <Body variant="small" color="muted">{member.role}</Body>
                </div>
            ))}
        </div>
    );
};

export default ChapterCommittee;
