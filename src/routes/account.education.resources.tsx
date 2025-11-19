import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/account/education/resources")({
    component: AccountEducationResources,
});

function AccountEducationResources() {
    return (
        <div>
            <h2>Resources</h2>
            <p>Access technical papers, whitepapers, and other educational resources.</p>
        </div>
    );
}
