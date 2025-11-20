import LayoutAdmin from '@/components/layout/admin/LayoutAdmin'
import LofiHeading from '@/components/lofi/LofiHeading'
import LofiBox from '@/components/lofi/LofiBox'
import { css } from '@linaria/core'
import { styled } from '@linaria/react'

const pageTitle = css`
    margin-bottom: 24rem;
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
    color: ${props => props.status === 'Pending' ? 'orange' : props.status === 'Approved' ? 'green' : 'blue'};
`

const ActionButton = styled.button`
    background: none;
    border: none;
    text-decoration: underline;
    cursor: pointer;
`

const AdminSubmissionsLayout = () => {
    return (
        <LayoutAdmin>
            <LofiHeading level={1} className={pageTitle}>Submissions & Requests</LofiHeading>

            <LofiBox>
                <Table>
                    <thead>
                        <tr>
                            <Th>Date</Th>
                            <Th>Member / Entity</Th>
                            <Th>Type</Th>
                            <Th>Status</Th>
                            <Th>Actions</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { date: '2023-11-21', entity: 'David Black', type: 'Membership Upgrade Request', status: 'Pending' },
                            { date: '2023-11-17', entity: 'Emily White', type: 'Technical Paper Submission', status: 'Under Review' },
                            { date: '2023-11-15', entity: 'Sarah Jones', type: 'Fellowship Nomination', status: 'Approved' },
                        ].map((submission, i) => (
                            <tr key={i}>
                                <Td>{submission.date}</Td>
                                <Td>{submission.entity}</Td>
                                <Td>{submission.type}</Td>
                                <StatusTd status={submission.status}>{submission.status}</StatusTd>
                                <Td>
                                    <ActionButton>Review</ActionButton>
                                </Td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </LofiBox>
        </LayoutAdmin>
    )
}

export default AdminSubmissionsLayout
