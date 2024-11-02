import ArtistProfile from '@/components/ArtistProfile'
import { sanityFetch } from '@/sanity/lib/client'
import { SINGLE_ARTISTS_QUERY } from '@/sanity/lib/queries'

export const revalidate = 20

export default async function ArtistPage({
    params,
}: {
    params: { slug: string }
}) {
    const { slug } = params

    const artist = await sanityFetch({ query: SINGLE_ARTISTS_QUERY, params: { slug } });


    if (!artist) {
        return <div>Artist not found</div>
    }

    return (
        <main className="container mx-auto py-6 px-4">
            <ArtistProfile artist={artist} />
        </main>
    )
}