import { createFileRoute } from "@tanstack/react-router";
import { user } from "@/data/data.user";
import { LofiCard } from "@/components/lofi/LofiLayouts";

export const Route = createFileRoute("/account/education/cpd")({
    component: AccountEducationCPD,
});

function AccountEducationCPD() {
    return (
        <div>
            <LofiCard title="CPD Tracker">
                <p>Track your Continuing Professional Development points here.</p>
            </LofiCard>

            <div style={{ marginTop: "32rem" }}>
                <LofiCard title={`Current Period: ${user.education.cpd.currentPeriod}`}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16rem" }}>
                        <div>
                            <span style={{ fontSize: "2rem", fontWeight: "bold" }}>{user.education.cpd.points}</span>
                            <span style={{ color: "#666" }}> / {user.education.cpd.required} Points</span>
                        </div>
                        <div style={{ width: "200px", height: "16rem", background: "#eee", border: "1px solid #000" }}>
                            <div style={{ width: `${(user.education.cpd.points / user.education.cpd.required) * 100}%`, height: "100%", background: "#000" }} />
                        </div>
                    </div>
                    <p>You need {user.education.cpd.required - user.education.cpd.points} more points to meet your annual requirement.</p>

                    <h4 style={{ marginTop: "24rem", marginBottom: "8rem" }}>Recent Activity</h4>
                    <ul style={{ paddingLeft: "24rem" }}>
                        {user.education.cpd.history.map((item) => (
                            <li key={item.id} style={{ marginBottom: "4rem" }}>
                                <strong>{item.activity}</strong> - {item.points} points <span style={{ color: "#666", fontSize: "14rem" }}>({item.date})</span>
                            </li>
                        ))}
                    </ul>
                </LofiCard>
            </div>
        </div>
    );
}
