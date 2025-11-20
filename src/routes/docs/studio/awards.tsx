import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import { DocsContent } from '@/components/docs/DocsContent'
import { docsStudioAwards } from '@/data/data.docs'

export const Route = createFileRoute('/docs/studio/awards')({
  component: DocsStudioAwards,
})

function DocsStudioAwards() {
  return (
    <LayoutDocs>
      <DocsContent data={docsStudioAwards} />
    </LayoutDocs>
  )
}
