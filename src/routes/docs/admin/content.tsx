import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import { DocsContent } from '@/components/docs/DocsContent'
import { docsAdminContent } from '@/data/data.docs'

export const Route = createFileRoute('/docs/admin/content')({
  component: DocsAdminContent,
})

function DocsAdminContent() {
  return (
    <LayoutDocs>
      <DocsContent data={docsAdminContent} />
    </LayoutDocs>
  )
}
