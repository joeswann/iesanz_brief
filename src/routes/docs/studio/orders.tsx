import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import { DocsContent } from '@/components/docs/DocsContent'
import { docsStudioOrders } from '@/data/data.docs'

export const Route = createFileRoute('/docs/studio/orders')({
  component: DocsStudioOrders,
})

function DocsStudioOrders() {
  return (
    <LayoutDocs>
      <DocsContent data={docsStudioOrders} />
    </LayoutDocs>
  )
}
