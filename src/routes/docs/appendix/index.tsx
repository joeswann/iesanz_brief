import { createFileRoute } from '@tanstack/react-router'
import { DocsContent } from '@/components/docs/DocsContent'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import { docsAppendix } from '@/data/data.docs'

export const Route = createFileRoute('/docs/appendix/')({
  component: DocsAppendix,
})

function DocsAppendix() {
  return (
    <LayoutDocs>
      <DocsContent data={docsAppendix} />
    </LayoutDocs>
  )
}
