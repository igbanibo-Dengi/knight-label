'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { ARTISTS_QUERYResult } from '@/sanity.types'

// type Artist = ARTISTS_QUERYResult[number]

interface ArtistGridProps {
    artists: ARTISTS_QUERYResult
}

export function ArtistGrid({ artists }: ArtistGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.map((artist, index) => (
                <motion.div
                    key={artist._id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <Link href={`/artists/${artist.slug?.current}`} className="group block">
                        <Card className="h-full bg-black/50 backdrop-blur-lg hover:bg-black/70 transition-all duration-300 border-[#C1A355]/20 hover:border-[#C1A355]/50">
                            <CardHeader>
                                <CardTitle className="text-2xl group-hover:text-[#C1A355] transition-colors">
                                    {artist.name}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {artist.image && (
                                    <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                                        <Image
                                            src={urlFor(artist.image).width(400).height(600).url()}
                                            alt={artist.name || "Artist image"}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </Link>
                </motion.div>
            ))}
        </div>
    )
}