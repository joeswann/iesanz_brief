import { createFileRoute } from '@tanstack/react-router'
import AdminMembersLayout from '@/components/admin/members/AdminMembersLayout'

export const Route = createFileRoute('/admin/members')({
    component: AdminMembersLayout,
})
