import { DCI } from "@/types/dci";
import AccountPageLayout from "@/components/account/AccountPageLayout";
import { user } from "@/data/data.user";
import { LofiButton } from "@/components/lofi/LofiButton";
import { LofiCard } from "@/components/lofi/LofiLayouts";
import { TypeBody } from "@/components/type/TypeBody";

const AccountSubscription: DCI = () => {
    return (
        <AccountPageLayout
            title="My Subscription"
            description="Manage your membership details and renewal."
        >
            <div style={{ maxWidth: "800px" }}>
                <LofiCard>
                    <div style={{ display: "grid", gap: "16rem" }}>
                        <TypeBody>Current Grade: <strong>{user.subscription.grade}</strong></TypeBody>
                        <TypeBody>Status: <strong>{user.subscription.status}</strong></TypeBody>
                        <TypeBody>Renews: <strong>{user.subscription.renews}</strong></TypeBody>
                    </div>
                    <div style={{ marginTop: "16rem" }}>
                        <LofiButton href="/account/upgrade" variant="primary">Upgrade Membership</LofiButton>
                    </div>
                </LofiCard>
            </div>
        </AccountPageLayout>
    );
}

export default AccountSubscription;
