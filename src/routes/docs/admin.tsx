import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import DocsContent from '@/components/docs/DocsContent'
import { docsData } from '@/data/data.docs'

export const Route = createFileRoute('/docs/admin')({
  component: DocsAdmin,
})

function DocsAdmin() {
  return (
    <LayoutDocs>
      <DocsContent data={docsData.admin} />
    </LayoutDocs>
  )
}
