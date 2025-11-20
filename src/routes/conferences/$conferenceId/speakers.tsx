import { createFileRoute } from "@tanstack/react-router";
import ConferenceSpeakers from "@/components/conferences/sections/ConferenceSpeakers";
import { conferences } from "@/data/data.conferences";

export const Route = createFileRoute("/conferences/$conferenceId/speakers")({
  component: () => {
    const { conferenceId } = Route.useParams();
    const conf = conferences.find(c => c.id === conferenceId) || conferences[0];
    return <ConferenceSpeakers conf={conf} />;
  },
});
