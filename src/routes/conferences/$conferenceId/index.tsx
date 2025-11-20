import { createFileRoute } from "@tanstack/react-router";
import ConferenceOverview from "@/components/conferences/sections/ConferenceOverview";
import { conferences } from "@/data/data.conferences";

export const Route = createFileRoute("/conferences/$conferenceId/")({
  component: () => {
    const { conferenceId } = Route.useParams();
    const conf = conferences.find(c => c.id === conferenceId) || conferences[0];
    return <ConferenceOverview conf={conf} />;
  },
});
