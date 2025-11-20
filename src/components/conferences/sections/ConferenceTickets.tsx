import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LofiHeading from "@/components/lofi/LofiHeading";
import { LofiButton } from "@/components/lofi/LofiButton";
import LofiGrid from "@/components/lofi/LofiGrid";
import { Conference } from "@/data/data.conferences";
import { fontSize } from "@/styles/styling";

const sectionHeader = css`
  margin-bottom: 32rem;
  border-bottom: 1px solid var(--light-grey);
  padding-bottom: 16rem;
`;

const ticketCard = css`
  border: 1px solid var(--foreground);
  padding: 24rem;
  display: flex;
  flex-direction: column;
  gap: 16rem;
`;

const ticketPrice = css`
  ${fontSize(2)};
  font-weight: bold;
`;

interface ConferenceTicketsProps {
  conf: Conference;
}

const ConferenceTickets: DCI<ConferenceTicketsProps> = ({ conf }) => {
  if (conf.tickets.length === 0) return null;

  return (
    <section>
      <div className={sectionHeader}>
        <LofiHeading level={2}>Registration Packages</LofiHeading>
      </div>
      <LofiGrid columns={3}>
        {conf.tickets.map(ticket => (
          <div key={ticket.name} className={ticketCard}>
            <LofiHeading level={4}>{ticket.name}</LofiHeading>
            <div className={ticketPrice}>{ticket.price}</div>
            <p>{ticket.description}</p>
            <LofiButton variant="secondary">Select</LofiButton>
          </div>
        ))}
      </LofiGrid>
    </section>
  );
};

export default ConferenceTickets;
