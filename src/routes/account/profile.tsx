import { createFileRoute } from "@tanstack/react-router";
import AccountProfile from "@/components/account/AccountProfile";

export const Route = createFileRoute("/account/profile")({
    component: AccountProfile,
});
