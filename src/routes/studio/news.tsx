import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/studio/news')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/studio/news"!</div>
}
