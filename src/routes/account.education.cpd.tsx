import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/account/education/cpd")({
    component: AccountEducationCPD,
});

function AccountEducationCPD() {
    return (
        <div>
            <h2>CPD Tracker</h2>
            <p>Track your Continuing Professional Development points here.</p>
        </div>
    );
}
