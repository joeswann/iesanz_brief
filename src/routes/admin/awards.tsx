import { createFileRoute } from '@tanstack/react-router'
import LayoutAdmin from '@/components/layout/admin/LayoutAdmin'
import LofiHeading from '@/components/lofi/LofiHeading'
import LofiBox from '@/components/lofi/LofiBox'

export const Route = createFileRoute('/admin/awards')({
    component: AdminAwards,
})

function AdminAwards() {
    return (
        <LayoutAdmin>
            <LofiHeading level={1} style={{ marginBottom: '24rem' }}>Awards Management</LofiHeading>
            <LofiBox>
                <LofiHeading level={3}>Juror Management</LofiHeading>
                <p>Placeholder for juror empanelment and submission review.</p>
            </LofiBox>
        </LayoutAdmin>
    )
}
