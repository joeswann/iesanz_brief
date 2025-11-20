import { createFileRoute } from '@tanstack/react-router'
import AdminReportsLayout from '@/components/admin/reports/AdminReportsLayout'

export const Route = createFileRoute('/admin/reports')({
    component: AdminReportsLayout,
})
