import { createFileRoute } from "@tanstack/react-router";
import NewsLayout from "@/components/news/NewsLayout";

export const Route = createFileRoute("/news")({ component: NewsLayout });
