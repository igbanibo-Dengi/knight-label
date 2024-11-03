import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";
import { ContentCategories } from "@/components/ContentCategories";
import { Hero } from "@/components/Hero";
import { sanityFetch } from "@/sanity/lib/client";
import { RECENT_VIDEOS_QUERY } from "@/sanity/lib/queries";

export default async function Home() {

  const recentVideos = await sanityFetch({ query: RECENT_VIDEOS_QUERY })

  console.log("recent videos", recentVideos);

  return (
    <>
      <Hero />
      <AppleCardsCarouselDemo videos={recentVideos} />
      <ContentCategories />
    </>
  );
}
