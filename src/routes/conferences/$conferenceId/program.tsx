import { createFileRoute } from "@tanstack/react-router";
import ConferenceProgram from "@/components/conferences/sections/ConferenceProgram";
import { conferences } from "@/data/data.conferences";

export const Route = createFileRoute("/conferences/$conferenceId/program")({
  component: () => {
    const { conferenceId } = Route.useParams();
    const conf = conferences.find(c => c.id === conferenceId) || conferences[0];
    return <ConferenceProgram conf={conf} />;
  },
});
