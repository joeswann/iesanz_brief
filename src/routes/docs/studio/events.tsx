import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import { DocsContent } from '@/components/docs/DocsContent'
import { docsStudioEvents } from '@/data/data.docs'

export const Route = createFileRoute('/docs/studio/events')({
  component: DocsStudioEvents,
})

function DocsStudioEvents() {
  return (
    <LayoutDocs>
      <DocsContent data={docsStudioEvents} />
    </LayoutDocs>
  )
}
