import { createFileRoute } from '@tanstack/react-router'
import ResourcesLayout from '@/components/resources/ResourcesLayout'

export const Route = createFileRoute('/resources/')({
    component: ResourcesLayout,
})
