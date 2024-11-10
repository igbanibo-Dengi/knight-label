'use client'

import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const images = [
    "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
    "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
    "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
    "https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
]

export function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 5000) // Change image every 5 seconds

        return () => clearInterval(timer)
    }, [])

    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 0.5, 0.3])

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[url('https://images.pexels.com/photos/114820/pexels-photo-114820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-fixed bg-cover bg-opacity-50">
            {/* <AnimatePresence initial={false}>
                <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-fixed"
                >
                    <Image
                        src={images[currentImageIndex]}
                        alt={`Knight Entertainment Hero ${currentImageIndex + 1}`}
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </motion.div>
            </AnimatePresence> */}
            <div className="relative z-10 text-center bg-black/80 size-full flex items-center justify-center">
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    <motion.h1
                        className="text-5xl md:text-6xl xl:text-8xl font-bold mb-4 text-[#C1A355]"
                        // initial={{ opacity: 0, y: 20 }}
                        // animate={{ opacity: 1, y: 0 }}
                        // transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ opacity, scale }}
                    >
                        Knight <br /> Entertainment <br /> Empire
                    </motion.h1>
                    <motion.p
                        className="text-xl mb-8 text-white"
                    // initial={{ opacity: 0, y: 20 }}
                    // animate={{ opacity: 1, y: 0 }}
                    // transition={{ duration: 0.8, delay: 0.4 }}
                    // style={{ opacity, scale }}
                    >
                        Where Music Meets Comedy
                    </motion.p>
                    <motion.div
                    // initial={{ opacity: 0, y: 20 }}
                    // animate={{ opacity: 1, y: 0 }}
                    // transition={{ duration: 0.8, delay: 0.6 }}
                    // style={{ opacity, scale }}
                    >
                        <Button className="" size={"lg"}>
                            Explore Our Content
                        </Button>
                    </motion.div>
                </motion.section>
            </div>
            {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                        onClick={() => setCurrentImageIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div> */}
        </section>
    )
}