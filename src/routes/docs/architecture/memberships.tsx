import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import { DocsContent } from '@/components/docs/DocsContent'
import { docsArchitectureMemberships } from '@/data/data.docs'

export const Route = createFileRoute('/docs/architecture/memberships')({
  component: DocsArchitectureMemberships,
})

function DocsArchitectureMemberships() {
  return (
    <LayoutDocs>
      <DocsContent data={docsArchitectureMemberships} />
    </LayoutDocs>
  )
}
