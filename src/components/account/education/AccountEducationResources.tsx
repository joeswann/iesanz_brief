import { DCI } from "@/types/dci";
import { user } from "@/data/data.user";
import { LofiCard, LofiGrid } from "@/components/lofi/LofiLayouts";
import { TypeBody } from "@/components/type/TypeBody";

const AccountEducationResources: DCI = () => {
    return (
        <div>
            <LofiCard title="Resources">
                <p>Access technical papers, whitepapers, and other educational resources.</p>
            </LofiCard>

            <LofiGrid>
                {user.education.resources.map((resource, index) => (
                    <LofiCard key={index} title={resource.title}>
                        <TypeBody>Resource type: Document</TypeBody>
                        <a href={resource.link}>View Resource →</a>
                    </LofiCard>
                ))}
            </LofiGrid>
        </div>
    );
}

export default AccountEducationResources;
