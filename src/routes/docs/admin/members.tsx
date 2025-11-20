import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import { DocsContent } from '@/components/docs/DocsContent'
import { docsAdminMembers } from '@/data/data.docs'

export const Route = createFileRoute('/docs/admin/members')({
  component: DocsAdminMembers,
})

function DocsAdminMembers() {
  return (
    <LayoutDocs>
      <DocsContent data={docsAdminMembers} />
    </LayoutDocs>
  )
}
