import { createFileRoute } from '@tanstack/react-router'
// Force HMR update
import LayoutAdmin from '@/components/layout/admin/LayoutAdmin'
import LofiHeading from '@/components/lofi/LofiHeading'
import LofiBox from '@/components/lofi/LofiBox'

export const Route = createFileRoute('/admin/members')({
    component: AdminMembers,
})

function AdminMembers() {
    return (
        <LayoutAdmin>
            <LofiHeading level={1} style={{ marginBottom: '24rem' }}>Members</LofiHeading>

            <LofiBox style={{ marginBottom: '24rem', gap: '16rem', alignItems: 'center' }}>
                <input type="text" placeholder="Search members..." style={{ padding: '8rem', border: '1px solid var(--foreground)', minWidth: '300rem' }} />
                <select style={{ padding: '8rem', border: '1px solid var(--foreground)' }}>
                    <option value="">All Chapters</option>
                    <option value="nsw">New South Wales</option>
                    <option value="vic">Victoria</option>
                    <option value="qld">Queensland</option>
                    <option value="wa">Western Australia</option>
                    <option value="sa">South Australia</option>
                    <option value="nz">New Zealand</option>
                </select>
                <select style={{ padding: '8rem', border: '1px solid var(--foreground)' }}>
                    <option value="">All Statuses</option>
                    <option value="active">Active</option>
                    <option value="lapsed">Lapsed</option>
                    <option value="pending">Pending</option>
                </select>
            </LofiBox>

            <LofiBox>
                <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid var(--foreground)' }}>
                            <th style={{ padding: '12rem' }}>Name</th>
                            <th style={{ padding: '12rem' }}>Email</th>
                            <th style={{ padding: '12rem' }}>Chapter</th>
                            <th style={{ padding: '12rem' }}>Status</th>
                            <th style={{ padding: '12rem' }}>Joined</th>
                            <th style={{ padding: '12rem' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { name: 'John Doe', email: 'john@example.com', chapter: 'Victoria', status: 'Active', joined: '2023-01-15' },
                            { name: 'Jane Smith', email: 'jane@example.com', chapter: 'New South Wales', status: 'Active', joined: '2023-03-22' },
                            { name: 'Robert Brown', email: 'robert@example.com', chapter: 'New Zealand', status: 'Lapsed', joined: '2022-11-05' },
                            { name: 'Emily White', email: 'emily@example.com', chapter: 'Queensland', status: 'Pending', joined: '2023-11-10' },
                            { name: 'Michael Green', email: 'michael@example.com', chapter: 'Western Australia', status: 'Active', joined: '2023-06-30' },
                        ].map((member, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                                <td style={{ padding: '12rem' }}>{member.name}</td>
                                <td style={{ padding: '12rem' }}>{member.email}</td>
                                <td style={{ padding: '12rem' }}>{member.chapter}</td>
                                <td style={{ padding: '12rem' }}>{member.status}</td>
                                <td style={{ padding: '12rem' }}>{member.joined}</td>
                                <td style={{ padding: '12rem' }}>
                                    <button style={{ background: 'none', border: 'none', textDecoration: 'underline', cursor: 'pointer' }}>View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </LofiBox>
        </LayoutAdmin>
    )
}
