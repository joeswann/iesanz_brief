import { createFileRoute } from "@tanstack/react-router";
import ConferenceTickets from "@/components/conferences/sections/ConferenceTickets";
import { conferences } from "@/data/data.conferences";

export const Route = createFileRoute("/conferences/$conferenceId/tickets")({
  component: () => {
    const { conferenceId } = Route.useParams();
    const conf = conferences.find(c => c.id === conferenceId) || conferences[0];
    return <ConferenceTickets conf={conf} />;
  },
});
