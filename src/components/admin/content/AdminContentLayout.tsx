import LayoutAdmin from '@/components/layout/admin/LayoutAdmin'
import LofiHeading from '@/components/lofi/LofiHeading'
import LofiBox from '@/components/lofi/LofiBox'

const AdminContentLayout = () => {
    return (
        <LayoutAdmin>
            <LofiHeading level={1}>Content Management</LofiHeading>
            <LofiBox>
                <p>Content management has moved to the Studio.</p>
                <a href="/studio">Go to Studio</a>
            </LofiBox>
        </LayoutAdmin>
    )
}

export default AdminContentLayout
