import { createFileRoute } from "@tanstack/react-router";
import AccountPageLayout from "@/components/account/AccountPageLayout";


export const Route = createFileRoute("/account/subscription")({
    component: AccountSubscription,
});

function AccountSubscription() {
    return (
        <AccountPageLayout>
            <h1>My Subscription</h1>
            <p>Current Grade: Member (MIES)</p>
            <p>Status: Active</p>
            <p>Renews: 1st July 2025</p>
            <div style={{ marginTop: "1rem" }}>
                <a href="/account/upgrade" style={{ padding: "0.5rem 1rem", background: "var(--foreground)", color: "var(--background)", textDecoration: "none", borderRadius: "4px" }}>Upgrade Membership</a>
            </div>
        </AccountPageLayout>
    );
}
