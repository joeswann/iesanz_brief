import { createFileRoute } from "@tanstack/react-router";
import EventsLayout from "@/components/events/EventsLayout";

export const Route = createFileRoute("/events")({ component: EventsLayout });
