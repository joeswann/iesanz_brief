import { createFileRoute } from "@tanstack/react-router";
import AccountPageLayout from "@/components/account/AccountPageLayout";
import UpgradeForm from "@/components/account/UpgradeForm";
import { LofiCard } from "@/components/lofi/LofiLayouts";

export const Route = createFileRoute("/account/upgrade")({
    component: AccountUpgrade,
});

function AccountUpgrade() {
    return (
        <AccountPageLayout
            title="Upgrade Membership"
            description="Apply to upgrade your membership grade."
        >
            <div style={{ maxWidth: "800px" }}>
                <LofiCard>
                    <UpgradeForm />
                </LofiCard>
            </div>
        </AccountPageLayout>
    );
}
