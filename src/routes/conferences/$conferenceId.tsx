import { createFileRoute, Outlet } from "@tanstack/react-router";
import ConferencesLayout from "@/components/conferences/ConferencesLayout";

export const Route = createFileRoute("/conferences/$conferenceId")({
  component: () => {
    const { conferenceId } = Route.useParams();
    return (
      <ConferencesLayout conferenceId={conferenceId}>
        <Outlet />
      </ConferencesLayout>
    );
  },
});
