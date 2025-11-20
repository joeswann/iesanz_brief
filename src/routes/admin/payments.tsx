import { createFileRoute } from '@tanstack/react-router'
import AdminPaymentsLayout from '@/components/admin/payments/AdminPaymentsLayout'

export const Route = createFileRoute('/admin/payments')({
    component: AdminPaymentsLayout,
})
