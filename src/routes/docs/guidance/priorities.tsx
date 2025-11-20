import { createFileRoute } from '@tanstack/react-router'
import { docsGuidancePriorities } from '@/data/data.docs'
import DocPage from '@/components/docs/DocPage'

export const Route = createFileRoute('/docs/guidance/priorities')({
  component: () => <DocPage data={docsGuidancePriorities} />,
})
