'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Component() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

    return (
        <div ref={containerRef} className="min-h-screen bg-black text-white">
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative h-screen flex items-center justify-center overflow-hidden"
            >
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover opacity-30"
                    >
                        <source src="/placeholder.mp4" type="video/mp4" />
                    </video>
                </div>
                <motion.div
                    style={{ opacity, scale }}
                    className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
                        Knight Entertainment
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300">
                        Where Music Meets Comedy
                    </p>
                </motion.div>
            </motion.section>

            <section className="py-24 px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-16"
                >
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-gold-500">Our Story</h2>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            Knight Entertainment cultivates artistic, thought-provoking projects across music and comedy.
                            Our company is committed to groundbreaking entertainment, visionary world-building, and the
                            celebration of unique voices in the industry.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <h3 className="text-2xl font-bold text-gold-500">Music Division</h3>
                            <p className="text-gray-300">
                                Discover our talented artists and their latest tracks. We're dedicated to producing
                                and promoting authentic, innovative music across all genres.
                            </p>
                            <Button variant="outline" className="border-gold-500 text-gold-500 hover:bg-gold-500/10">
                                Explore Artists
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <h3 className="text-2xl font-bold text-gold-500">Comedy Content</h3>
                            <p className="text-gray-300">
                                Experience hilarious original content from our talented comedians. From stand-up
                                to sketches, we're creating laughter that resonates.
                            </p>
                            <Button variant="outline" className="border-gold-500 text-gold-500 hover:bg-gold-500/10">
                                Watch Shows
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="py-24 bg-gradient-to-b from-black to-zinc-900"
            >
                <div className="max-w-5xl mx-auto px-4 text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gold-500">Join Our Journey</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Be part of our growing entertainment empire. Subscribe to stay updated with our latest
                        releases, shows, and exclusive content.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                        <Button className="w-full sm:w-auto bg-gold-500 hover:bg-gold-600 text-black">
                            Subscribe Now
                        </Button>
                        <Button variant="outline" className="w-full sm:w-auto border-gold-500 text-gold-500 hover:bg-gold-500/10">
                            Contact Us
                        </Button>
                    </div>
                </div>
            </motion.section>

            <footer className="py-12 px-4 border-t border-zinc-800">
                <div className="max-w-5xl mx-auto text-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} Knight Entertainment. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}