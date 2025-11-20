import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import { DocsContent } from '@/components/docs/DocsContent'
import { docsServicesShopify } from '@/data/data.docs'

export const Route = createFileRoute('/docs/architecture/services/shopify')({
    component: DocsServicesShopify,
})

function DocsServicesShopify() {
    return (
        <LayoutDocs>
            <DocsContent data={docsServicesShopify} />
        </LayoutDocs>
    )
}
