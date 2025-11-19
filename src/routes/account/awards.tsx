import { createFileRoute } from "@tanstack/react-router";
import AccountAwards from "@/components/account/AccountAwards";

export const Route = createFileRoute("/account/awards")({
    component: AccountAwards,
});

