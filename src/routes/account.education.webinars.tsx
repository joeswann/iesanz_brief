import { createFileRoute } from "@tanstack/react-router";
import { user } from "@/data/data.user";
import { LofiCard, LofiGrid } from "@/components/lofi/LofiLayouts";

export const Route = createFileRoute("/account/education/webinars")({
    component: AccountEducationWebinars,
});

function AccountEducationWebinars() {
    return (
        <div>
            <LofiCard title="Webinars">
                <p>Watch recorded webinars and register for upcoming online training.</p>
            </LofiCard>

            <div style={{ marginTop: "32rem" }}>
                <h3>Upcoming Webinars</h3>
                <LofiGrid>
                    {user.education.webinars.upcoming.map((webinar, index) => (
                        <LofiCard key={index} title={webinar.title}>
                            <p>Date: {webinar.date}</p>
                            <p>Time: {webinar.time}</p>
                            <a href={webinar.link}>Register Now →</a>
                        </LofiCard>
                    ))}
                </LofiGrid>
            </div>

            <div style={{ marginTop: "32rem" }}>
                <h3>Past Recordings</h3>
                <LofiGrid>
                    {user.education.webinars.past.map((webinar, index) => (
                        <LofiCard key={index} title={webinar.title}>
                            <p>Recorded: {webinar.date}</p>
                            <a href={webinar.link}>Watch Recording →</a>
                        </LofiCard>
                    ))}
                </LofiGrid>
            </div>
        </div>
    );
}
