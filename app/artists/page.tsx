"use client"

import { sanityFetch } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'
import { ARTISTS_QUERY } from '@/sanity/lib/queries'
import { motion } from 'framer-motion'

export default async function ArtistsPage() {
    const artists = await sanityFetch({ query: ARTISTS_QUERY });

    return (
        <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-16 px-4">
            <div className="container mx-auto">
                <motion.h1
                    className="text-5xl md:text-6xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Our Artists
                </motion.h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {artists.map((artist, index) => (
                        <motion.div
                            key={artist._id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={`/artists/${artist.slug?.current}`} className="group">
                                <Card className="h-full bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all duration-300 border-none">
                                    <CardHeader>
                                        <CardTitle className="text-2xl group-hover:text-purple-400 transition-colors">
                                            {artist.name}
                                        </CardTitle>
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
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </div>
                                        )}
                                        {/* <p className="text-sm text-gray-300 line-clamp-2 group-hover:text-white transition-colors">
                                            {artist.bio || "Discover more about this amazing artist."}
                                        </p> */}
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    )
}