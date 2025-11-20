import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/studio/products')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/studio/products"!</div>
}
