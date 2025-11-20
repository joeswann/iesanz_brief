import { createFileRoute } from '@tanstack/react-router'
import AdminEventsLayout from '@/components/admin/events/AdminEventsLayout'

export const Route = createFileRoute('/admin/events')({
    component: AdminEventsLayout,
})
