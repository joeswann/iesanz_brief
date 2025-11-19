import { createFileRoute } from "@tanstack/react-router";
import AccountInvoices from "@/components/account/AccountInvoices";

export const Route = createFileRoute("/account/invoices")({
    component: AccountInvoices,
});
