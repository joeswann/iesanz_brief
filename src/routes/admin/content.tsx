import { createFileRoute } from '@tanstack/react-router'
import AdminContentLayout from '@/components/admin/content/AdminContentLayout'

export const Route = createFileRoute('/admin/content')({
  component: AdminContentLayout,
})
