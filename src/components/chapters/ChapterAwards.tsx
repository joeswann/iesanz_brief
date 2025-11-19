import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import { TypeHeading } from "@/components/type/TypeHeading";
import { TypeBody } from "@/components/type/TypeBody";
import { spacing } from "@/styles/styling";
import { LofiCard } from "@/components/lofi/LofiLayouts";

const grid = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${spacing(4)};
  margin-top: ${spacing(4)};
`;

interface ChapterAwardsProps {
    awards: any[];
}

const ChapterAwards: DCI<ChapterAwardsProps> = ({ awards }) => {
    return (
        <div>
            <TypeHeading level={2}>Awards</TypeHeading>
            {awards && awards.length > 0 ? (
                <div className={grid}>
                    {awards.map((award: any) => (
                        <LofiCard key={award.id}>
                            <TypeHeading level={4}>{award.title}</TypeHeading>
                            <TypeBody color="muted">{award.status}</TypeBody>
                            <a href={award.link}><TypeBody>View Details &rarr;</TypeBody></a>
                        </LofiCard>
                    ))}
                </div>
            ) : (
                <TypeBody color="muted">No active awards.</TypeBody>
            )}
        </div>
    );
};

export default ChapterAwards;
