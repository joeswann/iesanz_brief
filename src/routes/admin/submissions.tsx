import { createFileRoute } from '@tanstack/react-router'
import AdminSubmissionsLayout from '@/components/admin/submissions/AdminSubmissionsLayout'

export const Route = createFileRoute('/admin/submissions')({
    component: AdminSubmissionsLayout,
})
