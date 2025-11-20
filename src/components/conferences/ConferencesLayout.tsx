import { DCI } from "@/types/dci";
import { css } from "@linaria/core";
import { conferences } from "@/data/data.conferences";
import SidebarLayout from "@/components/layout/SidebarLayout";
import ConferencesSidebar from "./ConferencesSidebar";

const content = css`
  display: flex;
  flex-direction: column;
  gap: 64rem;
`;

interface ConferencesLayoutProps {
    conferenceId?: string;
}

const ConferencesLayout: DCI<ConferencesLayoutProps> = ({ conferenceId, children }) => {
    const conf = conferenceId
        ? conferences.find(c => c.id === conferenceId) || conferences[0]
        : conferences[0];

    return (
        <SidebarLayout
            sidebar={
                <ConferencesSidebar
                    selectedConf={conf}
                />
            }
        >
            <div className={content}>
                {children}
            </div>
        </SidebarLayout>
    );
};

export default ConferencesLayout;
