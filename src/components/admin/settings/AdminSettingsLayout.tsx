import LayoutAdmin from '@/components/layout/admin/LayoutAdmin'
import LofiHeading from '@/components/lofi/LofiHeading'
import LofiBox from '@/components/lofi/LofiBox'
import { css } from '@linaria/core'

const pageTitle = css`
    margin-bottom: 24rem;
`

const AdminSettingsLayout = () => {
    return (
        <LayoutAdmin>
            <LofiHeading level={1} className={pageTitle}>Settings</LofiHeading>
            <LofiBox>
                <p>Global settings placeholder...</p>
                {/* TODO: Implement settings forms */}
            </LofiBox>
        </LayoutAdmin>
    )
}

export default AdminSettingsLayout
