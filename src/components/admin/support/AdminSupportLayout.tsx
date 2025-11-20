import LayoutAdmin from '@/components/layout/admin/LayoutAdmin'
import LofiHeading from '@/components/lofi/LofiHeading'
import LofiBox from '@/components/lofi/LofiBox'
import { css } from '@linaria/core'

const pageTitle = css`
    margin-bottom: 24rem;
`

const AdminSupportLayout = () => {
    return (
        <LayoutAdmin>
            <LofiHeading level={1} className={pageTitle}>Support Tickets</LofiHeading>
            <LofiBox>
                <LofiHeading level={3}>Open Tickets</LofiHeading>
                <p>Placeholder for support ticket list.</p>
            </LofiBox>
        </LayoutAdmin>
    )
}

export default AdminSupportLayout
