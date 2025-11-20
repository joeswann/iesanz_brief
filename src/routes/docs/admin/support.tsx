import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import { DocsContent } from '@/components/docs/DocsContent'
import { docsAdminSupport } from '@/data/data.docs'

export const Route = createFileRoute('/docs/admin/support')({
  component: DocsAdminSupport,
})

function DocsAdminSupport() {
  return (
    <LayoutDocs>
      <DocsContent data={docsAdminSupport} />
    </LayoutDocs>
  )
}
