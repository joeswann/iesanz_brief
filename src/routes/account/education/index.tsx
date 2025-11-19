import { createFileRoute } from '@tanstack/react-router'
import AccountEducationIndex from "@/components/account/education/AccountEducationIndex";

export const Route = createFileRoute('/account/education/')({
  component: AccountEducationIndex,
})
