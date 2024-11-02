"use client";
import React from "react";
import { Card, Carousel } from "@/components/apple-cards-carousel";
import Link from "next/link";

export function AppleCardsCarouselDemo() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <div className="w-full h-full py-20 bg-[url('https://images.pexels.com/photos/10376542/pexels-photo-10376542.jpeg')] bg-fixed bg-cover bg-center bg-no-repeat">
            <h2 className="max-w-7xl text-center pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                Recent Releases
            </h2>
            <Carousel items={cards} />
            <div className="container max-w-[1200px] -translate-y-5 mx-auto flex items-start pl-10">
                <Link href="#" className="btn-shine">View All</Link>
            </div>
        </div>
    );
}

const data = [
    {
        category: "Jazz",
        title: "Smooth Jazz Evenings",
        artist: "Blue Horizon Quartet",
        src: "https://images.pexels.com/photos/164907/pexels-photo-164907.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&dpr=1",
        url: "#",
    },
    {
        category: "Rock",
        title: "Electric Nights with Rock Legends",
        artist: "The Rolling Waves",
        src: "https://images.pexels.com/photos/20385068/pexels-photo-20385068/free-photo-of-tape-from-vintage-cassette.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        url: "#",
    },
    {
        category: "Pop",
        title: "Top Hits of the Year",
        artist: "Star Glow",
        src: "https://images.pexels.com/photos/247931/pexels-photo-247931.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&dpr=1",
        url: "#",
    },
    {
        category: "Hip-Hop",
        title: "Beats and Rhymes",
        artist: "Beatz Nation",
        src: "https://images.pexels.com/photos/1667414/pexels-photo-1667414.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&dpr=1",
        url: "#",
    },
    {
        category: "Classical",
        title: "Timeless Symphony",
        artist: "Orchestra Royale",
        src: "https://images.pexels.com/photos/217948/pexels-photo-217948.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&dpr=1",
        url: "#",
    },
    {
        category: "Electronic",
        title: "High Energy Beats",
        artist: "Synth Vibe",
        src: "https://images.pexels.com/photos/1440298/pexels-photo-1440298.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&dpr=1",
        url: "#",
    },
];
