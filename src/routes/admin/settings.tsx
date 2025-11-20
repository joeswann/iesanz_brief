import { createFileRoute } from '@tanstack/react-router'
// Force HMR update
import LayoutAdmin from '@/components/layout/admin/LayoutAdmin'
import LofiHeading from '@/components/lofi/LofiHeading'
import LofiBox from '@/components/lofi/LofiBox'

export const Route = createFileRoute('/admin/settings')({
    component: AdminSettings,
})

function AdminSettings() {
    return (
        <LayoutAdmin>
            <LofiHeading level={1}>Settings</LofiHeading>
            <LofiBox>
                <p>Global settings placeholder...</p>
                {/* TODO: Implement settings forms */}
            </LofiBox>
        </LayoutAdmin>
    )
}
