import LayoutAdmin from '@/components/layout/admin/LayoutAdmin'
import { css } from '@linaria/core'
import { TypeHeading } from '@/components/type/TypeHeading'
import { TypeBody } from '@/components/type/TypeBody'
import LofiBox from '@/components/lofi/LofiBox'
import LofiGrid from '@/components/lofi/LofiGrid'

const pageTitle = css`
    margin-bottom: 24rem;
`

const sectionTitle = css`
    margin-bottom: 16rem;
    margin-top: 32rem;
`

const statCard = css`
    display: flex;
    flex-direction: column;
    gap: 8rem;
`

const statValue = css`
    font-size: 32rem;
    font-weight: 700;
    color: var(--color-primary);
`

const textSuccess = css`
    color: var(--color-success);
`

const textWarning = css`
    color: var(--color-warning);
`

const table = css`
    width: 100%;
    border-collapse: collapse;
    
    th {
        text-align: left;
        padding: 12rem;
        border-bottom: 1px solid var(--color-border);
        font-weight: 600;
        color: var(--color-text-secondary);
    }
    
    td {
        padding: 12rem;
        border-bottom: 1px solid var(--color-border-light);
    }
    
    tr:last-child td {
        border-bottom: none;
    }
`

const statusBadge = (status: string) => {
    let color = 'var(--color-text-secondary)';
    let bg = 'var(--color-bg-secondary)';

    if (status === 'Paid' || status === 'Active' || status === 'Approved') {
        color = 'var(--color-success)';
        bg = 'var(--color-success-light)';
    } else if (status === 'Pending' || status === 'Review') {
        color = 'var(--color-warning)';
        bg = 'var(--color-warning-light)';
    } else if (status === 'Failed' || status === 'Rejected') {
        color = 'var(--color-error)';
        bg = 'var(--color-error-light)';
    }

    return css`
        display: inline-block;
        padding: 4rem 8rem;
        border-radius: 4rem;
        font-size: 12rem;
        font-weight: 600;
        color: ${color};
        background-color: ${bg};
    `
}

const AdminDashboardLayout = () => {
    return (
        <LayoutAdmin>
            <div className={pageTitle}>
                <TypeHeading level={1}>Admin Dashboard</TypeHeading>
                <TypeBody color="muted">Overview of system activity and performance.</TypeBody>
            </div>

            <LofiGrid columns={4}>
                <LofiBox className={statCard}>
                    <TypeBody weight="bold" color="muted">Total Members</TypeBody>
                    <div className={statValue}>1,245</div>
                    <TypeBody variant="small" className={textSuccess}>+12 this month</TypeBody>
                </LofiBox>
                <LofiBox className={statCard}>
                    <TypeBody weight="bold" color="muted">Active Submissions</TypeBody>
                    <div className={statValue}>48</div>
                    <TypeBody variant="small" className={textWarning}>15 pending review</TypeBody>
                </LofiBox>
                <LofiBox className={statCard}>
                    <TypeBody weight="bold" color="muted">Event Registrations</TypeBody>
                    <div className={statValue}>120</div>
                    <TypeBody variant="small" color="muted">Across 5 events</TypeBody>
                </LofiBox>
                <LofiBox className={statCard}>
                    <TypeBody weight="bold" color="muted">Revenue (MTD)</TypeBody>
                    <div className={statValue}>$12,450</div>
                    <TypeBody variant="small" className={textSuccess}>+8% vs last month</TypeBody>
                </LofiBox>
            </LofiGrid>

            <div className={sectionTitle}>
                <TypeHeading level={3}>Recent Submissions</TypeHeading>
            </div>
            <LofiBox>
                <table className={table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Type</th>
                            <th>Submitted By</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><TypeBody variant="small">SUB-1024</TypeBody></td>
                            <td><TypeBody variant="small">Award Entry</TypeBody></td>
                            <td><TypeBody variant="small">Sarah Jenkins</TypeBody></td>
                            <td><TypeBody variant="small">Oct 24, 2025</TypeBody></td>
                            <td><span className={statusBadge('Pending')}>Pending</span></td>
                        </tr>
                        <tr>
                            <td><TypeBody variant="small">SUB-1023</TypeBody></td>
                            <td><TypeBody variant="small">Conference Abstract</TypeBody></td>
                            <td><TypeBody variant="small">Michael Chen</TypeBody></td>
                            <td><TypeBody variant="small">Oct 23, 2025</TypeBody></td>
                            <td><span className={statusBadge('Approved')}>Approved</span></td>
                        </tr>
                        <tr>
                            <td><TypeBody variant="small">SUB-1022</TypeBody></td>
                            <td><TypeBody variant="small">Award Entry</TypeBody></td>
                            <td><TypeBody variant="small">Emma Wilson</TypeBody></td>
                            <td><TypeBody variant="small">Oct 22, 2025</TypeBody></td>
                            <td><span className={statusBadge('Review')}>In Review</span></td>
                        </tr>
                    </tbody>
                </table>
            </LofiBox>

            <div className={sectionTitle}>
                <TypeHeading level={3}>Recent Payment Logs</TypeHeading>
            </div>
            <LofiBox>
                <table className={table}>
                    <thead>
                        <tr>
                            <th>Transaction ID</th>
                            <th>Description</th>
                            <th>User</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><TypeBody variant="small">TXN-8832</TypeBody></td>
                            <td><TypeBody variant="small">Annual Membership Renewal</TypeBody></td>
                            <td><TypeBody variant="small">David Smith</TypeBody></td>
                            <td><TypeBody variant="small">$150.00</TypeBody></td>
                            <td><TypeBody variant="small">Today, 10:23 AM</TypeBody></td>
                            <td><span className={statusBadge('Paid')}>Paid</span></td>
                        </tr>
                        <tr>
                            <td><TypeBody variant="small">TXN-8831</TypeBody></td>
                            <td><TypeBody variant="small">Event Registration: Lighting 2025</TypeBody></td>
                            <td><TypeBody variant="small">Sarah Jenkins</TypeBody></td>
                            <td><TypeBody variant="small">$450.00</TypeBody></td>
                            <td><TypeBody variant="small">Today, 09:15 AM</TypeBody></td>
                            <td><span className={statusBadge('Paid')}>Paid</span></td>
                        </tr>
                        <tr>
                            <td><TypeBody variant="small">TXN-8830</TypeBody></td>
                            <td><TypeBody variant="small">Store Purchase</TypeBody></td>
                            <td><TypeBody variant="small">James Wilson</TypeBody></td>
                            <td><TypeBody variant="small">$85.00</TypeBody></td>
                            <td><TypeBody variant="small">Yesterday, 4:45 PM</TypeBody></td>
                            <td><span className={statusBadge('Failed')}>Failed</span></td>
                        </tr>
                        <tr>
                            <td><TypeBody variant="small">TXN-8829</TypeBody></td>
                            <td><TypeBody variant="small">Annual Membership</TypeBody></td>
                            <td><TypeBody variant="small">New Member Inc.</TypeBody></td>
                            <td><TypeBody variant="small">$150.00</TypeBody></td>
                            <td><TypeBody variant="small">Yesterday, 2:30 PM</TypeBody></td>
                            <td><span className={statusBadge('Paid')}>Paid</span></td>
                        </tr>
                    </tbody>
                </table>
            </LofiBox>
        </LayoutAdmin>
    )
}

export default AdminDashboardLayout
