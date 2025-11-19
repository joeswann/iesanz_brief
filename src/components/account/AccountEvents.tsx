import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import AccountPageLayout from "@/components/account/AccountPageLayout";
import { user } from "@/data/data.user";
import { LofiCard, LofiGrid } from "@/components/lofi/LofiLayouts";
import { TypeBody } from "@/components/type/TypeBody";
import { TypeHeading } from "@/components/type/TypeHeading";

const eventList = css`
    display: grid;
    gap: 16rem;
`;

const eventItem = css`
    padding: 16rem;
    border: 2px solid #000;
    border-radius: 0;
`;

const pastEventItem = css`
    padding: 16rem;
    border: 2px solid #000;
    border-radius: 0;
    background: #f9f9f9;
`;

const eventAction = css`
    margin-top: 8rem;
`;

const actionLink = css`
    text-decoration: underline;
`;

const AccountEvents: DCI = () => {
    return (
        <AccountPageLayout
            title="My Events"
            description="View your upcoming events and past attendance."
        >
            <LofiGrid>
                <LofiCard title="Upcoming Events">
                    {user.events.upcoming.length > 0 ? (
                        <div className={eventList}>
                            {user.events.upcoming.map((event) => (
                                <div key={event.id} className={eventItem}>
                                    <TypeHeading level={4} style={{ marginBottom: "8rem" }}>{event.title}</TypeHeading>
                                    <TypeBody variant="small" color="muted">Date: {event.date}</TypeBody>
                                    <TypeBody variant="small" color="muted">Location: {event.location}</TypeBody>
                                    <div className={eventAction}>
                                        <a href={event.link} className={actionLink}>{event.action}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <TypeBody>You have not registered for any upcoming events.</TypeBody>
                    )}
                </LofiCard>

                <LofiCard title="Past Events">
                    {user.events.past.length > 0 ? (
                        <div className={eventList}>
                            {user.events.past.map((event) => (
                                <div key={event.id} className={pastEventItem}>
                                    <TypeHeading level={4} style={{ marginBottom: "8rem" }}>{event.title}</TypeHeading>
                                    <TypeBody variant="small" color="muted">Date: {event.date}</TypeBody>
                                    <TypeBody variant="small" color="muted">Location: {event.location}</TypeBody>
                                    <div className={eventAction}>
                                        <a href={event.link} className={actionLink}>{event.action}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <TypeBody>No past events found.</TypeBody>
                    )}
                </LofiCard>
            </LofiGrid>
        </AccountPageLayout>
    );
};

export default AccountEvents;
