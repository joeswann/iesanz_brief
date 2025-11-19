import { createFileRoute } from "@tanstack/react-router";
import { user } from "@/data/data.user";
import { LofiCard, LofiGrid } from "@/components/lofi/LofiLayouts";

export const Route = createFileRoute("/account/education/resources")({
    component: AccountEducationResources,
});

function AccountEducationResources() {
    return (
        <div>
            <LofiCard title="Resources">
                <p>Access technical papers, whitepapers, and other educational resources.</p>
            </LofiCard>

            <LofiGrid>
                {user.education.resources.map((resource, index) => (
                    <LofiCard key={index} title={resource.title}>
                        <p>Resource type: Document</p>
                        <a href={resource.link}>View Resource →</a>
                    </LofiCard>
                ))}
            </LofiGrid>
        </div>
    );
}
