import { createFileRoute } from "@tanstack/react-router";
import AccountEvents from "@/components/account/AccountEvents";

export const Route = createFileRoute("/account/events")({
    component: AccountEvents,
});

