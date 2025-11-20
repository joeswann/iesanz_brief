import { createFileRoute } from '@tanstack/react-router'
import { DocsContent } from '@/components/docs/DocsContent'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import { docsAppendixPlatformComparison } from '@/data/data.docs'

export const Route = createFileRoute('/docs/appendix/platform-comparison')({
  component: DocsAppendixPlatformComparison,
})

function DocsAppendixPlatformComparison() {
  return (
    <LayoutDocs>
      <DocsContent data={docsAppendixPlatformComparison} />
    </LayoutDocs>
  )
}
