import { DCI } from "@/types/dci";
import { css, cx } from "@linaria/core";
import LofiBox from "@/components/lofi/LofiBox";
import LofiImage from "@/components/lofi/LofiImage";
import LofiHeading from "@/components/lofi/LofiHeading";
import LofiText from "@/components/lofi/LofiText";
import { AwardEntry } from "@/data/data.awards";
import { fontSize } from "@/styles/styling";

interface AwardCardProps {
  item: AwardEntry;
}

const cardContainer = css`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const cardContent = css`
  margin-top: 16rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const cardMeta = css`
  ${fontSize(0.875)}
  opacity: 0.7;
  margin-bottom: 8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const awardBadge = css`
  display: inline-block;
  background: var(--foreground);
  color: var(--background);
  padding: 4rem 8rem;
  ${fontSize(0.75)}
  font-weight: bold;
  margin-bottom: 12rem;
  text-transform: uppercase;
`;

const winnerBadge = css`
  background: #d4af37; /* Gold-ish */
  color: #000;
`;

const designer = css`
  font-style: italic;
  margin-bottom: 8rem;
  opacity: 0.8;
`;

const AwardCard: DCI<AwardCardProps> = ({ item, className }) => {
  return (
    <LofiBox className={className}>
      <div className={cardContainer}>
        <LofiImage ratio={4 / 3} label={item.imageLabel} />
        <div className={cardContent}>
          <div>
            <span className={cx(awardBadge, item.status === "Winner" && winnerBadge)}>{item.status}</span>
          </div>
          <div className={cardMeta}>
            {item.chapter}
          </div>
          <LofiHeading level={4}>{item.projectName}</LofiHeading>
          <div className={designer}>by {item.designer}</div>
          <LofiText lines={3} />
        </div>
      </div>
    </LofiBox>
  );
};

export default AwardCard;
