import { createFileRoute, useLoaderData } from '@tanstack/react-router'
import ChapterNews from '@/components/chapters/ChapterNews'

export const Route = createFileRoute('/chapters/$chapterId/news')({
    component: ChapterNewsComponent,
})

function ChapterNewsComponent() {
    const { content } = useLoaderData({ from: '/chapters/$chapterId' })
    return <ChapterNews news={content.news} />
}
