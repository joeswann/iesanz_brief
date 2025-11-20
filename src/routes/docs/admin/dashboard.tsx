import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import { DocsContent } from '@/components/docs/DocsContent'
import { docsAdminDashboard } from '@/data/data.docs'

export const Route = createFileRoute('/docs/admin/dashboard')({
  component: DocsAdminDashboard,
})

function DocsAdminDashboard() {
  return (
    <LayoutDocs>
      <DocsContent data={docsAdminDashboard} />
    </LayoutDocs>
  )
}
