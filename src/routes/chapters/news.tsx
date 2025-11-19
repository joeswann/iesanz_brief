import { createFileRoute } from '@tanstack/react-router'
import AllChaptersLayout from '@/components/chapters/AllChaptersLayout'
import AllChaptersNews from '@/components/chapters/AllChaptersNews'

export const Route = createFileRoute('/chapters/news')({
    component: () => (
        <AllChaptersLayout>
            <AllChaptersNews />
        </AllChaptersLayout>
    ),
})
