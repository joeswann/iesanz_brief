import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import { DocsContent } from '@/components/docs/DocsContent'
import { docsServicesSanity } from '@/data/data.docs'

export const Route = createFileRoute('/docs/architecture/services/sanity')({
  component: DocsServicesSanity,
})

function DocsServicesSanity() {
  return (
    <LayoutDocs>
      <DocsContent data={docsServicesSanity} />
    </LayoutDocs>
  )
}
