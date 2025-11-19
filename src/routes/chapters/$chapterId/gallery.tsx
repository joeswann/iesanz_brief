import { createFileRoute, useLoaderData } from '@tanstack/react-router'
import ChapterGallery from '@/components/chapters/ChapterGallery'

export const Route = createFileRoute('/chapters/$chapterId/gallery')({
    component: ChapterGalleryComponent,
})

function ChapterGalleryComponent() {
    const { content } = useLoaderData({ from: '/chapters/$chapterId' })
    return <ChapterGallery gallery={content.gallery} />
}
