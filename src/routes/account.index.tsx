import { createFileRoute } from "@tanstack/react-router";
import AccountPageLayout from "@/components/account/AccountPageLayout";
import { user } from "@/data/data.user";

export const Route = createFileRoute("/account/")({
    component: AccountDashboard,
});

function AccountDashboard() {
    return (
        <AccountPageLayout>
            <h1>Welcome back, {user.name}</h1>
            <p>Manage your membership, access education resources, and view your account details.</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginTop: "2rem" }}>
                <div style={{ padding: "1.5rem", border: "1px solid #eee", borderRadius: "8px" }}>
                    <h3>Membership Status</h3>
                    <p>Current Grade: <strong>Member (MIES)</strong></p>
                    <p>Status: <strong>Active</strong></p>
                    <a href="/account/subscription">Manage Subscription</a>
                </div>

                <div style={{ padding: "1.5rem", border: "1px solid #eee", borderRadius: "8px" }}>
                    <h3>Upcoming Events</h3>
                    <p>You have no upcoming events.</p>
                    <a href="/account/events">View Events</a>
                </div>

                <div style={{ padding: "1.5rem", border: "1px solid #eee", borderRadius: "8px" }}>
                    <h3>Recent Education</h3>
                    <p>Continue where you left off.</p>
                    <a href="/account/education">Go to Education</a>
                </div>
            </div>
        </AccountPageLayout>
    );
}
