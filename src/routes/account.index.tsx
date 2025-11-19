import { createFileRoute } from "@tanstack/react-router";
import AccountPageLayout from "@/components/account/AccountPageLayout";
import { user } from "@/data/data.user";
import { LofiCard, LofiGrid } from "@/components/lofi/LofiLayouts";
import { TypeBody } from "@/components/type/TypeBody";

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
                    <TypeBody>Current Grade: <strong>{user.subscription.grade}</strong></TypeBody>
                    <TypeBody>Status: <strong>{user.subscription.status}</strong></TypeBody>
                    <TypeBody>Renews: <strong>{user.subscription.renews}</strong></TypeBody>
                    <a href="/account/subscription">Manage Subscription →</a>
                </LofiCard>
                <LofiCard title="Upcoming Events">
                    {user.events.upcoming.length > 0 ? (
                        <>
                            <TypeBody>You have <strong>{user.events.upcoming.length}</strong> upcoming event{user.events.upcoming.length !== 1 ? 's' : ''}.</TypeBody>
                            <TypeBody>Next: {user.events.upcoming[0].title}</TypeBody>
                        </>
                    ) : (
                        <TypeBody>No upcoming events.</TypeBody>
                    )}
                    <a href="/account/events">View All Events →</a>
                </LofiCard>
                <LofiCard title="Education">
                    <TypeBody>CPD Points: <strong>{user.education.cpd.points}</strong> / {user.education.cpd.required}</TypeBody>
                    <TypeBody>Current Period: {user.education.cpd.currentPeriod}</TypeBody>
                    <a href="/account/education">Go to Education Portal →</a>
                </LofiCard>
            </LofiGrid>
        </AccountPageLayout>
    );
}
