import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import { DocsContent } from '@/components/docs/DocsContent'
import { docsAdminReports } from '@/data/data.docs'

export const Route = createFileRoute('/docs/admin/reports')({
  component: DocsAdminReports,
})

function DocsAdminReports() {
  return (
    <LayoutDocs>
      <DocsContent data={docsAdminReports} />
    </LayoutDocs>
  )
}
