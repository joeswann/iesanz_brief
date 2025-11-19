import { DCI } from "@/types/dci";
import { getRouteApi } from '@tanstack/react-router'
import ChapterLayout from '@/components/chapters/ChapterLayout'

const routeApi = getRouteApi('/chapters/$chapterId')

const ChapterMainLayout: DCI = () => {
    const { chapter, content } = routeApi.useLoaderData()
    return <ChapterLayout chapter={chapter} description={content.description} />
}

export default ChapterMainLayout;
