import { createFileRoute, useLoaderData } from '@tanstack/react-router'
import ChapterEvents from '@/components/chapters/ChapterEvents'

export const Route = createFileRoute('/chapters/$chapterId/events')({
  component: ChapterEventsComponent,
})

function ChapterEventsComponent() {
  const { content } = useLoaderData({ from: '/chapters/$chapterId' })
  return <ChapterEvents events={content.events} />
}
