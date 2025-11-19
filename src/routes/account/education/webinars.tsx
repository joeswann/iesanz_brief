import { createFileRoute } from "@tanstack/react-router";
import { user } from "@/data/data.user";
import { LofiCard, LofiGrid } from "@/components/lofi/LofiLayouts";
import { TypeBody } from "@/components/type/TypeBody";
import { TypeHeading } from "@/components/type/TypeHeading";

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
                <TypeHeading level={3}>Upcoming Webinars</TypeHeading>
                <LofiGrid>
                    {user.education.webinars.upcoming.map((webinar, index) => (
                        <LofiCard key={index} title={webinar.title}>
                            <TypeBody>Date: {webinar.date}</TypeBody>
                            <TypeBody>Time: {webinar.time}</TypeBody>
                            <a href={webinar.link}>Register Now →</a>
                        </LofiCard>
                    ))}
                </LofiGrid>
            </div>

            <div style={{ marginTop: "32rem" }}>
                <TypeHeading level={3}>Past Recordings</TypeHeading>
                <LofiGrid>
                    {user.education.webinars.past.map((webinar, index) => (
                        <LofiCard key={index} title={webinar.title}>
                            <TypeBody>Recorded: {webinar.date}</TypeBody>
                            <a href={webinar.link}>Watch Recording →</a>
                        </LofiCard>
                    ))}
                </LofiGrid>
            </div>
        </div>
    );
}
