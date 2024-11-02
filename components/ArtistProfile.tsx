'use client'

import { PortableText } from '@portabletext/react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { urlFor } from '@/sanity/lib/image'
import { Facebook, Instagram, Twitter, Youtube, Globe } from 'lucide-react'
import Image from 'next/image'

// Type definitions for our artist data
interface Artist {
    _id: string
    name: string
    slug: string
    image: {
        asset: {
            _ref: string
        }
        alt?: string
    }
    bio: any[] // Portable Text type
    socialLinks: {
        platform: string
        url: string
    }[]
    tags: string[]
}

// Props interface with default value
export default function ArtistProfile({ artist }: { artist: Artist } = {
    artist: {
        _id: '1',
        name: 'Amahle Zuma',
        slug: 'amahle-zuma',
        image: {
            asset: {
                _ref: 'image-1234'
            },
            alt: 'Amahle Zuma'
        },
        bio: [],
        socialLinks: [],
        tags: ['Artist', 'Music']
    }
}) {
    // Function to get the appropriate social icon
    const getSocialIcon = (platform: string) => {
        switch (platform.toLowerCase()) {
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
                <CardTitle className="text-3xl font-bold">{artist.name}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                    {artist.tags?.map((tag) => (
                        <Badge key={tag} variant="secondary">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
                {artist.image && (
                    <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
                        <Image
                            src={urlFor(artist.image).width(1200).height(675).url()}
                            alt={artist.image.alt || artist.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                <div className="prose dark:prose-invert max-w-none">
                    <PortableText value={artist.bio} />
                </div>

                {artist.socialLinks?.length > 0 && (
                    <div className="flex flex-wrap gap-4">
                        {artist.socialLinks.map((social) => (
                            <a
                                key={social.url}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                            >
                                {getSocialIcon(social.platform)}
                                <span>{social.platform}</span>
                            </a>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    )
}