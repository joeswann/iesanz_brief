import { createFileRoute, notFound } from '@tanstack/react-router'
import ChapterHubLayout from '@/components/chapters/ChapterHubLayout'
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
    component: ChapterHubComponent,
})

function ChapterHubComponent() {
    const { chapter, content } = Route.useLoaderData()
    return <ChapterHubLayout chapter={chapter} content={content} />
}
