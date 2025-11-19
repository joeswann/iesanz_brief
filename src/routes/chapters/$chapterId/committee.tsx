import { createFileRoute, useLoaderData } from '@tanstack/react-router'
import ChapterCommittee from '@/components/chapters/ChapterCommittee'

export const Route = createFileRoute('/chapters/$chapterId/committee')({
    component: ChapterCommitteeComponent,
})

function ChapterCommitteeComponent() {
    const { content } = useLoaderData({ from: '/chapters/$chapterId' })
    return <ChapterCommittee members={content.committee} />
}
