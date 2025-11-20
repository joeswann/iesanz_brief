import { createFileRoute } from '@tanstack/react-router'
import { DocsContent } from '../../../components/docs/DocsContent'
import LayoutDocs from '../../../components/layout/docs/LayoutDocs'
import { docsAppendixWordpress } from '@/data/data.docs'

export const Route = createFileRoute('/docs/appendix/wordpress')({
  component: DocsAppendixWordpress,
})

function DocsAppendixWordpress() {
  return (
    <LayoutDocs>
      <DocsContent data={docsAppendixWordpress} />
    </LayoutDocs>
  )
}
