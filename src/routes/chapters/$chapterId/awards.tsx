import { createFileRoute } from '@tanstack/react-router'
import ChapterAwardsLayout from '@/components/chapters/ChapterAwardsLayout'

export const Route = createFileRoute('/chapters/$chapterId/awards')({
  component: ChapterAwardsLayout,
})
