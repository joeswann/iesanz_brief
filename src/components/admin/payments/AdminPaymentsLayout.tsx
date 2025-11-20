import LayoutAdmin from '@/components/layout/admin/LayoutAdmin'
import LofiHeading from '@/components/lofi/LofiHeading'
import LofiBox from '@/components/lofi/LofiBox'
import { css } from '@linaria/core'
import { styled } from '@linaria/react'

const pageTitle = css`
    margin-bottom: 24rem;
`

const statsGrid = css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24rem;
    margin-bottom: 32rem;
`

const statValue = css`
    font-size: 32rem;
    font-weight: bold;
    margin: 16rem 0;
`

const statValueRed = css`
    font-size: 32rem;
    font-weight: bold;
    margin: 16rem 0;
    color: red;
`

const sectionTitle = css`
    margin-bottom: 16rem;
`

const Table = styled.table`
    width: 100%;
    text-align: left;
    border-collapse: collapse;
`

const Th = styled.th`
    padding: 12rem;
    border-bottom: 1px solid var(--foreground);
`

const Td = styled.td`
    padding: 12rem;
    border-bottom: 1px solid #eee;
`

const StatusTd = styled(Td) <{ status: string }>`
    color: ${props => props.status === 'Failed' ? 'red' : props.status === 'Pending' ? 'orange' : 'green'};
`

const InvoiceButton = styled.button`
    background: none;
    border: none;
    text-decoration: underline;
    cursor: pointer;
`

const AdminPaymentsLayout = () => {
    return (
        <LayoutAdmin>
            <LofiHeading level={1} className={pageTitle}>Financial Overview</LofiHeading>

            <div className={statsGrid}>
                <LofiBox>
                    <LofiHeading level={3}>Revenue (YTD)</LofiHeading>
                    <div className={statValue}>$145,200</div>
                    <p>+12% vs last year</p>
                </LofiBox>
                <LofiBox>
                    <LofiHeading level={3}>Outstanding Invoices</LofiHeading>
                    <div className={statValueRed}>$12,450</div>
                    <p>15 invoices overdue</p>
                </LofiBox>
            </div>

            <LofiHeading level={2} className={sectionTitle}>Payment & Subscription Log</LofiHeading>
            <LofiBox>
                <Table>
                    <thead>
                        <tr>
                            <Th>Date</Th>
                            <Th>Member / Entity</Th>
                            <Th>Description</Th>
                            <Th>Amount</Th>
                            <Th>Status</Th>
                            <Th>Invoice</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { date: '2023-11-20', entity: 'John Doe', description: 'Full Membership Renewal', amount: '$250.00', status: 'Paid', invoice: '#INV-001' },
                            { date: '2023-11-19', entity: 'Acme Corp', description: 'Gold Sponsorship Package', amount: '$5,000.00', status: 'Pending', invoice: '#INV-002' },
                            { date: '2023-11-18', entity: 'Jane Smith', description: 'Awards Dinner Ticket', amount: '$150.00', status: 'Paid', invoice: '#INV-003' },
                            { date: '2023-11-18', entity: 'Robert Brown', description: 'Student Membership', amount: '$50.00', status: 'Failed', invoice: '#INV-004' },
                        ].map((log, i) => (
                            <tr key={i}>
                                <Td>{log.date}</Td>
                                <Td>{log.entity}</Td>
                                <Td>{log.description}</Td>
                                <Td>{log.amount}</Td>
                                <StatusTd status={log.status}>{log.status}</StatusTd>
                                <Td>
                                    <InvoiceButton>{log.invoice}</InvoiceButton>
                                </Td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </LofiBox>
        </LayoutAdmin>
    )
}

export default AdminPaymentsLayout
