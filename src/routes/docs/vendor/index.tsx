import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import { DocsContent } from '@/components/docs/DocsContent'
import { docsVendor } from '@/data/data.docs'

export const Route = createFileRoute('/docs/vendor/')({
  component: DocsVendor,
})

function DocsVendor() {
  return (
    <LayoutDocs>
      <DocsContent data={docsVendor} />
    </LayoutDocs>
  )
}
