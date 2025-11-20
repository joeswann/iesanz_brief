import { createFileRoute } from '@tanstack/react-router'
import LayoutStudio from '@/components/layout/studio/LayoutStudio'
import StudioContentPlaceholder from '@/components/studio/StudioContentPlaceholder'

export const Route = createFileRoute('/studio/events')({
  component: StudioEvents,
})

function StudioEvents() {
  return (
    <LayoutStudio>
      <StudioContentPlaceholder title="Events Management" type="cms" />
    </LayoutStudio>
  )
}
