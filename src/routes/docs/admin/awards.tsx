import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import { DocsContent } from '@/components/docs/DocsContent'
import { docsAdminAwards } from '@/data/data.docs'

export const Route = createFileRoute('/docs/admin/awards')({
    component: DocsAdminAwards,
})

function DocsAdminAwards() {
    return (
        <LayoutDocs>
            <DocsContent data={docsAdminAwards} />
        </LayoutDocs>
    )
}
