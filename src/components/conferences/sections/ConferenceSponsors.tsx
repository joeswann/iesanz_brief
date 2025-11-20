import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LofiHeading from "@/components/lofi/LofiHeading";
import LofiImage from "@/components/lofi/LofiImage";
import LofiGrid from "@/components/lofi/LofiGrid";
import { Conference } from "@/data/data.conferences";

const sectionHeader = css`
  margin-bottom: 32rem;
  border-bottom: 1px solid var(--light-grey);
  padding-bottom: 16rem;
`;

interface ConferenceSponsorsProps {
  conf: Conference;
}

const ConferenceSponsors: DCI<ConferenceSponsorsProps> = ({ conf }) => {
  if (conf.sponsors.length === 0) return null;

  return (
    <section>
      <div className={sectionHeader}>
        <LofiHeading level={2}>Sponsors</LofiHeading>
      </div>
      <LofiGrid columns={4}>
        {conf.sponsors.map(sponsor => (
          <div key={sponsor} style={{ textAlign: 'center', padding: '16rem', border: '1px solid #eee' }}>
            <LofiImage ratio={2 / 1} label={sponsor} />
            <div style={{ marginTop: '8rem', fontWeight: 'bold' }}>{sponsor}</div>
          </div>
        ))}
      </LofiGrid>
    </section>
  );
};

export default ConferenceSponsors;
