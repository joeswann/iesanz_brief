import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LofiImage from "@/components/lofi/LofiImage";
import LofiHeading from "@/components/lofi/LofiHeading";
import { TypeBody } from "@/components/type/TypeBody";
import { LofiButton } from "@/components/lofi/LofiButton";
import { Conference } from "@/data/data.conferences";

const hero = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32rem;
  align-items: center;

  @media(max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const eventStatus = css`
  margin-bottom: 16rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: bold;
  color: #d4af37;
`;

const eventDetails = css`
  margin-bottom: 16rem;
  font-size: 20rem;
`;

const eventTheme = css`
  margin-bottom: 24rem;
  font-style: italic;
`;

const registerButtonContainer = css`
  margin-top: 24rem;
`;

interface ConferenceOverviewProps {
  conf: Conference;
}

const ConferenceOverview: DCI<ConferenceOverviewProps> = ({ conf }) => {
  return (
    <section className={hero}>
      <LofiImage ratio={16 / 9} label={conf.imageLabel} />
      <div>
        <div className={eventStatus}>
          {conf.status} Event
        </div>
        <LofiHeading level={1}>{conf.title}</LofiHeading>
        <div className={eventDetails}>
          {conf.dates} • {conf.location}
        </div>

        <div className={eventTheme}>
          Theme: "{conf.theme}"
        </div>
        <TypeBody>{conf.description}</TypeBody>
        {conf.status === "Upcoming" && (
          <div className={registerButtonContainer}>
            <LofiButton variant="primary">Register Now</LofiButton>
          </div>
        )}
      </div>
    </section>
  );
};

export default ConferenceOverview;
