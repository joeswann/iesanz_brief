import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import { DocsContent } from '../../components/docs/DocsContent'
import { docsData } from '@/data/data.docs'

export const Route = createFileRoute('/docs/process')({
    component: DocsProcess,
})

function DocsProcess() {
    return (
        <LayoutDocs>
            <DocsContent data={docsData.process} />
        </LayoutDocs>
    )
}
