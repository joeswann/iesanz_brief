import { createFileRoute } from '@tanstack/react-router'
import LayoutStudio from '@/components/layout/studio/LayoutStudio'
import StudioContentPlaceholder from '@/components/studio/StudioContentPlaceholder'

export const Route = createFileRoute('/studio/awards')({
  component: StudioAwards,
})

function StudioAwards() {
  return (
    <LayoutStudio>
      <StudioContentPlaceholder title="Awards Management" type="cms" />
    </LayoutStudio>
  )
}
