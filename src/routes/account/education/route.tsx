import { createFileRoute } from "@tanstack/react-router";
import EducationLayout from "@/components/account/education/EducationLayout";

export const Route = createFileRoute("/account/education")({
  component: EducationLayout,
});

