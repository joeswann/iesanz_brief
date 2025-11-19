import { createFileRoute } from "@tanstack/react-router";
import AccountPageLayout from "@/components/account/AccountPageLayout";
import { user } from "@/data/data.user";
import { LofiButton } from "@/components/lofi/LofiButton";
import { LofiCard } from "@/components/lofi/LofiLayouts";


export const Route = createFileRoute("/account/subscription")({
    component: AccountSubscription,
});

function AccountSubscription() {
    return (
        <AccountPageLayout
            title="My Subscription"
            description="Manage your membership details and renewal."
        >
            <div style={{ maxWidth: "800px" }}>
                <LofiCard>
                    <div style={{ display: "grid", gap: "16rem" }}>
                        <p>Current Grade: <strong>{user.subscription.grade}</strong></p>
                        <p>Status: <strong>{user.subscription.status}</strong></p>
                        <p>Renews: <strong>{user.subscription.renews}</strong></p>
                    </div>
                    <div style={{ marginTop: "16rem" }}>
                        <LofiButton href="/account/upgrade" variant="primary">Upgrade Membership</LofiButton>
                    </div>
                </LofiCard>
            </div>
        </AccountPageLayout>
    );
}
