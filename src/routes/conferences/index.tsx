import { createFileRoute } from "@tanstack/react-router";
import ConferencesLayout from "@/components/conferences/ConferencesLayout";

export const Route = createFileRoute("/conferences/")({
  component: () => <ConferencesLayout />
});
