import { createFileRoute } from '@tanstack/react-router'
import LayoutAdmin from '@/components/layout/admin/LayoutAdmin'
import LofiHeading from '@/components/lofi/LofiHeading'
import LofiBox from '@/components/lofi/LofiBox'

export const Route = createFileRoute('/admin/support')({
  component: AdminSupport,
})

function AdminSupport() {
  return (
    <LayoutAdmin>
      <LofiHeading level={1} style={{ marginBottom: '24rem' }}>Support Tickets</LofiHeading>
      <LofiBox>
        <LofiHeading level={3}>Open Tickets</LofiHeading>
        <p>Placeholder for support ticket list.</p>
      </LofiBox>
    </LayoutAdmin>
  )
}
