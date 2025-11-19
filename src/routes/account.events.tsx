import { createFileRoute } from "@tanstack/react-router";
import AccountPageLayout from "@/components/account/AccountPageLayout";


export const Route = createFileRoute("/account/events")({
    component: AccountEvents,
});

function AccountEvents() {
    return (
        <AccountPageLayout>
            <h1>My Events</h1>
            <p>View your upcoming events and past attendance.</p>
        </AccountPageLayout>
    );
}
