import { createFileRoute } from "@tanstack/react-router";
import StoreLayout from "@/components/store/StoreLayout";

export const Route = createFileRoute("/store")({ component: StoreLayout });
