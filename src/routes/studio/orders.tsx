import { createFileRoute } from '@tanstack/react-router'
import LayoutStudio from '@/components/layout/studio/LayoutStudio'
import StudioContentPlaceholder from '@/components/studio/StudioContentPlaceholder'

export const Route = createFileRoute('/studio/orders')({
    component: StudioOrders,
})

function StudioOrders() {
    return (
        <LayoutStudio>
            <StudioContentPlaceholder title="Orders Management" type="ecommerce" />
        </LayoutStudio>
    )
}
