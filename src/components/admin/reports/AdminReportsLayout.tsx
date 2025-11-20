import LayoutAdmin from '@/components/layout/admin/LayoutAdmin'
import LofiHeading from '@/components/lofi/LofiHeading'
import LofiBox from '@/components/lofi/LofiBox'
import { css } from '@linaria/core'

const pageTitle = css`
    margin-bottom: 24rem;
`

const AdminReportsLayout = () => {
    return (
        <LayoutAdmin>
            <LofiHeading level={1} className={pageTitle}>Reports</LofiHeading>
            <LofiBox>
                <p>Reporting dashboard placeholder...</p>
                {/* TODO: Implement charts and reports */}
            </LofiBox>
        </LayoutAdmin>
    )
}

export default AdminReportsLayout
