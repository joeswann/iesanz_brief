import { createFileRoute } from '@tanstack/react-router'
import { DocsContent } from '../../components/docs/DocsContent'
import LayoutDocs from '../../components/layout/docs/LayoutDocs'
import { docsData } from '../../data/data.docs'

export const Route = createFileRoute('/docs/services')({
    component: DocsServices,
})

function DocsServices() {
    return (
        <LayoutDocs>
            <DocsContent data={docsData.services} />
        </LayoutDocs>
    )
}
