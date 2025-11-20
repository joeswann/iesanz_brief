import { createFileRoute } from '@tanstack/react-router'
// Force HMR update
import LayoutAdmin from '@/components/layout/admin/LayoutAdmin'
import LofiHeading from '@/components/lofi/LofiHeading'
import LofiBox from '@/components/lofi/LofiBox'

export const Route = createFileRoute('/admin/members')({
    component: AdminMembers,
})

function AdminMembers() {
    return (
        <LayoutAdmin>
            <LofiHeading level={1}>Member Management</LofiHeading>
            <LofiBox>
                <p>Member list placeholder...</p>
                {/* TODO: Implement member table */}
            </LofiBox>
        </LayoutAdmin>
    )
}
