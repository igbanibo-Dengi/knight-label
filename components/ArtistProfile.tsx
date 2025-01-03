'use client'

import { PortableText, PortableTextComponents } from '@portabletext/react'
import { urlFor } from '@/sanity/lib/image'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { SINGLE_ARTISTS_QUERYResult } from '@/sanity.types'
import { TypedObject } from 'sanity'

const components: PortableTextComponents = {
    types: {
        code: ({ value }) => (
            <pre data-language={value.language} className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
                <code>{value.code}</code>
            </pre>
        ),
        image: ({ value }) => (
            <div className="my-8">
                <Image
                    src={urlFor(value).url()}
                    alt={value.alt || ' '}
                    width={800}
                    height={600}
                    className="rounded-lg"
                />
            </div>
        ),
    },
    block: {
        h1: ({ children }) => <h1 className="text-4xl font-bold mt-12 mb-6">{children}</h1>,
        h2: ({ children }) => <h2 className="text-3xl font-bold mt-10 mb-5">{children}</h2>,
        h3: ({ children }) => <h3 className="text-2xl font-bold mt-8 mb-4">{children}</h3>,
        normal: ({ children }) => <p className="mb-6 text-lg leading-relaxed">{children}</p>,
        blockquote: ({ children }) => <blockquote className="border-l-4 border-white/20 pl-6 italic my-8 text-xl">{children}</blockquote>,
    },
    marks: {
        strong: ({ children }) => <strong className="font-bold">{children}</strong>,
        em: ({ children }) => <em className="italic">{children}</em>,
        underline: ({ children }) => <span className="underline">{children}</span>,
    },
}

export default function ArtistProfile({ artist }: { artist: SINGLE_ARTISTS_QUERYResult }) {
    if (!artist) return null;

    return (
        <article className="max-w-4xl mx-auto px-4 py-16">
            <header className="mb-16 text-center">
                <h1 className="text-6xl font-bold tracking-tighter mb-8">{artist.name?.toUpperCase()}</h1>
                {artist.image && (
                    <div className="relative w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden">
                        <Image
                            src={urlFor(artist.image).width(500).height(500).url()}
                            alt={artist.name || "Artist image"}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                {artist.socialLinks?.length && (
                    <div className="flex justify-center gap-6 mb-8">
                        {artist.socialLinks.map((social) => (
                            <a
                                key={social._key}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/60 hover:text-white transition-colors"
                                aria-label={`${artist.name} on ${social.platform}`}
                            >
                                <SocialIcon platform={social.platform} />
                            </a>
                        ))}
                    </div>
                )}
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                {artist.bio && (
                    <PortableText
                        value={artist.bio as TypedObject[]}
                        components={components}
                    />
                )}
            </div>

            <footer className="mt-16 text-center">
                <a
                    href="/artists"
                    className="inline-flex items-center gap-2 text-lg text-white/60 hover:text-white transition-colors"
                >
                    BACK TO ALL ARTISTS
                    <ArrowRight className="w-5 h-5" />
                </a>
            </footer>
        </article>
    )
}

function SocialIcon({ platform }: { platform?: string }) {
    switch (platform?.toLowerCase()) {
        case 'instagram':
            return (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            )
        case 'twitter':
            return (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            )
        case 'facebook':
            return (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            )
        case 'youtube':
            return (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
            )
        default:
            return (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            )
    }
}