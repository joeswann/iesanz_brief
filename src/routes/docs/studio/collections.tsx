import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import { DocsContent } from '@/components/docs/DocsContent'
import { docsStudioCollections } from '@/data/data.docs'

export const Route = createFileRoute('/docs/studio/collections')({
  component: DocsStudioCollections,
})

function DocsStudioCollections() {
  return (
    <LayoutDocs>
      <DocsContent data={docsStudioCollections} />
    </LayoutDocs>
  )
}
