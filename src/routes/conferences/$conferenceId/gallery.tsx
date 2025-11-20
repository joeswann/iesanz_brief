import { createFileRoute } from "@tanstack/react-router";
import ConferenceGallery from "@/components/conferences/sections/ConferenceGallery";
import { conferences } from "@/data/data.conferences";

export const Route = createFileRoute("/conferences/$conferenceId/gallery")({
  component: () => {
    const { conferenceId } = Route.useParams();
    const conf = conferences.find(c => c.id === conferenceId) || conferences[0];
    return <ConferenceGallery conf={conf} />;
  },
});
