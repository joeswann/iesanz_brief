import { createFileRoute } from "@tanstack/react-router";
import AccountEducationCPD from "@/components/account/education/AccountEducationCPD";

export const Route = createFileRoute("/account/education/cpd")({
    component: AccountEducationCPD,
});
