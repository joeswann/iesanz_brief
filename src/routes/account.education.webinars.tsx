import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/account/education/webinars")({
    component: AccountEducationWebinars,
});

function AccountEducationWebinars() {
    return (
        <div>
            <h2>Webinars</h2>
            <p>Watch recorded webinars and register for upcoming online training.</p>
        </div>
    );
}
