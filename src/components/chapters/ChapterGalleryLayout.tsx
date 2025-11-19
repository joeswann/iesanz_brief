import { DCI } from "@/types/dci";
import { getRouteApi } from '@tanstack/react-router'
import ChapterGallery from '@/components/chapters/ChapterGallery'

const routeApi = getRouteApi('/chapters/$chapterId')

const ChapterGalleryLayout: DCI = () => {
    const { content } = routeApi.useLoaderData()
    return <ChapterGallery gallery={content.gallery} />
}

export default ChapterGalleryLayout;
