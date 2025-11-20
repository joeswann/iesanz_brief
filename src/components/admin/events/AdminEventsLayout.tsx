import LayoutAdmin from '@/components/layout/admin/LayoutAdmin'
import LofiHeading from '@/components/lofi/LofiHeading'
import LofiBox from '@/components/lofi/LofiBox'
import { css } from '@linaria/core'

const pageTitle = css`
    margin-bottom: 24rem;
`

const AdminEventsLayout = () => {
    return (
        <LayoutAdmin>
            <LofiHeading level={1} className={pageTitle}>Events Management</LofiHeading>
            <LofiBox>
                <LofiHeading level={3}>Upcoming Events</LofiHeading>
                <p>Placeholder for event creation and management.</p>
            </LofiBox>
        </LayoutAdmin>
    )
}

export default AdminEventsLayout
