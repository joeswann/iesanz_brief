import LayoutAdmin from '@/components/layout/admin/LayoutAdmin'
import LofiHeading from '@/components/lofi/LofiHeading'
import LofiBox from '@/components/lofi/LofiBox'
import { css } from '@linaria/core'

const pageTitle = css`
    margin-bottom: 24rem;
`

const AdminAwardsLayout = () => {
    return (
        <LayoutAdmin>
            <LofiHeading level={1} className={pageTitle}>Awards Management</LofiHeading>
            <LofiBox>
                <LofiHeading level={3}>Juror Management</LofiHeading>
                <p>Placeholder for juror empanelment and submission review.</p>
            </LofiBox>
        </LayoutAdmin>
    )
}

export default AdminAwardsLayout
