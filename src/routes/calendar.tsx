import { createFileRoute } from "@tanstack/react-router";
import CalendarLayout from "@/components/calendar/CalendarLayout";

export const Route = createFileRoute("/calendar")({ component: CalendarLayout });
