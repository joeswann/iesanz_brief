import { createFileRoute } from "@tanstack/react-router";
import AccountPageLayout from "@/components/account/AccountPageLayout";
import { user } from "@/data/data.user";
import { LofiCard, LofiGrid } from "@/components/lofi/LofiLayouts";


export const Route = createFileRoute("/account/awards")({
    component: AccountAwards,
});

function AccountAwards() {
    return (
        <AccountPageLayout
            title="My Awards"
            description="Manage your award entries."
        >
            <LofiGrid>
                <LofiCard title="Active Entries">
                    {user.awards.active.length > 0 ? (
                        <div style={{ display: "grid", gap: "16rem" }}>
                            {user.awards.active.map((award) => (
                                <div key={award.id} style={{ padding: "16rem", border: "1px solid #eee", borderRadius: "4px" }}>
                                    <h4 style={{ margin: "0 0 8rem 0" }}>{award.title}</h4>
                                    <p style={{ margin: 0, color: "#666", fontSize: "14rem" }}>Project: {award.project}</p>
                                    <p style={{ margin: 0, color: "#666", fontSize: "14rem" }}>Status: <strong>{award.status}</strong></p>
                                    <div style={{ marginTop: "8rem" }}>
                                        <a href={award.link} style={{ textDecoration: "underline" }}>{award.action}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No active award entries.</p>
                    )}
                </LofiCard>

                <LofiCard title="Past Entries">
                    {user.awards.past.length > 0 ? (
                        <div style={{ display: "grid", gap: "16rem" }}>
                            {user.awards.past.map((award) => (
                                <div key={award.id} style={{ padding: "16rem", border: "1px solid #eee", borderRadius: "4px", background: "#f9f9f9" }}>
                                    <h4 style={{ margin: "0 0 8rem 0" }}>{award.title}</h4>
                                    <p style={{ margin: 0, color: "#666", fontSize: "14rem" }}>Project: {award.project}</p>
                                    <p style={{ margin: 0, color: "#666", fontSize: "14rem" }}>Status: <strong>{award.status}</strong></p>
                                    <div style={{ marginTop: "8rem" }}>
                                        <a href={award.link} style={{ textDecoration: "underline" }}>{award.action}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No past award entries.</p>
                    )}
                </LofiCard>
            </LofiGrid>
        </AccountPageLayout>
    );
}
