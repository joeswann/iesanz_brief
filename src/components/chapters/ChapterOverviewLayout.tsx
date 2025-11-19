import { DCI } from "@/types/dci";
import { getRouteApi } from '@tanstack/react-router'
import ChapterOverview from '@/components/chapters/ChapterOverview'

const routeApi = getRouteApi('/chapters/$chapterId')

const ChapterOverviewLayout: DCI = () => {
    const { chapter, content } = routeApi.useLoaderData()
    return <ChapterOverview chapter={chapter} content={content} />
}

export default ChapterOverviewLayout;
