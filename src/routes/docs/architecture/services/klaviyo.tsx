import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import { DocsContent } from '@/components/docs/DocsContent'
import { docsServicesKlaviyo } from '@/data/data.docs'

export const Route = createFileRoute('/docs/architecture/services/klaviyo')({
  component: DocsServicesKlaviyo,
})

function DocsServicesKlaviyo() {
  return (
    <LayoutDocs>
      <DocsContent data={docsServicesKlaviyo} />
    </LayoutDocs>
  )
}
