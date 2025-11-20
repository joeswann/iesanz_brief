import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import { DocsContent } from '@/components/docs/DocsContent'
import { docsAdminPayments } from '@/data/data.docs'

export const Route = createFileRoute('/docs/admin/payments')({
  component: DocsAdminPayments,
})

function DocsAdminPayments() {
  return (
    <LayoutDocs>
      <DocsContent data={docsAdminPayments} />
    </LayoutDocs>
  )
}
