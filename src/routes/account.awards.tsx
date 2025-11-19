import { createFileRoute } from "@tanstack/react-router";
import AccountPageLayout from "@/components/account/AccountPageLayout";
import { user } from "@/data/data.user";
import { LofiCard, LofiGrid } from "@/components/lofi/LofiLayouts";
import { TypeBody } from "@/components/type/TypeBody";
import { TypeHeading } from "@/components/type/TypeHeading";
import { css } from "@linaria/core";

export const Route = createFileRoute("/account/awards")({
    component: AccountAwards,
});

const awardList = css`
    display: grid;
    gap: 16rem;
`;

const awardItem = css`
    padding: 16rem;
    border: 2px solid #000;
    border-radius: 0;
`;

const pastAwardItem = css`
    padding: 16rem;
    border: 2px solid #000;
    border-radius: 0;
    background: #f9f9f9;
`;

const awardAction = css`
    margin-top: 8rem;
`;

const actionLink = css`
    text-decoration: underline;
`;

function AccountAwards() {
    return (
        <AccountPageLayout
            title="My Awards"
            description="Manage your award entries."
        >
            <LofiGrid>
                <LofiCard title="Active Entries">
                    {user.awards.active.length > 0 ? (
                        <div className={awardList}>
                            {user.awards.active.map((award) => (
                                <div key={award.id} className={awardItem}>
                                    <TypeHeading level={4} style={{ marginBottom: "8rem" }}>{award.title}</TypeHeading>
                                    <TypeBody variant="small" color="muted">Project: {award.project}</TypeBody>
                                    <TypeBody variant="small" color="muted">Status: <strong>{award.status}</strong></TypeBody>
                                    <div className={awardAction}>
                                        <a href={award.link} className={actionLink}>{award.action}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <TypeBody>No active award entries.</TypeBody>
                    )}
                </LofiCard>

                <LofiCard title="Past Entries">
                    {user.awards.past.length > 0 ? (
                        <div className={awardList}>
                            {user.awards.past.map((award) => (
                                <div key={award.id} className={pastAwardItem}>
                                    <TypeHeading level={4} style={{ marginBottom: "8rem" }}>{award.title}</TypeHeading>
                                    <TypeBody variant="small" color="muted">Project: {award.project}</TypeBody>
                                    <TypeBody variant="small" color="muted">Status: <strong>{award.status}</strong></TypeBody>
                                    <div className={awardAction}>
                                        <a href={award.link} className={actionLink}>{award.action}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <TypeBody>No past award entries.</TypeBody>
                    )}
                </LofiCard>
            </LofiGrid>
        </AccountPageLayout>
    );
}
