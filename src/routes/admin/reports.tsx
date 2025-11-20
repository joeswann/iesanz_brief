import { createFileRoute } from '@tanstack/react-router'
// Force HMR update
import LayoutAdmin from '@/components/layout/admin/LayoutAdmin'
import LofiHeading from '@/components/lofi/LofiHeading'
import LofiBox from '@/components/lofi/LofiBox'

export const Route = createFileRoute('/admin/reports')({
    component: AdminReports,
})

function AdminReports() {
    return (
        <LayoutAdmin>
            <LofiHeading level={1}>Reports</LofiHeading>
            <LofiBox>
                <p>Reporting dashboard placeholder...</p>
                {/* TODO: Implement charts and reports */}
            </LofiBox>
        </LayoutAdmin>
    )
}
