import { createFileRoute } from '@tanstack/react-router'
import ChapterEventsLayout from '@/components/chapters/ChapterEventsLayout'

export const Route = createFileRoute('/chapters/$chapterId/events')({
  component: ChapterEventsLayout,
})
