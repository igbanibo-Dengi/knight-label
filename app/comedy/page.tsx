import { sanityFetch } from '@/sanity/lib/client'
import { VideosGrid } from '@/components/VideosGrid'
import { COMEDY_CLIP_QUERY } from '@/sanity/lib/queries'



export default async function VideosPage() {
    const videos = await sanityFetch({ query: COMEDY_CLIP_QUERY })

    return (
        <main className="min-h-screen bg-black text-white">
            <div className="relative py-16">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black/90" />

                <h1 className="text-8xl md:text-9xl font-bold mb-12 text-center tracking-tighter fixed w-full">
                    VIDEOS
                </h1>
                <div className="container mx-auto mt-40">
                    <VideosGrid videos={videos} />
                </div>
            </div>
        </main>
    )
}