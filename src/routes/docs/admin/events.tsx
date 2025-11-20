import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import { DocsContent } from '@/components/docs/DocsContent'
import { docsAdminEvents } from '@/data/data.docs'

export const Route = createFileRoute('/docs/admin/events')({
  component: DocsAdminEvents,
})

function DocsAdminEvents() {
  return (
    <LayoutDocs>
      <DocsContent data={docsAdminEvents} />
    </LayoutDocs>
  )
}
