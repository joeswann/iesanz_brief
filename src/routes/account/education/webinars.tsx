import { createFileRoute } from "@tanstack/react-router";
import AccountEducationWebinars from "@/components/account/education/AccountEducationWebinars";

export const Route = createFileRoute("/account/education/webinars")({
    component: AccountEducationWebinars,
});
