import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import { DocsContent } from '@/components/docs/DocsContent'
import { docsAdminMemberships } from '@/data/data.docs'

export const Route = createFileRoute('/docs/admin/memberships')({
  component: DocsAdminMemberships,
})

function DocsAdminMemberships() {
  return (
    <LayoutDocs>
      <DocsContent data={docsAdminMemberships} />
    </LayoutDocs>
  )
}
