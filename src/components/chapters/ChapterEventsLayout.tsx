import { DCI } from "@/types/dci";
import { getRouteApi } from '@tanstack/react-router'
import ChapterEvents from '@/components/chapters/ChapterEvents'

const routeApi = getRouteApi('/chapters/$chapterId')

const ChapterEventsLayout: DCI = () => {
    const { content } = routeApi.useLoaderData()
    return <ChapterEvents events={content.events} />
}

export default ChapterEventsLayout;
