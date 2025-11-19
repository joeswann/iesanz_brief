import { DCI } from "@/types/dci";
import AccountPageLayout from "@/components/account/AccountPageLayout";
import UpgradeForm from "@/components/account/UpgradeForm";
import { LofiCard } from "@/components/lofi/LofiLayouts";

const AccountUpgrade: DCI = () => {
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

export default AccountUpgrade;
