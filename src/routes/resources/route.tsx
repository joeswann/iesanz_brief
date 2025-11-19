import { createFileRoute } from '@tanstack/react-router'
import ResourcesRouteLayout from '@/components/resources/ResourcesRouteLayout'

export const Route = createFileRoute('/resources')({
    component: ResourcesRouteLayout,
})
