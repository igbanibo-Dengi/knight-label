'use client'

import { PortableText, PortableTextComponents } from '@portabletext/react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { urlFor } from '@/sanity/lib/image'
import { Facebook, Instagram, Twitter, Youtube, Globe } from 'lucide-react'
import Image from 'next/image'
import { SINGLE_ARTISTS_QUERYResult } from '@/sanity.types'
import { TypedObject } from 'sanity'

const components: PortableTextComponents = {
    types: {
        code: ({ value }) => (
            <pre data-language={value.language}>
                <code>{value.code}</code>
            </pre>
        ),
        image: ({ value }) => (
            <Image
                src={urlFor(value).url()}
                alt={value.alt || ' '}
                width={500}
                height={300}
                className="rounded-lg"
            />
        ),
    },
    block: {
        h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
        h2: ({ children }) => <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>,
        h3: ({ children }) => <h3 className="text-xl font-bold mt-4 mb-2">{children}</h3>,
        normal: ({ children }) => <p className="mb-4">{children}</p>,
        blockquote: ({ children }) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>,
    },
    marks: {
        strong: ({ children }) => <strong className="font-bold">{children}</strong>,
        em: ({ children }) => <em className="italic">{children}</em>,
        underline: ({ children }) => <span className="underline">{children}</span>,
    },
}

export default function ArtistProfile({ artist }: { artist: SINGLE_ARTISTS_QUERYResult }) {
    console.log(artist);

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
                    {artist?.bio && (
                        <PortableText
                            value={artist.bio as TypedObject[]}
                            components={components}
                        />
                    )}
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