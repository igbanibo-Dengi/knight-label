import ArtistProfile from '@/components/ArtistProfile'
import { client } from '@/sanity/lib/client'

async function getArtist(slug: string) {
    const query = `*[_type == "artist" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    image,
    bio,
    socialLinks,
    tags
  }`

    const artist = await client
        .withConfig({
            useCdn: false,
        })
        .fetch(query, { slug })

    return artist
}

export default async function ArtistPage({
    params,
}: {
    params: { slug: string }
}) {


    const artist = await getArtist(params.slug)

    if (!artist) {
        return <div>Artist not found</div>
    }

    return (
        <main className="container mx-auto py-6 px-4">
            <ArtistProfile artist={artist} />
        </main>
    )
}