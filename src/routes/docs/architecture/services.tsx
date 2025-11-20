import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import { DocsContent } from '@/components/docs/DocsContent'
import { docsArchitectureServices } from '@/data/data.docs'

export const Route = createFileRoute('/docs/architecture/services')({
    component: DocsArchitectureServices,
})

function DocsArchitectureServices() {
    return (
        <LayoutDocs>
            <DocsContent data={docsArchitectureServices} />
        </LayoutDocs>
    )
}
