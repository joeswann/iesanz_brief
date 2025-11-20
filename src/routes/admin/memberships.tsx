import { createFileRoute } from '@tanstack/react-router'
import LayoutAdmin from '@/components/layout/admin/LayoutAdmin'
import LofiHeading from '@/components/lofi/LofiHeading'
import LofiBox from '@/components/lofi/LofiBox'

export const Route = createFileRoute('/admin/memberships')({
    component: AdminMemberships,
})

function AdminMemberships() {
    return (
        <LayoutAdmin>
            <LofiHeading level={1} style={{ marginBottom: '24rem' }}>Memberships & Products</LofiHeading>

            <LofiBox>
                <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid var(--foreground)' }}>
                            <th style={{ padding: '12rem' }}>Product Name</th>
                            <th style={{ padding: '12rem' }}>Category</th>
                            <th style={{ padding: '12rem' }}>Price (AUD)</th>
                            <th style={{ padding: '12rem' }}>Status</th>
                            <th style={{ padding: '12rem' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { name: 'Full Membership (Annual)', category: 'Membership', price: '$250.00', status: 'Active' },
                            { name: 'Student Membership', category: 'Membership', price: '$50.00', status: 'Active' },
                            { name: 'Awards Dinner Ticket (Early Bird)', category: 'Event', price: '$120.00', status: 'Closed' },
                            { name: 'Awards Dinner Ticket (Standard)', category: 'Event', price: '$150.00', status: 'Active' },
                            { name: 'Gold Sponsorship Package', category: 'Sponsorship', price: '$5,000.00', status: 'Active' },
                            { name: 'Technical Paper Submission', category: 'Publication', price: '$0.00', status: 'Active' },
                        ].map((product, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                                <td style={{ padding: '12rem' }}>{product.name}</td>
                                <td style={{ padding: '12rem' }}>{product.category}</td>
                                <td style={{ padding: '12rem' }}>{product.price}</td>
                                <td style={{ padding: '12rem' }}>{product.status}</td>
                                <td style={{ padding: '12rem' }}>
                                    <button style={{ background: 'none', border: 'none', textDecoration: 'underline', cursor: 'pointer' }}>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </LofiBox>
        </LayoutAdmin>
    )
}
