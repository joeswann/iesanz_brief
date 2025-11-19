import { createFileRoute } from "@tanstack/react-router";
import AccountLogin from "@/components/account/AccountLogin";

export const Route = createFileRoute("/account/login")({
    component: AccountLogin,
});
