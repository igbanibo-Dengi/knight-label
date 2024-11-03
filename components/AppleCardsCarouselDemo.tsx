"use client";
import React from "react";
import { Card, Carousel } from "@/components/apple-cards-carousel";
import Link from "next/link";
import { RECENT_VIDEOS_QUERYResult } from "@/sanity.types";

interface RecentVideosProps {
    videos: RECENT_VIDEOS_QUERYResult
}

export function AppleCardsCarouselDemo({ videos }: RecentVideosProps) {
    const cards = videos.map((card, index) => (
        <Card key={card._id} card={card} index={index} />
    ));

    return (
        <div className="w-full h-full py-20 bg-[url('https://images.pexels.com/photos/10376542/pexels-photo-10376542.jpeg')] bg-fixed bg-cover bg-center bg-no-repeat">
            <h2 className="max-w-7xl text-center mx-auto text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                Recent Releases
            </h2>
            <Carousel items={cards} />
            <div className="container max-w-[1200px] -translate-y-5 mx-auto flex items-start pl-16 md:pl-10">
                <Link href="#">
                    <p className="btn-shine text-xl">View All</p>
                </Link>
            </div>
        </div>
    );
}
