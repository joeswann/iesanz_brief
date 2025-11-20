import { createFileRoute } from '@tanstack/react-router'
import LayoutAdmin from '@/components/layout/admin/LayoutAdmin'
import LofiHeading from '@/components/lofi/LofiHeading'
import LofiBox from '@/components/lofi/LofiBox'

export const Route = createFileRoute('/admin/financial')({
    component: AdminFinancial,
})

function AdminFinancial() {
    return (
        <LayoutAdmin>
            <LofiHeading level={1} style={{ marginBottom: '24rem' }}>Financial Overview</LofiHeading>
            <LofiBox>
                <LofiHeading level={3}>Revenue</LofiHeading>
                <p>Placeholder for financial charts and reports.</p>
            </LofiBox>
        </LayoutAdmin>
    )
}
