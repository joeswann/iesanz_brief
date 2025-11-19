import { DCI } from "@/types/dci";
import { getRouteApi } from '@tanstack/react-router'
import ChapterNews from '@/components/chapters/ChapterNews'

const routeApi = getRouteApi('/chapters/$chapterId')

const ChapterNewsLayout: DCI = () => {
    const { content } = routeApi.useLoaderData()
    return <ChapterNews news={content.news} />
}

export default ChapterNewsLayout;
