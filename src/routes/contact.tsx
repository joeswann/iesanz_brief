import { createFileRoute } from "@tanstack/react-router";
import ContactLayout from "@/components/contact/ContactLayout";

export const Route = createFileRoute("/contact")({ component: ContactLayout });
