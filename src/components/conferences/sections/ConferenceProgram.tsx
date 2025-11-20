import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LofiHeading from "@/components/lofi/LofiHeading";
import { Conference } from "@/data/data.conferences";
import { fontSize } from "@/styles/styling";

const sectionHeader = css`
  margin-bottom: 32rem;
  border-bottom: 1px solid var(--light-grey);
  padding-bottom: 16rem;
`;

const programItem = css`
  display: grid;
  grid-template-columns: 80rem 1fr;
  gap: 16rem;
  padding: 16rem 0;
  border-bottom: 1px solid var(--light-grey);
`;

const programTime = css`
  font-weight: bold;
  opacity: 0.6;
`;

const speakerInfo = css`
  opacity: 0.7;
  margin-bottom: 4rem;
`;

const programTrack = css`
  display: inline-block;
  background: var(--light-grey);
  padding: 2rem 6rem;
  ${fontSize(0.75)}
  margin-top: 4rem;
`;

interface ConferenceProgramProps {
  conf: Conference;
}

const ConferenceProgram: DCI<ConferenceProgramProps> = ({ conf }) => {
  if (conf.program.length === 0) return null;

  return (
    <section>
      <div className={sectionHeader}>
        <LofiHeading level={2}>Program Highlights</LofiHeading>
      </div>
      <div>
        {conf.program.map(sess => (
          <div key={sess.id} className={programItem}>
            <div className={programTime}>{sess.time}</div>
            <div>
              <LofiHeading level={4}>{sess.title}</LofiHeading>
              {sess.speakerId && (
                <div className={speakerInfo}>
                  {conf.speakers.find(s => s.id === sess.speakerId)?.name}
                </div>
              )}
              <span className={programTrack}>{sess.track}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConferenceProgram;
