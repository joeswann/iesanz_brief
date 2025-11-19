import { DCI } from "@/types/dci";
import { css, cx } from "@linaria/core";
import LofiImage from "@/components/lofi/LofiImage";
import LofiHeading from "@/components/lofi/LofiHeading";
import LofiText from "@/components/lofi/LofiText";
import { LofiButton } from "@/components/lofi/LofiButton";
import LofiGrid from "@/components/lofi/LofiGrid";
import { conferences } from "@/data/data.conferences";
import { useState } from "react";
import { fontSize } from "@/styles/styling";

const layoutContainer = css`
  display: grid;
  grid-template-columns: 250rem 1fr;
  gap: 48rem;
  padding-bottom: 48rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const sidebar = css`
  display: flex;
  flex-direction: column;
  gap: 24rem;
`;

const confList = css`
  display: flex;
  flex-direction: column;
  gap: 12rem;
`;

const confButton = css`
  ${fontSize(1)}
  text-decoration: none;
  color: var(--foreground);
  padding: 8rem 0;
  border-bottom: 1px solid var(--light-grey);
  background: none;
  border-left: none;
  border-right: none;
  border-top: none;
  text-align: left;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    font-weight: bold;
  }
`;

const activeConfButton = css`
  opacity: 0.7;
  font-weight: bold;
`;

const spacer24 = css`
  height: 24rem;
`;

const content = css`
  display: flex;
  flex-direction: column;
  gap: 64rem;
`;

const hero = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32rem;
  align-items: center;

  @media (max-width: 768px) {
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

const ConferencesLayout: DCI = () => {
    const [selectedConfId, setSelectedConfId] = useState(conferences[0].id);
    const conf = conferences.find(c => c.id === selectedConfId) || conferences[0];

    const upcoming = conferences.filter(c => c.status === "Upcoming");
    const past = conferences.filter(c => c.status === "Past");

    return (
        <div className={layoutContainer}>
            <aside className={sidebar}>

                {upcoming.length > 0 && (
                    <>
                        <LofiHeading level={3}>Upcoming Events</LofiHeading>
                        <nav className={confList}>
                            {upcoming.map((c) => (
                                <button
                                    key={c.id}
                                    onClick={() => setSelectedConfId(c.id)}
                                    className={cx(confButton, selectedConfId === c.id && activeConfButton)}
                                >
                                    {c.year}: {c.location.split(',')[0]}
                                </button>
                            ))}
                        </nav>
                        <div className={spacer24} />
                    </>
                )}

                <LofiHeading level={3}>Past Conferences</LofiHeading>
                <nav className={confList}>
                    {past.map((c) => (
                        <button
                            key={c.id}
                            onClick={() => setSelectedConfId(c.id)}
                            className={cx(confButton, selectedConfId === c.id && activeConfButton)}
                        >
                            {c.year}: {c.location.split(',')[0]}
                        </button>
                    ))}
                </nav>

            </aside>

            <main className={content}>
                {/* Hero */}
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
                        <LofiText lines={4} />
                        {conf.status === "Upcoming" && (
                            <div className={registerButtonContainer}>
                                <LofiButton variant="primary">Register Now</LofiButton>
                            </div>
                        )}
                    </div>
                </section>

                {/* Speakers */}
                {conf.speakers.length > 0 && (
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
                )}

                {/* Program */}
                {conf.program.length > 0 && (
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
                )}

                {/* Tickets */}
                {conf.tickets.length > 0 && (
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
                )}
            </main>
        </div>
    );
};

export default ConferencesLayout;
