import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import { DocsContent } from '@/components/docs/DocsContent'
import { docsVendorBrief } from '@/data/data.docs'

export const Route = createFileRoute('/docs/vendor/brief')({
  component: DocsVendorBrief,
})

function DocsVendorBrief() {
  return (
    <LayoutDocs>
      <DocsContent data={docsVendorBrief} />
    </LayoutDocs>
  )
}
