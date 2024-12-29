import { sanityFetch } from '@/sanity/lib/client'
import { ARTISTS_QUERY } from '@/sanity/lib/queries'
import { ArtistGrid } from '@/components/ArtistGrid'

export default async function ArtistsPage() {
    const artists = await sanityFetch({ query: ARTISTS_QUERY })

    return (
        <main className="min-h-screen bg-black text-white">
            <div className="relative py-16">
                <h1 className="text-8xl md:text-9xl font-bold mb-12 text-center tracking-tighter fixed w-full">
                    ARTISTS
                </h1>
                <div className="container mx-auto mt-40">
                    <ArtistGrid artists={artists} />
                </div>
            </div>
        </main>
    )
}