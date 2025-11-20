import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import { DocsContent } from '@/components/docs/DocsContent'
import { docsAdminSettings } from '@/data/data.docs'

export const Route = createFileRoute('/docs/admin/settings')({
  component: DocsAdminSettings,
})

function DocsAdminSettings() {
  return (
    <LayoutDocs>
      <DocsContent data={docsAdminSettings} />
    </LayoutDocs>
  )
}
