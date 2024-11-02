import { sanityFetch } from '@/sanity/lib/client'
import { ARTISTS_QUERY } from '@/sanity/lib/queries'
import { ArtistGrid } from '@/components/ArtistGrid'

export default async function ArtistsPage() {
    const artists = await sanityFetch({ query: ARTISTS_QUERY })

    return (
        <main className="min-h-screen bg-black text-white">
            <div className="relative py-16 px-4">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black/90" />

                <div className="container mx-auto relative">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
                        Our <span className="text-[#C1A355]">Artists</span>
                    </h1>
                    <p className="text-lg text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                        Discover the talented individuals who bring music and comedy to life at Knight Entertainment
                    </p>

                    <ArtistGrid artists={artists} />
                </div>
            </div>
        </main>
    )
}