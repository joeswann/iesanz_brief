import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import { DocsContent } from '@/components/docs/DocsContent'
import { docsStudioCustomers } from '@/data/data.docs'

export const Route = createFileRoute('/docs/studio/customers')({
  component: DocsStudioCustomers,
})

function DocsStudioCustomers() {
  return (
    <LayoutDocs>
      <DocsContent data={docsStudioCustomers} />
    </LayoutDocs>
  )
}
