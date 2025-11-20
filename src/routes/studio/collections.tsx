import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/studio/collections')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/studio/collections"!</div>
}
