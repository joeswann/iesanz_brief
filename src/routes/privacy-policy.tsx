import { createFileRoute } from "@tanstack/react-router";
import PrivacyPolicyLayout from "@/components/legal/PrivacyPolicyLayout";

export const Route = createFileRoute("/privacy-policy")({ component: PrivacyPolicyLayout });
