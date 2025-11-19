import { createFileRoute } from "@tanstack/react-router";
import AccountPageLayout from "@/components/account/AccountPageLayout";
import { user } from "@/data/data.user";
import { LofiCard, LofiGrid } from "@/components/lofi/LofiLayouts";


export const Route = createFileRoute("/account/events")({
    component: AccountEvents,
});

function AccountEvents() {
    return (
        <AccountPageLayout
            title="My Events"
            description="View your upcoming events and past attendance."
        >
            <LofiGrid>
                <LofiCard title="Upcoming Events">
                    {user.events.upcoming.length > 0 ? (
                        <div style={{ display: "grid", gap: "16rem" }}>
                            {user.events.upcoming.map((event) => (
                                <div key={event.id} style={{ padding: "16rem", border: "1px solid #eee", borderRadius: "4px" }}>
                                    <h4 style={{ margin: "0 0 8rem 0" }}>{event.title}</h4>
                                    <p style={{ margin: 0, color: "#666", fontSize: "14rem" }}>Date: {event.date}</p>
                                    <p style={{ margin: 0, color: "#666", fontSize: "14rem" }}>Location: {event.location}</p>
                                    <div style={{ marginTop: "8rem" }}>
                                        <a href={event.link} style={{ textDecoration: "underline" }}>{event.action}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>You have not registered for any upcoming events.</p>
                    )}
                </LofiCard>

                <LofiCard title="Past Events">
                    {user.events.past.length > 0 ? (
                        <div style={{ display: "grid", gap: "16rem" }}>
                            {user.events.past.map((event) => (
                                <div key={event.id} style={{ padding: "16rem", border: "1px solid #eee", borderRadius: "4px", background: "#f9f9f9" }}>
                                    <h4 style={{ margin: "0 0 8rem 0" }}>{event.title}</h4>
                                    <p style={{ margin: 0, color: "#666", fontSize: "14rem" }}>Date: {event.date}</p>
                                    <p style={{ margin: 0, color: "#666", fontSize: "14rem" }}>Location: {event.location}</p>
                                    <div style={{ marginTop: "8rem" }}>
                                        <a href={event.link} style={{ textDecoration: "underline" }}>{event.action}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No past events found.</p>
                    )}
                </LofiCard>
            </LofiGrid>
        </AccountPageLayout>
    );
}
