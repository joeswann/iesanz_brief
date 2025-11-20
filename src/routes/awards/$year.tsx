import { createFileRoute } from '@tanstack/react-router'
import AwardsLayout from '@/components/awards/AwardsLayout'

import { z } from 'zod'

export const Route = createFileRoute('/awards/$year')({
  validateSearch: z.object({
    category: z.string().optional(),
  }),
  component: AwardsYearPage,
})

function AwardsYearPage() {
  const { year } = Route.useParams()
  const { category } = Route.useSearch()
  return <AwardsLayout year={year} category={category} />
}
