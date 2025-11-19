import { createFileRoute } from '@tanstack/react-router'
import ChapterGalleryLayout from '@/components/chapters/ChapterGalleryLayout'

export const Route = createFileRoute('/chapters/$chapterId/gallery')({
    component: ChapterGalleryLayout,
})
