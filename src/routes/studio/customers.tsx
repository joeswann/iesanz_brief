import { createFileRoute } from '@tanstack/react-router'
import LayoutStudio from '@/components/layout/studio/LayoutStudio'
import StudioContentPlaceholder from '@/components/studio/StudioContentPlaceholder'

export const Route = createFileRoute('/studio/customers')({
    component: StudioCustomers,
})

function StudioCustomers() {
    return (
        <LayoutStudio>
            <StudioContentPlaceholder title="Customer Management" type="ecommerce" />
        </LayoutStudio>
    )
}
