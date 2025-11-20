import { createFileRoute } from '@tanstack/react-router'
import { docsGuidancePhases } from '@/data/data.docs'
import DocPage from '@/components/docs/DocPage'

export const Route = createFileRoute('/docs/guidance/phases')({
  component: () => <DocPage data={docsGuidancePhases} />,
})
