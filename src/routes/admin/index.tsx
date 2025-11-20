import { createFileRoute } from '@tanstack/react-router'
// Force HMR update
import LayoutAdmin from '@/components/layout/admin/LayoutAdmin'
import LofiHeading from '@/components/lofi/LofiHeading'
import LofiGrid from '@/components/lofi/LofiGrid'
import LofiBox from '@/components/lofi/LofiBox'

export const Route = createFileRoute('/admin/')({
    component: AdminDashboard,
})

function AdminDashboard() {
    return (
        <LayoutAdmin>
            <LofiHeading level={1}>Admin Dashboard</LofiHeading>
            <LofiGrid columns={3}>
                <LofiBox>
                    <LofiHeading level={3}>Members</LofiHeading>
                    <p>Total Members: 1,245</p>
                    <p>New this month: 12</p>
                </LofiBox>
                <LofiBox>
                    <LofiHeading level={3}>Events</LofiHeading>
                    <p>Upcoming: 5</p>
                    <p>Registrations: 120</p>
                </LofiBox>
                <LofiBox>
                    <LofiHeading level={3}>Pending Actions</LofiHeading>
                    <p>Approvals: 3</p>
                    <p>Support Tickets: 8</p>
                </LofiBox>
            </LofiGrid>
        </LayoutAdmin>
    )
}
