import { createFileRoute } from "@tanstack/react-router";
import AwardsLayout from "@/components/awards/AwardsLayout";

export const Route = createFileRoute("/awards")({ component: AwardsLayout });
