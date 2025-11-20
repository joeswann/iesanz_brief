import { createFileRoute } from '@tanstack/react-router'
import LayoutAdmin from '@/components/layout/admin/LayoutAdmin'
import LofiHeading from '@/components/lofi/LofiHeading'
import LofiBox from '@/components/lofi/LofiBox'

export const Route = createFileRoute('/admin/submissions')({
    component: AdminSubmissions,
})

function AdminSubmissions() {
    return (
        <LayoutAdmin>
            <LofiHeading level={1} style={{ marginBottom: '24rem' }}>Submissions & Requests</LofiHeading>

            <LofiBox>
                <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid var(--foreground)' }}>
                            <th style={{ padding: '12rem' }}>Date</th>
                            <th style={{ padding: '12rem' }}>Member / Entity</th>
                            <th style={{ padding: '12rem' }}>Type</th>
                            <th style={{ padding: '12rem' }}>Status</th>
                            <th style={{ padding: '12rem' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { date: '2023-11-21', entity: 'David Black', type: 'Membership Upgrade Request', status: 'Pending' },
                            { date: '2023-11-17', entity: 'Emily White', type: 'Technical Paper Submission', status: 'Under Review' },
                            { date: '2023-11-15', entity: 'Sarah Jones', type: 'Fellowship Nomination', status: 'Approved' },
                        ].map((submission, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                                <td style={{ padding: '12rem' }}>{submission.date}</td>
                                <td style={{ padding: '12rem' }}>{submission.entity}</td>
                                <td style={{ padding: '12rem' }}>{submission.type}</td>
                                <td style={{ padding: '12rem', color: submission.status === 'Pending' ? 'orange' : submission.status === 'Approved' ? 'green' : 'blue' }}>{submission.status}</td>
                                <td style={{ padding: '12rem' }}>
                                    <button style={{ background: 'none', border: 'none', textDecoration: 'underline', cursor: 'pointer' }}>Review</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </LofiBox>
        </LayoutAdmin>
    )
}
