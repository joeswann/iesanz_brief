import { createFileRoute } from "@tanstack/react-router";
import NewsArticle from "@/components/news/NewsArticle";

export const Route = createFileRoute("/news/$slug")({
  component: () => {
    const { slug } = Route.useParams();
    return <NewsArticle slug={slug} />;
  },
});
