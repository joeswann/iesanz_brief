import { createFileRoute } from '@tanstack/react-router'
import { docsGuidancePriorities } from '@/data/data.docs'
import { DocsContent } from '@/components/docs/DocsContent'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'

export const Route = createFileRoute('/docs/guidance/priorities')({
  component: () => (
    <LayoutDocs>
      <DocsContent data={docsGuidancePriorities} />
    </LayoutDocs>
  ),
})
