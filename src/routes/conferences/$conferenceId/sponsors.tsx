import { createFileRoute } from "@tanstack/react-router";
import ConferenceSponsors from "@/components/conferences/sections/ConferenceSponsors";
import { conferences } from "@/data/data.conferences";

export const Route = createFileRoute("/conferences/$conferenceId/sponsors")({
  component: () => {
    const { conferenceId } = Route.useParams();
    const conf = conferences.find(c => c.id === conferenceId) || conferences[0];
    return <ConferenceSponsors conf={conf} />;
  },
});
