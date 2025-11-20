import { createFileRoute } from '@tanstack/react-router'
import { DocsContent } from '../../components/docs/DocsContent'
import LayoutDocs from '../../components/layout/docs/LayoutDocs'
import { docsData } from '../../data/data.docs'

export const Route = createFileRoute('/docs/admin')({
  component: DocsAdmin,
})

function DocsAdmin() {
  return (
    <LayoutDocs>
      <DocsContent data={docsData.admin} />
    </LayoutDocs>
  )
}
