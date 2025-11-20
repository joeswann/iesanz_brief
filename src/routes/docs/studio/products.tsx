import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import { DocsContent } from '@/components/docs/DocsContent'
import { docsStudioProducts } from '@/data/data.docs'

export const Route = createFileRoute('/docs/studio/products')({
    component: DocsStudioProducts,
})

function DocsStudioProducts() {
    return (
        <LayoutDocs>
            <DocsContent data={docsStudioProducts} />
        </LayoutDocs>
    )
}
