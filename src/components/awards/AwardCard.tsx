import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LofiBox from "@/components/lofi/LofiBox";
import LofiImage from "@/components/lofi/LofiImage";
import LofiHeading from "@/components/lofi/LofiHeading";
import LofiText from "@/components/lofi/LofiText";
import { AwardEntry } from "@/data/data.awards";
import { fontSize } from "@/styles/styling";

interface AwardCardProps {
  item: AwardEntry;
}

const styles = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  
  .content {
    margin-top: 16rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .meta {
    ${fontSize(0.875)}
    opacity: 0.7;
    margin-bottom: 8rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .award-badge {
    display: inline-block;
    background: var(--foreground);
    color: var(--background);
    padding: 4rem 8rem;
    ${fontSize(0.75)}
    font-weight: bold;
    margin-bottom: 12rem;
    text-transform: uppercase;
    
    &.winner {
      background: #d4af37; /* Gold-ish */
      color: #000;
    }
  }

  .designer {
    font-style: italic;
    margin-bottom: 8rem;
    opacity: 0.8;
  }
`;

const AwardCard: DCI<AwardCardProps> = ({ item, className }) => {
  return (
    <LofiBox className={className}>
      <div className={styles}>
        <LofiImage ratio={4 / 3} label={item.imageLabel} />
        <div className="content">
          <div>
            <span className={`award-badge ${item.status.toLowerCase()}`}>{item.status}</span>
          </div>
          <div className="meta">
            {item.chapter}
          </div>
          <LofiHeading level={4}>{item.projectName}</LofiHeading>
          <div className="designer">by {item.designer}</div>
          <LofiText lines={3} />
        </div>
      </div>
    </LofiBox>
  );
};

export default AwardCard;
