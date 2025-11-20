import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import { DocsContent } from '@/components/docs/DocsContent'
import { docsServicesAlgolia } from '@/data/data.docs'

export const Route = createFileRoute('/docs/architecture/services/algolia')({
    component: DocsServicesAlgolia,
})

function DocsServicesAlgolia() {
    return (
        <LayoutDocs>
            <DocsContent data={docsServicesAlgolia} />
        </LayoutDocs>
    )
}
