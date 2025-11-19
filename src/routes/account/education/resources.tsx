import { createFileRoute } from "@tanstack/react-router";
import AccountEducationResources from "@/components/account/education/AccountEducationResources";

export const Route = createFileRoute("/account/education/resources")({
    component: AccountEducationResources,
});
