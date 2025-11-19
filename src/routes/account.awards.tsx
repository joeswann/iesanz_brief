import { createFileRoute } from "@tanstack/react-router";
import AccountPageLayout from "@/components/account/AccountPageLayout";


export const Route = createFileRoute("/account/awards")({
    component: AccountAwards,
});

function AccountAwards() {
    return (
        <AccountPageLayout>
            <h1>My Awards</h1>
            <p>Manage your award entries.</p>
        </AccountPageLayout>
    );
}
