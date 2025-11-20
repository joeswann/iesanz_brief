import { createFileRoute } from '@tanstack/react-router'
import AdminSettingsLayout from '@/components/admin/settings/AdminSettingsLayout'

export const Route = createFileRoute('/admin/settings')({
    component: AdminSettingsLayout,
})
