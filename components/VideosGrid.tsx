'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Play, Facebook, Instagram, Twitter, Youtube, Link as LinkIcon } from 'lucide-react'
import { urlFor } from '@/sanity/lib/image'
import { format } from 'date-fns'
import type { COMEDY_CLIP_QUERYResult } from '@/sanity.types'


interface VideosGridProps {
    videos: COMEDY_CLIP_QUERYResult
}

const ITEMS_PER_PAGE = 12

const getPlatformIcon = (platform: string) => {
    switch (platform) {
        case 'facebook': return <Facebook className="w-4 h-4" />;
        case 'instagram': return <Instagram className="w-4 h-4" />;
        case 'twitter': return <Twitter className="w-4 h-4" />;
        case 'youtube': return <Youtube className="w-4 h-4" />;
        case 'tiktok': return <Facebook className="w-4 h-4" />;
        default: return <LinkIcon className="w-4 h-4" />;
    }
}

export function VideosGrid({ videos }: VideosGridProps) {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(videos.length / ITEMS_PER_PAGE)

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const currentVideos = videos.slice(startIndex, startIndex + ITEMS_PER_PAGE)

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentVideos.map((video, index) => {
                    const firstSocialLink = video.socialMediaUrls && video.socialMediaUrls.length > 0 ? video.socialMediaUrls[0].url : null;

                    return (
                        <motion.div
                            key={video._id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <a href={firstSocialLink || '#'} target="_blank" rel="noopener noreferrer" className="block">
                                <div className="relative aspect-video rounded-lg overflow-hidden bg-black/20">
                                    {video.thumbnail && video.thumbnail.asset && (
                                        <Image
                                            src={urlFor(video.thumbnail).width(480).height(270).url()}
                                            alt={video.title || "Video thumbnail"}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <motion.div
                                        className="absolute inset-0 flex items-center justify-center"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileHover={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                                            <Play className="w-8 h-8 text-black" />
                                        </div>
                                    </motion.div>
                                </div>
                            </a>
                            <div className="mt-4 space-y-2">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold text-lg group-hover:text-[#C1A355] transition-colors">
                                        {video.title}
                                    </h3>
                                    <div className="flex space-x-2">
                                        {video.socialMediaUrls?.map((social) => (
                                            <a
                                                key={social._key}
                                                href={social.url || '#'}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-[#C1A355] transition-colors"
                                            >
                                                {getPlatformIcon(social.platform || 'other')}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-sm text-gray-400">
                                    {video.releaseDate ? format(new Date(video.releaseDate), 'MMMM d, yyyy') : 'Release date not available'}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 pt-8">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${currentPage === page
                                ? 'bg-[#C1A355] text-white'
                                : 'bg-white/10 text-white hover:bg-white/20'
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}