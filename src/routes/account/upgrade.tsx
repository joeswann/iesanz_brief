import { createFileRoute } from "@tanstack/react-router";
import AccountUpgrade from "@/components/account/AccountUpgrade";

export const Route = createFileRoute("/account/upgrade")({
    component: AccountUpgrade,
});
