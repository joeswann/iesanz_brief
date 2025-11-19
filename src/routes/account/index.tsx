import { createFileRoute } from "@tanstack/react-router";
import AccountDashboard from "@/components/account/AccountDashboard";

export const Route = createFileRoute("/account/")({
    component: AccountDashboard,
});
