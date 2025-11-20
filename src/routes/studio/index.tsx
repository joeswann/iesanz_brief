import { createFileRoute } from '@tanstack/react-router'
import StudioDashboardLayout from '@/components/studio/StudioDashboardLayout'

export const Route = createFileRoute('/studio/')({
    component: StudioDashboardLayout,
})
