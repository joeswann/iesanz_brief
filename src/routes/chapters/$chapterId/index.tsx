import { createFileRoute } from '@tanstack/react-router'
import ChapterOverviewLayout from '@/components/chapters/ChapterOverviewLayout'

export const Route = createFileRoute('/chapters/$chapterId/')({
    component: ChapterOverviewLayout,
})
