'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronDown, Star, Music, Mic, Mail } from 'lucide-react'

export default function Component() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [email, setEmail] = useState('')
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

    const parallax = useTransform(scrollYProgress, [0, 1], [0, -300])

    const starsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const stars = starsRef.current
        if (stars) {
            const handleMouseMove = (e: MouseEvent) => {
                const { clientX, clientY } = e
                const x = (clientX / window.innerWidth - 0.5) * 20
                const y = (clientY / window.innerHeight - 0.5) * 20
                stars.style.transform = `translate(${x}px, ${y}px)`
            }

            window.addEventListener('mousemove', handleMouseMove)
            return () => window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <div ref={containerRef} className="min-h-screen bg-black text-white overflow-hidden">
            <div className="fixed inset-0 z-0 opacity-50" ref={starsRef}>
                {[...Array(100)].map((_, i) => (
                    <Star
                        key={i}
                        className="absolute text-gold-500"
                        size={Math.random() * 4 + 1}
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `twinkle ${Math.random() * 5 + 5}s infinite`
                        }}
                    />
                ))}
            </div>

            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
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
                        <source src="/second.mp4" type="video/mp4" />
                    </video>
                </div>
                <motion.div
                    style={{ opacity, scale }}
                    className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6"
                >
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-5xl md:text-7xl 2xl:text-9xl font-bold tracking-tighter"
                    >
                        Our Story
                    </motion.h1>
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="text-xl md:text-2xl 2xl:text-4xl"
                    >
                        Knight Entertainment
                    </motion.p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <ChevronDown className="w-8 h-8 text-white animate-bounce" />
                </motion.div>
            </motion.section>

            <motion.section
                style={{ y: parallax }}
                className="py-0 px-4 max-w-6xl mx-auto relative z-10"
            >
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-16"
                >
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl 2xl:text-6xl font-bold text-gold-500">About Us</h2>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            At Knight Entertainment, we are passionate about creating and nurturing artistic, thought-provoking projects that inspire and entertain. Specializing in music and comedy, our mission is to redefine the boundaries of creativity and provide a platform for bold, innovative voices.
                            <br />
                            <br />
                            Our commitment lies in developing groundbreaking entertainment that resonates with diverse audiences. Through visionary world-building and storytelling, we strive to craft experiences that leave a lasting impact and foster meaningful connections.
                            <br />
                            <br />
                            Knight Entertainment celebrates individuality and originality, championing artists and creators who dare to think differently. With an unwavering focus on excellence and authenticity, we aim to be a driving force in shaping the future of the entertainment industry.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-4 border-2 border-muted-foreground border-dashed p-8 rounded-lg"
                        >
                            <Music className="w-12 h-12 text-gold-500 mb-4" />
                            <h3 className="text-2xl md:text-4xl 2xl:text-6xl font-bold text-gold-500">Music Division</h3>
                            <p className="text-gray-300">
                                Discover our talented artists and their latest tracks. We're dedicated to producing
                                and promoting authentic, innovative music across all genres.
                            </p>
                            <Button variant="outline" className="bg-transparent">
                                Explore Artists
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="space-y-4  border-2 border-muted-foreground  border-dashed p-8 rounded-lg "
                        >
                            <Mic className="w-12 h-12 text-gold-500 mb-4" />
                            <h3 className="text-2xl md:text-4xl 2xl:text-6xl font-bold text-gold-500">Comedy Content</h3>
                            <p className="text-gray-300">
                                Experience hilarious original content from our talented comedians. From stand-up
                                to sketches, we're creating laughter that resonates.
                            </p>
                            <Button variant="outline" className='bg-transparent'>
                                Watch Videos
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.section>

            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="pb-24 relative z-10"
            >
                <div className="max-w-5xl mx-auto px-4 text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gold-500">Join Our Journey</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Be part of our growing entertainment empire. Subscribe to stay updated with our latest
                        releases, shows, and exclusive content.
                    </p>
                    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full sm:w-auto bg-transparent border-gold-500 text-white placeholder-gray-400"
                        />
                        <Button type="submit" variant={"outline"} className="bg-transparent">
                            Subscribe Now
                        </Button>
                    </form>
                    <AnimatePresence>
                        {email && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-sm text-gold-500"
                            >
                                Thank you for your interest! We'll be in touch soon.
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.section>



            <style jsx global>{`
        @keyframes twinkle {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
        </div>
    )
}