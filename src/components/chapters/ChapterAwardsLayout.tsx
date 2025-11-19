import { DCI } from "@/types/dci";
import { getRouteApi } from '@tanstack/react-router'
import ChapterAwards from '@/components/chapters/ChapterAwards'

const routeApi = getRouteApi('/chapters/$chapterId')

const ChapterAwardsLayout: DCI = () => {
    const { content } = routeApi.useLoaderData()
    return <ChapterAwards awards={content.awards} />
}

export default ChapterAwardsLayout;
