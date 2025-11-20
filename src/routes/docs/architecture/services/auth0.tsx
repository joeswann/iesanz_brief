import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import { DocsContent } from '@/components/docs/DocsContent'
import { docsServicesAuth0 } from '@/data/data.docs'

export const Route = createFileRoute('/docs/architecture/services/auth0')({
  component: DocsServicesAuth0,
})

function DocsServicesAuth0() {
  return (
    <LayoutDocs>
      <DocsContent data={docsServicesAuth0} />
    </LayoutDocs>
  )
}
