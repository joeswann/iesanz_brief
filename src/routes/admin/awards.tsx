import { createFileRoute } from '@tanstack/react-router'
import AdminAwardsLayout from '@/components/admin/awards/AdminAwardsLayout'

export const Route = createFileRoute('/admin/awards')({
    component: AdminAwardsLayout,
})
