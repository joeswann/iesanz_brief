import { createFileRoute, useLoaderData } from '@tanstack/react-router'
import ChapterStore from '@/components/chapters/ChapterStore'

export const Route = createFileRoute('/chapters/$chapterId/store')({
    component: ChapterStoreComponent,
})

function ChapterStoreComponent() {
    const { content } = useLoaderData({ from: '/chapters/$chapterId' })
    return <ChapterStore store={content.store} />
}
