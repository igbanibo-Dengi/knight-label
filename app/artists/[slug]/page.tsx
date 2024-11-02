import ArtistProfile from '@/components/ArtistProfile'
import { client } from '@/sanity/lib/client'
import { SINGLE_ARTISTS_QUERY } from '@/sanity/lib/queries'


export default async function ArtistPage({
    params,
}: {
    params: { slug: string }
}) {
    const { slug } = params

    const artist = await client
        .withConfig({
            useCdn: false,
        })
        .fetch(SINGLE_ARTISTS_QUERY, { slug })

    if (!artist) {
        return <div>Artist not found</div>
    }

    return (
        <main className="container mx-auto py-6 px-4">
            <ArtistProfile artist={artist} />
        </main>
    )
}