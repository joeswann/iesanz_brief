import LayoutAdmin from '@/components/layout/admin/LayoutAdmin'
import LofiHeading from '@/components/lofi/LofiHeading'
import LofiBox from '@/components/lofi/LofiBox'
import { css } from '@linaria/core'
import { styled } from '@linaria/react'

const pageTitle = css`
    margin-bottom: 24rem;
`

const filterBox = css`
    margin-bottom: 24rem;
    gap: 16rem;
    align-items: center;
`

const searchInput = css`
    padding: 8rem;
    border: 1px solid var(--foreground);
    min-width: 300rem;
`

const select = css`
    padding: 8rem;
    border: 1px solid var(--foreground);
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

const AdminMembersLayout = () => {
    return (
        <LayoutAdmin>
            <LofiHeading level={1} className={pageTitle}>Members</LofiHeading>

            <LofiBox className={filterBox}>
                <input type="text" placeholder="Search members..." className={searchInput} />
                <select className={select}>
                    <option value="">All Chapters</option>
                    <option value="nsw">New South Wales</option>
                    <option value="vic">Victoria</option>
                    <option value="qld">Queensland</option>
                    <option value="wa">Western Australia</option>
                    <option value="sa">South Australia</option>
                    <option value="nz">New Zealand</option>
                </select>
                <select className={select}>
                    <option value="">All Statuses</option>
                    <option value="active">Active</option>
                    <option value="lapsed">Lapsed</option>
                    <option value="pending">Pending</option>
                </select>
            </LofiBox>

            <LofiBox>
                <Table>
                    <thead>
                        <tr>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th>Chapter</Th>
                            <Th>Status</Th>
                            <Th>Joined</Th>
                            <Th>Actions</Th>
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
                            <tr key={i}>
                                <Td>{member.name}</Td>
                                <Td>{member.email}</Td>
                                <Td>{member.chapter}</Td>
                                <Td>{member.status}</Td>
                                <Td>{member.joined}</Td>
                                <Td>
                                    <ActionButton>View</ActionButton>
                                </Td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </LofiBox>
        </LayoutAdmin>
    )
}

export default AdminMembersLayout
