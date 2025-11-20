import { createFileRoute } from '@tanstack/react-router'
import LayoutAdmin from '@/components/layout/admin/LayoutAdmin'
import LofiHeading from '@/components/lofi/LofiHeading'
import LofiBox from '@/components/lofi/LofiBox'

export const Route = createFileRoute('/admin/events')({
    component: AdminEvents,
})

function AdminEvents() {
    return (
        <LayoutAdmin>
            <LofiHeading level={1} style={{ marginBottom: '24rem' }}>Events Management</LofiHeading>
            <LofiBox>
                <LofiHeading level={3}>Upcoming Events</LofiHeading>
                <p>Placeholder for event creation and management.</p>
            </LofiBox>
        </LayoutAdmin>
    )
}
