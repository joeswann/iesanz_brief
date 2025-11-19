import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import LofiImage from "@/components/lofi/LofiImage";
import LofiHeading from "@/components/lofi/LofiHeading";
import LofiText from "@/components/lofi/LofiText";
import LofiButton from "@/components/lofi/LofiButton";
import LofiGrid from "@/components/lofi/LofiGrid";
import LofiBox from "@/components/lofi/LofiBox";
import { conferences } from "@/data/data.conferences";
import { useState } from "react";
import { fontSize } from "@/styles/styling";

const styles = css`
  display: grid;
  grid-template-columns: 250rem 1fr;
  gap: 48rem;
  padding-bottom: 48rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    gap: 24rem;
  }

  .conf-list {
    display: flex;
    flex-direction: column;
    gap: 12rem;

    button {
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

      &:hover, &.active {
        opacity: 0.7;
        font-weight: bold;
      }
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 64rem;
  }

  .hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32rem;
    align-items: center;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .section-header {
    margin-bottom: 32rem;
    border-bottom: 1px solid var(--light-grey);
    padding-bottom: 16rem;
  }

  .speaker-card {
    text-align: center;
    .name { font-weight: bold; margin-top: 8rem; }
    .role { font-style: italic; opacity: 0.7; ${fontSize(0.875)} }
  }

  .program-item {
    display: grid;
    grid-template-columns: 80rem 1fr;
    gap: 16rem;
    padding: 16rem 0;
    border-bottom: 1px solid var(--light-grey);

    .time { font-weight: bold; opacity: 0.6; }
    .track { 
        display: inline-block; 
        background: var(--light-grey); 
        padding: 2rem 6rem; 
        ${fontSize(0.75)} 
        margin-top: 4rem;
    }
  }

  .ticket-card {
    border: 1px solid var(--foreground);
    padding: 24rem;
    display: flex;
    flex-direction: column;
    gap: 16rem;
    
    .price { ${fontSize(2)}; font-weight: bold; }
  }
`;

const ConferencesLayout: DCI = () => {
    const [selectedConfId, setSelectedConfId] = useState(conferences[0].id);
    const conf = conferences.find(c => c.id === selectedConfId) || conferences[0];

    const upcoming = conferences.filter(c => c.status === "Upcoming");
    const past = conferences.filter(c => c.status === "Past");

    return (
        <div className={styles}>
            <aside className="sidebar">

                {upcoming.length > 0 && (
                    <>
                        <LofiHeading level={3}>Upcoming Events</LofiHeading>
                        <nav className="conf-list">
                            {upcoming.map((c) => (
                                <button
                                    key={c.id}
                                    onClick={() => setSelectedConfId(c.id)}
                                    className={selectedConfId === c.id ? "active" : ""}
                                >
                                    {c.year}: {c.location.split(',')[0]}
                                </button>
                            ))}
                        </nav>
                        <div style={{ height: "24rem" }} />
                    </>
                )}

                <LofiHeading level={3}>Past Conferences</LofiHeading>
                <nav className="conf-list">
                    {past.map((c) => (
                        <button
                            key={c.id}
                            onClick={() => setSelectedConfId(c.id)}
                            className={selectedConfId === c.id ? "active" : ""}
                        >
                            {c.year}: {c.location.split(',')[0]}
                        </button>
                    ))}
                </nav>

            </aside>

            <main className="content">
                {/* Hero */}
                <section className="hero">
                    <LofiImage ratio={16 / 9} label={conf.imageLabel} />
                    <div>
                        <div style={{ marginBottom: "16rem", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: "bold", color: "#d4af37" }}>
                            {conf.status} Event
                        </div>
                        <LofiHeading level={1}>{conf.title}</LofiHeading>
                        <div style={{ marginBottom: "16rem", fontSize: "20rem" }}>
                            {conf.dates} • {conf.location}
                        </div>
                        <div style={{ marginBottom: "24rem", fontStyle: "italic" }}>
                            Theme: "{conf.theme}"
                        </div>
                        <LofiText lines={4} />
                        {conf.status === "Upcoming" && (
                            <div style={{ marginTop: "24rem" }}>
                                <LofiButton variant="primary">Register Now</LofiButton>
                            </div>
                        )}
                    </div>
                </section>

                {/* Speakers */}
                {conf.speakers.length > 0 && (
                    <section>
                        <div className="section-header">
                            <LofiHeading level={2}>Keynote Speakers</LofiHeading>
                        </div>
                        <LofiGrid columns={3}>
                            {conf.speakers.map(spk => (
                                <div key={spk.id} className="speaker-card">
                                    <LofiImage ratio={1} label={spk.imageLabel} />
                                    <div className="name">{spk.name}</div>
                                    <div className="role">{spk.role}, {spk.company}</div>
                                </div>
                            ))}
                        </LofiGrid>
                    </section>
                )}

                {/* Program */}
                {conf.program.length > 0 && (
                    <section>
                        <div className="section-header">
                            <LofiHeading level={2}>Program Highlights</LofiHeading>
                        </div>
                        <div>
                            {conf.program.map(sess => (
                                <div key={sess.id} className="program-item">
                                    <div className="time">{sess.time}</div>
                                    <div>
                                        <LofiHeading level={4}>{sess.title}</LofiHeading>
                                        {sess.speakerId && (
                                            <div style={{ opacity: 0.7, marginBottom: "4rem" }}>
                                                {conf.speakers.find(s => s.id === sess.speakerId)?.name}
                                            </div>
                                        )}
                                        <span className="track">{sess.track}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Tickets */}
                {conf.tickets.length > 0 && (
                    <section>
                        <div className="section-header">
                            <LofiHeading level={2}>Registration Packages</LofiHeading>
                        </div>
                        <LofiGrid columns={3}>
                            {conf.tickets.map(ticket => (
                                <div key={ticket.name} className="ticket-card">
                                    <LofiHeading level={4}>{ticket.name}</LofiHeading>
                                    <div className="price">{ticket.price}</div>
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
