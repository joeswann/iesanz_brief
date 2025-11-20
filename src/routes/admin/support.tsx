import { createFileRoute } from '@tanstack/react-router'
import AdminSupportLayout from '@/components/admin/support/AdminSupportLayout'

export const Route = createFileRoute('/admin/support')({
  component: AdminSupportLayout,
})
