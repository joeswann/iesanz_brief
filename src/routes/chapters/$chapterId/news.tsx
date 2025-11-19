import { createFileRoute } from '@tanstack/react-router'
import ChapterNewsLayout from '@/components/chapters/ChapterNewsLayout'

export const Route = createFileRoute('/chapters/$chapterId/news')({
    component: ChapterNewsLayout,
})
