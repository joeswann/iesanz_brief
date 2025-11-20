import { createFileRoute } from '@tanstack/react-router'
import { DocsContent } from '@/components/docs/DocsContent'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import { docsAdmin } from '@/data/data.docs'

export const Route = createFileRoute('/docs/admin/')({
  component: DocsAdmin,
})

function DocsAdmin() {
  return (
    <LayoutDocs>
      <DocsContent data={docsAdmin} />
    </LayoutDocs>
  )
}
