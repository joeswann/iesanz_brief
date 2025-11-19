import { createFileRoute } from '@tanstack/react-router'
import AllChaptersLayout from '@/components/chapters/AllChaptersLayout'
import AllChaptersEvents from '@/components/chapters/AllChaptersEvents'

export const Route = createFileRoute('/chapters/events')({
  component: () => (
    <AllChaptersLayout>
      <AllChaptersEvents />
    </AllChaptersLayout>
  ),
})
