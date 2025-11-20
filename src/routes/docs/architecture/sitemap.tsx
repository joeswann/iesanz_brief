import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import { DocsContent } from '@/components/docs/DocsContent'
import { docsArchitectureSitemap } from '@/data/data.docs'

export const Route = createFileRoute('/docs/architecture/sitemap')({
  component: DocsArchitectureSitemap,
})

function DocsArchitectureSitemap() {
  return (
    <LayoutDocs>
      <DocsContent data={docsArchitectureSitemap} />
    </LayoutDocs>
  )
}
