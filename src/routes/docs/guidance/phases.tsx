import { createFileRoute } from '@tanstack/react-router'
import { docsGuidancePhases } from '@/data/data.docs'
import { DocsContent } from '@/components/docs/DocsContent'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'

export const Route = createFileRoute('/docs/guidance/phases')({
  component: () => (
    <LayoutDocs>
      <DocsContent data={docsGuidancePhases} />
    </LayoutDocs>
  ),
})
