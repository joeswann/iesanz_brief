import { createFileRoute, notFound } from '@tanstack/react-router'
import PageLayout from '@/components/pages/PageLayout'
import { pages } from '@/data/data.pages'

export const Route = createFileRoute('/pages/$pageId')({
    loader: ({ params }) => {
        const pageId = params.pageId as keyof typeof pages
        const pageData = pages[pageId]

        if (!pageData) {
            throw notFound()
        }

        return {
            pageData
        }
    },
    component: PageRoute
})

function PageRoute() {
    const { pageData } = Route.useLoaderData()
    return <PageLayout data={pageData} />
}
