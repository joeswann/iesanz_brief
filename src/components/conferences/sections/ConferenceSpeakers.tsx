import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LofiImage from "@/components/lofi/LofiImage";
import LofiHeading from "@/components/lofi/LofiHeading";
import LofiGrid from "@/components/lofi/LofiGrid";
import { Conference } from "@/data/data.conferences";
import { fontSize } from "@/styles/styling";

const sectionHeader = css`
  margin-bottom: 32rem;
  border-bottom: 1px solid var(--light-grey);
  padding-bottom: 16rem;
`;

const speakerCard = css`
  text-align: center;
`;

const speakerName = css`
  font-weight: bold;
  margin-top: 8rem;
`;

const speakerRole = css`
  font-style: italic;
  opacity: 0.7;
  ${fontSize(0.875)}
`;

interface ConferenceSpeakersProps {
  conf: Conference;
}

const ConferenceSpeakers: DCI<ConferenceSpeakersProps> = ({ conf }) => {
  if (conf.speakers.length === 0) return null;

  return (
    <section>
      <div className={sectionHeader}>
        <LofiHeading level={2}>Keynote Speakers</LofiHeading>
      </div>
      <LofiGrid columns={3}>
        {conf.speakers.map(spk => (
          <div key={spk.id} className={speakerCard}>
            <LofiImage ratio={1} label={spk.imageLabel} />
            <div className={speakerName}>{spk.name}</div>
            <div className={speakerRole}>{spk.role}, {spk.company}</div>
          </div>
        ))}
      </LofiGrid>
    </section>
  );
};

export default ConferenceSpeakers;
