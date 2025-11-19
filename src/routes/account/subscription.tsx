import { createFileRoute } from "@tanstack/react-router";
import AccountSubscription from "@/components/account/AccountSubscription";

export const Route = createFileRoute("/account/subscription")({
    component: AccountSubscription,
});
