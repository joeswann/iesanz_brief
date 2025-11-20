import { createFileRoute } from '@tanstack/react-router'
import LayoutAdmin from '@/components/layout/admin/LayoutAdmin'
import LofiHeading from '@/components/lofi/LofiHeading'
import LofiBox from '@/components/lofi/LofiBox'

export const Route = createFileRoute('/admin/payments')({
    component: AdminPayments,
})

function AdminPayments() {
    return (
        <LayoutAdmin>
            <LofiHeading level={1} style={{ marginBottom: '24rem' }}>Financial Overview</LofiHeading>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24rem', marginBottom: '32rem' }}>
                <LofiBox>
                    <LofiHeading level={3}>Revenue (YTD)</LofiHeading>
                    <div style={{ fontSize: '32rem', fontWeight: 'bold', margin: '16rem 0' }}>$145,200</div>
                    <p>+12% vs last year</p>
                </LofiBox>
                <LofiBox>
                    <LofiHeading level={3}>Outstanding Invoices</LofiHeading>
                    <div style={{ fontSize: '32rem', fontWeight: 'bold', margin: '16rem 0', color: 'red' }}>$12,450</div>
                    <p>15 invoices overdue</p>
                </LofiBox>
            </div>

            <LofiHeading level={2} style={{ marginBottom: '16rem' }}>Payment & Subscription Log</LofiHeading>
            <LofiBox>
                <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid var(--foreground)' }}>
                            <th style={{ padding: '12rem' }}>Date</th>
                            <th style={{ padding: '12rem' }}>Member / Entity</th>
                            <th style={{ padding: '12rem' }}>Description</th>
                            <th style={{ padding: '12rem' }}>Amount</th>
                            <th style={{ padding: '12rem' }}>Status</th>
                            <th style={{ padding: '12rem' }}>Invoice</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { date: '2023-11-20', entity: 'John Doe', description: 'Full Membership Renewal', amount: '$250.00', status: 'Paid', invoice: '#INV-001' },
                            { date: '2023-11-19', entity: 'Acme Corp', description: 'Gold Sponsorship Package', amount: '$5,000.00', status: 'Pending', invoice: '#INV-002' },
                            { date: '2023-11-18', entity: 'Jane Smith', description: 'Awards Dinner Ticket', amount: '$150.00', status: 'Paid', invoice: '#INV-003' },
                            { date: '2023-11-18', entity: 'Robert Brown', description: 'Student Membership', amount: '$50.00', status: 'Failed', invoice: '#INV-004' },
                        ].map((log, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                                <td style={{ padding: '12rem' }}>{log.date}</td>
                                <td style={{ padding: '12rem' }}>{log.entity}</td>
                                <td style={{ padding: '12rem' }}>{log.description}</td>
                                <td style={{ padding: '12rem' }}>{log.amount}</td>
                                <td style={{ padding: '12rem', color: log.status === 'Failed' ? 'red' : log.status === 'Pending' ? 'orange' : 'green' }}>{log.status}</td>
                                <td style={{ padding: '12rem' }}>
                                    <button style={{ background: 'none', border: 'none', textDecoration: 'underline', cursor: 'pointer' }}>{log.invoice}</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </LofiBox>
        </LayoutAdmin>
    )
}
