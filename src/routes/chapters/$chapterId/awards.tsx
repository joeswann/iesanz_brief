import { createFileRoute, useLoaderData } from '@tanstack/react-router'
import ChapterAwards from '@/components/chapters/ChapterAwards'

export const Route = createFileRoute('/chapters/$chapterId/awards')({
  component: ChapterAwardsComponent,
})

function ChapterAwardsComponent() {
  const { content } = useLoaderData({ from: '/chapters/$chapterId' })
  return <ChapterAwards awards={content.awards} />
}
