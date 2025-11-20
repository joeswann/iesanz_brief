import { createFileRoute } from '@tanstack/react-router'
import LayoutStudio from '@/components/layout/studio/LayoutStudio'
import StudioContentPlaceholder from '@/components/studio/StudioContentPlaceholder'

export const Route = createFileRoute('/studio/pages')({
    component: StudioPages,
})

function StudioPages() {
    return (
        <LayoutStudio>
            <StudioContentPlaceholder title="Pages Management" type="cms" />
        </LayoutStudio>
    )
}
