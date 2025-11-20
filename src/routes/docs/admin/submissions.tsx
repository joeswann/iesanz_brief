import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import { DocsContent } from '@/components/docs/DocsContent'
import { docsAdminSubmissions } from '@/data/data.docs'

export const Route = createFileRoute('/docs/admin/submissions')({
  component: DocsAdminSubmissions,
})

function DocsAdminSubmissions() {
  return (
    <LayoutDocs>
      <DocsContent data={docsAdminSubmissions} />
    </LayoutDocs>
  )
}
