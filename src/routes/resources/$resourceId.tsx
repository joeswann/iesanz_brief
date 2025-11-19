import { createFileRoute, notFound } from '@tanstack/react-router'
import ResourceDetailLayout from '@/components/resources/ResourceDetailLayout'
import { resources } from '@/data/data.resources'

export const Route = createFileRoute('/resources/$resourceId')({
    loader: ({ params }) => {
        const resource = resources.find(r => r.id === params.resourceId)

        if (!resource) {
            throw notFound()
        }

        return {
            resource
        }
    },
    component: ResourceRoute
})

function ResourceRoute() {
    const { resource } = Route.useLoaderData()
    return <ResourceDetailLayout resource={resource} />
}
