import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import { DocsContent } from '@/components/docs/DocsContent'
import { docsStudioPages } from '@/data/data.docs'

export const Route = createFileRoute('/docs/studio/pages')({
  component: DocsStudioPages,
})

function DocsStudioPages() {
  return (
    <LayoutDocs>
      <DocsContent data={docsStudioPages} />
    </LayoutDocs>
  )
}
