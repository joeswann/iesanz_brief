import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import { DocsContent } from '@/components/docs/DocsContent'
import { docsContents } from '@/data/data.docs'

export const Route = createFileRoute('/docs/contents')({
  component: DocsContents,
})

function DocsContents() {
  return (
    <LayoutDocs>
      <DocsContent data={docsContents} />
    </LayoutDocs>
  )
}
