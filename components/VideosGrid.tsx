'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Facebook, Instagram, Twitter, Youtube, Link as LinkIcon, X } from 'lucide-react'
import { urlFor } from '@/sanity/lib/image'
import { format } from 'date-fns'
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
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
        case 'tiktok': return <Youtube className="w-4 h-4" />;
        default: return <LinkIcon className="w-4 h-4" />;
    }
}

export function VideosGrid({ videos }: VideosGridProps) {
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedVideo, setSelectedVideo] = useState<COMEDY_CLIP_QUERYResult[0] | null>(null)
    const totalPages = Math.ceil(videos.length / ITEMS_PER_PAGE)

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const currentVideos = videos.slice(startIndex, startIndex + ITEMS_PER_PAGE)

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentVideos.map((video, index) => (
                    <motion.div
                        key={video._id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="group cursor-pointer"
                        onClick={() => setSelectedVideo(video)}
                    >
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
                                            onClick={(e) => e.stopPropagation()}
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
                ))}
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 pt-8">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <Button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            variant={currentPage === page ? "default" : "outline"}
                            size="icon"
                            className="w-8 h-8 rounded-full"
                        >
                            {page}
                        </Button>
                    ))}
                </div>
            )}

            <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && setSelectedVideo(null)}>
                <DialogContent className="w-fit max-h-screen">
                    <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close</span>
                    </DialogClose>
                    <AnimatePresence>
                        {selectedVideo && (
                            <motion.div
                                key={selectedVideo._id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <h2 className="text-lg font-semibold mb-4">{selectedVideo.title}</h2>
                                {selectedVideo.videoFile && selectedVideo.videoFile.asset && (
                                    <video controls className="w-full max-h-[500px] rounded-lg mb-4">
                                        <source
                                            src={`https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${selectedVideo.videoFile.asset._ref.replace('file-', '').replace('-mp4', '.mp4')}`}
                                            type="video/mp4"
                                        />
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                                <div className="flex justify-between items-center">
                                    <p className="text-sm text-gray-400">
                                        {selectedVideo.releaseDate
                                            ? format(new Date(selectedVideo.releaseDate), 'MMMM d, yyyy')
                                            : 'Release date not available'}
                                    </p>
                                    <div className="flex space-x-2">
                                        {selectedVideo.socialMediaUrls?.map((social) => (
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
                            </motion.div>
                        )}
                    </AnimatePresence>
                </DialogContent>
            </Dialog>
        </div>
    )
}