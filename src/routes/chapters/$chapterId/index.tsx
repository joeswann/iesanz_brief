import { createFileRoute, useLoaderData } from '@tanstack/react-router'
import ChapterOverview from '@/components/chapters/ChapterOverview'

export const Route = createFileRoute('/chapters/$chapterId/')({
    component: ChapterOverviewComponent,
})

function ChapterOverviewComponent() {
    const { chapter, content } = useLoaderData({ from: '/chapters/$chapterId' })
    return <ChapterOverview chapter={chapter} content={content} />
}
