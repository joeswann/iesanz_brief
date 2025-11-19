import { createFileRoute, notFound } from '@tanstack/react-router'
import ChapterLayout from '@/components/chapters/ChapterLayout'
import { chapters } from '@/data/data.chapters'
import { chapterContent } from '@/data/data.chapters.content'

export const Route = createFileRoute('/chapters/$chapterId')({
    loader: ({ params }) => {
        const chapter = chapters.find((c) => c.slug === params.chapterId)
        if (!chapter) {
            throw notFound()
        }
        // @ts-ignore - simple lookup for now
        const content = chapterContent[chapter.slug] || chapterContent.default;

        return { chapter, content }
    },
    component: ChapterLayoutComponent,
})

function ChapterLayoutComponent() {
    const { chapter, content } = Route.useLoaderData()
    return <ChapterLayout chapter={chapter} description={content.description} />
}
