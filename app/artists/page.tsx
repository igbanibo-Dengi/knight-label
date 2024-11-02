import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'
import Link from 'next/link'
import { ARTISTS_QUERY } from '@/sanity/lib/queries'

export default async function ArtistsPage() {

    const artists = await client
        .withConfig({
            useCdn: false,
        })
        .fetch(ARTISTS_QUERY)

    console.log(artists);


    return (
        <main className="container mx-auto py-8 px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Our Artists</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {artists.map((artist) => (
                    <Link key={artist._id} href={`/artists/${artist.slug?.current}`} className="group">
                        <Card className="h-full hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="text-2xl group-hover:text-primary transition-colors">{artist.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {artist.image && (
                                    <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
                                        <Image
                                            src={urlFor(artist.image).width(400).height(400).url()}
                                            alt={artist.name || "Artist image"}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                )}
                            </CardContent>
                            <CardFooter>
                                <div className="flex flex-wrap gap-2">
                                    {artist.tags?.map((tag: string) => (
                                        <Badge key={tag} variant="secondary">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </main>
    )
}