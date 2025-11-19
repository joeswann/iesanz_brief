import { createFileRoute } from "@tanstack/react-router";
import { user } from "@/data/data.user";
import { LofiCard } from "@/components/lofi/LofiLayouts";
import { TypeBody } from "@/components/type/TypeBody";
import { TypeHeading } from "@/components/type/TypeHeading";
import { css } from "@linaria/core";

export const Route = createFileRoute("/account/education/cpd")({
    component: AccountEducationCPD,
});

const cpdContainer = css`
    margin-top: 32rem;
`;

const progressContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16rem;
`;

const progressBar = css`
    width: 200px;
    height: 16rem;
    background: #eee;
    border: 2px solid #000;
`;

const progressFill = css`
    height: 100%;
    background: #000;
`;

const activityList = css`
    padding-left: 24rem;
`;

const activityItem = css`
    margin-bottom: 4rem;
`;

const activityDate = css`
    color: #666;
    font-size: 14rem;
`;

function AccountEducationCPD() {
    return (
        <div>
            <LofiCard title="CPD Tracker">
                <p>Track your Continuing Professional Development points here.</p>
            </LofiCard>

            <div className={cpdContainer}>
                <LofiCard title={`Current Period: ${user.education.cpd.currentPeriod}`}>
                    <div className={progressContainer}>
                        <div>
                            <TypeHeading level={2} as="span">{user.education.cpd.points}</TypeHeading>
                            <TypeBody as="span" color="muted"> / {user.education.cpd.required} Points</TypeBody>
                        </div>
                        <div className={progressBar}>
                            <div className={progressFill} style={{ width: `${(user.education.cpd.points / user.education.cpd.required) * 100}%` }} />
                        </div>
                    </div>
                    <TypeBody>You need {user.education.cpd.required - user.education.cpd.points} more points to meet your annual requirement.</TypeBody>

                    <TypeHeading level={4} style={{ marginTop: "24rem", marginBottom: "8rem" }}>Recent Activity</TypeHeading>
                    <ul className={activityList}>
                        {user.education.cpd.history.map((item) => (
                            <li key={item.id} className={activityItem}>
                                <TypeBody as="span">
                                    <strong>{item.activity}</strong> - {item.points} points <span className={activityDate}>({item.date})</span>
                                </TypeBody>
                            </li>
                        ))}
                    </ul>
                </LofiCard>
            </div>
        </div>
    );
}
