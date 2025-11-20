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

const ActionButton = styled.button`
    background: none;
    border: none;
    text-decoration: underline;
    cursor: pointer;
`

const AdminMembershipsLayout = () => {
    return (
        <LayoutAdmin>
            <LofiHeading level={1} className={pageTitle}>Memberships & Products</LofiHeading>

            <LofiBox>
                <Table>
                    <thead>
                        <tr>
                            <Th>Product Name</Th>
                            <Th>Category</Th>
                            <Th>Price (AUD)</Th>
                            <Th>Status</Th>
                            <Th>Actions</Th>
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
                            <tr key={i}>
                                <Td>{product.name}</Td>
                                <Td>{product.category}</Td>
                                <Td>{product.price}</Td>
                                <Td>{product.status}</Td>
                                <Td>
                                    <ActionButton>Edit</ActionButton>
                                </Td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </LofiBox>
        </LayoutAdmin>
    )
}

export default AdminMembershipsLayout
