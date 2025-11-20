import LayoutAdmin from '@/components/layout/admin/LayoutAdmin'
import LofiHeading from '@/components/lofi/LofiHeading'
import LofiBox from '@/components/lofi/LofiBox'
import LofiGrid from '@/components/lofi/LofiGrid'
import { TypeBody } from '@/components/type/TypeBody'
import { LofiButton } from '@/components/lofi/LofiButton'
import { css } from '@linaria/core'

const pageHeader = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32rem;
`

const sectionTitle = css`
    margin-bottom: 16rem;
    margin-top: 32rem;
`

const statCard = css`
    padding: 24rem;
    display: flex;
    flex-direction: column;
    gap: 8rem;
`

const statValue = css`
    font-size: 32rem;
    font-weight: bold;
    color: var(--primary-color);
`

const chartPlaceholder = css`
    height: 300rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f5f5f5;
    border: 1px dashed #ccc;
    border-radius: 8rem;
    color: #666;
`

const reportList = css`
    display: flex;
    flex-direction: column;
    gap: 12rem;
`

const reportItem = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16rem;
    border: 1px solid #eee;
    border-radius: 8rem;
    background: white;
`

const AdminReportsLayout = () => {
    return (
        <LayoutAdmin>
            <div className={pageHeader}>
                <LofiHeading level={1}>Reports Dashboard</LofiHeading>
                <LofiButton variant="primary">Generate New Report</LofiButton>
            </div>

            <LofiHeading level={2} className={sectionTitle}>Overview</LofiHeading>
            <LofiGrid columns={4} gap={24}>
                <LofiBox className={statCard}>
                    <TypeBody weight="bold">Total Members</TypeBody>
                    <div className={statValue}>1,245</div>
                    <TypeBody variant="small" style={{ color: 'green' }}>+5% from last month</TypeBody>
                </LofiBox>
                <LofiBox className={statCard}>
                    <TypeBody weight="bold">Active Subscriptions</TypeBody>
                    <div className={statValue}>892</div>
                    <TypeBody variant="small" style={{ color: 'green' }}>+2% from last month</TypeBody>
                </LofiBox>
                <LofiBox className={statCard}>
                    <TypeBody weight="bold">Event Registrations</TypeBody>
                    <div className={statValue}>342</div>
                    <TypeBody variant="small" style={{ color: 'red' }}>-8% from last month</TypeBody>
                </LofiBox>
                <LofiBox className={statCard}>
                    <TypeBody weight="bold">Total Revenue (YTD)</TypeBody>
                    <div className={statValue}>$124k</div>
                    <TypeBody variant="small" style={{ color: 'green' }}>+12% from last year</TypeBody>
                </LofiBox>
            </LofiGrid>

            <LofiHeading level={2} className={sectionTitle}>Analytics</LofiHeading>
            <LofiGrid columns={2} gap={24}>
                <div>
                    <TypeBody weight="bold" style={{ marginBottom: '8rem', display: 'block' }}>Membership Growth</TypeBody>
                    <div className={chartPlaceholder}>
                        [Line Chart Placeholder]
                    </div>
                </div>
                <div>
                    <TypeBody weight="bold" style={{ marginBottom: '8rem', display: 'block' }}>Revenue by Category</TypeBody>
                    <div className={chartPlaceholder}>
                        [Pie Chart Placeholder]
                    </div>
                </div>
            </LofiGrid>

            <LofiHeading level={2} className={sectionTitle}>Recent Reports</LofiHeading>
            <div className={reportList}>
                {[1, 2, 3].map((i) => (
                    <div key={i} className={reportItem}>
                        <div>
                            <TypeBody weight="bold">Monthly Financial Summary - October 2025</TypeBody>
                            <TypeBody variant="small" color="muted">Generated on Nov 1, 2025 by Admin User</TypeBody>
                        </div>
                        <div style={{ display: 'flex', gap: '12rem' }}>
                            <LofiButton variant="secondary">View</LofiButton>
                            <LofiButton variant="secondary">Download PDF</LofiButton>
                        </div>
                    </div>
                ))}
            </div>
        </LayoutAdmin>
    )
}

export default AdminReportsLayout
