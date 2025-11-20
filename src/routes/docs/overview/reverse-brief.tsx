import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import { DocsContent } from '@/components/docs/DocsContent'
import { docsOverviewReverseBrief } from '@/data/data.docs'

export const Route = createFileRoute('/docs/overview/reverse-brief')({
  component: DocsOverviewReverseBrief,
})

function DocsOverviewReverseBrief() {
  return (
    <LayoutDocs>
      <DocsContent data={docsOverviewReverseBrief} />
    </LayoutDocs>
  )
}
