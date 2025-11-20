import { createFileRoute } from '@tanstack/react-router'
import AdminMembershipsLayout from '@/components/admin/memberships/AdminMembershipsLayout'

export const Route = createFileRoute('/admin/memberships')({
    component: AdminMembershipsLayout,
})
