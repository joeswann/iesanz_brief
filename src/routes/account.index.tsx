import { createFileRoute } from "@tanstack/react-router";
import AccountPageLayout from "@/components/account/AccountPageLayout";
import { user } from "@/data/data.user";
import { LofiCard, LofiGrid } from "@/components/lofi/LofiLayouts";

export const Route = createFileRoute("/account/")({
    component: AccountDashboard,
});

function AccountDashboard() {
    return (
        <AccountPageLayout
            title={`Welcome back, ${user.name}`}
            description="Manage your membership, access education resources, and view your account details."
        >
            <LofiGrid>
                <LofiCard title="Membership Status">
                    <p>Current Grade: <strong>{user.subscription.grade}</strong></p>
                    <p>Status: <strong>{user.subscription.status}</strong></p>
                    <p>Renews: <strong>{user.subscription.renews}</strong></p>
                    <a href="/account/subscription">Manage Subscription →</a>
                </LofiCard>
                <LofiCard title="Upcoming Events">
                    {user.events.upcoming.length > 0 ? (
                        <>
                            <p>You have <strong>{user.events.upcoming.length}</strong> upcoming event{user.events.upcoming.length !== 1 ? 's' : ''}.</p>
                            <p>Next: {user.events.upcoming[0].title}</p>
                        </>
                    ) : (
                        <p>No upcoming events.</p>
                    )}
                    <a href="/account/events">View All Events →</a>
                </LofiCard>
                <LofiCard title="Education">
                    <p>CPD Points: <strong>{user.education.cpd.points}</strong> / {user.education.cpd.required}</p>
                    <p>Current Period: {user.education.cpd.currentPeriod}</p>
                    <a href="/account/education">Go to Education Portal →</a>
                </LofiCard>
            </LofiGrid>
        </AccountPageLayout>
    );
}
