import { createFileRoute } from "@tanstack/react-router";
import AccountPageLayout from "@/components/account/AccountPageLayout";
import UpgradeForm from "@/components/account/UpgradeForm";

export const Route = createFileRoute("/account/upgrade")({
    component: AccountUpgrade,
});

function AccountUpgrade() {
    return (
        <AccountPageLayout>
            <h1>Upgrade Membership</h1>
            <p>Apply to upgrade your membership grade.</p>
            <div style={{ marginTop: "2rem" }}>
                <UpgradeForm />
            </div>
        </AccountPageLayout>
    );
}
