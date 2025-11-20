import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/docs/guidance/')({
  beforeLoad: () => {
    throw redirect({
      to: '/docs/guidance/priorities',
    })
  },
})
