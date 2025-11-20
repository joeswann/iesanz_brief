import { createFileRoute } from '@tanstack/react-router'
import AdminDashboardLayout from '@/components/admin/dashboard/AdminDashboardLayout'

export const Route = createFileRoute('/admin/')({
    component: AdminDashboardLayout,
})
