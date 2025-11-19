import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LofiBox from "@/components/lofi/LofiBox";
import LofiImage from "@/components/lofi/LofiImage";
import LofiHeading from "@/components/lofi/LofiHeading";
import LofiText from "@/components/lofi/LofiText";
import LofiButton from "@/components/lofi/LofiButton";
import { EventItem } from "@/data/data.events";
import { fontSize } from "@/styles/styling";

interface EventCardProps {
    item: EventItem;
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

  .summary {
    margin-bottom: 16rem;
    flex-grow: 1;
  }

  .footer {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid var(--foreground);
    padding-top: 16rem;
  }

  .price {
    font-weight: bold;
  }
`;

const EventCard: DCI<EventCardProps> = ({ item, className }) => {
    return (
        <LofiBox className={className}>
            <div className={styles}>
                <LofiImage ratio={16 / 9} label={item.imageLabel} />
                <div className="content">
                    <div className="meta">
                        {item.date} • {item.type} {item.chapter ? `(${item.chapter})` : ""}
                    </div>
                    <LofiHeading level={4}>{item.title}</LofiHeading>
                    <div className="summary">
                        <LofiText lines={3} />
                    </div>
                    <div className="footer">
                        <div className="price">{item.price}</div>
                        <LofiButton variant="secondary">Details</LofiButton>
                    </div>
                </div>
            </div>
        </LofiBox>
    );
};

export default EventCard;
