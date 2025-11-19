import { createFileRoute } from "@tanstack/react-router";
import ContactsLayout from "@/components/contacts/ContactsLayout";

export const Route = createFileRoute("/contacts")({ component: ContactsLayout });
