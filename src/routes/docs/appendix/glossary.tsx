import { createFileRoute } from '@tanstack/react-router'
import { DocsContent } from '@/components/docs/DocsContent'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import { docsAppendixGlossary } from '@/data/data.docs'

export const Route = createFileRoute('/docs/appendix/glossary')({
  component: DocsAppendixGlossary,
})

function DocsAppendixGlossary() {
  return (
    <LayoutDocs>
      <DocsContent data={docsAppendixGlossary} />
    </LayoutDocs>
  )
}
