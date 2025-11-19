import { createFileRoute } from "@tanstack/react-router";
import AccountPageLayout from "@/components/account/AccountPageLayout";


export const Route = createFileRoute("/account/invoices")({
    component: AccountInvoices,
});

function AccountInvoices() {
    return (
        <AccountPageLayout>
            <h1>Invoices</h1>
            <p>View and download your past invoices.</p>
        </AccountPageLayout>
    );
}
