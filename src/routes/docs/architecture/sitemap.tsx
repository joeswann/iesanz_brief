import { createFileRoute } from '@tanstack/react-router'
import LayoutDocs from '@/components/layout/docs/LayoutDocs'
import DocsSitemap from '@/components/docs/DocsSitemap'

export const Route = createFileRoute('/docs/architecture/sitemap')({
  component: DocsArchitectureSitemap,
})

function DocsArchitectureSitemap() {
  return (
    <LayoutDocs>
      <DocsSitemap />
    </LayoutDocs>
  )
}
