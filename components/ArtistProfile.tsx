'use client'

import { PortableText } from '@portabletext/react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { urlFor } from '@/sanity/lib/image'
import { Facebook, Instagram, Twitter, Youtube, Globe } from 'lucide-react'
import Image from 'next/image'
import { SINGLE_ARTISTS_QUERYResult } from '@/sanity.types'
import { TypedObject } from 'sanity'


export default function ArtistProfile({ artist }: { artist: SINGLE_ARTISTS_QUERYResult }) {
    // Function to get the appropriate social icon
    const getSocialIcon = (platform: string | undefined) => {
        switch (platform?.toLowerCase()) {
            case 'instagram':
                return <Instagram className="h-5 w-5" />
            case 'twitter':
                return <Twitter className="h-5 w-5" />
            case 'facebook':
                return <Facebook className="h-5 w-5" />
            case 'youtube':
                return <Youtube className="h-5 w-5" />
            default:
                return <Globe className="h-5 w-5" />
        }
    }

    return (
        <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle className="text-3xl font-bold">{artist?.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                {artist?.image && (
                    <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
                        <Image
                            src={urlFor(artist.image).width(1200).height(675).url()}
                            alt={artist.image.alt || "Artist image"}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                <div className="prose dark:prose-invert max-w-none">
                    {artist?.bio && <PortableText value={artist.bio as TypedObject[]} />}
                </div>

                {artist?.socialLinks?.length && (
                    <div className="flex flex-wrap gap-4">
                        {artist.socialLinks.map((social) => (
                            <a
                                key={social.url}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                            >
                                {getSocialIcon(social.platform || 'unknown')}
                                <span>{social.platform}</span>
                            </a>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
