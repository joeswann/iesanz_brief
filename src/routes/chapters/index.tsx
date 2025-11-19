import { createFileRoute } from '@tanstack/react-router'
import ChaptersLayout from '@/components/chapters/ChaptersLayout'

export const Route = createFileRoute('/chapters/')({
    component: ChaptersLayout,
})
